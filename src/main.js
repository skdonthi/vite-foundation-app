import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import foundationSitesLogo from '/foundation-sites.png'
import htmlLogo from '/html5.svg'
import cssLogo from '/css3.svg'
import sassLogo from '/sass.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://get.foundation/sites.html" target="_blank">
      <img src="${foundationSitesLogo}" class="logo foundation" alt="foundations sites logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <br />

     <a href="https://html5.org" target="_blank">
      <img src="${htmlLogo}" class="logo" alt="html logo" />
    </a>
     <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">
      <img src="${cssLogo}" class="logo" alt="css logo" />
    </a>
     <a href="https://sass-lang.com" target="_blank">
      <img src="${sassLogo}" class="logo" alt="sass logo" />
    </a>

    <h1>Hello World!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
