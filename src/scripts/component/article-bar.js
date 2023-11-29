import articlesData from '../data/article/data-articles';

class ArticleBar extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="article-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h2 class="hero-writer">Artikel</h2><br>
                </div>
            </div>

            <div class="row" id="article-list">
                <!-- list artikel -->
            </div>
        <div>
    `;

    const listArticle = this.querySelector('#article-list');

    articlesData.forEach((article) => {
      listArticle.innerHTML += `
      <div class="col-md-3" id="article-${article.id}">
         <a href="detail-artikel.html?id=${article.id}" class="card-link">
           <div class="card w-100 shadow">
             <img src=${article.image} class="card-img-top" alt=${article.title}>
             <div class="card-body">
               <p class="card-text">${article.title}</p>
             </div>
           </div>
         </a>  
       </div>
      `;
    });
  }
}

customElements.define('article-bar', ArticleBar);
