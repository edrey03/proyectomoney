import AsideMenu from './AsideMenu';

function Nft () {
    return (
        <>
            <div className="home-container">
                <AsideMenu />
                <article>
                <center>
                <div className="cards-trade-container">
                        <div className="cartes">
                            <div className="header-trade-dapp">
                                <div className="tradeexchange"><h2>EXCHANGE</h2>
                                <h4>TRADE TOKENS IN AN INSTANT</h4></div>
                                
                            </div>
                            <div className="cards-trade-body">
                                <p>ONI TO HARVEST</p>
                                <p>Locked</p>
                            </div>  
                            <div className="cards-trade-body">
                                <p>In Wallet</p>
                                <p>Locked</p>
                            </div>                                                                                                          
                            <div className="cards-trade-footer">
                                <button className="unlock-button">Unlock Wallet</button>    
                            </div>
                            </div>  
                            </div>   

       </center>
      </article>
                </div>     
        </>
    );
}

export default Nft;