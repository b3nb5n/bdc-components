import React from 'react';
import { Link } from 'react-router-dom';
import styles from './table-item.module.css';

type Item = { [key: string]: string | string[] | Date | null };

interface TableItemProps {
	item: Item;
	columnTemplate?: string;
	visibleFields: string[];
	itemClickHandler: string | ((item: Item) => void);
}

export const TableItem: React.FC<TableItemProps> = ({ item, columnTemplate, visibleFields, itemClickHandler }) => {
	const itemFields = visibleFields.map(field => {
		const fieldValue = item[field];
		const itemFieldKey = `${item[field]}-field`;

		return <span key={itemFieldKey}>{fieldValue}</span>;
	});

	return typeof itemClickHandler === 'string' ? (
		<Link to={itemClickHandler} className={styles.table_item} style={{ gridTemplateColumns: columnTemplate }}>
			{itemFields}
		</Link>
	) : (
		<div
			onClick={() => itemClickHandler(item)}
			className={styles.table_item}
			style={{ gridTemplateColumns: columnTemplate }}
		>
			{itemFields}
		</div>
	);
};
