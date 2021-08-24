import styled from 'styled-components';

export const Content = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 0;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.875rem;
    color: var(--text-title);
    font-family: 'Lexend', Arial, sans-serif;
    margin-bottom: 2.5rem;
  }
`

export const Box = styled.table`
  width: 100%;
  text-align: left;

  thead tr th {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.5rem;
    padding: 1.25rem 0;
    border-bottom: 1px solid var(--border);
  }

  tbody {
    td {
      font-size: 1rem;
      font-weight: 400;
      padding: 0.5rem 0;
      border-bottom: 1px solid var(--border);
    }

    td > img {
      width: 3.125rem;
      height: 3.125rem;
      border-radius: 8px;
      object-fit: cover;
    }
  }
`

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`

export const Button = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  width: 1.75rem;
  height: 1.75rem;
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--text-body);
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`

export const Icon = styled.img`
  width: 1.5rem;
  height: ${(props) => props.isPlaying
    ? '0.875rem !important'
    : '1.25rem !important'
  };
  object-fit: cover;
`
