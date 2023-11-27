// toán tử ++ và --: về bản chất thì 2 toán tử này đc dùng để tăng or giảm giá trị cho trước
// tuy nhiên, cách ử dụng của chúng lại khác nhau
// let number = 10;
//tiền tố
// bước 1: thực hiện việc + or - giá trị của biến number: =>number=9
//bước 2; trả về kq vừa thực hiện của biến number: =>number = 11
// let output =--number;
//console.log("output ",output); => number = 9
//Hậu tố
// bước 1: tạo ra 1 biến copy từ giá trị trước đó: numberCopy = 10
//bước 2 : thực hiện tính toán cho biến number :number = number + 1 =>number = 11
// bước 3 : trả về kq từ biến copy
// let output = number++;
// console.log("output ", output);
// bài toán: thực hiện phép tính sau:
// let output1 = number++ - --number;
// 10 - 10 = 0

// vòng lặp for
// cú pháp: for(giá trị khởi tạo; điều kiện chạy/dừng; tăng/giảm){}
// for(initialValuel; condition ;increase/decrease){}

// console.log ra dãy số bắt đầu từ 1-10
// for (let i = 1; i <= 1000; i += 1) {
//   console / console.log("lần lặp thứ: ", i);
// }
// nguyên lý hoạt động
// b1: khi vòng lặp for đc chạy, trong lần đầu tiên thì nó sẽ lấy giá trị khởi tạo (leti =1) để so sánh vs đk khối lệnh bên trong
//b2: nếu đk thỏa mãn (i <= 1000) thì sữ nhận giá trị là true
//bước 3: loyj vào trong khối lệnh xử lý logic
// b4: sau khi xử lý logic xong thì nó sẽ quay lại for để tăng giá trị (i++) lên 1 đơn vị và nó sẽ quay lại ktra đk (2 <= 1000)
// b5: nếu đk k thỏa mãn (false) thì vòng lặp sẽ kết thúc
// => vòng lặp for đc sd trong trg hợp chúng ta biết trc đc số lần lặp

// lặp qua các số từ 1 đến 1000, in ra các số chắn và các số lẻ
// for (let i = 1; i <= 1000; i++) {
//   if (i % 2 === 0) {
//     console.log("số chắn", i);
//   } else {
//     console.log("số lẻ", i);
//   }
// }

//giảm dãu số từ 10 về 1
// for(let i = 10, i >= 10; i--){
//   console.log(i);
// }

// vòng lặp while
// cú pháp:
// while (condition){
//   // increase/decrease;
//   // logic
// }
//*While k xác định trước số vòng lặp
// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
// lấy lựa chọn từ phía client
// nếu như chọn 1 thì in ra thông báo là nhập sản phẩm
// nếu như chọn 2 thì in ra thông báo là in ra sản phẩm
// nếu như chọn 3 thì in ra thông báo là xuất hóa đơn
// nếu như chọn giá trị khác thì in a thông báo là nhập sai lựa chọn

//b1 : dùng hàm promt để lấy lựa chọn
//b2 : thiết lập vòng lặp while vs số lần lặp hợp lý
//b3 : sử dụng switch case để bắt lựa chọn
// let luaChon = parseInt(
//   prompt(
//     "Chọn 1 để nhập sản phẩm, chọn 2 để in ra sản phẩm, chọn 3 để xuất hóa đơn"
//   )
// );

// while (isNaN(luaChon) || luaChon < 1 || luaChon > 3) {
//   alert("Lựa chọn không hợp lý. Vui lòng nhập lại.");
//   luaChon = parseInt(
//     prompt(
//       "Chọn 1 để nhập sản phẩm, chọn 2 để in ra sản phẩm, chọn 3 để xuất hóa đơn"
//     )
//   );
// }

// switch (luaChon) {
//   case 1:
//     alert("nhập sản phẩm.");
//     break;
//   case 2:
//     alert(" in ra sản phẩm.");
//     break;
//   case 3:
//     alert(" xuất hóa đơn.");

//     break;
//   default:
//     alert("Lựa chọn không hợp lý.");
// }

// let choose = 0;
// while (choose !== 3) {}
//vòng lặp do-while: nó sẽ chạy ít nhất 1 lần  vào trong do rồi sau đấy mới ktra đk

// let condition = 100;
// do {
//   condition--;
//   console.log(condition);
// } while (-500 < condition < 1000);

// let choose = 0;
// do {
//   choose = parseInt(prompt(" mời bạn nhập lựa chọn: "));
//   switch (choose) {
//     case 1:
//       console.log("nhập sản phẩm");
//       break;
//     case 2:
//       console.log("in ra sản phẩm");

//       break;
//     case 3:
//       console.log("xuất hóa đơn");

//       break;
//     case 4:
//       console.log("thoát chương trình!");
//       break;
//     case 4:
//       console.log("nhập sai lựa chọn");
//     default:
//       break;
//   }
// } while (choose !== 4);

// for (let index = 0; index < 10; index++) {
//   if(i > 5){
//     break;
//   }
//   console.log(index);

// }

// for (let index = 0; index < 10; index++) {
//   if (index % 3 === 0) {
//     continue;
//   }
//   console.log(index);
// }

// ++ --
// let numberA = 10;
//Tiền tố: ++numberA, --numberA
//b1: tiến hành + or- giá trị của biến đi 1 đơn vị
//b2: trả về giá trị mà phép tính trên vừa thực hiện
//hậu tố: numberA++, numberA--
//b1: sao chép giá trị của biến vào 1 biến copy: numberACopy = 10
//b2: tiến hành +/- giá trị của 1 biến đi 1 đơn vị
//b3: trả về giá trị của biến copy

// let ouput = ++numberA * 2 - --numberA + ++numberA * 3;

// let oput = numberA++;

// console.log(oput);
// console.log(numberA);
// for (let i = 1; i < 10; i++) {
//   console.log("bảng cửu chương: ", i);
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + " x " + j + "=" + i * j);
//   }
// }
// for (i = 1; i < 10; i++) {}
// let age = 21;
// let myName = NTNA;
// console.log("tôi tên:  ${myName}, tôi ${age} tuổi");
// let i = 1;
// while (i < 3010) {
//   document.write("<hr width=" + i + "%>");
//   i++;
// }
// let num = prompt("enter your number:");
// let total = 0;
// let i = 1;
// for (let total = 0; total <= 5; total++) {
//   console.log("The number is", total);
// }

// alert(total);
// let inputNumber = parseInt(prompt("Nhập vào một số lớn hơn 0:"));

// while (isNaN(inputNumber) || inputNumber <= 0) {
//   alert("Vui lòng nhập một số lớn hơn 0.");
//   inputNumber = parseInt(prompt("Nhập vào một số lớn hơn 0:"));
// }

// let sum = 0;
// for (let i = 1; i <= inputNumber; i++) {
//   sum += i;
// }

// console.log("Tổng các phần tử từ 1 đến", inputNumber, "là", sum);
// let inputNumber = parseInt(prompt("nhập vào số lớn hơn 0:"));
// while (isNaN(inputNumber) || inputNumber <= 0) {
//   alert("nhập vào số lớn hơn sự nghiệp của m.");
//   inputNumber = parseInt(prompt("nhập số lớn hơn 0"));
// }
// let sum = 0;
// for (let i = 1; i <= inputNumber; i++) {
//   sum += i;
// }
// console.log("tổng các số từ 1 đến", inputNumber, "là", sum);
// let value = null;
// do {
//   value = prompt("nhập vào số từ 1->10");
// } while (value < 1 || value > 10);
// alert("số bạn vừa nhập là" + value);for (let i = 2; i <= 9; i++) {
// console.log(`Bảng cửu chương ${i}:`);

// for (let j = 1; j <= 10; j++) {
//   let result = i * j;
//   console.log(`${i} x ${j} = ${result}`);
// }

// console.log("\n");
// let N = parseInt(prompt("nhập N: "));

// if (N < 2 || N > 100) {
//   console.log("nhập lại");
// } else {
//   for (let i = 2; i <= N; i++) {
//     let square = Math.pow(i, 2);
//     if (square % 2 === 0) {
//       console.log("square:", square);
//     }
//   }
// }
// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// let count = 0;

// let currentNumber = 2;

// while (count < 20) {
//   if (isPrime(currentNumber)) {
//     console.log(currentNumber);
//     count++;
//   }
//   currentNumber++;
// }
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

for (let i = 0; i < 10; i++) {
  console.log(
    "%c This is color number " + (i + 1),
    "color:" + getRandomColor()
  );
}
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
//*đoán số:
// const randomNumber = Math.floor(Math.random() * 10) + 1;

// // Biến đếm số lượt đoán
// let guesses = 0;

// // Hàm kiểm tra và xử lý đoán số
// function guessNumber() {
//   // Nhập số từ người chơi
//   const userGuess = parseInt(prompt("Nhập một số từ 1 đến 10:"));

//   // Kiểm tra xem số có hợp lệ không
//   if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
//     alert("Vui lòng nhập một số từ 1 đến 10.");
//     return;
//   }

//   // Tăng số lượt đoán
//   guesses++;

//   // Kiểm tra kết quả và hiển thị thông báo
//   if (userGuess === randomNumber) {
//     alert(
//       `Chúc mừng! Bạn đã đoán đúng số ${randomNumber} trong ${guesses} lượt.`
//     );
//   } else if (userGuess > randomNumber) {
//     alert("Số bạn đoán lớn hơn. Hãy thử lại!");
//     guessNumber();
//   } else {
//     alert("Số bạn đoán bé hơn. Hãy thử lại!");
//     guessNumber();
//   }

//   // Kiểm tra số lượt đoán
//   if (guesses === 3 && userGuess !== randomNumber) {
//     alert(`Bạn đã thua. Số đúng là ${randomNumber}.`);
//   }
// }

// // Gọi hàm để bắt đầu trò chơi
// guessNumber();
