class Product {
  constructor(
    id,
    name,
    description,
    category,
    unitPrice,
    vendorId,
    IsDiscontinued
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.unitPrice = unitPrice;
    this.vendorId = vendorId;
    this.IsDiscontinued = IsDiscontinued;
  }

  isActive() {
    return this.isActive;
  }
}

module.exports = Product;
