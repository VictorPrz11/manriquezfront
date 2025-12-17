import React from "react";

interface Props {
  tabla?: boolean;
  children: React.ReactNode|React.ReactNode[];
}

const Header_homeScreen = ({ tabla = false, children }: Props) => {
  return !tabla ? (
    <div className="header_homeScreen">{children}</div>
  ) : (
    <div className="header_table">{children}</div>
  );
};

export default Header_homeScreen;
