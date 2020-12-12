let cookies = 0

let clickUpgrades = {
  chocChips: {
    price: 2,
    // raise price after project completed
    quantity: 0,
  },
  batter: {
    price: 5,
    // raise price after project completed
    quantity: 0,
  }
};

let automaticUpgrades = {
  oven: {
    price: 6,
    quantity: 0,
    multiplier: 20
  },
  bakingSheets: {
    price: 400,
    quantity: 0,
    multiplier: 50,
  }
};

function mine() {
  cookies += 1;
  update();
}

function update() {
  document.getElementById("currentCookies").innerHTML = cookies;
}

function buyChocChips() {
  if (cookies >= clickUpgrades.chocChips.price) {
    cookies += 27;
    clickUpgrades.chocChips.quantity++;
    clickUpgrades.chocChips.price += 5;
    cookies -= 25;
  }
  update();
}

function buyBatter() {
  if (cookies >= clickUpgrades.batter.price) {
    cookies += 55;
    clickUpgrades.batter.quantity++;
    clickUpgrades.batter.price += 10;
    cookies -= 50;
  }
  update();
}

function BuyOvens() {
  if (cookies >= automaticUpgrades.oven.price) {
    automaticUpgrades.oven.quantity++;
    automaticUpgrades.oven.price += 100
    cookies -= 6
  }
  update();
}

function multipliedOvens() {
  cookies += (automaticUpgrades.oven.multiplier * automaticUpgrades.oven.quantity);
  update();
}

function startInterval() {
  setInterval(multipliedOvens, 1000);
}

startInterval();
mine();