import { Navigate, useNavigate } from "react-router-dom";
import videoHomePage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";

const HomePage = (props) => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const navigate = useNavigate();

    return (
        <div className="homepage-container">
            <video autoPlay loop muted>
                <source src={videoHomePage} type="video/mp4" />
            </video>
            <div className="homepage-content">
                <div className="hc__title">There's a better way to ask</div>
                <div className="hc__desc">
                    You don't want to make a boring form. And your audience
                    won't answer one. Create a typeform instead-and make
                    everyone happy.
                </div>
                <div>
                    {isAuthenticated !== true ? (
                        <button className="hc__btn" onClick={()=>{ navigate('/login') }}>
                            Get's started. It's free
                        </button>
                    ) : (
                        <button className="hc__btn" onClick={()=>{ navigate('/users') }}>
                            Do Quiz Now
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
