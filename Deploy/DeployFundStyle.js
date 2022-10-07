const { network, ethers, getNamedAccounts } = require("hardhat")


module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()



    console.log("----------------------------------------------------")
    console.log("Deploying MintingDapp and waiting for confirmations...")
    const MintingDapp = await deploy("MintingDapp", {
        from: deployer,
        
        log: true,
        // we need to wait if on a live network so we can verify properly
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    console.log(`MintingDapp deployed at ${MintingDapp.address}`)

   
}

module.exports.tags = ["all", "MintingDapp"]
