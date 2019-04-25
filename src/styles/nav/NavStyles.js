import styled from 'styled-components';
import { media } from '../../utilities/mediaqueries';

export const Nav = styled.nav`
    min-height: 16rem;
    padding: 0 4.6rem;
    position: relative;

    align-items: center;
    justify-content: space-between;


    ${media.lg`
        min-height: 10rem;
        flex-direction: column;
    `}
`;

export const Logo = styled.div`
    ${media.lg`
        display: flex;
        justify-content: center;
        padding: .5rem 0;
    `}
`;