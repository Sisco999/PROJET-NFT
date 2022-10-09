async function main() {
     // Set up an ethers contract, representing our deployed Box instance

     const gasPrice = await hre.ethers.provider.getGasPrice()
     const feeData = await hre.ethers.provider.getFeeData()
     const blockNumber = await hre.ethers.provider.getBlockNumber()
     console.log(`Current block number: ${blockNumber}`)
     console.log(gasPrice.toString())
}
main()
     .then(() => process.exit(0))
     .catch((error) => {
          console.error(error)
          process.exit(1)
     })
