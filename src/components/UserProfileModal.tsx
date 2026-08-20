import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ProductCard } from './ProductCard';
import { Address } from '../types';
import {
  X,
  ShoppingBag,
  Heart,
  Sparkles,
  MapPin,
  LogOut,
  Package,
  Plus,
  Trash2,
  ArrowRight,
} from 'lucide-react';

export const UserProfileModal: React.FC = () => {
  const {
    products,
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
    setActiveCategory,
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

  const wishlistedProducts = (products || []).filter((p) => wishlist.includes(p.id));

  const userOrders = (orders || []).filter((o) => {
    if (!user) return false;
    const uEmail = (user.email || '').toLowerCase().trim();
    const uId = user.id;

    if (o.userId && o.userId === uId) return true;
    if (o.userEmail && o.userEmail.toLowerCase().trim() === uEmail) return true;
    if (o.shippingAddress?.email && o.shippingAddress.email.toLowerCase().trim() === uEmail) return true;

    return false;
  });

  const userAddresses = user.addresses || [];

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

  const handleStartShopping = () => {
    setIsProfileOpen(false);
    setActiveCategory(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
      <div className="bg-[#F4ECD8] border border-[#2A2620]/20 w-full max-w-2xl rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden text-[#2A2620] my-auto relative max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#F8F3E6] border-b border-[#2A2620]/15 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#3E4B32] text-[#F4ECD8] flex items-center justify-center font-bold text-lg shadow-sm font-serif">
              {user.name ? user.name[0].toUpperCase() : 'U'}
            </div>
            <div>
              <h3 className="font-bold font-serif text-lg text-[#2A2620]">{user.name}</h3>
              <p className="text-xs text-[#2A2620]/70 font-sans">{user.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                logout();
                setIsProfileOpen(false);
              }}
              className="bg-white hover:bg-rose-50 border border-rose-200 text-rose-700 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" /> Logout
            </button>
            <button
              onClick={() => setIsProfileOpen(false)}
              className="p-2 rounded-full bg-white hover:bg-[#2A2620]/10 border border-[#2A2620]/15 text-[#2A2620] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Tab Navigation */}
        <div className="border-b border-[#2A2620]/15 bg-[#F4ECD8] px-4 sm:px-6 flex items-center gap-2 sm:gap-4 overflow-x-auto text-xs font-bold no-scrollbar shrink-0">
          <button
            onClick={() => setActiveTab('orders')}
            className={`py-3.5 border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'orders'
                ? 'border-[#A9542B] text-[#A9542B]'
                : 'border-transparent text-[#2A2620]/60 hover:text-[#2A2620]'
            }`}
          >
            <Package className="w-4 h-4" /> My Orders ({userOrders.length})
          </button>

          <button
            onClick={() => setActiveTab('wishlist')}
            className={`py-3.5 border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'wishlist'
                ? 'border-[#A9542B] text-[#A9542B]'
                : 'border-transparent text-[#2A2620]/60 hover:text-[#2A2620]'
            }`}
          >
            <Heart className="w-4 h-4" /> Saved Wishlist ({wishlistedProducts.length})
          </button>

          <button
            onClick={() => setActiveTab('recipes')}
            className={`py-3.5 border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'recipes'
                ? 'border-[#A9542B] text-[#A9542B]'
                : 'border-transparent text-[#2A2620]/60 hover:text-[#2A2620]'
            }`}
          >
            <Sparkles className="w-4 h-4" /> Custom Masala Recipes ({savedRecipes.length})
          </button>

          <button
            onClick={() => setActiveTab('addresses')}
            className={`py-3.5 border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'addresses'
                ? 'border-[#A9542B] text-[#A9542B]'
                : 'border-transparent text-[#2A2620]/60 hover:text-[#2A2620]'
            }`}
          >
            <MapPin className="w-4 h-4" /> Saved Addresses ({userAddresses.length})
          </button>
        </div>

        {/* Tab Content Container */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
          
          {/* 1. ORDERS TAB */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              {userOrders.length === 0 ? (
                <div className="text-center py-12 px-4 rounded-2xl bg-[#F8F3E6] border border-[#2A2620]/10 text-[#2A2620] space-y-3">
                  <Package className="w-12 h-12 mx-auto text-[#2A2620]/30" />
                  <div className="space-y-1">
                    <p className="font-serif font-bold text-base text-[#2A2620]">No orders yet.</p>
                    <p className="text-xs text-[#2A2620]/70">Your Dhaanya journey starts here.</p>
                  </div>
                  <button
                    onClick={handleStartShopping}
                    className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#C89211] hover:bg-[#b07e0e] text-[#2A2620] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                  >
                    <span>START SHOPPING</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                userOrders.map((ord) => (
                  <div
                    key={ord.id}
                    className="bg-[#F8F3E6] p-4 rounded-2xl border border-[#2A2620]/15 space-y-3 text-xs"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2A2620]/10 pb-2.5">
                      <div>
                        <span className="font-bold font-serif text-sm text-[#3E4B32]">{ord.id}</span>
                        <span className="text-[#2A2620]/60 block text-[11px]">
                          Placed on {new Date(ord.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            ord.status === 'Delivered'
                              ? 'bg-[#3E4B32]/15 text-[#3E4B32] border border-[#3E4B32]/30'
                              : 'bg-[#C89211]/20 text-[#2A2620] border border-[#C89211]/40'
                          }`}
                        >
                          {ord.status}
                        </span>
                        <span className="font-bold text-[#2A2620] text-sm">₹{ord.total}</span>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      {ord.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 rounded-lg object-cover shrink-0 border border-[#2A2620]/10"
                          />
                          <div className="flex-1 min-w-0">
                            <span className="font-bold text-[#2A2620] block truncate">
                              {item.name}
                            </span>
                            <span className="text-[10px] text-[#2A2620]/70">
                              Qty: {item.quantity} | {item.variantWeight}
                            </span>
                          </div>
                          <span className="font-bold text-[#2A2620]">₹{item.price * item.quantity}</span>
                        </div>
                      ))}
                    </div>

                    {ord.trackingNumber && (
                      <div className="pt-2 border-t border-[#2A2620]/10 flex flex-wrap items-center justify-between text-[11px] text-[#2A2620]/70 gap-2">
                        <span>Tracking: <strong className="text-[#2A2620]">{ord.trackingNumber}</strong></span>
                        <span>Delivery: <strong className="text-[#3E4B32]">{ord.estimatedDelivery}</strong></span>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}

          {/* 2. WISHLIST TAB */}
          {activeTab === 'wishlist' && (
            <div>
              {wishlistedProducts.length === 0 ? (
                <div className="text-center py-12 px-4 rounded-2xl bg-[#F8F3E6] border border-[#2A2620]/10 text-[#2A2620] space-y-3">
                  <Heart className="w-12 h-12 mx-auto text-[#2A2620]/30" />
                  <p className="font-serif font-bold text-base text-[#2A2620]">Your wishlist is empty.</p>
                  <p className="text-xs text-[#2A2620]/70">Explore products to save your favorites!</p>
                  <button
                    onClick={handleStartShopping}
                    className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#C89211] hover:bg-[#b07e0e] text-[#2A2620] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                  >
                    <span>BROWSE PANTRY</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {wishlistedProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 3. CUSTOM RECIPES TAB */}
          {activeTab === 'recipes' && (
            <div className="space-y-3">
              {savedRecipes.length === 0 ? (
                <div className="text-center py-12 px-4 rounded-2xl bg-[#F8F3E6] border border-[#2A2620]/10 text-[#2A2620] space-y-3">
                  <Sparkles className="w-12 h-12 mx-auto text-[#2A2620]/30" />
                  <p className="font-serif font-bold text-base text-[#2A2620]">No saved masala recipes yet.</p>
                  <p className="text-xs text-[#2A2620]/70">Use the Custom Masala Mill builder to craft signature spice blends!</p>
                </div>
              ) : (
                savedRecipes.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="bg-[#F8F3E6] p-4 rounded-2xl border border-[#2A2620]/15 flex items-center justify-between gap-4 text-xs"
                  >
                    <div>
                      <h4 className="font-bold font-serif text-sm text-[#3E4B32]">{recipe.name}</h4>
                      <p className="text-[#2A2620]/70 text-[11px] mt-0.5">
                        Batch Weight: {recipe.totalWeightGrams}g | {recipe.items.length} Spices
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {recipe.items.map((i) => (
                          <span
                            key={i.ingredient.id}
                            className="bg-white border border-[#2A2620]/15 text-[10px] text-[#2A2620] px-2 py-0.5 rounded"
                          >
                            {i.ingredient.name} ({i.weightGrams}g, {i.roastingType})
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-base font-bold text-[#2A2620] block mb-2">₹{recipe.totalPrice}</span>
                      <button
                        onClick={() => addCustomMasalaToCart(recipe)}
                        className="bg-[#C89211] hover:bg-[#A9542B] text-[#2A2620] hover:text-white text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" /> Order
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* 4. ADDRESSES TAB */}
          {activeTab === 'addresses' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#2A2620]/80">Saved Delivery Addresses</span>
                <button
                  onClick={() => setIsAddingAddress(!isAddingAddress)}
                  className="bg-[#3E4B32] hover:bg-[#2A2620] text-[#F4ECD8] text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Add New Address
                </button>
              </div>

              {isAddingAddress && (
                <form onSubmit={handleSaveAddress} className="bg-[#F8F3E6] p-4 rounded-2xl border border-[#3E4B32]/30 space-y-3">
                  <h4 className="text-xs font-bold text-[#3E4B32]">Add Delivery Address</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div>
                      <label className="block text-[10px] font-bold text-[#2A2620]/70">Full Name</label>
                      <input
                        type="text"
                        required
                        value={newAddrForm.fullName}
                        onChange={(e) => setNewAddrForm({ ...newAddrForm, fullName: e.target.value })}
                        className="w-full bg-white border border-[#2A2620]/20 rounded-lg p-2 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#2A2620]/70">Mobile</label>
                      <input
                        type="tel"
                        required
                        value={newAddrForm.mobile}
                        onChange={(e) => setNewAddrForm({ ...newAddrForm, mobile: e.target.value })}
                        className="w-full bg-white border border-[#2A2620]/20 rounded-lg p-2 text-xs"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-bold text-[#2A2620]/70">Street / Flat / Area</label>
                      <input
                        type="text"
                        required
                        value={newAddrForm.street}
                        onChange={(e) => setNewAddrForm({ ...newAddrForm, street: e.target.value })}
                        className="w-full bg-white border border-[#2A2620]/20 rounded-lg p-2 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#2A2620]/70">City</label>
                      <input
                        type="text"
                        required
                        value={newAddrForm.city}
                        onChange={(e) => setNewAddrForm({ ...newAddrForm, city: e.target.value })}
                        className="w-full bg-white border border-[#2A2620]/20 rounded-lg p-2 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#2A2620]/70">Pincode</label>
                      <input
                        type="text"
                        required
                        value={newAddrForm.pincode}
                        onChange={(e) => setNewAddrForm({ ...newAddrForm, pincode: e.target.value })}
                        className="w-full bg-white border border-[#2A2620]/20 rounded-lg p-2 text-xs"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsAddingAddress(false)}
                      className="px-3 py-1.5 text-xs text-[#2A2620]/60 hover:text-[#2A2620] font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-[#C89211] hover:bg-[#b07e0e] text-[#2A2620] text-xs font-bold px-4 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      Save Address
                    </button>
                  </div>
                </form>
              )}

              {userAddresses.length === 0 ? (
                <div className="text-center py-8 text-[#2A2620]/60 text-xs">
                  No saved addresses found. Add an address above!
                </div>
              ) : (
                userAddresses.map((addr) => (
                  <div
                    key={addr.id}
                    className="bg-[#F8F3E6] p-4 rounded-2xl border border-[#2A2620]/15 flex items-start justify-between text-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <strong className="text-[#2A2620] text-sm">{addr.fullName}</strong>
                        {addr.isDefault && (
                          <span className="bg-[#3E4B32]/15 text-[#3E4B32] text-[10px] px-2 py-0.5 rounded font-bold border border-[#3E4B32]/30">
                            DEFAULT
                          </span>
                        )}
                      </div>
                      <p className="text-[#2A2620]/80">{addr.street}, {addr.city}, {addr.state} - {addr.pincode}</p>
                      <p className="text-[#2A2620]/60">Mobile: {addr.mobile}</p>
                    </div>

                    <button
                      onClick={() => deleteAddress(addr.id)}
                      className="text-[#2A2620]/40 hover:text-rose-600 p-1.5 transition-colors cursor-pointer"
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
