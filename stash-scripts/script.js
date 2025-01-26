// Remember to spell all things the American way, ie fiber and color to avoid issues.

const yarnArray = [];

function addYarn() {
  // Get values from the input fields
  const yarnNameElement = document.querySelector('.js-yarn-name-input');
  const yarnName = yarnNameElement.value;
  
  const yarnWeightElement = document.querySelector('.js-yarn-weight-input');
  const yarnWeight = yarnWeightElement.value;
  
  const yarnColorElement  = document.querySelector('.js-yarn-color-input');
  const yarnColor = yarnColorElement.value;
  
  const yarnAmountElement  = document.querySelector('.js-yarn-amount-input');
  const yarnAmount = yarnAmountElement.value;
  
  const yarnFiberElement  = document.querySelector('.js-yarn-fiber-input');
  const yarnFiber = yarnFiberElement.value;
  
  const yarnBrandElement  = document.querySelector('.js-yarn-brand-input');
  const yarnBrand = yarnBrandElement.value;

  // Create a yarn object with the input values
  const yarn = {
    yarnName,
    yarnWeight,
    yarnColor,
    yarnAmount,
    yarnFiber,
    yarnBrand
  };

  // Add the yarn object to the array
  yarnArray.push(yarn);

  // Log the updated array to the console
  console.log(yarnArray);

  // Optional: Clear the input fields after adding
  document.querySelector('.js-yarn-name-input').value = '';
  document.querySelector('.js-yarn-weight-input').value = '';
  document.querySelector('.js-yarn-color-input').value = '';
  document.querySelector('.js-yarn-amount-input').value = '';
  document.querySelector('.js-yarn-fiber-input').value = '';
  document.querySelector('.js-yarn-brand-input').value = '';
}



