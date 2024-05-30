import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  padding: 0 12.4rem;
`

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  padding-right: 10rem;
  margin: 12rem 0 1.4rem 0;

  border-radius: 0.8rem;

  width: 100%;
  height: 26rem;

  background: ${({ theme }) => theme.COLORS.GRADIENT_200};

  > img {
    position: absolute;
    left: -4%;
    bottom: 0%;

    pointer-events: none;
    object-fit: cover;
    object-position: top;

    width: 50%;
    height: 150%;
  }

  > h1 {
    font-size: 4rem;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 0.8rem;
  }

  > p {
    font-family: 'Roboto';

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`
