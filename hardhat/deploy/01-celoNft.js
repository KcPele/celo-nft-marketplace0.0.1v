


module.exports = async function({getNamedAccounts, deployments}){
    const {deploy, log} = deployments
    const {deployer } = await getNamedAccounts()
  log("------------------------------")
    const args = []
    const celoNFT = await deploy("CeloNFT", {
        from: deployer,
        args: args,
        log: true,
    })

    log(celoNFT.address)
}