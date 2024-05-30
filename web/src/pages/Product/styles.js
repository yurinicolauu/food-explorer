import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .back-button {
    margin: 2.4rem 0 0 12.4rem;
  }
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  gap: 4.8rem;
  align-items: center;
  justify-content: center;
  padding: 0 12.4rem;

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;
    height: 100%;

    .stepper {
      display: flex;
      gap: 3.3rem;
      margin-top: 2.4rem;
    }

    > h1 {
      font-size: 4rem;
      line-height: 140%;
      font-weight: medium;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .ingredients {
      display: flex;
      flex-wrap: wrap;
      gap: 1.2rem;
    }

    > p {
      font-size: 2.4rem;
      line-height: 140%;
      font-weight: normal;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  img {
    width: 38rem;
  }
`
