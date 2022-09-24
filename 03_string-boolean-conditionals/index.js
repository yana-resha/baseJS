// задача 1

console.log('Hello, world!')

let password = '123456789' ;

  if (password.length >=4 && (password.includes('_')||password.includes('-'))) {
    console.log('Пароль надёжный');
  } else {
    console.log('Пароль недостаточно надёжный');
  }



// задача 2

let myName = 'YAna';
let surname = 'REshetnikova';
let correctName = myName.substr(0,1).toUpperCase() + myName.substr(1,).toLowerCase();
let correctsurname = surname.substr(0,1).toUpperCase() + surname.substr(1,).toLowerCase();

// if (myName === correctName) {
//   console.log('Имя осталось без изменений');
// } else {
//   myName = correctName;
//   console.log(`${myName} - имя было преобразовано`);
// }

// if (surname === correctsurname) {
//   console.log('Фамилия осталась без изменений');
// } else {
//   surname = correctsurname;
//   console.log(`${surname} - Фамилия была преобразована`);
// }

// if ((myName === correctName) && (surname === correctsurname)) {
//   console.log('Имя осталось без изменений')
// } else {
//   myName = correctName;
//   surname = correctsurname;
//   console.log(`${surname} ${myName} Имя было преобразовано`)
// }

myName = (myName === correctName)?console.log('Имя осталось без изменений'):correctName,console.log(`${myName} - имя было преобразовано`);

surname = (surname === correctsurname)?console.log('Имя осталось без изменений'):correctsurname,console.log(`${surname} - имя было преобразовано`);





