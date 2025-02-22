import * as React from 'react';

type Props = {
    children: React.ReactNode
    className: string
}

export const Title = ({className, children}: Props) => {
    return (<span className={className}>{children}</span>);
};
