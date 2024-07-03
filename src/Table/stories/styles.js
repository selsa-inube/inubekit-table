import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledContainerActions = styled.div`
  > svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  & :hover {
  }
`;

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export { StyledContainerActions, StyledModal };
