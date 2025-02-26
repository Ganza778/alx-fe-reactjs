// src/components/RecipeDetails.jsx
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useParams } from 'react-router-dom';

const RecipeDetails = ({ recipeId }) => {
    const { id } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const favorites = useRecipeStore(state => state.favorites);

  const isFavorite = favorites.includes(recipe?.id);
  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <h3>Actions</h3>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
      
      <Link to="/">Back to Recipe List</Link>
    </div>
  );
};

export default RecipeDetails;

