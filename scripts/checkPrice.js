// scripts/index.js
async function main() {
     const { deployer } = await getNamedAccounts()
     const MintingDapp = await ethers.getContract("MintingDapp", deployer)

     // Call the retrieve() function of the deployed Box contract
     const value = await MintingDapp.s_cost()
     console.log("Price IS ", value.toString())
}

main()
     .then(() => process.exit(0))
     .catch((error) => {
          console.error(error)
          process.exit(1)
     })
