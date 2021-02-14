import styled from "styled-components";
import { media } from "./media";
export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  border: 1px solid #f0f0f0;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  min-width: 40%;
  border-radius: 4px;
  padding: 20px;

  ${media.small`
  min-width: 90%;
  width:90%;
            height: 90%;
          `};
`;
