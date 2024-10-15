class Promotion {
  constructor(id, code, discountPercentage, isDiscontinued = false) {
    this.id = id;
    this.code = code;
    this.discountPercentage = discountPercentage;
    this.isDiscontinued = isDiscontinued;
  }

  validateDiscount(discount) {
    if (discount < 0 || discount > 100) {
      throw new Error("Discount percentage must be between 0 and 100.");
    }
    return discount;
  }
}

module.exports = Promotion;
