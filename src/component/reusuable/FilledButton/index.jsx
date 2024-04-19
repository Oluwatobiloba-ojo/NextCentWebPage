import style from "./index.module.css"

const FilledButton = ({text, color, text_color})=>{
    return(
        <div>
            <button style={{background: color, color: text_color}} className={style.filledButton}>
                {text}
            </button>
        </div>
    )
}

export default FilledButton