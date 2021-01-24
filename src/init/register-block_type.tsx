import React from "react";
import { registerBlockType } from "@wordpress/blocks";

import {
	block_category,
	block_name,
	block_description,
	block_title,
} from "@/utils";
import { Logo } from "@/components/Logo";
import { Edit } from "@/components/Edit";

interface AttributesDefinition {
	title_html: { type: string; default: Attributes["title_html"] };
	excerpt_enabled: { type: string; default: Attributes["excerpt_enabled"] };
	excerpt_html: { type: string; default: Attributes["excerpt_html"] };
}

registerBlockType<AttributesDefinition>(block_name, {
	title: block_title,
	icon: <Logo />,
	category: block_category,
	description: block_description,
	supports: { align: true },
	// @ts-expect-error The type given is more strict than the definition
	edit: (props: EditProps) => <Edit {...props} />,
	save: () => null,
	attributes: {
		title_html: {
			type: "string",
			default: "h1_a",
		},
		excerpt_enabled: {
			type: "boolean",
			default: false,
		},
		excerpt_html: {
			type: "string",
			default: "span",
		},
	},
});
