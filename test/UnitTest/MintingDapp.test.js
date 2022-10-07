const { deployments, ethers, getNamedAccounts  } = require("hardhat");
const { describe } = require("node:test");

describe("MintingDapp", async function (){
    let MintingDapp
    let deployer
    beforeEach ( async function () {
         deployer = (await getNamedAccounts()).deployer
        await deployments.fixture(["all"])
        MintingDapp = await ethers.getContract("MintingDapp",deployer)   // getContract take the last deployment 

    })

describe("constructor", async function(){})
it ("")

})