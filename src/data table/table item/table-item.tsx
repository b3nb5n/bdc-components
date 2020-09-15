import React from 'react';
import { useStyles } from './styles';
import { ItemData } from '../data-table';

interface TableItemProps {
	data: ItemData;
	itemId: string;
	fields: string[];
	identifyingField?: any;
	columns: string;
	itemIcon?: React.ReactNode;
	clickHandler: (data: ItemData, identifier: string) => void;
}

export const TableItem: React.FC<TableItemProps> = ({
	data,
	itemId: identifier,
	fields,
	identifyingField,
	columns,
	itemIcon,
	clickHandler
}) => {
	const classes = useStyles();

	const itemFields = fields.map(
		field =>
			identifyingField && field === identifyingField ? (
				<b key={field}>{data[field]}</b>
			) : (
				<span key={field}>{data[field]}</span>
			)
	);

	const gridTemplateColumns = itemIcon ? `36px ${columns}` : columns;
	const padding = itemIcon ? '12px 36px 12px 24px' : undefined;

	return (
		<div
			className={classes.table_item}
			style={{ gridTemplateColumns, padding }}
			onClick={() => clickHandler(data, identifier)}
		>
			{itemIcon}
			{itemFields}
		</div>
	);
};
