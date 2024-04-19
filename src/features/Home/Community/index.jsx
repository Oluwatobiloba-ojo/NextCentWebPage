import style from "./index.module.css"
import {Data} from "./data";
const Community = ()=>{
    return(
        <div>
            <div className={style.innerCont}>
                <h3 style={{fontSize: "36px", fontWeight: "600", color: "#4D4D4D"}}>Manage your entire community<span style={{display:"block"}}>in a single system</span></h3>
                <p style={{color: "#4D4D4D", fontSize: "16px", fontWeight: "400"}}>Who is Nexcent suitable for</p>
            </div>
            <div className={style.Association}>
            {Data.map((value) => {
                return(
                    <div className={style.imageCont}>
                        <img src={value.image} alt="image" className={style.image}/>
                        <h3 style={{fontSize: "35px", fontWeight: "600", color: "#4D4D4D"}}>{value.title}</h3>
                        <p style={{color: "#717171"}}>{value.body}</p>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Community
