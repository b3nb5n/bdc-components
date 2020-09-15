import React from 'react';
import { useStyles } from './styles'
import { TableItem } from './table item/table-item';
import { Typography } from '@material-ui/core';

export type FieldMap = { [key: string]: { label?: string, columnTemplate?: number } }

export type Item <T extends FieldMap = FieldMap> = {
    [k in keyof T]: string
} & { [key: string]: string }

interface DataTableProps <T extends FieldMap> {
    items: Item<T>[]
    fieldMap: T
    identifyingField?: keyof T
    itemIcon?: React.ReactNode
	itemClickHandler: (data: Item<T>) => void;
}

export const DataTable = <T extends FieldMap> ({ items, fieldMap, identifyingField, itemIcon, itemClickHandler }: DataTableProps<T>) => {
    const classes = useStyles()

    const fields = Object.keys(fieldMap)
    const orderedFields = identifyingField ? fields.sort((a, b) => (a === identifyingField ? -1 : b === identifyingField ? 1 : 0)) : fields

    const columnTemplates = orderedFields.map(field => fieldMap[field].columnTemplate?.toString() || '1')
    const gridTemplateColumns = columnTemplates.join('fr ') + 'fr'

    const headLabels = orderedFields.map(field => <Typography variant='h3' key={field}>{fieldMap[field].label || field}</Typography>)

    const tableItems = items.map((item, i) => (
        <TableItem
            key={i}
            data={item}
            fields={orderedFields}
            identifyingField={identifyingField}
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
