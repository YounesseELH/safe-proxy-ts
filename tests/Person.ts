const Person = {
    name: null,
    age: 25,
    addresses: [
        {
            street: null,
            location: {
                lat: null,
                lng: null
            }
        },
        {
            street: 'Street2',
            location: {
                lat: 40.7128,
                lng: -74.0060
            }
        }
    ],
    company: {
        name: 'Company1',
        address: {
            city: null,
            location: {
                lat: 51.5074,
                lng: -0.1278
            }
        }
    },
    getGreeting: function() {
        return 'Hello';
    }
};

export default Person;