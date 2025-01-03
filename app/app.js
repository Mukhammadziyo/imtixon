//1. Berilgan stiring ichidan olib tashlanishi kerak bo’lgan stringni birinchi uchraganini olib tashlang- 5 ball.
function removeFirstOccurrences(str, value) {
  return str.replace(value, "");
}

console.log(removeFirstOccurrences("MUHAMMADZIYO", "ZIYO"));

// Birinchi va so’ngi burchali qavslarni olib tashlang - 5 ball.

function unbracketTag(str) {
  return str.slice(1, -1);
}

console.log(unbracketTag("<div>"));

// Funksiyaga berilgan son tub bo’lsa true, aks holda false qaytarsin - 10 ball.

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n % 1 === 0 && n % n === 0) {
    n = true;
  } else {
    n = false;
  }
  return n;
}
console.log(isPrime(11));

// ! Berilgan array ichidagi ma’lumotlardan yangi object yasab qaytaring. Functionga so’ralgan argumentlar kiritish orqali - 15 ball.

// n1 va n2 orasidagi butun sonlar yig‘indisini qaytaring - 10 ball.

function getSumBetweenNumbers(n1, n2) {
  let answer = 0;
  for (let i = n1; i <= n2; i++) {
    answer = answer + i;
  }
  return answer;
}

console.log(getSumBetweenNumbers(1, 20));

// ! n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasidan faqat 1 marta ishtirok etganlaridan iborat yangi massiv qaytaruvchi getElementsOneTime(arr) nomli funksiya tuzing - 10 ball.

// ! n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan bir xil qo'shnilarning birini o'chiruvchi programma tuzilsing - 15 ball.

// ! n ta elementdan tashkil topgan massiv va k, m butun sonlari berilgan (0< k < m < n). Indeksi k dan m gacha bo'lgan elementlarni o'chiruvchi programma tuzilsin. Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin - 10 ball.

// Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan - 10 ball.

function kitoblar(books) {
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const holati = book.alreadyRead ? "o'qilgan" : "o'qilmagan";
    console.log(
      `${i + 1}. ${book.author}ning "${book.title}" kitobi ${holati};`
    );
  }
}

const books = [
  { title: "Halqa", author: "Akrom Malik", alreadyRead: false },
  { title: "Dunyo ishlari", author: "O'tkir Hoshimov", alreadyRead: true },
  {
    title: "Vaqtning qadri",
    author: "Abdulfattoh Abu G'udda",
    alreadyRead: false,
  },
];

kitoblar(books);
