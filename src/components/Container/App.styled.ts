import styled from "styled-components";

export const AppWrapper = styled.main`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 50px 30px;
  height: 100vh;
  border: 1px dashed rgba(0, 0, 0, 0.12);
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 100px;
  line-height: 1em;
  letter-spacing: -0.23px;
  color: #000;
`;

export const Subtitle = styled.h2`
  margin: 0;
  font-size: 22px;
  color: #000;
  opacity: 0.6;
`;

export const AppFooter = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 30px;
  text-align: center;
`;
