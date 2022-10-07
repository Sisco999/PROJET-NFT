// imports

const { ethers, network } = require("hardhat")

//assync main
async function main() {
    const MintingDappFactory = await ethers.getContractFactory("MintingDapp")

    console.log("Deploying....")
    const MintingDapp = await MintingDappFactory.deploy
    (_initBaseURI = "ipfs://QmYkjcmHRdEHaVtvZNULCLt9VQBAGF4ESFHHxBEeEgLz1t/",_initNotRevealedUri="ipfs://test/")

    await MintingDapp.deployed()

    console.log(`Deployed contract to: ${MintingDapp.address}`)

    const mint = await MintingDapp.mint(1, { value: ethers.utils.parseEther("0") });

    console.log("Trx hash:", mint.hash);


    // //check NFT price
    // const currentPrice = await MintingDapp.cost()
    // console.log(`Current Price is: ${currentPrice}`)
    // // change price
    // const transactionResponse1 = await MintingDapp.setCost(4000000000000000)
    // await transactionResponse1.wait(1)
    // const NewPriceCheck = await MintingDapp.cost()
    // console.log(`Updated coast: ${NewPriceCheck}`)


    
    // //max suplly
    // const CurrentSupply = await MintingDapp.maxSupply()
    // console.log(` Max Supply is : ${CurrentSupply}`)
    // // change supply
    // const transactionResponse2 = await MintingDapp.Supply(55)
    // await transactionResponse2.wait(1)
    // const NewMax = await MintingDapp.maxSupply()
    // console.log(`Updated Max Supply: ${NewMax}`)
}

//change price

// main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

    module.exports.tags = ["all", "MintingDapp"]
