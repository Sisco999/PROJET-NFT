// #1 clasic
// function deployFunc(){
//

// }

// module.exports.default = deployFunc()
//#2 conpact one
// module.exports = async (hre) => {   //hre is hardhat run time environement
//     const {getNamedAccounts, deployments } = hre
//     // same as
//     // hre.getNamedAccounts
//     // hre.deployments

//#3 one ligne

const { network } = require("hardhat")

const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
     const { deploy, log } = deployments
     const { deployer } = await getNamedAccounts()
     const chainId = network.config.chainId
     const args = [
          (_initBaseURI = process.env.BASE_URI),
          (_initNotRevealedUri = process.env.NOT_REAVEAL_URI),
     ]

     const MintingDapp = await deploy("MintingDapp", {
          from: deployer,
          args: args,
          log: true,
     })
     log(`MintingDapp deployed at ${MintingDapp.address}`)

     //await verify(MintingDapp.address, args)
}

module.exports.tags = ["all", "deploy1"]
