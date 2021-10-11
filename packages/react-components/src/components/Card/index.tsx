import * as React from 'react';

import classes from './Card.module.scss';

interface CardProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Card: React.FC<CardProps> = ({ onClick, children }) => {
  return (
    <section onClick={onClick} className={classes.card}>{children}</section>
  );
};

export type { CardProps };
export { Card };