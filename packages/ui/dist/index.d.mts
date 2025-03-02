import React from 'react';

declare const Input: () => any;

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    disabled?: boolean;
}
declare const Button: React.FC<ButtonProps>;

export { Button, Input };
