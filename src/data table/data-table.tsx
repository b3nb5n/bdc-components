import React from 'react';
import styles from './data-table.module.css';
import { TableItem } from './table item/table-item';

type ItemValue = string | string[] | Date | null;
type Item = { [key: string]: ItemValue };

interface DataTableProps {
	items: Item[];
	fields: string[];
	identifyingField?: string;
	columnTemplate?: string;
	visibleFields?: string[];
	itemClickHandler: string | ((item: Item) => void);
}

export const DataTable: React.FC<DataTableProps> = ({
	items,
	fields,
	columnTemplate,
	visibleFields,
	itemClickHandler
}) => {
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
