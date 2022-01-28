
const pages = [{key: '68a4593b5e13baa05d27a68695f92cbe', q: 'https://guarulhos.ig.com.br/2021-12-09/com-o-cegru--eniac-apoia-ecossistema-de-inovacao-envolvendo-empresas-e-academia.html'}];

const newsContainer = document.querySelector('.news-container');

pages.forEach((data) => {
  // Criando os elementos
  const devNew = document.createElement('div');
  const link = document.createElement('a');
  const devImage = document.createElement('div');
  const image = document.createElement('img');
  const title = document.createElement('h3');
  const content = document.createElement('p');

  // Adicionando as classes
  devNew.classList.add('new');
  devImage.classList.add('image');
  title.classList.add('title');
  content.classList.add('content');

  // Agrupando os elementos
  devNew.appendChild(link);
  link.appendChild(devImage);
  devImage.appendChild(image);
  link.appendChild(title);
  link.appendChild(content);

  fetch('https://api.linkpreview.net', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data),
  }).then((res) => res.json()).then((page) => {
    link.setAttribute('href', page.url);
    image.setAttribute('src', page.image);
    title.innerText = page.title;
    content.innerText = page.description;
    newsContainer.appendChild(devNew);
    console.log(page);
  });
});
