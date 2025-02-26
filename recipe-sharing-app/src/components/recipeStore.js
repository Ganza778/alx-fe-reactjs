
import create from 'zustand';

// Create the recipe store
const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  
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
