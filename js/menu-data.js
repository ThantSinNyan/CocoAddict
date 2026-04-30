const WONGNAI_ASSET_DIR = 'assets/images/Coco Addict, Soi Polo - Order food delivery _ Wongnai x LINE MAN_files';
const wongnaiPhoto = (file) => `${WONGNAI_ASSET_DIR}/${file}`;

window.COCO_CATEGORIES = [
  { id: 'coffee', label: 'Coffee' },
  { id: 'tea', label: 'Tea' },
  { id: 'smoothie', label: 'Smoothie' },
  { id: 'slushy', label: 'Slushy' },
  { id: 'ice-cream', label: 'Ice Cream' },
  { id: 'dessert', label: 'Pastry & Dessert' },
  { id: 'sandwich', label: 'Sandwich' },
  { id: 'toast', label: 'Toast' },
  { id: 'bakery', label: 'Bakery' }
];

window.COCO_MENU = [
  {
    name: 'AM Americano',
    category: 'coffee',
    badge: 'Coffee',
    desc: 'Clean espresso over water, bright and easy for an everyday cup.',
    prices: [
      { label: 'Hot', value: 69 },
      { label: 'Iced', value: 89 }
    ]
  },
  {
    name: 'Coconut Americano',
    thai: 'อเมริกาโน่มะพร้าว',
    category: 'coffee',
    badge: 'Refreshing',
    desc: 'A bright espresso pour over chilled coconut for a Bangkok heat reset.',
    prices: [{ label: 'Iced', value: 119 }]
  },
  {
    name: 'ES Espresso',
    category: 'coffee',
    badge: 'Coffee',
    desc: 'Rich, compact espresso with a smooth finish.',
    prices: [
      { label: 'Hot', value: 59 },
      { label: 'Iced', value: 99 }
    ]
  },
  {
    name: 'CP Cappuccino',
    category: 'coffee',
    badge: 'Coffee',
    desc: 'Balanced espresso, milk, and foam for a classic cafe cup.',
    prices: [
      { label: 'Hot', value: 69 },
      { label: 'Iced', value: 99 }
    ]
  },
  {
    name: 'LT Latte',
    category: 'coffee',
    badge: 'Coffee',
    desc: 'Smooth espresso and milk, soft and easy to drink.',
    prices: [
      { label: 'Hot', value: 69 },
      { label: 'Iced', value: 99 }
    ]
  },
  {
    name: 'Coco Latte / Coconut Latte Cream Foam',
    thai: 'ลาเต้มะพร้าวครีมโฟม',
    category: 'coffee',
    badge: 'Coco latte',
    desc: 'A creamy coconut latte finished with coconut cream foam.',
    prices: [{ label: 'Iced', value: 119 }]
  },
  {
    name: 'MC Mocha',
    category: 'coffee',
    badge: 'Coffee',
    desc: 'Chocolate and espresso with a cozy rounded finish.',
    prices: [
      { label: 'Hot', value: 69 },
      { label: 'Iced', value: 99 }
    ]
  },
  {
    name: 'CB Cold Brew',
    thai: 'กาแฟสกัดเย็น',
    category: 'coffee',
    badge: 'Coffee',
    desc: 'Slow, chilled coffee with a clean body and soft sweetness.',
    prices: [{ label: 'Iced', value: 119 }]
  },
  {
    name: 'CM Caramel Macchiato',
    category: 'coffee',
    badge: 'Coffee',
    desc: 'Caramel, milk, and espresso layered for a mellow sweet cup.',
    prices: [
      { label: 'Hot', value: 99 },
      { label: 'Iced', value: 119 }
    ]
  },
  {
    name: 'Americano Orange',
    category: 'coffee',
    badge: 'Citrus',
    desc: 'Fresh orange and espresso for a bright afternoon lift.',
    prices: [{ label: 'Iced', value: 119 }]
  },
  {
    name: 'MT Matcha Green Tea',
    category: 'tea',
    badge: 'Matcha',
    desc: 'A smooth matcha drink with a fresh green finish.',
    prices: [
      { label: 'Hot', value: 69 },
      { label: 'Iced', value: 99 }
    ]
  },
  {
    name: 'Matcha Coconut Cream Foam',
    thai: 'มัทฉะมะพร้าวครีมโฟม',
    category: 'tea',
    badge: 'Matcha',
    desc: 'Earthy matcha softened with coconut cream foam.',
    prices: [{ label: 'Iced', value: 119 }]
  },
  {
    name: 'Thai Milk Tea',
    thai: 'ชาไทยนม',
    category: 'tea',
    badge: 'Thai tea',
    desc: 'Classic Thai milk tea, creamy and aromatic.',
    prices: [
      { label: 'Hot', value: 69 },
      { label: 'Iced', value: 99 }
    ]
  },
  {
    name: 'Lemon Tea',
    category: 'tea',
    badge: 'Tea',
    desc: 'Light lemon tea for an easy refreshing sip.',
    prices: [
      { label: 'Hot', value: 69 },
      { label: 'Iced', value: 99 }
    ]
  },
  {
    name: 'Honey Lemon Tea',
    category: 'tea',
    badge: 'Tea',
    desc: 'Honey lemon tea with a soft citrus sweetness.',
    prices: [
      { label: 'Hot', value: 69 },
      { label: 'Iced', value: 99 }
    ]
  },
  {
    name: 'Iced Black Tea with Coconut',
    thai: 'ชาดำเย็นมะพร้าว',
    category: 'tea',
    badge: 'Coconut',
    desc: 'Black tea with coconut for a darker, refreshing cup.',
    prices: [{ label: 'Iced', value: 119 }]
  },
  {
    name: 'Coconut Smoothie with Fresh Milk',
    thai: 'มะพร้าวปั่นนมสด',
    category: 'smoothie',
    badge: 'Best seller',
    desc: 'Fresh coconut blended with milk into the signature creamy smoothie.',
    img: wongnaiPhoto('90023c76782142b38e0c0095fa6c4154.jpg'),
    prices: [{ label: 'Iced', value: 99 }]
  },
  {
    name: 'Coconut Water',
    thai: 'น้ำมะพร้าว',
    category: 'smoothie',
    badge: 'Fresh',
    desc: 'Simple chilled coconut water when you want it clean and light.',
    prices: [{ label: 'Iced', value: 49 }]
  },
  {
    name: 'Fresh Orange Blended',
    category: 'smoothie',
    badge: 'Fruit',
    desc: 'Fresh orange blended into a bright frozen drink.',
    prices: [{ label: 'Iced', value: 99 }]
  },
  {
    name: 'Fresh Lemon Blended',
    category: 'smoothie',
    badge: 'Fruit',
    desc: 'A tart, icy lemon blend for warm Bangkok afternoons.',
    prices: [{ label: 'Iced', value: 99 }]
  },
  {
    name: 'Thai Milk Tea Ice Flakes',
    thai: 'ชาไทยนมเกล็ดน้ำแข็ง',
    category: 'slushy',
    badge: 'Refreshing',
    desc: 'Thai milk tea served as soft ice flakes, creamy and cooling.',
    img: wongnaiPhoto('3c3ad580e15947d6b77dde8b2b24ed57.jpg'),
    prices: [{ label: 'Iced', value: 99 }]
  },
  {
    name: 'Butterfly Pea Lemon Soda Ice Flakes',
    thai: 'อัญชันมะนาวโซดาเกล็ดน้ำแข็ง',
    category: 'slushy',
    badge: 'Soda',
    desc: 'A colorful butterfly pea lemon soda slushy with a crisp finish.',
    img: wongnaiPhoto('82e32df6565f432386c72ef206b3d58b.jpg'),
    prices: [{ label: 'Iced', value: 99 }]
  },
  {
    name: 'Lod Chong Wat Chet',
    category: 'slushy',
    badge: 'Thai dessert',
    desc: 'A Thai dessert drink with coconut milk sweetness and chilled texture.',
    img: wongnaiPhoto('3cb9c9fb4e8349c6a924a84c25cc17b0.jpg'),
    prices: [{ label: 'Iced', value: 89 }]
  },
  {
    name: 'Coconut Ice Cream',
    thai: 'ไอศกรีมมะพร้าว',
    category: 'ice-cream',
    badge: 'Dessert',
    desc: 'Creamy coconut ice cream, simple and refreshing.',
    img: wongnaiPhoto('d5499177cc914c9390478b6179dbdc08.jpg'),
    price: 89
  },
  {
    name: 'Gelato Malt Biscuit Cookie',
    category: 'ice-cream',
    badge: 'Gelato',
    desc: 'Malt biscuit gelato with a cookie-style finish.',
    price: 79
  },
  {
    name: 'Gelato Yogurt Jelly',
    category: 'ice-cream',
    badge: 'Gelato',
    desc: 'A light yogurt gelato with jelly texture.',
    price: 79
  },
  {
    name: 'MI Matcha Ice Cream',
    category: 'ice-cream',
    badge: 'Matcha',
    desc: 'Matcha ice cream for green tea lovers.',
    price: 79
  },
  {
    name: 'Coconut Milk Pudding',
    thai: 'พุดดิ้งมะพร้าวนมสด',
    category: 'dessert',
    badge: 'Coconut',
    desc: 'Soft coconut milk pudding with a gentle creamy sweetness.',
    price: 59
  },
  {
    name: 'Grass Jelly Ovaltine Blended',
    category: 'dessert',
    badge: 'Dessert drink',
    desc: 'Grass jelly and Ovaltine blended into a nostalgic cold treat.',
    img: wongnaiPhoto('bd6e7aaa53594e0390b955c5fe1b3970.jpg'),
    price: 89
  },
  {
    name: 'Fudge Brownies',
    category: 'dessert',
    badge: 'Chocolate',
    desc: 'Dense chocolate brownies for a richer cafe bite.',
    img: wongnaiPhoto('754585285c964eff9253aee2394fc290.jpg'),
    price: 139
  },
  {
    name: 'Classic Egg Tart',
    category: 'dessert',
    badge: 'Pastry',
    desc: 'Golden custard tart with a classic bakery finish.',
    img: wongnaiPhoto('10424b6516254106ac58910b2e753270.jpg'),
    price: 119
  },
  {
    name: 'CK Fresh Shredded Chicken Sandwich',
    category: 'sandwich',
    badge: 'Fresh',
    desc: 'Fresh shredded chicken sandwich for a light savory stop.',
    price: 99
  },
  {
    name: 'BM Butter Milk Bread',
    category: 'toast',
    badge: 'Toast',
    desc: 'Buttery milk bread, toasted warm.',
    img: wongnaiPhoto('1f4e12252dec4cf4891a58b07ab061b4.jpg'),
    price: 39
  },
  {
    name: 'BS Butter Sugar Bread',
    category: 'toast',
    badge: 'Toast',
    desc: 'Crisp toast with butter and sugar.',
    img: wongnaiPhoto('9af3f3af232848b0954d87345be49194.jpg'),
    price: 39
  },
  {
    name: 'Ovaltine Volcano Bread',
    category: 'toast',
    badge: 'Sweet',
    desc: 'Ovaltine-topped toast with a playful dessert feel.',
    img: wongnaiPhoto('6e72f648018846eaabf0591aa11002d1.jpg'),
    price: 55
  },
  {
    name: 'Nutella Banana Bread',
    category: 'toast',
    badge: 'Sweet',
    desc: 'Nutella and banana on warm toast.',
    img: wongnaiPhoto('97c6304fc84c4fd5a206947c27268541.jpg'),
    price: 79
  },
  {
    name: 'Pandan Custard Bread',
    category: 'toast',
    badge: 'Thai flavor',
    desc: 'Warm bread with pandan custard.',
    img: wongnaiPhoto('84aba55d24514492a958584498bccf69.jpg'),
    price: 69
  },
  {
    name: 'Thai Tea Custard Bread',
    category: 'toast',
    badge: 'Thai tea',
    desc: 'Warm toast with Thai tea custard.',
    img: wongnaiPhoto('e763be4193a7467093444dd24fa3fe08.jpg'),
    price: 69
  },
  {
    name: 'Ham & Cheese Croissant',
    category: 'bakery',
    badge: 'Savory',
    desc: 'Warm croissant with ham and cheese.',
    img: wongnaiPhoto('ad072a7f060d43faa3f5e46d86ffe2a5.jpg'),
    price: 129
  },
  {
    name: 'Almond Croissant',
    category: 'bakery',
    badge: 'Bakery',
    desc: 'Flaky almond croissant for a premium cafe bite.',
    img: wongnaiPhoto('d9c502fa92fb457bbfeccaa47cc3aee9.jpg'),
    price: 129
  },
  {
    name: 'Croissant, Coffee, Pecan',
    category: 'bakery',
    badge: 'Bakery',
    desc: 'Coffee and pecan notes in a flaky croissant.',
    img: wongnaiPhoto('15c83c39b1bd4254b6a061b3757de885.jpg'),
    price: 129
  },
  {
    name: 'Brioche Nutella',
    category: 'bakery',
    badge: 'Sweet',
    desc: 'Soft brioche with Nutella.',
    img: wongnaiPhoto('20145d9e79ff459caeb00477cd23ab00.jpg'),
    price: 129
  },
  {
    name: 'Danish Cream Cheese',
    category: 'bakery',
    badge: 'Bakery',
    desc: 'A cream cheese Danish for a soft pastry pairing.',
    img: wongnaiPhoto('da865cce0aa44a8bb525260e67c0bb88.jpg'),
    price: 119
  },
  {
    name: 'Plain Croissant',
    category: 'bakery',
    badge: 'Classic',
    desc: 'Classic plain croissant, warm and flaky.',
    img: wongnaiPhoto('39f0e85955034115bd57b3e6f8cc1fa1.jpg'),
    price: 109
  },
  {
    name: 'Cinnamon Roll Butterfly',
    category: 'bakery',
    badge: 'Bakery',
    desc: 'A cinnamon roll with a pretty butterfly shape.',
    img: wongnaiPhoto('7a7d022981c34722a8aa5c16a257c432.jpg'),
    price: 129
  }
];

window.COCO_FEATURED = [
  {
    name: 'Coconut Smoothie with Fresh Milk',
    thai: 'มะพร้าวปั่นนมสด',
    category: 'Smoothie',
    price: 99,
    badge: 'Best seller',
    desc: 'Fresh coconut blended with milk for the most-loved Coco Addict sip.',
    img: wongnaiPhoto('90023c76782142b38e0c0095fa6c4154.jpg')
  },
  {
    name: 'Coco Latte / Coconut Latte Cream Foam',
    thai: 'ลาเต้มะพร้าวครีมโฟม',
    category: 'Coffee',
    price: 119,
    badge: 'Coco latte',
    desc: 'Creamy espresso, coconut notes, and a soft coconut cream foam finish.'
  },
  {
    name: 'Coconut Americano',
    thai: 'อเมริกาโน่มะพร้าว',
    category: 'Coffee',
    price: 119,
    badge: 'Refreshing',
    desc: 'Bright espresso over chilled coconut for a clean tropical coffee.'
  },
  {
    name: 'Thai Milk Tea Ice Flakes',
    thai: 'ชาไทยนมเกล็ดน้ำแข็ง',
    category: 'Slushy',
    price: 99,
    badge: 'Refreshing',
    desc: 'Thai milk tea in soft ice flakes. Cozy flavor, icy finish.',
    img: wongnaiPhoto('3c3ad580e15947d6b77dde8b2b24ed57.jpg')
  },
  {
    name: 'CB Cold Brew',
    thai: 'กาแฟสกัดเย็น',
    category: 'Coffee',
    price: 119,
    badge: 'Coffee',
    desc: 'Slow chilled coffee with a smooth body and clean finish.'
  },
  {
    name: 'Coconut Ice Cream',
    thai: 'ไอศกรีมมะพร้าว',
    category: 'Ice Cream',
    price: 89,
    badge: 'Dessert',
    desc: 'Simple, creamy coconut ice cream for a refreshing dessert stop.',
    img: wongnaiPhoto('d5499177cc914c9390478b6179dbdc08.jpg')
  }
];

window.COCO_GALLERY = [
  { label: 'Coconut smoothie', img: wongnaiPhoto('90023c76782142b38e0c0095fa6c4154.jpg'), tall: true },
  { label: 'Thai milk tea ice flakes', img: wongnaiPhoto('3c3ad580e15947d6b77dde8b2b24ed57.jpg') },
  { label: 'Nutella banana bread', img: wongnaiPhoto('97c6304fc84c4fd5a206947c27268541.jpg') },
  { label: 'Ham & cheese croissant', img: wongnaiPhoto('ad072a7f060d43faa3f5e46d86ffe2a5.jpg') },
  { label: 'Classic egg tart', img: wongnaiPhoto('10424b6516254106ac58910b2e753270.jpg'), tall: true },
  { label: 'Fudge brownies', img: wongnaiPhoto('754585285c964eff9253aee2394fc290.jpg') },
  { label: 'Lod Chong', img: wongnaiPhoto('3cb9c9fb4e8349c6a924a84c25cc17b0.jpg') },
  { label: 'Coconut ice cream', img: wongnaiPhoto('d5499177cc914c9390478b6179dbdc08.jpg') }
];

window.COCO_REVIEWS = [
  {
    name: 'Sebastien Legall',
    meta: 'Google review',
    stars: 5,
    body: 'Sooo yummy and refreshing. Customer service friendly and chill/cozy vibe.',
    tags: ['refreshing', 'cozy vibe']
  },
  {
    name: 'Georgiana P',
    meta: 'Google review',
    stars: 5,
    body: 'Cozy and refreshing hidden gem between the parks with delicious ice cream.',
    tags: ['hidden gem', 'ice cream']
  },
  {
    name: 'Rhyme Steve',
    meta: 'Google review',
    stars: 5,
    body: 'Friendly staff and a fair price. The coconut smoothie is the best, a must try!',
    tags: ['friendly staff', 'coconut smoothie']
  }
];
