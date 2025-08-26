// 1. Random son chiqarish
let randomNum = Math.floor(Math.random() * 100) + 1; // 1 va 100 orasidagi tasodifiy son

// 2. Random sonni 2 ga ko'paytirish
let multipliedNum = randomNum * 2;

// 3. Random sonni 2 ga bo'lish va qoldiqni hisoblash
let remainder = randomNum % 2;

// 4. Natijalarni alertda chiqarish
alert(`Random son: ${randomNum}\n` +
      `2 ga ko'paytirilgan son: ${multipliedNum}\n` +
      `2 ga bo'lganda qoldiq: ${remainder}`);
