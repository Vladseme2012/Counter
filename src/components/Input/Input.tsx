import {InputHTMLAttributes} from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>

export const Input = ({className, type, min, max, value, onChange}: Props) => {
    return <input className={className} type={type} min={min} max={max} value={value} onChange={onChange}/>;

};
