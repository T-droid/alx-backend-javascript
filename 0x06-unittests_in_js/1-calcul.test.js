const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber()', () => {
    it('test type SUM', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('test type SUBTRACT', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('test type DIVIDE', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
})