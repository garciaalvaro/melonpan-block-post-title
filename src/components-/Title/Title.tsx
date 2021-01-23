import { withSelect } from "@wordpress/data";

import { Span, H1, A } from "utils/Components";

interface WithSelectProps {
	title: string;
}

interface Props extends EditProps, WithSelectProps {}

export const Title: React.ComponentType<EditProps> = withSelect<
	WithSelectProps,
	EditProps
>(select => ({
	title: select("core/editor").getEditedPostAttribute("title") || ""
}))((props: Props) => {
	const { className, attributes, title } = props;
	const { excerpt_enabled, title_html } = attributes;
	const classes = [excerpt_enabled ? className : null, "title"];

	switch (title_html) {
		case "a":
			return (
				<A className={classes} href="#">
					{title}
				</A>
			);
			break;

		case "a_h1":
			return (
				<A className={classes} href="#">
					<H1>{title}</H1>
				</A>
			);
			break;

		case "h1":
			return <H1 className={classes}>{title}</H1>;
			break;

		case "h1_a":
			return (
				<H1 className={classes}>
					<A href="#">{title}</A>
				</H1>
			);
			break;

		default:
			return <Span className={classes}>{title}</Span>;
			break;
	}
});
