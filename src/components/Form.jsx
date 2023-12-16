import React from "react"
import Input from "./Input";

const Form = () => {
     
     const [text,setText] = React.useState(""); 
     const render = React.useRef(1);
     function changeHandler(e){
           setText(e.target.value);
     }
     const inputRef = React.useRef();
     React.useEffect(()=>{
          render.current += 1 ;
     })
     const clickHandler = () => {
        console.log(inputRef.current)
        if(!inputRef.current.value) inputRef.current.focus()
        else alert(inputRef.current.value)
     }
     return (
      <>
        <Input type="text" onChange={changeHandler} ref={inputRef}/>
        <button style={{margin:"5px"}} onClick={clickHandler}>{text.length == 0 ? "Focus input":"Alert Text"}</button>
        <p>input text : {text}</p>
        <p>No. of Render : {render.current}</p>
        
      </>
     )
}

export default Form ;