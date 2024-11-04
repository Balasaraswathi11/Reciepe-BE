import Recipe from "../../Model/RecipeSchema.js"

export const fetchReci=async(req,res)=>{
    try {
        const reci=await Recipe.find()
        res.status(200).json({message:reci})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
export const fetchbyid = async (req, res) => {
    const { id } = req.params;

    try {
        const fetchedRecipe = await Recipe.findById({_id:id}); // Use await to get the document

        if (!fetchedRecipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        res.status(200).json({ message: "Recipe found", recipe: fetchedRecipe });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
