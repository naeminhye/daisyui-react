import classNames from 'classnames';
import { ReactNode } from 'react';

const DEFAULT_COLOR = 'default';
const DEFAULT_SIZE = 'md';
const DEFAULT_SHAPE = 'default';

export type ButtonColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'ghost'
  | 'link';

export type ButtonShape = 'default' | 'wide' | 'block' | 'square' | 'circle';

export type Size = 'lg' | 'md' | 'sm' | 'xs';

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  children: ReactNode;
  className?: string;
  color?: ButtonColor;
  size?: Size;
  shape?: ButtonShape;
  active?: boolean;
  disabled?: boolean;
  outline?: boolean;
  glass?: boolean;
  loading?: boolean;
  noAnimation?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = (props: ButtonProps) => {
  const {
    className,
    color = DEFAULT_COLOR,
    size = DEFAULT_SIZE,
    shape = DEFAULT_SHAPE,
    active,
    disabled,
    outline,
    glass,
    children,
    type,
    loading,
    noAnimation,
    ...otherProps
  } = props;

  const classes = classNames(
    'btn',
    {
      [`btn-${color}`]: color !== DEFAULT_COLOR,
      [`btn-${size}`]: size !== DEFAULT_SIZE,
      [`btn-${shape}`]: shape !== DEFAULT_SHAPE,
      [`btn-disabled`]: disabled,
      [`btn-active`]: active,
      [`btn-outline`]: outline,
      [`glass`]: glass,
      [`loading`]: loading,
      [`no-animation`]: noAnimation,
    },
    className
  );

  return (
    <button className={classes} disabled={disabled} type={type} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
