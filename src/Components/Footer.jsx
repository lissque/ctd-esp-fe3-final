const footerStyle = {
  backgroundColor: "white",
  position: "fixed", 
  bottom: 0, 
  left: 0,
  width: "100%", 
  display: "flex", 
  flexDirection: "row",
  justifyContent: "center", 
  alignItems: "center"
}

const Footer = () => {
  return (
    <footer style={footerStyle} >
        <p>Powered by</p>
        <img src="../../public/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer