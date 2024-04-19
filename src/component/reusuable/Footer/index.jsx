import FilledButton from "../FilledButton";
import style from "./index.module.css"
import logo from "../../../assets/Footer/Logo.svg"
import twitterLogo from "../../../assets/Footer/INSTAGRAM.png"
import webLogo from "../../../assets/Footer/WEB.png"
import youtube from "../../../assets/Footer/YOUTUBE.png"
import instagram from "../../../assets/Footer/Social Icons.svg"

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div>
            <div className={style.buttonDiv}>
                <FilledButton text_color={"#FFFFFF"} color={"#4CAF4F"} text={"Get A Demo ->"}/>
            </div>
            <div className={style.boxDiv}>
                <div style={{marginTop: "20px"}} className={style.nextCent}>
                    <div>
                        <img src={logo} alt="Company_Logo"/>
                    </div>
                    <div>
                        <p style={{color: "#FFFFFF"}}>Copyright © {date} Landify UI Kit.</p>
                        <p style={{color: "#FFFFFF"}}>All rights reserved</p>
                    </div>
                    <div className={style.socialIconDiv}>
                        <img src={instagram} alt="Instagram"/>
                        <img src={webLogo} alt="WebLogo"/>
                        <img src={twitterLogo} alt="twitter_logo"/>
                        <img src={youtube} alt="youtube_logo"/>
                    </div>
                </div>
                <div className={style.innerBox}>
                    <div>
                        <h3>Company</h3>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Pricing</p>
                        <p>Testimonial</p>
                    </div>
                    <div>
                        <h3>Support</h3>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>
                    <div>
                        <h3>Stay up to Date</h3>
                        <input type={"text"} placeholder="Your email address"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;
