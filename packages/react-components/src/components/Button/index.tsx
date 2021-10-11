import * as React from 'react';
import classNames from 'classnames';

import classes from './Button.module.scss';

type IntrinsicProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonSizes = 'small' | 'medium' | 'large';

type ButtonProps = IntrinsicProps & {
  size?: ButtonSizes;
  buttonType?: 'primary' | 'default';
}

const Button: React.FC<ButtonProps> = ({ buttonType = 'button', onClick, children, size = 'large', className, ...rest }) => {
  const buttonTypeClassName = classes[buttonType];
  const buttonSizeClassName = classes[size];
  const computedClasses = classNames(
    classes.button,
    buttonTypeClassName,
    buttonSizeClassName,
    className,
  );

  return (
    <button
      {...rest}
      className={computedClasses}
    >
      {children}
    </button>
  );
};

export type { ButtonProps };
export { Button };