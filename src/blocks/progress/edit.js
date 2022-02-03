import Inspector from './inspector';
import { useBlockProps, RichText  } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n'; 
export default function Edit({...props}) {


		const {
			attributes: {
                maxValue,
                currentValue,
                showValues,
                unit,
                prefixedUnit,
                thousandSeparators,
                decimalPlaces,
				currentDescription,
				maxDescription
			},
			colorBar,
			colorBackground,
			setAttributes
		} = props;

		const blockProps = useBlockProps({className:"ctx-progress"})

		const replaceDecimalDot = ( value ) => {
			return decimalPlaces ? value.replace(/.([^.]*)$/,'\,$1') : value;
		}

		const percent = () => {
			return parseInt(currentValue) > parseInt(maxValue) ? 100 : (currentValue * 100 / maxValue);
		}

		const fullPercent = Math.round((currentValue * 100 / maxValue));

		const textColor = props.colorUtils.getMostReadableColor(colorBar.color);

		let currentValueString = parseInt(currentValue).toFixed(decimalPlaces);
		let	maxValueString = parseInt(maxValue).toFixed(decimalPlaces);
		if(thousandSeparators) {
			currentValueString =  String(currentValueString).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1.')
			maxValueString = String(maxValueString).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1.')
		}
		return (
			<div {...blockProps}>
				<Inspector
						{ ...props }
				/>
				<div className="description">
					<div style={{color: colorBar.color}}>
						<RichText
							tagName="div"
							className="cur-value-description"
							value={ currentDescription }
							onChange={ (value) => setAttributes({ currentDescription: value }) }
							placeholder={__("Current value description...", 'ctx-blocks')}
							
						/>
						<div className="cur-value">{ (unit != "" && prefixedUnit) && <>{unit}</> } {decimalPlaces > 0 ? replaceDecimalDot(currentValueString) : currentValueString} { (unit != "" && !prefixedUnit) && <>{unit}</> }</div>
					</div> 
					<div style={{color: colorBackground.color, textAlign: "right"}}>
						<RichText
							tagName="div"
							className="max-value-description"
							value={ maxDescription }
							onChange={ (value) => setAttributes({ maxDescription: value }) }
							placeholder={__("Max value description...", 'ctx-blocks')}
							
						/>
						<div className="max-value">{ (unit != "" && prefixedUnit) && <>{unit}</> } {decimalPlaces > 0 ? replaceDecimalDot(maxValueString) : maxValueString} { (unit != "" && !prefixedUnit) && <>{unit}</> }</div>
					</div>
				</div>
				<div className="outer" style={{backgroundColor: colorBackground.color}}>
					<div style={{width: `${percent()}%`, backgroundColor: colorBar.color}} className="inner">
						{ showValues && <span style={{color: textColor}} className="value">{fullPercent}%</span> }
					</div>
				</div>
				
					
				
				
			</div>
		);


}