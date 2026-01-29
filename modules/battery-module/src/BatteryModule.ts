import { NativeModule, requireNativeModule } from 'expo';

import { BatteryModuleEvents } from './BatteryModule.types';

declare class BatteryModule extends NativeModule<BatteryModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<BatteryModule>('BatteryModule');
