const inputEl = document.getElementById('user-input');
const outputResult = document.getElementsByClassName('output-result');
const appBody = document.getElementById('app-body');

let calc = (e) =>{
  appBody.style.display = 'block';
  let userInput = e.target.value;

  const calcKg = (input) =>{
    console.log(typeof(input));
    return input / 1000;
  }
  const calcOz = (input) =>{
    return input * 0.035274;
  }
  const calcLbs = (input) =>{
    return input * 0.00220462262185;
  }
  //I guess no so elegant way, need to found out good solution
  // for (item of list) - doesnt work, because I have 3 different functions...
  document.getElementById('kg').innerHTML = calcKg(userInput);
  document.getElementById('oz').innerHTML = calcOz(userInput);
  document.getElementById('lbs').innerHTML = calcLbs(userInput);
}
inputEl.addEventListener('input', calc);