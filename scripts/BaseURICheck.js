async function main() {
     const { deployer } = await getNamedAccounts()
     const MintingDapp = await ethers.getContract("MintingDapp", deployer)

     const CurentBaseURI = await MintingDapp.baseURI()
     console.log("current Base URI is :  ", CurentBaseURI.toString())
}
main()
     .then(() => process.exit(0))
     .catch((error) => {
          console.error(error)
          process.exit(1)
     })
