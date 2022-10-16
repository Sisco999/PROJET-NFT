// scripts/index.js
async function main() {
     const { deployer } = await getNamedAccounts()
     const MintingDapp = await ethers.getContract("MintingDapp", deployer)

     // Call the retrieve() function of the deployed Box contract
     const Value = await MintingDapp.i_maxSupply()
     console.log("Max supply is:", Value.toString())
     const value = await MintingDapp.totalSupply()
     console.log("Already Minted  ", value.toString())
}

main()
     .then(() => process.exit(0))
     .catch((error) => {
          console.error(error)
          process.exit(1)
     })
