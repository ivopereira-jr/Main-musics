import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--white);
  border-bottom: 1px solid var(--border);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  span {
    color: var(--text-body);
    font-size: 0.875rem;
    line-height: 1.062rem;
    text-transform: capitalize;
  }
`

export const Box = styled.div`
  width: 100%;
  height: 3.375rem;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem 1.25rem;
  border-radius: 35px;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  color: var(--text-body);
  animation: 600ms ease;

  &:hover {
    box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%)
  }

  &:focus-within {
    border-color: rgb(220, 220,220);
    box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%)
  }

  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    margin-left: 1rem;
    font-size: 1.125rem;

    &:focus input {
      border-color: red;
    }
  }
`

export const Button = styled.button`
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: var(--text-body);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;

  span {
    font-size: 1.25rem;
  }
`
