export class Triangle {
  constructor(side1, side2, side3) {
   this.sides = [side1, side2, side3]
  }

  isEquilateral() {
    return this.sides.every(side => (side != 0) && (side === this.sides[0]))
    
  }
}
