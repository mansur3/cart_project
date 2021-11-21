import styled from "styled-components"


const FAQ = () => {
    const C = styled.div`
        width: 100%;
        background-color: #f5f5f7;
    `
    const Wrapper = styled.div`
    
    width: 1200px;
    margin: auto;
    padding: 30px;
    // border : 1px solid black;
    background-color: white;
    
`
    const Container = styled.div`
        padding: 30px;
    `
    const Blue = styled.span`
        color : blue;
    `

    return (
        <C>
        <Wrapper>
            <Container >
                <h1>Frequantly Asked Quenstions</h1><br />
                <h3>Where can I purchase the Apple Protection Plan? </h3>
                <p>The Apple Care Protection Plan is available at the <Blue>Apple Online Store</Blue> andmany <Blue>Aple-authorised resellers and wireless service providers.</Blue></p>
                <br />
                <h3>How do I initiate repai service undr the AppleCare Protection Plan? </h3>
                <p>
                    <ul>
                        <li>Carry-in service. Carry your product into an <Blue>Apple Authorised Service Provider</Blue></li>
                        <li>ONsite service. <Blue>Contact us</Blue> and we'll help you arraigne an Apple-authorised repair for your desktop Mac at your location, at no additional charge.</li> 
                        <li>Do-it-Yourself service. <Blue>Contact us</Blue> and we may be ab le to send you what you need to servie your own product, such as accessories.</li>
                    </ul>
                </p>
                <p>The Apple Care protection Plan for Mac, for iPod and for Apple TV provice global repair coverage. Service wil be limited to the option available country where service is requested. Service options, parts availabilityand response times vary by country.</p><br />
                <p>All repairs will be completed using genuine Apple parts for repairs service. All repairs are performed by Apple-authorised technicians.</p><br />
                <p>Please see the Apple Care protection Plan Terms and Conditions for complete details.</p><br />
                <h3>Is the AppleCare Protection Plan transferable? </h3>
                <p>Yes. If yo uchooe to sell or give away your Apple product, you can also transfer the ownership of the AppleCare Protection Plan. Please see the <Blue>Terms and Conditions </Blue> for complete details.</p><br />
                <h3>When I purchase the AppleCare Protection Plan, do I need to register it?</h3>
                <p>In most cases, if you purchase the AppleCare protection Plan at the same time as your Apple hardware from selected Apple resellers, you will not need to register it as your AppleCare agreement will be automatically registered.</p>
                <p>With automatic registration, you will receive a proof of coverage, either immediately in the form of a reciept that indicated the end date of your AppleCare product coverae, or within 30 days in the form of a Proof or Coverage certificate.</p>
                <p>You'll need to registry yoru AppleCare Protectiion Plan only if you puschase the plan and yoru covered product separately, or if you puschase your hardware from a reseller who does not automatic ally register the plan.</p>
                <p>You can register your AppleCare Protection plan here to contact Apple at the phone number included in yoru AppleCare protection Plan package.
                    To verity that your hardware is covered undr the AppleCareprotection Plan, click here. The registration process can take up to 24 hors to be visible Apple Systems.

                </p>
                <p>For examp,e afer you register, Apple will have hardware, AppleCare Protection Plan and personal contact information on file. When you contact Apple for service or support, Apple can acess yoru information straight away and start addreesing yoru issue, ratherthan spending time verifying your eligibility.</p><br />
                <h3> How can I verify how much coverage I have left?</h3>
                <p>You can verigy your coverage <Blue>Here.</Blue></p>
            </Container>
        </Wrapper>
        </C>
    )
}


export {FAQ}