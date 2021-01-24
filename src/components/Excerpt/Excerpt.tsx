import React, { FunctionComponent } from "react";
import { useSelect } from "@wordpress/data";

export const Excerpt: FunctionComponent<
	Pick<EditProps["attributes"], "excerpt_html">
> = props => {
	const excerpt = useSelect<string>(
		select => select("core/editor").getEditedPostAttribute("excerpt") || ""
	);

	switch (props.excerpt_html) {
		case "h2":
			return <h2>{excerpt}</h2>;

		case "h3":
			return <h3>{excerpt}</h3>;

		case "h4":
			return <h4>{excerpt}</h4>;

		default:
			return <span>{excerpt}</span>;
	}
};
