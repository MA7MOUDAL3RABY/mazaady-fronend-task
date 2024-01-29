export const useProductsStore = defineStore('productsStore', {
	state: () => ({
		avatar: '/assets/avatars/hala_ahmed.svg',
		name: 'Hala Ahmed',
		following: true,
		bio: 'I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.',
		score: [
			{
				value: "5",
				iconPath: "/assets/icons/following.svg",
				title: "Following",
				key: "following"
			},
			{
				value: "20",
				iconPath: "/assets/icons/followers.svg",
				title: "Followers",
				key: "followers"
			},
			{
				value: "4.2",
				sub: "15",
				iconPath: "/assets/icons/rate.svg",
				title: "Rate",
				key: "rate"
			}
		]

	}),
	actions: {
		follow() {
			alert('clicked');
		}
	}
})
