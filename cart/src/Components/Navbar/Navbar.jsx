import styled from "styled-components";
import {Link} from "react-router-dom";

const Navbar = () => {

    const Wrapper = styled.div`
        width: 100%;
        height: 70px;
        background-color: rgba(0,0,0,0.8);
        color: white;
        border: 1px solid black;
        display: flex;
        

    `
    return (
        <Wrapper>
            <Link style = {{color: "white", fontWeight: "a", textDecoration: "none", paddingTop : "15px", marginLeft : "70px"}} to = "/"><img style = {{ width: "40px", height: "30px"}} src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Icon-Mac.svg/800px-Icon-Mac.svg.png" alt = "apple" /></Link>
            <Link style = {{color: "white", fontWeight: "a", textDecoration: "none", paddingTop : "15px", marginLeft : "70px"}}>Store</Link>
            <Link to = "/mac" style = {{color: "white", fontWeight: "a", textDecoration: "none", paddingTop : "15px", marginLeft : "70px"}}>Mac</Link>
            <Link to = "/ipad" style = {{color: "white", fontWeight: "a", textDecoration: "none", paddingTop : "15px", marginLeft : "70px"}} >iPad</Link>
            <Link to  = "/iphone" style = {{color: "white", fontWeight: "a", textDecoration: "none", paddingTop : "15px", marginLeft : "70px"}}>iPhone</Link>
            <Link style = {{color: "white", fontWeight: "a", textDecoration: "none", paddingTop : "15px", marginLeft : "70px"}}>Watch</Link>
            <Link style = {{color: "white", fontWeight: "a", textDecoration: "none", paddingTop : "15px", marginLeft : "70px"}}>AirPods</Link>
            <Link to = "/about" style = {{color: "white", fontWeight: "a", textDecoration: "none", paddingTop : "15px", marginLeft : "70px"}}>About</Link>
            <Link to = "/faq" style = {{color: "white", fontWeight: "a", textDecoration: "none", paddingTop : "15px", marginLeft : "70px"}}>FAQ</Link>
            <Link to = "/contact" style = {{color: "white", fontWeight: "a", textDecoration: "none", paddingTop : "15px", marginLeft : "70px"}}>Contact</Link>
            <Link style = {{color: "white", fontWeight: "a", textDecoration: "none", paddingTop : "15px", marginLeft : "70px"}}>Store</Link>
            <Link style = {{color: "white", fontWeight: "a", textDecoration: "none", paddingTop : "15px", marginLeft : "70px"}}><img style = {{ width: "40px", height: "30px", color: "white"}} src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Antu_amarok_cart_view.svg/640px-Antu_amarok_cart_view.svg.png" alt = "cart"  /></Link>

        </Wrapper>
    )
}

export {Navbar};