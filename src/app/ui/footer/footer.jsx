"use client";
import styled from "styled-components";

const MyFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #4f4f4f;
  padding: 1rem;
  text-align: center;

  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 74%,
    rgba(180, 208, 239, 1) 100%
  );

  font-family: Menlo, sans-serif;
  letter-spacing: 0.2rem;
  transition: all 0.5s;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
  z-index: 10;
`;

const MailToLink = styled.a`
  color: white;
  text-decoration: none;
`;

const candidateEmail = "ap.kapetanios@gmail.com";

const Footer = () => {
  return (
    <MyFooter>
      <MailToLink href={`mailto:${candidateEmail}`}>
        Apostolos Kapetanios
      </MailToLink>{" "}
    </MyFooter>
  );
};

export default Footer;
