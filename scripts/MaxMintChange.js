async function main() {
     const { deployer } = await getNamedAccounts()
     const MintingDapp = await ethers.getContract("MintingDapp", deployer)

     const CurentMaxMintAmounty = await MintingDapp.s_maxMintAmount()
     console.log("Max Mint Amount per Pax is:  ", CurentMaxMintAmounty.toString())

     const NewMaxSuplly = "2222"
     const transactionResponse1 = await MintingDapp.setmaxMintAmount(NewMaxSuplly)
     await transactionResponse1.wait(1)

     console.log("NEW Max Mint Amount per Pax is:  ", NewMaxSuplly.toString())
}
main()
     .then(() => process.exit(0))
     .catch((error) => {
          console.error(error)
          process.exit(1)
     })
