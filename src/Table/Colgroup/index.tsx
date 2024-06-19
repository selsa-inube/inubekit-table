import React from "react";

interface ColgroupProps
  extends React.ColgroupHTMLAttributes<HTMLTableColElement> {
  children: React.ReactNode;
}

const Colgroup = ({ children, ...props }: ColgroupProps) => {
  return <colgroup {...props}>{children}</colgroup>;
};

export { Colgroup };
