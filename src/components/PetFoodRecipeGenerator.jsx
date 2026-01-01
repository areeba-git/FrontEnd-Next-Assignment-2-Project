'use client';

import { useState } from 'react';

const PetFoodRecipeGenerator = () => {
  const [petType, setPetType] = useState('dog');
  const [allergies, setAllergies] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(null);

  const generateRecipe = () => {
    // Mock recipe generation based on inputs
    const baseRecipes = {
      dog: {
        title: "Homemade Chicken & Veggie Dog Food",
        ingredients: [
          "500g boneless chicken breast",
          "2 cups brown rice",
          "2 carrots, chopped",
          "1 cup green beans",
          "1 tablespoon olive oil",
          "1 teaspoon calcium supplement"
        ],
        instructions: [
          "Cook chicken thoroughly until no pink remains",
          "Boil brown rice according to package instructions",
          "Steam carrots and green beans until tender",
          "Mix all ingredients together in large bowl",
          "Add olive oil and calcium supplement",
          "Cool completely before serving"
        ],
        servingSize: "Makes 4-5 meals for medium dog",
        notes: "Refrigerate for up to 3 days or freeze for up to 2 months"
      },
      cat: {
        title: "Salmon & Pumpkin Cat Food",
        ingredients: [
          "400g salmon fillet",
          "1/2 cup pumpkin puree",
          "1 egg yolk",
          "1 teaspoon fish oil",
          "1/4 teaspoon taurine supplement"
        ],
        instructions: [
          "Bake salmon at 180°C for 15 minutes",
          "Mix pumpkin puree with cooked salmon",
          "Add egg yolk and fish oil",
          "Sprinkle taurine supplement",
          "Mix thoroughly until smooth"
        ],
        servingSize: "Makes 3-4 meals for average cat",
        notes: "Serve immediately or refrigerate for up to 2 days"
      }
    };

    const selectedRecipe = baseRecipes[petType] || baseRecipes.dog;
    setRecipe(selectedRecipe);
  };

  const addIngredient = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      setIngredients([...ingredients, e.target.value.trim()]);
      e.target.value = '';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            {recipe ? (
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-gray-900">{recipe.title}</h3>
                  <button
                    onClick={() => setRecipe(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Generate New
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-3">Ingredients:</h4>
                    <ul className="space-y-2">
                      {recipe.ingredients.map((ing, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>{ing}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-3">Instructions:</h4>
                    <ol className="space-y-2 list-decimal pl-5">
                      {recipe.instructions.map((step, index) => (
                        <li key={index} className="text-gray-700">{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="font-semibold text-blue-800 mb-2">Important Notes:</div>
                  <div className="text-sm text-blue-700">{recipe.notes}</div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">{recipe.servingSize}</div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Print Recipe
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pet Type
                  </label>
                  <select
                    value={petType}
                    onChange={(e) => setPetType(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="bird">Bird</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Known Allergies (optional)
                  </label>
                  <input
                    type="text"
                    value={allergies}
                    onChange={(e) => setAllergies(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., chicken, grains, dairy"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Available Ingredients (press Enter to add)
                  </label>
                  <input
                    type="text"
                    onKeyPress={addIngredient}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Type ingredient and press Enter"
                  />
                  {ingredients.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {ingredients.map((ing, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {ing}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={generateRecipe}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Generate Recipe
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-green-800 mb-2">Safety Tips:</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Always cook meat thoroughly</li>
              <li>• Avoid onions, garlic, chocolate</li>
              <li>• Consult vet before major diet changes</li>
              <li>• Introduce new foods gradually</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-bold text-yellow-800 mb-2">Nutritional Requirements:</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Dogs need balanced protein/fat/carbs</li>
              <li>• Cats require taurine in diet</li>
              <li>• Portion control is important</li>
              <li>• Fresh water always available</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2">Popular Recipe Types:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Grain-free options</li>
              <li>• Hypoallergenic recipes</li>
              <li>• Weight management meals</li>
              <li>• Senior pet formulas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetFoodRecipeGenerator;