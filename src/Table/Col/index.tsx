import React from "react";

interface ColProps extends React.ColHTMLAttributes<HTMLTableColElement> {}

const Col = (props: ColProps) => {
  return <col {...props} />;
};

export { Col };
