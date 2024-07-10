import React from "react";
import { StyledCaption } from "./styles";
import { Text } from "@inubekit/text";

interface ICaption extends React.HTMLAttributes<HTMLTableCaptionElement> {
  children: React.ReactNode;
}

const Caption = (props: ICaption) => {
  const { children, ...restProps } = props;

  return (
    <StyledCaption {...restProps}>
      <Text
        appearance="gray"
        children={children}
        size="large"
        type="label"
        weight="bold"
        textAlign="center"
      />
    </StyledCaption>
  );
};

export { Caption };
export type { ICaption };
