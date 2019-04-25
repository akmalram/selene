import styled from 'styled-components';
import { media } from '../../utilities/mediaqueries';

const SearchBarHeight = '3.4rem';


export const SearchInput = styled.input`
    height: ${SearchBarHeight};
    border: 2px solid ${({theme}) => theme.colors.primary};
    outline: none;

    padding: 1rem 0 1rem 1.5rem;
    border-radius: 1.5rem;

    font-size: 1.8rem;

    max-width: 0;
    padding: 0;
    border: none;

    transition: all .4s ease-in-out;


    ::placeholder {
        color: #999;
        font-style: italic;
    }

    ${media.lg`
        max-width: 20rem;
        padding: 1rem 0 1rem 1.5rem;
        border: 2px solid ${({theme}) => theme.colors.primary};
    `}
`;

export const SearchSubmit = styled.button`
    width: ${SearchBarHeight};
    height: ${SearchBarHeight};
    
    border-radius: 50%;
    border: none;
    background: transparent;
    position: relative;
    outline: none;
    
    &::after {
        content: "";
        display: block;
        width: 3px;
        height: 100%;
        background: ${({theme}) => theme.colors.secondary};

        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;

        transition: 
            transform .3s ease-in-out,
            opacity .3s ease-in-out;
        opacity: 0;
        transform: translateX(1.5rem);

        ${media.lg`
            transform: translateX(.3rem);
            opacity: 1;
        `}
    }
`;

export const SearchWrapperBtn = styled.button`  
    display: block;
    background: transparent;
    border: none;

    form {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ${media.lg`
        padding: .5rem 0;
        align-self: flex-end;
    `}

    &:hover ${SearchInput} {
        max-width: 20rem;
        padding: 1rem 0 1rem 1.5rem;
        border: 2px solid ${({theme}) => theme.colors.primary};
    }
    &:hover ${SearchSubmit}::after {
        transform: translateX(.3rem);
        opacity: 1;
    }

    &:focus-within ${SearchInput} {
        max-width: 20rem;
        padding: 1rem 0 1rem 1.5rem;
        border: 2px solid ${({theme}) => theme.colors.primary};
    }
    &:focus-within ${SearchSubmit}::after {
        transform: translateX(.3rem);
        opacity: 1;
    }
`;