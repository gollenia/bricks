/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import icon from './icon';
import metadata from './block.json';

import './editor.scss';

/**
 * Wordpress dependencies
 */
const { __ } = wp.i18n; 

/**
 * Block constants
 */
const { name, category, attributes } = metadata;

const settings = {
	/* translators: block name */
	title: __( 'Akkordeon', 'ctx-blocks' ),
	/* translators: block description */
	description: __( 'Strukturierte Informationen übersichtlich darstellen', 'ctx-blocks' ),
	icon,
	keywords: [
		'ctxblocks',
		/* translators: block keyword */
		__( 'url', 'ctx-blocks' ),
		/* translators: block keyword */
		__( 'link', 'ctx-blocks' ),
	],
	attributes,
	edit,
	save
};

export { name, category, metadata, settings };

