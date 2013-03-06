dojo.require("esri.map");
dojo.require("esri.layers.agstiled");
dojo.require("esri.toolbars.draw");

var map, tb;

function init() {

    // Initiate map with the "Streets" basemap.
    map = new esri.Map("map", {
        basemap: "streets",
        center: [-25.312, 34.307],
        zoom: 3
    });

    dojo.connect(map, "onLoad", initToolbar);
}

var realTimePoints;
var layersColors = [];

$(function () {

    // Create Proxy to SignalR hub
    realTimePoints = $.connection.realTimePoints;

    // This function is callable from the server
    realTimePoints.client.addPoint = function addPoint(cid, x, y) {

        // Create point object and set its geometry
        var p = new esri.geometry.Point(x, y, new esri.SpatialReference({ wkid: 102100 }));

        // Get the layer of remote user to which the line will be added
        var gLayer = map.getLayer(cid);

        // Set up symbol and color of point
        // Get color from the layersColors list
        var symbol = new esri.symbol.SimpleMarkerSymbol();
        var clr = layersColors[layersColors.indexOf(cid) + 1];
        symbol.setColor(new dojo.Color(clr));

        // Add point to graphics layer
        gLayer.add(new esri.Graphic(p, symbol));
    };

    // This function is callable from the server
    realTimePoints.client.addPolyline = function addPolyline(cid, paths) {

        // Create line object and set its geometry
        var line = new esri.geometry.Polyline(new esri.SpatialReference({ wkid: 102100 }));
        line.paths = paths;

        // Get the layer of remote user to which the line will be added
        var gLayer = map.getLayer(cid);

        // Set up symbol and color of line
        // Get color from the layersColors list
        var symbol = new esri.symbol.SimpleLineSymbol();
        var clr = layersColors[layersColors.indexOf(cid) + 1];
        symbol.setColor(new dojo.Color(clr));

        // Add line to graphics layer
        gLayer.add(new esri.Graphic(line, symbol));
    };

    // This function is callable from the server
    realTimePoints.client.addLayer = function addLayer(cid, color) {

        // Create new layer
        var gLayer = new esri.layers.GraphicsLayer();
        gLayer.id = cid;

        // Keep track of layer names and their colors.
        layersColors.push(cid);
        layersColors.push(color);

        // Add layer
        map.addLayer(gLayer);

        // Update number of layers counter
        $("#graphicsLayersCount").empty();
        $("#graphicsLayersCount").append("<p>Number of graphics layers: " + map.graphicsLayerIds.length + "</p>");
        
        // Set the default symbols for drawing
        if ($.connection.hub.id === cid) {

            var clr = layersColors[layersColors.indexOf(cid) + 1];

            // Point symbol
            var symbol = new esri.symbol.SimpleMarkerSymbol();
            symbol.setColor(new dojo.Color(clr));
            tb.markerSymbol = symbol;

            // Line symbol
            symbol = new esri.symbol.SimpleLineSymbol();
            symbol.setColor(new dojo.Color(clr));
            tb.lineSymbol = symbol;
        }
    };

    // This function is callable from the server
    realTimePoints.client.removeLayer = function removeLayer(cid) {
                
        if ($.connection.hub.id !== cid) {

            // Get layer with specific cid (Connection ID)
            var gLayer = map.getLayer(cid);

            // Remove layer
            map.removeLayer(gLayer);

            // Update number of layers counter
            $("#graphicsLayersCount").empty();
            $("#graphicsLayersCount").append("<p>Number of graphics layers: " + map.graphicsLayerIds.length + "</p>");
        }
    };
    
    // This function is callable from the server
    realTimePoints.client.updataGraphicsLayersLegend =
        function updataGraphicsLayersLegend(layersNames, layersColors) {

            // This function updates the legend

            $("#legendDiv").empty();
            $("#legendDiv").append("<p><b>Legend</b></p>");

            for (var i = 0; i < layersNames.length; i++) {

                $("#legendDiv").append("<p><font color='" + layersColors[i] + "'>" + layersNames[i] + "</font></p>");
            }
        };

    // This function is callable from the server
    realTimePoints.client.updateOwnUserName = function updateOwnUserName(initialUserName) {
        // This function sets the user's initial username which is assigned by the server.
        $("#txtUserName").val(initialUserName);
    };

    // Everything is ready, now start the connection
    $.connection.hub.start();

});

function btnUpdateUserName_Click() {
    realTimePoints.server.updateUserName($("#txtUserName").val());
}

function initToolbar(map) {
    // Initiate Drawing toolbar
    tb = new esri.toolbars.Draw(map);
    dojo.connect(tb, "onDrawEnd", addGraphic);
}

function addGraphic(geometry) {
    var type = geometry.type;
    if (type === "point" || type === "multipoint") {

        var symbol = new esri.symbol.SimpleMarkerSymbol();
        var clr = layersColors[layersColors.indexOf($.connection.hub.id) + 1];
        symbol.setColor(new dojo.Color(clr));
        // Notify the server about the point
        realTimePoints.server.addPoint(geometry.x, geometry.y);
    }
    else if (type === "line" || type === "polyline") {

        var symbol = new esri.symbol.SimpleLineSymbol();
        var clr = layersColors[layersColors.indexOf($.connection.hub.id) + 1];
        symbol.setColor(new dojo.Color(clr));
        // Notify the server about the line
        realTimePoints.server.addPolyline(geometry.paths);
    }
    else {
        symbol = tb.fillSymbol;
    }
}

dojo.ready(init);