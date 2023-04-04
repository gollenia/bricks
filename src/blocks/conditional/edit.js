/**
 * Internal dependencies
 */
import Inspector from './inspector';
/**
 * Wordpress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

Date.prototype.addDays = function ( days ) {
	var date = new Date( this.valueOf() );
	date.setDate( date.getDate() + days );
	return date;
};

export default function edit( { ...props } ) {
	const { clientId } = props;

	const {
		fromDate,
		toDate,
		hideWithinDateRange,
		usersOnly,
	} = props.attributes;

	const template = [ [ 'core/paragraph' ] ];

	const hisHiddenByDate = () => {
		if ( ! fromDate && ! toDate ) {
			return false;
		}

		const now = new Date();
		const from = fromDate ? new Date( fromDate ) : new Date( '1970-01-01' );
		const to = toDate ? new Date( toDate ) : new Date( '2100-01-01' );

		const withinDateRange = now >= from && now <= to;
		return hideWithinDateRange ? withinDateRange : ! withinDateRange;
	};

	const classes = [
		'ctx:conditional',
		usersOnly ? 'ctx:conditional__logged-in' : '',
		hisHiddenByDate() ? 'ctx:conditional__unscheduled' : '',
	].join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

	const innerBlocksProps = useInnerBlocksProps(
		{ className: 'ctx:contitional__inner' },
		{ template }
	);

	return (
		<div { ...blockProps }>
			<Inspector { ...props } />
			<div { ...innerBlocksProps }></div>
		</div>
	);
}
