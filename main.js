import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="logoExample.jpeg" class="logo" alt="Snowboard Logo" />
    </a>
    <p> I plan on maing a custom logo and graphics for the page :)</p>
    <h1>Find My Ski Tickets</h1>
    <h2> 
          I'm thinking single page application<br>
          Search Engine that contains paramaters: Location, Price, Full-day/Half-day, etc. <br>
          Filter options: Price L-H, Distance (range) <br>
          all ticket filters are sent to orgin site.
    </h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
