export const useProfileStore = defineStore('profileStore', {
	state: () => ({
		avatar: '/assets/avatars/hala_ahmed.svg',
		name: 'userName',
		following: true,
		bio: 'userBio',
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
