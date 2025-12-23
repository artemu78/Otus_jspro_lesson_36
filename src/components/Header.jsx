import React from 'react';
import { Bell, Search, User, LogIn, LogOut, Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useSettings } from '../context/SettingsContext';
import clsx from 'clsx';

export const Header = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const { language } = useSettings();

  return (
    <header className="h-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-6 sticky top-0 z-10 transition-colors">
      <div className="md:hidden flex items-center mr-4">
        <button className="p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-lg">
          <Menu size={24} />
        </button>
      </div>

      <div className="w-64 hidden md:block flex-shrink-0" /> {/* Spacer for sidebar */}
      
      <div className="flex flex-1 items-center justify-between max-w-7xl mx-auto w-full">
        <div className="relative w-full max-w-md hidden sm:block">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
          <input 
            type="text" 
            placeholder={language === 'en' ? "Search for trends, topics, or insights..." : "Поиск трендов..."}
            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:outline-none transition-all dark:text-white dark:placeholder-slate-500"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
             <kbd className="hidden lg:inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-bold text-slate-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md">⌘K</kbd>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 ml-auto">
          <button className="relative p-2.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-xl transition-colors">
             <Bell size={20} />
             <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-800 ring-1 ring-red-500/20"></span>
          </button>
          
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2 hidden sm:block"></div>
          
          <div className="flex items-center gap-3">
             <div className="hidden lg:block text-right leading-tight">
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {isAuthenticated ? 'Alex Morgan' : 'Guest User'}
                </p>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {isAuthenticated ? 'Product Designer' : 'Read Only View'}
                </p>
             </div>
             
             {isAuthenticated ? (
               <button 
                 onClick={logout}
                 className="flex items-center gap-2 pl-3 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm text-sm font-semibold"
               >
                 <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                    <User size={16} className="text-slate-500 dark:text-slate-400" />
                 </div>
                 <span className="hidden sm:inline">Logout</span>
                 <LogOut size={16} className="sm:hidden" />
               </button>
             ) : (
                <button 
                 onClick={login}
                 className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 border border-transparent text-white rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 text-sm font-semibold"
               >
                 <LogIn size={18} />
                 <span>Login</span>
               </button>
             )}
          </div>
        </div>
      </div>
    </header>
  );
};
