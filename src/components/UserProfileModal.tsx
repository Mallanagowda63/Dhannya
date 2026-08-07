import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/initialData';
import { ProductCard } from './ProductCard';
import { Address } from '../types';
import {
  X,
  User as UserIcon,
  ShoppingBag,
  Heart,
  Sparkles,
  MapPin,
  LogOut,
  Package,
  Clock,
  ShieldCheck,
  Plus,
  Trash2,
} from 'lucide-react';

export const UserProfileModal: React.FC = () => {
  const {
    user,
    isProfileOpen,
    setIsProfileOpen,
    orders,
    wishlist,
    savedRecipes,
    addCustomMasalaToCart,
    saveAddress,
    deleteAddress,
    logout,
  } = useApp();

  const [activeTab, setActiveTab] = useState<'orders' | 'wishlist' | 'recipes' | 'addresses'>('orders');
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newAddrForm, setNewAddrForm] = useState<Address>({
    id: '',
    fullName: user?.name || '',
    mobile: user?.mobile || '',
    street: '',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    isDefault: false,
  });

  if (!isProfileOpen || !user) return null;

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  const handleSaveAddress = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveAddress(newAddrForm);
    setIsAddingAddress(false);
    setNewAddrForm({
      id: '',
      fullName: user.name,
      mobile: user.mobile,
      street: '',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      isDefault: false,
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border border-soft w-full max-w-3xl rounded-3xl shadow-xl overflow-hidden text-earth my-8">
        {/* Profile Header */}
        <div className="bg-cream p-6 border-b border-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-olive text-white font-bold text-xl flex items-center justify-center shadow">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif text-earth">{user.name}</h3>
              <p className="text-xs text-stone-500">{user.email} • {user.mobile}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                logout();
                setIsProfileOpen(false);
              }}
              className="text-xs text-stone-600 hover:text-rose-600 bg-white hover:bg-stone-100 border border-soft px-3 py-1.5 rounded-xl font-semibold flex items-center gap-1 transition"
            >
              <LogOut className="w-3.5 h-3.5" /> Logout
            </button>
            <button
              onClick={() => setIsProfileOpen(false)}
              className="p-1.5 rounded-full text-stone-500 hover:text-earth hover:bg-stone-200 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-soft bg-cream/50 px-6 flex items-center gap-4 overflow-x-auto text-xs font-bold no-scrollbar">
          <button
            onClick={() => setActiveTab('orders')}
            className={`py-3 border-b-2 transition flex items-center gap-1.5 ${
              activeTab === 'orders'
                ? 'border-olive text-olive'
                : 'border-transparent text-stone-500 hover:text-earth'
            }`}
          >
            <Package className="w-4 h-4" /> My Orders ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`py-3 border-b-2 transition flex items-center gap-1.5 ${
              activeTab === 'wishlist'
                ? 'border-olive text-olive'
                : 'border-transparent text-stone-500 hover:text-earth'
            }`}
          >
            <Heart className="w-4 h-4" /> Saved Wishlist ({wishlist.length})
          </button>
          <button
            onClick={() => setActiveTab('recipes')}
            className={`py-3 border-b-2 transition flex items-center gap-1.5 ${
              activeTab === 'recipes'
                ? 'border-olive text-olive'
                : 'border-transparent text-stone-500 hover:text-earth'
            }`}
          >
            <Sparkles className="w-4 h-4" /> Custom Masala Recipes ({savedRecipes.length})
          </button>
          <button
            onClick={() => setActiveTab('addresses')}
            className={`py-3 border-b-2 transition flex items-center gap-1.5 ${
              activeTab === 'addresses'
                ? 'border-olive text-olive'
                : 'border-transparent text-stone-500 hover:text-earth'
            }`}
          >
            <MapPin className="w-4 h-4" /> Saved Addresses ({user.addresses.length})
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 max-h-[500px] overflow-y-auto space-y-4">
          {/* ORDERS TAB */}
          {activeTab === 'orders' && (
            <div className="space-y-3">
              {orders.length === 0 ? (
                <div className="text-center py-12 text-stone-500 text-xs">
                  No orders placed yet.
                </div>
              ) : (
                orders.map((ord) => (
                  <div
                    key={ord.id}
                    className="bg-cream p-4 rounded-2xl border border-soft space-y-3 text-xs"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-soft pb-2">
                      <div>
                        <span className="font-bold text-olive text-sm">{ord.id}</span>
                        <span className="text-stone-500 block text-[10px]">
                          Placed on {new Date(ord.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                            ord.status === 'Delivered'
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : 'bg-amber-100 text-amber-800 border border-amber-300'
                          }`}
                        >
                          {ord.status}
                        </span>
                        <span className="font-bold text-earth text-sm">₹{ord.total}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {ord.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 rounded-lg object-cover shrink-0 border border-soft"
                          />
                          <div className="flex-1 min-w-0">
                            <span className="font-bold text-earth block truncate">
                              {item.name}
                            </span>
                            <span className="text-[10px] text-stone-500">
                              Qty: {item.quantity} | {item.variantWeight}
                            </span>
                          </div>
                          <span className="font-bold text-earth">₹{item.price * item.quantity}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-soft flex items-center justify-between text-[11px] text-stone-500">
                      <span>Tracking: <strong className="text-earth">{ord.trackingNumber}</strong></span>
                      <span>Delivery: <strong className="text-olive">{ord.estimatedDelivery}</strong></span>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* WISHLIST TAB */}
          {activeTab === 'wishlist' && (
            <div>
              {wishlistedProducts.length === 0 ? (
                <div className="text-center py-12 text-stone-500 text-xs">
                  Your wishlist is empty. Explore products to save your favorites!
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {wishlistedProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* RECIPES TAB */}
          {activeTab === 'recipes' && (
            <div className="space-y-3">
              {savedRecipes.length === 0 ? (
                <div className="text-center py-12 text-stone-500 text-xs">
                  No custom masala recipes saved yet. Use the "Make Your Own Masala" builder to save your signature blends!
                </div>
              ) : (
                savedRecipes.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="bg-cream p-4 rounded-2xl border border-soft flex items-center justify-between gap-4 text-xs"
                  >
                    <div>
                      <h4 className="font-bold text-olive text-sm">{recipe.name}</h4>
                      <p className="text-stone-600 text-[11px] mt-0.5">
                        Batch Weight: {recipe.totalWeightGrams}g | {recipe.items.length} Spices
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {recipe.items.map((i) => (
                          <span
                            key={i.ingredient.id}
                            className="bg-white border border-soft text-[10px] text-earth px-2 py-0.5 rounded"
                          >
                            {i.ingredient.name} ({i.weightGrams}g, {i.roastingType})
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-base font-bold text-earth block mb-2">₹{recipe.totalPrice}</span>
                      <button
                        onClick={() => addCustomMasalaToCart(recipe)}
                        className="bg-olive hover:bg-[#4a4a34] text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1 transition"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" /> Order
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* ADDRESSES TAB */}
          {activeTab === 'addresses' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-stone-600">Saved Delivery Addresses</span>
                <button
                  onClick={() => setIsAddingAddress(!isAddingAddress)}
                  className="bg-olive hover:bg-[#4a4a34] text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1 transition shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" /> Add New Address
                </button>
              </div>

              {isAddingAddress && (
                <form onSubmit={handleSaveAddress} className="bg-cream p-4 rounded-2xl border border-olive/30 space-y-3">
                  <h4 className="text-xs font-bold text-olive">Add Delivery Address</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div>
                      <label className="block text-[10px] font-bold text-stone-600">Full Name</label>
                      <input
                        type="text"
                        required
                        value={newAddrForm.fullName}
                        onChange={(e) => setNewAddrForm({ ...newAddrForm, fullName: e.target.value })}
                        className="w-full bg-white border border-stone-200 rounded-lg p-2 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-stone-600">Mobile</label>
                      <input
                        type="tel"
                        required
                        value={newAddrForm.mobile}
                        onChange={(e) => setNewAddrForm({ ...newAddrForm, mobile: e.target.value })}
                        className="w-full bg-white border border-stone-200 rounded-lg p-2 text-xs"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-bold text-stone-600">Street / Flat / Area</label>
                      <input
                        type="text"
                        required
                        value={newAddrForm.street}
                        onChange={(e) => setNewAddrForm({ ...newAddrForm, street: e.target.value })}
                        className="w-full bg-white border border-stone-200 rounded-lg p-2 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-stone-600">City</label>
                      <input
                        type="text"
                        required
                        value={newAddrForm.city}
                        onChange={(e) => setNewAddrForm({ ...newAddrForm, city: e.target.value })}
                        className="w-full bg-white border border-stone-200 rounded-lg p-2 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-stone-600">Pincode</label>
                      <input
                        type="text"
                        required
                        value={newAddrForm.pincode}
                        onChange={(e) => setNewAddrForm({ ...newAddrForm, pincode: e.target.value })}
                        className="w-full bg-white border border-stone-200 rounded-lg p-2 text-xs"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsAddingAddress(false)}
                      className="px-3 py-1.5 text-xs text-stone-500 hover:text-earth font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-olive hover:bg-[#4a4a34] text-white text-xs font-bold px-4 py-1.5 rounded-xl transition"
                    >
                      Save to Database
                    </button>
                  </div>
                </form>
              )}

              {user.addresses.length === 0 ? (
                <div className="text-center py-8 text-stone-500 text-xs">
                  No saved addresses found. Add an address above!
                </div>
              ) : (
                user.addresses.map((addr) => (
                  <div
                    key={addr.id}
                    className="bg-cream p-4 rounded-2xl border border-soft flex items-start justify-between text-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <strong className="text-earth text-sm">{addr.fullName}</strong>
                        {addr.isDefault && (
                          <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded font-bold border border-emerald-300">
                            DEFAULT
                          </span>
                        )}
                      </div>
                      <p className="text-stone-600">{addr.street}, {addr.city}, {addr.state} - {addr.pincode}</p>
                      <p className="text-stone-500">Mobile: {addr.mobile}</p>
                    </div>

                    <button
                      onClick={() => deleteAddress(addr.id)}
                      className="text-stone-400 hover:text-rose-600 p-1.5 transition"
                      title="Delete Address"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
