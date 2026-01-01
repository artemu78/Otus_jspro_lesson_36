import { createContext, useContext, useState, useEffect } from 'react';

interface IContext {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  language: 'en' | 'ru';
  toggleLanguage: () => void;
}

const SettingsContext = createContext<IContext | null>(null);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'en' | 'ru'>('ru');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ru' : 'en'));
  };

  return (
    <SettingsContext.Provider value={{ theme, toggleTheme, language, toggleLanguage }}>
      {children}
    </SettingsContext.Provider>
  );
};
