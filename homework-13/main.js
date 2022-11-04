// 1
const numberOfSecondsForTimer = document.getElementById("input");
const startTimerButton = document.getElementById("btn");
const message = document.querySelector(".paragraph");

startTimerButton.addEventListener("click", () => {
  let value = numberOfSecondsForTimer.value;
  value = String(value).trim();
  if (!value || value.length === 0) {
    message.innerHTML = "Please enter the value, empty value is not allowed!!!";
    return false;
  }

  if (+value !== +value) {
    message.innerHTML =
      "Enter the valid number " +
      numberOfSecondsForTimer.value +
      " is not valid";
    return false;
  }

  value = +value;
  if (value < 1) {
    message.innerHTML =
      "Enter the valid number bigger than 0 seconds " +
      numberOfSecondsForTimer.value +
      " seconds is not valid";
    return false;
  }

  let numberOfSeconds = value;
  setTimeout(() => {
    message.innerHTML = `The operation was successful! After ${numberOfSeconds} seconds russia was eliminated`;
  }, numberOfSeconds * 1000);
});

// 2
const chosenDate = document.getElementById("input2");
const startTimer = document.getElementById("btn-campaign");
let finishTime = 0;
let timer = null;

startTimer.addEventListener("click", () => {
  countDownDate = chosenDate.value.trim();
  if (!countDownDate || countDownDate.length === 0) {
    document.getElementById("endtime").innerHTML =
      "Please enter the value, empty value is not allowed!!!";
    return false;
  }

  const endDate = new Date(countDownDate).getTime();
  let dateNow = new Date().getTime();
  if (endDate <= dateNow) {
    document.getElementById(
      "endtime"
    ).innerHTML = `Enter the valid date ${chosenDate.value} is not valid`;
    return false;
  }

  if (timer) clearInterval(timer);

  timer = setInterval(function () {
    const msPerSecond = 1000;
    const msPerMinute = 60 * msPerSecond;
    const msPerHour = 3600 * msPerSecond;
    const msPerDay = 86400 * msPerSecond;
    const msPerMonth = 86400 * 30 * msPerSecond;
    const msPerYear = 86400 * 365 * msPerSecond;

    let dateNow = new Date().getTime();
    let distance = endDate - dateNow;

    let years = Math.floor(distance / msPerYear);
    let months = Math.floor((distance % msPerYear) / msPerMonth);
    let days = Math.floor((distance % msPerMonth) / msPerDay);
    let hours = Math.floor((distance % msPerDay) / msPerHour);
    let minutes = Math.floor((distance % msPerHour) / msPerMinute);
    let seconds = Math.floor((distance % msPerMinute) / msPerSecond);

    console.log(years + ":" + months + ":");
    document.getElementById("endtime").innerHTML =
      years +
      ":" +
      months +
      ":" +
      days +
      ":" +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
  }, 1000);
});

//  3
const modelOfPhone = document.getElementById("model");
const ramOfPhone = document.getElementById("ram");
const ssdOfPhone = document.getElementById("internal-storage");
const priceOfPhone = document.querySelector(".price");
const calculatePriceButton = document.getElementById("button");

function calculatePrice() {
  let totalPrice =
    PHONES[modelOfPhone.value].price +
    PHONES[modelOfPhone.value].ramPrices[ramOfPhone.value] +
    PHONES[modelOfPhone.value].storagePrices[ssdOfPhone.value];
  priceOfPhone.innerHTML = `Price of your ${modelOfPhone.value} is ${totalPrice} USD `;
}

calculatePriceButton.addEventListener("click", calculatePrice);
const PHONES = {
  iPhone: {
    price: 600,
    ramPrices: [300, 400, 500, 600],
    storagePrices: [200, 250, 300, 400],
  },
  Pixel: {
    price: 500,
    ramPrices: [220, 250, 300, 350],
    storagePrices: [155, 200, 255, 300],
  },
  Sumsung: {
    price: 550,
    ramPrices: [250, 300, 350, 400],
    storagePrices: [200, 250, 300, 350],
  },
  Oneplus: {
    price: 600,
    ramPrices: [200, 250, 300, 350],
    storagePrices: [200, 250, 300, 300],
  },
};
