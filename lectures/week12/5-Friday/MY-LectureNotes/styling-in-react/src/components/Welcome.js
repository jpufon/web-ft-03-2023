import React from 'react'

const Welcome = () => {
  return (
    <>
    {/* <div style={{color:'purple', backgroundColor:'tomato', padding:'40px'}}>Welcome to our space</div> */}
    <div style={myStyles.h1Style}>Welcome to our space</div>

    <div style={myStyles.coreContent}>more styling</div>

    </>
  )
}
const myStyles = {
   h1Style :{
    color : 'purple'
   },
   coreContent: {
    backgrounColor: 'teal'
   }
}
export default Welcome
