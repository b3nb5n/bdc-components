import React from 'react';
import { BiSearch as SearchIcon } from 'react-icons/bi';
import Button from '../button';
import { TextInput } from '../input';
import Text from '../text';

export interface PageHeaderProps {
	title: string;
	action: () => void;
	actionLabel: React.ReactNode;
	search: (term: string) => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, action, actionLabel, search }) => {
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<Text variant='h1'>{title}</Text>
			<div style={{ display: 'flex' }}>
				<Button onClick={action} style={{ marginRight: 8 }}>
					{actionLabel}
				</Button>
				<TextInput onChange={search} icon={<SearchIcon size={16} color='black' />} />
			</div>
		</div>
	);
};

export default PageHeader;
