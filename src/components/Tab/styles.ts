import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;

  svg {
    color: #9090AA;
  }

  p {
    font-size: 10.5pt;
    color: #9090AA;
  }

  .selected {
    svg {
      color: #AAAAFF;
    }

    p {
      color: #EEEEFF;
    }
  }

  .content {
    display: flex;
    align-items: center;
    gap: 0.65rem;
  }
`;
