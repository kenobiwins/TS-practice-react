import { FC } from 'react';

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface CardProp {
  width?: string;
  height?: string;
  variant?: CardVariant;
  click: () => void;
}

export const Card: FC<CardProp> = ({
  width,
  height,
  variant,
  children,
  click,
}) => {
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'lightgray' : '',
      }}
      onClick={click}
    >
      {children}
    </div>
  );
};
