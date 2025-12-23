import { useAuth } from '../context/AuthContext';
import { ShieldAlert } from 'lucide-react';

export const withAuth = (WrappedComponent) => {
  const WithAuthComponent = (props) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      return (
        <div className="flex flex-col items-center justify-center p-8 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-center animate-in fade-in zoom-in duration-300">
          <ShieldAlert className="w-12 h-12 text-red-500 mb-4" />
          <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-2">Permission Denied</h3>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
  
  // Set display name for debugging
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithAuthComponent.displayName = `WithAuth(${displayName})`;

  return WithAuthComponent;
};
