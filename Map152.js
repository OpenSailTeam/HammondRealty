const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

var priceArray = []
priceArray[0] = 0;
priceArray[1] = 250000;
priceArray[2] = 500000;
priceArray[3] = 750000;
priceArray[4] = 1000000;
priceArray[5] = 1500000;
priceArray[6] = 2000000;
priceArray[7] = 3000000;
priceArray[8] = 4000000;
priceArray[9] = 5000000;
priceArray[10] = 10000000;
priceArray[11] = 10000001;

var priceDict = {}
priceDict['10m'] = 10;
priceDict['5m-10m'] = 9;
priceDict['4m-5m'] = 8;
priceDict['3m-4m'] = 7;
priceDict['2m-3m'] = 6;
priceDict['1-5m-2m'] = 5;
priceDict['1m-1-5m'] = 4;
priceDict['750k-1m'] = 3;
priceDict['500k-750k'] = 2;
priceDict['250k-500k'] = 1;
priceDict['250-000'] = 0;

var soilArray = []
soilArray[0] = 0;
soilArray[1] = 10;
soilArray[2] = 20;
soilArray[3] = 30;
soilArray[4] = 40;
soilArray[5] = 50;
soilArray[6] = 60;
soilArray[7] = 70;
soilArray[8] = 80;
soilArray[9] = 90;
soilArray[10] = 100;

var soilDict = {}
soilDict['90'] = 9;
soilDict['80-90'] = 8;
soilDict['70-80'] = 7;
soilDict['60-70'] = 6;
soilDict['50-60'] = 5;
soilDict['40-50'] = 4;
soilDict['30-40'] = 3;
soilDict['20-30'] = 2;
soilDict['10-20'] = 1;
soilDict['10'] = 0;

var acresArray = []
acresArray[0] = 0;
acresArray[1] = 160;
acresArray[2] = 320;
acresArray[3] = 640;
acresArray[4] = 1280;
acresArray[5] = 2560;
acresArray[6] = 4000;
acresArray[7] = 6400;
acresArray[8] = 10000;
acresArray[9] = 10001;

var acresDict = {}
acresDict['10000'] = 8;
acresDict['6400-10000'] = 7;
acresDict['4000-6400'] = 6;
acresDict['2560-4000'] = 5;
acresDict['1280-2560'] = 4;
acresDict['640-1280'] = 3;
acresDict['320-640'] = 2;
acresDict['160-320'] = 1;
acresDict['160'] = 0;

var priceTooltipsArray = [
    wNumb({
        encoder: function(a) {
            return priceArray[Math.round(a)];
        },
        decimals: 0,
        thousand: ',',
        prefix: '$'
    }),
    wNumb({
        encoder: function(a) {
            return priceArray[Math.round(a)];
        },
        decimals: 0,
        thousand: ',',
        prefix: '$',
        edit: function(value) {
            return value == '$10,000,001' ? '∞' : value;
        }
    }),
]

var soilTooltipsArray = [
    wNumb({
        encoder: function(a) {
            return soilArray[Math.round(a)];
        },
        decimals: 0
    }),
    wNumb({
        encoder: function(a) {
            return soilArray[Math.round(a)];
        },
        decimals: 0
    }),
]

var acresTooltipsArray = [
    wNumb({
        encoder: function(a) {
            return acresArray[Math.round(a)];
        },
        decimals: 0,
        thousand: ',',
    }),
    wNumb({
        encoder: function(a) {
            return acresArray[Math.round(a)];
        },
        decimals: 0,
        thousand: ',',
        edit: function(value) {
            return value == '10,001' ? '∞' : value;
        }
    }),
]

$(function() {
    initializeSlider(priceArray, priceDict, 'slider-range', "price-checkbox", 'list-price-ranges', priceTooltipsArray);
    initializeSlider(soilArray, soilDict, 'slider-range-soil', "soil-checkbox", 'soil-final-rating-ranges', soilTooltipsArray);
    initializeSlider(acresArray, acresDict, 'slider-range-acres', "acres-checkbox", 'title-acres-ranges', acresTooltipsArray);
});

function initializeSlider(array, dict, id, className, paramsName, tooltipsArray) {

    $('#' + id).css('display', 'none');
    $("<div></div>").insertAfter('#' + id);

    var range = $('#' + id).next()[0];
    var inputs = document.getElementsByClassName(className);
    var startintone = 0;
    var startinttwo = array.length - 1;

    if (urlParams.get(paramsName)) {
        const params = urlParams.get(paramsName).split('|');
        var startintone = dict[params[0]];
        var startinttwo = dict[params[params.length - 1]] + 1;
    }

    noUiSlider.create(range, {
        connect: true,
        start: [startintone, startinttwo],
        margin: 1,
        range: {
            'min': [0],
            'max': [array.length - 1]
        },
        step: 1,
        tooltips: tooltipsArray,
    });

    function checkit(index) {
        if (inputs[index].checked) {} else {
            inputs[index].click();
        }
    }

    function uncheckit(index) {
        if (inputs[index].checked) {
            inputs[index].click();
        }
    }

    range.noUiSlider.on('change', function(values) {

        for (var i = 0; i < inputs.length; i++) {
            if (parseInt(values[0]) <= i & i < parseInt(values[1])) {
                checkit(i);
            } else {
                uncheckit(i);
            }
        }

    });

    $("#clear-filters")
        .click(function(e) {
            range.noUiSlider.set([startintone, startinttwo]);
        });
}


$(function() {

    var prices = document.getElementsByClassName("price-checkbox");
    var acres = document.getElementsByClassName("acres-checkbox");
    var soil = document.getElementsByClassName("soil-checkbox");
    var locations = document.getElementsByClassName("location-checkbox");
    var listingStatuses = document.getElementsByClassName("listing-status-checkbox");
    var enterprises = document.getElementsByClassName("enterprise-checkbox");

    $("#clear-filters")
        .click(function(e) {
            for (var i = 0; i < prices.length; i++) {
                if (prices[i].checked) {
                    prices[i].click();
                }
            }
            for (var i = 0; i < acres.length; i++) {
                if (acres[i].checked) {
                    acres[i].click();
                }
            }
            for (var i = 0; i < soil.length; i++) {
                if (soil[i].checked) {
                    soil[i].click();
                }
            }
            for (var i = 0; i < locations.length; i++) {
                if (locations[i].checked) {
                    locations[i].click();
                }
            }
            for (var i = 0; i < listingStatuses.length; i++) {
                if (listingStatuses[i].checked) {
                    listingStatuses[i].click();
                }
            }
            for (var i = 0; i < enterprises.length; i++) {
                if (enterprises[i].checked) {
                    enterprises[i].click();
                }
            }
        });
});

const apiKey = "AAPKf33f33b83d4d4a7db813b351e71d3f7516hfeoFRBscDDlxekWwBLDEYvXHNnmPQn5ugtK7nfWOMI98AaFh-8ztgfO9wQ2Ri";

$(function() {
    populateMap();
});

function observeResults() {
    const resultsElement = document.getElementById('results');
		if (resultsElement) {
			const observer = new MutationObserver(function() {
        	populateMap();
    	});

    	observer.observe(resultsElement, {
        	childList: true
    	});
	}
}

observeResults();

//this is the satellite layer
var sat = L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=sdvoncYqRpUThIIyd0Qs', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    tileSize: 512,
    zoomOffset: -1
});

//this is the streets layer
var streets = L.tileLayer('https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=sdvoncYqRpUThIIyd0Qs', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    tileSize: 512,
    zoomOffset: -1
});

var map = L.map('map', {
    renderer: L.canvas({
        padding: 0.5
    }),
    center: [52.089128, -106.678522],
    zoom: 6,
    layers: [streets]
});

var baseMaps = {
    "Satellite": sat,
    "Streets": streets
};

var layerGroup = L.layerGroup().addTo(map);

var layerControl = L.control.layers(baseMaps).addTo(map);

const rms = L.esri
    .featureLayer({
        url: "https://gis.saskatchewan.ca/arcgis/rest/services/SaskatchewanJurisdictions/MapServer/4",
        simplifyFactor: 0.35,
        renderer: L.canvas(),
        precision: 5,
        fetchAllFeatures: true,
        style: {
            color: "#A9A9A9",
            weight: 1,
            fillOpacity: 0,
        }
    })
    .addTo(map);

var markers = new L.FeatureGroup();

const labels = {};

rms.on("createfeature", function(e) {
    const id = e.feature.id;
    const feature = rms.getFeature(id);
    const center = feature.getBounds().getCenter();
    const label = L.marker(center, {
        icon: L.divIcon({
            iconSize: null,
            className: 'rmlabel',
            html: "<div>" + "R.M. NO. " + e.feature.properties.RMNO + " - " + e.feature.properties.RMNM + "</div>"
        })
    });
    markers.addLayer(label);
});

map.on('zoomend', function() {
    if (map.getZoom() < 10) {
        map.removeLayer(markers);
    } else {
        map.addLayer(markers);
    }
});

var redIcon = L.icon({
    iconUrl: 'https://uploads-ssl.webflow.com/6176cec6a4e37b6a55ae0553/63d14b7be3b236ce8c0da873_redPin.svg',
    iconSize: [36, 52],
    iconAnchor: [18, 52],
    popupAnchor: [0, -57],
    shadowUrl: 'https://uploads-ssl.webflow.com/6176cec6a4e37b6a55ae0553/63a60f406a740ddbcc651e48_pinshadow.webp',
    shadowSize: [40, 52],
	shadowAnchor: [20, 52],
});

var whiteRedIcon = L.icon({
    iconUrl: 'https://uploads-ssl.webflow.com/6176cec6a4e37b6a55ae0553/63d14b7b32a91df38e1c19b3_whiteRedPin.svg',
    iconSize: [36, 52],
    iconAnchor: [18, 52],
    popupAnchor: [0, -57],
    shadowUrl: 'https://uploads-ssl.webflow.com/6176cec6a4e37b6a55ae0553/63a60f406a740ddbcc651e48_pinshadow.webp',
    shadowSize: [40, 52],
	shadowAnchor: [20, 52],
});

var blueIcon = L.icon({
    iconUrl: 'https://uploads-ssl.webflow.com/6176cec6a4e37b6a55ae0553/63d14b7b41b400b4f4e4f253_bluePin.svg',
    iconSize: [36, 52],
    iconAnchor: [18, 52],
    popupAnchor: [0, -57],
    shadowUrl: 'https://uploads-ssl.webflow.com/6176cec6a4e37b6a55ae0553/63a60f406a740ddbcc651e48_pinshadow.webp',
    shadowSize: [40, 52],
	shadowAnchor: [20, 52],
});

var whiteBlueIcon = L.icon({
    iconUrl: 'https://uploads-ssl.webflow.com/6176cec6a4e37b6a55ae0553/63d14b7b2d63ec6303efedbc_whiteBluePin.svg',
    iconSize: [36, 52],
    iconAnchor: [18, 52],
    popupAnchor: [0, -57],
    shadowUrl: 'https://uploads-ssl.webflow.com/6176cec6a4e37b6a55ae0553/63a60f406a740ddbcc651e48_pinshadow.webp',
    shadowSize: [40, 52],
	shadowAnchor: [20, 52],
});

var greenIcon = L.icon({
    iconUrl: 'https://uploads-ssl.webflow.com/6176cec6a4e37b6a55ae0553/63d14b7b82a99cfab261f5ba_greenPin.svg',
    iconSize: [36, 52],
    iconAnchor: [18, 52],
    popupAnchor: [0, -57],
    shadowUrl: 'https://uploads-ssl.webflow.com/6176cec6a4e37b6a55ae0553/63a60f406a740ddbcc651e48_pinshadow.webp',
    shadowSize: [40, 52],
	shadowAnchor: [20, 52],
});

var whiteGreenIcon = L.icon({
    iconUrl: 'https://uploads-ssl.webflow.com/6176cec6a4e37b6a55ae0553/63d14b7b150c600c7159f986_whiteGreenPin.svg',
    iconSize: [36, 52],
    iconAnchor: [18, 52],
    popupAnchor: [0, -57],
    shadowUrl: 'https://uploads-ssl.webflow.com/6176cec6a4e37b6a55ae0553/63a60f406a740ddbcc651e48_pinshadow.webp',
    shadowSize: [40, 52],
	shadowAnchor: [20, 52],
});

function populateMap() {

    var results = document.getElementById("results");
	
	if (results) {
		
		var x = results.querySelectorAll(".property-card");

		layerGroup.clearLayers();

		var properties = {};

		for (let i = 0; i < x.length; i++) {
			var myIcon = redIcon;
			var banner;

			properties[i] = {
				name: x[i].childNodes[1],
				latitude: x[i].childNodes[0].innerHTML.split(/[ ,]+/)[0],
				longitude: x[i].childNodes[0].innerHTML.split(/[ ,]+/)[1],
				location: x[i].childNodes[2],
				price: x[i].childNodes[3].innerHTML,
				acres: x[i].childNodes[4].innerHTML,
				perqtr: x[i].childNodes[5].innerHTML,
				soil: x[i].childNodes[6],
				peracre: x[i].childNodes[7].innerHTML,
				link: x[i].childNodes[8],
				image: x[i].childNodes[9],
				status: x[i].childNodes[10],
				statusImage: x[i].childNodes[11],
				banner1: x[i].childNodes[12].style.backgroundImage,
				banner2: x[i].childNodes[13].style.backgroundImage,
				banner3: x[i].childNodes[14].style.backgroundImage,
				banner4: x[i].childNodes[15].style.backgroundImage,
				banner5: x[i].childNodes[16].style.backgroundImage,
				service: x[i].childNodes[17]
			};

			switch (properties[i].status.innerHTML) {
				case "Active":
					switch (properties[i].service.innerHTML) {
						case "Listing":
							myIcon = redIcon;
							banner = properties[i].banner1;
							break;
						case "Tender":
							myIcon = redIcon;
							banner = properties[i].banner2;
							break;
						case "Auction":
							myIcon = redIcon;
							banner = properties[i].banner3;
							break;
						case "Lease":
							myIcon = blueIcon;
							banner = properties[i].banner4;
							break;
						case "Wanted":
							myIcon = greenIcon;
							banner = properties[i].banner5;
							break;
					}
					break;
				case "Pending":
					switch (properties[i].service.innerHTML) {
						case "Listing":
							myIcon = whiteRedIcon;
							banner = properties[i].banner1;
							break;
						case "Tender":
							myIcon = whiteRedIcon;
							banner = properties[i].banner2;
							break;
						case "Auction":
							myIcon = whiteRedIcon;
							banner = properties[i].banner3;
							break;
						case "Lease":
							myIcon = whiteBlueIcon;
							banner = properties[i].banner4;
							break;
						case "Wanted":
							myIcon = whiteGreenIcon;
							banner = properties[i].banner5;
							break;
					}
					break;
				case "Sold/Leased":
					switch (properties[i].service.innerHTML) {
						case "Listing":
							myIcon = whiteRedIcon;
							banner = properties[i].banner1;
							break;
						case "Tender":
							myIcon = whiteRedIcon;
							banner = properties[i].banner2;
							break;
						case "Auction":
							myIcon = whiteRedIcon;
							banner = properties[i].banner3;
							break;
						case "Lease":
							myIcon = whiteBlueIcon;
							banner = properties[i].banner4;
							break;
						case "Wanted":
							myIcon = whiteGreenIcon;
							banner = properties[i].banner5;
							break;
					}
					break;
			}

			try {
				let fixedBanner = banner.replace(/"/g, "'");
				var marker = L.marker([properties[i].latitude, properties[i].longitude], {
					icon: myIcon
				}).addTo(layerGroup);
				var popup = L.popup()
					.setContent(`<div role="listitem" class="property-card w-dyn-item"><div style="background-image:${fixedBanner}" class="banner"></div><a href="${properties[i].link.href}" class="link-block-10 w-inline-block"><div data-w-id="86802cd9-7302-50a6-b1ed-7b26c6b6aaec" class="last-article-image-wrapper"><img style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" src="${properties[i].image.src}" alt="" sizes="(max-width: 767px) 162.015625px, (max-width: 991px) 21vw, (max-width: 1279px) 22vw, (max-width: 1439px) 17vw, 19vw" class="image-zoom"><div data-w-id="86802cd9-7302-50a6-b1ed-7b26c6b6aaee" style="display: none; width: 0px; height: 212.234px;" class="transition-bg-solid"></div></div><div class="div-block-10"><h2 class="heading-5">${properties[i].name.innerHTML}</h2><div class="div-block-11"><img src="https://assets-global.website-files.com/6176cec6a4e37b6a55ae0553/618c07883d62069be56731a5_place%20(3).png" loading="lazy" width="18" alt="" class="image-2"><div class="text-block-500">${properties[i].location.innerHTML}</div></div><div class="div-block-39"><div class="text-block-600">Price (P):</div><div class="text-block-400 currency">${properties[i].price}</div></div><div class="div-block-39"><div class="text-block-600">Title Acres:</div><div class="text-block-400 number">${properties[i].acres}</div></div><div class="div-block-39"><div class="text-block-600">Avg. AV/Qtr:</div><div class="text-block-400 currency">${properties[i].perqtr}</div></div><div class="div-block-39"><div class="text-block-600">Soil Final Rating:</div><div class="text-block-400">${properties[i].soil.innerHTML}</div></div><div class="div-block-39"><div class="text-block-600">$/acre:</div><div class="text-block-400 currency">${properties[i].peracre}</div></div></div><div class="w-embed"></div></a></div>`)
				marker.bindPopup(popup);
			} catch (error) {}
		}
	}
}
