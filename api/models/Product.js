class Product {
  constructor(
    id,
    name,
    description,
    category,
    unitPrice,
    vendorId,
    IsDiscontinued = false,
    qty = 1,
    img_url = "https://picsum.photos/200/300"
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.unitPrice = unitPrice;
    this.vendorId = vendorId;
    this.IsDiscontinued = IsDiscontinued;
    this.qty = qty;
    this.img_url = img_url;
  }

  IsDiscontinued() {
    return this.IsDiscontinued;
  }
}

module.exports = Product;
