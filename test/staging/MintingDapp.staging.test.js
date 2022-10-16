const { deployments, ethers, getNamedAccounts, provider } = require("hardhat")
const { assert, expect } = require("chai")

describe("MintingDapp", async function () {
     let MintingDapp
     let deployer

     beforeEach(async function () {
          deployer = (await getNamedAccounts()).deployer
          await deployments.fixture(["all"])
          MintingDapp = await ethers.getContract("MintingDapp", deployer)
     })
})
