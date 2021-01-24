import React, { FunctionComponent } from "react";
import { __ } from "@wordpress/i18n";
import { ToggleControl, RadioControl } from "@wordpress/components";

import styles from "./ControlExcerpt.styl";
import { className } from "@/utils";

export const ControlExcerpt: FunctionComponent<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { excerpt_enabled, excerpt_html } = attributes;

	return (
		<div className={styles.container}>
			<div className={styles.checkbox}>
				<label className={styles.checkbox_label}>
					{__("Post Excerpt")}
				</label>

				<ToggleControl
					label={excerpt_enabled ? __("Active") : __("Not active")}
					checked={excerpt_enabled}
					onChange={(
						excerpt_enabled: Attributes["excerpt_enabled"]
					) => setAttributes({ excerpt_enabled })}
				/>
			</div>

			<RadioControl
				label={__("Excerpt HTML tag")}
				className={className([
					styles.radio,
					excerpt_enabled ? null : styles["no-is_active"],
				])}
				selected={excerpt_html}
				onChange={(excerpt_html: Attributes["excerpt_html"]) =>
					setAttributes({ excerpt_html })
				}
				options={[
					{
						value: "h2",
						label: __("h2"),
					},
					{
						value: "h3",
						label: __("h3"),
					},
					{
						value: "h4",
						label: __("h4"),
					},
					{
						value: "span",
						label: __("span"),
					},
				]}
			/>
		</div>
	);
};
