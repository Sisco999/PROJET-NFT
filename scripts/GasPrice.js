
const { ethers } = require("hardhat")


async function main() {
     // Set up an ethers contract, representing our deployed Box instance

     const Prixgas = await hre.ethers.provider.getFeeData()
     return Feedara  
       
       
     

     
     console.log("gas price is", (Prixgas),"wei")
     
    
    

}
main()
     .then(() => process.exit(0))
     .catch((error) => {
          console.error(error)
          process.exit(1)
     })
