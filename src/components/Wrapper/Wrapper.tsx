import * as React from 'react';
import '../../App.css';

type Props  = {
    children: React.ReactNode
}

export const Wrapper = ({children}:Props) => {
    return (<div className={'wrapper'}>{children}</div>)
}

