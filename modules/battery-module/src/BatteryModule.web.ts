import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './BatteryModule.types';

type BatteryModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class BatteryModule extends NativeModule<BatteryModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(BatteryModule, 'BatteryModule');
