export function SafeProxy<T extends object>(target: T): T {
    const handler: ProxyHandler<T> = {
        get: function(obj, prop) {
            const value = obj[prop as keyof T];

            // If value is null or undefined, return undefined
            if (value === null || value === undefined) {
                return undefined;
            }

            // If value is an object (excluding null), return a proxy
            if (typeof value === 'object') {
                return SafeProxy(value as any); // Cast value to any for Proxy compatibility
            }

            // Otherwise, return the actual value
            return value;
        } as ProxyHandler<T>['get'],

        apply: function(target: Function, thisArg: any, argArray: any[]) {
            // Ensure target is actually a function
            if (typeof target === 'function') {
                return target.apply(thisArg, argArray);
            }

            // Throw an error if target is not a function
            throw new Error('Cannot apply non-function target.');
        } as ProxyHandler<T>['apply']
    };

    // Return a proxy for the target object or null/undefined
    return new Proxy(target as any, handler) as any;
}
