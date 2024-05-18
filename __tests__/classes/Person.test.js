const Person = require('../../classes/Person');
const Bag = require('../../classes/Bag');

describe('Person', () => {
    it('should create an instance of Person', () => {
        const person = new Person('Alice', 'Paris');
        expect(person).toBeInstanceOf(Person);
    });

    it('should have correct name and destination', () => {
        const person = new Person('Alice', 'Paris');
        expect(person.name).toBe('Alice');
        expect(person.destination).toBe('Paris');
    });

    it('should initialize bags as an empty array', () => {
        const person = new Person('Alice', 'Paris');
        expect(person.bags).toEqual([]);
    });

    it('should add a bag to the bags array', () => {
        const person = new Person('Alice', 'Paris');
        const bag = new Bag(15, 'bag1');
        person.addBag(bag);
        expect(person.bags).toContain(bag);
    });
});
