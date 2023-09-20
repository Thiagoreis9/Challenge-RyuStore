import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import styled from "styled-components";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    background-color: var(--delete-color);
    color: #FFFFFF;
    font-weight: bold;

    padding: 3px 5px;
    font-size: 10px;

    position: absolute;
    left: 15px;
    top: 50%;

`

const Container = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
`

export function CartControl(){

    const { value } = useLocalStorage('cart-items', [])

    return(
        <Container>
            <CartIcon/>
            {value.length && <CartCount>{ value.length }</CartCount>}
        </Container>
    )
}