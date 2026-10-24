/* ==  JUSPINE ELECTRONICS - Product catalogue (data------------------
   This file only contains DATA. All the logic lives in js/script.js.
   Each product object has the following properties:
     id        : unique number
     name      : commercial product name
     category  : televisions | smartphones | laptops | accessories
     sub       : sub-category (brand or accessory type)
     desc      : short description shown on the product card
     price     : current price in FCFA (XAF)
     oldPrice  : price before discount (0 = no discount)
     rating    : customer rating out of 5
     reviews   : number of reviews
     featured  : true if the product appears in "Featured products"
     stock     : true when the product is available
     image     : path to the product photo
     specs     : key/value technical specifications =========== */

/* Site-wide configuration - EDIT THESE VALUES WITH THE REAL COMPANY INFO */

const SITE_CONFIG = {
  brand: "JUSPINE ELECTRONICS",
  whatsapp: "237652564253", // <-- replace with the real WhatsApp number (country code + number)
  phone: "+237 652564253",
  email: "e.juspine@gmail.com",
  location: "Molyko,Buea - Cameroon",
  hours: "Mon - Sat: 8:00 AM - 7:00 PM | Sunday: Closed",
  currency: "FCFA",
};

/* The four main categories */
const CATEGORIES = [
  {
    id: "televisions",
    name: "Televisions",
    desc: "Smart, 4K, OLED, QLED and LED screens",
    image: "images/hero/smart-tvs.jpg",
  },
  {
    id: "smartphones",
    name: "Smartphones",
    desc: "iPhone, Samsung, Pixel, Xiaomi, Tecno, Infinix",
    image: "images/hero/smart-phones.jpg",
  },
  {
    id: "laptops",
    name: "Laptops",
    desc: "Dell, HP, Lenovo, ASUS, Acer and MacBook",
    image: "images/hero/laptos.jpg",
  },
  {
    id: "accessories",
    name: "Accessories",
    desc: "Audio, power, cables, bags and smart watches",
    image: "images/hero/accessories.jpg",
  },
];

        /*=====PRODUCTS CATALOGUE=========*/
        
      /*===============TELEVISIONS (16) ============*/

const PRODUCTS = [
  { id: 1, name: "Samsung Crystal UHD 55\" Smart TV", category: "televisions", sub: "Smart TVs", desc: "55-inch 4K smart television with Tizen OS and voice control.", price: 400000, oldPrice: 510000, rating: 4.7, reviews: 128, featured: true, stock: true,
  
  /*--Samsung Crystal UHD 55" smart TV.jpg--*/
   image: "images/pins/samsung-smart-tv.jpg", 
   
   specs: { "Screen size": "55 inches", Resolution: "3840 x 2160 (4K)", "Refresh rate": "60 Hz", "Smart OS": "Tizen", Warranty: "6 months" } },
  
  { id: 2, name: "LG OLED evo C3 65\"", category: "televisions", sub: "OLED TVs", desc: "Self-lit OLED pixels with perfect blacks and Dolby Vision.", price: 360000, oldPrice: 425000, rating: 4.9, reviews: 64, featured: true, stock: true, 
  
  /***LG OLED evo C3 65.jpg***/
  image: "images/pins/lg-oled-tv.jpg", 
  
  specs: { "Screen size": "65 inches", Panel: "OLED evo", "Refresh rate": "120 Hz", HDR: "Dolby Vision IQ", Warranty: "6 months" } },
  
  { id: 3, name: "Sony Bravia X75WL 50\" 4K", category: "televisions", sub: "4K TVs", desc: "4K HDR processor X1 with Google TV built in.", price: 450000, oldPrice: 560000, rating: 4.6, reviews: 92, featured: true, stock: true, 
  
  /***Sony Bravia X75WL 50.jpg****/
  image: "images/pins/sony-4k-tv.jpg", 
  
  specs: { "Screen size": "50 inches", Resolution: "4K UHD", Processor: "X1 4K HDR", "Smart OS": "Google TV", Warranty: "8 months" } },
  
  { id: 4, name: "TCL QLED 55C645", category: "televisions", sub: "QLED TVs", desc: "Quantum dot colour volume with Game Master mode.", price: 350000, oldPrice: 400000, rating: 4.5, reviews: 74, featured: false, stock: true,
  
  /**TCL QLED 55C645.jpg**/
   image: "images/pins/tcl-qled-tv.jpg", 
   
   specs: { "Screen size": "55 inches", Panel: "QLED", Audio: "Dolby Atmos", "Smart OS": "Google TV", Warranty: "7 months" } },
  
  { id: 5, name: "Hisense LED A4 43\"", category: "televisions", sub: "LED TVs", desc: "Affordable Full HD LED TV for bedrooms and offices.", price: 230000, oldPrice: 300000, rating: 4.3, reviews: 156, featured: false, stock: true, 
  
  /**Hisense LED A4 43.jpg**/
  image: "images/pins/hisense-led-tv.jpg", 
  
  specs: { "Screen size": "43 inches", Resolution: "1920 x 1080", Ports: "3 HDMI / 2 USB", "Smart OS": "VIDAA", Warranty: "12 months" } },
  
  { id: 6, name: "Samsung QLED Q60C 43\"", category: "televisions", sub: "QLED TVs", desc: "Compact QLED screen with 100% colour volume.", price: 250000, oldPrice: 300000, rating: 4.6, reviews: 58, featured: false, stock: true, 
  
  /**Samsung QLED Q60C 43.jpg**/
  image: "images/pins/tcl-qled-tv2.jpg", 
  
  specs: { "Screen size": "43 inches", Panel: "QLED", Resolution: "4K UHD", "Smart OS": "Tizen", Warranty: "9 months" } },
  
  { id: 7, name: "LG UHD UR75 43\" Smart TV", category: "televisions", sub: "Smart TVs", desc: "webOS smart TV with Magic Remote and AI sound.", price: 200000, oldPrice: 280000, rating: 4.4, reviews: 81, featured: false, stock: true, 
  
  /**LG UHD UR75 43 inches smart TV.jpg**/
  image: "images/pins/lg-oled-tv2.jpg", 
  
  specs: { "Screen size": "43 inches", Resolution: "4K UHD", "Smart OS": "webOS 23", Audio: "AI Sound Pro", Warranty: "8 months" } },
  
  { id: 8, name: "Sony Bravia OLED A80L 55\"", category: "televisions", sub: "OLED TVs", desc: "Cognitive Processor XR with Acoustic Surface Audio+.", price: 200000, oldPrice: 280000, rating: 4.9, reviews: 33, featured: true, stock: true, 
  
  /**Sony Bravia OLED A80L 55 inches .jpg**/
  image: "images/pins/sony-4k-tv2.jpg", 
  
  specs: { "Screen size": "55 inches", Panel: "OLED", Processor: "Cognitive XR", "Refresh rate": "120 Hz", Warranty: "6 months" } },
  
  { id: 9, name: "TCL 4K Google TV 65P635", category: "televisions", sub: "4K TVs", desc: "Big screen 65-inch 4K entertainment at a fair price.", price: 350000, oldPrice: 400000, rating: 4.4, reviews: 47, featured: false, stock: true, 
  
  /**TCL 4K Google TV 65P635.jpg**/
  image: "images/pins/tcl-qled-tv3.jpg", 
  
  specs: { "Screen size": "65 inches", Resolution: "4K UHD", HDR: "HDR10 / HLG", "Smart OS": "Google TV", Warranty: "12 months" } },
  
  { id: 10, name: "Hisense QLED U6K 55\"", category: "televisions", sub: "QLED TVs", desc: "Mini-LED backlight with Quantum Dot colour.", price: 390000, oldPrice: 400000, rating: 4.5, reviews: 39, featured: false, stock: true, 
  
  /**Hisense QLED U6K 65 inches.jpg**/
  image: "images/pins/hisense-led-tv2.jpg", 
  
  specs: { "Screen size": "55 inches", Panel: "QLED Mini-LED", Resolution: "4K UHD", "Smart OS": "VIDAA", Warranty: "12 months" } },
  
  { id: 11, name: "Samsung LED T5300 32\"", category: "televisions", sub: "LED TVs", desc: "Compact HD smart LED TV, perfect for small rooms.", price: 230000, oldPrice: 300000, rating: 4.2, reviews: 203, featured: false, stock: true, 
  
  /**Samsung LED T5300 32 inches.jpg**/
  image: "images/pins/samsung-smart-tv2.jpg", 
  
  specs: { "Screen size": "32 inches", Resolution: "1366 x 768", "Smart OS": "Tizen", Ports: "2 HDMI / 1 USB", Warranty: "12 months" } },
  
  { id: 12, name: "LG NanoCell 50NANO75 4K", category: "televisions", sub: "4K TVs", desc: "NanoCell technology for purer and richer colours.", price: 150000, oldPrice: 250000, rating: 4.5, reviews: 51, featured: false, stock: true, 
  
  /**LG NanoCell 50NANO75 4K.jpg**/
  image: "images/pins/lg-oled-tv3.jpg", 
  
  specs: { "Screen size": "50 inches", Panel: "NanoCell", Resolution: "4K UHD", "Smart OS": "webOS", Warranty: "12 months" } },
  
  { id: 13, name: "Sony LED W830K 43\"", category: "televisions", sub: "LED TVs", desc: "Full HD LED TV with clear audio and slim frame.", price: 290000, oldPrice: 350000, rating: 4.3, reviews: 66, featured: false, stock: true, 
  
  /**Sony LED W830K 43 .jpg**/
  image: "images/pins/sony-4k-tv3.jpg", 
  
  specs: { "Screen size": "43 inches", Resolution: "Full HD", Audio: "Clear Audio+", "Smart OS": "Android TV", Warranty: "9 months" } },
  
  { id: 14, name: "Hisense Smart TV A6K 50\"", category: "televisions", sub: "Smart TVs", desc: "4K smart TV with built-in Netflix and YouTube apps.", price: 265000, oldPrice: 300000, rating: 4.4, reviews: 88, featured: false, stock: true, 
  
  /**Hisense Smart TV A6K 50.jpg**/
  image: "images/pins/hisense-led-tv3.jpg", 
  
  specs: { "Screen size": "50 inches", Resolution: "4K UHD", "Smart OS": "VIDAA U6", Ports: "3 HDMI", Warranty: "8 months" } },
  
  { id: 15, name: "Samsung OLED S90C 55\"", category: "televisions", sub: "OLED TVs", desc: "Quantum HDR OLED with Neural Quantum Processor.", price: 350000, oldPrice: 450000, rating: 4.8, reviews: 27, featured: false, stock: true, 
  
  /**Samsung OLED S90C 55.jpg**/
  image: "images/pins/samsung-smart-tv3.jpg", 
  
  specs: { "Screen size": "55 inches", Panel: "QD-OLED", "Refresh rate": "144 Hz", "Smart OS": "Tizen", Warranty: "6 months" } },
  
  { id: 16, name: "TCL Smart Android TV 40S65A", category: "televisions", sub: "Smart TVs", desc: "40-inch Android TV with Google Assistant remote.", price: 380000, oldPrice: 420000, rating: 4.2, reviews: 112, featured: false, stock: true, 
  
  /**TCL Smart Android TV 40S65A.jpg**/
  image: "images/pins/tcl-qled-tv4.jpg", 
  
  specs: { "Screen size": "40 inches", Resolution: "Full HD", "Smart OS": "Android TV", Audio: "Dolby Audio", Warranty: "6 months" } },


  /*========================SMARTPHONES (16)===============================*/

  { id: 17, name: "iPhone 15 Pro 256GB", category: "smartphones", sub: "iPhone", desc: "Titanium design, A17 Pro chip and 48MP main camera.", price: 650000, oldPrice: 750000, rating: 4.9, reviews: 314, featured: true, stock: true, 
  
  /**iPhone 15 Pro 256GB.jpg**/
  image: "images/pins/iphone-15-pro.jpg", 
  
  specs: { Display: "6.1\" Super Retina XDR", Chip: "A17 Pro", Storage: "256 GB", Camera: "48MP + 12MP + 12MP", Battery: "3274 mAh" } },
  
  { id: 18, name: "iPhone 14 128GB", category: "smartphones", sub: "iPhone", desc: "A15 Bionic performance with excellent battery life.", price: 360000, oldPrice: 415000, rating: 4.7, reviews: 178, featured: false, stock: true, 
  
  /**iPhone 14 128GB.jpg**/
  image: "images/pins/iphone-15-pro2.jpg", 
  
  specs: { Display: "6.1\" Super Retina", Chip: "A15 Bionic", Storage: "128 GB", Camera: "12MP dual", Battery: "3279 mAh" } },
  
  { id: 19, name: "Samsung Galaxy S24 Ultra", category: "smartphones", sub: "Samsung Galaxy", desc: "200MP camera, S Pen and Galaxy AI features.", price: 550000, oldPrice: 650000, rating: 4.8, reviews: 143, featured: true, stock: true, 
  
  /*--Samsung Galaxy Samsung Galaxy S24 Ultra.jpg--*/
  image: "images/pins/samsung-galaxy-s24.jpg", 
  
  specs: { Display: "6.8\" QHD+ AMOLED", Chip: "Snapdragon 8 Gen 3", Storage: "512 GB", Camera: "200MP quad", Battery: "5000 mAh" } },
  
  { id: 20, name: "Samsung Galaxy A55 5G", category: "smartphones", sub: "Samsung Galaxy", desc: "Mid-range 5G phone with Super AMOLED display.", price: 200000, oldPrice: 250000, rating: 4.5, reviews: 167, featured: true, stock: true, 
  
  /**Samsung Galaxy A55 5G.jpg**/
  image: "images/pins/samsung-galaxy-s24-2.jpg", 
  
  specs: { Display: "6.6\" Super AMOLED", Chip: "Exynos 1480", Storage: "256 GB", Camera: "50MP triple", Battery: "5000 mAh" } },
  
  { id: 21, name: "Google Pixel 8 Pro", category: "smartphones", sub: "Google Pixel", desc: "Tensor G3 chip with the best computational photography.", price: 165000, oldPrice: 220000, rating: 4.7, reviews: 96, featured: false, stock: true, 
  
  /**Pixel 8 Pro.jpg**/
  image: "images/pins/google-pixel-8.jpg", 
  
  specs: { Display: "6.7\" LTPO OLED", Chip: "Google Tensor G3", Storage: "256 GB", Camera: "50MP triple", Battery: "5050 mAh" } },
  
  { id: 22, name: "Google Pixel 7a", category: "smartphones", sub: "Google Pixel", desc: "Clean Android experience with a superb camera.", price: 240000, oldPrice: 300000, rating: 4.6, reviews: 121, featured: false, stock: true,
  
  /**Google Pixel 7a.jpg**/
   image: "images/pins/google-pixel-8-2.jpg", 
   
   specs: { Display: "6.1\" OLED 90Hz", Chip: "Tensor G2", Storage: "128 GB", Camera: "64MP dual", Battery: "4385 mAh" } },
  
  { id: 23, name: "Xiaomi Redmi Note 13 Pro", category: "smartphones", sub: "Xiaomi", desc: "200MP camera and 67W turbo charging.", price: 95000, oldPrice: 125000, rating: 4.6, reviews: 289, featured: true, stock: true,
  
  /**Xiaomi Redmi Note 13 Pro.jpg**/
   image: "images/pins/xiaomi-redmi-note.jpg", 
   
   specs: { Display: "6.67\" AMOLED 120Hz", Chip: "Snapdragon 7s Gen 2", Storage: "256 GB", Camera: "200MP triple", Battery: "5100 mAh" } },
  
  { id: 24, name: "Xiaomi 13T Pro", category: "smartphones", sub: "Xiaomi", desc: "Leica optics with 120W HyperCharge.", price: 125000, oldPrice: 200000, rating: 4.7, reviews: 74, featured: false, stock: true, 
  
  /**Xiaomi 13T Pro.jpg**/
  image: "images/pins/xiaomi-redmi-note2.jpg", 
  
  specs: { Display: "6.67\" AMOLED 144Hz", Chip: "Dimensity 9200+", Storage: "512 GB", Camera: "50MP Leica triple", Battery: "5000 mAh" } },
  
  { id: 25, name: "Tecno Camon 20 Pro", category: "smartphones", sub: "Tecno", desc: "Stylish design with a bright 64MP night camera.", price: 132000, oldPrice: 140000, rating: 4.4, reviews: 236, featured: true, stock: true,
  
  /**Tecno Camon 20 Pro.jpg**/
   image: "images/pins/tecno-camon.jpg", 
   
   specs: { Display: "6.67\" AMOLED", Chip: "Helio G99", Storage: "256 GB", Camera: "64MP triple", Battery: "5000 mAh" } },
  
  { id: 26, name: "Tecno Spark 20 Pro", category: "smartphones", sub: "Tecno", desc: "Budget-friendly phone with 8GB RAM and big battery.", price: 85000, oldPrice: 95000, rating: 4.2, reviews: 341, featured: false, stock: true,
  
  /**Tecno Spark 20 Pro.jpg**/
   image: "images/pins/tecno-camon2.jpg", 
   
   specs: { Display: "6.78\" 120Hz", Chip: "Helio G99", Storage: "256 GB", Camera: "108MP", Battery: "5000 mAh" } },
  
  { id: 27, name: "Infinix Note 40 Pro", category: "smartphones", sub: "Infinix", desc: "All-round fast charging with a premium AMOLED screen.", price: 90000, oldPrice: 150000, rating: 4.5, reviews: 187, featured: false, stock: true, 
  
  /**Infinix Note 40 Pro.jpg**/
  image: "images/pins/infinix-note.jpg", 
  
  specs: { Display: "6.78\" AMOLED 120Hz", Chip: "Helio G99 Ultimate", Storage: "256 GB", Camera: "108MP triple", Battery: "5000 mAh" } },
  
  { id: 28, name: "Infinix Hot 40i", category: "smartphones", sub: "Infinix", desc: "Great value entry-level smartphone for everyday use.", price: 75000, oldPrice: 90000, rating: 4.1, reviews: 412, featured: false, stock: true, 
  
  /**Infinix Hot 40i.jpg**/
  image: "images/pins/infinix-note2.jpg", 
  
  specs: { Display: "6.56\" 90Hz", Chip: "Unisoc T606", Storage: "128 GB", Camera: "50MP dual", Battery: "5000 mAh" } },
  
  { id: 29, name: "iPhone 13 128GB", category: "smartphones", sub: "iPhone", desc: "Still powerful, with the reliable A15 Bionic chip.", price: 250000, oldPrice: 370000, rating: 4.6, reviews: 265, featured: false, stock: true, 
  
  /**iPhone 13 128GB.jpg**/
  image: "images/pins/iphone-15-pro.jpg", 
  
  specs: { Display: "6.1\" Super Retina", Chip: "A15 Bionic", Storage: "128 GB", Camera: "12MP dual", Battery: "3240 mAh" } },
  
  { id: 30, name: "Samsung Galaxy Z Flip 5", category: "smartphones", sub: "Samsung Galaxy", desc: "Foldable design with a large cover screen.", price: 700000, oldPrice: 850000, rating: 4.5, reviews: 58, featured: false, stock: true, 
  
  /**Samsung Galaxy Z Flip 5.jpg**/
  image: "images/pins/samsung-galaxy-s24-3.jpg", 
  
  specs: { Display: "6.7\" foldable AMOLED", Chip: "Snapdragon 8 Gen 2", Storage: "256 GB", Camera: "12MP dual", Battery: "3700 mAh" } },
  
  { id: 31, name: "Xiaomi Poco X6 Pro", category: "smartphones", sub: "Xiaomi", desc: "Gaming-ready performance at a mid-range price.", price: 100000, oldPrice: 125000, rating: 4.6, reviews: 133, featured: false, stock: true,
  
  /**Xiaomi Xiaomi Poco X6 Pro.jpg**/
   image: "images/pins/xiaomi-redmi-note3.jpg", 
   
   specs: { Display: "6.67\" AMOLED 120Hz", Chip: "Dimensity 8300 Ultra", Storage: "256 GB", Camera: "64MP triple", Battery: "5000 mAh" } },
  
  { id: 32, name: "Google Pixel 8", category: "smartphones", sub: "Google Pixel", desc: "Compact flagship with 7 years of Android updates.", price: 195000, oldPrice: 240000, rating: 4.7, reviews: 87, featured: false, stock: true, 
  
  /**Google Pixel 8.jpg**/
  image: "images/pins/google-pixel-8-3.jpg", 
  
  specs: { Display: "6.2\" Actua OLED", Chip: "Tensor G3", Storage: "128 GB", Camera: "50MP dual", Battery: "4575 mAh" } },


  /*=====================LAPTOPS (16)============================*/
  { id: 33, name: "MacBook Air M2 13\"", category: "laptops", sub: "MacBook", desc: "Ultra-thin laptop with the powerful Apple M2 chip.", price: 650000, oldPrice: 750000, rating: 4.9, reviews: 118, featured: true, stock: true, 
  
  /**MacBook Air M2 13.jpg**/
  image: "images/pins/macbook-air.jpg", 
  
  specs: { Processor: "Apple M2 8-core", RAM: "8 GB unified", Storage: "256 GB SSD", Display: "13.6\" Liquid Retina", Battery: "Up to 18 hours" } },
  
  { id: 34, name: "Dell XPS 13 Plus", category: "laptops", sub: "Dell", desc: "Premium ultrabook with an edge-to-edge keyboard.", price: 350000, oldPrice: 450000, rating: 4.7, reviews: 64, featured: true, stock: true, 
  
  /**Dell XPS 13 Plus.jpg**/
  image: "images/pins/dell-xps.jpg",
  
   specs: { Processor: "Intel Core i7-1360P", RAM: "16 GB", Storage: "512 GB SSD", Display: "13.4\" FHD+", Graphics: "Intel Iris Xe" } },
  
  { id: 35, name: "HP Pavilion 15", category: "laptops", sub: "HP", desc: "Reliable everyday laptop for study and office work.", price: 450000, oldPrice: 550000, rating: 4.4, reviews: 152, featured: true, stock: true, 
  
  /**HP Pavilion 15.jpg**/
  image: "images/pins/hp-pavilion.jpg", 
  
  specs: { Processor: "Intel Core i5-1235U", RAM: "8 GB", Storage: "512 GB SSD", Display: "15.6\" FHD", Graphics: "Intel Iris Xe" } },
  
  { id: 36, name: "Lenovo ThinkPad E14 Gen 5", category: "laptops", sub: "Lenovo", desc: "Business laptop with legendary ThinkPad keyboard.", price: 460000, oldPrice: 510000, rating: 4.6, reviews: 89, featured: false, stock: true, 
  
  /**Lenovo Lenovo ThinkPad E14 Gen 5.jpg**/
  image: "images/pins/lenovo-thinkpad.jpg", 
  
  specs: { Processor: "AMD Ryzen 5 7530U", RAM: "16 GB", Storage: "512 GB SSD", Display: "14\" FHD IPS", Weight: "1.4 kg" } },
  
  { id: 37, name: "ASUS VivoBook 15", category: "laptops", sub: "ASUS", desc: "Slim design with a bright NanoEdge display.", price: 575000, oldPrice: 650000, rating: 4.3, reviews: 176, featured: false, stock: true, 
  
  /**ASUS VivoBook 15.jpg**/
  image: "images/pins/asus-vivobook.jpg", 
  
  specs: { Processor: "Intel Core i5-1235U", RAM: "8 GB", Storage: "512 GB SSD", Display: "15.6\" FHD", Weight: "1.7 kg" } },
  
  { id: 38, name: "Acer Aspire 5 A515", category: "laptops", sub: "Acer", desc: "Affordable performance laptop for students.", price: 350000, oldPrice: 400000, rating: 4.2, reviews: 214, featured: false, stock: true, 
  
  /**Acer Aspire 5 A515.jpg**/
  image: "images/pins/acer-aspire.jpg", 
  
  specs: { Processor: "Intel Core i3-1215U", RAM: "8 GB", Storage: "256 GB SSD", Display: "15.6\" FHD", Battery: "Up to 8 hours" } },
  
  { id: 39, name: "MacBook Pro 14\" M3 Pro", category: "laptops", sub: "MacBook", desc: "Pro-level power for creators and developers.", price: 
550000, oldPrice: 700000, rating: 4.9, reviews: 42, featured: true, stock: true, 

/**MacBook Pro 14 M3 Pro.jpg**/
image: "images/pins/macbook-air2.jpg", 

specs: { Processor: "Apple M3 Pro", RAM: "18 GB unified", Storage: "512 GB SSD", Display: "14.2\" Liquid Retina XDR", Battery: "Up to 18 hours" } },
  
  { id: 40, name: "Dell Inspiron 15 3520", category: "laptops", sub: "Dell", desc: "Dependable everyday laptop with a large screen.", price: 615000, oldPrice: 700000, rating: 4.3, reviews: 198, featured: false, stock: true, 
  
  /**Dell Inspiron 15 3520.jpg**/
  image: "images/pins/dell-xps2.jpg",
  
   specs: { Processor: "Intel Core i5-1235U", RAM: "8 GB", Storage: "512 GB SSD", Display: "15.6\" FHD 120Hz", Graphics: "Intel UHD" } },
  
  { id: 41, name: "HP EliteBook 840 G9", category: "laptops", sub: "HP", desc: "Secure business ultrabook with aluminium chassis.", price: 585000, oldPrice: 750000, rating: 4.7, reviews: 51, featured: false, stock: true,
  
  /**HP EliteBook 840 G9.jpg**/
   image: "images/pins/hp-pavilion2.jpg", 
   
   specs: { Processor: "Intel Core i7-1255U", RAM: "16 GB", Storage: "512 GB SSD", Display: "14\" WUXGA", Security: "Fingerprint + TPM" } },
  
  { id: 42, name: "Lenovo IdeaPad Slim 3", category: "laptops", sub: "Lenovo", desc: "Lightweight laptop for browsing, school and office.", price: 450000, oldPrice: 550000, rating: 4.2, reviews: 231, featured: false, stock: true,
  
  /**Lenovo IdeaPad Slim 3.jpg**/
   image: "images/pins/lenovo-thinkpad2.jpg", 
   
   specs: { Processor: "AMD Ryzen 5 7520U", RAM: "8 GB", Storage: "256 GB SSD", Display: "15.6\" FHD", Weight: "1.6 kg" } },
  
  { id: 43, name: "ASUS TUF Gaming F15", category: "laptops", sub: "ASUS", desc: "Gaming laptop with RTX graphics and 144Hz display.", price: 450000, oldPrice: 550000, rating: 4.6, reviews: 78, featured: false, stock: true,
  
  /**ASUS TUF Gaming F15.jpg**/
   image: "images/pins/asus-vivobook2.jpg", 
   
   specs: { Processor: "Intel Core i7-12700H", RAM: "16 GB", Storage: "1 TB SSD", Graphics: "RTX 4060 8GB", Display: "15.6\" FHD 144Hz" } },
  
  { id: 44, name: "Acer Swift Go 14", category: "laptops", sub: "Acer", desc: "Thin and light with an OLED screen.", price: 500000, oldPrice: 600000, rating: 4.5, reviews: 46, featured: false, stock: true, 
  
  /**Acer Swift Go 14.jpg**/
  image: "images/pins/acer-aspire2.jpg", 
  
  specs: { Processor: "Intel Core i5-13500H", RAM: "16 GB", Storage: "512 GB SSD", Display: "14\" 2.8K OLED", Weight: "1.3 kg" } },
  
  { id: 45, name: "Dell Latitude 5440", category: "laptops", sub: "Dell", desc: "Corporate laptop built for durability and support.", price: 550000, oldPrice: 650000, rating: 4.5, reviews: 37, featured: false, stock: true, 
  
  /**Dell Latitude 5440.jpg**/
  image: "images/pins/dell-xps3.jpg",
  
   specs: { Processor: "Intel Core i5-1345U", RAM: "16 GB", Storage: "512 GB SSD", Display: "14\" FHD", Warranty: "12 months" } },
  
  { id: 46, name: "HP Victus 15 Gaming", category: "laptops", sub: "HP", desc: "Entry gaming laptop with dedicated graphics.", price: 650000, oldPrice: 750000, rating: 4.4, reviews: 69, featured: false, stock: true,
  
  /**HP Victus 15 Gaming.jpg**/
   image: "images/pins/hp-pavilion3.jpg", 
   
   specs: { Processor: "AMD Ryzen 7 7840HS", RAM: "16 GB", Storage: "512 GB SSD", Graphics: "RTX 3050 6GB", Display: "15.6\" FHD 144Hz" } },
  
  { id: 47, name: "Lenovo Yoga 7i 2-in-1", category: "laptops", sub: "Lenovo", desc: "Convertible touchscreen laptop with pen support.", price: 645000, oldPrice: 750000, rating: 4.6, reviews: 44, featured: false, stock: true, 
  
  /**Lenovo Yoga 7i 2-in-1.jpg**/
  image: "images/pins/lenovo-thinkpad3.jpg", 
  
  specs: { Processor: "Intel Core i7-1355U", RAM: "16 GB", Storage: "1 TB SSD", Display: "14\" 2.2K touch", Extras: "360° hinge + stylus" } },
  
  { id: 48, name: "Acer Chromebook 314", category: "laptops", sub: "Acer", desc: "Simple and secure Chrome OS laptop with long battery.", price: 850000, oldPrice: 950000, rating: 4.1, reviews: 124, featured: false, stock: true, 
  
  /**Acer Chromebook 314.jpg**/
  image: "images/pins/acer-aspire3.jpg", 
  
  specs: { Processor: "Intel Celeron N4500", RAM: "4 GB", Storage: "64 GB eMMC", Display: "14\" HD", Battery: "Up to 12 hours" } },


  /*=======================ACCESSORIES (18)=====================================*/
  { id: 49, name: "Sony WH-1000XM5 Headphones", category: "accessories", sub: "Wireless headphones", desc: "Industry-leading noise cancelling over-ear headphones.", price: 20000, oldPrice: 30000, rating: 4.9, reviews: 156, featured: true, stock: true,
  
  /**Sony WH-1000XM5 Headphones.jpg**/
   image: "images/pins/wireless-headphones.jpg", 
   
   specs: { Type: "Over-ear wireless", Battery: "30 hours", ANC: "Yes, adaptive", Connectivity: "Bluetooth 5.2", Weight: "250 g" } },
  
  { id: 50, name: "JBL Tune 720BT Headphones", category: "accessories", sub: "Wireless headphones", desc: "Pure Bass sound with 76 hours of battery life.", price: 15000, oldPrice: 20000, rating: 4.4, reviews: 208, featured: false, stock: true, 
  
  /**JBL Tune 720BT Headphones.jpg**/
  image: "images/pins/wireless-headphones2.jpg", 
  
  specs: { Type: "Over-ear wireless", Battery: "76 hours", Charging: "USB-C", Connectivity: "Bluetooth 5.3", Weight: "220 g" } },
  
  { id: 51, name: "Apple AirPods Pro 2", category: "accessories", sub: "Earbuds", desc: "Active noise cancelling earbuds with USB-C case.", price: 25000, oldPrice: 35000, rating: 4.8, reviews: 189, featured: true, stock: true, 
  
  /**Apple AirPods Pro 2.jpg**/
  image: "images/pins/bluetooth-earbuds.jpg", 
  
  specs: { Type: "In-ear wireless", Battery: "6h + 30h case", ANC: "Yes", Chip: "Apple H2", Water: "IPX4" } },
  
  { id: 52, name: "Samsung Galaxy Buds FE", category: "accessories", sub: "Earbuds", desc: "Comfortable earbuds with clear calls and ANC.", price: 10000, oldPrice: 15000, rating: 4.4, reviews: 143, featured: false, stock: true, 
  
  /**Samsung Galaxy Buds FE.jpg**/
  image: "images/pins/bluetooth-earbuds2.jpg", 
  
  specs: { Type: "In-ear wireless", Battery: "6h + 21h case", ANC: "Yes", Connectivity: "Bluetooth 5.2", Water: "IPX2" } },
  
  { id: 53, name: "Apple Watch SE 44mm", category: "accessories", sub: "Smart watches", desc: "Fitness and health tracking on your wrist.", price: 60000, oldPrice: 80000, rating: 4.7, reviews: 97, featured: true, stock: true, 
  
  /**Apple Watch SE 44mm.jpg**/
  image: "images/pins/smart-watch.jpg", 
  
  specs: { Display: "44 mm Retina", Battery: "18 hours", Sensors: "Heart rate, GPS", Water: "50 m", OS: "watchOS 10" } },
  
  { id: 54, name: "Samsung Galaxy Watch 6", category: "accessories", sub: "Smart watches", desc: "Advanced sleep coaching and body composition.", price: 65000, oldPrice: 75000, rating: 4.6, reviews: 72, featured: false, stock: true, 
  
  /**Samsung Galaxy Watch 6.jpg**/
  image: "images/pins/smart-watch2.jpg", 
  
  specs: { Display: "1.5\" AMOLED", Battery: "40 hours", Sensors: "BioActive sensor", Water: "5 ATM", OS: "Wear OS 4" } },
  
  { id: 55, name: "Anker PowerCore 20000mAh", category: "accessories", sub: "Power banks", desc: "High-capacity power bank with fast USB-C charging.", price: 25000, oldPrice: 35000, rating: 4.7, reviews: 264, featured: true, stock: true,
  
  /**Anker PowerCore 20000mAh.jpg**/
   image: "images/pins/power-bank.jpg", 
   
   specs: { Capacity: "20000 mAh", Output: "20 W USB-C PD", Ports: "1 USB-C + 2 USB-A", Weight: "345 g", Warranty: "18 months" } },
  
  { id: 56, name: "Oraimo 10000mAh Power Bank", category: "accessories", sub: "Power banks", desc: "Slim daily power bank with LED battery indicator.", price: 18500, oldPrice: 22000, rating: 4.3, reviews: 331, featured: false, stock: true, 
  
  /**Oraimo 10000mAh Power Bank.jpg**/
  image: "images/pins/power-bank2.jpg", 
  
  specs: { Capacity: "10000 mAh", Output: "18 W", Ports: "USB-C + USB-A", Weight: "210 g", Warranty: "12 months" } },
  
  { id: 57, name: "Apple 20W USB-C Charger", category: "accessories", sub: "Phone chargers", desc: "Official fast charging adapter for iPhone and iPad.", price: 16500, oldPrice: 80000, rating: 4.6, reviews: 187, featured: false, stock: true, 
  
  /**Apple 20W USB-C Charger.jpg**/
  image: "images/pins/phone-charger.jpg", 
  
  specs: { Power: "20 W", Port: "USB-C", Compatibility: "iPhone / iPad", Safety: "Over-current protection", Warranty: "12 months" } },
  
  { id: 58, name: "Samsung 45W Super Fast Charger", category: "accessories", sub: "Phone chargers", desc: "Charge compatible Galaxy phones in minutes.", price: 7000, oldPrice: 10000, rating: 4.5, reviews: 121, featured: false, stock: true, 
  
  /**Samsung 45W Super Fast Charger.jpg**/
  image: "images/pins/phone-charger2.jpg", 
  
  specs: { Power: "45 W", Port: "USB-C PPS", Cable: "Included 5A", Compatibility: "Galaxy series", Warranty: "12 months" } },
  
  { id: 59, name: "HP 65W Laptop Charger", category: "accessories", sub: "Laptop chargers", desc: "Genuine replacement adapter for HP notebooks.", price: 10000, oldPrice: 15000, rating: 4.4, reviews: 96, featured: false, stock: true, 
  
  /**HP 65W Laptop Charger.jpg**/
  image: "images/pins/laptop-charger.jpg", 
  
  specs: { Power: "65 W", Connector: "Blue tip 4.5 mm", Cable: "1.8 m", Input: "100-240 V", Warranty: "6 months" } },
  
  { id: 60, name: "Dell 90W USB-C Adapter", category: "accessories", sub: "Laptop chargers", desc: "USB-C power adapter for modern Dell laptops.", price: 10000, oldPrice: 15000, rating: 4.5, reviews: 58, featured: false, stock: true, 
  
  /**Dell 90W USB-C Adapter.jpg**/
  image: "images/pins/laptop-charger2.jpg", 
  
  specs: { Power: "90 W", Connector: "USB-C PD", Cable: "1.8 m", Input: "100-240 V", Warranty: "12 months" } },
  
  { id: 61, name: "USB-C Fast Charging Cable 2m", category: "accessories", sub: "USB cables", desc: "Braided nylon cable supporting 60W charging.", price: 3500, oldPrice: 4500, rating: 4.4, reviews: 412, featured: false, stock: true, 
  
  /**USB-C Fast Charging Cable 2m.jpg**/
  image: "images/pins/usb-cable.jpg", 
  
  specs: { Length: "2 m", Type: "USB-C to USB-C", Power: "60 W", Data: "480 Mbps", Build: "Braided nylon" } },
  
  { id: 62, name: "HDMI 2.1 Cable 3m (8K)", category: "accessories", sub: "HDMI cables", desc: "High-speed HDMI cable for 4K/8K televisions.", price: 10000, oldPrice: 15000, rating: 4.6, reviews: 148, featured: true, stock: true, 
  
  /**HDMI 2.1 Cable 3m (8K).jpg**/
  image: "images/pins/hdmi-cable.jpg", 
  
  specs: { Length: "3 m", Version: "HDMI 2.1", Bandwidth: "48 Gbps", Supports: "8K@60Hz / 4K@120Hz", Build: "Gold plated" } },
  
  { id: 63, name: "Logitech MX Master 3S Mouse", category: "accessories", sub: "Computer mouse", desc: "Precision wireless mouse for professionals.", price: 5000, oldPrice: 8000, rating: 4.8, reviews: 134, featured: false, stock: true, 
  
  /**Logitech MX Master 3S Mouse.jpg**/
  image: "images/pins/computer-mouse.jpg", 
  
  specs: { Type: "Wireless", Sensor: "8000 DPI", Battery: "70 days", Connectivity: "Bluetooth + USB receiver", Buttons: "7" } },
  
  { id: 64, name: "Logitech K380 Wireless Keyboard", category: "accessories", sub: "Keyboards", desc: "Compact multi-device Bluetooth keyboard.", price: 12000, oldPrice: 16000, rating: 4.5, reviews: 176, featured: false, stock: true, 
  
  /**Logitech K380 Wireless Keyboard.jpg**/
  image: "images/pins/keyboard.jpg", 
  
  specs: { Type: "Wireless Bluetooth", Layout: "Compact AZERTY/QWERTY", Battery: "24 months (AAA)", Devices: "Up to 3", Weight: "423 g" } },
  
  { id: 65, name: "Business Laptop Bag 15.6\"", category: "accessories", sub: "Laptop bags", desc: "Water-resistant padded bag with USB charging port.", price: 15000, oldPrice: 20000, rating: 4.4, reviews: 219, featured: false, stock: true, 
  
  /**Business Laptop Bag 15.6.jpg**/
  image: "images/pins/laptop-bag.jpg", 
  
  specs: { Fits: "Up to 15.6\"", Material: "Water-resistant polyester", Pockets: "5 compartments", Extras: "External USB port", Warranty: "6 months" } },
  
  { id: 66, name: "Shockproof Clear Phone Case", category: "accessories", sub: "Phone cases", desc: "Transparent protective case with raised camera edges.", price: 3500, oldPrice: 4500, rating: 4.2, reviews: 386, featured: false, stock: true, 
  
  /**Shockproof Clear Phone Case.jpg**/
  image: "images/pins/phone-case.jpg", 
  
  specs: { Material: "TPU + acrylic", Protection: "Drop tested 1.5 m", Models: "iPhone / Samsung / Tecno", Finish: "Anti-yellowing", Warranty: "3 months" } },
];
