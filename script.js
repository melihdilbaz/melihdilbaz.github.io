import { Navbar } from './components/Navbar.js';
import { Introduction } from './components/Introduction.js';
import { Hypotheses } from './components/Hypotheses.js';
import { EDA } from './components/EDA.js';
import { Footer } from './components/Footer.js';
import { MachineLearning} from './components/MachineLearning.js'
import { MarginLayer } from './components/marginLayer.js';
import { Conclusion } from './components/conclusion.js';

const app = document.getElementById('app');

app.innerHTML = `
  ${Navbar()}
  ${MarginLayer()}
  ${Introduction()}
  ${MarginLayer()}
  ${Hypotheses()}
  ${MarginLayer()}
  ${EDA()}
  ${MarginLayer()}
  ${MachineLearning()}
  ${MarginLayer()}
  ${Conclusion()}
  ${Footer()}

`;
