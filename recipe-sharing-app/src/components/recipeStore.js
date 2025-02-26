
import create from 'zustand';

// Create the recipe store
const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Generate personalized recommendations based on favorites
  generateRecommendations: () => set(state => {
    // Mock implementation: Select a random subset of recipes that are favorites or related
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5 // Some mock logic for recommendations
    );
    return { recommendations: recommended };
  }),
  
  // Set the search term for filtering
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filter recipes based on the search term
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) || 
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe]
  })),
  setRecipes: (recipes) => set({ recipes })
}));
updateRecipe: (updatedRecipe) => set(state => ({
  recipes: state.recipes.map(recipe =>
    recipe.id === updatedRecipe.id ? updatedRecipe : recipe
  )
}));

deleteRecipe: (id) => set(state => ({
  recipes: state.recipes.filter(recipe => recipe.id !== id)
}))



export default useRecipeStore;
