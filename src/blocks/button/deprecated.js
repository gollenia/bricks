import { InnerBlocks } from '@wordpress/block-editor';

const migrateAttributes = (attributes) => {
	if (attributes.hasModal === undefined) {
		return attributes;
	}
	return {
		...attributes,
		action: attributes.hasModal ? 'modal' : 'link',
		hasModal: undefined,
	};
};

const deprecated = [
	{
		attributes: {
			title: {
				type: 'string',
				default: '',
			},
			buttonColor: {
				type: 'string',
				default: 'primary',
			},
			customButtonColor: {
				type: 'string',
				default: '',
			},
			size: {
				type: 'string',
				default: '',
			},
			url: {
				type: 'string',
				default: '',
			},
			outline: {
				type: 'boolean',
				default: false,
			},
			icon: {
				type: 'string',
				default: '',
			},
			iconRight: {
				type: 'boolean',
				default: false,
			},
			iconOnly: {
				type: 'boolean',
				default: false,
			},
			isLink: {
				type: 'boolean',
				default: false,
			},
			fullWidth: {
				type: 'boolean',
				default: false,
			},
			modalFull: {
				type: 'boolean',
				default: false,
			},
			modalTitle: {
				type: 'string',
				default: '',
			},
			hasModal: {
				type: 'boolean',
				default: false,
			},
		},
		migrate: migrateAttributes,
		isEligible: (attributes, innerBlocks) => {
			return attributes.hasModal !== undefined;
		},
		save: () => {
			return <InnerBlocks.Content />;
		},
	},
	{
		attributes: {
			title: {
				type: 'string',
				default: '',
			},
			url: {
				type: 'string',
				default: '',
			},
			newTab: {
				type: 'boolean',
				default: false,
			},
			outline: {
				type: 'boolean',
				default: false,
			},
			icon: {
				type: 'string',
				default: '',
			},
			buttonColor: {
				type: 'string',
				default: 'primary',
			},
			customButtonColor: {
				type: 'string',
				default: '',
			},
			iconRight: {
				type: 'boolean',
				default: false,
			},
			iconOnly: {
				type: 'boolean',
				default: false,
			},
			modalFull: {
				type: 'boolean',
				default: false,
			},
			modalTitle: {
				type: 'string',
				default: '',
			},
			action: {
				type: 'string',
				default: 'link',
			},
			script: {
				type: 'string',
				default: '',
			},
			scriptTarget: {
				type: 'string',
				default: '',
			},
		},
		migrate: function (attributes) {
			
			return {
				...attributes,
			};
		},

		save: () => {
			return <InnerBlocks.Content />;
		},
	},
];

export default deprecated;
