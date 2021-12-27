import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  border: 2px solid;
  background-color: #c0c0c0;
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 10px;
    text-align: center;
  }
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 15px;
  height: 200px;

  h1 {
    font-size: 38px;
    font-weight: bold;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  h3 {
    margin-right: 10px;
  }

  a {
    font-size: 20px;
    color: red;
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 180px;
  margin: 10px;
  border: 2px solid;
`;
