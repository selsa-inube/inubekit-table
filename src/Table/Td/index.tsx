import React from "react";
import { StyledTd } from "./styles";
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
  onClick?: (e: React.MouseEvent<HTMLTableCellElement>) => void;
  type?: ITdType;
}

const renderContent = (
  id: string,
  type: ITdType,
  children: React.ReactNode,
  checked: boolean,
  appearance: ITdAppearance,
  onToggle?: (event: React.ChangeEvent<HTMLInputElement>) => void,
) => {
  switch (type) {
    case "toggle":
      return (
        <Toggle
          id={id}
          checked={checked}
          onChange={onToggle!}
          label=""
          margin=""
          padding=""
        />
      );
    case "icon":
      return (
        <Icon
          appearance={appearance === "light" ? "dark" : appearance}
          icon={children}
        />
      );
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
      {renderContent(id, type, children, checked, appearance, onToggle)}
    </StyledTd>
  );
};

export { Td };
export type { ITd };
