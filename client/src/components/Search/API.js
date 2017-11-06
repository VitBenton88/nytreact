import axios from "axios";

const API = (topic, startYear, endYear) => {

  	const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
	const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key
	=${authKey}authKey&q
	=${topic}&begin_date
	=${startYear}0101&end_date
	=${endYear}0101`;

	axios.get(queryURL).then(function(response){
		return response.data;
	});

};

export default API;