import "./intro.css"
import Me from "../../img/me.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Antonio Camarena</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Full Stack Web Developer</div>
                            <div className="i-title-item">HTML</div>
                            <div className="i-title-item">CSS</div>
                            <div className="i-title-item">Javascript</div>
                            <div className="i-title-item">JSX</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        Highly motivated Full Stack Web Developer with experience in web applications and production support.
                        Committed to problem solving through proactive resourcefulness and strategic creativity. Team oriented and dedicated to leading with service.
                        Graduated from the University of Arizona with a Certificate of Completion in Full Stack Web Development in May of 2022.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img" />
            </div>
           </div>
    );
};

export default Intro