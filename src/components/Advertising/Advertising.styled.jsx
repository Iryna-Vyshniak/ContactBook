import styled, { keyframes } from 'styled-components';

const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const Text = styled.div`
  position: relative;
  display: inline-block;
  white-space: wrap;
  overflow: hidden;
  border-right: 0.15em solid transparent;
  animation: ${typingAnimation} 300ms steps(40);
`;
