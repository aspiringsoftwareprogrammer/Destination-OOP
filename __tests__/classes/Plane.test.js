const Plane = require('../../classes/Plane');
const Person = require('../../classes/Person');

describe('Plane', () => {
    it('should create an instance of Plane', () => {
        const plane = new Plane('Delta', 'JFK', 'LAX');
        expect(plane).toBeInstanceOf(Plane);
    });

    it('should have correct company, origin, and destination', () => {
        const plane = new Plane('Delta', 'JFK', 'LAX');
        expect(plane.company).toBe('Delta');
        expect(plane.origin).toBe('JFK');
        expect(plane.destination).toBe('LAX');
    });

    it('should initialize passengers as an empty array', () => {
        const plane = new Plane('Delta', 'JFK', 'LAX');
        expect(plane.passengers).toEqual([]);
    });

    it('should add a passenger to the passengers array', () => {
        const plane = new Plane('Delta', 'JFK', 'LAX');
        const passenger = new Person('John', 'LAX');
        plane.addPassenger(passenger);
        expect(plane.passengers).toContain(passenger);
    });
});
