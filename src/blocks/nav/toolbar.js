import { Component, Fragment } from '@wordpress/element';
import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';

class Toolbar extends Component {
	render() {
		const {
			attributes,
			setAttributes
		} = this.props;

		const {
            textAlignment
        } = attributes;

		return (
			<Fragment>
				<BlockControls>
                    <AlignmentToolbar
                        value={ textAlignment }
                        onChange={ (event) => setAttributes({ textAlignment: event }) }
                    />
				</BlockControls>
			</Fragment>
		);
	}
}

export default Toolbar;