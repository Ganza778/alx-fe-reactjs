import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-600 mt-10">Loading recipe...</p>;
  }

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md shadow-md"
        />
        <p className="mt-4 text-lg text-gray-700">{recipe.summary}</p>

        <div className="mt-6 p-4 bg-gray-100 rounded-md shadow-sm">
          <h2 className="text-2xl font-semibold">Ingredients</h2>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 p-4 bg-gray-100 rounded-md shadow-sm">
          <h2 className="text-2xl font-semibold">Instructions</h2>
          <ol className="list-decimal list-inside mt-2 text-gray-700">
            {recipe.instructions?.map((step, index) => (
              <li key={index} className="mt-1">{step}</li>
            ))}
          </ol>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="inline-block bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 transition">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
