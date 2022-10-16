const { frontEndContractsFile } = require("./helper-hardhat-config")
const fs = require("fs")
const { network } = require("hardhat")

module.exports = async () => {
     if (process.env.UPDATE_FRONT_END) {
          console.log("Writing to front end...")
          await updateContractAddresses()
          
          console.log("Front end written!")
     }
}



async function updateContractAddresses() {
     const MintingDapp = await ethers.getContract("MintingDapp")
     const contractAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))
     if (network.config.chainId.toString() in contractAddresses) {
          if (!contractAddresses[network.config.chainId.toString()].includes(MintingDapp.address)) {
               contractAddresses[network.config.chainId.toString()].push(MintingDapp.address)
          }
     } else {
          contractAddresses[network.config.chainId.toString()] = [MintingDapp.address]
     }
     fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))
}
module.exports.tags = ["all", "frontend"]
