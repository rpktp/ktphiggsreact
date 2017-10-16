import styled, {css} from 'styled-components';


export const Button = styled.button`
  background-color: ${props => props.disabled ? props.theme.grayColorThree : props.theme.secondaryColor };
  color: ${props => props.disabled ? props.theme.white : props.theme.white };
  min-width: 96px;
  padding: 0 24px;
  border-radius: 24px;
  line-height: 48px;
  white-space: nowrap;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.6em;
  font-weight: bold;
  cursor: pointer;
  pointer-events: ${props => props.disabled ? 'none' : 'all' };
  border-style: unset;

  & svg {
    position: relative;
    top: 4px;

    & path {
      fill: ${props => props.disabled ? props.theme.white : props.theme.white };
    }
  }

  &:hover {
    background-color: ${props => props.theme.primaryColor ? props.theme.primaryColor : 'white' };
  }

  &:focus,
  &:active {
    background-color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : 'white' };
  }
`

export const ButtonGhost = Button.extend`
  background-color: transparent;
  color: ${props => props.disabled ? props.theme.white : props.theme.secondaryColor };
  border: 2px solid ${props => props.disabled ? props.theme.white : props.theme.secondaryColor };

  &:hover {
    color: ${props => props.disabled ? props.theme.white : props.theme.white };
    border: 2px solid ${props => props.disabled ? props.theme.white : props.theme.primaryColor };

    & svg {

      & path {
        fill: ${props => props.disabled ? props.theme.white : props.theme.white };
      }
    }
  }

  & svg {

    & path {
      fill: ${props => props.disabled ? props.theme.white : props.theme.secondaryColor };
    }
  }

  &:focus,
  &:active {
    color: ${props => props.disabled ? props.theme.white : props.theme.white };
    background-color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : 'white' };
    border: 2px solid ${props => props.disabled ? props.theme.white : props.theme.secondaryColor };
  }
`

export const ButtonDense = Button.extend`
  padding: 0 12px;
  line-height: 36px;

  & svg {

    & path {
      fill: ${props => props.disabled ? props.theme.white : props.theme.white };
    }
  }
`

export const ButtonSecondary = Button.extend`
  background-color: ${props => props.theme.accentColorOne ? props.theme.accentColorOne : 'white' };

  &:hover {
    background-color: ${props => props.theme.accentColorOne ? props.theme.accentColorOne : 'white' };
  }

  &:focus,
  &:active {
    background-color: ${props => props.theme.accentColorOneDarken ? props.theme.accentColorOneDarken : 'white' };
  }
`

export const ButtonSecondaryGhost = ButtonSecondary.extend`
  background-color: transparent;
  color: ${props => props.disabled ? props.theme.white : props.theme.accentColorOne };
  border: 2px solid ${props => props.disabled ? props.theme.white : props.theme.accentColorOne };

  & svg {

    & path {
      fill: ${props => props.disabled ? props.theme.white : props.theme.accentColorOne };
    }
  }

  &:hover {
    color: ${props => props.disabled ? props.theme.white : props.theme.white };

    & svg {

      & path {
        fill: ${props => props.disabled ? props.theme.white : props.theme.white };
      }
    }
  }

  &:focus,
  &:active {
    color: ${props => props.disabled ? props.theme.white : props.theme.white };
    background-color: ${props => props.theme.accentColorOneDarken ? props.theme.accentColorOneDarken : 'white' };
    border: 2px solid ${props => props.disabled ? props.theme.white : props.theme.accentColorOneDarken };

    & svg {

      & path {
        fill: ${props => props.disabled ? props.theme.white : props.theme.white };
      }
    }
  }
`

export const ButtonInverse = Button.extend`
  background-color: ${props => props.theme.white ? props.theme.white : 'white' };
  color: ${props => props.theme.primaryColor ? props.theme.primaryColor : 'white' };

  & svg {

    & path {
      fill: ${props => props.theme.primaryColor ? props.theme.primaryColor : 'white' };
    }
  }

  &:hover{
    background-color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : 'white' };
    color: ${props => props.theme.white ? props.theme.white : 'white' };

    & svg {

      & path {
        fill: ${props => props.theme.white ? props.theme.white : 'white' };
      }
    }
  }

  &:focus,
  &:active {
    color: ${props => props.theme.white ? props.theme.white : 'white' };
    background-color: ${props => props.theme.secondaryColorDarken ? props.theme.secondaryColorDarken : 'white' };
  }
`

export const ButtonInverseGhost = ButtonInverse.extend`
  background-color: transparent;
  color: ${props => props.disabled ? props.theme.white : 'white' };
  border: 2px solid ${props => props.disabled ? props.theme.white : props.theme.white };

  & svg {

    & path {
      fill: ${props => props.theme.white ? props.theme.white : 'white' };
    }
  }

  &:hover {
    color: ${props => props.disabled ? props.theme.white : props.theme.white };
    border: 2px solid ${props => props.disabled ? props.theme.secondaryColor : props.theme.secondaryColor };
  }

  &:focus,
  &:active {
    color: ${props => props.disabled ? props.theme.white : props.theme.white };
    background-color: ${props => props.theme.secondaryColorDarken ? props.theme.secondaryColorDarken : 'white' };
    border: 2px solid ${props => props.disabled ? props.theme.secondaryColorDarken : props.theme.secondaryColorDarken };
  }
`


