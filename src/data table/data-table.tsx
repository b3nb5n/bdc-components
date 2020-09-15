import React from 'react';
import { useStyles } from './styles'
import { TableItem } from './table item/table-item';

export type FieldMap = { [key: string]: { label?: string, columnTemplate?: number } }

export type ItemData <T extends FieldMap = FieldMap> = {
    [k in keyof T]: string
}

export type Items <T extends FieldMap = FieldMap> = { [key: string]: ItemData<T> }

interface DataTableProps <T extends FieldMap> {
    items: Items<T>
    fieldMap: T
    identifyingField?: keyof T
    itemIcon?: React.ReactNode
	itemClickHandler: (data: ItemData<T>, identifier: string) => void;
}

export const DataTable = <T extends FieldMap> ({ items, fieldMap, identifyingField, itemIcon, itemClickHandler }: DataTableProps<T>) => {
    const classes = useStyles()

    const fields = Object.keys(fieldMap)
    const orderedFields = identifyingField ? fields.sort((a, b) => (a === identifyingField ? -1 : b === identifyingField ? 1 : 0)) : fields

    const columnTemplates = orderedFields.map(field => fieldMap[field].columnTemplate?.toString() || '1')
    const gridTemplateColumns = columnTemplates.join('fr ') + 'fr'

    const headLabels = orderedFields.map(field => <b key={field}>{fieldMap[field].label || field}</b>)

    const itemIdentifiers = Object.keys(items)
    const tableItems = itemIdentifiers.map(identifier => (
        <TableItem
            key={identifier}
            data={items[identifier]}
            fields={orderedFields}
            identifyingField={identifyingField}
            itemId={identifier}
            columns={gridTemplateColumns}
            itemIcon={itemIcon}
            clickHandler={itemClickHandler}
        />
    ))

    return (
        <div>
            <div style={{ gridTemplateColumns, paddingLeft: itemIcon ? 72 : undefined }} className={classes.table_head}>{headLabels}</div>
            <div className={classes.table}>{tableItems}</div>
        </div>
    );
}
