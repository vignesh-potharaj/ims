export interface Sale {
  salesId: string;
  productId: string;
  quantitySold: number;
  salePrice: number;
  latestSaleDate: string;
}

export const mockSales: Sale[] = [
  // --- MARCH 2026: Q1 Close ---
  { salesId: "s1", productId: "p1", quantitySold: 1, salePrice: 5495.00, latestSaleDate: "2026-03-02" },
  { salesId: "s2", productId: "p31", quantitySold: 20, salePrice: 999.00, latestSaleDate: "2026-03-04" },
  { salesId: "s3", productId: "p11", quantitySold: 150, salePrice: 25.00, latestSaleDate: "2026-03-07" },
  { salesId: "s4", productId: "p42", quantitySold: 45, salePrice: 45.00, latestSaleDate: "2026-03-10" },
  { salesId: "s5", productId: "p21", quantitySold: 3, salePrice: 699.00, latestSaleDate: "2026-03-12" },
  { salesId: "s6", productId: "p33", quantitySold: 10, salePrice: 1199.00, latestSaleDate: "2026-03-15" },
  { salesId: "s7", productId: "p50", quantitySold: 5, salePrice: 280.00, latestSaleDate: "2026-03-18" },
  { salesId: "s8", productId: "p15", quantitySold: 40, salePrice: 40.00, latestSaleDate: "2026-03-21" },
  { salesId: "s9", productId: "p2", quantitySold: 2, salePrice: 1200.00, latestSaleDate: "2026-03-24" },
  { salesId: "s10", productId: "p44", quantitySold: 4, salePrice: 350.00, latestSaleDate: "2026-03-27" },
  { salesId: "s11", productId: "p30", quantitySold: 300, salePrice: 10.00, latestSaleDate: "2026-03-29" },
  { salesId: "s12", productId: "p8", quantitySold: 12, salePrice: 45.00, latestSaleDate: "2026-03-31" },

  // --- APRIL 2026: Spring Inventory Push ---
  { salesId: "s13", productId: "p3", quantitySold: 12, salePrice: 350.00, latestSaleDate: "2026-04-02" },
  { salesId: "s14", productId: "p34", quantitySold: 35, salePrice: 299.00, latestSaleDate: "2026-04-04" },
  { salesId: "s15", productId: "p18", quantitySold: 4, salePrice: 850.00, latestSaleDate: "2026-04-06" },
  { salesId: "s16", productId: "p12", quantitySold: 80, salePrice: 30.00, latestSaleDate: "2026-04-09" },
  { salesId: "s17", productId: "p4", quantitySold: 2, salePrice: 1899.00, latestSaleDate: "2026-04-12" },
  { salesId: "s18", productId: "p22", quantitySold: 15, salePrice: 120.00, latestSaleDate: "2026-04-15" },
  { salesId: "s19", productId: "p39", quantitySold: 5, salePrice: 999.00, latestSaleDate: "2026-04-18" },
  { salesId: "s20", productId: "p46", quantitySold: 20, salePrice: 199.00, latestSaleDate: "2026-04-20" },
  { salesId: "s21", productId: "p13", quantitySold: 1, salePrice: 3200.00, latestSaleDate: "2026-04-22" },
  { salesId: "s22", productId: "p27", quantitySold: 110, salePrice: 20.00, latestSaleDate: "2026-04-25" },
  { salesId: "s23", productId: "p5", quantitySold: 6, salePrice: 450.00, latestSaleDate: "2026-04-27" },
  { salesId: "s24", productId: "p35", quantitySold: 25, salePrice: 399.00, latestSaleDate: "2026-04-29" },

  // --- MAY 2026: Current Period (Peak Movement) ---
  { salesId: "s25", productId: "p31", quantitySold: 25, salePrice: 999.00, latestSaleDate: "2026-05-01" },
  { salesId: "s26", productId: "p11", quantitySold: 200, salePrice: 25.00, latestSaleDate: "2026-05-02" },
  { salesId: "s27", productId: "p21", quantitySold: 8, salePrice: 699.00, latestSaleDate: "2026-05-03" },
  { salesId: "s28", productId: "p43", quantitySold: 30, salePrice: 120.00, latestSaleDate: "2026-05-04" },
  { salesId: "s29", productId: "p1", quantitySold: 2, salePrice: 5495.00, latestSaleDate: "2026-05-05" },
  { salesId: "s30", productId: "p38", quantitySold: 10, salePrice: 499.00, latestSaleDate: "2026-05-06" },
  { salesId: "s31", productId: "p30", quantitySold: 450, salePrice: 10.00, latestSaleDate: "2026-05-07" },
  { salesId: "s32", productId: "p49", quantitySold: 1, salePrice: 2200.00, latestSaleDate: "2026-05-08" },
  { salesId: "s33", productId: "p14", quantitySold: 20, salePrice: 180.00, latestSaleDate: "2026-05-09" },
  { salesId: "s34", productId: "p37", quantitySold: 100, salePrice: 50.00, latestSaleDate: "2026-05-10" },
  { salesId: "s35", productId: "p19", quantitySold: 40, salePrice: 75.00, latestSaleDate: "2026-05-11" },
  { salesId: "s36", productId: "p41", quantitySold: 6, salePrice: 850.00, latestSaleDate: "2026-05-11" },
  { salesId: "s37", productId: "p32", quantitySold: 14, salePrice: 899.00, latestSaleDate: "2026-05-12" },
  { salesId: "s38", productId: "p17", quantitySold: 12, salePrice: 299.00, latestSaleDate: "2026-05-12" },
  { salesId: "s39", productId: "p6", quantitySold: 5, salePrice: 650.00, latestSaleDate: "2026-05-13" },
  { salesId: "s40", productId: "p26", quantitySold: 10, salePrice: 220.00, latestSaleDate: "2026-05-13" },
  { salesId: "s41", productId: "p47", quantitySold: 8, salePrice: 150.00, latestSaleDate: "2026-05-14" },
  { salesId: "s42", productId: "p10", quantitySold: 12, salePrice: 499.00, latestSaleDate: "2026-05-14" },
  { salesId: "s43", productId: "p45", quantitySold: 35, salePrice: 65.00, latestSaleDate: "2026-05-14" },
  { salesId: "s44", productId: "p28", quantitySold: 18, salePrice: 55.00, latestSaleDate: "2026-05-15" },
  { salesId: "s45", productId: "p36", quantitySold: 15, salePrice: 799.00, latestSaleDate: "2026-05-15" },
  { salesId: "s46", productId: "p20", quantitySold: 140, salePrice: 15.00, latestSaleDate: "2026-05-15" },
  { salesId: "s47", productId: "p7", quantitySold: 30, salePrice: 85.00, latestSaleDate: "2026-05-15" },
  { salesId: "s48", productId: "p23", quantitySold: 25, salePrice: 45.00, latestSaleDate: "2026-05-15" },
  { salesId: "s49", productId: "p40", quantitySold: 22, salePrice: 150.00, latestSaleDate: "2026-05-15" },
  { salesId: "s50", productId: "p29", quantitySold: 40, salePrice: 30.00, latestSaleDate: "2026-05-15" },
  { salesId: "s51", productId: "p48", quantitySold: 2, salePrice: 450.00, latestSaleDate: "2026-05-15" },
  { salesId: "s52", productId: "p9", quantitySold: 3, salePrice: 2200.00, latestSaleDate: "2026-05-15" },
]salesI