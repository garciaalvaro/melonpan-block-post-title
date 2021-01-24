import React, { FunctionComponent } from "react";
import { Fragment } from "@wordpress/element";

import { Controls } from "../Controls";
import { Title } from "../Title";
import { Excerpt } from "../Excerpt";

export const Edit: FunctionComponent<EditProps> = props => {
	const { excerpt_enabled } = props.attributes;
	const Container = excerpt_enabled ? "div" : Fragment;

	const html_attributes = Object.keys(props)
		.filter(
			key =>
				["className", "style"].includes(key) ||
				key.search("data-") === 0
		)
		.reduce<Record<string, string>>(
			(acc, key) => ({ ...acc, [key]: props[key] as string }),
			{}
		);

	return (
		<Container {...html_attributes}>
			<Title {...props} html_attributes={html_attributes} />

			{excerpt_enabled && (
				<Excerpt excerpt_html={props.attributes.excerpt_html} />
			)}

			<Controls {...props} />
		</Container>
	);
};
