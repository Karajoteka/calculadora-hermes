// function 1 - Calculate veHermes percentage
const tvlInput = document.querySelector('.tvl-input');
const myVehermesInput = document.querySelector('.my-vehermes-input');

const btnPercentage = document.querySelector('.calculate-percentage');
const resultPercentage = document.querySelector('.my-vehermes-percentage');

btnPercentage.addEventListener('click', myVehermesPercentage);

function myVehermesPercentage(event) {
  event.preventDefault();

  const tvl = tvlInput.value;
  const myVehermes = myVehermesInput.value;
  const myVehermesPercentage = (myVehermes * 100) / tvl;

  resultPercentage.innerHTML = 'El porcentaje que representa tu veHermes es % ' + myVehermesPercentage;
}

// Function 2 - Calculate pool liquidity to add
const tvlPoolInput = document.querySelector('.tvl-pool-input');
const myVehermesPercentageInput = document.querySelector('.my-vehermes-percentage-input');

const btnLiquidity = document.querySelector('.calculate-liquidity');
const resultLiquidity = document.querySelector('.liquidity-to-add');

btnLiquidity.addEventListener('click', liquidityToAdd);

function liquidityToAdd(event) {
  event.preventDefault();

  const tvlPool = tvlPoolInput.value;
  const myVehermesPercentage = myVehermesPercentageInput.value;
  const liquidityToAdd = (tvlPool * myVehermesPercentage) / 100;

  resultLiquidity.innerHTML = 'Tienes que añadir una liquidez de $ ' + liquidityToAdd;
}

// Function 3 - Calculate current liquidity pool percentage
const poolTvlInput = document.querySelector('.pool-tvl-input');
const percentageMyVehermes = document.querySelector('.percentage-my-vehermes')
const myCurrentLiquidityInput = document.querySelector('.my-current-liquidity-input');

const btnMyCurrentLiquidity = document.querySelector('.calculate-my-current-liquidity');
const resultLiquidityPercentage = document.querySelector('.my-liquidity-percentage');

btnMyCurrentLiquidity.addEventListener('click', myCurrentLiquidityPercentage);

function myCurrentLiquidityPercentage(event) {
  event.preventDefault();

  const poolTvl = poolTvlInput.value;
  const myCurrentLiquidity = myCurrentLiquidityInput.value;
  const myLiquidityPercentage = (myCurrentLiquidity * 100) / poolTvl;

  resultLiquidityPercentage.innerHTML = 'El porcentaje que representa tu liquidez actual en el pool es % ' + myLiquidityPercentage;
}

// Function 4 - Calculate new liquidity to add
// const myCurrentPoolLiquidityInput = document.querySelector('.my-current-pool-liquidity-input');
// const myPoolLiquidityPercentageInput = document.querySelector('.my-pool-liquidity-percentage-input');
// const myVehermesPercentInput = document.querySelector('.my-vehermes-percent-input');

// const btnNewLiquidity = document.querySelector('.calculate-new-liquidity');
// const resultNewLiquidityToAdd = document.querySelector('.my-new-liquidity');

// btnNewLiquidity.addEventListener('click', newLiquidity);

// function newLiquidity(event) {
//   event.preventDefault(); 

//   const myCurrentPoolLiquidity = myCurrentPoolLiquidityInput.value;
//   const myPoolLiquidityPercentage = myPoolLiquidityPercentageInput.value;
//   const myVehermesPercent = myVehermesPercentInput.value;
//   const newLiquidityToAdd = (myCurrentPoolLiquidity * myVehermesPercent) / myPoolLiquidityPercentage;

//   resultNewLiquidityToAdd.innerHTML = 'Tienes que añadir una liquidez de $ ' + newLiquidityToAdd; 
// }



