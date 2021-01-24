interface Attributes {
	title_html: "h1" | "h1_a" | "a" | "a_h1" | "span";
	excerpt_enabled: boolean;
	excerpt_html: "h2" | "h3" | "h4" | "span";
}

interface EditProps {
	[key: string]: unknown;
	className: string;
	attributes: Attributes;
	setAttributes: (attributes: Partial<Attributes>) => void;
}

// CSS modules
declare module "*.styl" {
	const styles: { [className: string]: string };
	export default styles;
}
