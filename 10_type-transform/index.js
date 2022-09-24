(() => {

// контейнер
const container = document.createElement('div');
const inputTitle = document.createElement('h2');
inputTitle.textContent = 'Введите данные студента';
// mainTitle.style.textAlign = 'center';
container.classList.add('container-fluid')
const inputPart = document.createElement('div');
inputPart.classList.add('input-part')
  // поля для ввода
  const form = document.createElement('form');
  form.classList.add('input-group');

  const labelName = document.createElement('label');
  labelName.for = 'inputName';
  labelName.classList.add('form-label');
  labelName.textContent = 'Имя студенда';
  const inputName = document.createElement('input');
  inputName.classList.add('form-control');
  inputName.placeholder = 'Введите имя';
  inputName.type = 'text';
  inputName.value = 'Яна';


  const labelSurname = document.createElement('label');
  labelName.for = 'inputSurname';
  labelName.classList.add('form-label');
  labelSurname.textContent = 'Фамилия студенда';
  const inputSurname = document.createElement('input');
  inputSurname.classList.add('form-control');
  inputSurname.placeholder = 'Введите фамилию';
  inputSurname.type = 'text';
  inputSurname.value = 'Решетникова'


  const labelMiddleName = document.createElement('label');
  labelMiddleName.for = 'middleName';
  labelMiddleName.classList.add('form-label');
  labelMiddleName.textContent = 'Фамилия студенда';
  const middleName = document.createElement('input');
  middleName.classList.add('form-control');
  middleName.placeholder = 'Введите отчество';
  middleName.type = 'text';
  middleName.value = 'Владимировна';
  const now = new Date();
  const labelBirthDate = document.createElement('label');
  labelBirthDate.for = 'inputBirthDate';
  labelBirthDate.classList.add('form-label');
  labelBirthDate.textContent = 'Дата рождения студента';
  const inputBirthDate = document.createElement('input');
  inputBirthDate.classList.add('form-control');
  inputBirthDate.placeholder = 'Введите дату рождения';
  inputBirthDate.type = 'date';
  inputBirthDate.value = '1995-01-01';
  inputBirthDate.min = '1900-01-01';
  inputBirthDate.max = `${now.getFullYear()}-01-${now.getDate()}`;

  const labelBeginStude = document.createElement('label');
  labelBeginStude.for = 'inputBeginStude';
  labelBeginStude.classList.add('form-label');
  labelBeginStude.textContent = 'Год начала обучения';
  const inputBeginStude = document.createElement('input');
  inputBeginStude.classList.add('form-control');
  inputBeginStude.placeholder = 'Введите год начала обучения';
  inputBeginStude.type = 'number';
  inputBeginStude.min = '2000';
  inputBeginStude.max = now.getFullYear();
  inputBeginStude.value = '2001';

  const labelFaculty = document.createElement('label');
  labelFaculty.for = 'inputFaculty';
  labelFaculty.classList.add('form-label');
  labelFaculty.textContent = 'Факультет';
  const inputFaculty = document.createElement('input');
  inputFaculty.classList.add('form-control');
  inputFaculty.placeholder = 'Введите название факультета';
  inputFaculty.type = 'text';

  const buttonForm = document.createElement('button');
  buttonForm.classList.add('btn', 'btn-dark');
  buttonForm.textContent = 'Отправить';
  buttonForm.type = 'submit';
  const inputRules = document.createElement('div');

  form.append(labelName, inputName,labelSurname, inputSurname,labelMiddleName, middleName,labelBirthDate, inputBirthDate, labelBeginStude, inputBeginStude, labelFaculty, inputFaculty, buttonForm, inputRules);

  inputPart.append(inputTitle, form)
  // const inputForm = createInput(todos);
  container.append(inputPart);

  const groupFilterBtn = document.createElement('div');
  groupFilterBtn.classList.add('input-group-filter');
  const inputIncludesFullname = document.createElement('input');
  inputIncludesFullname.placeholder = 'ФИО';
  const inputIncludesFaculty = document.createElement('input');
  inputIncludesFaculty.placeholder = 'факультет';
  const inputIncludesBirth = document.createElement('input');
  inputIncludesBirth.placeholder = 'дата рождения (полное совпадение)';
  inputIncludesBirth.type = 'date';
  inputIncludesBirth.value = '1995-01-01';
  inputIncludesBirth.min = '1900-01-01';
  inputIncludesBirth.max = `${now.getFullYear()}-01-${now.getDate()}`;
  const inputIncludesYear = document.createElement('input');
  inputIncludesYear.placeholder = 'год начала обучения';
  inputIncludesYear.type = 'number';
  inputIncludesYear.min = `2000`;
  inputIncludesYear.max = now.getFullYear();
  const titleInputSearch = document.createElement('h2');
  titleInputSearch.innerHTML = 'Поиск по таблице'
  groupFilterBtn.append(inputIncludesFullname, inputIncludesFaculty, inputIncludesBirth, inputIncludesYear);
  for (let i of groupFilterBtn.children) {
    i.classList.add('form-control');
  };
  container.append()

  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-ligth' );



  const tableTitle = document.createElement('thead');

  const lineTitle = document.createElement('tr');
  // lineTitle.classList.add('table-dark')

  const nameCol = document.createElement('th');
  nameCol.scope = 'col';
  nameCol.textContent = 'ФИО'
  const facultyCol = document.createElement('th');
  facultyCol.scope = 'col';
  facultyCol.textContent = 'Факультет';
  const birthCol = document.createElement('th');
  birthCol.scope = 'col';
  birthCol.textContent = 'Дата рождения';
  const studeYearCol = document.createElement('th');
  studeYearCol.scope = 'col';
  studeYearCol.textContent = 'Годы обучения';
  table.classList.add('table-bordered')
  const tableBody = document.createElement('tbody');


  const tablePart = document.createElement('div');
  tablePart.classList.add('table-part');
  tablePart.append(titleInputSearch, groupFilterBtn, table)
  tableTitle.append(lineTitle);
  lineTitle.append(nameCol, facultyCol, birthCol, studeYearCol);

  table.append(tableTitle, tableBody);
  let filterBtn;
  let btnClickArray = [];
  // создаю кнопки в таблице для фильтра
  for (let i of lineTitle.children) {
    // let child = lineTitle.children;
    filterBtn = document.createElement('button');
    filterBtn.classList.add('btn', 'btn-info');
    i.append(filterBtn);
    filterBtn.innerHTML = '<img src ="icons8.png" class = "btn-img"></img>'
    i.classList.add('cell-title');
    btnClickArray.push(filterBtn)
  };
  console.log(btnClickArray)
  btnClickArray[0].id = 'fullName';
  btnClickArray[1].id = 'faculty';
  btnClickArray[2].id = 'birth';
  btnClickArray[3].id = 'yearStude';
  container.append(tablePart)



  let todos = [
    {
      beginStude: "2010",
      birthDay: "1990-01-01",
      faculty: "Юридический",
      middlename: "Иванович",
      name: "Иван",
      surname: "Иванов",
    },
    {
      beginStude: "2022",
      birthDay: "1997-01-01",
      faculty: "Экономический",
      middlename: "Якупович",
      name: "Андрей",
      surname: "Самигуллин",
    },
    {
      beginStude: "2015",
      birthDay: "1990-04-02",
      faculty: "ИНЯЗ",
      middlename: "Игоревич",
      name: "Сергей",
      surname: "Лысиков",
    },
    {
      beginStude: "2015",
      birthDay: "1995-01-01",
      faculty: "ИНЯЗ",
      middlename: "Владимировна",
      name: "Яна",
      surname: "Решетникова",
    },
    {
      beginStude: "2015",
      birthDay: "1995-01-01",
      faculty: "ИНЯЗ",
      middlename: "Игоревич",
      name: "Сергей",
      surname: "Лысиков",
    },
  ];
  let sortArray = [];

  // для кнопок фильтрации по возрастанию
  function createFilterBtn (array) {
    document.getElementById('fullName').addEventListener('click', () => {
      sortArray = array.sort((a, b) => {
        let nameA = a.fullName.toLowerCase();
        let nameB = b.fullName.toLowerCase();
        //сортируем строки по возрастанию
        if (nameA < nameB) {
          return -1
        }
        else if (nameA > nameB) {
          return 1
        }
        return 0 // Никакой сортировки
        })
        // добавляю массив в таблицу
        console.log(`Фильтр ФИО массив sortArray`,sortArray);
        return sortArray
      });
    document.getElementById('faculty').addEventListener('click', () => {
      sortArray = array.sort((a, b) => {
        let nameA= a.facultyStude.toLowerCase();
        let nameB = b.facultyStude.toLowerCase();
        //сортируем строки по возрастанию
        if (nameA < nameB) {
          return -1
        }
        else if (nameA > nameB) {
          return 1
        }
        return 0 // Никакой сортировки
        })
        console.log(`Фильтр факультет`,sortArray);
        return sortArray
    });

    document.getElementById('birth').addEventListener('click', () => {
      sortArray = array.sort((a, b) => {
        dateA = new Date (a.birthStudent);
        dateB = new Date (b.birthStudent);
        return dateA - dateB
      })
      console.log(`Фильтр ДР`,sortArray);
      return sortArray
    });

    document.getElementById('yearStude').addEventListener('click', () => {
      sortArray = array.sort((a, b) => {
        const [x, y] = a.yearStude.split(' ');
        const [j, c] = b.yearStude.split(' ');
        return x - j;
      })
      console.log(`Фильтр год обучения`,sortArray);
      return sortArray
    })
  }

  // логика для создания колонок таблицы , входной параметр массив из которого нужно создавать колонки
function createTableCell(arr) {
  arr.forEach((item, i, arr) => {
  let row = document.createElement('tr');
  // row.classList.add('table-dark')
  row.innerHTML = '<tr><td>' + item.fullName + '</td><td>' + item.facultyStude + '</td><td>' + item.birthStudent + '</td><td>' + item.yearStude + '</td></tr>';
  tableBody.append(row);
  })
}


  function createTableLastCell(arr) {
    // arr.forEach((item, i, arr) => {
    let item = arr[arr.length - 1];
    let row = document.createElement('tr');
    row.innerHTML = '<tr><td>' + item.fullName + '</td><td>' + item.facultyStude + '</td><td>' + item.birthStudent + '</td><td>' + item.yearStude + '</td></tr>';
    tableBody.append(row);
  }

function createStudentArrayObj (arrayStudInfo = []) {

  // из массива со строкой данных о студенте делаю массив с объектом в котором хранится информация о студенте
  // let arrayStudInfo = [];

  //  создаю массив для того чтобы поместить данные студентов в таблицу
  let studentArray = [];
  let fullName;
  let birthStudent;
  let yearStude;
  let facultyStude;
  //  сегодняшняя дата без времени
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    arrayStudInfo.forEach(obj => {
      //  ФИО
      fullName = `${obj.surname} ${obj.name} ${obj.middlename}`;
      //  дата рождения и возраст
      let birth = new Date(obj.birthDay);
      let birthNow = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
      let age = today.getFullYear() - birth.getFullYear();
      if (today < birthNow) {
        age = age-1;
      };
      birthStudent = `${obj.birthDay} (${age})`;
      //  годы обучения
      let endStude = new Date(obj.beginStude).getFullYear() + 4;
      let mounth = new Date(endStude, today.getMonth());
      let startStude = new Date(obj.beginStude).getFullYear();
      let numberCours = `${Math.abs(startStude - today.getFullYear())} курс` ;
      if (mounth < new Date(today.getFullYear(), 10)) {
        numberCours = 'закончил';
      }
      yearStude = `${startStude} - ${endStude} (${numberCours})`;
      // Факультет
      facultyStude = obj.faculty;
      studentArray.push({fullName, birthStudent, yearStude, facultyStude});
    })

    // sortArray = studentArray.slice()
    // console.log(`SortArray скопировал StudentArray`, sortArray)

    // createFilterBtn (studentArray)





  form.addEventListener('submit', (e) => {
    e.preventDefault();
// правила заполнения инпутов
    if (!inputName.value.trim().length > 0) {
      inputRules.textContent = 'Введите имя';
      inputName.style.border = '2px solid red';
      return
    }

    else if (!inputSurname.value.trim().length > 0) {
      inputRules.textContent = 'Введите фамилию';
      inputSurname.style.border = '2px solid red';
      return
    }

    else if (!middleName.value.trim().length > 0) {
      inputRules.textContent = 'Введите отчество';
      inputSurname.style.border = '2px solid red';
      return
    }

    else if (!middleName.value.trim().length > 0) {
      inputRules.textContent = 'Введите отчество';
      middleName.style.border = '2px solid red';
      return
    }

    else if (!inputBirthDate.value) {
      inputRules.textContent = `Укажите дату рождения не ранее 01.01.1900 и не позднее ${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`;
      inputBirthDate.style.border = '2px solid red';
      return
    }

    else if (!inputBeginStude.value.trim().length === 4) {
      inputRules.textContent = `Укажите год не ранее 2000 и не позднее ${now.getFullYear()}`;
      inputBeginStude.style.border = '2px solid red';
      return
    }

    else if (!inputFaculty.value.trim().length > 0) {
      inputRules.textContent = 'Введите факультет';
      inputFaculty.style.border = '2px solid red';
      return
    }

    else {
      inputRules.textContent = 'Даные успешно отправлены!';
    };

  let inputValueArray = [];

// делаю массив всех инпутов
    let inputTag = Array.from(document.getElementsByClassName('form-control'));
    let str;
    let strStudentInfo = String();

// создаю строку из всех значений которые отправил пользователь в инпут
    inputTag.forEach((inputEl) => {
      let el = (inputEl.value.trim()).split(' ').join('-');
      str = String(el + ' ');
      strStudentInfo += str;
    });

// отправляю строку в массив
  inputValueArray.push(strStudentInfo.trim());


    arrayStudInfo = inputValueArray.map((item) => {
      const [name, surname, middlename, birthDay, beginStude, faculty] = item.split(' ');
      console.log(inputValueArray)
      return {name, surname, middlename, birthDay, beginStude, faculty}
    });

    console.log(`arrayStudInfo`, arrayStudInfo)

    arrayStudInfo.forEach(obj => {
      //  ФИО
      fullName = `${obj.surname} ${obj.name} ${obj.middlename}`;
      //  дата рождения и возраст
      let birth = new Date(obj.birthDay);
      let birthNow = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
      let age = today.getFullYear() - birth.getFullYear();
      if (today < birthNow) {
        age = age-1;
      };
      birthStudent = `${obj.birthDay} (${age})`;
      //  годы обучения
      let endStude = new Date(obj.beginStude).getFullYear() + 4;
      let mounth = new Date(endStude, today.getMonth());
      let startStude = new Date(obj.beginStude).getFullYear();
      let numberCours = `${Math.abs(startStude - today.getFullYear())} курс` ;
      if (mounth < new Date(today.getFullYear(), 10)) {
        numberCours = 'закончил';
      }
      yearStude = `${startStude} - ${endStude} (${numberCours})`;
      // Факультет
      facultyStude = obj.faculty;
      studentArray.push({fullName, birthStudent, yearStude, facultyStude});
    })


    // createFilterBtn(studentArray)

      inputTag.forEach((inputEl) => {
        inputEl.value = '';
      })
  return {studentArray, sortArray}
  })
  return {studentArray, sortArray}
};

// фильтры для инпутов
function filterFullname (array) {
  inputIncludesFullname.addEventListener('input',() => {
    sortArray = array.slice();
    let inputIncludesFullnameValue  = inputIncludesFullname.value;
  // if (Object.values(obj.fullName).includes(inputIncludesFullnameValue)) {
    sortArray = sortArray.filter(student => {
    let strIncludes = student.fullName.toLowerCase();
    return strIncludes.includes(inputIncludesFullnameValue.toLowerCase()) === true;
  })
  console.log(`Массив объектов содержит ${inputIncludesFullnameValue.toLowerCase()}`, sortArray)
  return sortArray
 });
};

function filterIncludesFaculty (array) {
  inputIncludesFaculty.addEventListener('input',() => {
    sortArray = array.slice();
    let inputIncludesFacultyValue  = inputIncludesFaculty.value;
    // console.log(array)
  // if (Object.values(obj.fullName).includes(inputIncludesFullnameValue)) {
    sortArray = sortArray.filter(student => {
    let strIncludes = student.facultyStude.toLowerCase();
    console.log(typeof strIncludes)
    return strIncludes.includes(inputIncludesFacultyValue.toLowerCase()) === true;
    })
  // };
    console.log(`Массив объектов содержит ${inputIncludesFacultyValue.toLowerCase()}`, sortArray)
    return sortArray
  });
};

function filterIncludesBirthDay (array) {
  inputIncludesBirth.addEventListener('input',() => {
    sortArray = array.slice();
    let inputIncludesBirthValue  = inputIncludesBirth.value;
    // console.log(array)
  //  if (Object.values(obj.fullName).includes(inputIncludesFullnameValue)) {
    sortArray = sortArray.filter(student => {
    let strIncludes = student.birthStudent.toLowerCase();
    console.log(typeof strIncludes)
    return strIncludes.includes(inputIncludesBirthValue.toLowerCase()) === true;
    })
    console.log(`Массив объектов содержит ${inputIncludesBirthValue.toLowerCase()}`, sortArray)
    return sortArray
  });
};


function filterIncludesYear (array) {
   inputIncludesYear.addEventListener('input', () => {
    sortArray = array.slice();
    let inputIncludesYearValue  = inputIncludesYear.value;
    console.log(array)
    sortArray = sortArray.filter(student => {
    const [x, y] = student.yearStude.split(' ');
    let strIncludes = x;
    console.log(strIncludes === `2015`);
    console.log(typeof inputIncludesYearValue)

    return strIncludes === inputIncludesYearValue;
    })
    console.log(`Массив объектов содержит ${inputIncludesYearValue.toLowerCase()}`, sortArray)
    return sortArray
  });
}



document.addEventListener('DOMContentLoaded', () => {
  document.body.append(container)
  // createInput(todos);
  // createStudentArrayObj(todos);
  let arrayObjStude = createStudentArrayObj(todos);
  filterFullname(arrayObjStude.studentArray);
  filterIncludesFaculty(arrayObjStude.studentArray);
  filterIncludesBirthDay(arrayObjStude.studentArray);
  filterIncludesYear(arrayObjStude.studentArray);


  createFilterBtn(arrayObjStude.studentArray)


  // массив инпутов для фильтров
  const inputFilter = Array.from(groupFilterBtn.children)

  createTableCell(arrayObjStude.studentArray);

  inputFilter.forEach(btn => {
    btn.addEventListener('input', () => {
      contentRow = Array.from(tableBody.children);
      contentRow.forEach(el => {
        el.style.display = 'none';
      })
      createTableCell(sortArray)

    })
  })

  btnClickArray.forEach(btn => {
    btn.addEventListener('click', () => {
      contentRow = Array.from(tableBody.children);
      contentRow.forEach(el => {
        el.style.display = 'none';
      })
      createTableCell(sortArray)
    })
  })

  // createTableCell(sortArray)
  // добавляю отправленные данные в строку при отправке формы
  form.addEventListener('submit', () => {
    createTableLastCell(arrayObjStude.studentArray);

  })




});
})();
