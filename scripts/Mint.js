const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
     const { deployer } = await getNamedAccounts()
     const MintingDapp = await ethers.getContract("MintingDapp", deployer)

     const mint = await MintingDapp.mint(3, { value: ethers.utils.parseEther("5") })

     console.log("Trx hash:", mint.hash)
}

main()
     .then(() => process.exit(0))
     .catch((error) => {
          console.error(error)
          process.exit(1)
     })
