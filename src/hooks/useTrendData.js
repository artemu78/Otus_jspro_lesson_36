import { useState, useEffect, useCallback } from 'react';

const MOCK_DATA = [
    { id: 1, topic: 'AI Agents', growth: 125, history: [20, 35, 50, 45, 60, 85, 125] },
    { id: 2, topic: 'React Pattern', growth: 45, history: [10, 15, 20, 25, 22, 35, 45] },
    { id: 3, topic: 'Sustainable Tech', growth: 89, history: [40, 38, 45, 55, 65, 78, 89] },
];

export const useTrendData = () => {
    const [trends, setTrends] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(() => {
        setLoading(true);
        setError(null);

        // Simulate Network Request
        setTimeout(() => {
            // Simulate randomization to make it feel "live"
            const liveData = MOCK_DATA.map(item => ({
                ...item,
                growth: Math.max(0, item.growth + Math.floor(Math.random() * 20 - 10)), // +/- 10%
                history: [...item.history.slice(1), item.history[item.history.length - 1] + Math.floor(Math.random() * 10 - 5)]
            }));

            setTrends(liveData);
            setLoading(false);
        }, 1500);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { trends, loading, error, refetch: fetchData };
};
