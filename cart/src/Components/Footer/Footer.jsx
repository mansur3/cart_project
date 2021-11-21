import styled from "styled-components";

const Footer = () => {
    const Container = styled.div`
        width: 100%;
        // height: 400px;
        border : 1px sold black;
        background-color: #f5f5f7;
    `
    const Wrapper = styled.div`
    
        width: 1200px;
        margin: auto;
        // border : 1px solid black;
    `
    const Div = styled.div`
        width: 100%;
        display: grid;
        grid-template-columns: 20% 20% 20% 20% 20%;
        padding: 30px;


    `
    const Divone = styled.div`
        margin-left: 20px;
    `
    const Divtwo = styled.div`
        margin-left: 20px;

    `
    const Divthree = styled.div`
         margin-left: 20px;
    
    `
    const Divfour = styled.div`
        margin-left: 20px;
    
    `
    const Divfive = styled.div`
        margin-left: 20px;

    `
    return (
        <Container>
            <Wrapper>
                <Div>
                    <Divone>
                        <h3>Shop and Learn</h3>
                        <p>Store</p>
                        <p>Mac</p>
                        <p>iPad</p>
                        <p>iPhone</p>
                        <p>Watch</p>
                        <p>AirPods</p>
                        <p>TV & Home</p>
                        <p>iPod touch</p>
                        <p>AirTag</p>
                        <p>Accessories</p>
                    </Divone>
                    <Divtwo>
                        <h3>Services</h3>
                        <p>Apple Music</p>
                        <p>Apple TV+</p>
                        <p>Apple Arcade</p>
                        <p>iCloud</p>
                        <p>Apple One</p>
                        <p>Apple Books</p>
                        <p>Apple OPodcasts</p>
                        <p>App Store</p>
                        <br />
                        <h3>Account</h3>
                        <p>Manage Your Apple ID</p>
                        <p>Apple Store Account</p>
                        <p>iCloud.com</p>
                    </Divtwo>
                    <Divthree>
                        <h3>Apple Store</h3>
                        <p>Ways to Buy</p>
                        <p>Apple Trade in</p>
                        <p>Recycling Programme</p>
                        <p>Order Status</p>
                        <p>Shopping Help</p>
                    </Divthree>
                    <Divfour>
                        <h3>For Business</h3>
                        <p>Apple and Business</p><br />
                        <h3>For Education</h3>
                        <p>Apple and Education</p>
                        <p>Shop for Education</p>
                        <p>Shop for University</p><br />
                        <h3>For Healthcare</h3>
                        <p>Apple in Healthcare</p>
                        <p>Health on Apple Watch</p>
                    </Divfour>
                    <Divfive>
                        <h3>Apple Values</h3>
                        <p>Accessibility</p>
                        <p>Environment</p>
                        <p>Privacy</p>
                        <p>Supplier Responsibility</p><br />
                        <h3>About Apple</h3>
                        <p>Newsroom</p>
                        <p>Apple Leadership</p>
                        <p>Career Oppurtinitues</p>
                        <p>Investors</p>
                        <p>Ethics & Compliance</p>
                        <p>Events</p>
                        <p>Contact Apple</p>
                    </Divfive>
                </Div>
                <div>More ways to shop: Find a retailer near you. Or call 0008000 040 1966.</div>
                <hr />
                <div>
                    CopyRight @ 2021 Apple Inc. All Rights reserved.        Privacy Policy   |  Terms of Use    |    Sales Policy    |    Legal   |   Site Map                               India
                </div>
            </Wrapper>
        </Container>
    )
}

export {Footer};