// src/components/Footer/Footer.jsx
import React from "react";
import logo from "../../assets/logo.png";
import { FooterContainer, Logo, SocialLinks } from "./Footer.styled";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importando os ícones do LinkedIn e GitHub

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="Logo" />
      <p>Developer by Alan Viana &copy; 2025</p>
      <SocialLinks>
        <a href="https://www.linkedin.com/in/alan-viana7/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="github.com/Alan-Viana" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
