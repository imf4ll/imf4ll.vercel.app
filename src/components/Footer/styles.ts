import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.5rem;
  margin-top: -0.25rem;

  span {
    font-size: 11pt;
  }

  span:first-of-type {
    color: #FFAAAA;
  }

  .lines {
    span:first-of-type {
      color: #AAAAFF;
    }

    span:last-of-type {
      color: #FFAAAA;
      font-weight: 500;
    }
  }
`;
