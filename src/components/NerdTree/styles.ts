import styled from 'styled-components';

export const Container = styled.div`
  width: 14vw;
  height: 100%;
  margin-left: 0.5rem;

  .help, .upadir, .files {
    margin: 0;
    font-size: 10.5pt;
    color: #9090AA;
  }

  .help {
    font-style: italic;
  }

  .upadir {
    margin-top: 1.5rem;
  }

  .files {
    color: #AAAAFF;
    margin-top: 0.75rem;
  }

  .files-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.75rem;
    margin-left: 0.75rem;
  }

  .file {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;

    svg {
      color: #9090AA;
    }

    p {
      margin: 0;
      color: #EEEEFF;
      font-size: 10.5pt;
    }
  }
`;
