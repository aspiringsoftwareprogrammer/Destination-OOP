const Bag = require('../../classes/Bag');

describe('Bag', () => {
    it('should create an instance of Bag', () => {
        const bag = new Bag(23, 'bag1');
        expect(bag).toBeInstanceOf(Bag);
    });

    it('should have correct weight and id', () => {
        const bag = new Bag(23, 'bag1');
        expect(bag.weight).toBe(23);
        expect(bag.id).toBe('bag1');
    });

    it('should initialize owner as null', () => {
        const bag = new Bag(23, 'bag1');
        expect(bag.getOwner()).toBeNull();
    });

    it('should assign owner correctly', () => {
        const bag = new Bag(23, 'bag1');
        const person = { name: 'John' }; // mock person object
        bag.assignOwner(person);
        expect(bag.getOwner()).toBe(person);
    });
});
