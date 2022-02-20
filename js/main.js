// 繰り返し処理
// for文
// for文を使わない場合
// const list01 = ["山田", "佐藤", "山下", "櫻井", "相葉", "松本"];

// console.log(list01[0]);
// console.log(list01[1]);
// console.log(list01[2]);
// console.log(list01[3]);
// console.log(list01[4]);
// console.log(list01[5]);

// for文を使った場合
// const list02 = ["山田", "佐藤", "山下", "櫻井", "相葉", "松本"];

// for (i = 0; i < list02.length; i++){
//   console.log(list02[i]);
// }

// for (number = 15; number--;) {
//   console.log(number);
// }

// while文
// let number00 = 10;
// let i = 0;

// while (number00 >= 0) {
  
//   if (i >= 0) {
//     number00 = number00 - i;
//     console.log(number00);

//   }
// }

// let c = 0;

// while (c < 10) {
//   c = c + 1;
//   console.log(c);
// }

// do...while文
// let number = 0;

// do {
//   console.log(number);
//   number++;
// } while (number <= 10);

// 練習問題
// 1.
let test = ["国語", "数学", "英語"];
console.log(test);

test.push("理科", "社会");
console.log(test);

console.log(test.length);

// 2
for (i = 1; i <= 50; i++){
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 3
// let water = 1000;
// let n = 0;
// let d_Water = water - 180 * n;

// while (d_Water >= 0) {
//   if (water >= 0) {
//     console.log(d_Water);
//     n++;
//   }
//   break;
// }

// console.log("水を飲み干した");

// 回答を見て
let water = 1000;
const drinkWater = 180;

while (water > 0) {
  console.log(water);
  water = water - drinkWater;
}

console.log("水を飲み干した");