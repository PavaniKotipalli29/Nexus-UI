import React from "react";
import { Button, ButtonProps } from "./Button";

export const HamburgerButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} isIconButton>
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </Button>
  );
};
