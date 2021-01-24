import React, { FunctionComponent } from "react";
import { InspectorControls } from "@wordpress/block-editor";

import { ControlTitle } from "../ControlTitle";
import { ControlExcerpt } from "../ControlExcerpt";

export const Controls: FunctionComponent<EditProps> = props => {
	return (
		<InspectorControls>
			<div>
				<ControlTitle {...props} />

				<ControlExcerpt {...props} />
			</div>
		</InspectorControls>
	);
};
