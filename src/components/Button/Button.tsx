import {ButtonHTMLAttributes} from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (
    {className, onClick, disabled, children}: Props) => {
    return (<button className={className} onClick={onClick} disabled={disabled}>{children}</button>);
};

