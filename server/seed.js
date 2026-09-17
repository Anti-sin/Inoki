import dotenv from "dotenv";
import mongoose from "mongoose";
import Menu from "./models/Menu.js";

dotenv.config();

const menuItems = [
  // ─────────────────────────
  // HOT COFFEE
  // ─────────────────────────
  {
    category: "Hot Coffee",
    categorySubtitle: "Freshly ground, small-batch beans",
    name: "Espresso",
    description: "A short, bold shot",
    price: 90,
  },
  {
    category: "Hot Coffee",
    categorySubtitle: "Freshly ground, small-batch beans",
    name: "Cappuccino",
    description: "Espresso, steamed milk, silky foam",
    price: 140,
  },
  {
    category: "Hot Coffee",
    categorySubtitle: "Freshly ground, small-batch beans",
    name: "Cafe Latte",
    description: "Smooth, milk-forward classic",
    price: 150,
  },
  {
    category: "Hot Coffee",
    categorySubtitle: "Freshly ground, small-batch beans",
    name: "Mocha",
    description: "Espresso with rich cocoa",
    price: 170,
  },
  {
    category: "Hot Coffee",
    categorySubtitle: "Freshly ground, small-batch beans",
    name: "Hazelnut Latte",
    description: "Warm, nutty and aromatic",
    price: 180,
  },

  // ─────────────────────────
  // COLD BREWS & SHAKES
  // ─────────────────────────
  {
    category: "Cold Brews & Shakes",
    categorySubtitle: "Chilled, creamy and refreshing",
    name: "Iced Americano",
    description: "",
    price: 130,
  },
  {
    category: "Cold Brews & Shakes",
    categorySubtitle: "Chilled, creamy and refreshing",
    name: "Cold Coffee",
    description: "House blend, thick and creamy",
    price: 160,
  },
  {
    category: "Cold Brews & Shakes",
    categorySubtitle: "Chilled, creamy and refreshing",
    name: "Oreo Shake",
    description: "",
    price: 180,
  },
  {
    category: "Cold Brews & Shakes",
    categorySubtitle: "Chilled, creamy and refreshing",
    name: "Kitkat Shake",
    description: "",
    price: 190,
  },
  {
    category: "Cold Brews & Shakes",
    categorySubtitle: "Chilled, creamy and refreshing",
    name: "Brownie Shake",
    description: "Blended with a warm brownie",
    price: 210,
  },

  // ─────────────────────────
  // PIZZAS
  // ─────────────────────────
  {
    category: "Pizzas",
    categorySubtitle: "Hand-stretched, 9-inch",
    name: "Margherita",
    description: "San Marzano, mozzarella, basil",
    price: 220,
  },
  {
    category: "Pizzas",
    categorySubtitle: "Hand-stretched, 9-inch",
    name: "Farmhouse",
    description: "Onion, capsicum, tomato, mushroom",
    price: 280,
  },
  {
    category: "Pizzas",
    categorySubtitle: "Hand-stretched, 9-inch",
    name: "Paneer Tikka",
    description: "Tandoori paneer, onion, coriander",
    price: 310,
  },
  {
    category: "Pizzas",
    categorySubtitle: "Hand-stretched, 9-inch",
    name: "Peri Peri Chicken",
    description: "Smoky peri peri, bell peppers",
    price: 340,
  },

  // ─────────────────────────
  // PASTA
  // ─────────────────────────
  {
    category: "Pasta",
    categorySubtitle: "",
    name: "Alfredo",
    description: "Creamy white sauce, parmesan",
    price: 260,
  },
  {
    category: "Pasta",
    categorySubtitle: "",
    name: "Arrabbiata",
    description: "Spicy tomato, garlic, chilli",
    price: 250,
  },
  {
    category: "Pasta",
    categorySubtitle: "",
    name: "Pesto Penne",
    description: "Basil pesto, olive oil, pine nuts",
    price: 290,
  },

  // ─────────────────────────
  // BURGERS & SANDWICHES
  // ─────────────────────────
  {
    category: "Burgers & Sandwiches",
    categorySubtitle: "",
    name: "Classic Veg Burger",
    description: "",
    price: 160,
  },
  {
    category: "Burgers & Sandwiches",
    categorySubtitle: "",
    name: "Paneer Makhani Burger",
    description: "",
    price: 210,
  },
  {
    category: "Burgers & Sandwiches",
    categorySubtitle: "",
    name: "Grilled Cheese Sandwich",
    description: "",
    price: 150,
  },
  {
    category: "Burgers & Sandwiches",
    categorySubtitle: "",
    name: "Club Sandwich",
    description: "Triple decker with fries",
    price: 220,
  },

  // ─────────────────────────
  // SWEET THINGS
  // ─────────────────────────
  {
    category: "Sweet Things",
    categorySubtitle: "",
    name: "Choco Lava Cake",
    description: "Molten centre, vanilla scoop",
    price: 180,
  },
  {
    category: "Sweet Things",
    categorySubtitle: "",
    name: "New York Cheesecake",
    description: "",
    price: 220,
  },
  {
    category: "Sweet Things",
    categorySubtitle: "",
    name: "Tiramisu",
    description: "Coffee-soaked ladyfingers, mascarpone",
    price: 240,
  },
  {
    category: "Sweet Things",
    categorySubtitle: "",
    name: "Waffle with Ice Cream",
    description: "",
    price: 210,
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Menu.deleteMany();
    await Menu.insertMany(menuItems);

    console.log(`${menuItems.length} menu items seeded successfully`);

    await mongoose.disconnect();

    console.log("MongoDB disconnected");

    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:");
    console.error(error.message);

    process.exit(1);
  }
};

seedDatabase();
