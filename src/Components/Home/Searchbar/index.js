import React from "react"
import styled from 'styled-components'

export default function Searchbar() {
    return <SearchbarContainer>
        <button>
            <img src='./public/Assets/icons8-menu-arredondado-100.png' />
        </button>
        <form>
            <input />
            <button>Procurar</button>
        </form>
    </SearchbarContainer>
}


const SearchbarContainer = styled.nav`
    padding: 10px;
    background-color: var(--main-color);
    display: flex;
    justify-content: space-between;

    form {
        display: flex;
        align-items: center;
        gap: 5px;

        button {
            border: none;
            border-radius: 2px;
            background-color: black;
            color: white;
            font-weight: 700;
        }
    }
`