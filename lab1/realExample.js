// orderSystem.mjs
import { EventEmitter } from "node:events";

class OrderSystem extends EventEmitter {
  placeOrder(order) {
    console.log(`\n📦 Order received: #${order.id} for ${order.customerName}`);

    // Simulate saving to database
    console.log("Saving order to database...");

    // Emit event — everything below reacts independently
    this.emit("orderPlaced", order);
  }
}

const orderSystem = new OrderSystem();

// --- Listener 1: Email service ---
orderSystem.on("orderPlaced", (order) => {
  console.log(`📧 Sending confirmation email to ${order.email}...`);
});

// --- Listener 2: Inventory service ---
orderSystem.on("orderPlaced", (order) => {
  order.items.forEach((item) => {
    console.log(`📉 Reducing stock for "${item.name}" by ${item.qty}`);
  });
});

// --- Listener 3: Shipping service ---
orderSystem.on("orderPlaced", (order) => {
  console.log(`🚚 Creating shipping label for order #${order.id}`);
});

// --- Listener 4: Analytics/logging ---
orderSystem.on("orderPlaced", (order) => {
  console.log(`📊 Logging order #${order.id} — total: ₹${order.total}`);
});

// --- Error handling ---
orderSystem.on("error", (err) => {
  console.error("❌ Order system error:", err.message);
});

// --- Simulate placing an order ---
orderSystem.placeOrder({
  id: "ORD1001",
  customerName: "Dhanesh Kumar",
  email: "dhanesh@example.com",
  items: [
    { name: "Wireless Mouse", qty: 1 },
    { name: "Mechanical Keyboard", qty: 1 },
  ],
  total: 2499,
});
