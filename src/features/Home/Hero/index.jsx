import FilledButton from "../../../component/reusuable/FilledButton";
import image from "../../../assets/Home/Hero/Illustration.svg"
import style from "./index.module.css"

const Hero = () =>{
    return(
        <div className={style.mainCont}>
            <div className={style.innerDiv}>
                <div>
                    <h1 style={{color: "#4D4D4D", fontWeight: "600", fontSize: "64px"}}>Lessons and insights<span style={{display: "block", color: "#4CAF4F"}}>
                        from 8 years</span></h1>
                    <p style={{color: "#4D4D4D"}}>Where to grow your business as a photographer: site or social media?</p>
                </div>
                <FilledButton text={"Register"} color={"#4CAF4F"} text_color={"#FFFFFF"}/>
            </div>
            <div className={style.heroImg}>
                <img src={image} alt="illustration"/>
            </div>
        </div>
    )
}

export default Hero;
