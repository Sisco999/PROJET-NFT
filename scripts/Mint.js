// scripts/index.js
async function main () {
    // Set up an ethers contract, representing our deployed Box instance
   const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
   const MintingDapp = await ethers.getContractFactory('MintingDapp');
   const mintingDapp = await MintingDapp.attach(address);

    
    const mint = await mintingDapp.mint(1, { value: ethers.utils.parseEther("0") });

    console.log("Trx hash:", mint.hash);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });