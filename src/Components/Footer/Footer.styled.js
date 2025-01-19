import styled from "styled-components";

// Estilos do rodapé
export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #000000; /* Cor de fundo preta */
  color: ${({ theme }) => theme.colors.color};
  width: 100%;
  box-shadow: 0px 0px 0.75rem 0.25rem #2271d1;
`;

export const Logo = styled.img`
  height: 3.125rem; /* 50px */
`;

// Estilos para os ícones de redes sociais
export const SocialLinks = styled.div`
  display: flex;
  gap: 20px; /* Espaço entre os ícones */
  margin-top: 1rem;

  a {
    color: ${({ theme }) => theme.colors.color}; /* Cor padrão dos ícones */
    text-decoration: none;
    font-size: 1.5rem; /* Tamanho do ícone */

    &:hover {
      color: ${({ theme }) => theme.colors.secondary}; /* Cor ao passar o mouse */
    }
  }
`;
