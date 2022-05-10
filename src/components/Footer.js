import React from "react";
// <Footer style ={{'position': 'absolute', 'left': '0','bottom': '0','width': '100%','height': '80px'}}/> в эп джиес   

var style = {
    backgroundColor: "rgb(153,102,203)",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "7px",
    position: "innerit",
    left: "0",
    bottom: "0px",
    height: "40px",
    
    color: "rgba(255, 255, 255, 0.445)",
    
    width: "100%",
    

}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
  position: "absolute",
  left: "0",
  bottom: "0",
  width: "100%",
  height: "80px",
}

function Footer() {
    return (
        <div stele ={phantom}>
          
            <div style={style}>
            2021-2022 © Wearel. Все права защищены. 
            </div>
        </div>
    )
}

export default Footer
