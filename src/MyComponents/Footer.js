import React from 'react'

const Footer = () => {
    let footerstyle ={
    position: "relative",
    width: "100%",
    top: "100vh"
    }
  return (
<div>
<footer className="page-footer font-small bg-dark text-light" style = {footerstyle}>
    <div className="footer-copyright text-center py-3">© 2021 Copyright:
        <a href="/"> Todo's App.com</a>
  </div>

</footer>
</div>
  )
}

export default Footer