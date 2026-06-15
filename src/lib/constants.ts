export const SITE = {
  name: 'HorecaTMA',
  title: {
    uz: 'HorecaTMA — Telegram Mini App для kafelar',
    ru: 'HorecaTMA — Telegram Mini App для кафе',
  },
  description: {
    uz: "Kafeler uchun to'liq yechim: menyu → buyurtma → oshxona → yetkazish → to'lov → analitika",
    ru: 'Полное решение для кафе: меню → заказ → кухня → доставка → оплата → аналитика',
  },
  url: 'https://horeca.uz',
  botUrl: 'https://t.me/HorecaTMA_bot',
  supportUrl: 'https://t.me/HorecaTMA_support',
};

export const SOCIALS = {
  telegram: 'https://t.me/HorecaTMA',
  instagram: 'https://instagram.com/horecatma',
};

export const PRICING = [
  {
    id: 'starter',
    name: { uz: 'Starter', ru: 'Starter' },
    price: 10,
    target: { uz: "1-3 stol, faqat zal", ru: '1-3 стола, только зал' },
    popular: false,
    features: {
      uz: [
        'Menyu boshqaruvi',
        'Buyurtmalar (dine-in, takeaway)',
        'QR-kodlar',
        'Click + Payme',
        "1 ta xodim akkaunti",
      ],
      ru: [
        'Управление меню',
        'Заказы (dine-in, takeaway)',
        'QR-коды',
        'Click + Payme',
        '1 аккаунт сотрудника',
      ],
    },
  },
  {
    id: 'business',
    name: { uz: 'Business', ru: 'Business' },
    price: 15,
    target: { uz: '3-10 stol, yetkazish', ru: '3-10 столов, доставка' },
    popular: true,
    features: {
      uz: [
        "Starter'dagi hamma narsa",
        'Yetkazish boshqaruvi',
        'Analitika paneli',
        "5 ta xodim akkaunti",
        'Oldindan buyurtma',
      ],
      ru: [
        'Всё из Starter',
        'Управление доставкой',
        'Аналитика',
        '5 аккаунтов сотрудников',
        'Предзаказы',
      ],
    },
  },
  {
    id: 'pro',
    name: { uz: 'Pro', ru: 'Pro' },
    price: 20,
    target: { uz: 'Tarmoqlar, API, white-label', ru: 'Сети, API, white-label' },
    popular: false,
    features: {
      uz: [
        "Business'dagi hamma narsa",
        'API kirish',
        'White-label',
        "Cheksiz xodimlar",
        'Ustuvor qo\'llab-quvvatlash',
      ],
      ru: [
        'Всё из Business',
        'Доступ к API',
        'White-label',
        'Безлимитные сотрудники',
        'Приоритетная поддержка',
      ],
    },
  },
];

export const FEATURES = [
  {
    icon: 'Smartphone',
    title: { uz: "Menyu Telegramda", ru: 'Меню в Telegram' },
    description: {
      uz: "Gost QR skanerlaydi — ilova yuklash shart emas",
      ru: 'Гость сканирует QR — без скачивания приложения',
    },
  },
  {
    icon: 'ShoppingCart',
    title: { uz: "Buyurtmalar onlayn", ru: 'Заказы онлайн' },
    description: {
      uz: "Gost taomlarni tanlaydi, o'zgartiradi, to'laydi",
      ru: 'Гость выбирает блюда, модификаторы, оплачивает',
    },
  },
  {
    icon: 'ChefHat',
    title: { uz: "Oshxona ekrani", ru: 'Кухонный экран' },
    description: {
      uz: "Oshpaz buyurtmalarni darhol oladi, statusni yangilaydi",
      ru: 'Повар получает заказы мгновенно, обновляет статус',
    },
  },
  {
    icon: 'CreditCard',
    title: { uz: "To'lov", ru: 'Оплата' },
    description: {
      uz: "Click, Payme, naqd pul — hammasi bir joyda",
      ru: 'Click, Payme, наличные — всё в одном месте',
    },
  },
  {
    icon: 'Truck',
    title: { uz: "Yetkazish", ru: 'Доставка' },
    description: {
      uz: "O'z yetkazishingiz — aggregator komissiyasisiz",
      ru: 'Своя доставка без комиссий агрегаторов',
    },
  },
  {
    icon: 'BarChart3',
    title: { uz: "Analitika", ru: 'Аналитика' },
    description: {
      uz: "Kunlik tushum, mashhur taomlar, cho'ntaklarni bilish",
      ru: 'Выручка дня, популярные блюда, часы пик',
    },
  },
  {
    icon: 'QrCode',
    title: { uz: "QR-kodlar", ru: 'QR-коды' },
    description: {
      uz: "Har bir stol uchun avtomatik QR generatsiya",
      ru: 'Автоматическая генерация QR на каждый стол',
    },
  },
  {
    icon: 'Globe',
    title: { uz: "Ikki tilli", ru: 'Двуязычный' },
    description: {
      uz: "O'zbek va rus tillari — gost tilni tanlaydi",
      ru: 'Uzbek и Russian — гость выбирает язык',
    },
  },
  {
    icon: 'Zap',
    title: { uz: "Tez boshlash", ru: 'Быстрый старт' },
    description: {
      uz: "15 daqiqada sozlash, o'rgatish shart emas",
      ru: 'Настройка за 15 минут, обучение не нужно',
    },
  },
];

export const COMPARISON = [
  {
    feature: { uz: 'Narx', ru: 'Цена' },
    horeca: { uz: '$10-20/oy', ru: '$10-20/мес' },
    pos: { uz: '$60-120/oy', ru: '$60-120/мес' },
    aggregator: { uz: '20-30% komissiya', ru: '20-30% комиссия' },
    horecaOk: true,
    posOk: false,
    aggregatorOk: false,
  },
  {
    feature: { uz: 'Sozlash', ru: 'Настройка' },
    horeca: { uz: '15 daqiqa', ru: '15 минут' },
    pos: { uz: '2-4 soat', ru: '2-4 часа' },
    aggregator: { uz: '1 soat', ru: '1 час' },
    horecaOk: true,
    posOk: false,
    aggregatorOk: true,
  },
  {
    feature: { uz: 'Ilova yuklash', ru: 'Скачивание приложения' },
    horeca: { uz: 'Shart emas', ru: 'Не нужно' },
    pos: { uz: 'Kerak', ru: 'Нужно' },
    aggregator: { uz: 'Kerak', ru: 'Нужно' },
    horecaOk: true,
    posOk: false,
    aggregatorOk: false,
  },
  {
    feature: { uz: "Telegram'da ishlaydi", ru: 'Работает в Telegram' },
    horeca: { uz: 'Ha', ru: 'Да' },
    pos: { uz: "Yo'q", ru: 'Нет' },
    aggregator: { uz: "Yo'q", ru: 'Нет' },
    horecaOk: true,
    posOk: false,
    aggregatorOk: false,
  },
  {
    feature: { uz: "Menyu + Buyurtmalar", ru: 'Меню + Заказы' },
    horeca: { uz: "To'liq sikl", ru: 'Полный цикл' },
    pos: { uz: "To'liq sikl", ru: 'Полный цикл' },
    aggregator: { uz: 'Faqat yetkazish', ru: 'Только доставка' },
    horecaOk: true,
    posOk: true,
    aggregatorOk: true,
  },
  {
    feature: { uz: "O'z yetkazishi", ru: 'Своя доставка' },
    horeca: { uz: 'Ha', ru: 'Да' },
    pos: { uz: 'Qimmat', ru: 'Дорого' },
    aggregator: { uz: "Yo'q", ru: 'Нет' },
    horecaOk: true,
    posOk: false,
    aggregatorOk: false,
  },
  {
    feature: { uz: "TMA'da to'lov", ru: 'Оплата в TMA' },
    horeca: { uz: 'Click, Payme', ru: 'Click, Payme' },
    pos: { uz: 'Terminal', ru: 'Терминал' },
    aggregator: { uz: "Ilova ichida", ru: 'В приложении' },
    horecaOk: true,
    posOk: true,
    aggregatorOk: true,
  },
  {
    feature: { uz: "Analitika", ru: 'Аналитика' },
    horeca: { uz: 'Ichki', ru: 'Встроенная' },
    pos: { uz: 'Ichki', ru: 'Встроенная' },
    aggregator: { uz: 'Cheklangan', ru: 'Ограниченная' },
    horecaOk: true,
    posOk: true,
    aggregatorOk: true,
  },
  {
    feature: { uz: "Buyurtmadan komissiya", ru: 'Комиссия с заказов' },
    horeca: { uz: '0%', ru: '0%' },
    pos: { uz: '0%', ru: '0%' },
    aggregator: { uz: '20-30%', ru: '20-30%' },
    horecaOk: true,
    posOk: true,
    aggregatorOk: false,
  },
];

export const TESTIMONIALS = [
  {
    text: {
      uz: "Qog'ozdan HorecaTMA'ga bir kechada o'tdik. Gostlar xursand — o'zlari buyurtma beradi, kutish shart emas.",
      ru: 'Перешли с бумаги на HorecaTMA за один вечер. Гости в восторге — заказывают сами, ждать не надо.',
    },
    author: { uz: 'Akbар, "Osh Pati"', ru: 'Акбар, "Ош Патти"' },
    city: { uz: 'Toshkent', ru: 'Ташкент' },
  },
  {
    text: {
      uz: "Oldin tushumni kechgacha hisoblardim. Endi telefonimda ko'raman. Analitika — zo'r.",
      ru: 'Раньше считали выручку до вечера. Теперь вижу всё в телефоне. Аналитика — огонь.',
    },
    author: { uz: 'Nodir, "Choyxona Stolitsa"', ru: 'Нодир, "Чайхана Столица"' },
    city: { uz: 'Samarqand', ru: 'Самарканд' },
  },
  {
    text: {
      uz: "$15 Clopos o'rniga. 15 daqiqada sozladim. Kechirasiz, topmaganman.",
      ru: '$15 вместо $90 за Clopos. Настройка — 15 минут. Жалею, что не нашёл раньше.',
    },
    author: { uz: 'Dilshod, "Kofe Xaus"', ru: 'Дилшод, "Кофе Хаус"' },
    city: { uz: 'Buxoro', ru: 'Бухара' },
  },
];

export const FAQ = [
  {
    q: {
      uz: "Ilova yuklash kerakmi?",
      ru: 'Нужно ли скачивать приложение?',
    },
    a: {
      uz: "Yo'q. HorecaTMA Telegram ichida ishlaydi — gost QR skanerlaydi va darhol menyuni ko'radi.",
      ru: 'Нет. HorecaTMA работает внутри Telegram — гость сканирует QR и сразу видит меню.',
    },
  },
  {
    q: {
      uz: "Click/Payme qanday ulash mumkin?",
      ru: 'Как подключить Click/Payme?',
    },
    a: {
      uz: "Sozlamalarda merchant ID va maxfiy kalitni kiriting. Biz sozlashda yordam beramiz.",
      ru: 'В настройках OWNER указывает merchant ID и секретный ключ. Мы поможем с настройкой.',
    },
  },
  {
    q: {
      uz: "Narxi qancha?",
      ru: 'Сколько стоит?',
    },
    a: {
      uz: "$10-20/oy rejaga qarab. Har qanday rejada 14 kun bepul.",
      ru: '$10-20/мес в зависимости от плана. 14 дней бесплатно на любом плане.',
    },
  },
  {
    q: {
      uz: "Internet tutilmasa nima bo'ladi?",
      ru: 'Что если у меня нет стабильного интернета?',
    },
    a: {
      uz: "HorecaTMA har qanday smartfonda ishlaydi. Sekin internetda ham HTTP-polling fallback mavjud.",
      ru: 'HorecaTMA работает на любом смартфоне с Telegram. Даже при медленном интернете — fallback на HTTP-polling.',
    },
  },
  {
    q: {
      uz: "Menyoni o'zim qo'sha olamanmi?",
      ru: 'Могу ли я добавить своё меню?',
    },
    a: {
      uz: "Ha. O'zingiz kategoriyalar, taomlar, rasmlar va narxlarni qo'shasiz. 15 daqiqada sozlanadi.",
      ru: 'Да. Вы сами добавляете категории, блюда, фото и цены. Настройка занимает 15 минут.',
    },
  },
  {
    q: {
      uz: "Yetkazish qanday ishlaydi?",
      ru: 'Как работает доставка?',
    },
    a: {
      uz: "Egasi radius, narx va minimal buyurtmani sozlaydi. Kuryer buyurtmani TMA Staff'da oladi.",
      ru: 'Владелец настраивает радиус, стоимость и минимальный заказ. Курьер получает заказ в TMA Staff.',
    },
  },
  {
    q: {
      uz: "Sinov muddati bormi?",
      ru: 'Есть ли пробный период?',
    },
    a: {
      uz: "Ha, 14 kun bepul. Karta bog'lash shart emas.",
      ru: 'Да, 14 дней бесплатно. Без привязки карты.',
    },
  },
  {
    q: {
      uz: "Qo'llab-quvvatlash bilan qanday bog'lanish mumkin?",
      ru: 'Как связаться с поддержкой?',
    },
    a: {
      uz: "Telegram: @HorecaTMA_support. Ish vaqtida 2 soat ichida javob beramiz.",
      ru: 'Telegram: @HorecaTMA_support. Отвечаем в течение 2 часов в рабочее время.',
    },
  },
];

export const ROLES = [
  {
    id: 'guest',
    icon: 'User',
    title: { uz: 'Mehmon', ru: 'Гость' },
    benefits: {
      uz: [
        "QR skanerlab menyuni oching — ilova yuklash shart emas",
        "O'zingiz buyurtma bering, ofitsantni kutmang",
        "Karta yoki naqd pul bilan to'lang",
        "Buyurtma statusini real vaqtda kuzating",
      ],
      ru: [
        'Откройте меню по QR — без скачивания',
        'Заказывайте сами, без ожидания официанта',
        'Оплачивайте картой или наличными',
        'Следите за статусом заказа в реальном времени',
      ],
    },
  },
  {
    id: 'owner',
    icon: 'Crown',
    title: { uz: 'Ega', ru: 'Владелец' },
    benefits: {
      uz: [
        "Kunlik tushumni real vaqtda ko'ring",
        "Menyuni telefondan boshqaring — narxlar, rasmlar, tavsiflar",
        "Analitika: mashhur taomlar, cho'ntaklar, kunlik tushum",
        "Xodimlarni ilovadan yollang va bo'shating",
      ],
      ru: [
        'Видите выручку дня в реальном времени',
        'Управляйте меню с телефона — цены, фото, описания',
        'Анализ: популярные блюда, часы пик, выручка по дням',
        'Нанимайте и увольняйте сотрудников из приложения',
      ],
    },
  },
  {
    id: 'chef',
    icon: 'ChefHat',
    title: { uz: 'Oshpaz', ru: 'Повар' },
    benefits: {
      uz: [
        "Buyurtmalarni Telegram'dan darhol oling",
        "Qabul qilish / Tayyor tugmasini bir bosish bilan bosing",
        "Navbat va ustuvorliklarni ko'ring",
        "Qog'oz bloklar yo'q",
      ],
      ru: [
        'Получайте заказы мгновенно в Telegram',
        'Нажимайте «Принять» / «Готово» одной кнопкой',
        'Видите очередь и приоритеты',
        'Никаких бумажных бланков',
      ],
    },
  },
  {
    id: 'waiter',
    icon: 'ConciergeBell',
    title: { uz: 'Ofitsant', ru: 'Официант' },
    benefits: {
      uz: [
        "Taomlarni tashlang, buyurtma olmang",
        "Naqd pulni tasdiqlash bilan qabul qiling",
        "Tayyor buyurtmalarni stollar bo'yicha ko'ring",
        "Telegram'i yo'q mehmonlarga yordam bering",
      ],
      ru: [
        'Носите блюда, а не принимайте заказы',
        'Принимайте наличные с подтверждением',
        'Видите готовые заказы по столам',
        'Помогайте гостям без Telegram',
      ],
    },
  },
];

export const PROBLEMS = [
  {
    icon: 'ReceiptText',
    title: { uz: "Buyurtmalar qog'ozda", ru: 'Заказы на бумаге' },
    description: {
      uz: "Yo'qoladi, oshpaz navbatni adashadi",
      ru: 'Теряются, повар путает очередность',
    },
  },
  {
    icon: 'Tag',
    title: { uz: "Menyu narxlari eskirgan", ru: 'Цены устарели в меню' },
    description: {
      uz: "Menyu bir yil oldin bosilgan, yangi narxlar kiritilmagan",
      ru: 'Меню напечатано год назад, новые цены не внесены',
    },
  },
  {
    icon: 'BarChart3',
    title: { uz: "Ma'lumot yo'q", ru: 'Нет данных' },
    description: {
      uz: "Kunlik tushumni, nimasi yaxshi sotilishini bilmaysiz",
      ru: 'Не знаете выручку дня, что продаётся лучше',
    },
  },
  {
    icon: 'DollarSign',
    title: { uz: "POS qimmat", ru: 'POS дорого' },
    description: {
      uz: "iiko, Clopos — $60-120/oy, murakkab sozlash",
      ru: 'iiko, Clopos — $60-120/мес, сложная настройка',
    },
  },
  {
    icon: 'Percent',
    title: { uz: "Aggregator komissiyasi", ru: 'Комиссии агрегаторов' },
    description: {
      uz: "Uzum Tezkor buyurtmadan 20-30% oladi",
      ru: 'Uzum Tezkor забирает 20-30% с заказа',
    },
  },
];
