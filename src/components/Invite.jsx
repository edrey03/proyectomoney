import AsideMenu from './AsideMenu';

function Invite () {
    return (
        <>
            <div className="home-container">
                <AsideMenu />
                <article>
                    <br>
                    </br>
                <h2><center>Refer And Earn</center></h2>
                <div className="div-refer">
                        <div className=""><center><h4>Share the referral link below to invite your friends and earn 2% of your friends earnings FOREVER!</h4></center></div>
                        <button className="unlock-button">UNLOCK WALLET</button>
                        <div className=""><center><h5>Your will automatically get $ONI in your wallet as reward whenever the referred user Harvests/Withdraws from our ONI Farms and Fuel Pools.</h5></center></div>
                        </div>
                </article>
            </div>

        </>
    );
}

export default Invite;