import BatteryModule from '@/modules/battery-module';

const batteryService = {
    getBatteryLevelAsync: async (): Promise<number> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const level =  BatteryModule.getBatteryLevelAsync();
                resolve(level);
            }, 2000);
        });
    }
}
export default batteryService;