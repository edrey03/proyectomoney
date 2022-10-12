import AsideMenu from './AsideMenu';

function Nft () {
    return (
        <>
            <div className="home-container">
                <AsideMenu />
                <article>
                <div className="cards-dapps-container">
                        <div className="cartes">
                            <div className="header-card-dapp">
                                <div className=""><p>Money Farms</p>
                                <h2> FARMS AND STAKING</h2></div>
                                
                            </div>
                            <div className="cards-dapps-body">
                                <p>ONI TO HARVEST</p>
                                <p>Locked</p>
                            </div>  
                            <div className="cards-dapps-body">
                                <p>In Wallet</p>
                                <p>Locked</p>
                            </div>                                                                                                          
                            <div className="cards-dapps-footer">
                                <button className="unlock-button">Unlock Wallet</button>    
                            </div>
                            </div>  
                            </div>                                      
       
      </article>
                </div>     
        </>
    );
}

export default Nft;