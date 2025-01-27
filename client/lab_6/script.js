/* eslint-disable no-unused-vars */
function getRandomIntInclusive(min, max) {
  newMin = Math.ceil(min);
  newMax = Math.floor(max);
  return Math.floor(
    Math.random() * (newMax - newMin + 1) + min
  );
}

// eslint-disable-next-line no-unused-vars
function resotArrayMake(dataArray) {
  console.log('fired dataHandler');
  const range = [...Array(15).keys()];
  // eslint-disable-next-line no-unused-vars
  const listItems = range.map((item, index) => {
    const restNum = getRandomIntInclusive(0, dataArray.length - 1);
    return dataArray[restNum];
  });
  return listItems;
}

function createHtmlList(collection) {
  console.log('fired HTML creator');
  console.log(collection);
  const targetList = document.querySelector('.resto-list');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {name} = item;
    const displayName = name.toLowerCase();
    const injectThisItem = `<li>${displayName}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

async function mainEvent() { // the async keyword means we can make API requests
  const form = document.querySelector('.main_form');
  form.addEventListener('submit', async (submitEvent) => { // async has to be declared all the way to get an await
    submitEvent.preventDefault(); // This prevents your page from refreshing!
    console.log('form submission'); // this is substituting for a "breakpoint"
    const results = await fetch('/api/foodServicesPG'); // This accesses some data from our API
    const arrayFromJson = await results.json(); // This changes it into data we can use - an object
    console.table(arrayFromJson.data); // this is called "dot notation"
    // arrayFromJson.data - we're accessing a key called 'data' on the returned object
    // it contains all 1,000 records we need
  });
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
