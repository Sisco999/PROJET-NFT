async function main() {
     const { deployer } = await getNamedAccounts()
     const MintingDapp = await ethers.getContract("MintingDapp", deployer)

     const revealedMay = await MintingDapp.revealed()

     console.log(`Revealed?: ${revealedMay}`)
}

main()
     .then(() => process.exit(0))
     .catch((error) => {
          console.error(error)
          process.exit(1)
     })
