import React from 'react';
import { AlertTriangle } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="p-6 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/50 rounded-xl flex items-start gap-4 animate-in fade-in zoom-in duration-300">
            <div className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg shrink-0">
                <AlertTriangle size={24} />
            </div>
            <div className="flex-1">
                 <h3 className="text-lg font-bold text-red-900 dark:text-red-300">Something went wrong</h3>
                 <p className="text-sm text-red-700 dark:text-red-400 mt-1 mb-3">
                    {this.state.error?.message || "An unexpected error occurred while rendering this component."}
                 </p>
                 <button
                    onClick={() => this.setState({ hasError: false, error: null })}
                    className="px-4 py-2 bg-white dark:bg-slate-800 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm font-bold rounded-lg hover:bg-red-50 dark:hover:bg-red-900/40 transition-colors shadow-sm"
                 >
                    Try Again
                 </button>
            </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export const withErrorBoundary = (WrappedComponent, fallback = null) => {
  
  const WithErrorBoundary = (props) => {
    return (
        <ErrorBoundary fallback={fallback}>
            <WrappedComponent {...props} />
        </ErrorBoundary>
    );
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithErrorBoundary.displayName = `WithErrorBoundary(${displayName})`;

  return WithErrorBoundary;
};
