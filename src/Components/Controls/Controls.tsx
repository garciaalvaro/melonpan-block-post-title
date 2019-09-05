import { InspectorControls } from "@wordpress/block-editor";

import { Div } from "utils/Components";
import { ControlTitle } from "../ControlTitle/ControlTitle";
import { ControlExcerpt } from "../ControlExcerpt/ControlExcerpt";

export const Controls: React.ComponentType<EditProps> = props => {
	return (
		<InspectorControls>
			<Div id="controls">
				<ControlTitle {...props} />
				<ControlExcerpt {...props} />
			</Div>
		</InspectorControls>
	);
};
