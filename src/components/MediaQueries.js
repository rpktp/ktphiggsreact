import { css } from 'styled-components';

export const sizes = {
    xl: [1920],
    l: [1440, 1919],
    m: [768, 1439],
    s: [360,767],
    xs: [0,359]
}

export const media = Object.keys(sizes).reduce((acc, label) => {
    if(sizes[label].length > 1) { 
        acc[label] = (...args) => css`
            @media screen and (min-width: ${sizes[label][0] / 16}em) and (max-width: ${sizes[label][1] / 16}em) {
                ${css(...args)}
            }
        `
    } else {
        acc[label] = (...args) => css`
            @media screen and (min-width: ${sizes[label][0] / 16}em) {
                ${css(...args)}
            }
        `
    }
    return acc
}, {})
