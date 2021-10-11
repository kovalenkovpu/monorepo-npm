import * as React from 'react';
interface CardProps {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}
declare const Card: React.FC<CardProps>;
export type { CardProps };
export { Card };
