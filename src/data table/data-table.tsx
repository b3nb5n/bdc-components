import React from 'react';
import { useStyles } from './styles'
import { TableItem } from './table item/table-item';

export type FieldMap = { [key: string]: { label?: string, columnTemplate?: number } }

export type ItemData <T extends FieldMap = FieldMap> = {
    [k in keyof T]: any
}

export type Items <T extends FieldMap = FieldMap> = { [key: string]: ItemData<T> }

interface DataTableProps <T extends FieldMap> {
    items: Items<T>
    fieldMap: T
	itemClickHandler: (data: ItemData<T>, identifier: string) => void;
}

export const DataTable = <T extends FieldMap> ({ items, fieldMap, itemClickHandler }: DataTableProps<T>) => {
    const classes = useStyles()

    const fields = Object.keys(fieldMap)

    const columnTemplates = fields.map(field => fieldMap[field].columnTemplate?.toString() || '1')
    const gridTemplateColumns = columnTemplates.join('fr ') + 'fr'

    const headLabels = fields.map(field => <b key={field}>{fieldMap[field].label || field}</b>)

    const itemIdentifiers = Object.keys(items)
    const tableItems = itemIdentifiers.map(identifier => (
        <TableItem
            key={identifier}
            data={items[identifier]}
            identifier={identifier}
            gridTemplateColumns={gridTemplateColumns}
            clickHandler={itemClickHandler}
        />
    ))

    return (
        <div>
            <div style={{ gridTemplateColumns }} className={classes.table_head}>{headLabels}</div>
            <div className={classes.table}>{tableItems}</div>
        </div>
    );
}
