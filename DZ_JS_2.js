// 1) Сделать функцию которая при вызове напишет в консоль сумму 2-х переданных в неё чисел

//====  1 way
function f1(p1, p2) {
	let a1 = p1;
	let a2 = p2;
	c = a1 + a2;
	console.log("f1= ", c);
}
f1(6, 11);

// ====   2 way
const plus =(p1, p2) => p1 + p2;
const plusRes = plus(6, 11);
console.log('plusRes = ', plusRes)

//  ====   3 way 
function foo1(p1, p2) {
return p1 + p2
}

resplus=foo1(6, 11);
console.log('resplus=', resplus);

// 2) Сделать функцию которая вернёт в консоль квадрат переданного числа
//  ===== 1 way
function f2(p1) {
	let a1 = p1;
	c = a1 * a1;
	console.log("f2 = ", c);
}
f2(6);

//  ==== 2 way
const foo2 = (x)=> x*x;
const foo2Res = foo2(6);
console.log('foo2 =', foo2Res);

//3) Сделать функцию. На вход принимет 3 параметра (Ф,И,О). Вернёт JSON
// {"name":И,
//  "surname":Ф,
//  "middlename":О}

// === 1 way ==== 
function user(name, middlename, surname) {
	a1 = name;
	a2 = middlename;
	a3 = surname;
	const u1 = [
		{
			name: a1,
		},
		{
			middlename: a2,
		},
		{
			surname: a3,
		},
	];
	console.log(u1);
}

user("Natalia", "V", "L");

//  ==== 2 way ====
const obj = {
	name: 'Nata',
	middlename: 'V',
	surname: 'L'
}
console.log(JSON.stringify(obj));


// 4) вывести в консоль переменную-массив в которой будут все чётные числа. Переменную возвращяет функция которая на вход принимает массив чисел. Если чётных чисел не нашлось, то функция вернёт текст "No even numbers"

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
let result1 = array.filter(function(i) {
	if (i % 2 === 0); { 
	return true;
	console.log(result1);
	} else { 
		return false;
		console.log("No even numbers");
	}
});



// 5) Сделать функцию которая вернёт количество букв 'a' в переданном в неё слове. Алфавит Eng. Если нету букв 'а', то вернтуть текст "No a characters".
// 6) Написать функцию которая выдаст список тестов для переданного в неё web-ui элемента. Элементы: Phone number field, CheckBox, SignIn Button.
// 7) Написать функцию которая на вход получает JSON а возвращяет XML

