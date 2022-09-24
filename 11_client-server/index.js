(() => {

  // контейнер индекс.html
let container = document.getElementById('list');
//  контейнер blog.html

function removeLinkList () {
  let elements = document.querySelectorAll('a');
  console.log(elements)
  for (let i of elements) {
    i.remove();
  }
}

async function createPage () {

// создаю навигацию по страницам
  const btnGroup = document.createElement('div');
  btnGroup.classList.add('group-btn');
  const backBtn = document.createElement('btn');
  backBtn.classList.add('btn','btn-secondary', 'btn-lg');
  const nextBtn = document.createElement('btn');
  nextBtn.innerHTML = '&#10230';
  backBtn.innerHTML = '&#10229';
  nextBtn.classList.add('btn' ,'btn-secondary', 'btn-lg');
  const pages = document.createElement('span');
  btnGroup.append(backBtn, pages, nextBtn);
  container.append(btnGroup)



  // создаю элементы для списка
  const listGroup = document.createElement('div');
  listGroup.classList.add('list-group')


  container.append(listGroup)

  let count = 0;

  function createLinkInListFromArray (data) {
    data.data.forEach(element => {
      const listLink = document.createElement('a');
      // let a = 0;
      count = count + 1
      listLink.classList.add("list-group-item", "list-group-item-action");
      listLink.innerHTML = `<span>${count}.</span>  ${element.title}`;
      listLink.target = '_blank';
      listLink.href = `blog.html?id=${element.id}`;
      listGroup.append(listLink)
    });
  }

  let countPage = 1;
    const response = await fetch(`https://gorest.co.in//public-api/posts?page`);
    const data = await response.json();
    console.log(data)
    createLinkInListFromArray(data)
    pages.textContent = `${countPage} / ${data.meta.pagination.pages} страницы`;


  nextBtn.addEventListener('click', async () => {
    if (countPage < data.meta.pagination.pages) {
      countPage = countPage + 1;
      console.log(countPage)
      pages.textContent = `${countPage} / ${data.meta.pagination.pages} страниц`;

      const clickResponse = await fetch(`https://gorest.co.in//public-api/posts?page=${countPage}`)
      const clickData = await clickResponse.json();
      removeLinkList();
      createLinkInListFromArray(clickData);
    }
    else {
      nextBtn.disabled = 'true';
    }
  })

  backBtn.addEventListener('click', async () => {
    if (countPage > 1) {
      countPage = countPage - 1;
      console.log(countPage)
      pages.textContent = `${countPage} / ${data.meta.pagination.pages}`;

      const clickResponse = await fetch(`https://gorest.co.in//public-api/posts?page=${countPage}`)
      const clickData = await clickResponse.json();
      removeLinkList();
      createLinkInListFromArray(clickData);
    }
    else {
      nextBtn.disabled = 'true';
    }
  })
}







document.addEventListener('DOMContentLoaded', () => {
  todoList = createPage();

});


})();
