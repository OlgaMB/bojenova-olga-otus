import React, { FC } from 'react';

interface ITableRowProps {
    children: string;
    data: any;
}

export const TableRow: FC<ITableRowProps> = props  => {
    const { children, data } = props;
    return <tr key={ children }>
                <td>{ children }</td>
                { data.map((data: any, index:number) => <td key={ index }>{ data }</td>) }
            </tr>;
}