class Product {
  constructor(
    id,
    name,
    description,
    category,
    unitPrice,
    vendorId,
    IsDiscontinued = false
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.unitPrice = unitPrice;
    this.vendorId = vendorId;
    this.IsDiscontinued = IsDiscontinued;
  }

  IsDiscontinued() {
    return this.IsDiscontinued;
  }
}

module.exports = Product;
