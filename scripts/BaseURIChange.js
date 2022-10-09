async function main() {
     const { deployer } = await getNamedAccounts()
     const MintingDapp = await ethers.getContract("MintingDapp", deployer)

     const CurentBaseURI = await MintingDapp.baseURI()
     console.log("current Base URI is :  ", CurentBaseURI.toString())

     const NewBaseURI = "ipfs://NewBaseURI"
     const transactionResponse1 = await MintingDapp.setBaseURI(NewBaseURI)
     await transactionResponse1.wait(1)
     const NewsBaseURI = await MintingDapp.baseURI()

     console.log("New base URI is:  ", NewsBaseURI.toString())
}
main()
     .then(() => process.exit(0))
     .catch((error) => {
          console.error(error)
          process.exit(1)
     })
