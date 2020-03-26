import { Triangle } from '../sum';

describe('Triangle', () => {
  describe('equilateral triangle', () => {
    test('all sides are equal', () => {
      const triangle = new Triangle(2, 2, 2);
      expect(triangle.isEquilateral()).toBe(true);
    });

    test('any side is unequal', () => {
      const triangle = new Triangle(2, 3, 2);
      expect(triangle.isEquilateral()).toBe(false);
    });

    test('no sides are equal', () => {
      const triangle = new Triangle(5, 4, 6);
      expect(triangle.isEquilateral()).toBe(false);
    });

    test('all zero sides is not a triangle', () => {
      const triangle = new Triangle(0, 0, 0);
      expect(triangle.isEquilateral()).toBe(false);
    });

    test('sides may be floats', () => {
      const triangle = new Triangle(0.5, 0.5, 0.5);
      expect(triangle.isEquilateral()).toBe(true);
    });
  });
});
  