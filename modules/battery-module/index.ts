// Reexport the native module. On web, it will be resolved to BatteryModule.web.ts
// and on native platforms to BatteryModule.ts
export { default } from './src/BatteryModule';
export { default as BatteryModuleView } from './src/BatteryModuleView';
export * from  './src/BatteryModule.types';
