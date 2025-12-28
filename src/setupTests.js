import '@testing-library/jest-dom';

vi.mock('@/context/AuthContext', (importOriginal) => {
    const originalModule = importOriginal();
    return {
        ...originalModule,
        useAuth: () => ({
            isAuthenticated: true,
            login: vi.fn(),
            logout: vi.fn(),
        })
    };
});

vi.mock('@/context/SettingsContext', (importOriginal) => {
    const originalModule = importOriginal();
    return {
        ...originalModule,
        useSettings: () => ({
            language: 'en',
            toggleLanguage: vi.fn(),
        })
    };
});