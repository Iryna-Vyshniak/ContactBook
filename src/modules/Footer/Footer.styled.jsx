import { styled } from 'styled-components';

export const FooterBlock = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 44px;

  padding-right: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[4]}px;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;

  color: ${props => props.theme.colors.black};
  text-shadow: 0 -0.4px 0.4px #ffffff, 0.4px 0.4px 0.4px #00000031;
  background-color: #ffffff;

  box-shadow: -1px -1px 7px -1px rgba(0, 0, 0, 0.4);

  backdrop-filter: blur(10.5px);

  > p {
    text-align: center;

    a {
      color: ${props => props.theme.colors.primary};
      text-shadow: 0 -1px 1px #ffffff, 1px 1px 1px #00000031;
      cursor: pointer;
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

      &:hover,
      &:focus {
        color: ${props => props.theme.colors.background};
        text-shadow: 0 -1px 1px #ffffff, 1px 1px 1px #00000031;
      }
    }
  }
`;
