async function main() {
     const { deployer } = await getNamedAccounts()
     const MintingDapp = await ethers.getContract("MintingDapp", deployer)

     const transactionResponse2 = await MintingDapp.reveal()
     await transactionResponse2.wait(1)
     const Nrev = await MintingDapp.revealed()
     console.log(`Revealed?: ${Nrev}`)
}

main()
     .then(() => process.exit(0))
     .catch((error) => {
          console.error(error)
          process.exit(1)
     })
