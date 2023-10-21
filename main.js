const fs = require('node:fs'); // Підключаємо модуль 'fs' для роботи з файлами

// Перетворюємо JSON в рядок
const data = fs.readFileSync("data.json", "utf-8")

// Записуємо JSON у файл
const jsonData = JSON.parse(data);
const filteredData = jsonData.filter(entry => entry.parent === "BS3_BanksLiab");
const outputText = filteredData.map(entry => `${entry.txten}:${entry.value}`).join('\n');
fs.writeFile("output.txt", outputText, 'UTF-8', (err) => {
  if (err) {
    console.log("File write failed", err);
    return;
  }
});
