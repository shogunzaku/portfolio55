import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Linkedin from "../../img/linkedin.png";
import Github from "../../img/github.png";
import { useRef } from "react";

const Contact = () => {
    const formRef =useRef()

const handleSubmit = (e)=>{
    e.preventDefault()
}
    
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact me here </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +1 (520) 340 6282
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            shogunzaku@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Linkedin} alt="" />
                            linkedin.com/in/antonio-camarena-a5591b22b
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Github} alt="" />
                            https://github.com/shogunzaku
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Reach out to me with these links!!!</b>Cell, Email, Linkedin and Github are great ways
                        to contact me and see more of my info.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="10" placeholder="Message" name="message" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact 