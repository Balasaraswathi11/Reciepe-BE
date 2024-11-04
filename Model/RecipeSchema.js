import mongoose from "mongoose";
const RecipeSchema= new mongoose.Schema({
    image: {
        type: String, // Store the path to the uploaded image
        required: false, // Optional if you want to allow recipes without images
    },
    title:{
        type:String,
        required:true,
        unique:true

    }, description: {
        type: String,
        required: true,
        trim: true
      },
      ingredients:{
        type:[String],
        required:true
      },
      calories:{
        type:Number,
        required:true
      },
      cookingTime:{
        type:Number,
        required:true
      },
      cookingStyle: {
        type: String,
        enum: ['low', 'medium', 'high'],
        required: true 
      },
      steps: {
        type: [String],
        required: true
      },
      categories: {
        type: [String],
        enum: ['breakfast', 'lunch', 'dinner', 'veg', 'non-veg', 'Asian', 'Italian', 'desserts'],
        required: true
      },
      createdAt:{
        type:Date,
        default:Date.now 
      }



})
 const Recipe=mongoose.model("Recipe",RecipeSchema)
 export default Recipe