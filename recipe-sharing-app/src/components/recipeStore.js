// src/recipeStore.js
import create from 'zustand';

// Create the recipe store
const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe]
  })),
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;
