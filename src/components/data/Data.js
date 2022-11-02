const uz = {
  category: [
    { name: "Home", slug: "" },
    { name: "Quiz", slug: "quiz" },
    { name: "Paraphrase", slug: "paraphrase" },
    { name: "Abaut", slug: "abaut" },
  ],

  title: "SAYT YARATIB BERISH XIZMATI",
  about:
    "Hozirgi kunda mijozlarni saytdan foydalanishini osonlashtirish uchun sayt noyob va chiroyli dizaynga ega bo‘lishi hamda foydalanuvchiga qulay bo‘lishi juda muhim hisoblanmoqda",
  options: [
    "Turli xildagi saytlarni yaratib berish",
    "Saytingiz uchun maxsus dizayn",
    "Foydalanuvchilar uchun saytning qulay bo‘ishi",
    "Saytni planshet va mobil versiyalarini ishlab chiqish",
    "Saytingiz uchun domen va hosting xizmatlari",
  ],
  card: {
    title1: "Eski dizayndagi saytlarni yangilash",
    about1:
      "saytingizni zamonaviy dizayn hamda foydalanuvchiga qulay usulda yangilang",
    title2: "Yangi sayt yaratish",
    about2: "istagingiz va didingizga mos keladigan saytga buyurtma bering",
  },
  about2:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
  button: "SAYTGA BUYURTMA BERISH",
questionsQuiz:[
  {
    id: 0,
    question: "Qanday materiallar o‘zidan tokni yaxshi o’tkazmaydi ?",
    key: ["dielektrik", "rele"],
    ans: "",
    check: false,
  },
  {
    id: 1,
    question: "Juda yaxshi mexanik mustahkamlikka ega noorganik izolyatsion material ?",
    key: ["keramika"],
    ans: "",
    check: false,
  },
  {
    id: 3,
    question: "Tolalar tuzilishga ega bo‘lgan mineral guruhlarining nomi?",
    key: ["asbest"],
    ans: "",
    check: false,
  },
  {
    id: 4,
    question: "Qanday moy elektrotexnikada keng qo‘llaniladigani ?",
    key: ["transformator"],
    ans: "",
    check: false,
  },
  {
    id: 5,
    question: "Elektrotexnikada qo‘llaniladigan qo‘lqoplar qanday dielektrik materiallardan foydalaniladi ?",
    key: ["rezina"],
    ans: "",
    check: false,
  },
],
questionsParaphrasa:[
  {
    id: 0,
    question: "dielektrik isrof deb",
    key: "elektr maydoni ta'sirida dielektrikda tarqaladigan va dielektrikning qizib ketishiga olib keladigan quvvatga aytiladi",
    ans: "",
    check: false,
  },
  {
    id: 1,
    question: "dipolli-relaksasion isrof deb",
    key: "o‘zgaruvchan kuchlanishdagi qutblangan qovushqoq suyuq dielektriklarning dielektrik isrofi ularning elektr o‘tkazishida katta ulishini tavsiflaydi ",
    ans: "",
    check: false,
  },
  {
    id: 3,
    question: "dielektrik isrof burchagi deb",
    key: "sig‘imli zanjirdagi tok bilan kuchlanish orasidagi fazalar siljish 900 burchagigacha bo‘lgan to‘ldiruvchi burchakka aytiladi",
    ans: "",
    check: false,
  },
  {
    id: 4,
    question: "solishtirma isrof deb",
    key: "elektr izolyatsiya materiallarida dielektrik isrof kattaligi sifatida tarqalayotgan issiqlikning materialni hajm birligiga nisbati",
    ans: "",
    check: false,
  },
  {
    id: 5,
    question: "chiziqli dielektrik deb",
    key: "isrof kuzatilmagan qutblanishda zaryad kuchlanishga chiziqli bog‘liq bo‘lgan dielektrik",
    ans: "",
    check: false,
  },
],
  footer: {
    title0: "Company",
    about:
      "Markaz viloyat hokimligida IT texnalogiyalarini rivojlantirish maqsadida 2008 yildan buyon faoliyat yuritib kelmoqda. Asosiy vazifalari davlat organlari, korxona va tashlikotlarda sohani rivojlantirish yangi bosqichlarga olib chiqish.",
    title1: "Manzil",
    map: "Farg‘ona shahar Alisher Navoi ko‘chasi 15-uy. Mo‘ljal: Aziya mehmonxonasi",
    contact1: "+99890 166 55 66",
    contact2: "+99890 166 55 66",
    title2: "Menyu",
    update: "Soʼngi martta saytdagi maʼlumotlar yangilangan kun: ",
    createdBy: "Sayt ishlab chiqildi:",
    logo: "./assets/logo/LogoWhiteText.png",
  },
};

// var language = localStorage.getItem("language");
// window.addEventListener("language", () => {
//   window.location.reload(false);
// });

export default  uz;
