(() => {


async function createPageBlock () {

  const container = document.getElementById('blog');
  const titleBlog = document.createElement('h1');
  titleBlog.classList.add('blog-title');
  const blogContent = document.createElement('p');
  blogContent.classList.add('blog-content');
  const listContainer = document.createElement('div');
  const listContainerTitle = document.createElement('h2');
  listContainerTitle.classList.add('title-comments');
  listContainerTitle.textContent = 'Комментарии';
  const blogComments = document.createElement('ul');
  blogComments.classList.add('list-group')
  listContainer.append(listContainerTitle, blogComments)
  container.append(titleBlog, blogContent, listContainer)

  const pageParams = new URLSearchParams(window.location.search);
  const idLink = pageParams.get('id');

  const response = await fetch(`https://gorest.co.in//public-api/posts/${idLink}`);
  const data = await response.json();
  // console.log(data)

  const responseComment = await fetch(`https://gorest.co.in/public-api/comments?post_id=${idLink}`);
  const dataComment = await responseComment.json();
  console.log(dataComment)

  titleBlog.textContent = data.data.title;
  blogContent.textContent = data.data.body;

  dataComment.data.forEach(objFromComment => {
    console.log(objFromComment)
    const listContent = document.createElement('li');
    listContent.classList.add('list-content', 'list-group-item', 'list-group-item-light')
    listContent.innerHTML = `<div class='user-name'>${objFromComment.name}</div><div class='user-content'>${objFromComment.body}</div>`;
    blogComments.append(listContent);

  });


}



document.addEventListener('DOMContentLoaded', () => {

  createPageBlock ()
})
})();
