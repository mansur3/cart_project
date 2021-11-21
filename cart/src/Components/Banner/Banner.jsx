import styled  from "styled-components";



const Banner = () => {
    const Wrapper = styled.div`
        width: 100%;
        height: 300px;
        background: url("https://th.bing.com/th/id/OIP.5XOxnpOoI6OIclpu22ugMQHaDt?pid=ImgDet&rs=1");
        background-size: 100% 300px;
        background-repeat: no-repeat;
        color: white;
    `

    return (
        <Wrapper>This is static banner for now</Wrapper>
    )
}
export {Banner};