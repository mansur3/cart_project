import styled  from "styled-components";
import {useState, useEffect} from "react";

const Mac = () => {

    const getMac = async () => {
        let res = await fetch("http://localhost:3001/mac",{
            method : "GET",
            headers : {
                "Content-Type": "application/json"
            }
        })
        let data = await res.json();
        setMac(data);

        // return data;
    }
    const [mac, setMac] = useState([])

    // getMac();


    useEffect(() => {
        getMac();
    }, [])
    

    const C = styled.div`
        width: 100%;
        background-color: #f5f5f7;
    `
    const Wrapper = styled.div`

        width: 1200px;
        margin: auto;
        padding: 30px;
        margin-top: 30px;
        // padding-top: 30px;

        border : 1px solid black;
        background-color: white;
        display: grid;
        grid-template-columns: 33% 33% 33%;


    `
    const Container = styled.div`
        padding: 30px;
        // border : 1px solid black;
        display: grid;
        grid-template-rows : 40% 60%;
        // grid-gap: 5%;
    `
    const Image_container = styled.div`
        width: 100%;
        height: 100%;
    `
    const Image = styled.img`
        width: 100%;
        height: 100%;
    `
    const Text_container = styled.div`
        width: 100%;
        height: 100%;
    `
    const Blue = styled.span`
        color : blue;
    `



    return (
        <C>
            <Wrapper>
                {
                    mac.map((e) => (
                        <Container key = {e.id}>
                            <Image_container>
                                <Image src = {e.image} alt = "image" />
                            </Image_container>
                            <Text_container>
                                <h2>{e.name}</h2>
                                <h3>Price : ${e.price}</h3>
                                <p style = {{marginTop: "-10px"}}>Processor :- {e.chip}</p>
                                <p style = {{marginTop: "-10px"}}>CPU :- {e.CPU}</p>
                                <p style = {{marginTop: "-10px"}}>GPU:- {e.GPU}</p>
                                <p style = {{marginTop: "-10px"}}>Memory :- {e.memory} TB </p>
                                <p style = {{marginTop: "-10px"}}>Storage:- {e.storage} TB</p>
                                <p style = {{marginTop: "-10px"}}>Display:- {e.display} "</p>
                                <p style = {{marginTop: "-10px"}}>Battery :- {e.battery} hours </p>
                                <p style = {{marginTop: "-10px"}}>Camera :- {e.camera} </p>
                                <p style = {{marginTop: "-10px"}}>Weight :- {e.weight}</p>
                                <p style = {{marginTop: "-10px"}}>Touch :- {e.touch}</p>
                                <p style = {{marginTop: "-10px"}}>Connectivity :- {e.wireless}</p>
                            </Text_container>
                        </Container>
                    ))
                }
                
                {/* <Container></Container>
                <Container></Container> */}

            </Wrapper>
        </C>
    )
}

export {Mac};