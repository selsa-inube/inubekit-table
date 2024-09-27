import React from "react";
import { StyledTd, StyledToggleContainer } from "./styles";
import { ITdAlignContent, ITdAppearance, ITdType } from "./props";
import { Text } from "@inubekit/text";
import { Toggle } from "@inubekit/toggle";
import { Icon } from "@inubekit/icon";

interface ITd extends React.TdHTMLAttributes<HTMLTableCellElement> {
  appearance?: ITdAppearance;
  align?: ITdAlignContent;
  checked?: boolean;
  children: React.ReactNode;
  id?: string;
  label?: string;
  onToggle?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent) => void;
  type?: ITdType;
}

const renderContent = (
  id: string,
  type: ITdType,
  children: React.ReactNode,
  checked: boolean,
  appearance: ITdAppearance,
  onToggle?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onClick?: (event: React.MouseEvent) => void,
  align?: ITdAlignContent,
) => {
  switch (type) {
    case "toggle":
      return (
        <StyledToggleContainer $align={align}>
          <Toggle id={id} checked={checked} onChange={onToggle!} />
        </StyledToggleContainer>
      );
    case "icon":
      return (
        <Icon
          appearance={appearance === "light" ? "dark" : appearance}
          icon={children}
          onClick={onClick!}
        />
      );
    case "custom":
      return children;
    case "text":
    default:
      return (
        <Text appearance={appearance} size="small">
          {children}
        </Text>
      );
  }
};

const Td = (props: ITd) => {
  const {
    id = "",
    align = "center",
    appearance = "light",
    checked = false,
    children,
    onToggle,
    onClick,
    type = "text",
    ...restProps
  } = props;

  return (
    <StyledTd
      {...restProps}
      $align={align}
      $appearance={appearance}
      onClick={onClick}
    >
      {renderContent(
        id,
        type,
        children,
        checked,
        appearance,
        onToggle,
        onClick,
        align,
      )}
    </StyledTd>
  );
};

export { Td };
export type { ITd };
