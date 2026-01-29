export const getBatteryColor = (level: number): string => {
    if (level >= 60) return '#22c55e'; // Green
    if (level >= 30) return '#f59e0b'; // Yellow
    return '#ef4444'; // Red
  };

  export const getBatteryEmoji = (level: number): string => {
    if (level >= 60) return '🔋'; // Full battery
    if (level >= 30) return '🪫'; // Low battery
    return '⚠️'; // Critical
  };