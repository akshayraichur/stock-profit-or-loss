const App = () => {
  const calculateBtn = document.querySelector('.calculate-btn');
  const initialPrice = document.querySelector('.initial-price');
  const quantityPrice = document.querySelector('.quantity');
  const currentPrice = document.querySelector('.current-price');
  const result = document.querySelector('.result');

  const handleCalculation = () => {
    // take the initial price and subtract it with current price.
    // if the value is + , multiple it with quantity and show as profit
    // if the value is -, multiply it with quantity and show as negative.
    // if the value is 0 then no pain no gain.

    let initial = parseFloat(initialPrice.value);
    let quantity = parseFloat(quantityPrice.value);
    let current = parseFloat(currentPrice.value);

    let message = '';
    let difference = current - initial;
    if (difference >= 1) {
      let profitValue = difference * quantity;
      let profitPercentage = (profitValue / initial) * 100;
      message = `Yay! 💸 You made a profit of Rs ${profitValue}, ${profitPercentage}% returns 📈`;
      result.classList.add('profit');
    } else if (difference === 0) {
      message = `You have made no progress, time to re-evaluate your stock choice.`;
    } else {
      // Since the difference is negative, we get a negative value.
      let lossValue = difference * quantity * -1;
      let lossPercentage = (lossValue / initial) * 100;

      message = `Ohh! 😕 You incurred a loss of Rs ${lossValue}, ${lossPercentage}% down 📉 `;
      if (lossPercentage > 50) {
        message = `😢 😢 We feel so sorry for you, your stock is ${lossPercentage}% down. With total loss of Rs ${lossValue}. `;
      }

      result.classList.add('loss');
    }

    result.textContent = message;
  };

  calculateBtn.addEventListener('click', handleCalculation);
};

App();
