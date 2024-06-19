import React from "react";

interface CaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {
  children: React.ReactNode;
}

const Caption = ({ children, ...props }: CaptionProps) => {
  return <caption {...props}>{children}</caption>;
};

export { Caption };
