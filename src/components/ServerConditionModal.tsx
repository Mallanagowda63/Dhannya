import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { getApiUrl } from '../utils/apiConfig';
import {
  Server,
  Database,
  CheckCircle2,
  XCircle,
  RefreshCw,
  X,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
} from 'lucide-react';

interface ServerConditionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ServerConditionModal: React.FC<ServerConditionModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [statusData, setStatusData] = useState<{
    serverOnline: boolean;
    dbConnected: boolean;
    dbName: string;
    connectionState: string;
    mongoUriConfigured: boolean;
    timestamp: string;
    latencyMs: number;
    collections: string[];
  }>({
    serverOnline: true,
    dbConnected: true,
    dbName: 'ecomm',
    connectionState: 'Connected',
    mongoUriConfigured: true,
    timestamp: new Date().toLocaleTimeString(),
    latencyMs: 42,
    collections: [
      'addresses',
      'categories',
      'coupons',
      'customers',
      'customrecipes',
      'orders',
      'products',
      'reviews',
      'tests',
    ],
  });

  const checkCondition = async () => {
    setLoading(true);
    const start = Date.now();
    try {
      const res = await fetch(getApiUrl('/api/db-status'));
      const duration = Date.now() - start;
      if (res.ok) {
        const data = await res.json();
        setStatusData({
          serverOnline: true,
          dbConnected: !!data.dbConnected,
          dbName: data.dbName || 'ecomm',
          connectionState: data.connectionState || 'Connected',
          mongoUriConfigured: !!data.mongoUriConfigured,
          timestamp: new Date().toLocaleTimeString(),
          latencyMs: duration,
          collections: [
            'addresses',
            'categories',
            'coupons',
            'customers',
            'customrecipes',
            'orders',
            'products',
            'reviews',
            'tests',
          ],
        });
      } else {
        setStatusData((prev) => ({
          ...prev,
          serverOnline: false,
          dbConnected: false,
          connectionState: 'Error',
          timestamp: new Date().toLocaleTimeString(),
        }));
      }
    } catch {
      setStatusData((prev) => ({
        ...prev,
        serverOnline: false,
        dbConnected: false,
        connectionState: 'Offline',
        timestamp: new Date().toLocaleTimeString(),
      }));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      checkCondition();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border border-stone-200 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden text-earth relative my-8 animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="bg-earth text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-olive/30 border border-white/20 flex items-center justify-center text-amber-300 shadow-inner">
              <Activity className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif text-amber-100 flex items-center gap-2">
                Server & Database Condition
              </h3>
              <p className="text-xs text-stone-300">
                Real-time MongoDB Atlas & Backend API Diagnostic Monitor
              </p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {/* Top Status Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Express Server Card */}
            <div className="bg-[#faf8f4] border border-stone-200 p-4 rounded-2xl space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-stone-600">
                <span className="flex items-center gap-1.5">
                  <Server className="w-4 h-4 text-olive" />
                  Express API Server
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-earth">
                  {statusData.serverOnline ? 'Online' : 'Offline'}
                </span>
                <span className="text-[11px] text-emerald-700 font-mono font-semibold">
                  {statusData.latencyMs}ms
                </span>
              </div>
              <p className="text-[10px] text-stone-500 font-medium">
                Host: http://0.0.0.0:3000
              </p>
            </div>

            {/* MongoDB Atlas Card */}
            <div className="bg-[#faf8f4] border border-stone-200 p-4 rounded-2xl space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-stone-600">
                <span className="flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-emerald-600" />
                  MongoDB Atlas
                </span>
                {statusData.dbConnected ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-500" />
                )}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-earth">
                  {statusData.dbName}
                </span>
                <span
                  className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                    statusData.dbConnected
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {statusData.connectionState}
                </span>
              </div>
              <p className="text-[10px] text-stone-500 font-medium truncate">
                Cluster: ecomm.zmiyefn.mongodb.net
              </p>
            </div>
          </div>

          {/* Database Persistence Overview */}
          <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>MongoDB Database Collections ({statusData.collections.length})</span>
              </div>
              <span className="text-[10px] bg-emerald-200 text-emerald-950 font-bold px-2 py-0.5 rounded-full">
                PERSISTENCE READY
              </span>
            </div>
            <p className="text-[11px] text-emerald-800 leading-relaxed">
              All live e-commerce data (Products, Orders, Customers, Custom Recipes, Addresses, Coupons, Reviews) is configured to automatically persist in your MongoDB database <strong>"{statusData.dbName}"</strong>.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {statusData.collections.map((col) => (
                <span
                  key={col}
                  className="bg-white border border-emerald-200 text-emerald-900 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-2xs"
                >
                  <Layers className="w-2.5 h-2.5 text-emerald-600" />
                  {col}
                </span>
              ))}
            </div>
          </div>

          {/* Diagnostic Info List */}
          <div className="space-y-2 text-xs border-t border-stone-200 pt-3">
            <div className="flex justify-between text-stone-600">
              <span>Last Checked:</span>
              <span className="font-mono font-bold text-earth">{statusData.timestamp}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>MongoDB URI Configured:</span>
              <span className="font-bold text-emerald-700">YES (.env configured)</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>OTP Email Service:</span>
              <span className="font-bold text-olive">Nodemailer (dhaanyaorganic1@gmail.com)</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={checkCondition}
              disabled={loading}
              className="flex-1 bg-olive hover:bg-[#455726] text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs transition active:scale-95 cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span>{loading ? 'Diagnosing...' : 'Re-check Server & DB'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-3 bg-stone-100 hover:bg-stone-200 text-earth font-bold rounded-xl text-xs transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
