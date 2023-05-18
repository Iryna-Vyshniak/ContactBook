import styled from 'styled-components';

export const CloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 50%;
  color: ${props => props.theme.colors.black};
  background-color: transparent;
  box-shadow: ${p => p.theme.shadows.boxShadow};
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: inset -1px -1px 1px #ffffff, inset 1px 1px 1px #8e9aaf;

    svg {
      fill: ${p => p.theme.colors.black};
      stroke: ${p => p.theme.colors.black};
    }
  }

  &:active {
    background-color: ${p => p.theme.colors.white};
    svg {
      fill: ${p => p.theme.colors.black};
      stroke: ${p => p.theme.colors.white};
    }
  }
`;

export const ModalPicture = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 0;
  object-fit: cover;
  object-position: center;
`;

export const PictureDescr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  width: 100%;
  height: auto;
`;

export const Button = styled.button`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 50%;
  color: ${props => props.theme.colors.black};
  background-color: transparent;
  box-shadow: -2px -2px 5px #fff, 3px 3px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: inset -1px -1px 3px #fff, inset 1px 1px 3px rgba(0, 0, 0, 0.1);

    svg {
      fill: ${p => p.theme.colors.black};
      stroke: ${p => p.theme.colors.black};
    }
  }

  &:active {
    background-color: ${p => p.theme.colors.white};
    box-shadow: inset -1px -1px 3px #fff, inset 1px 1px 3px rgba(0, 0, 0, 0.1);
    svg {
      fill: ${p => p.theme.colors.black};
      stroke: ${p => p.theme.colors.white};
    }
  }
`;

export const PhotoWrap = styled.div`
  margin: 0 auto;
  padding: 10px;
  max-width: 100%;
  width: 320px;
  height: 320px;
  border-radius: 50%;
`;

export const BorderOutside = styled.div`
  padding: 7px;
  margin: 0 auto;
  width: 170px;
  border-radius: 50%;
  border: none;
  margin-bottom: 10px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;

  &:hover,
  &:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }

  @media screen and(min-width:768px) {
    margin-bottom: 15px;
  }
`;
export const BorderInside = styled.div`
  padding: 7px;
  border: none;
  border-radius: 50%;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;

  &:hover,
  &:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
`;
export const PhotoThumb = styled.div`
  margin-bottom: 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
`;
