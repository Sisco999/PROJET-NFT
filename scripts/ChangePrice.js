// scripts/index.js
async function main () {
    // Set up an ethers contract, representing our deployed Box instance
   const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
   const MintingDapp = await ethers.getContractFactory('MintingDapp');
   const mintingDapp = await MintingDapp.attach(address);
   
   // Call the retrieve() function of the deployed Box contract
   const value = await mintingDapp.cost();
   console.log('Price IS ', value.toString());
   

    // change price
    const transactionResponse1 = await mintingDapp.setCost(4000000000000000)
    await transactionResponse1.wait(1)
    const NewPriceCheck = await mintingDapp.cost()
    console.log(`Updated coast: ${NewPriceCheck}`)
   }
   
   
   main()
     .then(() => process.exit(0))
     .catch(error => {
       console.error(error);
       process.exit(1);
     });