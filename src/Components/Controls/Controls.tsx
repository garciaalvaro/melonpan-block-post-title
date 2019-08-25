import { Div } from "utils/Components";
import { ControlTitle } from "../ControlTitle/ControlTitle";
import { ControlExcerpt } from "../ControlExcerpt/ControlExcerpt";

const { InspectorControls } = wp.blockEditor;

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
