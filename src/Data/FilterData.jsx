export const color = ["white", "black", "red", "maroon", "beige", "pink", "green", "yellow"];
export const filters = [
	{
		id: "color",
		name: "Color",
		options: [
			{ value: "white", label: "White", checked: false },
			{ value: "beige", label: "Beige", checked: false },
			{ value: "blue", label: "Blue", checked: true },
			{ value: "brown", label: "Brown", checked: false },
			{ value: "green", label: "Green", checked: false },
			{ value: "purple", label: "Purple", checked: false },
			{ value: "yellow", label: "Yellow", checked: false },
		],
	},
	{
		id: "size",
		name: "Size",
		options: [
			{ value: "S", label: "S" },
			{ value: "M", label: "M" },
			{ value: "L", label: "L" },
		],
	}
];

export const singleFilter = [
	{
		id: "price",
		name: "Price",
		options: [
			{ value: "159-399", label: "$159 To 399", checked: false },
			{ value: "399-999", label: "$399 To 999", checked: false },
			{ value: "999-1999", label: "$999 To 1999", checked: false },
			{ value: "1999-2999", label: "$1999 To 2999", checked: false },
			{ value: "2999-3999", label: "$2999 To 3999", checked: false },
			{ value: "3999-4999", label: "$3999 To 4999", checked: true },
		],
	},
	{
		id: "discount",
		name: "Discount Range",
		options: [
			{ value: "10", label: "10% and above", checked: false },
			{ value: "20", label: "20% and above", checked: false },
			{ value: "30", label: "30% and above", checked: false },
			{ value: "40", label: "40% and above", checked: false },
			{ value: "50", label: "50% and above", checked: true },
			{ value: "60", label: "60% and above", checked: true },
			{ value: "70", label: "70% and above", checked: false },
			{ value: "80", label: "80% and above", checked: false },
		],
	},
	{
		id: "stock",
		name: "Availability",
		options: [
			{ value: "in-stock", label: "In Stock", checked: false },
			{ value: "out_of_stock", label: "Out of Stock", checked: false },
		],
	},
];

export const sortOptions = [
	{ name: "Price: Low to High", query: "price_low", current: false },
	{ name: "Price: High to Low", query: "price_high", current: false },
];
