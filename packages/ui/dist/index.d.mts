import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

declare const Input: () => react_jsx_runtime.JSX.Element;

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    disabled?: boolean;
}
declare const Button: React.FC<ButtonProps>;

export { Button, Input };
