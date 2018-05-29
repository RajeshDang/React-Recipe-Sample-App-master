/**
 * Created by IMFCORP\mohanpratap.singh on 9/9/17.
 */
'use strict';
var Q = require('q');
var dbConnection = require('../db/dbConnection');
var Recipe = require('../db/recipe');

var recipeService = {
  createRecipe: function (data) {
    var deferred = Q.defer(),
        newRecipe = new Recipe({
          title: data.title.trim(),
          image: data.image.trim(),
          preparationTime: data.preparationTime,
          category: data.category,
          members: data.members,
          ingredients: data.ingredients,
          method: data.method,
          created_at: new Date(),
          updated_at: new Date()
        });
    console.log("new recipe data");
    console.log(newRecipe);
    newRecipe.save(function (err) {
      if (err) {
        deferred.reject(err);
      } else {
        deferred.resolve({});
      }

    });
    return deferred.promise;
  },
  getAll: function () {
    var deferred = Q.defer();
    Recipe.find({}, {__v: 0, updated_at: 0, created_at: 0}, function (err, result) {
      if (err) {
        deferred.reject(err);
      } else {
        deferred.resolve(result);
      }
    });
    return deferred.promise;
  },
  getById: function (id) {
    var deferred = Q.defer();
    return Recipe.find({_id: id}, {__v: 0, updated_at: 0, created_at: 0}, function (err, result) {
      if (err) {
        deferred.reject(err);
      } else {
        deferred.resolve(result);
      }
    });
    return deferred.promise;
  },
  search: function (filter) {
    var deferred = Q.defer();
    console.log('Filter Query ==>', filter);
    return Recipe.find(filter, {__v: 0, updated_at: 0, created_at: 0}, function (err, result) {
      if (err) {
        deferred.reject(err);
      } else {
        deferred.resolve(result);
      }
    });
    return deferred.promise;
  }
};
module.exports = recipeService;