// tests/safeProxy.test.ts
import { SafeProxy } from '../src';
import Person from './Person';

test('SafeProxy handles deeply nested null and undefined values', () => {
    
    const safePerson = SafeProxy(Person);

    // Check if name is null or undefined
    expect(safePerson.name).toBeUndefined();

    // Check if addresses is an array and non-null before accessing its properties
    if (Array.isArray(safePerson.addresses)) {
        expect(safePerson.addresses[0].street).toBeUndefined();
        expect(safePerson.addresses[0].location?.lat).toBeUndefined();
        expect(safePerson.addresses[1].street).toBe('Street2');
        expect(safePerson.addresses[1].location?.lat).toBe(40.7128);
        expect(safePerson.addresses[1].location?.lng).toBe(-74.0060);
    }

    // Check if company is non-null before accessing its properties
    if (safePerson.company) {
        expect(safePerson.company.name).toBe('Company1');
        expect(safePerson.company.address.city).toBeUndefined();
        expect(safePerson.company.address.location?.lat).toBe(51.5074);
        expect(safePerson.company.address.location?.lng).toBe(-0.1278);
    }

    // Check if getGreeting is a function before calling it
    if (typeof safePerson.getGreeting === 'function') {
        expect(safePerson.getGreeting()).toBe('Hello');
    }
});