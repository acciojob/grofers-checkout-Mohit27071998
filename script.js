/* Your CSS Code here. */
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  let prices = document.querySelectorAll(".price");
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    total += parseInt(prices[i].textContent);
  }

  let tbl = document.querySelector('table');
  let tr = document.createElement("tr");
  tr.innerHTML = `
    <td>Total Price</td>
    <td>${total}</td>
  `;
  tbl.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);