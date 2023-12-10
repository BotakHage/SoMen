import articlesData from '../data/data-articles';

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
                <h1 id="hero-title">Artikel</h1>
              </div>
            </div>

            <div class="row" id="article-list">
              <!-- list artikel -->
            </div>
          </div>
        
        </section>
    `;

    const listArticle = this.querySelector('#article-list');

    articlesData.forEach((article) => {
      listArticle.innerHTML += `
        <div class="col-md-4 col-lg-2 m-3" id="article-${article.id}">
        <a href="#/article/${article.id}" class="card-link">
            <div class="card w-100 shadow">
              <img src=${article.image} class="card-img-top" alt=${article.title}>
              <div class="card-body">
                <p class="card-text" id="hero-desc">${article.title}</p>
              </div>
            </div>
          </a>  
        </div>
      `;
    });
  }
}

customElements.define('article-bar', ArticleBar);
