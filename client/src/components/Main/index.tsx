import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/webpack-512.png" alt="Imagem da logo do webpack." />
    <S.Title>Boilerplate Project</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS and Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
