import React from 'react';
import { useStyles } from './styles';
import { ItemData } from '../data-table';

interface TableItemProps {
	data: ItemData;
	identifier: string;
	gridTemplateColumns: string;
	clickHandler: (data: ItemData, identifier: string) => void;
}

export const TableItem: React.FC<TableItemProps> = ({
	data,
	identifier,
	gridTemplateColumns,
	clickHandler
}) => {
	const classes = useStyles();

	const fields = Object.keys(data);
	const itemFields = fields.map(field => <span key={field}>{data[field]}</span>);

	return (
		<div
			className={classes.table_item}
			style={{ gridTemplateColumns }}
			onClick={() => clickHandler(data, identifier)}
		>
			{itemFields}
		</div>
	);
};
