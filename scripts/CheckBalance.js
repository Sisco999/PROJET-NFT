async function main() {
     const { deployer } = await getNamedAccounts()
     const MintingDapp = await ethers.getContract("MintingDapp", deployer)

     const BefforWithdrawBalance = await MintingDapp.getContractBalance()
     console.log("before Withdraw balance is : :  ", BefforWithdrawBalance.toString())
}
main()
     .then(() => process.exit(0))
     .catch((error) => {
          console.error(error)
          process.exit(1)
     })
