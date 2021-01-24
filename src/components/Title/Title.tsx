import React, { FunctionComponent } from "react";
import { useSelect } from "@wordpress/data";

import styles from "./Title.styl";
import { className } from "@/utils";

interface Props extends EditProps {
	html_attributes: Record<string, string>;
}

export const Title: FunctionComponent<Props> = props => {
	const { excerpt_enabled, title_html } = props.attributes;

	const title = useSelect<string>(
		select => select("core/editor").getEditedPostAttribute("title") || ""
	);

	const html_attributes = excerpt_enabled
		? { className: styles.title }
		: {
				...props.html_attributes,
				className: className([
					styles.title,
					props.html_attributes.className,
				]),
		  };

	switch (title_html) {
		case "a":
			return (
				<a href="#" {...html_attributes}>
					{title}
				</a>
			);

		case "a_h1":
			return (
				<a href="#" {...html_attributes}>
					<h1>{title}</h1>
				</a>
			);

		case "h1":
			return <h1 {...html_attributes}>{title}</h1>;

		case "h1_a":
			return (
				<h1 {...html_attributes}>
					<a href="#">{title}</a>
				</h1>
			);

		default:
			return <span {...html_attributes}>{title}</span>;
	}
};
