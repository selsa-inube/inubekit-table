import React, { useState } from "react";
import { MdAndroid } from "react-icons/md";
import { ITd, Td } from "..";

const TdController = (props: ITd) => {
  const {
    appearance,
    children,
    id,
    label,
    onToggle,
    onClick,
    checked = false,
    type,
    ...restProps
  } = props;

  const [toggleChecked, setToggleChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "toggle") {
      setToggleChecked(e.target.checked);
      onToggle && onToggle(e);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (type === "icon" && onClick) {
      onClick(e);
    }
  };

  const renderChildren = () => {
    if (type === "icon") {
      return <MdAndroid />;
    }
    return children;
  };

  return (
    <Td
      {...restProps}
      appearance={appearance}
      checked={toggleChecked}
      id={id}
      label={label}
      onToggle={handleChange}
      onClick={handleClick}
      type={type}
    >
      {renderChildren()}
    </Td>
  );
};

export { TdController };
