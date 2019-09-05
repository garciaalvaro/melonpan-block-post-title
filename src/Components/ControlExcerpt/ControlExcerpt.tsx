import { __ } from "@wordpress/i18n";
import {
	BaseControl,
	ToggleControl,
	RadioControl
} from "@wordpress/components";

import { Div } from "utils/Components";
import { addPrefix } from "utils/tools";

export const ControlExcerpt: React.ComponentType<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { excerpt_enabled, excerpt_html } = attributes;

	return (
		<Div className="control-container">
			<BaseControl
				id={addPrefix("control-excerpt_enabled")}
				className={addPrefix("control")}
				label={__("Post Excerpt")}
			>
				<ToggleControl
					className={addPrefix("control-toggle")}
					label={excerpt_enabled ? __("Active") : __("Not active")}
					checked={excerpt_enabled}
					onChange={(excerpt_enabled: Attributes["excerpt_enabled"]) =>
						setAttributes({
							excerpt_enabled
						})
					}
				/>
			</BaseControl>
			<RadioControl
				label={__("Excerpt HTML tag")}
				className={addPrefix([
					"control-radio",
					excerpt_enabled ? "is_active" : "no-is_active"
				])}
				selected={excerpt_html}
				onChange={excerpt_html => setAttributes({ excerpt_html })}
				options={[
					{
						value: "h2",
						label: __("h2")
					},
					{
						value: "h3",
						label: __("h3")
					},
					{
						value: "h4",
						label: __("h4")
					},
					{
						value: "span",
						label: __("span")
					}
				]}
			/>
		</Div>
	);
};
