import styled from 'styled-components';
import { media } from '../../utilities/mediaqueries';

export const MenuBtn = styled.div`
    width: 3rem;
    height: 3rem;
    border: 3px solid ${({theme}) => theme.colors.primary};
    border-radius: 5px;
    display: none;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    position: absolute;
    right: 5rem;
    top: 3rem;
    
    ${media.lg`
        display: flex;
    `}

    ${media.sm`
        right: 2rem;
        top: 1.5rem;
    `}
`;

export const MenuBtnLines = styled.span`
    width: 80%;
    height: 4px;
    background: ${({theme}) => theme.colors.primary};
    border-radius: 10px;
    transition: 
        opacity .3s ease-in-out,
        transform .3s ease-in-out; 

    .active & {
        &[data-count="1"] {
            transform: translateY(7px) rotate(-131deg);
        }
        &[data-count="2"] {
            transform: rotate(-21deg);
            opacity: 0;
        }
        &[data-count="3"] {
            transform: translateY(-9px) rotate(131deg);
        }
    }
`;