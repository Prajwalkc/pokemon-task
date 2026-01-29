import { useState } from "react";
import batteryService from "../services/batteryService";

export interface UseBatteryReturn {
    batteryLevel: number;
    loading: boolean;
    error: string | null;
    getBatteryLevelAsync: () => Promise<number>;
  }  
  
export const useBattery = (): UseBatteryReturn => {
    const [batteryLevel, setBatteryLevel] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    
    const getBatteryLevelAsync = async (): Promise<number> => {
        try {
            setLoading(true);
            setError(null);
            const data = await batteryService.getBatteryLevelAsync();
            const positiveLevel = Math.abs(data);
            setBatteryLevel(positiveLevel);
            return positiveLevel;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to fetch battery level';
            setError(errorMessage);
            setBatteryLevel(0);
            return 0;
        } finally {
            setLoading(false);
        }
    }

    return {
        batteryLevel,
        loading,
        error,
        getBatteryLevelAsync,
    }
}