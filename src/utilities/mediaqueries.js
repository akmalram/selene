import { css } from 'styled-components';

const _size = {
    sm: 576,
    md: 768,
    lg: 992,
    el: 1140
}

const media = {
    sm: (...args) => {
        return css`
            @media only screen and (max-width: ${_size.sm}px) {
                ${css(...args)}
            }
        `;
    },
    md: (...args) => {
        return css`
            @media only screen and (max-width: ${_size.md}px) {
                ${css(...args)}
            }
        `;
    },
    lg: (...args) => {
        return css`
            @media only screen and (max-width: ${_size.lg}px) {
                ${css(...args)}
            }
        `;
    },
    el: (...args) => {
        return css`
            @media only screen and (max-width: ${_size.el}px) {
                ${css(...args)}
            }
        `;
    },
}
export { media };