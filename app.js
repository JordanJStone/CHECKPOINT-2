let cookies = 0

let clickUpgrades = {
  chocChips: {
    price: 2,
    quantity: 0,
  },
  batter: {
    price: 10,
    quantity: 0,
  }
};

let automaticUpgrades = {
  oven: {
    price: 60,
    quantity: 0,
    multiplier: 50
  },
  bakingSheets: {
    price: 40,
    quantity: 0,
    multiplier: 20,
  }
};

function mine() {
  cookies += 1;
  updateCookieCount();
}

function updateCookieCount() {
  document.getElementById("currentCookies").innerHTML = cookies;
}

function buyChocChips() {
  if (cookies >= clickUpgrades.chocChips.price) {
    cookies += 27;
    clickUpgrades.chocChips.quantity++;
    clickUpgrades.chocChips.price += 5;
    cookies -= 25;
  }
  updateCookieCount();
  updateChocChips();
  currentChocChipsCost();
}

function buyBatter() {
  if (cookies >= clickUpgrades.batter.price) {
    cookies += 55;
    clickUpgrades.batter.quantity++;
    clickUpgrades.batter.price += 10;
    cookies -= 50;
  }
  updateCookieCount();
  updateBatter();
  currentBatterCost();
}

function buyBakingSheets() {
  if (cookies >= automaticUpgrades.bakingSheets.price) {
    automaticUpgrades.bakingSheets.quantity++;
    automaticUpgrades.bakingSheets.price += 60
    cookies -= 6
  }
  updateCookieCount();
  updateBakingSheets();
  currentBakingSheetMultiplier();
  currentBakingSheetCost();
}

function buyOvens() {
  if (cookies >= automaticUpgrades.oven.price) {
    automaticUpgrades.oven.quantity++;
    automaticUpgrades.oven.price += 100
    cookies -= 6
  }
  updateCookieCount();
  updateOvens();
  currentOvenMultiplier();
  currentOvenCost();
}



function multipliedOvens() {
  cookies += (automaticUpgrades.oven.multiplier * automaticUpgrades.oven.quantity);
  updateCookieCount();
}

function multipliedbakingSheets() {
  cookies += (automaticUpgrades.bakingSheets.multiplier * automaticUpgrades.bakingSheets.quantity);
  updateCookieCount();
}



function startIntervalOvens() {
  setInterval(multipliedOvens, 1000);
}

function startIntervalbakingSheets() {
  setInterval(multipliedbakingSheets, 1000);
}



function updateChocChips() {
  document.getElementById("currentChipCount").innerHTML = clickUpgrades.chocChips.quantity;
}

function updateBatter() {
  document.getElementById("currentBatterCount").innerHTML = clickUpgrades.batter.quantity;
}

function updateBakingSheets() {
  document.getElementById("currentBakingSheetsCount").innerHTML = automaticUpgrades.bakingSheets.quantity;
}

function updateOvens() {
  document.getElementById("currentOvensCount").innerHTML = automaticUpgrades.oven.quantity;
}



function currentBakingSheetMultiplier() {
  document.getElementById("currentBakingSheetMultiplier").innerHTML = automaticUpgrades.bakingSheets.multiplier
}

function currentOvenMultiplier() {
  document.getElementById("currentOvenMultiplier").innerHTML = automaticUpgrades.oven.multiplier
}



function currentChocChipsCost() {
  document.getElementById("chipsCost").innerHTML = clickUpgrades.chocChips.price
}

function currentBatterCost() {
  document.getElementById("batterCost").innerHTML = clickUpgrades.batter.price
}

function currentBakingSheetCost() {
  document.getElementById("currentBakingSheetCost").innerHTML = automaticUpgrades.bakingSheets.price
}

function currentOvenCost() {
  document.getElementById("currentOvenCost").innerHTML = automaticUpgrades.oven.price
}

startIntervalOvens();
startIntervalbakingSheets();
mine();