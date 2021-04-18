var app = new Vue({
  el: '#app',
  data: {
			touched: false,
      number_bedrooms: '1',
      number_bathrooms: '1',
      offers: [],
  },
  methods: {
      search: function(e) {
					e.preventDefault();
          vm = this;

          if (vm.number_bedrooms == '' || vm.number_bathrooms == '') {
            return;
          }

          search_url = 'https://2ansk0ayt1.execute-api.eu-west-1.amazonaws.com/search?number_bedrooms='+vm.number_bedrooms+'&number_bathrooms='+vm.number_bathrooms
          axios.get(search_url)
              .then(function(response) {
                vm.offers = response.data.offers;
								vm.touched = true;
              })
              .catch(function(error) {
                console.log(error);
              });
      }
  }
})
