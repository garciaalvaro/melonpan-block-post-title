import { Icon } from "utils/Components";
import {
	block_category,
	block_name,
	plugin_description,
	plugin_title
} from "utils/data/plugin";
import { Edit } from "Components/Edit/Edit";

type AttributesDefinition = Record<keyof Attributes, any>;

wp.blocks.registerBlockType<AttributesDefinition>(block_name, {
	title: plugin_title,
	icon: () => <Icon icon="logo" />,
	category: block_category,
	description: plugin_description,
	supports: { align: true },
	edit: (props: EditProps) => <Edit {...props} />,
	save: () => null,
	attributes: {
		title_html: {
			type: "string",
			default: "h1_a"
		},
		excerpt_enabled: {
			type: "boolean",
			default: false
		},
		excerpt_html: {
			type: "string",
			default: "span"
		}
	}
});