import style from "./index.module.css"
import logo from "../../../assets/Navbar/Logo.svg"
import FilledButton from "../FilledButton";


const Navbar = ()=>{
    return (
        <div className={style.mainCont}>
            <img src={logo} alt="company_logo"/>
            <div>
                <p>Home</p>
                <p>Service</p>
                <p>Features</p>
                <p>Product</p>
                <p>Testimonial</p>
                <p>FAQ</p>
            </div>
            <div style={{marginTop: "6px"}}>
                <FilledButton text={"Login"} color={"#F5F7FA"} text_color={"#4CAF4F"}/>
                <FilledButton text={"SignUp"} color={"#4CAF4F"} text_color={"#FFFFFF"}/>
            </div>
        </div>
    );
};


export default Navbar;

