import styled from 'styled-components';
import { media } from '../../utilities/mediaqueries';

export const MenuList = styled.ul`
    list-style: none;
    transition: all .5s ease-in-out;

    ${media.lg`
        margin: 0;
        max-height: 0;
        overflow: hidden;

        &.active {
            max-height: 50rem;
        }
    `}
`;

export const MenuItem = styled.li`
    display: inline-block;
    margin: 0 3rem;
    ${media.lg`
        display: block;
        margin: 1rem 0;
    `}
`;
export const MenuLink = styled.a`
    text-decoration: none;
    color: ${({theme}) => theme.colors.tertiary};
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: lowercase;
    position: relative;

    &:visited {
        color: black;
    }

    &::before {
        content: '';
        display: inline-block;
        position: absolute;

        width: 100%;
        height: 3px;

        background: ${({theme}) => theme.colors.secondary}

        left: 0;
        right: 0;
        bottom: 0;

        transition: 
            transform .4s ease-in-out,
            opacity .3s ease-in-out;
        
        transform: translateY(1.5rem);
        opacity: 0;
    }
    &:hover::before {
        transform: translateY(.5rem);
        opacity: 1;
    }
`;