import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Product, Order, ProductCategory } from '../types';
import { CATEGORIES } from '../data/initialData';
import {
  ShieldAlert,
  DollarSign,
  ShoppingBag,
  Package,
  Users,
  Plus,
  Trash2,
  Edit2,
  Check,
  Tag,
  BarChart3,
  X,
  Sparkles,
} from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const { setIsAdminMode, showToast } = useApp();

  const [activeAdminTab, setActiveAdminTab] = useState<'dashboard' | 'products' | 'orders' | 'coupons'>('dashboard');
  const [metrics, setMetrics] = useState({
    totalRevenue: 48920,
    totalOrders: 38,
    totalProducts: 24,
    totalCustomers: 124,
    pendingOrders: 5,
  });

  const [productsList, setProductsList] = useState<Product[]>([]);
  const [ordersList, setOrdersList] = useState<Order[]>([]);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);

  // New Product Form state
  const [newProdName, setNewProdName] = useState('');
  const [newProdCategory, setNewProdCategory] = useState<ProductCategory>('Spices');
  const [newProdPrice, setNewProdPrice] = useState(299);
  const [newProdStock, setNewProdStock] = useState(50);
  const [newProdDesc, setNewProdDesc] = useState('');

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((d) => {
        if (d.success) setProductsList(d.data);
      })
      .catch(() => {});

    fetch('/api/orders')
      .then((res) => res.json())
      .then((d) => {
        if (d.success) setOrdersList(d.data);
      })
      .catch(() => {});

    fetch('/api/admin/metrics')
      .then((res) => res.json())
      .then((d) => {
        if (d.success) setMetrics(d.data);
      })
      .catch(() => {});
  }, []);

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProdName.trim()) return;

    try {
      const res = await fetch('/api/admin/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newProdName,
          category: newProdCategory,
          price: Number(newProdPrice),
          stock: Number(newProdStock),
          description: newProdDesc || 'Organic certified premium store item',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setProductsList((prev) => [data.data, ...prev]);
        setIsAddProductOpen(false);
        showToast('Product added to live inventory!', 'success');
        setNewProdName('');
        setNewProdDesc('');
      }
    } catch {
      showToast('Error adding product', 'error');
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setProductsList((prev) => prev.filter((p) => p.id !== id));
        showToast('Product deleted', 'info');
      }
    } catch {
      showToast('Error deleting product', 'error');
    }
  };

  const handleUpdateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrdersList((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
    showToast(`Order ${orderId} status updated to ${newStatus}`);
  };

  const handleSeedDatabase = async () => {
    try {
      const res = await fetch('/api/seed', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        showToast(data.message, 'success');
        const pRes = await fetch('/api/products');
        const pData = await pRes.json();
        if (pData.success) setProductsList(pData.data);
      } else {
        showToast(data.message, 'error');
      }
    } catch {
      showToast('Error syncing with MongoDB Atlas', 'error');
    }
  };

  return (
    <div className="min-h-screen bg-paper text-earth py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Admin Header */}
        <div className="bg-white border border-soft rounded-3xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-cream border border-soft text-olive flex items-center justify-center">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-serif text-earth">Dhaanya Admin Console</h1>
              <p className="text-xs text-stone-500">Manage products, custom recipes, orders & MongoDB database sync</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSeedDatabase}
              className="bg-olive hover:bg-[#4a4a34] text-white text-xs font-bold px-4 py-2 rounded-xl transition shadow-xs flex items-center gap-1.5"
              title="Seed MongoDB Atlas Cluster with Catalog Data"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Seed MongoDB Atlas</span>
            </button>

            <button
              onClick={() => setIsAdminMode(false)}
              className="bg-cream hover:bg-stone-100 text-earth text-xs font-bold px-4 py-2 rounded-xl transition border border-soft"
            >
              Return to Storefront
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-3 border-b border-soft text-xs font-bold pb-2">
          <button
            onClick={() => setActiveAdminTab('dashboard')}
            className={`px-4 py-2 rounded-xl transition ${
              activeAdminTab === 'dashboard' ? 'bg-olive text-white font-bold' : 'bg-cream text-stone-600'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveAdminTab('products')}
            className={`px-4 py-2 rounded-xl transition ${
              activeAdminTab === 'products' ? 'bg-olive text-white font-bold' : 'bg-cream text-stone-600'
            }`}
          >
            Products Catalog ({productsList.length})
          </button>
          <button
            onClick={() => setActiveAdminTab('orders')}
            className={`px-4 py-2 rounded-xl transition ${
              activeAdminTab === 'orders' ? 'bg-olive text-white font-bold' : 'bg-cream text-stone-600'
            }`}
          >
            Customer Orders ({ordersList.length})
          </button>
        </div>

        {/* DASHBOARD TAB */}
        {activeAdminTab === 'dashboard' && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-soft space-y-1 shadow-xs">
                <div className="flex justify-between items-center text-xs text-stone-500">
                  <span>Total Store Revenue</span>
                  <DollarSign className="w-4 h-4 text-olive" />
                </div>
                <div className="text-2xl font-bold text-olive">₹{metrics.totalRevenue}</div>
                <span className="text-[10px] text-olive font-bold">+18.4% from last week</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-soft space-y-1 shadow-xs">
                <div className="flex justify-between items-center text-xs text-stone-500">
                  <span>Total Orders Placed</span>
                  <ShoppingBag className="w-4 h-4 text-olive" />
                </div>
                <div className="text-2xl font-bold text-earth">{metrics.totalOrders}</div>
                <span className="text-[10px] text-olive font-bold">{metrics.pendingOrders} pending dispatch</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-soft space-y-1 shadow-xs">
                <div className="flex justify-between items-center text-xs text-stone-500">
                  <span>Active Catalog Products</span>
                  <Package className="w-4 h-4 text-olive" />
                </div>
                <div className="text-2xl font-bold text-earth">{productsList.length}</div>
                <span className="text-[10px] text-stone-500">22 Categories active</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-soft space-y-1 shadow-xs">
                <div className="flex justify-between items-center text-xs text-stone-500">
                  <span>Registered Customers</span>
                  <Users className="w-4 h-4 text-olive" />
                </div>
                <div className="text-2xl font-bold text-earth">{metrics.totalCustomers}</div>
                <span className="text-[10px] text-olive font-bold">92% retention rate</span>
              </div>
            </div>

            {/* Quick Overview Table */}
            <div className="bg-white p-6 rounded-3xl border border-soft space-y-4 shadow-xs">
              <h3 className="text-sm font-bold text-earth flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-olive" /> Store Sales Analytics Summary
              </h3>
              <p className="text-xs text-stone-600">
                Top selling category is <strong>Wood Pressed Oils</strong>, followed by <strong>Custom Masala Studio</strong> orders. Average order value is ₹742.
              </p>
            </div>
          </div>
        )}

        {/* PRODUCTS TAB */}
        {activeAdminTab === 'products' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-earth">Live Products ({productsList.length})</h3>
              <button
                onClick={() => setIsAddProductOpen(true)}
                className="bg-olive hover:bg-[#4a4a34] text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition"
              >
                <Plus className="w-4 h-4" /> Add New Product
              </button>
            </div>

            {/* Products Table */}
            <div className="bg-white border border-soft rounded-2xl overflow-hidden text-xs shadow-xs">
              <div className="grid grid-cols-12 bg-cream p-3 font-bold text-stone-600 border-b border-soft">
                <div className="col-span-5">Product Name & Category</div>
                <div className="col-span-3">Base Price</div>
                <div className="col-span-2">Stock Level</div>
                <div className="col-span-2 text-right">Actions</div>
              </div>

              <div className="divide-y divide-soft max-h-[500px] overflow-y-auto">
                {productsList.map((prod) => (
                  <div key={prod.id} className="grid grid-cols-12 p-3 items-center hover:bg-cream/50 transition">
                    <div className="col-span-5 flex items-center gap-2">
                      <img src={prod.image} alt="" className="w-8 h-8 rounded-lg object-cover" />
                      <div>
                        <strong className="text-earth block truncate">{prod.name}</strong>
                        <span className="text-[10px] text-olive">{prod.category}</span>
                      </div>
                    </div>
                    <div className="col-span-3 text-olive font-bold">
                      ₹{prod.variants[0]?.price || 299}
                    </div>
                    <div className="col-span-2">
                      <span className="bg-cream px-2 py-0.5 rounded text-[10px] font-bold text-stone-600 border border-soft">
                        {prod.stock} units
                      </span>
                    </div>
                    <div className="col-span-2 text-right">
                      <button
                        onClick={() => handleDeleteProduct(prod.id)}
                        className="p-1 text-stone-400 hover:text-rose-600 transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ORDERS TAB */}
        {activeAdminTab === 'orders' && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-earth">Customer Orders ({ordersList.length})</h3>
            <div className="space-y-3">
              {ordersList.map((ord) => (
                <div key={ord.id} className="bg-white p-4 rounded-2xl border border-soft space-y-3 text-xs shadow-xs">
                  <div className="flex justify-between items-center">
                    <div>
                      <strong className="text-olive text-sm block">{ord.id}</strong>
                      <span className="text-[10px] text-stone-500">
                        Customer: {ord.shippingAddress.fullName} ({ord.shippingAddress.mobile})
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <select
                        value={ord.status}
                        onChange={(e) => handleUpdateOrderStatus(ord.id, e.target.value as any)}
                        className="bg-cream border border-soft text-olive font-bold text-xs rounded-xl px-3 py-1 focus:outline-none"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                      <span className="font-bold text-earth text-base">₹{ord.total}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ADD PRODUCT MODAL */}
        {isAddProductOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white border border-soft w-full max-w-md rounded-3xl p-6 space-y-4 relative text-earth shadow-xl">
              <button
                onClick={() => setIsAddProductOpen(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-earth"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-base font-bold font-serif text-earth">Add New Product to Store</h3>
              <form onSubmit={handleCreateProduct} className="space-y-3 text-xs">
                <div>
                  <label className="block text-stone-600 font-bold mb-1">Product Title</label>
                  <input
                    type="text"
                    required
                    value={newProdName}
                    onChange={(e) => setNewProdName(e.target.value)}
                    placeholder="e.g. Pure Organic Cold Pressed Sesame Oil"
                    className="w-full bg-cream border border-stone-200 rounded-xl p-2.5 text-earth focus:outline-none focus:border-olive"
                  />
                </div>

                <div>
                  <label className="block text-stone-600 font-bold mb-1">Category</label>
                  <select
                    value={newProdCategory}
                    onChange={(e) => setNewProdCategory(e.target.value as ProductCategory)}
                    className="w-full bg-cream border border-stone-200 rounded-xl p-2.5 text-earth focus:outline-none"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat.slug} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-stone-600 font-bold mb-1">Price (₹)</label>
                    <input
                      type="number"
                      required
                      value={newProdPrice}
                      onChange={(e) => setNewProdPrice(Number(e.target.value))}
                      className="w-full bg-cream border border-stone-200 rounded-xl p-2.5 text-earth focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 font-bold mb-1">Stock Qty</label>
                    <input
                      type="number"
                      required
                      value={newProdStock}
                      onChange={(e) => setNewProdStock(Number(e.target.value))}
                      className="w-full bg-cream border border-stone-200 rounded-xl p-2.5 text-earth focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-olive hover:bg-[#4a4a34] text-white font-bold py-3 rounded-xl transition"
                >
                  Save Product to Catalog
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
