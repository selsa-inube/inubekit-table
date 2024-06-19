import React from "react";

interface TfootProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

const Tfoot = ({ children, ...props }: TfootProps) => {
  return <tfoot {...props}>{children}</tfoot>;
};

export { Tfoot };
