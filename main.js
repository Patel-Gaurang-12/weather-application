// landing page
var city_names = [
	'Aberdeen',
	'Abilene',
	'Akron',
	'Albany',
	'Albuquerque',
	'Alexandria',
	'Allentown',
	'Amarillo',
	'Anaheim'
	, 'Anchorage'
	, 'Ann Arbor'
	, 'Antioch'
	, 'Apple Valley'
	, 'Appleton'
	, 'Arlington'
	, 'Arvada'
	, 'Asheville'
	, 'Athens'
	, 'Atlanta'
	, 'Atlantic City'
	, 'Augusta'
	, 'Aurora'
	, 'Austin'
	, 'Bakersfield'
	, 'Baltimore'
	, 'Barnstable'
	, 'Baton Rouge'
	, 'Beaumont'
	, 'Bel Air'
	, 'Bellevue'
	, 'Berkeley'
	, 'Bethlehem'
	, 'Billings'
	, 'Birmingham'
	, 'Bloomington'
	, 'Boise'
	, 'Boise City'
	, 'Bonita Springs'
	, 'Boston'
	, 'Boulder'
	, 'Bradenton'
	, 'Bremerton'
	, 'Bridgeport'
	, 'Brighton'
	, 'Brownsville'
	, 'Bryan'
	, 'Buffalo'
	, 'Burbank'
	, 'Burlington'
	, 'Cambridge'
	, 'Canton'
	, 'Cape Coral'
	, 'Carrollton'
	, 'Cary'
	, 'Cathedral City'
	, 'Cedar Rapids'
	, 'Champaign'
	, 'Chandler'
	, 'Charleston'
	, 'Charlotte'
	, 'Chattanooga'
	, 'Chesapeake'
	, 'Chicago'
	, 'Chula Vista'
	, 'Cincinnati'
	, 'Clarke County'
	, 'Clarksville'
	, 'Clearwater'
	, 'Cleveland'
	, 'College Station'
	, 'Colorado Springs'
	, 'Columbia'
	, 'Columbus'
	, 'Concord'
	, 'Coral Springs'
	, 'Corona'
	, 'Corpus Christi'
	, 'Costa Mesa'
	, 'Dallas'
	, 'Daly City'
	, 'Danbury'
	, 'Davenport'
	, 'Davidson County'
	, 'Dayton'
	, 'Daytona Beach'
	, 'Deltona'
	, 'Denton'
	, 'Denver'
	, 'Des Moines'
	, 'Detroit'
	, 'Downey'
	, 'Duluth'
	, 'Durham'
	, 'El Monte'
	, 'El Paso'
	, 'Elizabeth'
	, 'Elk Grove'
	, 'Elkhart'
	, 'Erie'
	, 'Escondido'
	, 'Eugene'
	, 'Evansville'
	, 'Fairfield'
	, 'Fargo'
	, 'Fayetteville'
	, 'Fitchburg'
	, 'Flint'
	, 'Fontana'
	, 'Fort Collins'
	, 'Fort Lauderdale'
	, 'Fort Smith'
	, 'Fort Walton Beach'
	, 'Fort Wayne'
	, 'Fort Worth'
	, 'Frederick'
	, 'Fremont'
	, 'Fresno'
	, 'Fullerton'
	, 'Gainesville'
	, 'Garden Grove'
	, 'Garland'
	, 'Gastonia'
	, 'Gilbert'
	, 'Glendale'
	, 'Grand Prairie'
	, 'Grand Rapids'
	, 'Grayslake'
	, 'Green Bay'
	, 'GreenBay'
	, 'Greensboro'
	, 'Greenville'
	, 'Gulfport-Biloxi'
	, 'Hagerstown'
	, 'Hampton'
	, 'Harlingen'
	, 'Harrisburg'
	, 'Hartford'
	, 'Havre de Grace'
	, 'Hayward'
	, 'Hemet'
	, 'Henderson'
	, 'Hesperia'
	, 'Hialeah'
	, 'Hickory'
	, 'High Point'
	, 'Hollywood'
	, 'Honolulu'
	, 'Houma'
	, 'Houston'
	, 'Howell'
	, 'Huntington'
	, 'Huntington Beach'
	, 'Huntsville'
	, 'Independence'
	, 'Indianapolis'
	, 'Inglewood'
	, 'Irvine'
	, 'Irving'
	, 'Jackson'
	, 'Jacksonville'
	, 'Jefferson'
	, 'Jersey City'
	, 'Johnson City'
	, 'Joliet'
	, 'Kailua'
	, 'Kalamazoo'
	, 'Kaneohe'
	, 'Kansas City'
	, 'Kennewick'
	, 'Kenosha'
	, 'Killeen'
	, 'Kissimmee'
	, 'Knoxville'
	, 'Lacey'
	, 'Lafayette'
	, 'Lake Charles'
	, 'Lakeland'
	, 'Lakewood'
	, 'Lancaster'
	, 'Lansing'
	, 'Laredo'
	, 'Las Cruces'
	, 'Las Vegas'
	, 'Layton'
	, 'Leominster'
	, 'Lewisville'
	, 'Lexington'
	, 'Lincoln'
	, 'Little Rock'
	, 'Long Beach'
	, 'Lorain'
	, 'Los Angeles'
	, 'Louisville'
	, 'Lowell'
	, 'Lubbock'
	, 'Macon'
	, 'Madison'
	, 'Manchester'
	, 'Marina'
	, 'Marysville'
	, 'McAllen'
	, 'McHenry'
	, 'Medford'
	, 'Melbourne'
	, 'Memphis'
	, 'Merced'
	, 'Mesa'
	, 'Mesquite'
	, 'Miami'
	, 'Milwaukee'
	, 'Minneapolis'
	, 'Miramar'
	, 'Mission Viejo'
	, 'Mobile'
	, 'Modesto'
	, 'Monroe'
	, 'Monterey'
	, 'Montgomery'
	, 'Moreno Valley'
	, 'Murfreesboro'
	, 'Murrieta'
	, 'Muskegon'
	, 'Myrtle Beach'
	, 'Naperville'
	, 'Naples'
	, 'Nashua'
	, 'Nashville'
	, 'New Bedford'
	, 'New Haven'
	, 'New London'
	, 'New Orleans'
	, 'New York'
	, 'New York City'
	, 'Newark'
	, 'Newburgh'
	, 'Newport News'
	, 'Norfolk'
	, 'Normal'
	, 'Norman'
	, 'North Charleston'
	, 'North Las Vegas'
	, 'North Port'
	, 'Norwalk'
	, 'Norwich'
	, 'Oakland'
	, 'Ocala'
	, 'Oceanside'
	, 'Odessa'
	, 'Ogden'
	, 'Oklahoma City'
	, 'Olathe'
	, 'Olympia'
	, 'Omaha'
	, 'Ontario'
	, 'Orange'
	, 'Orem'
	, 'Orlando'
	, 'Overland Park'
	, 'Oxnard'
	, 'Palm Bay'
	, 'Palm Springs'
	, 'Palmdale'
	, 'Panama City'
	, 'Pasadena'
	, 'Paterson'
	, 'Pembroke Pines'
	, 'Pensacola'
	, 'Peoria'
	, 'Philadelphia'
	, 'Phoenix'
	, 'Pittsburgh'
	, 'Plano'
	, 'Pomona'
	, 'Pompano Beach'
	, 'Port Arthur'
	, 'Port Orange'
	, 'Port Saint Lucie'
	, 'Port St. Lucie'
	, 'Portland'
	, 'Portsmouth'
	, 'Poughkeepsie'
	, 'Providence'
	, 'Provo'
	, 'Pueblo'
	, 'Punta Gorda'
	, 'Racine'
	, 'Raleigh'
	, 'Rancho Cucamonga'
	, 'Reading'
	, 'Redding'
	, 'Reno'
	, 'Richland'
	, 'Richmond'
	, 'Richmond County'
	, 'Riverside'
	, 'Roanoke'
	, 'Rochester'
	, 'Rockford'
	, 'Roseville'
	, 'Round Lake Beach'
	, 'Sacramento'
	, 'Saginaw'
	, 'Saint Louis'
	, 'Saint Paul'
	, 'Saint Petersburg'
	, 'Salem'
	, 'Salinas'
	, 'Salt Lake City'
	, 'San Antonio'
	, 'San Bernardino'
	, 'San Buenaventura'
	, 'San Diego'
	, 'San Francisco'
	, 'San Jose'
	, 'Santa Ana'
	, 'Santa Barbara'
	, 'Santa Clara'
	, 'Santa Clarita'
	, 'Santa Cruz'
	, 'Santa Maria'
	, 'Santa Rosa'
	, 'Sarasota'
	, 'Savannah'
	, 'Scottsdale'
	, 'Scranton'
	, 'Seaside'
	, 'Seattle'
	, 'Sebastian'
	, 'Shreveport'
	, 'Simi Valley'
	, 'Sioux City'
	, 'Sioux Falls'
	, 'South Bend'
	, 'South Lyon'
	, 'Spartanburg'
	, 'Spokane'
	, 'Springdale'
	, 'Springfield'
	, 'St. Louis'
	, 'St. Paul'
	, 'St. Petersburg'
	, 'Stamford'
	, 'Sterling Heights'
	, 'Stockton'
	, 'Sunnyvale'
	, 'Syracuse'
	, 'Tacoma'
	, 'Tallahassee'
	, 'Tampa'
	, 'Temecula'
	, 'Tempe'
	, 'Thornton'
	, 'Thousand Oaks'
	, 'Toledo'
	, 'Topeka'
	, 'Torrance'
	, 'Trenton'
	, 'Tucson'
	, 'Tulsa'
	, 'Tuscaloosa'
	, 'Tyler'
	, 'Utica'
	, 'Vallejo'
	, 'Vancouver'
	, 'Vero Beach'
	, 'Victorville'
	, 'Virginia Beach'
	, 'Visalia'
	, 'Waco'
	, 'Warren'
	, 'Washington'
	, 'Waterbury'
	, 'Waterloo'
	, 'West Covina'
	, 'West Valley City'
	, 'Westminster'
	, 'Wichita'
	, 'Wilmington'
	, 'Winston'
	, 'Winter Haven'
	, 'Worcester'
	, 'Yakima'
	, 'Yonkers'
	, 'York'
	, 'Youngstown',
	'Adilabad',
	'Anantapur',
	'Chittoor',
	'Kakinada',
	'Guntur',
	'Hyderabad',
	'Karimnagar',
	'Khammam',
	'Krishna',
	'Kurnool',
	'Mahbubnagar',
	'Medak',
	'Nalgonda',
	'Nizamabad',
	'Ongole',
	'Hyderabad',
	'Srikakulam',
	'Nellore',
	'Visakhapatnam',
	'Vizianagaram',
	'Warangal',
	'Eluru',
	'Kadapa',
	'Anjaw',
	'Changlang',
	'East Siang',
	'Kurung Kumey',
	'Lohit',
	'Lower Dibang Valley',
	'Lower Subansiri',
	'Papum Pare',
	'Tawang',
	'Tirap',
	'Dibang Valley',
	'Upper Siang',
	'Upper Subansiri',
	'West Kameng',
	'West Siang',
	'Baksa',
	'Barpeta',
	'Bongaigaon',
	'Cachar',
	'Chirang',
	'Darrang',
	'Dhemaji',
	'Dima Hasao',
	'Dhubri',
	'Dibrugarh',
	'Goalpara',
	'Golaghat',
	'Hailakandi',
	'Jorhat',
	'Kamrup',
	'Kamrup Metropolitan',
	'Karbi Anglong',
	'Karimganj',
	'Kokrajhar',
	'Lakhimpur',
	'Marigaon',
	'Nagaon',
	'Nalbari',
	'Sibsagar',
	'Sonitpur',
	'Tinsukia',
	'Udalguri',
	'Araria',
	'Arwal',
	'Aurangabad',
	'Banka',
	'Begusarai',
	'Bhagalpur',
	'Bhojpur',
	'Buxar',
	'Darbhanga',
	'East Champaran',
	'Gaya',
	'Gopalganj',
	'Jamui',
	'Jehanabad',
	'Kaimur',
	'Katihar',
	'Khagaria',
	'Kishanganj',
	'Lakhisarai',
	'Madhepura',
	'Madhubani',
	'Munger',
	'Muzaffarpur',
	'Nalanda',
	'Nawada',
	'Patna',
	'Purnia',
	'Rohtas',
	'Saharsa',
	'Samastipur',
	'Saran',
	'Sheikhpura',
	'Sheohar',
	'Sitamarhi',
	'Siwan',
	'Supaul',
	'Vaishali',
	'West Champaran',
	'Chandigarh',
	'Bastar',
	'Bijapur',
	'Bilaspur',
	'Dantewada',
	'Dhamtari',
	'Durg',
	'Jashpur',
	'Janjgir-Champa',
	'Korba',
	'Koriya',
	'Kanker',
	'Kabirdham (Kawardha)',
	'Mahasamund',
	'Narayanpur',
	'Raigarh',
	'Rajnandgaon',
	'Raipur',
	'Surguja',
	'delhi',
	'Ahmedabad',
	'Amreli district',
	'Anand',
	'Banaskantha',
	'Bharuch',
	'Bhavnagar',
	'Dahod',
	'The Dangs',
	'Gandhinagar',
	'Jamnagar',
	'Junagadh',
	'Kutch',
	'Kheda',
	'Mehsana',
	'Narmada',
	'Navsari',
	'Patan',
	'Panchmahal',
	'Porbandar',
	'Rajkot',
	'Sabarkantha',
	'Surendranagar',
	'Surat',
	'Vyara',
	'Vadodara',
	'Valsad',
	'Ambala',
	'Bhiwani',
	'Faridabad',
	'Fatehabad',
	'Gurgaon',
	'Hissar',
	'Jhajjar',
	'Jind',
	'Karnal',
	'Kaithal',
	'Kurukshetra',
	'Mahendragarh',
	'Mewat',
	'Palwal',
	'Panchkula',
	'Panipat',
	'Rewari',
	'Rohtak',
	'Sirsa',
	'Sonipat',
	'Yamuna Nagar',
	'Bilaspur',
	'Chamba',
	'Hamirpur',
	'Kangra',
	'Kinnaur',
	'Kullu',
	'Lahaul and Spiti',
	'Mandi',
	'Shimla',
	'Sirmaur',
	'Solan',
	'Una',
	'Anantnag',
	'Badgam',
	'Bandipora',
	'Baramulla',
	'Doda',
	'Ganderbal',
	'Jammu',
	'Kargil',
	'Kathua',
	'Kishtwar',
	'Kupwara',
	'Kulgam',
	'Leh',
	'Poonch',
	'Pulwama',
	'Rajauri',
	'Ramban',
	'Reasi',
	'Samba',
	'Shopian',
	'Srinagar',
	'Udhampur',
	'Bokaro',
	'Chatra',
	'Deoghar',
	'Dhanbad',
	'Dumka',
	'East Singhbhum',
	'Garhwa',
	'Giridih',
	'Godda',
	'Gumla',
	'Hazaribag',
	'Jamtara',
	'Khunti',
	'Koderma',
	'Latehar',
	'Lohardaga',
	'Pakur',
	'Palamu',
	'Ramgarh',
	'Ranchi',
	'Sahibganj',
	'Seraikela Kharsawan',
	'Simdega',
	'West Singhbhum',
	'Bagalkot',
	'Bangalore Rural',
	'Bangalore Urban',
	'Belgaum',
	'Bellary',
	'Bidar',
	'Bijapur',
	'Chamarajnagar',
	'Chikkamagaluru',
	'Chikkaballapur',
	'Chitradurga',
	'Davanagere',
	'Dharwad',
	'Dakshina Kannada',
	'Gadag',
	'Gulbarga',
	'Hassan',
	'Haveri district',
	'Kodagu',
	'Kolar',
	'Koppal',
	'Mandya',
	'Mysore',
	'Raichur',
	'Shimoga',
	'Tumkur',
	'Udupi',
	'Uttara Kannada',
	'Ramanagara',
	'Yadgir',
	'Alappuzha',
	'Ernakulam',
	'Idukki',
	'Kannur',
	'Kasaragod',
	'Kollam',
	'Kottayam',
	'Kozhikode',
	'Malappuram',
	'Palakkad',
	'Pathanamthitta',
	'Thrissur',
	'Thiruvananthapuram',
	'Wayanad',
	'Alirajpur',
	'Anuppur',
	'Ashok Nagar',
	'Balaghat',
	'Barwani',
	'Betul',
	'Bhind',
	'Bhopal',
	'Burhanpur',
	'Chhatarpur',
	'Chhindwara',
	'Damoh',
	'Datia',
	'Dewas',
	'Dhar',
	'Dindori',
	'Guna',
	'Gwalior',
	'Harda',
	'Hoshangabad',
	'Indore',
	'Jabalpur',
	'Jhabua',
	'Katni',
	'Khandwa (East Nimar)',
	'Khargone (West Nimar)',
	'Mandla',
	'Mandsaur',
	'Morena',
	'Narsinghpur',
	'Neemuch',
	'Panna',
	'Rewa',
	'Rajgarh',
	'Ratlam',
	'Raisen',
	'Sagar',
	'Satna',
	'Sehore',
	'Seoni',
	'Shahdol',
	'Shajapur',
	'Sheopur',
	'Shivpuri',
	'Sidhi',
	'Singrauli',
	'Tikamgarh',
	'Ujjain',
	'Umaria',
	'Vidisha',
	'Ahmednagar',
	'Akola',
	'Amravati',
	'Aurangabad',
	'Bhandara',
	'Beed',
	'Buldhana',
	'Chandrapur',
	'Dhule',
	'Gadchiroli',
	'Gondia',
	'Hingoli',
	'Jalgaon',
	'Jalna',
	'Kolhapur',
	'Latur',
	'Mumbai City',
	'Mumbai suburban',
	'Nandurbar',
	'Nanded',
	'Nagpur',
	'Nashik',
	'Osmanabad',
	'Parbhani',
	'Pune',
	'Raigad',
	'Ratnagiri',
	'Sindhudurg',
	'Sangli',
	'Solapur',
	'Satara',
	'Thane',
	'Wardha',
	'Washim',
	'Yavatmal',
];
(function () {
	'use strict';
	let inputField = document.getElementById('input');
	let ulField = document.getElementById('suggestions');
	inputField.addEventListener('input'
		, changeAutoComplete);
	ulField.addEventListener('click'
		, selectItem);

	function changeAutoComplete({ target }) {
		let data = target.value;
		ulField.innerHTML = ``;
		if (data.length) {
			let autoCompleteValues = autoComplete(data);
			autoCompleteValues.forEach(value => { addItem(value); });
		}
	}

	function autoComplete(inputValue) {
		city_names = city_names.sort();
		return city_names.filter(
			(value) => value.toLowerCase().includes(inputValue.toLowerCase())
		);
	}

	function addItem(value) {
		ulField.innerHTML = ulField.innerHTML + `<li>${value}</li>`;
	}

	function selectItem({ target }) {
		if (target.tagName === 'LI') {
			inputField.value = target.textContent;
			ulField.innerHTML = ``;
		}
	}
})();

async function buttenClick() {
	let data;
	let validation = /[a-z A-Z]/;
	let getValue = document.getElementById('input').value;
	if (validation.test(getValue)) {
		document.getElementById('required').style.visibility = 'hidden';
		data = await charge(document.getElementById('input').value);
		document.getElementById("container").style.display = "inline-flex";
		actionValue(data);
	}
	else {
		document.getElementById('required').style.visibility = 'visible';
		document.getElementById('input').style.border = '2px solid red';
		document.getElementById('input').style.borderRadius = '30px';
	}
}

// API content

async function charge(name) {
	let apidata;
	await fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=' + name + '&format=json&u=c'
		, {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'your api key',
				'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
			}
		}).then(responce => {
			return responce.json();
		}).then(data => {
			apidata = data;
		}).catch(err => {
			console.log('Error ocurr in first function,' + err);
		});
	return apidata;
}

//next page

function actionValue(data) {
	console.log(data);
	document.getElementById("app-country").innerHTML = data.location.country;
	document.getElementById("app-region").innerHTML = data.location.region;
	document.getElementById("app-city").innerHTML = data.location.city;
	document.getElementById("app-temp").innerHTML = data.current_observation.condition.temperature;
	document.getElementById("app-humi").innerHTML = data.current_observation.atmosphere.humidity;
	document.getElementById("app-pre").innerHTML = data.current_observation.atmosphere.pressure;
	document.getElementById("app-rise").innerHTML = data.current_observation.astronomy.sunrise;
	document.getElementById("app-set").innerHTML = data.current_observation.astronomy.sunset;
	document.getElementById("app-direction").innerHTML = data.current_observation.wind.direction;
	document.getElementById("app-speed").innerHTML = data.current_observation.wind.speed;
	document.getElementById("app-temp").insertAdjacentHTML("beforeend"
		, " °C");
	document.getElementById("app-humi").insertAdjacentHTML("beforeend"
		, " %");
	document.getElementById("app-pre").insertAdjacentHTML("beforeend"
		, " mb");
	document.getElementById("app-direction").insertAdjacentHTML("beforeend"
		, "°");
	document.getElementById("app-speed").insertAdjacentHTML("beforeend"
		, " km/hr");

	// Chat

	let days = [];
	days[0] = "today";
	days[1] = "yesterday";
	for (let i = 2; i < data.forecasts.length; i++) {
		days[i] = data.forecasts[i].day;
	}

	let minValue = data.forecasts[0].high;
	let maxvalue = data.forecasts[0].low;
	for (let i = 1; i < data.forecasts.length; i++) {
		if (minValue > data.forecasts[i].low) {
			minValue = data.forecasts[i].low;
		}
		if (maxvalue < data.forecasts[i].high) {
			maxvalue = data.forecasts[i].high;
		}
	}
	minValue += (-5);
	maxvalue += 5;
	var xValues = days;

	let highTemp = [];
	let lowTemp = [];
	data.forecasts.forEach(value => {
		highTemp.push(value.high);
		lowTemp.push(value.low);
	});

	new Chart("myChart"
		, {
			type: "line",
			data: {
				labels: xValues,
				datasets: [{
					data: highTemp,
					borderColor: "#ff4848c9",
					fill: false
				}
					, {
					data: lowTemp,
					borderColor: "#0013ffc7",
					fill: false
				}]
			},
			options: {
				legend: { display: false },
				scales: {
					yAxes: [{
						display: true,
						ticks: {
							min: minValue,
							max: maxvalue
						}
					}]
				},
			}
		});
}