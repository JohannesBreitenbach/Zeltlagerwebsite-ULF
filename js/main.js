import { CountUp } from './js/countUp.min.js';

window.onload = function() {
  var countUp = new CountUp('countdown', 2000);
  countUp.start();
}