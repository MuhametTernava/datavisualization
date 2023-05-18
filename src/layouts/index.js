import styled from "@emotion/styled";

export const Flex = styled.div`
  display: flex;
`;

export const Block = styled.div`
  display: inline-block;
  position: relative;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: #ebf1fb;
`;

export const DivHalf = styled.div`
  position: relative;
  display: inline-block;
  width: 50%;
`;

export const Row = styled.div`
  display: flex;
  display: -ms-flexbox;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
