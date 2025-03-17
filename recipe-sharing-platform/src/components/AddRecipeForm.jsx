import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let validationErrors = {};

    if (!title.trim()) {
      validationErrors.title = "Title is required.";
    }

    if (!ingredients.trim()) {
      validationErrors.ingredients = "Ingredients cannot be empty.";
    } else if (ingredients.split(",").filter((item) => item.trim()).length < 2) {
      validationErrors.ingredients = "Please include at least two ingredients.";
    }

    if (!steps.trim()) {
      validationErrors.steps = "Steps cannot be empty.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Structure the new recipe data
    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      steps: steps.split(".").map((item) => item.trim()),
    };

    console.log("Recipe submitted:", newRecipe);

    // Reset form fields
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Add New Recipe</h1>

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
            {errors.title && <p className="text-red-500">{errors.title}</p>}
          </div>

          <div>
            <label className="block text-lg font-medium">Ingredients (comma-separated)</label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              placeholder="E.g., Flour, Sugar, Eggs, Butter"
            />
            {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
          </div>

          <div>
            <label className="block text-lg font-medium">Preparation Steps (period-separated)</label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              placeholder="E.g., Mix ingredients. Bake for 30 minutes."
            />
            {errors.steps && <p className="text-red-500">{errors.steps}</p>}
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
