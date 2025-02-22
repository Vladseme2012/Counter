import * as React from 'react';

type Props = {
    children: React.ReactNode
    className: string
}
export const Container = ({children, className}: Props) => {
    return <div className={className}>{children}</div>;
};
