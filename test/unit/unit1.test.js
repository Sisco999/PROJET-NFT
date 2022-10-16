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

  

     describe("withdraw", async function () {
          beforeEach(async function () {
               deployer = (await getNamedAccounts()).deployer
               await deployments.fixture(["all"])
               MintingDapp = await ethers.getContract("MintingDapp", deployer)
          })

          it("Should have balance of 1 ", async function () {
               const balance = await MintingDapp.getContractBalance()

               DepositAmount = "1000"
               const mint = await MintingDapp.mint(1, {
                    value: ethers.utils.parseEther(DepositAmount),
               })

               const PostMintBalance = await MintingDapp.getContractBalance()

               const expectedBalance = "1000000000000000000000"
               assert.equal(PostMintBalance.toString(), expectedBalance)
          })

          it("Should withdraw all", async function () {
               const withdrawAll = await MintingDapp.withdraw()
               const PostWithdrawBalance = await MintingDapp.getContractBalance()

               assert.equal(PostWithdrawBalance.toString(), "0")
          })

          it("Only allows the owner to withdraw", async function () {
               const accounts = await ethers.getSigners()
               const MintinAppConnectedContract = await MintingDapp.connect(accounts[1])
               await expect(MintinAppConnectedContract.withdraw()).to.be.revertedWith(
                    "Ownable: caller is not the owner"
               )
          })
     })

    


     describe("MAX Supply ERROR ", async function () {
          beforeEach(async function () {
               deployer = (await getNamedAccounts()).deployer
               await deployments.fixture(["all"])
               MintingDapp = await ethers.getContract("MintingDapp", deployer)
          })

          it("Set max Supply to 1; mint to expect erorr ", async function () {
               const NewMaxSuplly = "1"
               const transactionResponse1 = await MintingDapp.setmaxSupply(NewMaxSuplly)
               await transactionResponse1.wait(1)
               const CurentMaxSupply = await MintingDapp.i_maxSupply()
               assert.equal(CurentMaxSupply.toString(), NewMaxSuplly)

               it("mint and expect eror", async function () {
                    const mint = await MintingDapp.mint(2, { value: ethers.utils.parseEther("0") })
                    console.log("Trx hash:", mint.hash)
                    await expect(MintingDapp.mint()).to.be.revertedWith(
                         "Everythings as been minted! Sorry"
                    )
               })
          })
     })

     describe("PRICE", async function () {
          beforeEach(async function () {
               deployer = (await getNamedAccounts()).deployer
               await deployments.fixture(["all"])
               MintingDapp = await ethers.getContract("MintingDapp", deployer)
          })
          it("Price should be 5", async function () {
               const currentPrice = await MintingDapp.s_cost()
               const expectedPrice = "5"
               assert.equal(currentPrice.toString(), expectedPrice)
               // change price test
          })

          it("Should Change price when we call setCost", async function () {
               const NewPrice = "8"
               const transactionResponse1 = await MintingDapp.setCost(NewPrice)
               await transactionResponse1.wait(1)
               const currentPrice = await MintingDapp.s_cost()
               assert.equal(currentPrice.toString(), NewPrice)
          })
          it("Call ERROR when wrong price ", async function () {
               const accounts = await ethers.getSigners()
               DepositAmount = "4"
               const ConcetWithGuestAcount = await MintingDapp.connect(accounts[1])
               const mint = await MintingDapp.mint(1, {
                    value: ethers.utils.parseEther(DepositAmount),
               })
               await expect(ConcetWithGuestAcount.mint(DepositAmount)).to.be.revertedWith(
                    "You need to spend more money"
               )
          })
     })
})
