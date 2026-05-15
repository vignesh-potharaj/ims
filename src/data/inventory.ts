export interface Product {
  id: string;
  name: string;
  sku: string;
  category: "A" | "B" | "C";
  quantity: number;
  reorderPoint: number;
  unitPrice: number;
  warehouse: string;
}

export const mockInventory: Product[] = [
  // --- FURNITURE & DECOR ---
  { id: "p1", name: "Eames Lounge Chair", sku: "FUR-EAM-L01", category: "A", quantity: 1, reorderPoint: 2, unitPrice: 5495.00, warehouse: "Mumbai Central" }, // LOW
  { id: "p2", name: "Nordic Oak Dining Table", sku: "FUR-OAK-D02", category: "A", quantity: 12, reorderPoint: 5, unitPrice: 1200.00, warehouse: "Delhi North" },
  { id: "p3", name: "Ergonomic Office Chair", sku: "FUR-ERG-O03", category: "B", quantity: 45, reorderPoint: 15, unitPrice: 350.00, warehouse: "Hyderabad Hub" },
  { id: "p4", name: "Velvet Sofa - 3 Seater", sku: "FUR-VEL-S04", category: "A", quantity: 2, reorderPoint: 3, unitPrice: 1899.00, warehouse: "Bengaluru South" }, // LOW
  { id: "p5", name: "Industrial Bookshelf", sku: "FUR-IND-B05", category: "B", quantity: 20, reorderPoint: 8, unitPrice: 450.00, warehouse: "Mumbai Central" },
  { id: "p6", name: "Marble Coffee Table", sku: "FUR-MAR-C06", category: "B", quantity: 4, reorderPoint: 5, unitPrice: 650.00, warehouse: "Delhi North" }, // LOW
  { id: "p7", name: "Minimalist Desk Lamp", sku: "DEC-MIN-L07", category: "C", quantity: 150, reorderPoint: 40, unitPrice: 85.00, warehouse: "Hyderabad Hub" },
  { id: "p8", name: "Geometric Floor Vase", sku: "DEC-GEO-V08", category: "C", quantity: 80, reorderPoint: 20, unitPrice: 45.00, warehouse: "Bengaluru South" },
  { id: "p9", name: "Outdoor Patio Set", sku: "FUR-OUT-P09", category: "A", quantity: 3, reorderPoint: 4, unitPrice: 2200.00, warehouse: "Mumbai Central" }, // LOW
  { id: "p10", name: "Standing Desk Frame", sku: "FUR-STA-D10", category: "B", quantity: 30, reorderPoint: 10, unitPrice: 499.00, warehouse: "Hyderabad Hub" },

  // --- SPORTS & OUTDOOR ---
  { id: "p11", name: "Pro Match Football", sku: "SPO-PRO-F11", category: "C", quantity: 500, reorderPoint: 100, unitPrice: 25.00, warehouse: "Delhi North" },
  { id: "p12", name: "Basketball - Official Size", sku: "SPO-BAS-B12", category: "C", quantity: 450, reorderPoint: 80, unitPrice: 30.00, warehouse: "Mumbai Central" },
  { id: "p13", name: "Carbon Fiber Road Bike", sku: "SPO-CAR-R13", category: "A", quantity: 1, reorderPoint: 2, unitPrice: 3200.00, warehouse: "Hyderabad Hub" }, // LOW
  { id: "p14", name: "Tennis Racket - Pro", sku: "SPO-TEN-R14", category: "B", quantity: 60, reorderPoint: 15, unitPrice: 180.00, warehouse: "Bengaluru South" },
  { id: "p15", name: "Yoga Mat - Eco Friendly", sku: "SPO-YOG-M15", category: "C", quantity: 300, reorderPoint: 50, unitPrice: 40.00, warehouse: "Delhi North" },
  { id: "p16", name: "Camping Tent - 4 Person", sku: "SPO-CAM-T16", category: "B", quantity: 9, reorderPoint: 10, unitPrice: 210.00, warehouse: "Mumbai Central" }, // LOW
  { id: "p17", name: "Adjustable Dumbbells", sku: "SPO-ADJ-D17", category: "B", quantity: 40, reorderPoint: 10, unitPrice: 299.00, warehouse: "Hyderabad Hub" },
  { id: "p18", name: "Electric Scooter", sku: "SPO-ELE-S18", category: "A", quantity: 4, reorderPoint: 5, unitPrice: 850.00, warehouse: "Bengaluru South" }, // LOW
  { id: "p19", name: "Skateboard - Maple Wood", sku: "SPO-SKA-M19", category: "C", quantity: 120, reorderPoint: 30, unitPrice: 75.00, warehouse: "Delhi North" },
  { id: "p20", name: "Swimming Goggles - AntiFog", sku: "SPO-SWI-G20", category: "C", quantity: 600, reorderPoint: 100, unitPrice: 15.00, warehouse: "Mumbai Central" },

  // --- TOYS & MODELS ---
  { id: "p21", name: "LEGO Star Destroyer", sku: "TOY-LEG-S21", category: "A", quantity: 4, reorderPoint: 5, unitPrice: 699.00, warehouse: "Hyderabad Hub" }, // LOW
  { id: "p22", name: "RC Quadcopter Drone", sku: "TOY-RCQ-D22", category: "B", quantity: 55, reorderPoint: 15, unitPrice: 120.00, warehouse: "Bengaluru South" },
  { id: "p23", name: "Wooden Train Set", sku: "TOY-WOO-T23", category: "C", quantity: 110, reorderPoint: 30, unitPrice: 45.00, warehouse: "Delhi North" },
  { id: "p24", name: "Action Figure - Superhero", sku: "TOY-ACT-F24", category: "C", quantity: 250, reorderPoint: 50, unitPrice: 25.00, warehouse: "Mumbai Central" },
  { id: "p25", name: "Electric Guitar Model", sku: "TOY-ELE-G25", category: "B", quantity: 40, reorderPoint: 10, unitPrice: 150.00, warehouse: "Hyderabad Hub" },
  { id: "p26", name: "Telescope - Beginner", sku: "TOY-TEL-B26", category: "B", quantity: 7, reorderPoint: 8, unitPrice: 220.00, warehouse: "Bengaluru South" }, // LOW
  { id: "p27", name: "Stuffed Teddy Bear", sku: "TOY-STU-T27", category: "C", quantity: 400, reorderPoint: 100, unitPrice: 20.00, warehouse: "Delhi North" },
  { id: "p28", name: "Model Car - 1:18 Scale", sku: "TOY-MOD-C28", category: "B", quantity: 80, reorderPoint: 20, unitPrice: 55.00, warehouse: "Mumbai Central" },
  { id: "p29", name: "Chess Set - Magnetic", sku: "TOY-CHE-M29", category: "C", quantity: 180, reorderPoint: 40, unitPrice: 30.00, warehouse: "Hyderabad Hub" },
  { id: "p30", name: "Rubiks Cube 3x3", sku: "TOY-RUB-C30", category: "C", quantity: 1000, reorderPoint: 200, unitPrice: 10.00, warehouse: "Bengaluru South" },

  // --- ELECTRONICS & MOBILES ---
  { id: "p31", name: "iPhone 15 Pro", sku: "MOB-APL-P31", category: "A", quantity: 19, reorderPoint: 20, unitPrice: 999.00, warehouse: "Mumbai Central" }, // LOW
  { id: "p32", name: "Pixel 8 Pro", sku: "MOB-GOO-P32", category: "A", quantity: 14, reorderPoint: 15, unitPrice: 899.00, warehouse: "Delhi North" }, // LOW
  { id: "p33", name: "Galaxy S24 Ultra", sku: "MOB-SAM-S33", category: "A", quantity: 14, reorderPoint: 15, unitPrice: 1199.00, warehouse: "Hyderabad Hub" }, // LOW
  { id: "p34", name: "Wireless Headphones", sku: "AUD-WIR-H34", category: "B", quantity: 150, reorderPoint: 40, unitPrice: 299.00, warehouse: "Bengaluru South" },
  { id: "p35", name: "Smart Watch Series 9", sku: "WRE-APL-S35", category: "B", quantity: 120, reorderPoint: 30, unitPrice: 399.00, warehouse: "Mumbai Central" },
  { id: "p36", name: "Tablet Pro 12-inch", sku: "TAB-GEN-P36", category: "A", quantity: 50, reorderPoint: 10, unitPrice: 799.00, warehouse: "Delhi North" },
  { id: "p37", name: "Bluetooth Speaker", sku: "AUD-BLU-S37", category: "C", quantity: 300, reorderPoint: 60, unitPrice: 50.00, warehouse: "Hyderabad Hub" },
  { id: "p38", name: "Gaming Console V5", sku: "GAM-CON-V38", category: "A", quantity: 19, reorderPoint: 20, unitPrice: 499.00, warehouse: "Bengaluru South" }, // LOW
  { id: "p39", name: "VR Headset - Elite", sku: "GAM-VRH-E39", category: "A", quantity: 4, reorderPoint: 5, unitPrice: 999.00, warehouse: "Mumbai Central" }, // LOW
  { id: "p40", name: "Mechanical Keyboard", sku: "ACC-MEC-K40", category: "B", quantity: 100, reorderPoint: 25, unitPrice: 150.00, warehouse: "Delhi North" },

  // --- KITCHEN & APPLIANCES ---
  { id: "p41", name: "Espresso Machine", sku: "KIT-ESP-M41", category: "A", quantity: 4, reorderPoint: 5, unitPrice: 850.00, warehouse: "Hyderabad Hub" }, // LOW
  { id: "p42", name: "Electric Kettle 1.5L", sku: "KIT-ELE-K42", category: "C", quantity: 200, reorderPoint: 50, unitPrice: 45.00, warehouse: "Bengaluru South" },
  { id: "p43", name: "Air Fryer XL", sku: "KIT-AIR-F43", category: "B", quantity: 75, reorderPoint: 20, unitPrice: 120.00, warehouse: "Mumbai Central" },
  { id: "p44", name: "Stand Mixer - 5Qt", sku: "KIT-STA-M44", category: "A", quantity: 15, reorderPoint: 5, unitPrice: 350.00, warehouse: "Delhi North" },
  { id: "p45", name: "Toaster - 4 Slice", sku: "KIT-TOA-S45", category: "C", quantity: 180, reorderPoint: 40, unitPrice: 65.00, warehouse: "Hyderabad Hub" },
  { id: "p46", name: "Blender - High Power", sku: "KIT-BLE-H46", category: "B", quantity: 90, reorderPoint: 25, unitPrice: 199.00, warehouse: "Bengaluru South" },
  { id: "p47", name: "Microwave Oven", sku: "KIT-MIC-O47", category: "B", quantity: 40, reorderPoint: 10, unitPrice: 150.00, warehouse: "Mumbai Central" },
  { id: "p48", name: "Dishwasher - Compact", sku: "KIT-DIS-C48", category: "A", quantity: 8, reorderPoint: 2, unitPrice: 450.00, warehouse: "Delhi North" },
  { id: "p49", name: "Smart Refrigerator", sku: "KIT-SMA-R49", category: "A", quantity: 5, reorderPoint: 2, unitPrice: 2200.00, warehouse: "Hyderabad Hub" },
  { id: "p50", name: "Juicer - Slow Masticating", sku: "KIT-JUI-S50", category: "B", quantity: 30, reorderPoint: 10, unitPrice: 280.00, warehouse: "Bengaluru South" },
  { id: "p51", name: "Wine Cooler - 12 Bottle", sku: "KIT-WIN-C51", category: "B", quantity: 12, reorderPoint: 3, unitPrice: 350.00, warehouse: "Mumbai Central" }
];