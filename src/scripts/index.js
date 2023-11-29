import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './component/nav-bar';
import './component/foot-bar';
import './component/article-bar';
import App from './views/app';

// eslint-disable-next-line no-unused-vars
const app = new App();

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
