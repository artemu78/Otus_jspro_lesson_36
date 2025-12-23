import React from 'react';
import { useSettings } from '../context/SettingsContext';
import { Moon, Sun, Globe } from 'lucide-react';

const SettingsPanel = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useSettings();
  console.log(s);
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden transition-colors">
      <div className="p-6 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Global Settings</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Manage your dashboard preferences</p>
      </div>
      
      <div className="divide-y divide-slate-100 dark:divide-slate-700">
        {/* Theme Toggle */}
        <div className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-xl">
              {theme === 'light' ? <Sun size={24} /> : <Moon size={24} />}
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white text-base">Appearance1</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {theme === 'dark' ? 'Dark Mode is active' : 'Light Mode is active'}
              </p>
            </div>
          </div>
          <button 
            onClick={toggleTheme}
            className="px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-all shadow-sm"
          >
            Switch to {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>

        {/* Language Toggle */}
        <div className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl">
              <Globe size={24} />
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white text-base">Language Preference</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Current: <span className="uppercase font-bold tracking-wide">{language}</span>
              </p>
            </div>
          </div>
          <button 
             onClick={toggleLanguage}
             className="px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-all shadow-sm"
          >
            Switch to {language === 'en' ? 'Russian' : 'English'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
