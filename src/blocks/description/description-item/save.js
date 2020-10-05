import relativeUrl from "../../../common/utils/relurl";
/**
 * External dependencies
 */

export default function save( props ) {
       
		const {
            className,
            title,
            image,
            icon,
            roundImage,
            text,
            contentType
        } = props.attributes;


        var classes = [
            className || false,
			"ctx-description-" + contentType,
			"ctx-description-item"
        ].filter(Boolean).join(" ")
        
        var readableDate = "";
        if(contentType==="date") {
            readableDate = moment(text).format( 'D. MMMM YYYY' );
        }

		return (
            <div className={classes}>
                { image && image.subtype != "svg+xml" &&
						<img className={roundImage ? "round" : ""} src={image.sizes.qsmall.url}/>
                }

                { image && image.subtype === "svg+xml" &&
                    <img 
                        data-src={relativeUrl(image.url)} 
                        uk-svg=""
                        width="50"
                        height="50"
                    />
                }
                { !image && icon !== "" &&
                    <i className={`ctx-icon ctx-icon-${icon}`}></i>
                }
                <div className="ctx-item-content">
                    <dt>{title}</dt>
                    <dd className="ctx-item-content">
                        { contentType === "date" && <time datetime={text}>{readableDate}</time>}
                        { contentType !== "date" && <div dangerouslySetInnerHTML={{ __html: text }}></div> }
                    </dd>
                </div>
            </div>
		);
}


