export const categoryCarousel = [
	{
		breakpoint: 3000,
		cols: 4,
		rows: 2,
		gap: 10,

		loop: true,
		autoplay: 5000,
	},
	{
		breakpoint: 1270,
		cols: 3,
		rows: 2,
		gap: 10,

		loop: true,
		autoplay: 5000,
	},
	{
		breakpoint: 991,
		cols: 2,
		rows: 2,
		gap: 10,

		loop: true,
		autoplay: 5000,
	},
	{
		breakpoint: 767,
		cols: 2,
		rows: 2,
		gap: 10,
		loop: true,
		autoplay: 5000,
	},
	{
		breakpoint: 480,
		cols: 1,
		rows: 2,
		gap: 10,
		loop: true,
		autoplay: 5000,
	},
];

export const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1200 },
		items: 4,
	},
	tablet: {
		breakpoint: { max: 1200, min: 800 },
		items: 3,
	},
	mobile: {
		breakpoint: { max: 800, min: 0 },
		items: 2,
	},
};

export const responsiveTwo = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 1,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1200 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1200, min: 800 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 800, min: 0 },
		items: 1,
	},
};
