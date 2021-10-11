import * as React from 'react';
declare type IntrinsicProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
declare type ButtonSizes = 'small' | 'medium' | 'large';
declare type ButtonProps = IntrinsicProps & {
    size?: ButtonSizes;
    buttonType?: 'primary' | 'default';
};
declare const Button: React.FC<ButtonProps>;
export type { ButtonProps };
export { Button };
