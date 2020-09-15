import React from 'react';
import { useStyles } from './styles';
import { Item } from '../data-table';
import { Typography } from '@material-ui/core';

interface TableItemProps {
	data: Item;
	fields: string[];
	identifyingField?: any;
	columns: string;
	itemIcon?: React.ReactNode;
	clickHandler: (data: Item) => void;
}

export const TableItem: React.FC<TableItemProps> = ({
	data,
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
				<Typography variant="h4" key={field}>
					{data[field]}
				</Typography>
			) : (
				<Typography variant="body1" key={field}>
					{data[field]}
				</Typography>
			)
	);

	const gridTemplateColumns = itemIcon ? `36px ${columns}` : columns;
	const padding = itemIcon ? '12px 36px 12px 24px' : undefined;

	return (
		<div
			className={classes.table_item}
			style={{ gridTemplateColumns, padding }}
			onClick={() => clickHandler(data)}
		>
			{itemIcon}
			{itemFields}
		</div>
	);
};
