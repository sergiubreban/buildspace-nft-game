
const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('Game');
  
  const gameContract = await gameContractFactory.deploy(                        
    ["Police", "Iance Cartoon", "Pink Dog"],       // Names
    ["https://i.imgur.com/mTmzd3m.jpeg", // Images
      "https://i.imgur.com/UpNDxty.jpeg",
      "https://i.imgur.com/nwhnRsZ.jpeg"],
    [100, 200, 300],                    
    [100, 50, 25],
    "Elon Musk",
    "https://i.imgur.com/AksR0tt.png",
    10000,
    50
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();