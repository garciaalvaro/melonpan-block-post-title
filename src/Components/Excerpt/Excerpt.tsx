import { Span, H2, H3, H4 } from "utils/Components";

interface WithSelectProps {
	excerpt: string;
}

interface Props extends EditProps, WithSelectProps {}

const { withSelect } = wp.data;

export const Excerpt: React.ComponentType<EditProps> = withSelect<
	WithSelectProps,
	EditProps
>(select => ({
	excerpt: select("core/editor").getEditedPostAttribute("excerpt") || ""
}))((props: Props) => {
	const { attributes, excerpt } = props;
	const { excerpt_html } = attributes;

	switch (excerpt_html) {
		case "h2":
			return <H2>{excerpt}</H2>;
			break;

		case "h3":
			return <H3>{excerpt}</H3>;
			break;

		case "h4":
			return <H4>{excerpt}</H4>;
			break;

		default:
			return <Span>{excerpt}</Span>;
			break;
	}
});
