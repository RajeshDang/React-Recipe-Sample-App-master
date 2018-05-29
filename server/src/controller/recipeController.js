/**
 * Created by IMFCORP\mohanpratap.singh on 9/9/17.
 */
'use strict';
var Q = require('q');
var express = require('express');
var recipeService = require('../service/recipeService');
var router = express.Router();
/**
 * Create a Recipe
 * @param req
 * @param res
 * @returns {Promise|Promise.<TResult>|*}
 */
router.post('/recipe', function (req, res) {
  var title = req.body.title;
  if (title != null && title != 'null' && title != '') {
    return recipeService.createRecipe(req.body).then(function (data, err) {
      if (!err) {
        return res.send({
          message: 'Recipe created successfully',
          data: 'OK'
        });
      } else {
        return res.send({
          error: err,
          message: 'unable to create Recipe'
        });
      }
    });
  } else {
    return res.send({
      error: err,
      message: 'unable to create Recipe'
    });
  }

});
/**
 * Get Recipe all/filter based
 * @param req
 * @param res
 * @returns {*}
 */
router.get('/getRecipes', function (req, res) {
  return recipeService.getAll().then(function (data, err) {
    if (!err) {
      res.send({recipes: data});
    } else {
      res.send({
        error: err,
        message: 'Unable to fetch Recipe Data'
      });
    }
  });
});
/**
 * Get Recipe all/filter based
 * @param req
 * @param res
 * @returns {*}
 */
router.get('/getRecipes/:id', function (req, res) {
  console.log("params", req.params);
  var id =  req.params.id
  console.log("params id", id);
  return recipeService.getById(id).then(function (data, err) {
    if (!err) {
      console.log(data);
      res.send({recipes: data[0]});
    } else {
      res.send({
        error: err,
        message: 'Unable to fetch Recipe Data'
      });
    }
  });
});
/**
 * Filter option request type -
 * filter={"category":["North Indian",  "South Indian"] , "name":"Leon" , "city": "name of city"}
 * @param req
 * @param res
 * @returns {Promise|Promise.<TResult>|*}
 */
router.get('/recipes/search', function (req, res) {
  var filter = {};
  var obj = JSON.parse(req.query.filter);
  console.log("Filter object Object ");
  console.log(obj.tags);
  obj.title ? (filter['title'] = new RegExp(obj.title.trim())) : '';
  /*  obj.city ? (filter['address.city'] = obj.city.trim()) : '';
   obj.sort ? (filter['sort'] = parseInt(obj.sort)) : '';*/
  //$in: obj.category.map(function (cat) {//.tags.map(function(tags){console.log(tags)})
  //.tags.map(function(tags){console.log(tags)})
  obj.tags ? (filter['category'] = {
        $in: obj.tags.map(function (tag) {
          console.log("tag---------------");
          console.log(tag);
          return tag.text.trim();
        })
      }) : {};
  /*if( filter.category.length=== 0){
   delete filter.category;
   }*/
  /*obj.amount ? (filter['amount'] = {
   '$gte': parseInt(obj.amount.split('-')[0]),
   '$lte': parseInt(obj.amount.split('-')[1])
   }) : {};*/
  return recipeService.search(filter).then(function (data, err) {
    if (!err) {
      res.send({recipes: data});
    } else {
      res.send({
        error: err,
        message: 'Unable to fetch recipe Data'
      });
    }
  });
});
module.exports = router;
