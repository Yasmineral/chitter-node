import { Triangle } from './triangle';

describe('Triangle', () => {
  describe('equilateral triangle', () => {
    test('all sides are equal', () => {
      const triangle = new Triangle(2, 2, 2);
      expect(triangle.isEquilateral()).toBe(true);
    });
  });
});
