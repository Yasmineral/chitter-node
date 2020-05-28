export class Triangle {
  constructor(side1, side2, side3) {
   this.sides = [side1, side2, side3]
  }

  isValid() {
    const [s1, s2, s3] = this.sides
    const sidesArePositive = this.sides.every(side => side > 0)
    const triangleEquality = (s1 + s2 >= s3) && (s2 + s3 >= s1) && (s3 + s1 >= s2)
    return sidesArePositive && triangleEquality
  }

  calculateMachingSides() {
    const [s1, s2, s3] = this.sides
    let matchingSides = 0
    if (this.sides.every(side => side === s1)) {
      matchingSides += 3
    } else if (s1 === s2 || s2 === s3 || s1 === s3) {
      matchingSides += 2
    } else {
      matchingSides += 0
    }
    return matchingSides
  }

  isEquilateral() {
    return this.calculateMachingSides() === 3 && this.isValid()
  }

  isIsosceles() {
    return this.calculateMachingSides() >= 2  && this.isValid()
  }

  isScalene() {
   return this.calculateMachingSides() === 0 && this.isValid()
  }
}