import styled from "styled-components";



const About = () => {


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
                <Container>
                    <h1>Apple Inc.</h1>
                    <hr />
                    <p>
                        "Apple(company)" redirects here. For other companies. see  <Blue>Apple (disambiguation) & Organisations and Companies.</Blue>
                        Apple Inc. Is an American multinational technology company that specializes in consumer electronics, computer software and online service. Apple is the <Blue>largest information technology company</Blue> by revenue (totaling $274.5 billion in 2020) and , since january 2021, the <Blue>world's most valuable company.</Blue>
                        As of 2021, Apple is the <Blue>forty-largest</Blue> PC vendor by unit sales and foruth-largest smartphone manufacturer.
                        it is one of the <Blue> Big Five</Blue> American <Blue>Information technology </Blue> companyes. alongside <Blue>Amazon, google (Alphabet), Facebook (meta), and Microsoft.</Blue>.
                    </p>
                    <p>
                        Apple was founded in 1976 by <Blue>Steve jobs, Steve Wozaniak and Ronald Wayne</Blue> to develop and sell Wozniak's <Blue>Apple | </Blue> personal computer. It was incorpoirated by jobs and Wozniak as Apple Computer, INC. IN 1977, and sales of its computers, among them the <Blue>pple ||</Blue>, grew quickly . It went public in 1980 to instant financial success. Over the next few years, Apple shipped new computers featuring innovative <Blue>Graphical user interfaces</Blue> s
                        Such as the <Blue>Original Macintosh, </Blue> announced in a critically acclaimed advertisement, "1984", directed by Ridley Scott. The high cost of its products and limited application library caused problems, as did power struggles between executives. in 1985 Wozniak departed Apple amicably , while jobs resigned to found <Blue>NeXT</Blue> taking some Apple employees with him.
                    </p>
                    <p>
                        As the market for personal computere expanded and evolved throughout the 1990s, Apple lost considerable <Blue>market share</Blue> to the lower-priced duopoly or <Blue>Microsoft Windows</Blue> on <Blue>Intel PC clones</Blue>. the board recruited CEO gil Amelio, who prepared the struggling company for eventual sucess with extensive reforms, product focus and layoffs in his 500-day tenure. In 1997, Amelio bought NeXT to resolve Apple's unsuccessful <Blue>Operating-sustem</Blue> strategy and entice Jobs back to the company; he replaced Amelio. Apple became profitable again through a number of tactics. First, a revitalizing campaign called <Blue>"think different"</Blue>
                         and by launching the iMac and iPod. In 2001, it opened a retall cahin, the <Blue>Apple Stores,</Blue> and has <Blue>acquired numerous companies</Blue> to broaden its software protfolio. In 2007, the company launched the iPhone to critical acclaim and financial sucess. Jobs resigned in 2011 for health reasons, and died two mouths later. He was succeeded as CEO by Tim Cook.
                    </p>
                    <p>
                        The company receives significant Criticism regarding the labor practices of tis contractors, its environmental pratices, and its business ethics, including <Blue>anti-competitve behavior</Blue> and materials sourcing. in August 2018, Apple became the first publicly traded U.S. Company to ve valued at over $1 trillion, and two lyers later, the first valued at over $2 trillio. The company enjoys a high level of brand loyalty, and it ranked as the worlds most valuable brand; as of janury 2021, there are 1.65 billion Apple products in active use.
                    </p>
                </Container>
            </Wrapper>
        </C>
    )
}

export {About};