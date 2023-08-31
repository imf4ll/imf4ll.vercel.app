import styled from 'styled-components';

export const Container = styled.div`
  .line {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      font-size: 11pt;
      margin-top: 0.2rem;
    }

    :nth-child(-n+9) {
      margin-left: 0.55rem;
    }

    .line-count {
      color: #606077;
    }

    .line-content {
      color: #DDDDFF;
    }

    span {
      color: #DDDDFF;
    }

    a {
      text-decoration: none;
      color: #AAAAFF;
      transition: all ease 300ms;
    }

    a:hover {
      opacity: 0.6;
    }

    .title {
      font-weight: bold;
    }
  }
`;
