import React from 'react'

function Wrapper({children}) {
  return (
    <div style={{backgroundColor:"yellow" ,border:"1px solid red",padding:"5px"}}>{children}</div>
  )
}

export default Wrapper