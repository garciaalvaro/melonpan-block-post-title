import { EditContainer } from "./EditContainer";
import { Controls } from "../Controls/Controls";
import { Title } from "../Title/Title";
import { Excerpt } from "../Excerpt/Excerpt";

export const Edit: React.ComponentType<EditProps> = props => {
	const { attributes } = props;
	const { excerpt_enabled } = attributes;

	return (
		<EditContainer {...props}>
			<Title {...props} />
			{excerpt_enabled && <Excerpt {...props} />}
			<Controls {...props} />
		</EditContainer>
	);
};
