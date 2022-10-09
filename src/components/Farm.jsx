import AsideMenu from './AsideMenu';

function Farm () {
    return (
        <>
            <div className="home-container">
                <AsideMenu />
                <article>
                <section class="info">
                <h2><center>Money Farm</center></h2>
                <h2><center>Stake Liquidity Pool (LP) tokens to earn.</center></h2>
                <div class="contenedorfarm">  
                </div>
            </section>
        <br>
        </br>
        <div className="cartas">
                    <h3>
                       EARN UP TO
                    </h3>
                    <h1>124.67% APR</h1>
                    <h3>
                    IN MONEY FARMS
                    </h3>
                </div>  
                <div className="cartos">
                    <h3>
                    EARN
                    </h3>
                    <h1>MONEY</h1>
                    <h3>
                    IN POOLS
                    </h3>
                </div> 
                <div className="cartas">
                    <h3>
                    LOTTERY WITH
                    </h3>
                    <h1>$4</h1>
                    <h3>
                    UP FOR GRABS
                    </h3>
                </div>  
      </article>
                </div>     
        </>
    );
}

export default Farm;