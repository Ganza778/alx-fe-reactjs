import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    if (ingredients.split(",").length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    setError(""); // Clear errors if any

    // Example: Handle form submission (e.g., send to API or store in state)
    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()), // Convert to array
      steps: steps.split(".").map((item) => item.trim()), // Convert to array
    };

    console.log("Recipe submitted:", newRecipe);

    // Reset form fields
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Add New Recipe</h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-medium">Recipe Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              placeholder="Enter recipe title"
            />
          </div>

          <div>
            <label className="block text-lg font-medium">Ingredients (comma-separated)</label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              placeholder="E.g., Flour, Sugar, Eggs, Butter"
            />
          </div>

          <div>
            <label className="block text-lg font-medium">Preparation Steps (period-separated)</label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              placeholder="E.g., Mix ingredients. Bake for 30 minutes."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
