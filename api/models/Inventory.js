class Inventory {
  constructor(id, productId, quantityInStock, reorderLevel, quantityInReorder) {
    if (quantityInStock < 0) {
      throw new Error("Quantity in stock cannot be negative.");
    }

    if (reorderLevel < 0) {
      throw new Error("Reorder level cannot be negative.");
    }

    this.id = id;
    this.productId = productId;
    this.quantityInStock = quantityInStock;
    this.reorderLevel = reorderLevel;
    this.quantityInReorder = quantityInReorder;
  }
}

module.exports = Inventory;
