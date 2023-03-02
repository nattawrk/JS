/* 
Типы данных
1. Примитивные
- Number: 2019, 1.5, NaN, Infinity
- String: "Hello", 'Hello', Hello
- Boolean: true, false
- Null: null
- Underfined; undefined переменная не задана
- Symbol () - уникальный идентификатор
*/
// console.log(2019, 1.5, NaN, Infinity)
// console.log("Hello", 'Hello')
// console.log(true, false)
// console.log(null)
// console.log(undefined)
// console.log(Symbol ())

/**
 * Типы данных
2.Объекты  - (Reference type) передаются по ссылке
- Object: {name: "Nata", age: 47} 
           name - это ключ, age - значение  
           объявляется console.log ({}) или если таблица
           console.table ({}).
           значение может быть любым 
  Array: [1, 2, 3]
  Function: function foo (){}
  Date: new Date ()
  ....
 */

//   console.log({name: "Nata", age: 47})
//   console.table({name: "Nata", age: 47})
//   console.log([1, 2, 3])

/**
 * Особенности :
 * 1.динамически типизированный язык
 * 2.Одна и та же переменная может хранить в себе любой тип данных
 * 3.Нам не нужно определять тип данных при создании переменных
 * 4.Если мы хотим использовать статистическую типизацию, то можем испольтзовать TypeScript или Flow
 */

/**
 * Переменные 
 * var, let, const объявление переменных 
 * var название переменной = "Денис";
 * var name = "Денис" равно здесь выступает как знак  присвоения
 * 
 * Если в переменной нет значения, то получим undefined
 * например: var age
 *           console.log(age)
 * Далее значение переменной можно переопределять, то есть задать его позже объявления переменной 
 * При переопределении переменной клчевое слово уже не ставится: var age
 *         console.log(age)
 *         age = 30; - переопределение 
 *         console.log(age)
 * Правила объявления переменных из двух слов:
 * var userAge ( кэмелкейс - второе слово с большой буквы)
 * var user_age ( андескор - второе слово через нижнее   подчекривание 
 * var UserNanme - не рекомендуется, та как с бльшрй буквы принято обозначать классы)
 * var userage (не рпкомендуется, так как не читается)
 * Принято использовать первый или второй тип. Но он должен быть один
 * 
 * =================== Преобразование типов ============
 * 
 * let value;
 * value = 10;
 * 
 * ==== явное преобразование 
 * number to string
 * value = String(10); преобразует номер в строку
 * value = String(10+40);
 * value = (40).toString(); - перевод знач-я с исп.метода
 * 
 * boolean to string
 * value = String(false) получим стринг фолсе
 * object to string
 * value =String ({name: "denis"}); получим стринг objectОbject (особенность преобразования)
 * Array to string
 * value =([1,2,3])
 * 
 * ==== неявное преобразование 
 * при попытке конкатенации (сложении значения со строкой)
 * value = 30 + '' получим 30 строка
 * value = 30 + ''+30 получим строку 3030
 * value = 30 + ''+undefined получим строку 30undefined
 * value = 30 - 'авс' получим NaN
 * ! value = 30 - '5'  получим 25, так как преобразует в число
 * При любых математических операциях кроме сложения, преобразование в номер
 * true преобразуется к 1
 * false преобразуется к 0
 * 0 преобразуется к 0
 * undefined преобразовываеся в NaN
 * 
 *               String to number
 * 
 * value = Number('23'); 
 * value = Number(false / true); 0 / 1
 * value = Number(null); 0
 * value = Number('false'); `NaN
 * value = Number([1,2,3]); NaN
 * 
 * специальные функции, которые переводят в число
 * value = parseInt('200') получим число 200
 * value = parseInt('200авыьл')получим число 200
 * value = parseInt('выво200') получим NaN
 * value = parseInt(' 200') получим число 200 
 * 
 * value = parseFloat('200.212') получим число 200,212
 * 
 *               to Boolean
 * 
 * value = Boolean('hello'); любая строка не пустая получим тру
 * value = Boolean(''); любая строка  пустая получим фолс
 * value = Boolean(100); любая число кроме ноля получим тру, ноль фолс, андерфайнд - фолс
 * value = Boolean({}); пустой объект получим тру
 * value = Boolean([]); пустой массив тру
 * 
 * console.log(value);
 * console.log(typeof value);
 * 
 * 
 * =========== Числа====Numbers=========
 * 
 * const num1 = 10;
 * const nym2 = 20;
 * let value;
 *     + * / -
 * value = num1 + num2
 * value =value + 100  value +=100;
 * 
 * value = 4 % 2; оператор остатка от деления (двойка два раза влазит в четверку)
 * value++ увеличит значение на 1 (изменения произойдут на сл строке на этой число еще прежне)
 * value-- уменьшит значение на 1 (изменения произойдут на сл строке на этой число еще прежне)
 * ++value - увеличит значение на 1 и изменит его в этой же строке
 * --value - уменьшит значение на 1 и изменит его в этой же строке
 * 
 * неточные вычисления
 * value = 0.6 + 0.7  получаем 1.999999
 * чтобы решить данную проблему есть два способа
 * округлением value = value.toFixed(1) но это получается строка ее нужно обернуть value = parseFloat(value.toFixed(1)); либо поставить + для приведения в число value = +value.toFixed(1)
 * 
 * второй способ:
 * value = (0.6 *10 + 0.7 *10 ) / 10;
 * 
 * Объект Math
 * value = Math
 * console.log(value); Данная запись выводит в консоль весь перечень  методов для разных вычислений. Рассмотрим некоторые из них 
 * свойства вызываются через точку без скобок. Свойства это поле в объекте  
 * value = Math.PI; 
 * методы это функции, записанные в свойства объекта 
 * например метод рандом возвращает число каждый раз от нуля до единицы
 * value = Math.random(); возвращает число
 * value = Math.round(2.4); 2
 * value =Math.ceil(2.1); 3
 * value = Math.floor(2.4); 2
 * value = Math.min(1, 12, 0); 0
 * 
 * value = Math.floor(random()*10 +1) вернет число от 0 до 10
 * чтобы вытащить из массива так:
 * const arr = ['black', 'red', 'yellow', 'pink', 'blue', 'orange', green']
 * value = Math.floor(Math.random()*arr.legnth);
 * console.log(value, arr[value]);
 *  Из массива данные вытаскиваются в т.ч с последним элементом, поэтому +1 ставить не нужно, как в предыдущем случае, а floor округлит до меньшего значения 
 * 
 *============ String ===========*

 * const firstName = "Denis";
 * const lastName = "Ivanov";
 * const age = 30;
 * const str = "Hello, my name is Denis";
 * 
 * let value;
 * value = firstName + lastName; DenisIvanov
 * value = firstName + ' ' + lastName; Denis Ivanov
 * value = value + 'I am ' + age; Denis Ivanov I am 30 
 * value += 'I am ' + age; Denis Ivanov I am 30 
 * value = firstName.length;
 * value = firstName.[2]; n 
 * У строки есть свойства и методы. Т е у строки есть длина
 * строка остается примитивом, и жс создает обертки, чтобы создать обьект
 * value = firstName.[4]; s
 * value = firstName.[firstName.length -1]; получу последний элемент длины строки 
 * 
 * ============= методы =============
 * 
 * применяя методы в строке они не меняют переменную
 * value = firstName.toUpperCase(); приведет все к верхнему регистру 
 * value = firstName.toLowCase(); приведет все к нижнему регистру 
 * 
 * value = firstName.concat(' ', lastname); Denis Ivanov 
 * value = firstName.indexOf('n');  2 - вернет индекс буквы в строке первого вхождения
 * value = firstName.indexOf('n', 10); начнет искать с 10 индекса
 * value = firstName.indexOf('my');
 *  value = firstName.indcludes('my'); оба метода чувствительны к регистру.
 * Нужно приводить всю строку к верзнему и нижнему регистру
 * value = strslice(0, 5); вырежет все с 5 по 10 индекса
 * без второго значения просто с 5 значения 
 * 
 * value = str.replace('Denis', 'Den'); заменит имя в строке с Дениса на Ден
 * console.log(value);
 * 
 * 
 * =========  Шаблонные строки ==========
 * 
 * const firstName = "Denis";
 * const lastName = "Ivanov";
 * const age = 30;
 * 
 *let str;
str = 'Hello! My name is' + firstName + ' ' + Ivanov'

str = '<ul>' +
      '<li>First name: ' + firstName + '</li>' +
      '<li>Last name: ' + lastName + '</li>' +
      '<li>Age ' + age + '</li>' +
      '</ul>; 
document.body.innerHTML = str;*/

// const firstName = "Denis";
// const lastName = "Ivanov";
// const age = 30;

// let str;

// str = 'Hello! My name is' + firstName + ' ' + lastName;

// str = '<ul>' +
//       '<li>First name: ' + firstName + '</li>' +
//       '<li>Last name: ' + lastName + '</li>' +
//       '<li>Age ' + age + '</li>' +
//       '</ul>';

// document.body.innerHTML = str;

/* ======================= OBJECT
// const user = {
//     firstName: 'Denis',
//     age: 30,
//     isAdmin: true,
//     email: 'test@test.com',
//     'user-address':{
//         city: 'Kharkiv'},
//         skills: ['html', 'css', 'js']
//     };
// let value;
// value = user.firstName;
// value = user['isAdmin'];
// value = user['user-address'];
// value = user['user-address'].city;
// value = user['user-address']['city']; 
// оба варианта рабочие, но во втором варианте сити указать в кавычках, иначе он воспринимает его как переменную. Можно также создать переменную в 
// let value;
// let prop = 'skills'; или age ....
// value = user.firstName;
// value = user['isAdmin'];
// value = user['user-addres'];
// value = user['user-addres'].city;
// value = user['user-addres'].['city'];
// value = user[prop]; и при изменении переменной проп программа будет выдавать занчение в зависимости от того, что мы поставим скилз или эйдж или что-либо еще. И если это скилз то можно получить например нулевой иэлемент value = user[prop][0]

// user.firstName = 'Den';
// value = user.firstName;
// user['user-address'].city = 'Kiev';
// user['user-address'].country = 'Ukrain';

// user.info = 'Some info';
// value = user.info;

// console.log(value);
// console.log(user);
// Для того, чтобы перезаписать свойства в объекте мы обращаемся к каждому объекту через точку или квадратные скобки обращаемся к какому-то полю например user.firstName = 'Den' value = user.firstName;
// Если мы обратимся к значению, которго нет в объекте, то программа создаст это значение и добавит в него информацию, находящуюся после знака равно например user.info = 'Some info' value = user.info; 
// ДЛя того, чтобы перезаписать значение вложенного объекта (в нашем случаем это город), то мы должны обратиться к объекту, поставив обращение  в квадратные скобки user['user-address'].city = 'Kiev'.Также можно обратиться к этому же объекту и добавить значение user['user-address'].country = 'Ukrain'; программа создаст новое значение во вложенном объекте. Но еслимы хотим добавить свойство к несуществующему объекту, то программ напишет ошибку андефайнд например: user.plan.basic = 'basic' выдаст ошибку, так как такого свойства не было, но если бы мы создали пустое значение  user.plsn = (); то программ бы добавила в него инфо

/*==================== Условные операторы

// >, < , >=, <=, == (нестрогое равно), === (строгое равенство), != (нестрогое неравенство), !== (строгое неравенство)

// let value1 = 1 < 2;
// let value2 = 1 >= 2;
// let value3 = 1 === '1';
// let value4 = 1 == '1';
// let value5 = 1 != '1';
// console.log("value1= ", value1);
// console.log("value2= ", value2);
// console.log("value3= ", value3);
// console.log("value4= ", value4);
// console.log("value5= ", value5);

// if (условие) {
//     пишется код (любое валидное выражение и резултат это выражения будет приводится к булевому вырадению), который отработается, если условие выполнится
// } else { 
//     здесь пишется условие, которое выполнится, если условие не отработается
// }

// value = 10
// if (value === 10) {
//     console.log('value: 10');
// } else {
//     console.log('else');
// }
// value = 10
// if (value) {
//     console.log('some');
// }else {
//     console.log ('else')
// }
/* ========= Логические операторы 
// || (или) ! (не) && (и) 
// value = null; console.log(!value) вернет тру, так как ноль в булевом операторе это фолс, а мы указали не равно 0, значит тру (если поставить два !! то это вернет в исходное состояние.Так часто делают, что небулевое значение привести к булевому)
// Если нужно проверить есть ли что-то в массиве (пустой массив в булевом значении это тру) то можно сделать это так 
// value = []; 
// if (value,length) {
//     console.log(value);
// }else {
//     console.log('array is empty');
// }
// Чтобы проверить есть ли у объекта ключ мы обращаемся к объекту и через . указываем ключ
// let user = { 
//     name: "Den"
// }
// if (user.name) {
//     console.log(user.name);
// }else {
//     console.log('else')
// };
// Второй способ вызвать метод
// if (user.hasOwnPoperty('name')) {
//     console.log(user.name);
// }else {
//     console.log('else')
// }; Но данный метод не проверяет значение , если там ноль, то он не проверит
// 
// Оператор И && запинается на лжи, а оператор или || запинается на правде
// Оператор и && каждое значение пытается преобразовать к фолсу, а или к тру
// value = 1 || 0  (1- true, 0 false, значит вернет 1 (первая тру, он на ней запнется))
// value = 0 || 0|| 5 (вернет 5, потому что это первая тру и тд)
// Очень удобно использовать для поиска значения: let serverNickname = ''; let nickname = serverNickname || 'default nickname'; console.log(nickname); Здесь если переменная serverNickname содержит какое-либо значение  - программа вернет тру (напечатает serverNickname), если переменная не содержит значения , то программа проверит следующее значение после || и вернет default nickname.

// Оператор И &&
// value = 1 && 0 && 3; console.log(value) (вернет значение 0, так как это первый фолс, если все значения тру, то он вернет последнее тру)

// If else
// value = 10;
// if (value < 10) { 
//     console.log('value <10', value);
// } else if (value >= 10) {
//     console.log('value >=10', value);
// } else {
//     console.log('else');
// // }

// // Тернальный оператор
// let a = -1;
// let b = 5;

// if (a > 0) {
//     b = a;
// } else {
//     b += 1;
// }
// console.log(b);  /*получим 6 - условие фолс и выполнилось елсе - к б +1
// let a = 1;
// let b = 0;

// if (a > 0) {
    // b = a;
// } else {
    // b += 1;
// }
// console.log(b); /* получим 1 - условие тру и выполнилось условие б=а
// тернарный оператор сокразщает код
// сначала пишется выражение, потом знак ? (оператор), потом действие,  если тру и через : действие , которе будет выполняться если фолс (типа елсе)*/

// let a=1
// let b=0
// a > 0 ? b = a : b+=1; (если болше 0? то б=а : иначе б+1)
// console.log(b); Это тоже длинная запись 1 вариант. Тернарный оператор возращает результат того, что ыло выбрано, поэтому записб короче выгядит так: b = a > 0 ? a : b + 1; console.log('b: ${b}');

// let a = 1;
// let b = 0;

// b = a > 0 ? 2 : a < 0 ? 3 : 0;
// console.log('b: ${b}');  у меня не выполнился код

// =======    Свитч кейс
// let color = 'red';

// switch(color) {
//     case 'yellow':
//         console.log('Color is yellow');
//         break;
//     case 'red':
//         console.log('Color is red');
//         break;
//     default:
//         console.log('Default')
// }
// Если не написать в коде дефолт, то код выполнится весь. В свитч кейсе нам должны быть изветсные четкие значения. еще более короткая запись:
//  switch(color) {
//     case 'yellow':
//     case 'red':
//         console.log('Color is red || yellow');
//         break;
//     default:
//         console.log('Default')
//  }

/* ============    Циклы  =======

// while, do while, for, for of, for in. Практически все циклы, кроме последних двух состоят из нескольких частей. Обычно это какой-то итератор (счетчик), который определяет сколько еще 
// прошло итераций - шаг, который нужно считать; дальше условие , которое пока будет действительно цикл будет работать, и условие, которе устанавливает действие , увеличивающее шаг, сохраняющее условие правдивым или неправдимым. 

// let i = 0; 
// while (i < 10) {
//     console.log(i);
// }   Пока и (итератор) будет больше ноля, пиши и. Такой цикл вечный, так как и меньше 0)
// Если поставить 
// let i = 0; 
// while (i < 10) {
//     console.log(i);
//     i ++
// }  
// Тоже самое будет 
// let i = 0; 
// while (i++ < 10) {
//     console.log(i);
// }  
// Do {
//     console.log (i);
// } while(i>0); *Данный цикл сначала вполнит действие потом проверит условие. 
// for (let i=0; i<10; i++) {
//     console,log(i)
// } (инициализация и=0, далее идет условие, что и меньше 10, дальше шаг) Сначала идет единоразово инициализация, затем проверка условия, после этого выполняется тело цикла,  затем проверка шага,и заново проверка условия, если тру, то тело цикла, проверка шага и ...Объявление переменной можно вынести выше.

// Для перебора символов строки Hello
// let str = 'Hello';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// } Если написать console.log(i) , то переберет не буквы, а индексы строки. 
// Если написать console.log(str[i] + "!") , то добавит ! знак .

// Для добавления в цикл переменной 
// let str = 'Hello';
// let res = '';
// for (let i = 0; i < str.length; i++) {
//     res+= str[i]+ '*';
// console.log(res);

// Цикл с массивом

// let colors = ['white', 'black', 'yellow', 'orange'];
// for (let i =0; i < colors.length; i++) {
//     console.log(colors[i]);
    
// }

// let colors = ['white', 'black', 'yellow', 'orange'];

// for (let i =0; i < colors.length; i++) {
//     console.log(colors[i]);
//     colors[i] = colors[i].toUpperCase();
// }

// console.log(colors);

// for (let i = 0; i < i<10; i++) {
//     if (i===5) {
//         break;
//     }
//     // if (i===6) {
//     //     continue
//     // }
//     console.log(i); оператор континью
// }
// Перебор значений циклом в массиве
// const users = [
//     {
//         name: 'Denis',
//         age: 30
//     } ,
//     {
//         name: 'Oleg',
//         age: 12
//     } ,
//     { 
//         name: 'Makc',
//         age: 30
//     } ,
//     {
//         name: 'Olga',
//         age: 2
//     } ,
    
// ];
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i])
// }
// При создании из этого массива объекта, где ключами будут имена, а значениями данные самого пользователя:
// const users = [
//         {
//             name: 'Denis',
//             age: 30
//         } ,
//         {
//             name: 'Oleg',
//             age: 12
//         } ,
//         { 
//             name: 'Makc',
//             age: 30
//         } ,
//         {
//             name: 'Olga',
//             age: 2
//         } ,
        
//     ];
//     const userObj = {};
//     for (let i = 0; i < users.length; i++) {
//         usersObj[users[i].name = users[i]]; 
//     }
//     console.log(userObj['Denis']);

//    =======  Циклы for in ======  не содержат итератора и будут перебирать весь список
// const user = {
//     name: 'Denis',
//     age: 30
// };
//   for (let key in user[key]) {
//     console.log(key);
//     console.log(user[key]);
// }  В  for (let key in user[key]) кеу пишется не через точку, а в квадратных скобках, так как это не значение, а переменная. console.В log(user[key]) перменная кеу это не обязательно должно называться именно так, может бытьлюбое произвольное имя

// =======  Цикл for of  ==========.   служит для более удобного перебора массива, не содержит итератора и пройдется по всему массиву. Имеет ключевое слово break  для прерывания цикла 

// for (let value of users) {
//     console.log(value);
// }

// Functions 
// function sayHello () {
//     console.log('Hello world!'
// }
// sayHello()
// function sayHello(- имя ф)()(-место для передачи значения ) {
//     console.log('Hello world!')(-тело функции, логика ее работы)
// }
// sayHello(); (-вызов функции и место куда мы подставляем значения.) Данный метод наз фанкшин декларэйшен и имеет специку всплывающего кода. Не важно куда мы поставим входные папаметры (аргументы) данный способ вызова функции , он отработает, даже если мы разместим его до объявления функции.
// При объявлении функции мы в ()называем параметры, которые функция будет возвращать, например 
// function sayHello(name, lastName). При вызове функции мы аргументы для данных параметровтакже укажем в скобках () 
// function sayHello(name, lastName) {
//     console.log(name, lastName);
//     console.log('Hello world!')
// }
// sayHello("Denis", "Ivanov"); 
// При этом, когда мы объявили аргументы, то мы получили фактически объявленные переменные. Мы можем изменять их.Functions Функция всегда  возвращает результат. Если мы пропишем 
// function sayHello(name, lastName) {
//     console.log(name, lastName);
//     console.log('Hello world!')
// }
// let res = sayHello("Denis", "Ivanov"); , то функция напишет нам андерфайнед, так как мы не написали , что она должна вернуть. Ключевое слово return
// function sayHello(name, lastName) {
//     console.log(name, lastName);
//     console.log('Hello world!')
//     return 'Hello ${name} $(lastName)'; как пример в рез= Хелло Денис Иванов
// }
// let res = sayHello("Denis", "Ivanov");  С результатом можно отдельно работать. например добавим let res2 = sayhello("Dima", "Ivanov") + "!"
// console.log(res2); 
//  После ретерна функция перкращает свое действие, и если размеcтить консоль-лог ниже слова ретерн, то функция нам ничего не выдаст

//  Ретернов может быть несколько. Можно проверить выполняется ли условие 
//  function sayHello(name, lastName) {
//     if (!name) return console.error("Error");   
//     console.log(name, lastName);
//     console.log('Hello world!');
//     return 'Hello ${name} $(lastName)
//  }
//  let res = sayHello("Denis", "Ivanov");
//  let res2 = sayhello("Dima", "Ivanov") + "!"
//  let res3 = sayHello();
//  console.log(res3) 
// //  В третьей переменной мы не передали параметры, поэтому функция не выполнилась, так как ретерн уже выполнился по первому условияю if (!name) return console.error("Error");
// function sayHello(name = "default", lastName = "defalt")  Если при объявлении функции мы пропишем такой аргумент, то он выполнится в случае, если мы забудем передать функции аргумент при ее вызове. "Аргумент по умолчанию"
// Второй метод обхявления функции - объявить ее в самой переменной. Данный метод наз экспрешн. И он не позваоляет вызвать функцию, объявленную вне ее границ.
// const square = function(x) {
//     return x * x;
// };

// Самовызывающаяся функция  (function () {})();
// (function(msg) {
//     console.log(msg;)
// })("Hello world");
*/
/** =========   ARROW  ===================
let p1 = [
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let value;
value = p1.length; р1 -название массива.length Определит длину массива
console.log(value);
value = Array.isArray(p1); - определит что массив есть (напечатает тру)
console.log(value);
value = p1.indexOf(14); найдет число 14 в массиве 

==== push и pop =====
Для добавления и удаления элементов в массиву два метода 
value = p1.push(100);  Данный метод добавит в массив число 100 в конец массива
console.log(value.p1)

value = p1.pop(); Данный метод ничего не передает, удаляет последний эл из  массива. То есть в вэлью мы получим сам элемент, а длина массива станет короче на один символ. 

====== unshift и shift ======
value = p1.unshift(111);  Данный метод добавит число 111  в начало массива
value = p1.shift(); Удалит первый элемент из массива

====== slice ===== 
value = p1.slice(0, 5); Данный метод вырежет значения из массива. от 0 до 5
Данный метод не изменяет первоначальный массив и возвращает нам ту часть массива, котрую вырезал. Соответ-но с ней можно что-либо сделать. Если в слайс ничего не передать, то он вернет копию массива

====== splice ===== 
value = p1.splice(1, 2) - удалит из массива данные элементы (по индексу)
value = p1.splice(1, 2, "у", "х") удалит из массива данные элементы, у х добавит
Если ничего не нужно удалять, а только добавить, то вместо индекса на удаление нужно написать 0, тогла давится занчения со второго индекса

=====  reverse =====
value = p1.reverse() метод переворачивает массив и возвращает перевернутый 

===== concat ======
 value = p1.concat()  Данный метот позволяет сложить два разных массива или в зависимости от того, что будет передано в скобках, может сделать копию массива, если туда прописать имя самого массива value = p1.concat(p1). Также вместо массива можем добавить в скобки значения и он их сконкантенирует в массив. 
 Можно на пустом массиве добавить занчения и тд
 value = [].concat(1, 2, 3);

 ===== join ======== Данный метод переведет массив в строку 
 value = p1.join(""); если разделителя нет, то вернет массив слитно 
 value = p1.join(" "); с разделителем вернет массив через   с пробелами
 value = p1.join(); вернет массив в виде строки через , без пробелов
 
======= split ======= Из строки переведет в массив
 value = "hello world".split(""); вернет массив на каждую букву в кавычках 
 value = "hello world".split(" "); вернет разбив на 2 элемента массива
 value = "hello world".split(); возвращает в виде одного элемента

 ==== Фунлции высшего порядка ++++++
 здесь функции рассматриваются в качестве объекта 
 Это подтверждается следующим */
function foo() {
	console.log("hello world");
}
foo();
foo.field = "Denis";
concole.log(foo.field);
