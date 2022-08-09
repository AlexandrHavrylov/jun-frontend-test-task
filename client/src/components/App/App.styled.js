import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 10px;
  margin: 0 auto;
  text-align: center;
  width: 100%;
`;

export const Button = styled.button`
  margin-top: 10px;
  background: transparent;
  border: 1px black solid;
  padding: 8px 8px;
  margin-right: 15px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 30px;
  &:hover {
    transform: scale(1.1);
  }
`;
