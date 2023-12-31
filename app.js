const App = Vue.createApp({
  data() {
    return {
      API_KEY: "bf67479ee99815351b0c4ec039e14e3d",
      BASE_URL: "https://api.openweathermap.org/data/2.5/",
      searchQuery: "Yangon",
      isErrorShow: true,
      errorMsg: "Please enter a valid location !",
      weather: {},
    };
  },
  mounted() {
    this.getWeather();
  },
  methods: {
    async getWeather() {
      const response = await fetch(
        `${this.BASE_URL}weather?q=${this.searchQuery}&units=metric&&APPID=${this.API_KEY}`
      );
      if (response.status === 200) {
        const data = await response.json();
        this.isErrorShow = true;
        this.weather = data;
        console.log(data);
      } else {
        this.isErrorShow = false;
      }
    },
    getCurrentDate() {
      const currentDate = new Date();
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let date = currentDate.getDate();
      let month = months[currentDate.getMonth()];
      let year = currentDate.getFullYear();
      let day = days[currentDate.getDay()];

      return `${date} ${month} ${year} ${day}`;
    },
  },
});
App.mount("#app");
