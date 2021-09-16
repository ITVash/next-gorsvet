const withPWA = require("next-pwa")
module.exports = withPWA({
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
	},
	reactStrictMode: true,
	images: {
		domains: [
			"http://localhost:3001",
			"https://kkpdgs.cf",
			"localhost:3001",
			"kkpdgs.cf",
			"localhost",
		],
	},
	env: {
		PRIVATE_KEY: "t5F_ECQJp4ZX-exWwhStyDVyfYi4qyh8Dwknt4R5ZU0",
		API_URLs: "http://localhost:3001/api/",
		API_URL: "https://kkpdgs.cf/api/",
		API_TEL:
			"https://api.telegram.org/bot832124158:AAEbvNYq9jRfJmLvQAaV4XOx2H3IQOM-ZNA/sendMessage",
	},
})
/* module.exports = {
	reactStrictMode: true,
	images: {
		domains: [
			"http://localhost:3001",
			"https://kkpdgs.cf",
			"localhost:3001",
			"kkpdgs.cf",
			"localhost",
		],
	},
	env: {
		PRIVATE_KEY: "t5F_ECQJp4ZX-exWwhStyDVyfYi4qyh8Dwknt4R5ZU0",
		API_URL: "http://localhost:3001/api/",
		API_URLs: "https://kkpdgs.cf/api/",
		API_TEL:
			"https://api.telegram.org/bot832124158:AAEbvNYq9jRfJmLvQAaV4XOx2H3IQOM-ZNA/sendMessage",
	},
} */
