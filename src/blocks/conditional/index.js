/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import './editor.scss';
import icon from './icon';

/**
 * Wordpress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

const { name, title, description } = metadata;

const settings = {
	icon,
	edit,
	save: () => {
		return <InnerBlocks.Content />;
	},
};

export { name, settings };
