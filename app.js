let cookies = 0

let clickUpgrades = {
  chocChips: {
    price: 25,
    quantity: 0,
    multiplier: 1
  },
  batter: {
    price: 50,
    quantity: 0,
    multiplier: 2,
  }
};

let automaticUpgrades = {
  oven: {
    price: 600,
    quantity: 0,
    multiplier: 20
  },
  bakingSheets: {
    price: 400,
    quantity: 0,
    multiplier: 15,
  }
};

function mine() {
  cookies += 1;
  update();
}

function update() {
  document.getElementById("currentCookies").innerHTML = cookies;
}



mine()