<!-- # SafeProxyTs

A safe proxy utility for TypeScript, providing safe access to nested object properties.

## Installation

You can install `SafeProxyTs` via npm:

```bash
npm install SafeProxyTs




### Explanation

- **Installation**: Provides instructions on how to install the package using npm.
- **Usage**: Includes an example demonstrating how to use `SafeProxyTs` to safely access nested object properties.
- **How it Works**: Explains briefly how the `SafeProxyTs` function works and its benefits.
- **Notes**: Additional notes on usage scenarios and advantages of using `SafeProxyTs`.
- **API**: Describes the `SafeProxyTs` function and its parameters.
- **License**: States the licensing information for the package.

### Additional Considerations

- **Documentation**: Ensure all examples and explanations are clear and concise.
- **Testing**: Include information on testing your package if applicable.
- **Contributing**: If you welcome contributions, provide guidelines on how others can contribute to your project.
- **Acknowledgments**: Optionally, you can acknowledge contributors or libraries that inspired your work.

Customize this template according to your package's specific features and use cases. Once your `README.md` is ready, include it in the root directory of your project before publishing to npm. -->

---

[![npm](https://img.shields.io/npm/v/safe-proxy-ts)](https://www.npmjs.com/package/safe-proxy-ts)
[![Test](https://github.com/yourusername/safe-proxy-ts/actions/workflows/test.yml/badge.svg)](https://github.com/yourusername/safe-proxy-ts/actions/workflows/test.yml)
[![GitHub License](https://img.shields.io/github/license/yourusername/safe-proxy-ts)](https://github.com/yourusername/safe-proxy-ts/blob/main/LICENSE)
[![Your Twitter](https://img.shields.io/twitter/follow/yourusername?label=%40yourusername&style=social)](https://twitter.com/yourusername)

# Safe Proxy for TypeScript

The `safe-proxy-ts` package provides a safe way to access deeply nested properties in TypeScript objects, preventing runtime errors due to `null` or `undefined` values.

## Documentation

Visit the [project documentation](https://github.com/yourusername/safe-proxy-ts) for more details about the API and usage examples.

## Quickstart

Install the Safe Proxy package using your preferred package manager:

```bash
npm install safe-proxy-ts
```

```bash
pnpm add safe-proxy-ts
```

```bash
bun add safe-proxy-ts
```

Then, import the SafeProxy function and wrap your object to safely access nested properties:

```js
import SafeProxy from 'safe-proxy-ts';

interface Address {
  street: string | null;
  city: string | null;
  location: {
    lat: number | null;
    lng: number | null;
  } | null;
}

interface Person {
  name: string | null;
  age: number | null;
  addresses: Address[] | null;
  company: {
    name: string | null;
    address: Address | null;
  } | null;
  getGreeting?: () => string | null;
}

const complexPerson: Person = {
  name: null,
  age: 25,
  addresses: [
    {
      street: null,
      city: null,
      location: null,
    },
    {
      street: 'Street2',
      city: 'City2',
      location: {
        lat: 40.7128,
        lng: -74.0060,
      },
    },
  ],
  company: {
    name: 'Company1',
    address: {
      street: 'Company Street',
      city: null,
      location: {
        lat: 51.5074,
        lng: -0.1278,
      },
    },
  },
  getGreeting: () => 'Hello',
};

const safePerson = SafeProxy(complexPerson);

console.log(safePerson.name); // undefined
console.log(safePerson.age); // 25
console.log(safePerson.addresses[0].street); // undefined
console.log(safePerson.addresses[0].location.lat); // undefined
console.log(safePerson.addresses[1].street); // 'Street2'
console.log(safePerson.addresses[1].location.lat); // 40.7128
console.log(safePerson.addresses[1].location.lng); // -74.0060
console.log(safePerson.company.name); // 'Company1'
console.log(safePerson.company.address.city); // undefined
console.log(safePerson.company.address.location.lat); // 51.5074
console.log(safePerson.company.address.location.lng); // -0.1278
console.log(safePerson.getGreeting()); // 'Hello'
```

### Using a CDN

You can use automatic CDNs like [UNPKG](https://unpkg.com/) to load the library from a script tag.

```html
<!-- Unminified -->
<script src="https://www.unpkg.com/safe-proxy-ts@latest/dist/safe-proxy-ts.umd.js"></script>
<!-- Minified -->
<script src="https://www.unpkg.com/safe-proxy-ts@latest/dist/safe-proxy-ts.umd.min.js"></script>
```

The script creates a global SafeProxy variable. Here's how you create a safe proxy object.

```html
<script>
  const safePerson = SafeProxy(complexPerson);
  console.log(safePerson.name); // undefined
</script>

```



## Contributing
If you want to contribute to the safe-proxy-ts package, follow the guidelines in CONTRIBUTING.md.


## License
This project is licensed under the MIT License 