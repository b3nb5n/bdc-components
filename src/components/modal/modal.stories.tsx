import { Meta, Story } from '@storybook/react';
import React from 'react';
import Modal, { ModalProps } from '.';
import Text from '../text';

export default {
	title: 'Modal',
	component: Modal,
} as Meta<typeof Modal>;

export const Default: Story<ModalProps> = (args) => (
	<Modal {...args}>
		<Text variant='body'>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur inventore quo
			deserunt repellat neque tempora! Pariatur blanditiis delectus voluptatum temporibus sit
			eius tenetur quo placeat distinctio, iure molestiae cupiditate, facilis consequatur quas
			fugiat aspernatur animi! Velit saepe minus obcaecati vel tenetur enim et temporibus rerum
			ad, eveniet illum suscipit consequuntur tempora. Dolores illum quaerat est. Autem, magnam
			harum! Incidunt vitae obcaecati quod? Magnam quasi vero doloremque voluptates, distinctio
			cum eaque, quidem perspiciatis culpa possimus ullam aliquid? Voluptates omnis debitis,
			laborum cupiditate corporis temporibus illum, enim ex aliquid ut sequi eum aliquam earum
			error fugiat exercitationem? Iste, dolorem culpa minima aliquam exercitationem repudiandae
			quisquam sequi. Aut autem repellat ipsa ex nemo, porro rem saepe aliquam, dignissimos
			mollitia iste quibusdam doloribus, illo itaque. Quae hic laboriosam unde nobis, deserunt
			minima velit iusto temporibus praesentium assumenda, dolore fuga mollitia reprehenderit
			voluptate ducimus repellat dicta nulla magnam excepturi ex iure necessitatibus iste
			laborum culpa?
		</Text>
	</Modal>
);

Default.args = {
	open: true,
	title: 'Default Modal',
};
