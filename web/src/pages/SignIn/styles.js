import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 9.6rem;

  min-height: 100vh;
  width: 100%;
  max-width: 120rem;

  > img {
    height: 4.8rem;
  }

  > Form {
    width: 47.6rem;
    align-items: center;

    > Button {
      width: 100%;
    }
  }
`
