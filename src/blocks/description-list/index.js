/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import './editor.scss';
import icon from './icon';
import save from './save';

/**
 * Wordpress dependencies
 */

const { name, title, description } = metadata;

const settings = {
	icon,
	edit,
	save,
};

export { name, settings };
