import styled from "styled-components";

export const Container = styled.div`
    height: 80vh;
   
    display: flex;
    align-items: center;
    justify-content: center;

    form{
        height: auto;
        padding: 50px;
        width: 400px;
        background-color: #fff;

        > input{
            width: 100%;
            padding: 12px;
            margin: 10px 0;
        }
    }

`;

export const ButtonGroup = styled.div`

    > button{
        margin: 5px;
        border: none;
        width: 100px;
        padding: 12px;
        width: 46%;
        cursor: pointer;
    }
`;