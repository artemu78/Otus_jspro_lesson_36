import React from 'react';
import { LayoutDashboard, Settings, PieChart, Users, Bell, Zap } from 'lucide-react';
import clsx from 'clsx';

export const Sidebar: React.FC = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: PieChart, label: 'Analytics' },
    { icon: Users, label: 'Customers' },
    { icon: Bell, label: 'Notifications' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 hidden md:flex flex-col h-screen fixed left-0 top-0 border-r border-slate-800 z-20 shadow-xl">
      <div className="p-6 border-b border-slate-800/50">
        <div className="flex items-center gap-3 text-white font-bold text-xl tracking-tight">
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Zap size={20} className="text-white fill-white" />
          </div>
          GlobalTrends
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2 mt-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={clsx(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
              item.active
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 ring-1 ring-indigo-500"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            )}
          >
            <item.icon size={20} className={item.active ? "text-white" : "text-slate-500 group-hover:text-white"} />
            {item.label}
            {item.label === 'Notifications' && (
              <span className="ml-auto bg-slate-800 text-xs font-bold px-2 py-0.5 rounded-full text-slate-400 border border-slate-700">3</span>
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800/50">
        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 backdrop-blur-sm">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">Pro Plan</p>
          <p className="text-xs text-slate-400 mb-4 leading-relaxed">Your subscription is active until Dec 31, 2025.</p>
          <button className="w-full py-2 bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold rounded-lg transition-colors border border-slate-600">
            Manage Subscription
          </button>
        </div>
      </div>
    </aside>
  );
};
