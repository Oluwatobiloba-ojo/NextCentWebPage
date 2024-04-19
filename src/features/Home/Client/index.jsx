import style from "./index.module.css"
import image1 from "../../../assets/Home/Client/Logo.png"
import image2 from "../../../assets/Home/Client/Logo (1).png"
import image3 from "../../../assets/Home/Client/Logo (2).png"
import image4 from "../../../assets/Home/Client/Logo (3).png"
import image5 from "../../../assets/Home/Client/Logo (4).png"
import image6 from "../../../assets/Home/Client/Logo (5).png"
import image7 from "../../../assets/Home/Client/Logo (6).png"
const Client = ()=>{
    return(
        <div>
            <div className={style.innerDiv}>
                <h3 style={{color: "#717171", fontSize: "30px", fontWeight: "600"}}>Our Clients</h3>
                <p style={{color: "#717171"}}>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className={style.imageIcon}>
                <img src={image1} alt="image"/>
                <img src={image2} alt="image"/>
                <img src={image3} alt="image"/>
                <img src={image4} alt="image"/>
                <img src={image5} alt="image"/>
                <img src={image6} alt="image"/>
                <img src={image7} alt="image"/>
            </div>
        </div>
    )
}

export default Client