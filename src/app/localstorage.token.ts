import { InjectionToken } from "@angular/core";

export const LocalStorageToken = new InjectionToken<Storage>('LocalStorage', {

    providedIn:'root',
    factory: () => {
        return typeof window !== 'undefined' ? (console.log('Using real window.localStorage'), window.localStorage) : (
            console.log('Returning mock localStorage object'),
        // Mock localStorage for server-side rendering
        // or when localStorage is not available
            {
            length: 0,
        setItem() {},
        getItem() { return null; },
        removeItem() {},
        clear() {},
        key() { return null; },
        } as Storage
    );
    },
});
