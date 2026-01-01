import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('@/context/AuthContext', (importOriginal: () => object) => {
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

vi.mock('@/context/SettingsContext', (importOriginal: () => object) => {
    const originalModule = importOriginal();
    return {
        ...originalModule,
        useSettings: () => ({
            language: 'en',
            toggleLanguage: vi.fn(),
        })
    };
});