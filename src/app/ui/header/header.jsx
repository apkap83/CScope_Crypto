"use client";
import styled from "styled-components";
import Link from "next/link";
const MyHeader = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 1rem;
  text-align: center;
  color: white;
  font-family: serif;
  letter-spacing: 0.1rem;
  text-shadow: 0px 0px 5px rgba(255, 255, 0, 1);

  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(50, 9, 121, 1) 26%,
    rgba(42, 42, 143, 1) 58%
  );

  transition: all 0.5s;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
  z-index: 10;
`;

const Header = () => {
  return (
    <MyHeader>
      <Link href="/coins/markets">
        <span>Cyberscope Full-Stack Assignment</span>
      </Link>
    </MyHeader>
  );
};

export default Header;
