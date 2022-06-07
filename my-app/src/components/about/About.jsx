import "./about.css"
import Award from "../../img/award.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Highly motivated Full Stack Web Developer with experience in web applications and production support.
                    Committed to problem solving through proactive resourcefulness and strategic creativity.
                </p>
                <p className="a-desc">
                    Highly motivated Full Stack Web Developer with experience in web applications and production support.
                    Committed to problem solving through proactive resourcefulness and strategic creativity.
                    Team oriented and dedicated to leading with service. Graduated from the University of Arizona with a Certificate of Completion in Full Stack Web Development in May of 2022.
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title"> Full Stack Web Development 2022</h4>
                        <p className="a=award-desc">
                            My Certificate of completion, completed on May 27th with 
                            240 Program Hours.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About