import React from 'react';
import { Sparkline } from './Sparkline';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import clsx from 'clsx';

export const TrendCard = ({ topic, growth, history, loading }) => {
  if (loading) {
    return <div className="animate-pulse bg-white dark:bg-slate-800 rounded-xl p-6 h-40 shadow-sm border border-slate-200 dark:border-slate-700"></div>;
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-200 group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Trending Topic</p>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {topic}
          </h3>
        </div>
        <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
          <TrendingUp size={20} />
        </div>
      </div>
      
      <div className="flex items-end justify-between mt-auto">
        <div>
           <div className={clsx("flex items-center text-lg font-bold", growth > 0 ? "text-emerald-500" : "text-red-500")}>
             <ArrowUpRight size={20} className={clsx("mr-1 transition-transform", growth < 0 && "rotate-90")} />
             {growth}%
           </div>
           <span className="text-xs font-medium text-slate-400">vs last period</span>
        </div>
        <div className="w-24 h-12">
          <Sparkline data={history} color={growth > 0 ? '#10b981' : '#ef4444'} />
        </div>
      </div>
    </div>
  );
};
