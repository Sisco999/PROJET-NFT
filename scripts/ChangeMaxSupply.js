//max suplly

// scripts/index.js
async function main() {
     const { deployer } = await getNamedAccounts()
     const MintingDapp = await ethers.getContract("MintingDapp", deployer)

     const CurrentSupply = await MintingDapp.maxSupply()
     console.log(` Max Supply is : ${CurrentSupply}`)
     // change supply
     const transactionResponse2 = await MintingDapp.setmaxSupply(55)
     await transactionResponse2.wait(1)
     const NewMax = await MintingDapp.maxSupply()
     console.log(`New Max Supply: ${NewMax}`)
}

main()
     .then(() => process.exit(0))
     .catch((error) => {
          console.error(error)
          process.exit(1)
     })
