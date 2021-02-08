var app = new Vue({
	el: "#container",
	mounted() {
		var url = `http://ip-api.com/json/${this.ip}`
		this.$http.get(url).then(function(r) {
			this.results = r.body
			this.ip = r.body.query
			this.status = true
		})
	},
	data: {
		ip: "",
		status: false,
		results: []
	},
	methods: {
		buscarIP() {
			var url = `http://ip-api.com/json/${this.ip}`
			this.$http.get(url).then(function(r) {
				this.results = r.body
				this.ip = r.body.query
				this.status = true
			})
		}
	}
})