import videoHomePage from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay loop muted>
                <source src={videoHomePage} type="video/mp4" />
            </video>
            <div className="homepage-content">
                <div className="hc__title">There's a better way to ask</div>
                <div className="hc__desc">You don't want to make a boring form. 
                    And your audience won't answer one.
                    Create a typeform instead-and make everyone happy.</div>
                <div>
                    <button className="hc__btn">Get's started. It's free</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
