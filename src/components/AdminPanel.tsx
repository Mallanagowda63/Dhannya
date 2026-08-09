import React, { useState, useEffect, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { getApiUrl } from '../utils/apiConfig';
import { Product, Order, ProductCategory } from '../types';
import { CATEGORIES, PRODUCTS } from '../data/initialData';
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Layers,
  Warehouse,
  Users,
  Flame,
  Star,
  Ticket,
  TrendingUp,
  Settings,
  RefreshCw,
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  AlertTriangle,
  Search,
  Filter,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  X,
  Menu,
  ChefHat,
  ChevronDown,
  Info,
  DollarSign,
  Activity,
  Mail,
  Tag,
  Clock,
  Sparkles,
  Award,
  Eye,
  PhoneCall,
} from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const { setIsAdminMode, showToast, refreshProducts } = useApp();

  // Admin Portal Auth Gate
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('dhannya_admin_authed') === 'true';
  });
  const [adminEmailInput, setAdminEmailInput] = useState('dhaanyaorganic1@gmail.com');
  const [adminPassInput, setAdminPassInput] = useState('');

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminEmailInput.trim().toLowerCase() === 'dhaanyaorganic1@gmail.com' && adminPassInput === 'Dhaanya@123') {
      sessionStorage.setItem('dhannya_admin_authed', 'true');
      setIsAdminAuthenticated(true);
      showToast('Admin Portal Authenticated Successfully!', 'success');
    } else {
      showToast('Invalid Admin Email or Password!', 'error');
    }
  };

  const handleAdminLogout = () => {
    sessionStorage.removeItem('dhannya_admin_authed');
    setIsAdminAuthenticated(false);
    setIsAdminMode(false);
    showToast('Logged out from Admin Portal', 'info');
  };

  const [activeTab, setActiveTab] = useState<
    | 'dashboard'
    | 'orders'
    | 'products'
    | 'categories'
    | 'inventory'
    | 'customers'
    | 'custom_masala'
    | 'reviews'
    | 'coupons'
    | 'analytics'
    | 'settings'
  >('dashboard');

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Email Notification Modal State
  const [activeEmailModal, setActiveEmailModal] = useState<{
    toEmail: string;
    subject: string;
    body: string;
    orderId: string;
    status: string;
  } | null>(null);

  // Filters & Range
  const [dateRange, setDateRange] = useState<'Today' | 'Yesterday' | '7D' | '30D' | '90D' | '1Y' | 'Custom'>('30D');

  const [isLoading, setIsLoading] = useState(false);

const INITIAL_SAMPLE_ORDERS: Order[] = [
  {
    id: 'ORD-98231',
    userId: 'usr-101',
    items: [
      {
        id: 'ci-1',
        type: 'product',
        name: 'Wood Pressed Cold Pressed Mustard Oil',
        image: '/images/Dailywell_Products/Mustard%20Oil/01.jpg',
        variantWeight: '1 Litre',
        price: 399,
        quantity: 1,
      },
      {
        id: 'ci-2',
        type: 'product',
        name: 'Organic Whole Ground Garam Masala',
        image: '/images/Dailywell_Products/Garam%20Masala/01.jpg',
        variantWeight: '250g',
        price: 320,
        quantity: 1,
      },
    ],
    shippingAddress: {
      id: 'addr-1',
      fullName: 'Anita Kulkarni',
      email: 'dhaanyaorganic1@gmail.com',
      mobile: '+91 98765 43210',
      street: '402 Sunrise Heights, MG Road',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      isDefault: true,
    },
    deliverySlot: 'Morning (9:00 AM - 1:00 PM)',
    paymentMethod: 'UPI',
    subtotal: 719,
    discount: 50,
    tax: 36,
    shippingFee: 0,
    total: 705,
    status: 'Shipped',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    estimatedDelivery: 'Tomorrow, by 2 PM',
    trackingNumber: 'DW-TRK-7892341',
  },
  {
    id: 'ORD-78923',
    userId: 'usr-102',
    items: [
      {
        id: 'ci-3',
        type: 'product',
        name: 'Pure Organic Turmeric Powder (High Curcumin)',
        image: '/images/Dailywell_Products/Turmeric%20Powder/01.jpg',
        variantWeight: '500g',
        price: 249,
        quantity: 2,
      },
    ],
    shippingAddress: {
      id: 'addr-2',
      fullName: 'Rahul Sharma',
      email: 'rahul.sharma@example.com',
      mobile: '+91 98123 45678',
      street: 'Flat 12, Green Park Society',
      city: 'Pune',
      state: 'Maharashtra',
      pincode: '411001',
      isDefault: true,
    },
    deliverySlot: 'Evening (4:00 PM - 8:00 PM)',
    paymentMethod: 'COD',
    subtotal: 498,
    discount: 0,
    tax: 25,
    shippingFee: 40,
    total: 563,
    status: 'Processing',
    createdAt: new Date().toISOString(),
    estimatedDelivery: 'Within 2-3 Days',
    trackingNumber: 'DW-TRK-9812344',
  },
];

  // Data States
  const [analyticsData, setAnalyticsData] = useState<any>(null);
  const [productsList, setProductsList] = useState<Product[]>(PRODUCTS);
  const [ordersList, setOrdersList] = useState<Order[]>(INITIAL_SAMPLE_ORDERS);
  const [couponsList, setCouponsList] = useState<any[]>([]);
  const [categoriesList, setCategoriesList] = useState<any[]>([]);
  const [customersList, setCustomersList] = useState<any[]>([]);
  const [reviewsList, setReviewsList] = useState<any[]>([]);
  const [customMasalasList, setCustomMasalasList] = useState<any[]>([]);

  const [selectedOrderDetails, setSelectedOrderDetails] = useState<Order | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('All');

  // Chart Interactive Hover States
  const [hoveredSalesPoint, setHoveredSalesPoint] = useState<any>(null);
  const [ordersViewMode, setOrdersViewMode] = useState<'count' | 'revenue'>('count');
  const [topProductsMode, setTopProductsMode] = useState<'revenue' | 'units'>('revenue');
  const [activeCustomFormulaModal, setActiveCustomFormulaModal] = useState<any>(null);

  // Product Add Modal State
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [newProdName, setNewProdName] = useState('');
  const [newProdCategory, setNewProdCategory] = useState<ProductCategory>('Spices');
  const [newProdPrice, setNewProdPrice] = useState(299);
  const [newProdStock, setNewProdStock] = useState(50);
  const [newProdDesc, setNewProdDesc] = useState('');
  const [newProdImage, setNewProdImage] = useState('/images/Dailywell_Products/Garam%20Masala/01.jpg');

  // Coupon Add Modal State
  const [isAddCouponOpen, setIsAddCouponOpen] = useState(false);
  const [newCouponCode, setNewCouponCode] = useState('');
  const [newCouponPercent, setNewCouponPercent] = useState(15);
  const [newCouponMinOrder, setNewCouponMinOrder] = useState(499);
  const [newCouponMaxDiscount, setNewCouponMaxDiscount] = useState(300);
  const [newCouponDesc, setNewCouponDesc] = useState('');
  const [newCouponExpiryDate, setNewCouponExpiryDate] = useState('2026-12-31T23:59');

  // Category Add Modal State
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [newCatName, setNewCatName] = useState('');
  const [newCatDesc, setNewCatDesc] = useState('');

  // Fetch Analytics & Database Records safely
  const fetchDashboardData = async () => {
    setIsLoading(true);

    // Products
    try {
      const res = await fetch(getApiUrl('/api/products'));
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setProductsList(json.data);
        }
      }
    } catch (e) {
      console.warn('Using default products catalog fallback');
    }

    // Orders
    try {
      const res = await fetch(getApiUrl('/api/orders'));
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) setOrdersList(json.data);
      }
    } catch (e) {}

    // Analytics
    try {
      const res = await fetch(getApiUrl(`/api/admin/analytics?range=${dateRange}`));
      if (res.ok) {
        const json = await res.json();
        if (json.success) setAnalyticsData(json.data);
      }
    } catch (e) {}

    // Coupons
    try {
      const res = await fetch(getApiUrl('/api/coupons'));
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) setCouponsList(json.data);
      }
    } catch (e) {}

    // Categories
    try {
      const res = await fetch(getApiUrl('/api/categories'));
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) setCategoriesList(json.data);
      }
    } catch (e) {}

    // Customers
    try {
      const res = await fetch(getApiUrl('/api/admin/customers'));
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) setCustomersList(json.data);
      }
    } catch (e) {}

    // Reviews
    try {
      const res = await fetch(getApiUrl('/api/reviews'));
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) setReviewsList(json.data);
      }
    } catch (e) {}

    // Custom Masalas
    try {
      const res = await fetch(getApiUrl('/api/admin/custom-masalas'));
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) setCustomMasalasList(json.data);
      }
    } catch (e) {}

    setIsLoading(false);
  };

  useEffect(() => {
    fetchDashboardData();
  }, [dateRange]);

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProdName.trim()) return;
    try {
      const res = await fetch(getApiUrl('/api/admin/products'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newProdName,
          category: newProdCategory,
          price: Number(newProdPrice) || 299,
          stock: Number(newProdStock) || 50,
          image: newProdImage || '/images/Dailywell_Products/Garam%20Masala/01.jpg',
          description: newProdDesc || '100% pure organic product.',
        }),
      });

      let data: any = {};
      try {
        data = await res.json();
      } catch (jsonErr) {
        console.warn('Response JSON parse error:', jsonErr);
      }

      if (res.ok && data.success) {
        setProductsList((prev) => [data.data, ...prev]);
        refreshProducts();
        showToast(`Product "${newProdName}" added successfully!`, 'success');
        setIsAddProductOpen(false);
        setNewProdName('');
        setNewProdPrice(299);
        setNewProdStock(50);
        setNewProdDesc('');
        setNewProdImage('/images/Dailywell_Products/Garam%20Masala/01.jpg');
      } else {
        showToast(data.message || 'Failed to add product. Please check input values.', 'error');
      }
    } catch (err: any) {
      console.error('Error adding product:', err);
      showToast(err.message || 'Failed to add product', 'error');
    }
  };

  const handleCreateCoupon = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCouponCode.trim()) return;
    try {
      const res = await fetch(getApiUrl('/api/admin/coupons'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: newCouponCode,
          discountPercent: newCouponPercent,
          minOrderValue: newCouponMinOrder,
          maxDiscount: newCouponMaxDiscount,
          description: newCouponDesc,
          expiryDate: newCouponExpiryDate,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setCouponsList((prev) => [data.data, ...prev.filter((c) => c.code !== data.data.code)]);
        showToast(`Custom coupon ${newCouponCode.toUpperCase()} created & saved to database!`, 'success');
        setIsAddCouponOpen(false);
        setNewCouponCode('');
        setNewCouponPercent(15);
        setNewCouponMinOrder(499);
        setNewCouponMaxDiscount(300);
        setNewCouponDesc('');
      }
    } catch {
      showToast('Failed to create coupon', 'error');
    }
  };

  const handleDeleteCoupon = async (code: string) => {
    if (!confirm(`Delete coupon code ${code}?`)) return;
    try {
      const res = await fetch(getApiUrl(`/api/admin/coupons/${code}`), { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setCouponsList((prev) => prev.filter((c) => c.code !== code));
        showToast(`Coupon ${code} deleted from database!`, 'success');
      }
    } catch {
      showToast('Failed to delete coupon', 'error');
    }
  };

  const handleCreateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;
    try {
      const res = await fetch(getApiUrl('/api/admin/categories'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newCatName, description: newCatDesc }),
      });
      const data = await res.json();
      if (data.success) {
        setCategoriesList((prev) => [...prev, data.data]);
        showToast(`Category ${newCatName} created!`, 'success');
        setIsAddCategoryOpen(false);
        setNewCatName('');
        setNewCatDesc('');
      }
    } catch {
      showToast('Failed to create category', 'error');
    }
  };

  const handleDeleteCategory = async (slug: string) => {
    if (!confirm(`Delete category ${slug}?`)) return;
    try {
      const res = await fetch(getApiUrl(`/api/admin/categories/${slug}`), { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setCategoriesList((prev) => prev.filter((c) => c.slug !== slug));
        showToast(`Category deleted!`, 'success');
      }
    } catch {
      showToast('Failed to delete category', 'error');
    }
  };

  const handleDeleteCustomer = async (id: string) => {
    if (!confirm('Delete customer record?')) return;
    try {
      const res = await fetch(getApiUrl(`/api/admin/customers/${id}`), { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setCustomersList((prev) => prev.filter((c) => c.id !== id));
        showToast('Customer deleted!', 'success');
      }
    } catch {
      showToast('Failed to delete customer', 'error');
    }
  };

  const handleDeleteReview = async (id: string) => {
    if (!confirm('Delete product review?')) return;
    try {
      const res = await fetch(getApiUrl(`/api/admin/reviews/${id}`), { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setReviewsList((prev) => prev.filter((r) => r.id !== id));
        showToast('Review deleted!', 'success');
      }
    } catch {
      showToast('Failed to delete review', 'error');
    }
  };

  const handleDeleteCustomMasala = async (id: string) => {
    if (!confirm('Delete custom recipe record?')) return;
    try {
      const res = await fetch(getApiUrl(`/api/admin/custom-masalas/${id}`), { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setCustomMasalasList((prev) => prev.filter((m) => m.id !== id));
        showToast('Custom recipe deleted!', 'success');
      }
    } catch {
      showToast('Failed to delete custom recipe', 'error');
    }
  };

  const handleUpdateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      const res = await fetch(getApiUrl(`/api/admin/orders/${orderId}/status`), {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setOrdersList((prev) =>
          prev.map((o) => (o.id === orderId ? { ...o, status: newStatus as any } : o))
        );
        showToast(`Order ${orderId} updated to ${newStatus} & Email Dispatched!`, 'success');
        if (data.emailNotification) {
          setActiveEmailModal({
            toEmail: data.emailNotification.toEmail,
            subject: data.emailNotification.subject,
            body: data.emailNotification.body,
            orderId,
            status: newStatus,
          });
        }
        fetchDashboardData();
      }
    } catch {
      showToast('Failed to update status', 'error');
    }
  };

  const handleUpdateStock = async (prodId: string, newStock: number) => {
    try {
      const res = await fetch(getApiUrl(`/api/admin/inventory/${prodId}`), {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stock: newStock }),
      });
      const data = await res.json();
      if (data.success) {
        setProductsList((prev) =>
          prev.map((p) => (p.id === prodId ? { ...p, stock: newStock } : p))
        );
        showToast(`Stock updated to ${newStock} units`);
        fetchDashboardData();
      }
    } catch {
      showToast('Failed to update stock', 'error');
    }
  };

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProdName.trim()) return;

    try {
      const res = await fetch(getApiUrl('/api/admin/products'), {
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
        showToast('New product added to inventory!', 'success');
        setNewProdName('');
        setNewProdDesc('');
      }
    } catch {
      showToast('Error creating product', 'error');
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      const res = await fetch(getApiUrl(`/api/admin/products/${id}`), { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setProductsList((prev) => prev.filter((p) => p.id !== id));
        showToast('Product removed from database', 'info');
      }
    } catch {
      showToast('Error removing product', 'error');
    }
  };

  // Extract analytics values
  const kpis = analyticsData?.kpis || {
    totalRevenue: 376860,
    totalRevenueChange: 18.4,
    totalOrders: 1248,
    pendingDispatch: 68,
    activeCatalogProducts: productsList.length || 302,
    activeCategories: 23,
    registeredCustomers: 5131,
    retentionRate: '92%',
  };

  const salesOverview = analyticsData?.salesOverview || [];
  const orderStatus = analyticsData?.orderStatus || [];
  const salesByCategory = analyticsData?.salesByCategory || [];
  const topSellingProducts = analyticsData?.topSellingProducts || [];
  const customerGrowth = analyticsData?.customerGrowth || [];
  const inventoryOverview = analyticsData?.inventoryOverview || { inStock: 240, lowStock: 35, criticalStock: 18, outOfStock: 9 };
  const lowStockAlerts = analyticsData?.lowStockAlerts || [];
  const customMasalaAnalytics = analyticsData?.customMasalaAnalytics || {
    totalOrders: 326,
    totalRevenue: 128450,
    avgWeightGrams: 245,
    avgPrice: 395,
    ordersOverTime: [],
    mostSelectedIngredients: [],
    roastingPreference: [],
  };

  // Chart max calculations for SVG scaling
  const maxRevenue = useMemo(
    () => Math.max(...salesOverview.map((s: any) => s.revenue || 0), 1000),
    [salesOverview]
  );
  const maxOrders = useMemo(
    () => Math.max(...salesOverview.map((s: any) => s.orders || 0), 10),
    [salesOverview]
  );

  if (!isAdminAuthenticated) {
    return (
      <div className="fixed inset-0 bg-[#faf8f4] z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-stone-200 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-stone-900 text-amber-300 font-serif font-black text-2xl mx-auto flex items-center justify-center shadow-md">
              Dh
            </div>
            <h2 className="text-2xl font-bold font-serif text-earth">Dhannya Admin Portal</h2>
            <p className="text-xs text-stone-500">Enter your store administrator credentials to sign in</p>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Admin Email</label>
              <input
                type="email"
                required
                value={adminEmailInput}
                onChange={(e) => setAdminEmailInput(e.target.value)}
                placeholder="dhaanyaorganic1@gmail.com"
                className="w-full bg-[#faf8f4] border border-stone-200 rounded-xl px-4 py-3 text-sm font-bold text-earth focus:outline-none focus:border-olive"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Admin Password</label>
              <input
                type="password"
                required
                value={adminPassInput}
                onChange={(e) => setAdminPassInput(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-[#faf8f4] border border-stone-200 rounded-xl px-4 py-3 text-sm font-mono text-earth focus:outline-none focus:border-olive"
              />
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsAdminMode(false)}
                className="flex-1 py-3 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 hover:bg-stone-50 transition cursor-pointer"
              >
                Back to Store
              </button>
              <button
                type="submit"
                className="flex-1 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 font-serif font-bold text-sm shadow-md transition cursor-pointer"
              >
                Sign In to Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f4] text-earth flex flex-col font-sans">
      {/* Top Admin Navigation Header */}
      <header className="bg-stone-900 text-white border-b border-stone-800 sticky top-0 z-40 px-4 sm:px-6 py-3.5 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 transition"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-700 flex items-center justify-center font-serif font-black text-amber-300 text-lg shadow-sm">
              Dh
            </div>
            <div>
              <h1 className="text-lg font-bold font-serif tracking-tight text-white flex items-center gap-2">
                <span>Dhannya Admin Dashboard</span>
                <span className="bg-emerald-800 text-emerald-200 text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full border border-emerald-700">
                  PRO
                </span>
              </h1>
              <p className="text-xs text-stone-400 hidden sm:block">
                Store Intelligence & Control Center
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchDashboardData}
            disabled={isLoading}
            className="flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-stone-200 px-3.5 py-2 rounded-xl text-xs font-bold border border-stone-700 transition cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-amber-400' : ''}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>

          <button
            onClick={handleAdminLogout}
            className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-bold px-3.5 py-2 rounded-xl text-xs transition cursor-pointer shadow-xs"
            title="Lock & Logout Admin Portal"
          >
            <span>Lock / Logout</span>
          </button>

          <button
            onClick={() => setIsAdminMode(false)}
            className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-3.5 py-2 rounded-xl text-xs transition cursor-pointer shadow-xs"
          >
            <span>Exit Admin</span>
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      <div className="flex flex-1 relative">
        {/* Admin Sidebar */}
        <aside
          className={`bg-white border-r border-stone-200/90 w-64 shrink-0 transition-all duration-300 z-30 flex flex-col justify-between ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full absolute h-full'
          }`}
        >
          <div className="p-4 space-y-1">
            <div className="px-3 py-2 text-[11px] font-extrabold text-stone-600 uppercase tracking-widest">
              Store Management
            </div>

            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'orders', label: 'Orders', icon: ShoppingBag, badge: kpis.pendingDispatch },
              { id: 'products', label: 'Products', icon: Package, badge: productsList.length },
              { id: 'categories', label: 'Categories', icon: Layers },
              { id: 'inventory', label: 'Inventory', icon: Warehouse, badge: lowStockAlerts.length },
              { id: 'customers', label: 'Customers', icon: Users },
              { id: 'custom_masala', label: 'Custom Masala', icon: ChefHat },
              { id: 'reviews', label: 'Reviews', icon: Star },
              { id: 'coupons', label: 'Coupons', icon: Ticket },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp },
              { id: 'settings', label: 'Settings', icon: Settings },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#2b3e2a] text-white shadow-sm'
                      : 'text-stone-700 hover:bg-[#faf8f4] hover:text-earth'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-stone-600'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span
                      className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-amber-400 text-stone-900' : 'bg-stone-100 text-stone-700 border border-stone-200'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="p-4 border-t border-stone-200/80 bg-[#faf8f4] m-3 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-olive text-white flex items-center justify-center font-bold text-sm">
                AD
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-earth truncate">Store Admin</p>
                <p className="text-[10px] text-stone-600 truncate">dhaanyaorganic1@gmail.com</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Dashboard Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8 overflow-y-auto max-w-[1536px] mx-auto w-full">
          {/* Dashboard Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-stone-200/80 shadow-xs">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-earth tracking-tight">
                {activeTab === 'dashboard' && 'Dhannya Store Dashboard'}
                {activeTab === 'orders' && 'Orders Management'}
                {activeTab === 'products' && 'Product Inventory Catalog'}
                {activeTab === 'categories' && 'Store Categories'}
                {activeTab === 'inventory' && 'Stock Inventory & Restock'}
                {activeTab === 'customers' && 'Registered Customers'}
                {activeTab === 'custom_masala' && 'Custom Masala Analytics'}
                {activeTab === 'reviews' && 'Product Reviews'}
                {activeTab === 'coupons' && 'Discount Coupons'}
                {activeTab === 'analytics' && 'Advanced Store Analytics'}
                {activeTab === 'settings' && 'Store Settings'}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Welcome back, Admin! Here's what's happening with your store today.
              </p>
            </div>

            {/* Date Range Selector */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-[#faf8f4] border border-stone-200 px-3.5 py-2 rounded-2xl text-xs font-bold">
                <Calendar className="w-4 h-4 text-olive" />
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value as any)}
                  className="bg-transparent font-bold text-earth focus:outline-none cursor-pointer"
                >
                  <option value="Today">Today</option>
                  <option value="Yesterday">Yesterday</option>
                  <option value="7D">Last 7 Days</option>
                  <option value="30D">Last 30 Days</option>
                  <option value="90D">Last 90 Days</option>
                  <option value="1Y">This Year</option>
                  <option value="Custom">Custom Range</option>
                </select>
              </div>
            </div>
          </div>

          {/* DASHBOARD TAB VIEW */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* TOP 4 KPI CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* CARD 1: Total Store Revenue */}
                <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-xs flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-stone-600">
                      Total Store Revenue
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-lg">
                      ₹
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold font-serif text-earth">
                      ₹{kpis.totalRevenue.toLocaleString()}
                    </h3>
                    <p className="text-xs font-bold text-emerald-700 flex items-center gap-1 mt-2">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>↑ {kpis.totalRevenueChange}% from previous period</span>
                    </p>
                  </div>
                </div>

                {/* CARD 2: Total Orders Placed */}
                <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-stone-600">
                      Total Orders Placed
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold font-serif text-earth">
                      {kpis.totalOrders.toLocaleString()}
                    </h3>
                    <p className="text-xs font-bold text-amber-800 mt-2">
                      {kpis.pendingDispatch} pending dispatch
                    </p>
                  </div>
                </div>

                {/* CARD 3: Active Catalog Products */}
                <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-stone-600">
                      Active Catalog Products
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center font-bold">
                      <Package className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold font-serif text-earth">
                      {kpis.activeCatalogProducts}
                    </h3>
                    <p className="text-xs font-bold text-stone-600 mt-2">
                      {kpis.activeCategories} categories active
                    </p>
                  </div>
                </div>

                {/* CARD 4: Registered Customers */}
                <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-stone-600">
                      Registered Customers
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-800 flex items-center justify-center font-bold">
                      <Users className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold font-serif text-earth">
                      {kpis.registeredCustomers.toLocaleString()}
                    </h3>
                    <p className="text-xs font-bold text-stone-600 mt-2">
                      {kpis.retentionRate} customer retention rate
                    </p>
                  </div>
                </div>
              </div>

              {/* SALES OVERVIEW (LINE / AREA CHART) */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200/60 pb-4">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-olive">
                      REVENUE & VOLUME TRENDS
                    </span>
                    <h3 className="text-2xl font-bold font-serif text-earth mt-1">
                      Sales Overview
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 bg-[#faf8f4] p-1 rounded-2xl border border-stone-200 text-xs font-bold">
                    {['7D', '30D', '90D', '1Y'].map((range) => (
                      <button
                        key={range}
                        onClick={() => setDateRange(range as any)}
                        className={`px-3 py-1.5 rounded-xl transition cursor-pointer ${
                          dateRange === range ? 'bg-[#2b3e2a] text-white shadow-xs' : 'text-stone-600 hover:text-earth'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SVG Area & Line Chart */}
                <div className="relative h-72 w-full pt-4">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 800 240">
                    <defs>
                      <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#556b2f" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#556b2f" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Grid lines */}
                    {[0, 60, 120, 180, 240].map((y, i) => (
                      <line key={i} x1="0" y1={y} x2="800" y2={y} stroke="#e7e5e4" strokeDasharray="4 4" />
                    ))}

                    {/* Area Path */}
                    {salesOverview.length > 1 && (
                      <path
                        d={`M 0,240 ${salesOverview
                          .map((pt: any, idx: number) => {
                            const x = (idx / (salesOverview.length - 1)) * 800;
                            const y = 240 - (pt.revenue / maxRevenue) * 200;
                            return `L ${x},${y}`;
                          })
                          .join(' ')} L 800,240 Z`}
                        fill="url(#salesGrad)"
                      />
                    )}

                    {/* Smooth Curve Line */}
                    {salesOverview.length > 1 && (
                      <path
                        d={salesOverview
                          .map((pt: any, idx: number) => {
                            const x = (idx / (salesOverview.length - 1)) * 800;
                            const y = 240 - (pt.revenue / maxRevenue) * 200;
                            return `${idx === 0 ? 'M' : 'L'} ${x},${y}`;
                          })
                          .join(' ')}
                        fill="none"
                        stroke="#2b3e2a"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    )}

                    {/* Interactive Hover Circles */}
                    {salesOverview.map((pt: any, idx: number) => {
                      const x = (idx / (salesOverview.length - 1)) * 800;
                      const y = 240 - (pt.revenue / maxRevenue) * 200;
                      return (
                        <circle
                          key={idx}
                          cx={x}
                          cy={y}
                          r="5"
                          className="fill-amber-400 stroke-[#2b3e2a] stroke-2 hover:r-8 transition-all cursor-pointer"
                          onMouseEnter={() => setHoveredSalesPoint({ ...pt, x, y })}
                          onMouseLeave={() => setHoveredSalesPoint(null)}
                        />
                      );
                    })}
                  </svg>

                  {/* Hover Tooltip Popup */}
                  {hoveredSalesPoint && (
                    <div
                      className="absolute z-20 bg-stone-900 text-white p-3 rounded-2xl shadow-xl text-xs font-sans pointer-events-none transform -translate-x-1/2 -translate-y-full border border-stone-700"
                      style={{ left: `${(hoveredSalesPoint.x / 800) * 100}%`, top: `${(hoveredSalesPoint.y / 240) * 100 - 10}%` }}
                    >
                      <p className="font-bold text-amber-300">{hoveredSalesPoint.date}</p>
                      <p className="font-semibold text-white">Revenue: ₹{hoveredSalesPoint.revenue.toLocaleString()}</p>
                      <p className="text-stone-300">Orders: {hoveredSalesPoint.orders} placed</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-stone-600 font-bold border-t border-stone-200/60 pt-3">
                  <span>{salesOverview[0]?.date || 'Start'}</span>
                  <span>{salesOverview[Math.floor(salesOverview.length / 2)]?.date || 'Mid'}</span>
                  <span>{salesOverview[salesOverview.length - 1]?.date || 'End'}</span>
                </div>
              </div>

              {/* 2-COLUMN SECTION: ORDERS OVERVIEW BAR CHART & ORDER STATUS DONUT CHART */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* ORDERS OVERVIEW (BAR CHART) */}
                <div className="bg-white p-6 sm:p-7 rounded-3xl border border-stone-200/80 shadow-xs space-y-6">
                  <div className="flex items-center justify-between border-b border-stone-200/60 pb-4">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-olive">
                        DAILY FULFILLMENT
                      </span>
                      <h3 className="text-xl font-bold font-serif text-earth mt-1">
                        Orders Overview
                      </h3>
                    </div>

                    <select
                      value={ordersViewMode}
                      onChange={(e) => setOrdersViewMode(e.target.value as any)}
                      className="bg-[#faf8f4] border border-stone-200 px-3 py-1.5 rounded-xl text-xs font-bold text-earth cursor-pointer"
                    >
                      <option value="count">Order Count</option>
                      <option value="revenue">Revenue (₹)</option>
                    </select>
                  </div>

                  <div className="h-60 w-full flex items-end justify-between gap-2 pt-4">
                    {salesOverview.slice(-14).map((pt: any, idx: number) => {
                      const val = ordersViewMode === 'count' ? pt.orders : pt.revenue;
                      const maxVal = ordersViewMode === 'count' ? maxOrders : maxRevenue;
                      const heightPct = Math.max(10, Math.round((val / maxVal) * 100));

                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2 group relative">
                          {/* Tooltip hover */}
                          <div className="opacity-0 group-hover:opacity-100 transition absolute -top-8 bg-stone-900 text-white text-[10px] px-2 py-1 rounded-md shadow-md z-10 whitespace-nowrap">
                            {pt.date}: {ordersViewMode === 'count' ? `${pt.orders} Orders` : `₹${pt.revenue}`}
                          </div>

                          <div
                            style={{ height: `${heightPct}%` }}
                            className="w-full bg-[#b0534c] hover:bg-[#963d37] rounded-t-xl transition-all duration-300 shadow-2xs"
                          />
                          <span className="text-[10px] text-stone-600 font-bold truncate">
                            {pt.date.split(' ')[1] || pt.date}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* ORDER STATUS (DONUT CHART) */}
                <div className="bg-white p-6 sm:p-7 rounded-3xl border border-stone-200/80 shadow-xs space-y-6">
                  <div className="border-b border-stone-200/60 pb-4">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-olive">
                      ORDER LIFECYCLE
                    </span>
                    <h3 className="text-xl font-bold font-serif text-earth mt-1">
                      Order Status Breakdown
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    {/* SVG Donut Chart */}
                    <div className="relative w-44 h-44 shrink-0">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e7e5e4"
                          strokeWidth="3.8"
                        />
                        {orderStatus.reduce(
                          (acc: { paths: any[]; cumulative: number }, item: any) => {
                            const strokeDash = `${item.percentage} ${100 - item.percentage}`;
                            const strokeOffset = 100 - acc.cumulative;
                            acc.paths.push(
                              <path
                                key={item.status}
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke={item.color}
                                strokeWidth="4.2"
                                strokeDasharray={strokeDash}
                                strokeDashoffset={strokeOffset}
                              />
                            );
                            acc.cumulative += item.percentage;
                            return acc;
                          },
                          { paths: [], cumulative: 0 }
                        ).paths}
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <span className="text-2xl font-black font-serif text-earth">{kpis.totalOrders}</span>
                        <span className="text-[10px] uppercase font-bold text-stone-600 tracking-wider">Total</span>
                      </div>
                    </div>

                    {/* Donut Legend */}
                    <div className="flex-1 grid grid-cols-2 gap-2 text-xs">
                      {orderStatus.map((st: any) => (
                        <div key={st.status} className="flex items-center gap-2 p-2 rounded-xl bg-[#faf8f4] border border-stone-200/60">
                          <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: st.color }} />
                          <div>
                            <p className="font-bold text-earth">{st.status}</p>
                            <p className="text-[10px] text-stone-600 font-semibold">{st.count} ({st.percentage}%)</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 2-COLUMN SECTION: SALES BY CATEGORY & TOP SELLING PRODUCTS */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* SALES BY CATEGORY */}
                <div className="bg-white p-6 sm:p-7 rounded-3xl border border-stone-200/80 shadow-xs space-y-6">
                  <div className="border-b border-stone-200/60 pb-4">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-olive">
                      CATEGORY PERFORMANCE
                    </span>
                    <h3 className="text-xl font-bold font-serif text-earth mt-1">
                      Sales by Category
                    </h3>
                  </div>

                  <div className="space-y-3.5">
                    {salesByCategory.map((cat: any) => (
                      <div key={cat.category} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className="text-earth flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                            {cat.category}
                          </span>
                          <span className="text-stone-700">₹{cat.revenue.toLocaleString()} ({cat.percentage}%)</span>
                        </div>
                        <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{ width: `${cat.percentage}%`, backgroundColor: cat.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TOP SELLING PRODUCTS */}
                <div className="bg-white p-6 sm:p-7 rounded-3xl border border-stone-200/80 shadow-xs space-y-6">
                  <div className="flex items-center justify-between border-b border-stone-200/60 pb-4">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-olive">
                        CATALOG LEADERBOARD
                      </span>
                      <h3 className="text-xl font-bold font-serif text-earth mt-1">
                        Top Selling Products
                      </h3>
                    </div>

                    <select
                      value={topProductsMode}
                      onChange={(e) => setTopProductsMode(e.target.value as any)}
                      className="bg-[#faf8f4] border border-stone-200 px-3 py-1.5 rounded-xl text-xs font-bold text-earth cursor-pointer"
                    >
                      <option value="revenue">By Revenue (₹)</option>
                      <option value="units">By Units Sold</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    {topSellingProducts.slice(0, 6).map((prod: any, idx: number) => (
                      <div key={prod.id} className="flex items-center justify-between p-3 rounded-2xl bg-[#faf8f4] border border-stone-200/70">
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-xs">
                            #{idx + 1}
                          </span>
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-earth font-serif">{prod.name}</h4>
                            <p className="text-[10px] text-stone-600 font-semibold">{prod.category}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-extrabold text-earth">
                            {topProductsMode === 'revenue' ? `₹${prod.revenue.toLocaleString()}` : `${prod.unitsSold} units`}
                          </p>
                          <p className="text-[10px] text-emerald-700 font-bold">Top Seller</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CUSTOM MASALA ANALYTICS SECTION */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-200/60 pb-4 gap-4">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-terracotta">
                      PROPRIETARY SPICE STUDIO
                    </span>
                    <h3 className="text-2xl font-bold font-serif text-earth mt-1 flex items-center gap-2">
                      <ChefHat className="w-6 h-6 text-terracotta" />
                      <span>Custom Masala Analytics</span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-bold text-stone-700">
                    <span className="bg-[#faf8f4] border border-stone-200 px-3 py-1.5 rounded-xl">
                      Avg Weight: <strong className="text-earth">{customMasalaAnalytics.avgWeightGrams}g</strong>
                    </span>
                    <span className="bg-[#faf8f4] border border-stone-200 px-3 py-1.5 rounded-xl">
                      Avg Batch Price: <strong className="text-earth">₹{customMasalaAnalytics.avgPrice}</strong>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Most Selected Ingredients Ranking */}
                  <div className="lg:col-span-2 space-y-3">
                    <h4 className="text-sm font-bold text-earth uppercase tracking-wider font-serif">
                      Most Selected Ingredients
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {customMasalaAnalytics.mostSelectedIngredients.map((ing: any) => (
                        <div key={ing.name} className="p-3 rounded-2xl bg-[#faf8f4] border border-stone-200/70 space-y-1">
                          <div className="flex justify-between text-xs font-bold">
                            <span className="text-earth">{ing.name}</span>
                            <span className="text-olive">{ing.count} batches ({ing.percentage}%)</span>
                          </div>
                          <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                            <div
                              className="bg-olive h-full rounded-full"
                              style={{ width: `${ing.percentage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Roasting Preference Donut */}
                  <div className="bg-[#faf8f4] p-5 rounded-3xl border border-stone-200/80 flex flex-col items-center justify-center text-center space-y-4">
                    <h4 className="text-sm font-bold text-earth uppercase tracking-wider font-serif">
                      Roasting Preference
                    </h4>

                    <div className="relative w-36 h-36">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#b0534c"
                          strokeWidth="4.5"
                          strokeDasharray="74 26"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#556b2f"
                          strokeWidth="4.5"
                          strokeDasharray="26 74"
                          strokeDashoffset="-74"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl font-black font-serif text-earth">74%</span>
                        <span className="text-[10px] uppercase font-bold text-stone-600">Roasted</span>
                      </div>
                    </div>

                    <div className="flex gap-4 text-xs font-bold">
                      <span className="flex items-center gap-1.5 text-[#b0534c]">
                        <span className="w-3 h-3 rounded-full bg-[#b0534c]" />
                        Roasted (74%)
                      </span>
                      <span className="flex items-center gap-1.5 text-olive">
                        <span className="w-3 h-3 rounded-full bg-olive" />
                        Raw (26%)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RECENT ORDERS TABLE */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-stone-200/60 pb-4">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-olive">
                      LIVE FULFILLMENT LOG
                    </span>
                    <h3 className="text-2xl font-bold font-serif text-earth mt-1">
                      Recent Orders
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className="text-xs font-bold text-olive hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View All Orders ({ordersList.length})</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-stone-200 text-stone-600 font-extrabold uppercase tracking-wider text-[11px]">
                        <th className="py-3 px-4">Order ID</th>
                        <th className="py-3 px-4">Customer</th>
                        <th className="py-3 px-4">Date</th>
                        <th className="py-3 px-4">Items</th>
                        <th className="py-3 px-4">Amount</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 font-medium">
                      {ordersList.slice(0, 8).map((order) => (
                        <tr key={order.id} className="hover:bg-[#faf8f4] transition">
                          <td className="py-3.5 px-4 font-bold text-earth font-mono">
                            <div className="flex items-center gap-2.5">
                              {order.items && order.items.length > 0 && (
                                <img
                                  src={order.items[0]?.image || order.items[0]?.product?.image || '/images/Dailywell_Products/Garam%20Masala/01.jpg'}
                                  alt={order.id}
                                  className="w-10 h-10 rounded-xl object-cover border border-stone-200 shrink-0"
                                  onError={(e) => {
                                    e.currentTarget.src = '/images/Dailywell_Products/Garam%20Masala/01.jpg';
                                  }}
                                />
                              )}
                              <div>
                                <span className="font-bold text-olive font-mono block">{order.id}</span>
                                <span className="text-xs text-earth font-serif font-bold block truncate max-w-[140px]">
                                  {order.items[0]?.name || order.items[0]?.product?.name || 'Organic Spice'}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-4 font-bold">{order.shippingAddress?.fullName || 'Customer'}</td>
                          <td className="py-3.5 px-4 text-stone-600">
                            {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'Today'}
                          </td>
                          <td className="py-3.5 px-4 text-stone-600">
                            <div className="flex items-center gap-1">
                              {order.items.slice(0, 3).map((it: any, idx: number) => (
                                <img
                                  key={idx}
                                  src={it.image || it.product?.image || '/images/Dailywell_Products/Garam%20Masala/01.jpg'}
                                  alt={it.name || it.product?.name || 'Item'}
                                  className="w-6 h-6 rounded-lg object-cover border border-stone-200"
                                  title={it.name || it.product?.name || 'Ordered Item'}
                                  onError={(e) => {
                                    e.currentTarget.src = '/images/Dailywell_Products/Garam%20Masala/01.jpg';
                                  }}
                                />
                              ))}
                              <span className="text-xs font-bold text-earth ml-1">{order.items.length} Items</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4 font-extrabold text-earth">₹{order.total}</td>
                          <td className="py-3.5 px-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                                order.status === 'Delivered'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : order.status === 'Dispatched' || order.status === 'Shipped'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-amber-100 text-amber-800'
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => setSelectedOrderDetails(order)}
                                className="px-2.5 py-1 rounded-xl bg-amber-50 text-olive hover:bg-amber-100 border border-amber-200 text-xs font-bold flex items-center gap-1 transition cursor-pointer"
                                title="View Full Order Details"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>View</span>
                              </button>
                              <select
                                value={order.status}
                                onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                                className="bg-white border border-stone-200 rounded-xl px-2.5 py-1 text-xs font-bold text-earth focus:outline-none cursor-pointer"
                              >
                                <option value="Processing">Processing</option>
                                <option value="Confirmed">Confirmed</option>
                                <option value="Dispatched">Dispatched</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Cancelled">Cancelled</option>
                              </select>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* PRODUCTS TAB VIEW */}
          {activeTab === 'products' && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200/60 pb-4">
                <div>
                  <h3 className="text-2xl font-bold font-serif text-earth">Product Inventory Catalog</h3>
                  <p className="text-xs text-stone-600">Total {productsList.length} items registered in database</p>
                </div>

                <button
                  onClick={() => setIsAddProductOpen(true)}
                  className="bg-olive hover:bg-[#455726] text-white font-bold px-5 py-2.5 rounded-2xl text-xs flex items-center gap-2 shadow-sm transition cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Product</span>
                </button>
              </div>

              {/* Products Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-600 font-extrabold uppercase tracking-wider text-[11px]">
                      <th className="py-3 px-4">Item</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Base Price</th>
                      <th className="py-3 px-4">Live Stock</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium">
                    {productsList.map((prod) => (
                      <tr key={prod.id} className="hover:bg-[#faf8f4] transition">
                        <td className="py-3 px-4 flex items-center gap-3">
                          <img src={prod.image} alt={prod.name} className="w-10 h-10 rounded-xl object-cover border border-stone-200" />
                          <span className="font-bold text-earth font-serif">{prod.name}</span>
                        </td>
                        <td className="py-3 px-4 text-stone-600 font-semibold">{prod.category}</td>
                        <td className="py-3 px-4 font-bold text-earth">₹{prod.variants[0]?.price || 299}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <input
                              type="number"
                              value={prod.stock}
                              onChange={(e) => handleUpdateStock(prod.id, Number(e.target.value))}
                              className="w-16 bg-[#faf8f4] border border-stone-200 rounded-xl px-2 py-1 font-bold text-xs text-center"
                            />
                            <span className="text-[10px] text-stone-500 font-bold">units</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-right space-x-2">
                          <button
                            onClick={() => handleDeleteProduct(prod.id)}
                            className="p-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition cursor-pointer"
                            title="Delete Product"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ORDERS TAB VIEW */}
          {activeTab === 'orders' && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-xs space-y-6">
              <h3 className="text-2xl font-bold font-serif text-earth border-b border-stone-200/60 pb-4">
                All Store Orders ({ordersList.length})
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-600 font-extrabold uppercase tracking-wider text-[11px]">
                      <th className="py-3 px-4">Order ID</th>
                      <th className="py-3 px-4">Customer</th>
                      <th className="py-3 px-4">Address</th>
                      <th className="py-3 px-4">Total Amount</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Update Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium">
                    {ordersList.map((order) => (
                      <tr key={order.id} className="hover:bg-[#faf8f4] transition">
                        <td className="py-3.5 px-4 font-mono font-bold text-earth">
                          <div className="flex items-center gap-2.5">
                            {order.items && order.items.length > 0 && (
                              <img
                                src={order.items[0]?.image || order.items[0]?.product?.image || '/images/Dailywell_Products/Garam%20Masala/01.jpg'}
                                alt={order.id}
                                className="w-10 h-10 rounded-xl object-cover border border-stone-200 shrink-0"
                                onError={(e) => {
                                  e.currentTarget.src = '/images/Dailywell_Products/Garam%20Masala/01.jpg';
                                }}
                              />
                            )}
                            <div>
                              <span className="font-bold text-olive font-mono block">{order.id}</span>
                              <div className="mt-0.5 space-y-0.5">
                                {order.items.slice(0, 3).map((it: any, idx: number) => (
                                  <span key={idx} className="text-[11px] font-bold text-earth font-serif block truncate max-w-[160px]">
                                    • {it.name || it.product?.name || 'Organic Product'} ({it.variantWeight || it.selectedWeight || 'Std'})
                                  </span>
                                ))}
                                {order.items.length > 3 && (
                                  <span className="text-[10px] text-stone-500 font-sans block">
                                    + {order.items.length - 3} more items
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 font-bold">{order.shippingAddress?.fullName || 'Anita Kulkarni'}</td>
                        <td className="py-3.5 px-4 text-stone-600 text-xs">
                          {order.shippingAddress?.street}, {order.shippingAddress?.city}
                        </td>
                        <td className="py-3.5 px-4 font-extrabold text-earth">₹{order.total}</td>
                        <td className="py-3.5 px-4 font-bold text-olive">{order.status}</td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setSelectedOrderDetails(order)}
                              className="px-3 py-1.5 rounded-xl bg-amber-50 text-olive hover:bg-amber-100 border border-amber-200 text-xs font-bold flex items-center gap-1 transition cursor-pointer"
                              title="View Order Details"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>View Details</span>
                            </button>
                            <select
                              value={order.status}
                              onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                              className="bg-white border border-stone-200 rounded-xl px-3 py-1.5 text-xs font-bold cursor-pointer"
                            >
                              <option value="Processing">Processing</option>
                              <option value="Confirmed">Confirmed</option>
                              <option value="Dispatched">Dispatched</option>
                              <option value="Delivered">Delivered</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* INVENTORY TAB VIEW */}
          {activeTab === 'inventory' && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-xs space-y-6">
              <h3 className="text-2xl font-bold font-serif text-earth border-b border-stone-200/60 pb-4">
                Inventory Stock Control
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <p className="text-xs font-bold uppercase">In Stock Products</p>
                  <p className="text-2xl font-black">{inventoryOverview.inStock}</p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900">
                  <p className="text-xs font-bold uppercase">Low Stock Products</p>
                  <p className="text-2xl font-black">{inventoryOverview.lowStock}</p>
                </div>
                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900">
                  <p className="text-xs font-bold uppercase">Critical Stock</p>
                  <p className="text-2xl font-black">{inventoryOverview.criticalStock}</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-100 border border-stone-300 text-stone-900">
                  <p className="text-xs font-bold uppercase">Out of Stock</p>
                  <p className="text-2xl font-black">{inventoryOverview.outOfStock}</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-600 font-extrabold uppercase tracking-wider text-[11px]">
                      <th className="py-3 px-4">Product Name</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Current Stock</th>
                      <th className="py-3 px-4">Stock Status</th>
                      <th className="py-3 px-4 text-right">Quick Restock</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium">
                    {productsList.map((prod) => (
                      <tr key={prod.id} className="hover:bg-[#faf8f4] transition">
                        <td className="py-3 px-4 font-bold text-earth font-serif">{prod.name}</td>
                        <td className="py-3 px-4 text-stone-600">{prod.category}</td>
                        <td className="py-3 px-4 font-bold">{prod.stock} Units</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                              prod.stock > 15
                                ? 'bg-emerald-100 text-emerald-800'
                                : prod.stock > 5
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {prod.stock > 15 ? 'In Stock' : prod.stock > 5 ? 'Low Stock' : 'Critical Stock'}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={() => handleUpdateStock(prod.id, prod.stock + 50)}
                            className="bg-olive hover:bg-[#455726] text-white px-3 py-1 rounded-xl text-xs font-bold transition cursor-pointer"
                          >
                            + Restock 50
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* COUPONS TAB VIEW */}
          {activeTab === 'coupons' && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200/60 pb-4">
                <div>
                  <h3 className="text-2xl font-bold font-serif text-earth flex items-center gap-2">
                    <Tag className="w-6 h-6 text-olive" />
                    <span>Discount Coupons & Promo Offers</span>
                  </h3>
                  <p className="text-xs text-stone-600">
                    Create custom coupons with timer expiration rules. All coupons are stored in MongoDB Atlas and immediately valid at checkout!
                  </p>
                </div>

                <button
                  onClick={() => setIsAddCouponOpen(true)}
                  className="bg-olive hover:bg-[#455726] text-white font-bold px-5 py-2.5 rounded-2xl text-xs flex items-center gap-2 shadow-sm transition cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Custom Coupon</span>
                </button>
              </div>

              {/* Coupons Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-600 font-extrabold uppercase tracking-wider text-[11px]">
                      <th className="py-3 px-4">Coupon Code</th>
                      <th className="py-3 px-4">Discount</th>
                      <th className="py-3 px-4">Min Order Value</th>
                      <th className="py-3 px-4">Max Discount</th>
                      <th className="py-3 px-4">Expiry Date & Timer</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Delete Option</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium">
                    {couponsList.map((c) => {
                      const isExpired = c.expiryDate && new Date(c.expiryDate).getTime() < Date.now();
                      return (
                        <tr key={c.code} className="hover:bg-[#faf8f4] transition">
                          <td className="py-3.5 px-4 font-bold text-earth">
                            <span className="bg-amber-100 text-amber-900 border border-amber-300 font-mono px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider">
                              {c.code}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 font-extrabold text-olive text-sm">
                            {c.discountPercent}% OFF
                          </td>
                          <td className="py-3.5 px-4 font-bold text-stone-700">₹{c.minOrderValue || c.minOrderAmount || 0}</td>
                          <td className="py-3.5 px-4 font-bold text-stone-700">₹{c.maxDiscount || 500}</td>
                          <td className="py-3.5 px-4 text-stone-600">
                            {c.expiryDate ? (
                              <div className="flex items-center gap-1.5 font-mono text-xs">
                                <Clock className="w-3.5 h-3.5 text-stone-500" />
                                <span className={isExpired ? 'text-red-600 font-bold' : 'text-emerald-700 font-bold'}>
                                  {new Date(c.expiryDate).toLocaleString('en-IN', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                  })}
                                </span>
                              </div>
                            ) : (
                              <span className="text-stone-600 font-bold text-xs">No Expiry Timer</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4">
                            <span
                              className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                                isExpired
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-emerald-100 text-emerald-800'
                              }`}
                            >
                              {isExpired ? 'EXPIRED' : 'ACTIVE'}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <button
                              onClick={() => handleDeleteCoupon(c.code)}
                              className="p-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition cursor-pointer"
                              title="Delete Coupon"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* CATEGORIES TAB VIEW */}
          {activeTab === 'categories' && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200/60 pb-4">
                <div>
                  <h3 className="text-2xl font-bold font-serif text-earth">Categories Catalog ({categoriesList.length})</h3>
                  <p className="text-xs text-stone-600">Manage all organic product categories linked to database</p>
                </div>
                <button
                  onClick={() => setIsAddCategoryOpen(true)}
                  className="bg-olive hover:bg-[#455726] text-white font-bold px-5 py-2.5 rounded-2xl text-xs flex items-center gap-2 shadow-sm transition cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Category</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoriesList.map((cat) => (
                  <div key={cat.slug} className="bg-[#faf8f4] p-4 rounded-2xl border border-stone-200 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img src={cat.image || '/images/Dailywell_Products/Ajwain/01.png'} alt={cat.name} className="w-12 h-12 rounded-xl object-cover border border-stone-200" />
                      <div>
                        <h4 className="font-bold font-serif text-earth text-sm">{cat.name}</h4>
                        <p className="text-xs text-stone-500 font-mono">/{cat.slug}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteCategory(cat.slug)}
                      className="p-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition cursor-pointer"
                      title="Delete Category"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CUSTOMERS TAB VIEW */}
          {activeTab === 'customers' && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-xs space-y-6">
              <h3 className="text-2xl font-bold font-serif text-earth border-b border-stone-200/60 pb-4">
                Registered Customers ({customersList.length})
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-600 font-extrabold uppercase tracking-wider text-[11px]">
                      <th className="py-3 px-4">Customer Name</th>
                      <th className="py-3 px-4">Email</th>
                      <th className="py-3 px-4">Last Login Activity</th>
                      <th className="py-3 px-4">Login Sessions</th>
                      <th className="py-3 px-4">Total Orders</th>
                      <th className="py-3 px-4">Total Spent</th>
                      <th className="py-3 px-4 text-right">Delete Option</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium">
                    {customersList.map((cust) => (
                      <tr key={cust.id} className="hover:bg-[#faf8f4] transition">
                        <td className="py-3.5 px-4 font-bold text-earth font-serif flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-olive text-white font-bold flex items-center justify-center text-xs uppercase">
                            {cust.name ? cust.name.charAt(0) : 'U'}
                          </div>
                          <span>{cust.name}</span>
                        </td>
                        <td className="py-3.5 px-4 text-stone-600 font-mono text-xs">{cust.email}</td>
                        <td className="py-3.5 px-4 text-stone-600 text-xs">
                          <div className="flex items-center gap-1.5 font-mono text-xs">
                            <Clock className="w-3.5 h-3.5 text-olive" />
                            <span className="font-bold text-earth">
                              {cust.lastLoginAt
                                ? new Date(cust.lastLoginAt).toLocaleString('en-IN', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                  })
                                : 'Just now'}
                            </span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono px-2.5 py-0.5 rounded-full text-xs font-extrabold">
                            {cust.loginCount || 1} logins
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-earth">{cust.ordersCount || 1} Orders</td>
                        <td className="py-3.5 px-4 font-extrabold text-olive">₹{cust.totalSpent || 1200}</td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => handleDeleteCustomer(cust.id)}
                            className="p-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition cursor-pointer"
                            title="Delete Customer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* CUSTOM MASALA TAB VIEW */}
          {activeTab === 'custom_masala' && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200/60 pb-4">
                <div>
                  <h3 className="text-2xl font-bold font-serif text-earth flex items-center gap-2">
                    <ChefHat className="w-6 h-6 text-olive" />
                    <span>Custom Masala Studio Orders ({customMasalasList.length})</span>
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Authentic custom spice formulas created by customers in Masala Studio or ordered in cart. Real-time ingredient gram weights and roasting instructions.
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-600 font-extrabold uppercase tracking-wider text-[11px]">
                      <th className="py-3 px-4">Order / Recipe ID</th>
                      <th className="py-3 px-4">Customer Name</th>
                      <th className="py-3 px-4">Recipe Name</th>
                      <th className="py-3 px-4">Batch Weight</th>
                      <th className="py-3 px-4">Total Price</th>
                      <th className="py-3 px-4">Roasting</th>
                      <th className="py-3 px-4 text-right">Spice Formula Specs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium">
                    {customMasalasList.map((m: any) => {
                      const isOrder = !!m.orderId;
                      const displayId = m.orderId || m.id;
                      const custName = m.customerName || 'Store Customer';
                      const recName = m.recipeName || m.name || 'Custom Garam Masala';
                      const weightGrams = m.totalWeightGrams || m.customDetails?.totalWeight || 250;
                      const price = m.totalPrice || m.price || 0;
                      const isRoasted = (m.roastingCharge && m.roastingCharge > 0) || (m.customDetails?.roastingSummary && m.customDetails.roastingSummary.toLowerCase().includes('roasted'));

                      return (
                        <tr key={m.id || displayId} className="hover:bg-[#faf8f4] transition">
                          <td className="py-3.5 px-4 font-mono font-bold text-earth">
                            <span className="bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-1 rounded-xl text-xs font-black">
                              {displayId}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 font-bold text-earth">{custName}</td>
                          <td className="py-3.5 px-4 font-bold font-serif text-olive text-sm">{recName}</td>
                          <td className="py-3.5 px-4 font-extrabold text-earth font-mono">{weightGrams}g Batch</td>
                          <td className="py-3.5 px-4 font-black text-olive">₹{price}</td>
                          <td className="py-3.5 px-4">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${isRoasted ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-emerald-100 text-emerald-800 border border-emerald-300'}`}>
                              {isRoasted ? '🔥 ROASTED' : '🌿 RAW'}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <button
                              onClick={() => setActiveCustomFormulaModal(m)}
                              className="px-3.5 py-1.5 rounded-xl bg-olive hover:bg-[#455726] text-white text-xs font-bold transition flex items-center gap-1.5 ml-auto shadow-2xs cursor-pointer"
                            >
                              <ChefHat className="w-3.5 h-3.5" />
                              <span>View Spice Ratios</span>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* REVIEWS TAB VIEW */}
          {activeTab === 'reviews' && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-xs space-y-6">
              <h3 className="text-2xl font-bold font-serif text-earth border-b border-stone-200/60 pb-4">
                Customer Reviews & Ratings ({reviewsList.length})
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-600 font-extrabold uppercase tracking-wider text-[11px]">
                      <th className="py-3 px-4">Customer</th>
                      <th className="py-3 px-4">Rating</th>
                      <th className="py-3 px-4">Review Comment</th>
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4 text-right">Delete Option</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium">
                    {reviewsList.map((rev) => (
                      <tr key={rev.id} className="hover:bg-[#faf8f4] transition">
                        <td className="py-3.5 px-4 font-bold text-earth font-serif">{rev.userName}</td>
                        <td className="py-3.5 px-4 font-extrabold text-amber-500">⭐ {rev.rating}.0</td>
                        <td className="py-3.5 px-4 text-stone-700 max-w-md truncate">{rev.comment}</td>
                        <td className="py-3.5 px-4 text-stone-500 font-mono">{rev.date}</td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => handleDeleteReview(rev.id)}
                            className="p-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition cursor-pointer"
                            title="Delete Review"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ANALYTICS TAB VIEW */}
          {activeTab === 'analytics' && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-xs space-y-6">
              <h3 className="text-2xl font-bold font-serif text-earth border-b border-stone-200/60 pb-4">
                Detailed Analytics & Insights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#faf8f4] p-5 rounded-2xl border border-stone-200 space-y-2">
                  <span className="text-xs font-bold text-stone-600 uppercase">Avg Order Value</span>
                  <p className="text-3xl font-black text-earth">₹1,420</p>
                  <p className="text-xs text-emerald-700 font-bold">+12% vs last month</p>
                </div>
                <div className="bg-[#faf8f4] p-5 rounded-2xl border border-stone-200 space-y-2">
                  <span className="text-xs font-bold text-stone-600 uppercase">Repeat Customer Rate</span>
                  <p className="text-3xl font-black text-earth">41.8%</p>
                  <p className="text-xs text-emerald-700 font-bold">+5.4% retention</p>
                </div>
                <div className="bg-[#faf8f4] p-5 rounded-2xl border border-stone-200 space-y-2">
                  <span className="text-xs font-bold text-stone-600 uppercase">Store Fulfillment Rate</span>
                  <p className="text-3xl font-black text-earth">98.5%</p>
                  <p className="text-xs text-emerald-700 font-bold">On-time delivery</p>
                </div>
              </div>
            </div>
          )}

          {/* SETTINGS TAB VIEW */}
          {activeTab === 'settings' && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-xs space-y-6 max-w-2xl">
              <h3 className="text-2xl font-bold font-serif text-earth border-b border-stone-200/60 pb-4">
                Store Settings & Configuration
              </h3>
              <form onSubmit={(e) => { e.preventDefault(); showToast('Settings saved successfully!'); }} className="space-y-4 text-xs font-bold">
                <div>
                  <label className="block text-stone-700 uppercase mb-1">Store Name</label>
                  <input type="text" defaultValue="Dhannya Organic & Custom Masala" className="w-full bg-[#faf8f4] border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm text-earth" />
                </div>
                <div>
                  <label className="block text-stone-700 uppercase mb-1">Support Email</label>
                  <input type="email" defaultValue="dhaanyaorganic1@gmail.com" className="w-full bg-[#faf8f4] border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm text-earth" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-700 uppercase mb-1">GST Tax Rate (%)</label>
                    <input type="number" defaultValue={5} className="w-full bg-[#faf8f4] border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm text-earth" />
                  </div>
                  <div>
                    <label className="block text-stone-700 uppercase mb-1">Free Shipping Min (₹)</label>
                    <input type="number" defaultValue={499} className="w-full bg-[#faf8f4] border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm text-earth" />
                  </div>
                </div>
                <div className="pt-2">
                  <button type="submit" className="bg-olive text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-sm cursor-pointer">
                    Save Settings
                  </button>
                </div>
              </form>
            </div>
          )}

        </main>
      </div>

      {/* Add Product Modal */}
      {isAddProductOpen && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-stone-200 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <h3 className="text-xl font-bold font-serif text-earth">Add New Product to Catalog</h3>
              <button onClick={() => setIsAddProductOpen(false)} className="text-stone-500 hover:text-earth cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Product Name</label>
                <input
                  type="text"
                  required
                  value={newProdName}
                  onChange={(e) => setNewProdName(e.target.value)}
                  placeholder="e.g. Organic Cold-Pressed Mustard Oil"
                  className="w-full bg-[#faf8f4] border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm font-bold text-earth focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Category</label>
                  <select
                    value={newProdCategory}
                    onChange={(e) => setNewProdCategory(e.target.value as any)}
                    className="w-full bg-[#faf8f4] border border-stone-200 rounded-xl px-3 py-2.5 text-sm font-bold text-earth focus:outline-none"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.slug} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Price (₹)</label>
                  <input
                    type="number"
                    required
                    value={newProdPrice}
                    onChange={(e) => setNewProdPrice(Number(e.target.value))}
                    className="w-full bg-[#faf8f4] border border-stone-200 rounded-xl px-3 py-2.5 text-sm font-bold text-earth focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Stock Units</label>
                <input
                  type="number"
                  required
                  value={newProdStock}
                  onChange={(e) => setNewProdStock(Number(e.target.value))}
                  className="w-full bg-[#faf8f4] border border-stone-200 rounded-xl px-3 py-2.5 text-sm font-bold text-earth focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1 flex items-center justify-between">
                  <span>Upload Product Image File</span>
                  <span className="text-[10px] text-olive font-extrabold lowercase">(JPG, PNG, WEBP)</span>
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex-1 bg-[#faf8f4] border border-dashed border-stone-300 hover:border-olive rounded-xl p-3.5 text-center cursor-pointer transition">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            const rawDataUrl = reader.result as string;
                            const img = new Image();
                            img.src = rawDataUrl;
                            img.onload = () => {
                              const canvas = document.createElement('canvas');
                              const MAX_WIDTH = 800;
                              const MAX_HEIGHT = 800;
                              let width = img.width;
                              let height = img.height;
                              if (width > height) {
                                if (width > MAX_WIDTH) {
                                  height *= MAX_WIDTH / width;
                                  width = MAX_WIDTH;
                                }
                              } else {
                                if (height > MAX_HEIGHT) {
                                  width *= MAX_HEIGHT / height;
                                  height = MAX_HEIGHT;
                                }
                              }
                              canvas.width = width;
                              canvas.height = height;
                              const ctx = canvas.getContext('2d');
                              if (ctx) {
                                ctx.drawImage(img, 0, 0, width, height);
                                setNewProdImage(canvas.toDataURL('image/jpeg', 0.85));
                              } else {
                                setNewProdImage(rawDataUrl);
                              }
                            };
                            img.onerror = () => {
                              setNewProdImage(rawDataUrl);
                            };
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                    <div className="text-xs text-stone-600 font-medium">
                      📁 <strong className="text-earth font-bold">Click here to select & upload image file</strong>
                    </div>
                  </label>
                  {newProdImage && (
                    <img
                      src={newProdImage}
                      alt="Uploaded Preview"
                      className="w-12 h-12 rounded-xl object-cover border-2 border-olive shrink-0 shadow-xs"
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Detailed Description</label>
                <textarea
                  rows={3}
                  required
                  value={newProdDesc}
                  onChange={(e) => setNewProdDesc(e.target.value)}
                  placeholder="100% natural, unadulterated product description with benefits and usage instructions..."
                  className="w-full bg-[#faf8f4] border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-earth focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddProductOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 hover:bg-stone-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-olive hover:bg-[#455726] text-white text-xs font-bold shadow-sm cursor-pointer"
                >
                  Create Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Create Custom Coupon Modal */}
      {isAddCouponOpen && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-stone-200 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <h3 className="text-xl font-bold font-serif text-earth flex items-center gap-2">
                <Tag className="w-5 h-5 text-olive" />
                <span>Create Custom Discount Coupon</span>
              </h3>
              <button onClick={() => setIsAddCouponOpen(false)} className="text-stone-500 hover:text-earth cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateCoupon} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Coupon Code</label>
                <input
                  type="text"
                  required
                  value={newCouponCode}
                  onChange={(e) => setNewCouponCode(e.target.value.toUpperCase())}
                  placeholder="e.g. FESTIVE20"
                  className="w-full bg-[#faf8f4] border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm font-bold font-mono text-earth focus:outline-none uppercase"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Discount (%)</label>
                  <input
                    type="number"
                    required
                    min={1}
                    max={100}
                    value={newCouponPercent}
                    onChange={(e) => setNewCouponPercent(Number(e.target.value))}
                    className="w-full bg-[#faf8f4] border border-stone-200 rounded-xl px-3 py-2.5 text-sm font-bold text-earth focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Min Order Value (₹)</label>
                  <input
                    type="number"
                    required
                    value={newCouponMinOrder}
                    onChange={(e) => setNewCouponMinOrder(Number(e.target.value))}
                    className="w-full bg-[#faf8f4] border border-stone-200 rounded-xl px-3 py-2.5 text-sm font-bold text-earth focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Max Discount Cap (₹)</label>
                  <input
                    type="number"
                    required
                    value={newCouponMaxDiscount}
                    onChange={(e) => setNewCouponMaxDiscount(Number(e.target.value))}
                    className="w-full bg-[#faf8f4] border border-stone-200 rounded-xl px-3 py-2.5 text-sm font-bold text-earth focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-olive" />
                    <span>Expiry Timer Date</span>
                  </label>
                  <input
                    type="datetime-local"
                    value={newCouponExpiryDate}
                    onChange={(e) => setNewCouponExpiryDate(e.target.value)}
                    className="w-full bg-[#faf8f4] border border-stone-200 rounded-xl px-3 py-2 text-xs font-bold text-earth focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Description / Banner Text</label>
                <input
                  type="text"
                  value={newCouponDesc}
                  onChange={(e) => setNewCouponDesc(e.target.value)}
                  placeholder="e.g. 20% OFF on all organic orders above ₹499"
                  className="w-full bg-[#faf8f4] border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm text-earth focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddCouponOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 hover:bg-stone-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-olive hover:bg-[#455726] text-white text-xs font-bold shadow-sm cursor-pointer"
                >
                  Create & Save Coupon
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Category Modal */}
      {isAddCategoryOpen && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-stone-200 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <h3 className="text-xl font-bold font-serif text-earth">Add New Category</h3>
              <button onClick={() => setIsAddCategoryOpen(false)} className="text-stone-500 hover:text-earth cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateCategory} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Category Name</label>
                <input
                  type="text"
                  required
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  placeholder="e.g. Organic Beverages & Tea"
                  className="w-full bg-[#faf8f4] border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm font-bold text-earth focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Description</label>
                <textarea
                  rows={3}
                  value={newCatDesc}
                  onChange={(e) => setNewCatDesc(e.target.value)}
                  placeholder="Category description..."
                  className="w-full bg-[#faf8f4] border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm text-earth focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddCategoryOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 hover:bg-stone-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-olive hover:bg-[#455726] text-white text-xs font-bold shadow-sm cursor-pointer"
                >
                  Create Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      {/* Stage Email Notification Sent Modal Preview */}
      {activeEmailModal && (
        <div className="fixed inset-0 bg-stone-900/70 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-stone-200 shadow-2xl space-y-5 my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-serif text-earth flex items-center gap-2">
                    <span>Stage Email Notification Sent</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2.5 py-0.5 rounded-full font-black uppercase">
                      AUTOMATIC DISPATCH
                    </span>
                  </h3>
                  <div className="text-xs text-stone-500 space-y-0.5 mt-0.5">
                    <p>From: <strong className="text-olive font-mono">Dhannya Organic &lt;dhaanyaorganic1@gmail.com&gt;</strong></p>
                    <p>Recipient: <strong className="text-earth font-mono">{activeEmailModal.toEmail}</strong></p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setActiveEmailModal(null)}
                className="text-stone-500 hover:text-earth p-2 rounded-full hover:bg-stone-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="bg-[#faf8f4] p-3 rounded-xl border border-stone-200 text-xs">
                <span className="text-stone-500 font-bold">Subject Line: </span>
                <strong className="text-earth font-mono">{activeEmailModal.subject}</strong>
              </div>


              <div className="bg-[#2b3e2a] text-amber-50 p-5 rounded-2xl border border-stone-800 text-xs font-mono whitespace-pre-wrap leading-relaxed shadow-inner overflow-x-auto">
                {activeEmailModal.body}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-stone-200">
              <span className="text-xs text-stone-500 font-medium">
                Stage: <strong className="text-olive">{activeEmailModal.status}</strong>
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    showToast(`Resent ${activeEmailModal.status} stage email to ${activeEmailModal.toEmail}`);
                  }}
                  className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-earth text-xs font-bold transition cursor-pointer"
                >
                  Resend Email
                </button>
                <button
                  onClick={() => setActiveEmailModal(null)}
                  className="px-5 py-2 rounded-xl bg-olive hover:bg-[#455726] text-white text-xs font-bold transition cursor-pointer shadow-xs"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Order Details Modal Overlay */}
      {selectedOrderDetails && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-stone-200 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden text-earth my-8 relative animate-scale-up">
            {/* Modal Header */}
            <div className="p-6 bg-[#f7f5ef] border-b border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-olive text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-extrabold font-serif text-lg text-earth">{selectedOrderDetails.id}</h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase ${
                      selectedOrderDetails.status === 'Delivered'
                        ? 'bg-emerald-100 text-emerald-800'
                        : selectedOrderDetails.status === 'Dispatched'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {selectedOrderDetails.status}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500">
                    Placed on {selectedOrderDetails.createdAt ? new Date(selectedOrderDetails.createdAt).toLocaleString() : 'Today'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedOrderDetails(null)}
                className="p-2 rounded-full bg-white hover:bg-stone-200 text-stone-600 transition border border-stone-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              {/* Customer Information Card */}
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80 space-y-2 text-xs">
                <h4 className="font-extrabold uppercase tracking-wider text-[11px] text-stone-500 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-olive" /> Customer & Shipping Info
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-earth font-medium pt-1">
                  <div>
                    <span className="text-stone-400 block text-[10px]">Customer Name:</span>
                    <strong className="text-earth font-bold text-sm">
                      {selectedOrderDetails.shippingAddress?.fullName || 'Store Customer'}
                    </strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">Mobile Contact:</span>
                    <strong className="text-earth font-bold">
                      {selectedOrderDetails.shippingAddress?.mobile || '+91 9008625716'}
                    </strong>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-stone-400 block text-[10px]">Delivery Address:</span>
                    <p className="text-stone-700 font-medium">
                      {selectedOrderDetails.shippingAddress?.street}, {selectedOrderDetails.shippingAddress?.city}, {selectedOrderDetails.shippingAddress?.state} - {selectedOrderDetails.shippingAddress?.pincode}
                    </p>
                  </div>
                </div>
              </div>

              {/* Ordered Items Table */}
              <div>
                <h4 className="font-extrabold uppercase tracking-wider text-[11px] text-stone-500 mb-2 flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-olive" /> Ordered Items ({selectedOrderDetails.items?.length || 0})
                </h4>
                <div className="divide-y divide-stone-100 border border-stone-200 rounded-2xl overflow-hidden bg-white">
                  {(selectedOrderDetails.items || []).map((item: any, idx: number) => {
                    const itemName = item.name || item.product?.name || 'Organic Product';
                    const itemWeight = item.variantWeight || item.selectedWeight || 'Standard';
                    const itemImg = item.image || item.product?.image || '/images/Dailywell_Products/Garam%20Masala/01.jpg';
                    const itemPrice = item.price || item.unitPrice || 0;
                    const itemQty = item.quantity || 1;

                    const isCustomMasala = item.type === 'custom_masala' || !!item.customDetails || (typeof itemName === 'string' && itemName.includes('Custom Masala'));

                    return (
                      <div key={idx} className="p-3.5 space-y-3 hover:bg-stone-50 transition">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={itemImg}
                              alt={itemName}
                              className="w-12 h-12 rounded-xl object-cover border border-stone-200 shrink-0"
                              onError={(e) => {
                                e.currentTarget.src = '/images/Dailywell_Products/Garam%20Masala/01.jpg';
                              }}
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <h5 className="font-bold text-earth text-xs sm:text-sm font-serif leading-tight">
                                  {itemName}
                                </h5>
                                {isCustomMasala && (
                                  <span className="bg-olive/10 text-olive border border-olive/30 text-[10px] px-2 py-0.5 rounded-full font-black uppercase flex items-center gap-1">
                                    <ChefHat className="w-3 h-3 text-olive" />
                                    <span>Custom Recipe</span>
                                  </span>
                                )}
                              </div>
                              <span className="text-[11px] text-stone-500 block mt-0.5">
                                Variant: <strong className="text-olive font-semibold">{itemWeight}</strong> | Qty: <strong className="text-earth">{itemQty}</strong>
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="font-extrabold text-earth text-sm block">₹{itemPrice * itemQty}</span>
                            <span className="text-[10px] text-stone-400">₹{itemPrice} each</span>
                          </div>
                        </div>

                        {/* Custom Masala Recipe Ingredients Breakdown Card */}
                        {isCustomMasala && (
                          <div className="p-3.5 bg-[#faf8f4] border border-amber-200/90 rounded-2xl space-y-2.5 text-xs text-earth shadow-inner">
                            <div className="flex items-center justify-between border-b border-amber-200/60 pb-2">
                              <div className="flex items-center gap-1.5 font-bold text-earth text-xs">
                                <Sparkles className="w-4 h-4 text-amber-600" />
                                <span className="font-serif">Custom Spice Blend Grinding Formula</span>
                              </div>
                              <span className="bg-amber-100 text-amber-900 border border-amber-300 font-mono text-[10px] px-2.5 py-0.5 rounded-full font-black uppercase">
                                {itemWeight || `${item.customDetails?.totalWeight || 250}g Batch`}
                              </span>
                            </div>

                            {item.customDetails?.roastingSummary && (
                              <p className="text-[11px] text-stone-700 font-medium bg-white p-2 rounded-xl border border-stone-200">
                                🔥 <strong className="text-earth">Roasting Preference:</strong> {item.customDetails.roastingSummary}
                              </p>
                            )}

                            {item.customDetails?.itemsList && item.customDetails.itemsList.length > 0 ? (
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                                {item.customDetails.itemsList.map((ing: any, iIdx: number) => (
                                  <div key={iIdx} className="bg-white p-2.5 rounded-xl border border-stone-200 shadow-2xs flex flex-col justify-between">
                                    <span className="font-bold text-earth text-[11px] truncate">{ing.name}</span>
                                    <div className="flex items-center justify-between mt-1.5 text-[10px]">
                                      <strong className="text-olive font-mono">{ing.weight}g</strong>
                                      <span className={`px-1.5 py-0.2 rounded font-extrabold text-[9px] uppercase ${ing.roasting === 'Roasted' ? 'bg-amber-100 text-amber-800' : 'bg-stone-100 text-stone-600'}`}>
                                        {ing.roasting || 'Raw'}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="bg-white p-2.5 rounded-xl border border-stone-200 text-stone-600 text-[11px] font-medium flex items-center gap-2">
                                <span>🌿</span>
                                <span>Signature custom spice recipe created in Masala Studio. Ready for stone grinding.</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Payment & Amount Summary */}
              <div className="bg-[#faf8f4] p-4 rounded-2xl border border-stone-200/80 space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-bold text-earth">₹{selectedOrderDetails.subtotal || selectedOrderDetails.total}</span>
                </div>
                {selectedOrderDetails.discount ? (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Coupon Discount:</span>
                    <span>-₹{selectedOrderDetails.discount}</span>
                  </div>
                ) : null}
                <div className="flex justify-between">
                  <span>GST Tax (5%):</span>
                  <span className="font-bold text-earth">₹{selectedOrderDetails.tax || 0}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span>Shipping Fee:</span>
                  <span className="font-bold text-earth">
                    {selectedOrderDetails.shippingFee === 0 ? <strong className="text-olive">FREE</strong> : `₹${selectedOrderDetails.shippingFee || 0}`}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-1">
                  <span className="font-extrabold text-earth text-sm">Grand Total:</span>
                  <span className="text-xl font-extrabold text-olive">₹{selectedOrderDetails.total}</span>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-stone-500 font-medium">Update Status:</span>
                <select
                  value={selectedOrderDetails.status}
                  onChange={(e) => {
                    handleUpdateOrderStatus(selectedOrderDetails.id, e.target.value);
                    setSelectedOrderDetails({ ...selectedOrderDetails, status: e.target.value as any });
                  }}
                  className="bg-white border border-stone-200 rounded-xl px-3 py-1.5 text-xs font-bold cursor-pointer"
                >
                  <option value="Processing">Processing</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Dispatched">Dispatched</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <div className="flex gap-2">
                <a
                  href={`https://wa.me/91${(selectedOrderDetails.shippingAddress?.mobile || '9008625716').replace(/\D/g, '')}?text=${encodeURIComponent(`Hi ${selectedOrderDetails.shippingAddress?.fullName || 'Customer'}, regarding your Dhaanya Organic order ${selectedOrderDetails.id}: Status is ${selectedOrderDetails.status}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Contact Customer
                </a>
                <button
                  onClick={() => setSelectedOrderDetails(null)}
                  className="px-4 py-2 rounded-xl bg-stone-200 hover:bg-stone-300 text-earth text-xs font-bold transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Masala Formula Modal Overlay */}
      {activeCustomFormulaModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-stone-200 w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden text-earth my-8 relative animate-scale-up">
            {/* Header */}
            <div className="p-6 bg-olive text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/20 text-amber-200 flex items-center justify-center font-bold text-sm">
                  <ChefHat className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold font-serif text-lg text-white">
                    {activeCustomFormulaModal.recipeName || activeCustomFormulaModal.name || 'Custom Masala Formula'}
                  </h3>
                  <p className="text-xs text-stone-200">
                    Order ID: <strong className="font-mono text-amber-200">{activeCustomFormulaModal.orderId || activeCustomFormulaModal.id}</strong> | Customer: <strong>{activeCustomFormulaModal.customerName || 'Valued Customer'}</strong>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveCustomFormulaModal(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
              <div className="bg-[#faf8f4] p-4 rounded-2xl border border-stone-200 flex items-center justify-between text-xs">
                <div>
                  <span className="text-stone-500 font-bold block text-[10px] uppercase">Batch Total Weight</span>
                  <strong className="text-earth text-lg font-black font-mono">
                    {activeCustomFormulaModal.totalWeightGrams || activeCustomFormulaModal.customDetails?.totalWeight || 250}g
                  </strong>
                </div>
                <div className="text-right">
                  <span className="text-stone-500 font-bold block text-[10px] uppercase">Price</span>
                  <strong className="text-olive text-lg font-black">
                    ₹{activeCustomFormulaModal.totalPrice || activeCustomFormulaModal.price || 0}
                  </strong>
                </div>
              </div>

              {/* Roasting summary */}
              {activeCustomFormulaModal.customDetails?.roastingSummary && (
                <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200 text-xs text-amber-900 font-medium">
                  🔥 <strong>Roasting Specification:</strong> {activeCustomFormulaModal.customDetails.roastingSummary}
                </div>
              )}

              {/* Ingredients Composition List */}
              <div className="space-y-2">
                <h4 className="font-extrabold uppercase tracking-wider text-[11px] text-stone-500 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-olive" /> Ingredient Composition Formula
                </h4>

                {activeCustomFormulaModal.customDetails?.itemsList && activeCustomFormulaModal.customDetails.itemsList.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeCustomFormulaModal.customDetails.itemsList.map((ing: any, idx: number) => (
                      <div key={idx} className="p-3 bg-white border border-stone-200 rounded-2xl flex items-center justify-between shadow-2xs">
                        <div>
                          <span className="font-bold text-earth text-xs block">{ing.name}</span>
                          <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full inline-block mt-1 ${ing.roasting === 'Roasted' ? 'bg-amber-100 text-amber-800' : 'bg-stone-100 text-stone-600'}`}>
                            {ing.roasting || 'Raw'}
                          </span>
                        </div>
                        <span className="font-extrabold text-olive text-sm font-mono">{ing.weight}g</span>
                      </div>
                    ))}
                  </div>
                ) : activeCustomFormulaModal.items && activeCustomFormulaModal.items.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeCustomFormulaModal.items.map((ing: any, idx: number) => (
                      <div key={idx} className="p-3 bg-white border border-stone-200 rounded-2xl flex items-center justify-between shadow-2xs">
                        <div>
                          <span className="font-bold text-earth text-xs block">{ing.ingredient?.name || ing.name}</span>
                          <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full inline-block mt-1 ${ing.roastingType === 'Roasted' ? 'bg-amber-100 text-amber-800' : 'bg-stone-100 text-stone-600'}`}>
                            {ing.roastingType || 'Raw'}
                          </span>
                        </div>
                        <span className="font-extrabold text-olive text-sm font-mono">{ing.weightGrams || ing.weight}g</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-center text-stone-500 text-xs">
                    No individual ingredient breakdown stored. Recipe created as custom batch.
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setActiveCustomFormulaModal(null)}
                className="px-6 py-2.5 rounded-xl bg-olive hover:bg-[#455726] text-white text-xs font-bold transition shadow-xs cursor-pointer"
              >
                Close Recipe View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
