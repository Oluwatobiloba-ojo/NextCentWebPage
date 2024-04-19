import image from "../../../assets/Home/PixelGrade/Frame 35.png"
import FilledButton from "../../../component/reusuable/FilledButton";
import style from "./index.module.css"

const PixelGrade = () => {
    return (
        <div className={style.mainCont}>
            <div className={style.imageCont}>
                <img src={image} alt="pixel_image"/>
            </div>
            <div style={{marginTop: "70px"}}>
                <h2 style={{color: "#4D4D4D", fontWeight: "400px"}}>The unseen of spending three years at Pixelgrade</h2>
                <p style={{color : "#717171"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <FilledButton text_color={"#FFFFFF"} text={"Learn More"} color={"#4CAF4F"}/>
            </div>
        </div>
    )
}


export default PixelGrade
