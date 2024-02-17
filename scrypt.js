// Задание 1
let name = "Марк";
console.log(name);

// Задание 2
let h = 30;
let d = 50;
let s = 0.5 * h * d;
console.log(s);


// Задание 3
let num = Math.floor(Math.random() * (67 - 12 + 1) + 12);
console.log(num)


// Задание 4
let n1 = Math.floor(Math.random() * (256 - 0 + 1) + 0);
let n2 = Math.floor(Math.random() * (256 - 0 + 1) + 0);
let n3 = Math.floor(Math.random() * (256 - 0 + 1) + 0);
let n4 = Math.random() * 1;
console.log(`rgba(${n1}, ${n2}, ${n3}, ${n4.toFixed(2)})`);


// Задание 5
let time = Math.floor(Math.random() * (2592000000 - 86400000 + 1) + 86400000);
let day = time / 86400000;
let day_ost = time % 86400000;
let hour = day_ost / 3600000;
let hour_ost = day_ost % 360000;
let minute = hour_ost / 60000;
let minute_ost = hour_ost % 60000;
let sec = minute_ost / 1000;
let sec_ost = minute_ost % 1000;
console.log(`"${time} мс - ${Math.round(day)} д ${Math.round(hour)} ч ${Math.round(minute)
    } мин ${Math.round(sec)} сек ${Math.round(sec_ost)} мс"`);



