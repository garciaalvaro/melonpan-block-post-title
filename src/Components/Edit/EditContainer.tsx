import { Div } from "utils/Components";

interface Props extends EditProps {
	children: React.ReactNode;
}

const { Fragment } = wp.element;

export const EditContainer: React.ComponentType<Props> = props => {
	const { children, className, attributes } = props;
	const { excerpt_enabled } = attributes;

	if (excerpt_enabled) {
		return <Div className={className}>{children}</Div>;
	}

	return <Fragment>{children}</Fragment>;
};
