import React from 'react';
import { useStyles } from './styles'
import { TableItem } from './table item/table-item';
import { Typography } from '@material-ui/core';
import { LoadingState } from './table states/loading-state'
import { EmptyState } from './table states/empty-state'

export type FieldMap <T extends Item = Item> = {
    [k in keyof T['data']]: { label?: string, columnTemplate?: number }
}

export type Item = {
    data: { [key: string]: string }
    [key: string]: any
}

interface DataTableProps <T extends Item> {
    items: T[]
    fieldMap: FieldMap<T>
    identifyingField?: keyof T['data']
    itemIcon?: React.ReactNode
    loading?: boolean
	itemClickHandler: (data: T) => void;
}

export const DataTable = <T extends Item> ({ items, fieldMap, identifyingField, itemIcon, loading, itemClickHandler }: DataTableProps<T>) => {
    const classes = useStyles()

    const fields = Object.keys(fieldMap)
    const orderedFields = identifyingField ? fields.sort((a, b) => (a === identifyingField ? -1 : b === identifyingField ? 1 : 0)) : fields

    const columnTemplates = orderedFields.map(field => fieldMap[field].columnTemplate?.toString() || '1')
    const gridTemplateColumns = columnTemplates.join('fr ') + 'fr'

    const headLabels = orderedFields.map(field => <Typography variant='h3' key={field}>{fieldMap[field].label || field}</Typography>)

    const tableItems = items.map((item, i) => (
        <TableItem
            key={i}
            item={item}
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
            <div className={classes.table}>
                {loading ? <LoadingState /> : tableItems.length ? tableItems : <EmptyState />}
            </div>
        </div>
    );
}
