
	var priceDict = {}
        priceDict['10000001.00'] = 0;
      	priceDict['10000000.00'] = 1;
      	priceDict['5000000.00'] = 2;
      	priceDict['4000000.00'] = 3;
      	priceDict['3000000.00'] = 4;
      	priceDict['2000000.00'] = 5;
      	priceDict['1500000.00'] = 6;
      	priceDict['1000000.00'] = 7;
      	priceDict['750000.00'] = 8;
      	priceDict['500000.00'] = 9;
      	priceDict['250000.00'] = 10;
      	priceDict['0.00'] = 11;
        
        var priceDictStart = {}
        priceDictStart['10m'] = 10000000;
      	priceDictStart['5m-10m'] = 5000000;
      	priceDictStart['4m-5m'] = 4000000;
      	priceDictStart['3m-4m'] = 3000000;
      	priceDictStart['2m-3m'] = 2000000;
      	priceDictStart['1-5m-2m'] = 1500000;
      	priceDictStart['1m-1-5m'] = 1000000;
      	priceDictStart['750k-1m'] = 750000;
      	priceDictStart['500k-750k'] = 500000;
      	priceDictStart['250k-500k'] = 250000;
      	priceDictStart['250-000'] = 0;
        
        var priceDictEnd = {}
        priceDictEnd['10m'] = 10000001;
      	priceDictEnd['5m-10m'] = 10000000;
      	priceDictEnd['4m-5m'] = 5000000;
      	priceDictEnd['3m-4m'] = 4000000;
      	priceDictEnd['2m-3m'] = 3000000;
      	priceDictEnd['1-5m-2m'] = 2000000;
      	priceDictEnd['1m-1-5m'] = 1500000;
      	priceDictEnd['750k-1m'] = 1000000;
      	priceDictEnd['500k-750k'] = 750000;
      	priceDictEnd['250k-500k'] = 500000;
      	priceDictEnd['250-000'] = 250000;
        
				var soilDict = {}
        soilDict['100.00'] = 0;
      	soilDict['90.00'] = 1;
      	soilDict['80.00'] = 2;
      	soilDict['70.00'] = 3;
      	soilDict['60.00'] = 4;
      	soilDict['50.00'] = 5;
      	soilDict['40.00'] = 6;
      	soilDict['30.00'] = 7;
      	soilDict['20.00'] = 8;
      	soilDict['10.00'] = 9;
      	soilDict['0.00'] = 10;
        
        var soilDictStart = {}
        soilDictStart['90'] = 90;
      	soilDictStart['80-90'] = 80;
      	soilDictStart['70-80'] = 70;
      	soilDictStart['60-70'] = 60;
      	soilDictStart['50-60'] = 50;
      	soilDictStart['40-50'] = 40;
      	soilDictStart['30-40'] = 30;
      	soilDictStart['20-30'] = 20;
      	soilDictStart['10-20'] = 10;
      	soilDictStart['10'] = 0;
        
        var soilDictEnd = {}
        soilDictEnd['90'] = 100;
      	soilDictEnd['80-90'] = 90;
      	soilDictEnd['70-80'] = 80;
      	soilDictEnd['60-70'] = 70;
      	soilDictEnd['50-60'] = 60;
      	soilDictEnd['40-50'] = 50;
      	soilDictEnd['30-40'] = 40;
      	soilDictEnd['20-30'] = 30;
      	soilDictEnd['10-20'] = 20;
      	soilDictEnd['10'] = 10;
        
        var acresDict = {}
        acresDict['10001.00'] = 0;
        acresDict['10000.00'] = 1;
        acresDict['6400.00'] = 2;
        acresDict['4000.00'] = 3;
        acresDict['2560.00'] = 4;
        acresDict['1280.00'] = 5;
        acresDict['640.00'] = 6;
        acresDict['320.00'] = 7;
        acresDict['160.00'] = 8;
        acresDict['0.00'] = 9;
        
        var acresDictStart = {}
        acresDictStart['10000'] = 10000;
        acresDictStart['6400-10000'] = 6400;
        acresDictStart['4000-6400'] = 4000;
        acresDictStart['2560-4000'] = 2560;
        acresDictStart['1280-2560'] = 1280;
        acresDictStart['640-1280'] = 640;
        acresDictStart['320-640'] = 320;
        acresDictStart['160-320'] = 160;
        acresDictStart['160'] = 0;
        
        var acresDictEnd = {}
        acresDictEnd['10000'] = 10001;
        acresDictEnd['6400-10000'] = 10000;
        acresDictEnd['4000-6400'] = 6400;
        acresDictEnd['2560-4000'] = 4000;
        acresDictEnd['1280-2560'] = 2560;
        acresDictEnd['640-1280'] = 1280;
        acresDictEnd['320-640'] = 640;
        acresDictEnd['160-320'] = 320;
        acresDictEnd['160'] = 160;

$(function () {
    	
      var prices = document.getElementsByClassName("price-checkbox");
      var acres = document.getElementsByClassName("acres-checkbox");
      var soil = document.getElementsByClassName("soil-checkbox");
      var locations = document.getElementsByClassName("location-checkbox");
      var listingStatuses = document.getElementsByClassName("listing-status-checkbox");
      var enterprises = document.getElementsByClassName("enterprise-checkbox");
      
    	$("#clear-filters")
    			.click(function (e) {
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
    
    $(function () {
        //THIS IS FOR THE RANGE SLIDER.
        //Sorry for yelling...
        let idOfRangeSlider = 'slider-range';


        $('#' + idOfRangeSlider).css('display', 'none');
        $("<div></div>").insertAfter('#' + idOfRangeSlider);
      
      	var dict = {}
        dict['10000001.00'] = 0;
      	dict['10000000.00'] = 1;
      	dict['5000000.00'] = 2;
      	dict['4000000.00'] = 3;
      	dict['3000000.00'] = 4;
      	dict['2000000.00'] = 5;
      	dict['1500000.00'] = 6;
      	dict['1000000.00'] = 7;
      	dict['750000.00'] = 8;
      	dict['500000.00'] = 9;
      	dict['250000.00'] = 10;
      	dict['0.00'] = 11;

        var range = $('#' + idOfRangeSlider).next()[0];
      	var startintone = 0;
      	var startinttwo = 10000001;
	    
	if (urlParams.get('list-price-ranges')) {
        	console.log(urlParams.get('list-price-ranges'));
        
        	const priceParams = urlParams.get('list-price-ranges').split('|');
        	console.log(priceParams[0]);
        	console.log(priceParams[priceParams.length - 1]);
        
     			var startintone = priceDictStart[priceParams[priceParams.length - 1]];
      		var startinttwo = priceDictEnd[priceParams[0]];
        }

        noUiSlider.create(range, {
            connect: true,
            start: [startintone, startinttwo],
          	margin: 250000,
            range: {
                'min': [0, 250000],
              	'40%': [1000000, 500000],
              	'60%': [2000000, 1000000],
              	'80%': [5000000, 5000000],
              	'90%': [10000000, 1],
                'max': [10000001]
            },
            step: 250000,
            tooltips: [
                wNumb({
                  decimals: 0,
                  thousand: ',',
                  prefix: '$'
                  }), 
              	wNumb({
                  decimals: 0,
                  thousand: ',',
                  prefix: '$',
                  edit: function ( value ) {
                    return value == '$10,000,001' ? '∞' : value;
                  }
                }),
            ],
        });
      
      	var inputs = document.getElementsByClassName("price-checkbox");
        
        function checkit(index) {
        console.log("price checked");
          if (inputs[index].checked) {
          } else {
            inputs[index].click();
          }
        }
      
      	function uncheckit(index) {
        console.log("price unchecked");
          if (inputs[index].checked) {
            inputs[index].click();
          }
        }
      	
        range.noUiSlider.on('change', function (values) {
					for (var i = 0; i < inputs.length; i++) {
    				if (dict[values[1]] <= i & i < dict[values[0]]) {
                  checkit(i);
                } else {
                  uncheckit(i);
                }
					}
        });
        
        $("#clear-filters")
    			.click(function (e) {
          	range.noUiSlider.set([0, 10000001]);
          });
				
    });
    
    $(function () {
        //THIS IS FOR THE RANGE SLIDER.
        //Sorry for yelling...
        let idOfRangeSlider = 'slider-range-soil';


        $('#' + idOfRangeSlider).css('display', 'none');
        $("<div></div>").insertAfter('#' + idOfRangeSlider);
      
      	var dict = {}
        dict['100.00'] = 0;
      	dict['90.00'] = 1;
      	dict['80.00'] = 2;
      	dict['70.00'] = 3;
      	dict['60.00'] = 4;
      	dict['50.00'] = 5;
      	dict['40.00'] = 6;
      	dict['30.00'] = 7;
      	dict['20.00'] = 8;
      	dict['10.00'] = 9;
      	dict['0.00'] = 10;

        var range = $('#' + idOfRangeSlider).next()[0];
      	var startintone = 0;
      	var startinttwo = 100;
	    
	    if (urlParams.get('soil-final-rating-ranges')) {
        	console.log(urlParams.get('soil-final-rating-ranges'));
        
        	const soilParams = urlParams.get('soil-final-rating-ranges').split('|');
        	console.log(soilParams[0]);
        	console.log(soilParams[soilParams.length - 1]);
        
     			var startintone = soilDictStart[soilParams[soilParams.length - 1]];
      		var startinttwo = soilDictEnd[soilParams[0]];
        }

        noUiSlider.create(range, {
            connect: true,
            start: [startintone, startinttwo],
          	margin: 10,
            range: {
                'min': [0],
                'max': [100]
            },
            step: 10,
            tooltips: [
                wNumb({
                  decimals: 0
                  }), 
              	wNumb({
                  decimals: 0
                }),
            ],
        });
      
      	var inputs = document.getElementsByClassName("soil-checkbox");
        
        function checkit(index) {
        console.log("soil checked");
          if (inputs[index].checked) {
          } else {
            inputs[index].click();
          }
        }
      
      	function uncheckit(index) {
        console.log("soil unchecked");
          if (inputs[index].checked) {
            inputs[index].click();
          }
        }
      	
        range.noUiSlider.on('change', function (values) {
			for (var i = 0; i < inputs.length; i++) {
    			if (dict[values[1]] <= i & i < dict[values[0]]) {
                  checkit(i);
                } else {
                  uncheckit(i);
                }
					}
        });
        
        $("#clear-filters")
    			.click(function (e) {
          	range.noUiSlider.set([0, 100]);
          });
		});
    
    $(function () {
        //THIS IS FOR THE RANGE SLIDER.
        //Sorry for yelling...
        let idOfRangeSlider = 'slider-range-acres';


        $('#' + idOfRangeSlider).css('display', 'none');
        $("<div></div>").insertAfter('#' + idOfRangeSlider);
      
      	var dict = {}
        dict['10001.00'] = 0;
        dict['10000.00'] = 1;
        dict['6400.00'] = 2;
        dict['4000.00'] = 3;
        dict['2560.00'] = 4;
        dict['1280.00'] = 5;
        dict['640.00'] = 6;
        dict['320.00'] = 7;
        dict['160.00'] = 8;
        dict['0.00'] = 9;

        var range = $('#' + idOfRangeSlider).next()[0];
      	var startintone = 0;
      	var startinttwo = 10001;
	    
	    if (urlParams.get('title-acres-ranges')) {
        	console.log(urlParams.get('title-acres-ranges'));
        
        	const acresParams = urlParams.get('title-acres-ranges').split('|');
        	console.log(acresParams[0]);
        	console.log(acresParams[acresParams.length - 1]);
        
     			var startintone = acresDictStart[acresParams[acresParams.length - 1]];
      		var startinttwo = acresDictEnd[acresParams[0]];
        }

        noUiSlider.create(range, {
            connect: true,
            start: [startintone, startinttwo],
          	margin: 100,
            range: {
                'min': [0, 160],
              	'12%': [160, 160],
                '24%': [320, 320],
              	'36%': [640, 640],
                '48%': [1280, 1280],
                '60%': [2560, 1440],
                '72%': [4000, 2400],
                '84%': [6400, 3600],
              	'96%': [10000, 1],
                'max': [10001]
            },
            step: 100,
            tooltips: [
                wNumb({
                  decimals: 0,
                  thousand: ',',
                  }), 
              	wNumb({
                  decimals: 0,
                  thousand: ',',
                  edit: function ( value ) {
                    return value == '10,001' ? '∞' : value;
                  }
                }),
            ],
        });
      
      	var inputs = document.getElementsByClassName("acres-checkbox");
      
      	function checkit(index) {
        console.log("acres checked");
          if (inputs[index].checked) {
          } else {
            inputs[index].click();
          }
        }
      
      	function uncheckit(index) {
        console.log("acres unchecked");
          if (inputs[index].checked) {
            inputs[index].click();
          }
        }
      
      	
        range.noUiSlider.on('change', function (values) {
          for (var i = 0; i < inputs.length; i++) {
              if (dict[values[1]] <= i & i < dict[values[0]]) {
                      checkit(i);
                    } else {
                      uncheckit(i);
                    }
          }
        });
        
        $("#clear-filters")
    			.click(function (e) {
          	range.noUiSlider.set([0, 10001]);
          });
    });

const apiKey = "AAPKf33f33b83d4d4a7db813b351e71d3f7516hfeoFRBscDDlxekWwBLDEYvXHNnmPQn5ugtK7nfWOMI98AaFh-8ztgfO9wQ2Ri";

$(function () {
	populateMap();
  });
	
  function observeResults() {
      const resultsElement = document.getElementById('results');
      const observer = new MutationObserver(function() {
        populateMap();
      });
      observer.observe(resultsElement, { childList: true });
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
  		renderer: L.canvas({ padding: 0.5 }),
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
        
        rms.on("createfeature", function (e) {
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
    if (map.getZoom() <10){
            map.removeLayer(markers);
    }
    else {
            map.addLayer(markers);
        }
});

var myIcon = L.icon({
    iconUrl: 'https://uploads-ssl.webflow.com/6176cec6a4e37b6a55ae0553/6320d3bb98fbd828734ac756_pin.svg',
    iconSize: [40, 52],
    iconAnchor: [20, 52],
    popupAnchor: [0, -57],
    shadowUrl: 'https://uploads-ssl.webflow.com/6176cec6a4e37b6a55ae0553/63a60f406a740ddbcc651e48_pinshadow.png',
    shadowSize: [40, 52],
});
       
  function populateMap() {
  
  		var x = document.getElementById("results").querySelectorAll(".item");
  
  		layerGroup.clearLayers();
      
      var properties = {};

      for (let i = 0; i < x.length; i++) {
          properties[i] = {
              name: x[i].childNodes[1],
              latitude: x[i].childNodes[0].innerHTML.split(/[ ,]+/)[0],
              longitude: x[i].childNodes[0].innerHTML.split(/[ ,]+/)[1],
              location: x[i].childNodes[2],
              price: x[i].childNodes[3].innerHTML,
              acres: x[i].childNodes[4].innerHTML,
              soil: x[i].childNodes[5],
              peracre: x[i].childNodes[6].innerHTML,
              link: x[i].childNodes[7],
              image: x[i].childNodes[8]
          };
          try {
              var marker = L.marker([properties[i].latitude, properties[i].longitude], {icon: myIcon}).addTo(layerGroup);
              var popup = L.popup()
                  .setContent('<div role="listitem" class="property-card w-dyn-item"><a href=' + properties[i].link.href + ' class="link-block-10 w-inline-block"><div data-w-id="86802cd9-7302-50a6-b1ed-7b26c6b6aaec" class="last-article-image-wrapper"><img style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" src=' + properties[i].image.src + ' alt="" sizes="(max-width: 767px) 162.015625px, (max-width: 991px) 21vw, (max-width: 1279px) 22vw, (max-width: 1439px) 17vw, 19vw" class="image-zoom"><div data-w-id="86802cd9-7302-50a6-b1ed-7b26c6b6aaee" style="display: none; width: 0px; height: 212.234px;" class="transition-bg-solid"></div></div><div class="div-block-10"><h2 class="heading-5">' + properties[i].name.innerHTML + '</h2><div class="div-block-11"><img src="https://assets-global.website-files.com/6176cec6a4e37b6a55ae0553/618c07883d62069be56731a5_place%20(3).png" loading="lazy" width="18" alt="" class="image-2"><div class="text-block-500">' + properties[i].location.innerHTML + '</div></div><div class="div-block-39"><div class="text-block-600">Price:</div><div class="text-block-400 currency">' + properties[i].price + '</div></div><div class="div-block-39"><div class="text-block-600">Title Acres:</div><div class="text-block-400 number">' + properties[i].acres + '</div></div><div class="div-block-39"><div class="text-block-600">Soil Final Rating:</div><div class="text-block-400">' + properties[i].soil.innerHTML + '</div></div><div class="div-block-39"><div class="text-block-600">$/acre:</div><div class="text-block-400 currency">' + properties[i].peracre + '</div></div></div><div class="w-embed"></div></a></div>')
              marker.bindPopup(popup);
          } catch (error) {}
      }
  }
