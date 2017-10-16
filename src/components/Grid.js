import styled, { css } from 'styled-components';
import { media } from './MediaQueries';

export const Container = styled.div`
    margin: 0 auto;
    width: 100%;

    ${media.xl`
        max-width: 1200px;
    `}

    ${media.l`
        max-width: 1200px;
    `}

    ${media.m`
        max-width: 1200px;
    `}

`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Col = styled.div`
    flex-grow: 1;
    box-sizing: border-box;
    overflow: hidden;

    ${media.xl`
        flex: ${props => props.xl ? '0 0 ' + ( 100 / 12 ) * props.xl +'%' : 'auto'};
        ${props => props.orderXL && css`
            order: ${props => props.orderL ? props.orderXL : 'auto'};
        `}
        ${props => props.offsetXL && css`
            margin-left:`+ ( 100 / 12 ) * props.offsetXL + `%;
        `}
    `}

    ${media.l`
        flex: ${props => props.l ? '0 0 ' + ( 100 / 12 ) * props.l +'%' : 'auto'};
        ${props => props.orderL && css`
            order: ${props => props.orderL ? props.orderL : 'auto'};
        `}
        ${props => props.offsetL && css`
            margin-left:`+ ( 100 / 12 ) * props.offsetL + `%;
        `}
    `}
    
    ${media.m`
        flex: ${props => props.m ? '0 0 ' + ( 100 / 12 ) * props.m +'%' : 'auto'};
        ${props => props.orderM && css`
            order: ${props => props.orderM ? props.orderM : 'auto'};
        `}
        ${props => props.offsetM && css`
            margin-left:`+ ( 100 / 12 ) * props.offsetM + `%;
        `}
    `}

    ${media.s`
        flex: ${props => props.s ? '0 0 ' + ( 100 / 12 ) * props.s +'%' : 'auto'};
        ${props => props.orderS && css`
            order: ${props => props.orderS ? props.orderS : 'auto'};
        `}
        ${props => props.offsetS && css`
            margin-left:`+ ( 100 / 12 ) * props.offsetS + `%;
        `}
    `}

    ${media.xs`
        flex: ${props => props.xs ? '0 0 ' + ( 100 / 12 ) * props.xs +'%' : 'auto'};
        ${props => props.orderXs && css`
            order: ${props => props.orderXs ? props.orderXs : 'auto'};
        `}
        ${props => props.offsetXs && css`
            margin-left:`+ ( 100 / 12 ) * props.offsetXs + `%;
        `}
    `}
`;
