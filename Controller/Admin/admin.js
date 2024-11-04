import Recipe from "../../Model/RecipeSchema.js"

// Create recipe
export const createRecipe = async (req, res) => {
    const { title, description, ingredients, calories, cookingTime, cookingStyle, steps, categories } = req.body;
    const image = req.file;

    console.log('Request received:', req.body);
    console.log('Uploaded image:', image);

    const categoryArray = typeof categories === 'string' ? categories.split(',').map(cat => cat.trim()) : categories;
    console.log("Categories:", categories);

    try {
        const newRecipe = await Recipe.create({
            image: image ? image.path : null,
            title,
            description,
            categories: categoryArray,
            ingredients,
            calories,
            cookingTime,
            cookingStyle,
            steps,
        });

        res.status(201).json({
            message: "Recipe created successfully",
            newRecipe,
        });
    } catch (error) {
        console.error("Error creating recipe:", error); // Log the error for debugging
        res.status(500).json({
            error: "Something went wrong!",
            details: error.message, // Include details about the error
        });
    }
};
 

// Update recipe
export const updatereci = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

        if (!updatedRecipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        res.status(200).json({
            message: "Recipe updated successfully",
            updatedRecipe,
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating recipe", error });
    }
};

// Delete recipe
export const deletereci = async (req, res) => {
    const { id } = req.params;

    try {
        const deleting = await Recipe.findByIdAndDelete(id); // Directly use the ID

        if (!deleting) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
