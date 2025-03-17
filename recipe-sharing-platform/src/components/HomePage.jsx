import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white p-4 shadow-md rounded-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-3">{recipe.title}</h2>
            <p className="text-gray-600 mt-2">{recipe.summary}</p>
            <Link to={`/recipe/${recipe.id}`} className="mt-3 block text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
