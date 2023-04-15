const root1 = document.querySelector('[data-key="order1"]');
const biscuits1 = document.querySelector('[data-key="order1"] .biscuits .count');
const donuts1 = document.querySelector('[data-key="order1"] .donuts .count');
const pancakes1 = document.querySelector('[data-key="order1"] .pancakes .count');
const status1 = document.querySelector('[data-key="order1"] .status dd');

const root2 = document.querySelector('[data-key="order2"]');
const biscuits2 = document.querySelector('[data-key="order2"] .biscuits .count');
const donuts2 = document.querySelector('[data-key="order2"] .donuts .count');
const pancakes2 = document.querySelector('[data-key="order2"] .pancakes .count');
const status2 = document.querySelector('[data-key="order2"] .status dd');

const root3 = document.querySelector('[data-key="order3"]');
const biscuits3 = document.querySelector(
  '[data-key="order3"] .biscuits .count'
);
const donuts3 = document.querySelector('[data-key="order3"] .donuts .count');
const pancakes3 = document.querySelector(
  '[data-key="order3"] .pancakes .count'
);
const status3 = document.querySelector('[data-key="order3"] .status dd');

biscuits1.textContent = root1.getAttribute('data-biscuits');
donuts1.textContent = root1.getAttribute('data-donuts');
pancakes1.textContent = root1.getAttribute('data-pancakes');
status1.textContent = root1.getAttribute('data-delivered') == "true" ? "Delivered" : "Pending";

biscuits2.textContent = root2.getAttribute("data-biscuits");
donuts2.textContent = root2.getAttribute("data-donuts");
pancakes2.textContent = root2.getAttribute("data-pancakes");
status2.textContent = root2.getAttribute("data-delivered") == "true" ? "Delivered" : "Pending";

biscuits3.textContent = root3.getAttribute("data-biscuits");
donuts3.textContent = root3.getAttribute("data-donuts");
pancakes3.textContent = root3.getAttribute("data-pancakes");
status3.textContent = root3.getAttribute("data-delivered") == "true" ? "Delivered" : "Pending";