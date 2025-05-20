import { InjectionToken, Provider } from '@angular/core';
import { AppConfig } from './appconfig.interface';
import { environment } from '../../environment/environment';

export const App_Service_Config = new InjectionToken<AppConfig>('app.config');

export const App_Config: AppConfig = {
    apiEndpoint: environment.apiEndpoint
};

export function provideAppConfig(): Provider {
    console.log('Providing app config:', App_Config);
    return {
    provide: App_Service_Config,
    useValue: App_Config,
    };
}
