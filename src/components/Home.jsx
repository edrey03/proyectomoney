import AsideMenu from './AsideMenu';

function Home () {
    return (
        <>
            <div className="home-container">
                <AsideMenu />
                <article>
                    <div className="div-time">
                        <div className="">
                        <button className="button2">Collect winnings</button>
                        </div>
                    <span class="sc-kHdrYz giTQXq">Massive burn in:</span>
                    <div className="circulos">
                        <div className="circulo"><svg id="svg1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradient1" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#43cdfc"></stop><stop offset="20%" stop-color="#40cbfd"></stop><stop offset="100%" stop-color="#2b80f5"></stop></linearGradient></defs><g fill="none" stroke="none"><circle cx="50" cy="50" r="47" stroke-width="5" stroke="url(#gradient1)"></circle><circle cx="50" cy="50" r="47" transform="rotate(90 50 50)" stroke-dashoffset="0, 314" stroke-dasharray=" 0, 314" stroke="#15181B" stroke-width="7"></circle></g></svg></div>
                        <div className="circulo"><svg id="svg1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradient1" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#43cdfc"></stop><stop offset="20%" stop-color="#40cbfd"></stop><stop offset="100%" stop-color="#2b80f5"></stop></linearGradient></defs><g fill="none" stroke="none"><circle cx="50" cy="50" r="47" stroke-width="5" stroke="url(#gradient1)"></circle><circle cx="50" cy="50" r="47" transform="rotate(90 50 50)" stroke-dashoffset="0, 314" stroke-dasharray=" 0, 314" stroke="#15181B" stroke-width="7"></circle></g></svg></div>
                        <div className="circulo"><svg id="svg1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradient1" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#43cdfc"></stop><stop offset="20%" stop-color="#40cbfd"></stop><stop offset="100%" stop-color="#2b80f5"></stop></linearGradient></defs><g fill="none" stroke="none"><circle cx="50" cy="50" r="47" stroke-width="5" stroke="url(#gradient1)"></circle><circle cx="50" cy="50" r="47" transform="rotate(90 50 50)" stroke-dashoffset="0, 314" stroke-dasharray=" 0, 314" stroke="#15181B" stroke-width="7"></circle></g></svg></div>
                        </div>

                        <div className=""><button className="button3">BUY MONEY</button></div>
                        <div className=""><button className="button3">+ADD MONEY TO</button></div>
                        <div className=""></div>
                    </div>

                    <div className="cards-dapps-container">
                        <div className="cards-dapp">
                            <div className="header-card-dapp">
                                <div className=""></div>
                                <div className=""></div>
                            </div>
                            <div className="cards-dapps-body"></div>                                                                                                            
                            <div className="cards-dapps-footer">
                                <button className="unlock-button">Unlock Wallet</button>    
                            </div>                                        
                        </div>
                        <div className="cards-dapp">
                            <div className="header-card-dapp">
                                <div className=""></div>
                                <div className=""></div>
                            </div>
                            <div className="cards-dapps-body"> </div>                                                                            
                            <div className="cards-dapps-footer">
                                <button className="collect-button">Collect winnings</button>
                                <button className="approve-button">Approve On</button>
                            </div>                        
                        </div>
                    </div>

                    
                    <div className="div-time">
                        <div className=""></div>
                        <div className=""></div>
                        <div className="div-time-grow"></div>
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                    <div className="div-right">
                        <div className=""><h2>FARMS AND STAKING</h2></div>
                        <div className=""></div>
                        <div className=""></div>
                        

                        </div>
                    <div className="div-left">
                        <p>YOUR LOTTERY WINNINGS</p>
                    </div>
                    <div className="">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                    <div className="">
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                </article>
            </div>
        </>
    );
}

export default Home;