const Airport = require('../../classes/Airport');
const Plane = require('../../classes/Plane');

describe('Airport', () => {
    it('should create an instance of Airport', () => {
        const airport = new Airport('John F. Kennedy International Airport', 'JFK');
        expect(airport).toBeInstanceOf(Airport);
    });

    it('should have correct name and airportCode', () => {
        const airport = new Airport('John F. Kennedy International Airport', 'JFK');
        expect(airport.name).toBe('John F. Kennedy International Airport');
        expect(airport.airportCode).toBe('JFK');
    });

    it('should initialize planes as an empty array', () => {
        const airport = new Airport('John F. Kennedy International Airport', 'JFK');
        expect(airport.planes).toEqual([]);
    });

    it('should add a plane to the planes array', () => {
        const airport = new Airport('John F. Kennedy International Airport', 'JFK');
        const plane = new Plane('Delta', 'JFK', 'LAX');
        airport.addPlane(plane);
        expect(airport.planes).toContain(plane);
    });
});
