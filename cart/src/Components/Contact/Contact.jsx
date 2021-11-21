import styled from "styled-components";


const Contact = () => {


    const Wrapper = styled.div`
    
        width: 1200px;
        margin: auto;
        padding: 30px;
        
    `
    const Heading = styled.div`
        font-weight: bolder;

        font-size: 50px;
        text-align : center;
    `
    const Body = styled.div`
        width: 100%;
        display : flex;
        padding: 20px;
        flex-wrap: wrap;
    `
    const Left = styled.div`
        width: 48%;
       
    `
    const Right = styled.div`
        width: 48%;
        
    `

    const Blue = styled.span`
        color : blue;
    `
    const Contact = styled.div`
        width: 400px;
        // height: 200px;
        text-align: center;
        background-color: lightgray;
        margin: auto;
    `



    return (
        <Wrapper>
            <Heading >
                Contacting Apple
            </Heading>
            <Body>
                <Left>
                    <h1>Saless and Product inquiries</h1>
                    <h2>Apple Online Store</h2>
                    <p>Apple.com is a convenient place to puchase apple products
                        and accessories frorm Apple. YOu can buy online or call 000800 040 1966.
                    </p>
                    <p>
                        You can get informatin about an order you placed on the Apple online Store 
                        throuogh the Order Status page. If you prefer, you can also get order status or make changes by phone at 0008000 040 1966.
                    </p>
                </Left>
                <Right>
                    <h1> </h1>
                    <h2>How to Buty to Education</h2>
                    <p>If you are a student or teacher, visit the Apple Store for Education or 
                        call 0008000 040 1966</p>
                    <h2>Find Apple Authorised Resellers</h2>
                    <p>Use our Reseller Locator to find an Apple Authorised Reseller in India</p>
                    <p>Apple Authorised Resellers offer industry expertise,
                        Multi-platform services and Mac-based solutions or a wide variety or organisations.
                    </p>
                </Right>
            </Body>
            <hr />
            <Body>
                <Left>
                    <h1>Product and Services Support</h1>
                    <h2>Contact Apple Support</h2>
                    <p> 
                        Need Service or Support? Start you requrest online 
                        and we'll finnnd you a solution.
                    </p>
                    <p>
                        More ways to get Help:
                        <ul>
                            <li>Contact ITnes Store support</li>
                            <li>See all worldwide support telephone numbers</li>
                            <li>Contact a mobile carrier</li>
                            <li>Find an Apple Authroised Service Provider</li>
                        </ul>
                    </p>
                    <p>
                        Most apple products are eligibla for 90 days of complimentary tec hnical support. Online technical support for apple proeducts is available beyond the initial 90 days.
                    </p>
                </Left>
                <Right>
                    <h1> </h1>
                    <h2>Lost or Stolen Apple products</h2>
                    <p>If you have lost or found an Apple product, contact yur local police station or report it. You can also find a list of serial numbers associated with your  Apple ID and get 
                        and get informatin about using find My Iphone for IPhone , IPadd, iPod touch or Mac.

                    </p>
                    <h2>   Legal</h2>
                    <p>
                        For legal questions, please go to <Blue>apple.com/legal/contact </Blue> contact and select from the drop-down menu provided. To
                        report suspected counterfeit or knockoff products, or other forms of suspected infrigement of Apple intellectual property, select Counterfeits & Knockoffs from the drop-down menu. 
                    </p>
                    <h2>Report a Grievance n India</h2>
                    <p> 
                        Apple Customers in India an raise complaints in relation to App Store matters at 
                        <Blue>Apple.co/IndiaGrienvanceintermediaries</Blue>
                    </p>
                    <p>For complaints in relation to Apple TV app, Apple TV+ and iTnes mattters, please go to <Blue>Apple.co/IndiaGrievanceDigitalContent</Blue></p>
                    <p>
                        We will acknoledge the receipt of your complaint and, if appropriate, provide you with a reference number to track your complaint. The above Grievance process is in complaint. The above Grievance process in relatin tothe "information Technology (Intermediary Guidlines and digital media Ethics code) Rules, 2021".
                    </p>
                    <p>Please ifnd the lates <Blue>Monthly Grievance Disclosure.</Blue></p>
                </Right>
            </Body>
            <Contact>
                <h1 style = {{fontSize: "45px"}}>Registered Office</h1>
                <p>19th  Floor, Concorde Tower C,</p>
                <p>UB City, NO. 24, Vittal Mallya Road,</p>
                <p>Bangalore 560001, india</p><br />
                <p>CIN : U30007KA1996PTC019630</p><br />
                <p>Telephone : 91 80 40455150</p>
                <p>Fax : 91 8040455197</p>
                <br />
                <Blue>bangalore_admin@apple.com</Blue>
            </Contact>
        </Wrapper>
    )
}

export {Contact};