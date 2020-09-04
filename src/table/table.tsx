import React from 'react';
import { TableItem } from './table item/table-item';
import styles from './table.module.css';

type Item = { [key: string]: string | string[] | Date | null };

interface TableProps {
	items: Item[];
	fields: string[];
	identifyingField?: string;
	columnTemplate?: string;
	visibleFields?: string[];
	itemClickHandler: string | ((item: Item) => void);
}

export const Table: React.FC<TableProps> = ({ items, fields, columnTemplate, visibleFields, itemClickHandler }) => {
	const tableFields = visibleFields || fields.slice(0, 4);
	const headLabels = tableFields.map(field => <b key={field + '-head-label'}>{field}</b>);
	const tableItems = items.map(item => (
		<TableItem
			item={item}
			columnTemplate={columnTemplate}
			visibleFields={tableFields}
			itemClickHandler={itemClickHandler}
			key={`${item[Object.keys(item)[0]]}-item`}
		/>
	));

	return (
		<div>
			<div className={styles.table_head} style={{ gridTemplateColumns: columnTemplate }}>
				{headLabels}
			</div>
			<div className={styles.table}>{tableItems}</div>
		</div>
	);
};
