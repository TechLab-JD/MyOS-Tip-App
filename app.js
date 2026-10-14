// MyOS Tip Calculator.
const bill = document.getElementById('tp-bill');
const pct = document.getElementById('tp-pct');
const split = document.getElementById('tp-split');
if (bill) {
  const f = (n) => '$' + (isFinite(n) ? n : 0).toFixed(2);
  function calc() {
    const b = parseFloat(bill.value) || 0, p = parseInt(pct.value, 10), s = Math.max(1, parseInt(split.value, 10) || 1);
    const tip = b * p / 100, total = b + tip;
    document.getElementById('tp-pctv').textContent = p;
    document.getElementById('tp-tip').textContent = f(tip);
    document.getElementById('tp-total').textContent = f(total);
    document.getElementById('tp-each').textContent = f(total / s);
  }
  [bill, pct, split].forEach((el) => el.addEventListener('input', calc));
  calc();
}
