export const useProductsStore = defineStore('productsStore', {

	state: () => ({
		products: [
			{
				image: "1.png",
				title: "Six-piece clothing set (blouse - pants - hat and ...",
				price: "1000",
				liked: false,
				lotDate: {
					days: 3,
					hours: 10,
					minutes: 49
				},
				offer: {
					lable: "Live auction",
					type: 1
				}
			},
			{
				image: "2.png",
				title: "Six-piece clothing set (blouse - pants - hat and ...",
				price: "1500",
				liked: true,
				lotDate: {
					days: 5,
					hours: 12,
					minutes: 49
				},
				offer: {
					lable: "Live auction",
					type: 1
				}
			},
			{
				image: "3.png",
				title: "Six-piece clothing set (blouse - pants - hat and ...",
				price: "300",
				liked: false,
				lotDate: {
					days: 18,
					hours: 12,
					minutes: 43
				},
				offer: {
					lable: "hot sale",
					type: 2
				}
			},
			{
				image: "4.png",
				title: "Six-piece clothing set (blouse - pants - hat and ...",
				price: "1200",
				liked: false,
				lotDate: {
					days: 3,
					hours: 14,
					minutes: 32
				},
				offer: {
					lable: "hot sale",
					type: 2
				}
			}
		]
	}),
	actions: {
		follow() {
			alert('clicked');
		}
	}

})
