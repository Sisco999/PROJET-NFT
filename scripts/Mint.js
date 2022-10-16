const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
     const { deployer } = await getNamedAccounts()
     const MintingDapp = await ethers.getContract("MintingDapp", deployer)

     const mint = await MintingDapp.mint(10, { value: ethers.utils.parseEther("0") })

     console.log("Trx hash:", mint.hash)
}

main()
     .then(() => process.exit(0))
     .catch((error) => {
          console.error(error)
          process.exit(1)
     })
