async function main() {
     const { deployer } = await getNamedAccounts()
     const MintingDapp = await ethers.getContract("MintingDapp", deployer)

     const CurentMaxMintAmounty = await MintingDapp.s_maxMintAmount()
     console.log("Max Mint Amount per Pax is:  ", CurentMaxMintAmounty.toString())
}
main()
     .then(() => process.exit(0))
     .catch((error) => {
          console.error(error)
          process.exit(1)
     })
