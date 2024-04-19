import image from "../../../assets/Home/Achievement/Icon (6).png"
import image2 from "../../../assets/Home/Achievement/Icon (7).png"
import image3 from "../../../assets/Home/Achievement/Icon (8).png"
import image4 from "../../../assets/Home/Achievement/Icon (9).png"
import style from "./index.module.css"
import {useEffect, useState} from "react";

const Achievement = ()=>{
    const[person, setPerson] = useState({
        name: "Tobi",
        cohort: "18",
        className: "Xplorers",
        
        hobby: "BasketBall"
    })
    const update= ()=>{
        {setPerson(prevState => {
            return{...prevState, cohort: "decorum"}
        })}
    }
    const[count, setCount] = useState(0);

    useEffect(()=> {
        setTimeout(()=> {
            setCount((count)=> count +1)
        }, 1000)
    })


    return(
        // <>

        //     <h1>My name is {person.name}!</h1>
        //     <p>
        //         I am from cohort {person.cohort} Name of the cohort is {person.className} and my Hobby is {person.hobby}
        //     </p>
        // </>
        <div className={style.mainCont}>
        
            <div>
                <h3 style={{color:"#4D4D4D", fontWeight: "600"}}>Helping a local<span style={{display: "block", color:"#4CAF4F", fontWeight: "600"}}>business reinvent itself</span></h3>
                <p style={{color: "#18191F"}}>We reached here with our hard work and dedication</p>
            </div>
            <div className={style.icon}>
                <div>
                    <img src={image} alt="logo"/>
                    <p style={{fontSize: "10px"}}>2,245,341<span style={{display: "block",fontSize: "9px"}}>Member</span></p>
                </div>
                <div>
                    <img src={image2} alt="logo"/>
                    <p style={{fontSize: "10px"}}>46,328<span
                        style={{display: "block", fontSize: "9px"}}>Club</span></p>
                </div>
                <div>
                    <img src={image3} alt="logo"/>
                    <p style={{fontSize: "10px"}}>828,867<span
                        style={{display: "block", fontSize: "9px"}}>Event Bookings</span></p>
                </div>
                <div>
                    <img src={image4} alt="logo"/>
                    <p style={{fontSize: "10px"}}>1,926,436<span
                        style={{display: "block", fontSize: "9px"}}>Payment</span></p>
                </div>
            </div>
        </div>
    )
}

export default Achievement
