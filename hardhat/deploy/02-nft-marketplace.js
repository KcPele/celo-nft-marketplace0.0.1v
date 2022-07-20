

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments
    const {deployer } = await getNamedAccounts()
    
    log("deploying Marketplace-----------------------------")
    const args = []
    const nftMarketplace = await deploy("NFTMarketplace", {
        from: deployer,
        args: args,
        log:true,
    })

    log('Done---------------------------')

}