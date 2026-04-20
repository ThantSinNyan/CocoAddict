/**
 * Menu data for Coco Addict.
 * Source of truth: the saved Wongnai x LINE MAN menu snapshot in assets/images/.
 * Real local photos are used where the matching Wongnai asset is confidently identified.
 */

const WONGNAI_ASSET_DIR = 'assets/images/Coco Addict, Soi Polo - Order food delivery _ Wongnai x LINE MAN_files';
const wongnaiPhoto = (file) => `${WONGNAI_ASSET_DIR}/${file}`;

window.COCO_MENU_ORDER = [
  'coffee',
  'tea',
  'others',
  'smoothie',
  'slushy',
  'iceCream',
  'dessert',
  'salad',
  'sandwich',
  'toast',
  'bakery'
];

window.COCO_MENU = {
  coffee: {
    label: 'Coffee',
    items: [
      { name: 'AM Americano', thai: 'อเมริกาโนร้อน / อเมริกาโนเย็น', hot: 69, iced: 89, coco: null },
      { name: 'ES Espresso', thai: 'เอสเพรสโซร้อน / เอสเพรสโซเย็น', hot: 59, iced: 99, coco: null },
      { name: 'CP Cappuccino', thai: 'คาปูชิโนร้อน / คาปูชิโนเย็น', hot: 69, iced: 99, coco: null },
      { name: 'LT Latte', thai: 'ลาเต้ร้อน / ลาเต้เย็น', hot: 69, iced: 99, coco: null },
      { name: 'MC Mocha', thai: 'มอคค่าร้อน / มอคค่าเย็น', hot: 69, iced: 99, coco: null },
      { name: 'CB Cold Brew', thai: 'กาแฟสกัดเย็น', hot: null, iced: 119, coco: null },
      { name: 'CM Caramel Macchiato', thai: 'คาราเมล มัคคิอาโต้', hot: 99, iced: 119, coco: null },
      { name: 'HM Hazelnut Macchiato', thai: 'เฮเซลนัท มัคคิอาโต้', hot: 99, iced: 119, coco: null },
      { name: 'AO Americano Orange', thai: 'อเมริกาโน่ ส้มคั้นสด', hot: null, iced: 119, coco: null },
      { name: 'AHL Americano Honey Lemon', thai: 'อเมริกาโน่ น้ำผึ้ง เลม่อน', hot: null, iced: 119, coco: null }
    ]
  },
  tea: {
    label: 'Tea',
    items: [
      { name: 'MT Matcha Green Tea', thai: 'ชาเขียวมัทฉะร้อน / ชาเขียวมัทฉะเย็น', hot: 69, iced: 99, coco: null },
      { name: 'TTL Lemon Tea', thai: 'ชามะนาวร้อน / ชามะนาวเย็น', hot: 69, iced: 99, coco: null },
      { name: 'THL Honey Lemon Tea', thai: 'ชาน้ำผึ้งมะนาวร้อน / ชาน้ำผึ้งมะนาวเย็น', hot: 69, iced: 99, coco: null },
      { name: 'TMT Thai Milk Tea', thai: 'ชาไทยนมร้อน / ชานมเย็น', hot: 69, iced: 99, coco: null },
      { name: 'TTC Iced Black Tea with Coconut', thai: 'ชาดำเย็นมะพร้าว', hot: null, iced: 119, coco: null },
      { name: 'MF Matcha Coconut Cream Foam', thai: 'ครีมโฟมมัทฉะมะพร้าว', hot: null, iced: 119, coco: null }
    ]
  },
  others: {
    label: 'Others',
    items: [
      { name: 'CO Cocoa', thai: 'โกโก้ร้อน / โกโก้เย็น', hot: 69, iced: 99, coco: null },
      { name: 'CH Chocolate', thai: 'ช็อคโกแลตร้อน / ช็อคโกแลตเย็น', hot: 69, iced: 99, coco: null },
      { name: 'ACH Butterfly Pea Lemon Soda', thai: 'อัญชันมะนาวโซดา', hot: null, iced: 99, coco: null },
      { name: 'LS Lemon Soda', thai: 'น้ำมะนาวโซดา', hot: null, iced: 79, coco: null },
      { name: 'LF Coconut Latte Cream Foam', thai: 'ครีมโฟมลาเต้มะพร้าว', hot: null, iced: 119, coco: null },
      { name: 'Coconut Water', thai: 'น้ำมะพร้าว', hot: null, iced: 49, coco: null },
      { name: 'Fresh Orange Juice', thai: 'น้ำส้มคั้นสด', hot: null, iced: 59, coco: null },
      { name: 'All Spring Natural Mineral Water', thai: 'น้ำแร่ธรรมชาติ All Spring 600 มล', hot: null, iced: 25, coco: null },
      { name: 'ACHC Butterfly Pea Lemon Concentrate', thai: 'อัญชันมะนาว (เข้มข้น)', hot: null, iced: 99, coco: null }
    ]
  },
  smoothie: {
    label: 'Smoothie',
    note: 'เครื่องดื่มปั่น',
    items: [
      { name: 'Coconut Smoothie with Fresh Milk', thai: 'มะพร้าวปั่นนมสด', flat: 99, img: wongnaiPhoto('90023c76782142b38e0c0095fa6c4154.jpg') },
      { name: 'Fresh Orange Blended', thai: 'น้ำส้มคั้นสดปั่น', flat: 99 },
      { name: 'Fresh Lemon Blended', thai: 'น้ำมะนาวคั้นสดปั่น', flat: 99 }
    ]
  },
  slushy: {
    label: 'Slushy',
    note: 'เครื่องดื่มเกล็ดน้ำแข็ง',
    items: [
      { name: 'Thai Milk Tea Ice Flakes', thai: 'ชาไทยนมเกล็ดน้ำแข็ง', flat: 99, img: wongnaiPhoto('3c3ad580e15947d6b77dde8b2b24ed57.jpg') },
      { name: 'Butterfly Pea Lemon Soda Ice Flakes', thai: 'อัญชันมะนาวโซดาเกล็ดน้ำแข็ง', flat: 99, img: wongnaiPhoto('82e32df6565f432386c72ef206b3d58b.jpg') }
    ]
  },
  iceCream: {
    label: 'Ice Cream',
    note: 'ไอศกรีม',
    items: [
      { name: 'Coconut Ice Cream', thai: 'ไอศกรีมมะพร้าว', flat: 89, img: wongnaiPhoto('d5499177cc914c9390478b6179dbdc08.jpg') },
      { name: 'Gelato Malt Biscuit Cookie', thai: 'ไอศกรีมเจลาโต้ นมมอล์ทบิสกิตคุกกี้', flat: 79 },
      { name: 'Gelato Yogurt Jelly', thai: 'ไอศกรีมเจลาโต้ รสโยเกิร์ต เยลลี่', flat: 79 },
      { name: 'MI Matcha Ice Cream', thai: 'ไอศกรีมมัทฉะ', flat: 79 }
    ]
  },
  dessert: {
    label: 'Pastry & Dessert',
    note: 'ขนมและของหวาน',
    items: [
      { name: 'LCH Lod Chong Wat Chet', thai: 'ลอดช่องวัดเจษปั่น', flat: 89, img: wongnaiPhoto('3cb9c9fb4e8349c6a924a84c25cc17b0.jpg') },
      { name: 'CHK Grass Jelly Ovaltine Blended', thai: 'เฉาก๊วยโอวทึ้งปั่น', flat: 89, img: wongnaiPhoto('bd6e7aaa53594e0390b955c5fe1b3970.jpg') },
      { name: 'PD Coconut Milk Pudding', thai: 'พุดดิ้งมะพร้าวนมสด', flat: 59 },
      { name: 'PD Coconut Milk Pudding x 3', thai: 'พุดดิ้งมะพร้าวนมสด x 3', flat: 160 },
      { name: 'CHB Butter Shortbread', thai: 'ช็อตเบรด เนยสดแท้', flat: 49 },
      { name: 'CHS Strawberry Shortbread', thai: 'ช็อตเบรด สตอร์เบอร์รี่แท้', flat: 49 },
      { name: 'CP Caramel Popcorn', thai: 'ป็อปคอร์น คาราเมล', flat: 95 },
      { name: 'MP Milo School Bus Popcorn', thai: 'ป็อปคอร์น ไมโลรถโรงเรียน', flat: 95 },
      { name: 'Fresh Marian Plum', thai: 'มะยงชิดคว้านสด', flat: 109 }
    ]
  },
  salad: {
    label: 'Crispy Salad',
    note: 'สลัดอบกรอบ',
    items: [
      { name: 'Original Kale Crisps', thai: 'เคล อบกรอบ รสออริจินัล', flat: 100 },
      { name: 'Sriracha Mayo Kale Crisps', thai: 'เคล อบกรอบ รสศรีราชา เมโย', flat: 100 },
      { name: 'Original Zucchini Crisps', thai: 'ซูกินี อบกรอบ รสออริจินัล', flat: 75 },
      { name: 'Sriracha Mayo Zucchini Crisps', thai: 'ซูกินี อบกรอบ รสศรีราชา เมโย', flat: 75 },
      { name: 'Caesar Cos Crisps', thai: 'คอส อบกรอบ รสซีซ่าสลัด', flat: 95 }
    ]
  },
  sandwich: {
    label: 'Sandwich',
    note: 'แซนวิช และ สลัดผัก ทำสด',
    items: [
      { name: 'CK Fresh Shredded Chicken Sandwich', thai: 'แซนวิชอกไก่ฉีก ทำสดใหม่', flat: 99 }
    ]
  },
  toast: {
    label: 'Toast',
    note: 'ขนมปังปิ้ง',
    items: [
      { name: 'BM Butter Milk Bread', thai: 'ปังเนยนม', flat: 39, img: wongnaiPhoto('1f4e12252dec4cf4891a58b07ab061b4.jpg') },
      { name: 'BS Butter Sugar Bread', thai: 'ปังเนยน้ำตาล', flat: 39, img: wongnaiPhoto('9af3f3af232848b0954d87345be49194.jpg') },
      { name: 'OV Ovaltine Volcano', thai: 'ปังโอวันตินภูเขาไฟ', flat: 55, img: wongnaiPhoto('6e72f648018846eaabf0591aa11002d1.jpg') },
      { name: 'NU Nutella Bread', thai: 'ปังนูเทลล่า', flat: 69, img: wongnaiPhoto('c8ca6265dac141e3949ef1e1b70e775c.jpg') },
      { name: 'CP Chili Paste Pork & Chicken Floss Bread', thai: 'ปังพริกเผาหมู+ไก่หยอง', flat: 55 },
      { name: 'PJ Pandan Custard Bread', thai: 'ปังสังขยาใบเตย', flat: 69, img: wongnaiPhoto('84aba55d24514492a958584498bccf69.jpg') },
      { name: 'TJ Thai Tea Custard Bread', thai: 'ปังสังขยาชาไทย', flat: 69, img: wongnaiPhoto('e763be4193a7467093444dd24fa3fe08.jpg') },
      { name: 'PTB Peanut Butter Bread', thai: 'ปังเนยถั่ว', flat: 69, img: wongnaiPhoto('5458012f457749f6bf4973f87caafb62.jpg') },
      { name: 'NUB Nutella Banana Bread', thai: 'ปังนูเทลล่ากล้วย', flat: 79, img: wongnaiPhoto('97c6304fc84c4fd5a206947c27268541.jpg') }
    ]
  },
  bakery: {
    label: 'Warm Baked Bakery',
    note: 'ขนมปังอบร้อน',
    items: [
      { name: 'CHC Ham & Cheese Croissant', thai: 'ครัวซองต์ แฮมชีส', flat: 129, img: wongnaiPhoto('ad072a7f060d43faa3f5e46d86ffe2a5.jpg') },
      { name: 'CA Almond Croissant', thai: 'ครัวซองต์ อัลมอนด์', flat: 129, img: wongnaiPhoto('d9c502fa92fb457bbfeccaa47cc3aee9.jpg') },
      { name: 'CCP Coffee Pecan Croissant', thai: 'ครัวซองต์ กาแฟ พีแคน', flat: 129, img: wongnaiPhoto('15c83c39b1bd4254b6a061b3757de885.jpg') },
      { name: 'BN Brioche Nutella', thai: 'บริยอช นูเทลล่า', flat: 129, img: wongnaiPhoto('20145d9e79ff459caeb00477cd23ab00.jpg') },
      { name: 'DC Danish Cream Cheese', thai: 'เดนิช ครีมชีส', flat: 119, img: wongnaiPhoto('da865cce0aa44a8bb525260e67c0bb88.jpg') },
      { name: 'PAC Chocolate Bread', thai: 'ขนมปังช็อคโกแลต', flat: 119, img: wongnaiPhoto('9b7dac7bc3dc43c58955090e767cdce3.jpg') },
      { name: 'PAR Raisin Bread', thai: 'ขนมปังลูกเกด', flat: 119, img: wongnaiPhoto('d8bf0488a5d24cbfa9798986590d72e3.jpg') },
      { name: 'SP Shio Pan', thai: 'ชิโอะปัง ขนมปังเกลือ', flat: 69, img: wongnaiPhoto('b6f943233333485185dcd914178d6634.jpg') },
      { name: 'FB Fudge Brownies', thai: 'บราวนี่ฟัดจ์', flat: 139, img: wongnaiPhoto('754585285c964eff9253aee2394fc290.jpg') },
      { name: 'CP Plain Croissant', thai: 'ครัวซองต์ เพลน', flat: 109, img: wongnaiPhoto('39f0e85955034115bd57b3e6f8cc1fa1.jpg') },
      { name: 'CB Butterfly Cinnamon Roll', thai: 'ซินนามอนโรลผีเสื้อ', flat: 129, img: wongnaiPhoto('7a7d022981c34722a8aa5c16a257c432.jpg') },
      { name: 'ET Classic Egg Tart', thai: 'ทาร์ตไข่ คลาสสิค', flat: 119, img: wongnaiPhoto('10424b6516254106ac58910b2e753270.jpg') }
    ]
  }
};

window.COCO_FEATURED = [
  {
    name: 'Thai Milk Tea Ice Flakes',
    thai: 'ชาไทยนมเกล็ดน้ำแข็ง',
    price: 99,
    desc: 'One of the featured recommended items from the saved delivery menu.',
    img: wongnaiPhoto('3c3ad580e15947d6b77dde8b2b24ed57.jpg'),
    gradient: 'from-sand-100 via-white to-sand-200',
    drink: '#D88446'
  },
  {
    name: 'Coconut Smoothie with Fresh Milk',
    thai: 'มะพร้าวปั่นนมสด',
    price: 99,
    desc: 'Fresh coconut blended smooth and served as one of the house staples.',
    img: wongnaiPhoto('90023c76782142b38e0c0095fa6c4154.jpg'),
    gradient: 'from-white via-coco-50 to-coco-100',
    drink: '#F4ECDD'
  },
  {
    name: 'CB Cold Brew',
    thai: 'กาแฟสกัดเย็น',
    price: 119,
    desc: 'The updated cold brew item now shown at the current delivery-menu price.',
    gradient: 'from-sand-100 via-white to-coco-100',
    drink: '#3A2417'
  },
  {
    name: 'LF Coconut Latte Cream Foam',
    thai: 'ครีมโฟมลาเต้มะพร้าว',
    price: 119,
    desc: 'A richer latte finish with coconut cream foam from the updated menu.',
    gradient: 'from-coco-50 via-white to-sand-100',
    drink: '#C9A679'
  }
];

window.COCO_GALLERY = [
  { img: wongnaiPhoto('90023c76782142b38e0c0095fa6c4154.jpg'), label: 'Coconut Smoothie', bg: 'from-coco-50 to-coco-200', tall: true },
  { img: wongnaiPhoto('3c3ad580e15947d6b77dde8b2b24ed57.jpg'), label: 'Thai Milk Tea Ice Flakes', bg: 'from-sand-100 to-sand-300' },
  { img: wongnaiPhoto('97c6304fc84c4fd5a206947c27268541.jpg'), label: 'Nutella Banana Bread', bg: 'from-sand-100 to-sand-300' },
  { img: wongnaiPhoto('ad072a7f060d43faa3f5e46d86ffe2a5.jpg'), label: 'Ham & Cheese Croissant', bg: 'from-coco-100 to-coco-200' },
  { img: wongnaiPhoto('10424b6516254106ac58910b2e753270.jpg'), label: 'Classic Egg Tart', bg: 'from-sand-50 to-coco-100', tall: true },
  { img: wongnaiPhoto('754585285c964eff9253aee2394fc290.jpg'), label: 'Fudge Brownies', bg: 'from-sand-100 to-sand-200' },
  { img: wongnaiPhoto('3cb9c9fb4e8349c6a924a84c25cc17b0.jpg'), label: 'Lod Chong', bg: 'from-coco-100 to-sand-100' },
  { img: wongnaiPhoto('d5499177cc914c9390478b6179dbdc08.jpg'), label: 'Coconut Ice Cream', bg: 'from-coco-100 to-sand-100' }
];

window.COCO_REVIEWS = [
  {
    name: 'Sebastien Legall',
    meta: '7 reviews · 2 months ago',
    stars: 5,
    body: 'Sooo yummy and refreshing. Customer service friendly and chill/cozy vibe.',
    tone: 'bg-coco-100'
  },
  {
    name: 'Georgiana P.',
    meta: 'Local Guide · 6 months ago',
    stars: 5,
    body: 'Cozy and refreshing hidden gem between the parks with delicious ice cream and lovely staff.',
    tone: 'bg-sand-100'
  },
  {
    name: 'Rhyme Steve',
    meta: '1 review · 3 months ago',
    stars: 5,
    body: 'Friendly staff and a fair price. The coconut smoothie is the best, a must try.',
    tone: 'bg-coco-200'
  },
  {
    name: 'Google Guest',
    meta: 'Recent visitor',
    stars: 5,
    body: 'Great service and staff, would definitely come back again.',
    tone: 'bg-sand-200'
  }
];
