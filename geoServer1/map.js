var map = new ol.Map({
        target: 'map',
        layers: [
		
          new ol.layer.Tile({
          source: new ol.source.TileWMS({
			
		
		url: 'http://localhost:8080/geoserver/UebungGeodatendienste/wms',
		params: {'LAYERS': 'UebungGeodatendienste:exports_percent_gdp', 'TILED': true},
		serverType: 'geoserver'
        
								})
      })

        ],

		
		
		
        view: new ol.View({
          center: ol.proj.fromLonLat([13, 51]),
          zoom: 4
        })
      });
