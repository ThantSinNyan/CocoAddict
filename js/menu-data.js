/**
 * Menu data for Coco Addict.
 * Prices follow the shop's board: Hot / Iced / Coco-Iced.
 * `null` means that variant is not offered.
 */
window.COCO_MENU = {
  coffee: {
    label: 'Coffee',
    items: [
      { name: 'Americano',  thai: 'อเมริกาโน',  hot: 49, iced: 59, coco: 69 },
      { name: 'Espresso',   thai: 'เอสเพรสโซ',  hot: 39, iced: 69, coco: 79 },
      { name: 'Cappuccino', thai: 'คาปูชิโน',   hot: 49, iced: 69, coco: 79 },
      { name: 'Latte',      thai: 'ลาเต้',      hot: 49, iced: 69, coco: 79 },
      { name: 'Mocca',      thai: 'มอคค่า',    hot: 49, iced: 69, coco: 79 }
    ]
  },
  tea: {
    label: 'Tea',
    items: [
      { name: 'Matcha Green Tea',         thai: 'ชาเขียวมัทฉะ',      hot: 49, iced: 69, coco: 79 },
      { name: 'Thai Tea',                 thai: 'ชาดำเย็น',          hot: null, iced: null, coco: 79 },
      { name: 'Thai Tea + Lemon',         thai: 'ชามะนาว',          hot: 49, iced: 69, coco: null },
      { name: 'Thai Tea + Honey + Lemon', thai: 'ชาน้ำผึ้งมะนาว',   hot: 49, iced: 69, coco: null },
      { name: 'Thai Milk Tea',            thai: 'ชาไทยนม',          hot: 49, iced: 69, coco: 79 }
    ]
  },
  others: {
    label: 'Others',
    items: [
      { name: 'Cocoa',                   thai: 'โกโก้',             hot: 49, iced: 69, coco: null },
      { name: 'Chocolate',               thai: 'ช็อคโกแลต',          hot: 49, iced: 69, coco: null },
      { name: 'Butterfly Pea Lime Soda', thai: 'อัญชันมะนาวโซดา',  hot: null, iced: 69, coco: null }
    ]
  },
  smoothie: {
    label: 'Smoothie',
    note: 'Iced blended',
    items: [
      { name: 'Coconut with Milk', thai: 'มะพร้าวปั่นนมสด', flat: 59 },
      {
        name: 'Lod Chong "Wat Jed" Smoothie',
        thai: 'ลอดช่องวัดเจษปั้น',
        flat: 89,
        img: 'assets/images/lod-chong.jpg',
        desc: 'Pandan lod chong jelly blended with coconut milk, topped with coconut ice cream.',
        isNew: true
      }
    ]
  },
  slushy: {
    label: 'Slushy',
    note: 'Ice-blended',
    items: [
      { name: 'Thai Milk Tea',            thai: 'ชาไทยนม',          flat: 69 },
      { name: 'Butterfly Pea Lime Soda',  thai: 'อัญชันมะนาวโซดา', flat: 69 }
    ]
  },
  iceCream: {
    label: 'Ice Cream',
    note: '3 free toppings',
    items: [
      { name: 'Coconut Milk',       thai: 'กะทิ',      flat: 49 },
      { name: 'Mixed Coconut Milk', thai: 'รวมมิตร',    flat: 49 },
      { name: 'Taro',               thai: 'เผือก',     flat: 49 },
      { name: 'Lychee',             thai: 'ลิ้นจี่',   flat: 49 },
      { name: 'Durian',             thai: 'ทุเรียน',   flat: 49 }
    ]
  }
};

/** Four featured drinks shown in the hero grid. */
window.COCO_FEATURED = [
  {
    name: 'Coconut Americano',
    thai: 'Americano · Coco Iced',
    price: 69,
    desc: 'Double-shot espresso poured over cold coconut water and ice.',
    img: 'assets/images/smoothie.jpg',
    gradient: 'from-sand-100 via-white to-coco-100',
    drink: '#6B4A2B'
  },
  {
    name: 'Coco Latte',
    thai: 'ลาเต้ · Coco Iced',
    price: 69,
    desc: 'Espresso meets coconut milk jelly and cream — creamy, indulgent.',
    img: 'assets/images/latte.jpg',
    gradient: 'from-coco-50 via-white to-sand-100',
    drink: '#C9A679'
  },
  {
    name: 'Thai Milk Tea',
    thai: 'ชาไทยนม',
    price: 49,
    desc: 'Bright orange, silky, and just the right kind of sweet.',
    img: 'assets/images/thai-tea.jpg',
    gradient: 'from-sand-100 via-white to-sand-200',
    drink: '#D88446'
  },
  {
    name: 'Coconut Smoothie',
    thai: 'มะพร้าวปั่นนมสด',
    price: 59,
    desc: 'Fresh coconut blended with whole milk — refreshing and light.',
    img: 'assets/images/drinks-collection.jpg',
    gradient: 'from-white via-coco-50 to-coco-100',
    drink: '#F4ECDD'
  }
];

/**
 * Gallery photos.
 * Drop your images into assets/images/ with these exact filenames.
 * Tiles without an image fall back to a coloured gradient.
 */
window.COCO_GALLERY = [
  { img: 'assets/images/latte.jpg',      label: 'Coco Latte',            bg: 'from-sand-200 to-sand-300',   tall: true },
  { img: 'assets/images/storefront.jpg', label: 'The Shop',              bg: 'from-coco-100 to-coco-200' },
  { img: 'assets/images/smoothie.jpg',   label: 'Coconut Smoothie',      bg: 'from-coco-50  to-coco-200' },
  { img: 'assets/images/thai-tea.jpg',   label: 'Thai Tea + Lime',       bg: 'from-sand-100 to-sand-300' },
  { img: 'assets/images/cheesecake.jpg', label: 'Blueberry Cheesecake',  bg: 'from-sand-50  to-coco-100',  tall: true },
  { img: 'assets/images/pastries.jpg',   label: 'Lemon Pastries',        bg: 'from-sand-100 to-sand-200' },
  { img: 'assets/images/new-slushy.jpg', label: 'Coming Soon · ฿79',    bg: 'from-coco-100 to-sand-100',  soon: true },
  { img: 'assets/images/drinks-collection.jpg', label: 'The Collection', bg: 'from-coco-50  to-coco-200' }
];

/** Real guest reviews pulled from Google Maps. */
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
    body: 'Friendly staff and a fair price. The coconut smoothie is the best — a must try! ☕🥥',
    tone: 'bg-coco-200'
  },
  {
    name: 'Google Guest',
    meta: 'Recent visitor',
    stars: 5,
    body: 'Great service and staff — would definitely come back again.',
    tone: 'bg-sand-200'
  },
  {
    name: 'Local regular',
    meta: '8 months ago',
    stars: 5,
    body: '很意外的一家街边小店，不贵，清爽，很好喝，下次还来。',
    tone: 'bg-coco-100'
  },
  {
    name: 'New neighbour',
    meta: 'Early review',
    stars: 5,
    body: 'New shop in the area for great coffee and ice cream!',
    tone: 'bg-sand-100'
  }
];
