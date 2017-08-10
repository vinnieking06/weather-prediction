import axios from 'axios';

export default function getWeatherForCurrentLocation() {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition((data) => {
			getCurrentConditions(data.coords.latitude, data.coords.longitude)
				.then((data) => {
					const willItRain = rainChecker(data);
					const state = ({ 
						rain: willItRain,
						loading: false,
						city: data.data.location.name,
						temperature: data.data.current.temp_f,
						description: data.data.current.condition.text
					});
					resolve(state);
				})
				.catch((err) => {
					reject(err)
				})
	},(err) => {
			reject(err);
		})
	})
} 

function getCurrentConditions(lat, lon) {
	return axios(`https://api.apixu.com/v1/forecast.json?key=4ccc108d1c0b4b65ba072133172807&q=${lat},${lon}&days=2`)
}

function rainChecker(data) {
	const fortyEightHours = data.data.forecast.forecastday[0].hour.concat(data.data.forecast.forecastday[1].hour);
	const currentDate = new Date();
	const currentHour =  currentDate.getHours();
	// used 13 because current hour could be behind by up to an hour
	for (let i = currentHour; i < currentHour + 13; i++) {
		console.log(i);
			if (fortyEightHours[i].will_it_rain === 1) {
			return true
		}
	}
	return false
}
