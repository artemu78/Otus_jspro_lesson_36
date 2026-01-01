import { SettingsProvider, useSettings } from "./context/SettingsContext";
import { AuthProvider } from "./context/AuthContext";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { TrendCard, LoadingTrendCard } from "./components/TrendCard";
import SettingsPanel from "./components/SettingsPanel";
import { withAuth } from "./hoc/withAuth";
import { withErrorBoundary } from "./hoc/withErrorBoundary";
import { useTrendData } from "./hooks/useTrendData";
import { RefreshCw } from "lucide-react";
import clsx from "clsx";

// Apply Protected HOC
const ProtectedSettings = withAuth(SettingsPanel);
const SafeSettingsWithAuth = withErrorBoundary(ProtectedSettings);
// Apply ErrorBoundary HOC
const SafeTrendCard = withErrorBoundary(TrendCard);
const SafeTrendCardWithAuth = withAuth(SafeTrendCard);

const DashboardContent: React.FC = () => {
  const { trends, loading, refetch } = useTrendData();
  const { language } = useSettings();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors font-sans selection:bg-indigo-500/30">
      <Sidebar />
      <Header />

      <main className="md:ml-64 p-6 md:p-8 max-w-7xl mx-auto space-y-8 pb-20">
        {/* Trend Section */}
        <section className="animate-in slide-in-from-bottom-4 duration-500 fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                {language === "en" ? "Market Overview" : "Обзор рынка"}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg">
                {language === "en"
                  ? "Real-time global trend analysis"
                  : "Анализ глобальных трендов в реальном времени"}
              </p>
            </div>
            <button
              onClick={refetch}
              disabled={loading}
              className="group flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all text-sm font-semibold shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <RefreshCw
                size={18}
                className={clsx(
                  "text-slate-400 group-hover:text-indigo-500 transition-colors",
                  { "animate-spin text-indigo-500": loading }
                )}
              />
              {language === "en" ? "Refresh Data" : "Обновить"}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? // Loading Skeletons
              [1, 2, 3].map((i) => <LoadingTrendCard key={i} />)
              : trends.map((trend) => (
                <SafeTrendCard
                  key={trend.id}
                  topic={trend.topic}
                  growth={trend.growth}
                  history={trend.history}
                />
              ))}
          </div>
        </section>

        {/* Protected Settings Section */}
        <section className="pt-8 border-t border-slate-200 dark:border-slate-800 animate-in slide-in-from-bottom-8 duration-700 fade-in fill-mode-backwards delay-100">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              Admin Settings
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Protected area for system configuration.
            </p>
          </div>

          <SafeSettingsWithAuth />
        </section>
      </main>
    </div>
  );
};

function App() {
  return (
    <SettingsProvider>
      <AuthProvider>
        <DashboardContent />
      </AuthProvider>
    </SettingsProvider>
  );
}

export default App;
