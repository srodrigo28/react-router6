import styled from "styled-components";

export const Container = styled.div`
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavItem = styled.li`
    display: flex;
    font-size: 40px;
    transition: 1s;
    
    a{
        color: #fff;
        padding: 20px;
        text-decoration: none;
        transition: 1s;
    }
    &:hover{
        background: blueviolet;
        border-radius: 10px;
    }
`