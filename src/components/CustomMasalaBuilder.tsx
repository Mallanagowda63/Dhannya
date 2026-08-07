import React, { useState } from 'react';
import { MASALA_INGREDIENTS } from '../data/initialData';
import { MasalaIngredient, SelectedMasalaIngredient, CustomRecipe } from '../types';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  Search,
  Plus,
  Minus,
  Trash2,
  Flame,
  CheckCircle2,
  AlertCircle,
  Save,
  ShoppingBag,
  RotateCcw,
  Info,
  Layers,
} from 'lucide-react';

export const CustomMasalaBuilder: React.FC = () => {
  const { addCustomMasalaToCart, saveCustomRecipe, showToast, savedRecipes } = useApp();

  const [recipeName, setRecipeName] = useState('My Signature Garam Masala');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Selected ingredients map: { [ingredientId]: SelectedMasalaIngredient }
  const [selectedItems, setSelectedItems] = useState<Record<string, SelectedMasalaIngredient>>({
    'ing-1': {
      ingredient: MASALA_INGREDIENTS[0], // Coriander
      weightGrams: 200,
      roastingType: 'Roasted',
    },
    'ing-2': {
      ingredient: MASALA_INGREDIENTS[1], // Cumin
      weightGrams: 100,
      roastingType: 'Roasted',
    },
    'ing-3': {
      ingredient: MASALA_INGREDIENTS[2], // Black Peppercorns
      weightGrams: 50,
      roastingType: 'Non Roasted',
    },
  });

  const categoryList = ['All', 'Aromatics', 'Whole Spices', 'Herbs & Seeds', 'Pungent & Heat', 'Color & Texture'];

  const filteredIngredients = MASALA_INGREDIENTS.filter((ing) => {
    const matchesCategory = selectedCategory === 'All' || ing.category === selectedCategory;
    const matchesSearch =
      ing.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (ing.hindiName && ing.hindiName.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Calculations
  const selectedList: SelectedMasalaIngredient[] = Object.values(selectedItems);
  const totalWeightGrams = selectedList.reduce((acc: number, item: SelectedMasalaIngredient) => acc + item.weightGrams, 0);

  const rawIngredientCost = selectedList.reduce((acc: number, item: SelectedMasalaIngredient) => {
    return acc + (item.weightGrams / 100) * item.ingredient.pricePer100g;
  }, 0);

  const roastingCharge = selectedList.reduce((acc: number, item: SelectedMasalaIngredient) => {
    if (item.roastingType === 'Roasted') {
      return acc + (item.weightGrams / 100) * item.ingredient.roastingPricePer100g;
    }
    return acc;
  }, 0);

  const recipeSubtotal = Math.round(rawIngredientCost + roastingCharge);
  const discount = totalWeightGrams >= 500 ? Math.round(recipeSubtotal * 0.1) : 0; // 10% discount on 500g+
  const finalPayable = Math.max(1, recipeSubtotal - discount);

  // Duplicate recipe detection
  const isDuplicateRecipe = savedRecipes.some((saved) => {
    if (saved.items.length !== selectedList.length) return false;
    return saved.items.every((item) => {
      const match = selectedItems[item.ingredient.id];
      return (
        match &&
        match.weightGrams === item.weightGrams &&
        match.roastingType === item.roastingType
      );
    });
  });

  // Validation
  const minWeightValid = totalWeightGrams >= 100;
  const maxWeightValid = totalWeightGrams <= 5000;
  const isValidRecipe = selectedList.length > 0 && minWeightValid && maxWeightValid;

  // Handlers
  const handleWeightChange = (ingredient: MasalaIngredient, newWeight: number) => {
    if (newWeight <= 0) {
      const copy = { ...selectedItems };
      delete copy[ingredient.id];
      setSelectedItems(copy);
    } else {
      setSelectedItems((prev) => ({
        ...prev,
        [ingredient.id]: {
          ingredient,
          weightGrams: newWeight,
          roastingType: prev[ingredient.id]?.roastingType || ingredient.defaultRoast,
        },
      }));
    }
  };

  const handleRoastingToggle = (ingredientId: string, roastType: 'Roasted' | 'Non Roasted') => {
    if (selectedItems[ingredientId]) {
      setSelectedItems((prev) => ({
        ...prev,
        [ingredientId]: {
          ...prev[ingredientId],
          roastingType: roastType,
        },
      }));
    }
  };

  const handleReset = () => {
    setSelectedItems({});
    setRecipeName('My Custom Spice Blend');
    showToast('Recipe reset cleared all selected ingredients', 'info');
  };

  const buildRecipeObject = (): CustomRecipe => {
    return {
      id: `rec-${Date.now()}`,
      name: recipeName || 'Custom Spice Blend',
      items: selectedList,
      totalWeightGrams,
      ingredientCost: Math.round(rawIngredientCost),
      roastingCharge: Math.round(roastingCharge),
      subtotal: recipeSubtotal,
      discount,
      totalPrice: finalPayable,
      createdAt: new Date().toISOString(),
    };
  };

  const handleAddToCart = () => {
    if (!minWeightValid) {
      showToast('Minimum order weight for custom masala is 100g', 'error');
      return;
    }
    if (!maxWeightValid) {
      showToast('Maximum order weight for custom masala batch is 5,000g', 'error');
      return;
    }
    const recipe = buildRecipeObject();
    addCustomMasalaToCart(recipe);
  };

  const handleSaveRecipe = () => {
    if (!isValidRecipe) {
      showToast('Please build a valid recipe before saving', 'error');
      return;
    }
    const recipe = buildRecipeObject();
    saveCustomRecipe(recipe);
  };

  return (
    <section id="custom-masala-builder" className="py-12 bg-paper text-earth min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero Banner for Masala Studio */}
        <div className="bg-olive border border-soft rounded-3xl p-6 sm:p-10 mb-8 shadow-sm relative overflow-hidden text-white">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[url('https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-15 pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 text-xs font-bold px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>INDUSTRY FIRST INNOVATION</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
              Make Your Own Masala
            </h1>
            <p className="text-xs sm:text-sm text-stone-200 mt-3 leading-relaxed">
              Craft your authentic signature spice blend! Pick your raw ingredients in exact gram ratios, choose individual slow-roasting preferences per spice, and get freshly stone-ground masala delivered straight to your kitchen.
            </p>
          </div>
        </div>

        {/* Main 2-Column Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Ingredient Picker (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Search & Category Filter */}
            <div className="bg-white border border-soft p-4 rounded-2xl space-y-3 shadow-sm">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search spice name or Hindi name (e.g. Dhaniya, Jeera, Cardamom)..."
                  className="w-full bg-cream border border-stone-200 text-earth text-xs rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-olive"
                />
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
                {categoryList.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg shrink-0 transition ${
                      selectedCategory === cat
                        ? 'bg-olive text-white font-bold'
                        : 'bg-cream text-stone-600 hover:text-earth'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Ingredients Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[680px] overflow-y-auto pr-1">
              {filteredIngredients.map((ing) => {
                const selected = selectedItems[ing.id];
                const weight = selected ? selected.weightGrams : 0;

                return (
                  <div
                    key={ing.id}
                    className={`p-4 rounded-2xl border transition duration-300 flex flex-col justify-between ${
                      weight > 0
                        ? 'bg-cream border-olive shadow-sm'
                        : 'bg-white border-soft hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={ing.image}
                        alt={ing.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0 border border-soft"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold font-serif text-earth truncate">{ing.name}</h4>
                          <span className="text-[10px] bg-white text-olive font-bold px-2 py-0.5 rounded border border-soft">
                            ₹{ing.pricePer100g}/100g
                          </span>
                        </div>
                        {ing.hindiName && (
                          <span className="text-xs text-stone-500 block font-serif italic">
                            ({ing.hindiName})
                          </span>
                        )}
                        <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">
                          {ing.healthBenefits}
                        </p>
                      </div>
                    </div>

                    {/* Weight Controller Controls */}
                    <div className="mt-4 pt-3 border-t border-soft flex items-center justify-between gap-2">
                      <span className="text-xs text-stone-600 font-medium">Quantity (Grams):</span>
                      <div className="flex items-center bg-cream rounded-xl border border-stone-200 p-1">
                        <button
                          onClick={() => handleWeightChange(ing, Math.max(0, weight - 25))}
                          className="w-7 h-7 rounded-lg bg-white border border-stone-200 text-stone-700 hover:bg-stone-100 flex items-center justify-center transition active:scale-90"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <input
                          type="number"
                          value={weight || ''}
                          onChange={(e) =>
                            handleWeightChange(ing, Math.max(0, parseInt(e.target.value) || 0))
                          }
                          placeholder="0g"
                          className="w-14 text-center bg-transparent text-xs font-bold text-olive focus:outline-none"
                        />
                        <button
                          onClick={() => handleWeightChange(ing, weight + 25)}
                          className="w-7 h-7 rounded-lg bg-olive text-white font-bold flex items-center justify-center transition active:scale-90"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Live Recipe Panel & Summary (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-soft rounded-3xl p-6 sticky top-24 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-soft pb-4">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-olive" />
                <h3 className="text-lg font-bold font-serif text-earth">Custom Recipe Studio</h3>
              </div>
              <button
                onClick={handleReset}
                className="text-stone-500 hover:text-rose-600 text-xs font-semibold flex items-center gap-1 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
            </div>

            {/* Recipe Name Input */}
            <div>
              <label className="block text-xs font-bold text-stone-600 mb-1">
                Recipe Name / Title:
              </label>
              <input
                type="text"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
                placeholder="Give your masala blend a name..."
                className="w-full bg-cream border border-stone-200 text-earth text-xs font-bold rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-olive"
              />
            </div>

            {/* Selected Ingredients List & Individual Roasting Selector */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-500 font-bold">
                <span>Selected Spices ({selectedList.length})</span>
                <span>Individual Roasting Option</span>
              </div>

              {selectedList.length === 0 ? (
                <div className="bg-cream/60 border border-dashed border-stone-300 rounded-2xl p-6 text-center text-stone-500 text-xs">
                  No spices selected yet. Use the left panel to add ingredients to your blend.
                </div>
              ) : (
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {selectedList.map((item) => (
                    <div
                      key={item.ingredient.id}
                      className="bg-cream p-3 rounded-xl border border-soft flex items-center justify-between gap-2 text-xs"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <button
                          onClick={() => handleWeightChange(item.ingredient, 0)}
                          className="text-stone-400 hover:text-rose-600 transition"
                          title="Remove"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <div>
                          <span className="font-bold text-earth block truncate font-serif">
                            {item.ingredient.name}
                          </span>
                          <span className="text-[10px] text-olive font-bold">
                            {item.weightGrams}g
                          </span>
                        </div>
                      </div>

                      {/* Roasting Selector Dropdown */}
                      <select
                        value={item.roastingType}
                        onChange={(e) =>
                          handleRoastingToggle(
                            item.ingredient.id,
                            e.target.value as 'Roasted' | 'Non Roasted'
                          )
                        }
                        className={`text-[11px] font-bold px-2 py-1 rounded-lg border focus:outline-none transition ${
                          item.roastingType === 'Roasted'
                            ? 'bg-olive text-white border-olive'
                            : 'bg-white text-stone-700 border-stone-300'
                        }`}
                      >
                        <option value="Roasted">🔥 Roasted (+₹{item.ingredient.roastingPricePer100g}/100g)</option>
                        <option value="Non Roasted">🌱 Non Roasted (Raw)</option>
                      </select>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Validation & Duplicate Warning */}
            <div className="space-y-2">
              {isDuplicateRecipe && (
                <div className="bg-amber-50 border border-amber-200 text-amber-800 p-3 rounded-xl text-xs flex items-center gap-2">
                  <Info className="w-4 h-4 shrink-0 text-amber-700" />
                  <span>Duplicate recipe: You already have this exact spice ratio saved!</span>
                </div>
              )}

              {!minWeightValid && selectedList.length > 0 && (
                <div className="bg-rose-50 border border-rose-200 text-rose-800 p-3 rounded-xl text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>Minimum batch order weight is 100g (Current: {totalWeightGrams}g)</span>
                </div>
              )}

              {totalWeightGrams >= 500 && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-2.5 rounded-xl text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>🎉 10% Batch Discount applied for 500g+ order!</span>
                </div>
              )}
            </div>

            {/* Price Calculations Breakdown */}
            <div className="bg-dark-olive p-4 rounded-2xl border border-black/20 space-y-2 text-xs text-stone-200">
              <div className="flex justify-between text-stone-300">
                <span>Total Batch Weight:</span>
                <span className="font-bold text-white">{totalWeightGrams}g</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>Raw Ingredients Cost:</span>
                <span className="font-bold text-white">₹{Math.round(rawIngredientCost)}</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>Roasting Charge:</span>
                <span className="font-bold text-white">₹{Math.round(roastingCharge)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-300 font-bold">
                  <span>Batch Discount (10% OFF):</span>
                  <span>-₹{discount}</span>
                </div>
              )}
              <div className="pt-2 border-t border-white/10 flex justify-between items-baseline">
                <span className="text-sm font-bold text-white">Final Payable Amount:</span>
                <span className="text-xl font-bold text-amber-200">₹{finalPayable}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleSaveRecipe}
                disabled={!isValidRecipe}
                className="bg-cream hover:bg-stone-200 disabled:opacity-50 text-earth border border-soft font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition"
              >
                <Save className="w-4 h-4" />
                <span>Save Recipe</span>
              </button>

              <button
                onClick={handleAddToCart}
                disabled={!isValidRecipe}
                className="bg-olive hover:bg-[#4a4a34] disabled:opacity-50 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow transition active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
