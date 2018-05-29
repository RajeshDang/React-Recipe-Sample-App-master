/**
 * Created by IMFCORP\mohanpratap.singh on 09/9/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
    title: {type: String, required: true, unique: true},
    category:[], //1- "Breakfast","Dessert","Snacks","Brunch" "Lunch", "Dinner",,
    image: {type: String},
    ingredients: {type: String},
    method: {type: String},
    preparationTime: {type: Number},
    members : {type: Number},
    created_at: Date,
    updated_at: Date
});
// custom method to add string to end of name
// you can create more important methods like name validations or formatting


// the schema is useless so far
// we need to create a model using it

var Recipe = mongoose.model('Recipe', RecipeSchema);

// make this available to our users in our Node applications
module.exports = Recipe;
