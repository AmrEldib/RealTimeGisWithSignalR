esri = function () {
    /// <summary>The esri namespace has several utility methods associated with it.  These methods are convenience methods that are not associated with any class.</summary>
    /// <field name="version" type="Number">Current version of the JavaScript API.</field>
    /// <field name="documentBox" type="Object">Represents the size of the client side window or document at first load. The size contains width and height properties, and these do not change on window resize.</field>
    /// <field name="config" type="Object">ArcGIS JavaScript API default configurations that can be overridden programmatically.  For details, see Default API configurations.</field>
};
esri.show = function (element) {
    /// <summary>Shows an HTML element such as a DIV or TABLE.</summary>
    /// <param name="element" type="Element" optional="false">The name of the HTML element.</param>
};
esri.hide = function (element) {
    /// <summary>Hides an HTML element such as a DIV or TABLE.</summary>
    /// <param name="element" type="Element" optional="false">The name of the HTML element.</param>
};
esri.toggle = function (element) {
    /// <summary>If an HTML element is currently visible, the element is hidden.  If the element is hidden, it becomes visible.</summary>
    /// <param name="element" type="Element" optional="false">The name of the HTML element.</param>
};
esri.valueOf = function (array,value) {
    /// <summary>Iterates through the argument array and searches for the identifier to which the argument value matches.  Returns null if no matching identifier is found.</summary>
    /// <param name="array" type="Array" optional="false">The argument array for testing.</param>
    /// <param name="value" type="Object" optional="false">The value used in the search.  If the value is a String, the value is case sensitive.</param>
    /// <return type="Object">Object</return>
};
esri.substitute = function (data,template,first) {
    /// <summary>A wrapper around dojo.string.substitute that can also handle wildcard substitution.  A wildcard uses the format of ${*}.  If no template is provided, it is assumed to be a wildcard.  This method is useful if you are not using Graphic or an InfoTemplate, but you want to embed result values in HTML, for example.</summary>
    /// <param name="data" type="Object" optional="false">The data object used in the substitution.</param>
    /// <param name="template" type="String" optional="true">The template used for the substitution.  Can be any valid HTML.  If no template is included, the wildcard template is used.</param>
    /// <param name="first" type="Boolean" optional="true">When true, returns only the first property found in the data object.  The default is false.</param>
    /// <return type="String">String</return>
};
esri.urlToObject = function (url) {
    /// <summary>Converts the URL arguments to an object representation.  The object format is {path: &lt;String>, query:{key:&lt;Object>}}</summary>
    /// <param name="url" type="String" optional="false">The input URL.</param>
    /// <return type="Object">Object</return>
};
esri.request = function (request,options) {
    /// <summary>A wrapper around dojo.xhrGet, dojo.xhrPost, dojo.io.script.get and dojo.io.frame. Use this method to request data from a server.</summary>
    /// <param name="request" type="Object" optional="false">The request object.     &lt;String&gt; url      The URL to request data from.           &lt;String&gt; handleAs      How to handle data returned from the server. Valid values are 'text','xml' and 'json'.           &lt;Object&gt; content      A simple JavaScript object that will be serialized as a query string and appended to the url.                 &lt;String&gt; callbackParamName      Only used when requesting JSONP. The value for callbackParamName is dictated by the web service being used.      </param>
    /// <param name="options" type="Object" optional="true">The options argument, added at 2.1 to replace useProxy, has the following properties:	useProxy &lt;Boolean&gt;	When true, the request is posted through the proxy.	usePost &lt;Boolean&gt;	When true, the request will use the HTTP POST method.	disableIdentityLookup &lt;Boolean&gt;	As of v2.5. Setting this to true will disable the identity lookup for this request in applications that use the Identity Manager.If the request URL is from another origin the proxy will be used.</param>
    /// <return type="dojo.Deferred">dojo.Deferred</return>
};
esri.filter = function (object,callback,thisObject) {
    /// <summary>Creates a new object with all properties that pass the test implemented by the filter provided in the function.</summary>
    /// <param name="object" type="Object" optional="false">Object  to filter.</param>
    /// <param name="callback" type="Function" optional="false">Function or string implementing the filtering.</param>
    /// <param name="thisObject" type="Object" optional="false">Optional object used to scope the call to the callback.</param>
    /// <return type="Object">Object</return>
};
esri.graphicsExtent = function (graphics) {
    /// <summary>Utility function that returns the extent of an array of graphics.  If the extent height and width are 0, null is returned.</summary>
    /// <param name="graphics" type="Graphics" optional="false">The input graphics array.</param>
    /// <return type="Extent">Extent</return>
};
esri.getGeometries = function (graphics) {
    /// <summary>Converts an array of graphics to an array of geometries. This is primarily used by GeometryService. Beginning with version 2.0, GeometryService accepts only geometries and not graphics.</summary>
    /// <param name="graphics" type="Graphic[]" optional="false">Array of graphics to convert to geometries</param>
    /// <return type="Geometry[]">Geometry[]</return>
};
esri.setRequestPreCallback = function (callbackFunction) {
    /// <summary>Define a callback function that will be called just before esri.request calls into dojo IO functions such as dojo.rawXhrPost and dojo.io.script.get. It provides developers an opportunity to modify the request.</summary>
    /// <param name="callbackFunction" type="Function" optional="false">The callback function that will be executed prior to esri.request calls into dojo IO functions.</param>
};

esri.Map = function (divId,options) {
    /// <summary>Creates a new map inside of the given HTML container, which is often a DIV element. The size of the map is the size of the container. The Map constructor can also include optional parameters.  The optional parameters can be included in any order.</summary>
    /// <param name="divId" type="String" optional="false">Container id for the referencing map. Required.</param>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  See options list.&#10;
    /// Extent extent&#10;
    /// Boolean nav&#10;
    /// Boolean slider&#10;
    /// Boolean showInfoWindowOnClick&#10;
    /// Boolean displayGraphicsOnPan&#10;
    /// LOD[] lods&#10;
    /// Boolean logo&#10;
    /// Boolean fitExtent&#10;
    /// InfoWindowBase infoWindow&#10;
    /// Boolean wrapAround180&#10;
    /// Number resizeDelay&#10;
    /// String navigationMode&#10;
    /// Boolean fadeOnZoom&#10;
    /// Boolean force3DTransforms</param>
    /// <field name="layerIds" type="String[]">Array of current TiledMapServiceLayers and DynamicMapServiceLayers added to the map.</field>
    /// <field name="width" type="Number">Current width of the map in screen pixels.</field>
    /// <field name="height" type="Number">Current height of the map in screen pixels.</field>
    /// <field name="extent" type="Extent">The current extent of the map in map units.  This property is read-only.</field>
    /// <field name="graphics" type="GraphicsLayer">Provides access to the Map's GraphicsLayer. The graphics object is available to use after the Map.onLoad event.</field>
    /// <field name="id" type="String">Reference to HTML DIV or other element where the map is placed on the page.  This property is set in the Map constructor.</field>
    /// <field name="isClickRecenter" type="Boolean">When true, the key sequence of shift then click to recenter the map is enabled. Known Values: true | false</field>
    /// <field name="isShiftDoubleClickZoom" type="Boolean">When true, shift double click zoom is enabled.  This allows a user to zoom and recenter the map by shift + double clicking the mouse. Known Values: true | false</field>
    /// <field name="isKeyboardNavigation" type="Boolean">When true, keyboard navigation is enabled. This allows users to pan the keyboard using the arrow keys and to zoom using the + and - keys. Known Values: true | false</field>
    /// <field name="isPan" type="Boolean">When true, map panning is enabled using the mouse. Known Values: true | false</field>
    /// <field name="isRubberBandZoom" type="Boolean">When true, rubberband zoom is enabled. This allows users to draw a bounding box zoom area using the mouse. Known Values: true | false</field>
    /// <field name="isScrollWheelZoom" type="Boolean">When true, the mouse scroll wheel zoom is enabled. Known Values: true | false</field>
    /// <field name="spatialReference" type="SpatialReference">The spatial reference of the map. See Projected Coordinate Systems and Geographic Coordinate Systems for the list of supported spatial references.</field>
    /// <field name="loaded" type="Boolean">After the first layer is loaded, the value is set to true. Known Values: true | false</field>
    /// <field name="isPanArrows" type="Boolean">When true, pan arrows are displayed around the edge of the map. Known Values: true | false</field>
    /// <field name="isZoomSlider" type="Boolean">When true, the zoom slider is displayed on the map. Known Values: true | false</field>
    /// <field name="isDoubleClickZoom" type="Boolean">When true, double click zoom is enabled.  This allows a user to zoom and recenter the map by double clicking the mouse. Known Values: true | false</field>
    /// <field name="position" type="Point">This point geometry in screen coordinates represent the top-left corner of the map container. This coordinate also acts as the origin for all screen coordinates returned by Map and GraphicsLayer events.</field>
    /// <field name="graphicsLayerIds" type="String[]">An array of the current GraphicsLayers in the map.</field>
    /// <field name="timeExtent" type="TimeExtent">The current TimeExtent for the map. Use the setTimeExtent method to modify the time extent.</field>
    /// <field name="root" type="DOMNode">The DOM node that contains the container of layers, build-in info window, logo and slider.</field>
    /// <field name="snappingManager" type="SnappingManager">If snapping is enabled on the map using map.enableSnapping() this property provides access to the SnappingManager. The snapping manager's setLayerInfo method can be used to modify the target snapping layers.</field>
    /// <field name="navigationMode" type="String">Indicates whether the map uses CSS3 transformations when panning and zooming. In 'css-transform' mode the map will use CSS3 transformations, if supported by the browser, to provide a smoother experience while panning and zooming the map. Known Values: 'classic' | 'css-transforms'</field>
    /// <field name="fadeOnZoom" type="Boolean">Indicates if the fade effect is enabled  while zooming. Only applicable when navigationMode is set to 'css-transforms'.</field>
    /// <field name="force3DTransforms" type="Boolean">When the mapNavigation mode is set to 'css-transforms', CSS3 transforms  will be used for map navigation when supported by the browser. It is recommended that you let the map determine when to enable transformations to avoid running into a known issue with scrollbar rendering on Chrome on Windows XP.</field>
};
esri.Map.prototype =
{
    addLayer: function (layer,index) {
        /// <summary>Adds an ESRI Layer to the map.The return object of Layer was added at v1.4.</summary>
        /// <param name="layer" type="Layer" optional="false">Layer to be added to the map.</param>
        /// <param name="index" type="Number" optional="true">A layer can be added at a specified index in the map. If no index is specified or the index specified is greater than the current number of layers, the layer is automatically appended to the list of layers in the map and the index is normalized. (As of v1.3) </param>
        /// <return type="Layer">Layer</return>
    },
    centerAt: function (mapPoint) {
        /// <summary>Centers the map based on map coordinates as the center point.</summary>
        /// <param name="mapPoint" type="Point" optional="false">Centers the map on the specified x,y location.</param>
    },
    disableRubberBandZoom: function () {
        /// <summary>Disallows zooming in or out on a map using a bounding box.</summary>
    },
    disableClickRecenter: function () {
        /// <summary>Disallows clicking on a map to center it.</summary>
    },
    disableDoubleClickZoom: function () {
        /// <summary>Disallows double clicking on a map to zoom in a level and center the map.</summary>
    },
    disablePan: function () {
        /// <summary>Disallows panning a map using the mouse.</summary>
    },
    disableScrollWheelZoom: function () {
        /// <summary>Disallows zooming in or out on a map using the mouse scroll wheel.</summary>
    },
    disableKeyboardNavigation: function () {
        /// <summary>Disallows panning and zooming using the keyboard.</summary>
    },
    enableClickRecenter: function () {
        /// <summary>Permits users to click on a map to center it.</summary>
    },
    enableDoubleClickZoom: function () {
        /// <summary>Permits users to double click on a map to zoom in a level and center the map.</summary>
    },
    enableKeyboardNavigation: function () {
        /// <summary>Permits users to pan and zoom using the keyboard.</summary>
    },
    enablePan: function () {
        /// <summary>Permits users to pan a map using the mouse.</summary>
    },
    enableRubberBandZoom: function () {
        /// <summary>Permits users to zoom in or out on a map using a bounding box.</summary>
    },
    enableScrollWheelZoom: function () {
        /// <summary>Permits users to zoom in or out on a map using the mouse scroll wheel.</summary>
    },
    getLayer: function (id) {
        /// <summary>Returns an individual layer of a map.</summary>
        /// <param name="id" type="String" optional="false">ID assigned to the layer.</param>
        /// <return type="Layer">Layer</return>
    },
    panDown: function () {
        /// <summary>Pans the map south.</summary>
    },
    panLeft: function () {
        /// <summary>Pans the map west.</summary>
    },
    panLowerLeft: function () {
        /// <summary>Pans the map southwest.</summary>
    },
    panLowerRight: function () {
        /// <summary>Pans the map southeast.</summary>
    },
    panRight: function () {
        /// <summary>Pans the map east.</summary>
    },
    panUp: function () {
        /// <summary>Pans the map north.</summary>
    },
    panUpperLeft: function () {
        /// <summary>Pans the map northwest.</summary>
    },
    panUpperRight: function () {
        /// <summary>Pans the map northeast.</summary>
    },
    resize: function (immediate) {
        /// <summary>Resizes the map DIV.  This method should be used after the map DIV has been resized.</summary>
        /// <param name="immediate" type="Boolean" optional="true">By default, the actual resize logic is delayed internally in order to throttle spurious resize events dispatched by some browsers. In cases where you explicitly call this method in a one-and-done situation, you can use the boolean immediate argument to indicate that the resize logic should be applied immediately without any delay.</param>
    },
    setExtent: function (extent,fit) {
        /// <summary>Sets the extent of the map. The extent must be in the same spatial reference as the map.</summary>
        /// <param name="extent" type="Extent" optional="false">Sets the minx, miny, maxx, and maxy for a map.</param>
        /// <param name="fit" type="Boolean" optional="true">When true, for maps that contain tiled map service layers, you are guaranteed to have the input extent shown completely on the map.   (As of v1.3) </param>
    },
    toMap: function (screenPoint) {
        /// <summary>Converts a single screen point or an array of screen points to map coordinates.</summary>
        /// <param name="screenPoint" type="Point" optional="false">Converts screen coordinates to map coordinates.</param>
        /// <return type="Point">Point</return>
    },
    toScreen: function (mapPoint) {
        /// <summary>Converts a single map point or an array of map points to screen coordinates.</summary>
        /// <param name="mapPoint" type="Point" optional="false">Converts map coordinates to screen coordinates.</param>
        /// <return type="Point">Point</return>
    },
    getLevel: function () {
        /// <summary>Gets the current level of detail ID for the map.  Valid only with an ArcGISTiledMapService layer.</summary>
        /// <return type="Number">Number</return>
    },
    setLevel: function (level) {
        /// <summary>Sets the map to the specified level ID.  Zooms to the new level based on the current map center point. Valid only with an ArcGISTiledMapService layer.</summary>
        /// <param name="level" type="Number" optional="false">The level ID.</param>
    },
    showPanArrows: function () {
        /// <summary>Shows the pan arrows on the map.</summary>
    },
    hidePanArrows: function () {
        /// <summary>Hides the pan arrows from the map.</summary>
    },
    showZoomSlider: function () {
        /// <summary>Shows the zoom slider on the map.</summary>
    },
    hideZoomSlider: function () {
        /// <summary>Hides the zoom slider from the map.</summary>
    },
    enableMapNavigation: function () {
        /// <summary>Allows all map navigation.</summary>
    },
    disableMapNavigation: function () {
        /// <summary>Disallows all map navigation except the slider and pan arrows.</summary>
    },
    reorderLayer: function (layer,index) {
        /// <summary>Changes the layer order in the map.</summary>
        /// <param name="layer" type="Layer" optional="false">The layer to be moved.   (As of v1.4)  Beginning with version 1.4, use this parameter in place of "layerId". In versions prior to v1.4, use "layerID" in place of "layer".  Type:  &lt;String>Definition:  The ID of the layer to be moved.  This ID is assigned in Layer.id.</param>
        /// <param name="index" type="Number" optional="false">Refers to the location for placing the layer.  The bottom most layer has an index of 0.</param>
    },
    reposition: function () {
        /// <summary>Repositions the map DIV on the page.  This method should be used after the map DIV has been repostioned.</summary>
    },
    getInfoWindowAnchor: function (screenCoords) {
        /// <summary>Sets an InfoWindow's anchor when calling InfoWindow.show.</summary>
        /// <param name="screenCoords" type="Point" optional="false">The anchor point in screen units.</param>
        /// <return type="String">String</return>
    },
    disableShiftDoubleClickZoom: function () {
        /// <summary>Disallows shift double clicking on a map to zoom in a level and center the map.</summary>
    },
    enableShiftDoubleClickZoom: function () {
        /// <summary>Permits users to shift double click on a map to zoom in a level and center the map.</summary>
    },
    centerAndZoom: function (mapPoint,levelOrFactor) {
        /// <summary>Centers and zooms the map.</summary>
        /// <param name="mapPoint" type="Point" optional="false">Centers the map on the specified x,y location.</param>
        /// <param name="levelOrFactor" type="Number" optional="false">When using an ArcGISTiledMapServiceLayer, the map is zoomed to the level specified.  When using a DynamicMapServiceLayer, the map is zoomed in or out by the specified factor.  For example, use 0.5 to zoom in twice as far and 2.0 to zoom out twice as far.</param>
    },
    removeAllLayers: function () {
        /// <summary>Removes all layers from the map.The map's extent, spatial reference, and tiling scheme if defined do not change when the layers are removed. When the next layer is added to the map, this layer is displayed at the same extent and spatial reference.</summary>
    },
    removeLayer: function (layer) {
        /// <summary>Removes the specified layer from the map.</summary>
        /// <param name="layer" type="Layer" optional="false">Layer to be removed from the map. The map's extent, spatial reference, and tiling scheme if defined do not change when the layer is removed. When the next layer is added to the map, this layer is displayed at the same extent and spatial reference.</param>
    },
    setMapCursor: function (cursor) {
        /// <summary>Sets the default cursor for the map. This cursor is shown whenever the mouse is pointed over the map, except when panning by dragging the map or using SHIFT+Drag to zoom. If not set, the map uses the platform-dependent default cursor, usually an arrow.</summary>
        /// <param name="cursor" type="String" optional="false">A standard CSS cursor value.  Some common values include "default", "pointer", "crosshair", "text", "help", and "wait".</param>
    },
    addLayers: function (layers) {
        /// <summary>Adds multiple layers to a map. The array order corresponds to the layer order in the client side map.</summary>
        /// <param name="layers" type="Layer[]" optional="false">Layers to be added to the map.</param>
    },
    setTimeExtent: function (timeExtent) {
        /// <summary>Sets the TimeExtent for the map.</summary>
        /// <param name="timeExtent" type="TimeExtent" optional="false">Set the time extent for which data is displayed on the map.</param>
    },
    destroy: function () {
        /// <summary>Destroys the map instance. After the map is destroyed it is no longer valid however you can re-use the div element of the map to create a new map instance.</summary>
        /// <return type="none">none</return>
    },
    setTimeSlider: function (timeSlider) {
        /// <summary>Set the time slider associated with the map.</summary>
        /// <param name="timeSlider" type="TimeSlider" optional="false">The time slider dijit to associate with the map.</param>
    },
    enableSnapping: function (snapOptions) {
        /// <summary>Enable snapping on the map when working with the Editor, Measurement widget or the Draw and Edit toolbars.</summary>
        /// <param name="snapOptions" type="Object" optional="false">        &lt;Number> tolerance      Specify the radius of the snapping circle in pixels. The default value is 15 pixels.                  &lt;Object>              layerInfos                    An array of layerInfo objects that define the snapping target layers. All values are optional. If no snapping options      are set the default values will be used.                                    &lt;Layer> layer                                Reference to a feature or graphics layer that will be a target snapping layer. The default option            is to set all feature and graphics layers in the map to be target snapping layers.                                                &lt;Boolean> snapToPoint                                Default is true. When true snapping to points will be enabled for layers with point geometry.                                                &lt;Boolean> snapToVertex                                Default is true. When true snapping to vertices will be enabled for layers with polyline or polygon geometry.                                                &lt;Boolean> snapToEdge                                Default is true. When true snapping to edges will be enabled for layers with polyline or polygon geometry.                        &lt;SimpleMarkerSymbol> snapPointSymbol        Define a symbol for the snapping location. The default symbol is a simple marker symbol with the following properties: size:15px,color:cyan,style:STYLE_CROSS.        &lt;Boolean> alwaysSnap        When true, snapping is always enabled. When false users press the snapKey to enable snapping. The default value is false.        &lt;dojo.key> snapKey       When alwaysSnap is set to false use this option to define the key users press to enable snapping. The default values is the CTRL key.  var symbol = new esri.symbol.SimpleMarkerSymbol();map.enableSnapping({  snapPointSymbol: symbol,  tolerance:20,  snapKey:dojo.keys.ALT});</param>
        /// <return type="SnappingManager">SnappingManager</return>
    },
    disableSnapping: function () {
        /// <summary>Disables snapping on the map.</summary>
        /// <return type="none">none</return>
    },

};
esri.Graphic = function (geometry,symbol,attributes,infoTemplate,json) {
    /// <summary>Creates a new Graphic object.  All parameters are required and must be specified in the order given.</summary>
    /// <param name="geometry" type="Geometry" optional="false">The geometry that defines the graphic.</param>
    /// <param name="symbol" type="Symbol" optional="false">Symbol used for drawing the graphic.</param>
    /// <param name="attributes" type="Object" optional="false">Name value pairs of fields and field values associated with the graphic.</param>
    /// <param name="infoTemplate" type="InfoTemplate" optional="false">The content for display in an InfoWindow.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the graphic.</param> = function (geometry,symbol,attributes,infoTemplate,json) {
    /// <summary>Creates a new Graphic object using a JSON object.</summary>
    /// <param name="geometry" type="Geometry" optional="false">The geometry that defines the graphic.</param>
    /// <param name="symbol" type="Symbol" optional="false">Symbol used for drawing the graphic.</param>
    /// <param name="attributes" type="Object" optional="false">Name value pairs of fields and field values associated with the graphic.</param>
    /// <param name="infoTemplate" type="InfoTemplate" optional="false">The content for display in an InfoWindow.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the graphic.</param>
    /// <field name="attributes" type="Object">Name value pairs of fields and field values associated with the graphic.</field>
    /// <field name="geometry" type="Geometry">The geometry that defines the graphic.</field>
    /// <field name="infoTemplate" type="InfoTemplate">The content for display in an InfoWindow.</field>
    /// <field name="symbol" type="Symbol">The symbol for the graphic.</field>
    /// <field name="visible" type="Boolean">Indicate the visibility of the graphic. The default value is true.</field>
};
esri.Graphic.prototype =
{
    setSymbol: function (symbol) {
        /// <summary>Sets the symbol of the graphic.</summary>
        /// <param name="symbol" type="Symbol" optional="false">The symbol for the graphic.</param>
        /// <return type="Graphic">Graphic</return>
    },
    setGeometry: function (geometry) {
        /// <summary>Defines the geometry of the graphic.</summary>
        /// <param name="geometry" type="Geometry" optional="false">The geometry that defines the graphic.</param>
        /// <return type="Graphic">Graphic</return>
    },
    getDojoShape: function () {
        /// <summary>Returns the Dojo gfx shape of the ESRI graphic.</summary>
        /// <return type="dojox.gfx.Shape">dojox.gfx.Shape</return>
    },
    hide: function () {
        /// <summary>Hides the graphic.</summary>
    },
    setAttributes: function (attributes) {
        /// <summary>Defines the attributes of the graphic.</summary>
        /// <param name="attributes" type="Object" optional="false">The name value pairs of fields and field values associated with the graphic.</param>
        /// <return type="Graphic">Graphic</return>
    },
    setInfoTemplate: function (infoTemplate) {
        /// <summary>Defines the InfoTemplate for the InfoWindow of the graphic.  When a user clicks a graphic, the InfoWindow opens with this template.</summary>
        /// <param name="infoTemplate" type="InfoTemplate" optional="false">The content for display in an InfoWindow.</param>
        /// <return type="Graphic">Graphic</return>
    },
    show: function () {
        /// <summary>Shows the graphic.</summary>
    },
    getTitle: function () {
        /// <summary>Returns the title string based on attributes and infoTemplate values.</summary>
        /// <return type="String">String</return>
    },
    getContent: function () {
        /// <summary>Returns the content string based on attributes and infoTemplate values.</summary>
        /// <return type="String">String</return>
    },
    toJson: function () {
        /// <summary>Converts object to its ArcGIS Server JSON representation.</summary>
        /// <return type="Object">Object</return>
    },
    getLayer: function () {
        /// <summary>Returns the graphics layer that contains the graphic. Returns null if the graphic is not added to a layer.</summary>
        /// <return type="GraphicsLayer">GraphicsLayer</return>
    },

};
esri.InfoTemplate = function (title,content,json) {
    /// <summary>Creates a new InfoTemplate object.  All parameters are required and must be specified in the order given.</summary>
    /// <param name="title" type="String" optional="false">The template for defining how to format the title used in an InfoWindow.</param>
    /// <param name="content" type="String" optional="false">The template for defining how to format the content used in an InfoWindow.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the InfoTemplate.{title:"Test Title", content:"Test Content"}</param> = function (title,content,json) {
    /// <summary>Creates a new InfoTemplate object using a JSON object.</summary>
    /// <param name="title" type="String" optional="false">The template for defining how to format the title used in an InfoWindow.</param>
    /// <param name="content" type="String" optional="false">The template for defining how to format the content used in an InfoWindow.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the InfoTemplate.{title:"Test Title", content:"Test Content"}</param> = function (title,content,json) {
    /// <summary>Creates a new empty InfoTemplate object.</summary>
    /// <param name="title" type="String" optional="false">The template for defining how to format the title used in an InfoWindow.</param>
    /// <param name="content" type="String" optional="false">The template for defining how to format the content used in an InfoWindow.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the InfoTemplate.{title:"Test Title", content:"Test Content"}</param>
    /// <field name="content" type="String |Function">The template for defining how to format the content used in an InfoWindow.</field>
    /// <field name="title" type="String|Function">The template for defining how to format the title used in an InfoWindow.</field>
};
esri.InfoTemplate.prototype =
{
    setContent: function (template) {
        /// <summary>Sets the content template. View the Format Info Window Content help topic for more details.</summary>
        /// <param name="template" type="String|Function" optional="false">The template for the content.</param>
        /// <return type="InfoTemplate">InfoTemplate</return>
    },
    setTitle: function (template) {
        /// <summary>Sets the title template. View the Format Info Window Content help topic for more details.</summary>
        /// <param name="template" type="String|Function" optional="false">The template for the title.</param>
        /// <return type="InfoTemplate">InfoTemplate</return>
    },
    toJson: function () {
        /// <summary>Converts object to its ArcGIS Server JSON representation.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.SpatialReference = function (json,wkid,wkt) {
    /// <summary>Creates a new SpatialReference object.</summary>
    /// <param name="json" type="Object" optional="false">The REST JSON representation of the spatial reference:  {"wkid" : &lt;wkid>}</param>
    /// <param name="wkid" type="Number" optional="false">The well-known id (wkid) of the coordinate system.</param>
    /// <param name="wkt" type="String" optional="false">The well-known text (wkt) of the coordinate system.</param> = function (json,wkid,wkt) {
    /// <summary>Create a spatial reference object and initialize it with a well-known ID (wkid).</summary>
    /// <param name="json" type="Object" optional="false">The REST JSON representation of the spatial reference:  {"wkid" : &lt;wkid>}</param>
    /// <param name="wkid" type="Number" optional="false">The well-known id (wkid) of the coordinate system.</param>
    /// <param name="wkt" type="String" optional="false">The well-known text (wkt) of the coordinate system.</param> = function (json,wkid,wkt) {
    /// <summary>Create a spatial reference object and initialize it with the given well-known text (wkt).</summary>
    /// <param name="json" type="Object" optional="false">The REST JSON representation of the spatial reference:  {"wkid" : &lt;wkid>}</param>
    /// <param name="wkid" type="Number" optional="false">The well-known id (wkid) of the coordinate system.</param>
    /// <param name="wkt" type="String" optional="false">The well-known text (wkt) of the coordinate system.</param>
    /// <field name="wkid" type="Number">The well-known ID of a spatial reference.  See Projected Coordinate Systems and Geographic Coordinate Systems for the list of supported spatial references.</field>
    /// <field name="wkt" type="String">The well-known text that defines a spatial reference.</field>
};
esri.SpatialReference.prototype =
{
    toJson: function () {
        /// <summary>Returns an easily serializable object representation of the spatial reference.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.Units = function () {
    /// <summary>Class added v1.4.  ESRI unit constants.</summary>
};
esri.Units.prototype =
{

};
esri.TimeExtent = function (startTime,endTime) {
    /// <summary>Creates a new TimeExtent object with the specifed start and end time. If the startTime is null or undefined the start time is negative infinity. If the endTime is null or undefined the endTime is positive infinity. To represent an instant in time set the startTime and endTime to the same time value.</summary>
    /// <param name="startTime" type="Date" optional="false">The start time for the specified time extent.</param>
    /// <param name="endTime" type="Date" optional="false">The end time for the specified time extent.</param>
    /// <field name="startTime" type="Date">The start time for the specified time extent.</field>
    /// <field name="endTime" type="Date">The end time for the specified time extent.</field>
};
esri.TimeExtent.prototype =
{
    offset: function (offsetValue,offsetUnits) {
        /// <summary>Returns a new time extent with the given offset from "this' time extent.</summary>
        /// <param name="offsetValue" type="Number" optional="false">The length of time to offset from "this" time extent.</param>
        /// <param name="offsetUnits" type="String" optional="false">The offset units, see the TimeInfo constants for a list of valid values.</param>
        /// <return type="TimeExtent">TimeExtent</return>
    },
    intersection: function (timeExtent) {
        /// <summary>Returns a new time extent indicating the intersection between "this" and the argument time extent.</summary>
        /// <param name="timeExtent" type="Number" optional="false">The input time extent.</param>
        /// <return type="TimeExtent">TimeExtent</return>
    },

};
esri.InfoWindowBase = function () {
    /// <summary>Class added v2.2dojo.require("esri.InfoWindowBase"); The base class for the out-of-the-box InfoWindow. To create a custom info window, extend this class and adhere to the following requirements:Provide implementation for the listed methodsExpose listed propertiesFire listed eventsIt is necessary to provide a base implementation so that the custom info window provides a minimum level of functionality and works as expected. Custom info windows can define additional properties, methods and events to enhance the info window and provide a richer user experience.</summary>
    /// <field name="domNode" type="Object">The reference to a DOM node where the info window is constructed. Sub-classes should define this property .</field>
    /// <field name="isShowing" type="Boolean">Indicates if the info window is visible. When true the window is visible. Sub-classes should define this property.</field>
};
esri.InfoWindowBase.prototype =
{
    setContent: function (content) {
        /// <summary>Define the info window content. Sub-classes should implement this method.</summary>
        /// <param name="content" type="String|Object" optional="false">The content argument can be any of the following.See the Info Template content property for details.  String  Text to display in the info window, can include HTML tags to format and organize the content.    "This oil well has produced  100,000 bbls since 2005.    Reference to an HTML element  See the Info Window content property for details.  Deferred object  A deferred object represents a value that may not be immediately available. Your implementation should wait for the results to become available by assigning a callback function to the deferred object. </param>
        /// <return type="none">none</return>
    },
    setTitle: function (title) {
        /// <summary>Set the input value as the title for the info window. Sub-classes should implement this method.</summary>
        /// <param name="title" type="String|Object" optional="false"> In most cases the title will be a string value but the same options are available as for the setContent method.</param>
        /// <return type="none">none</return>
    },
    show: function (location) {
        /// <summary>Display the info window at the specified location. Location is an instance of esri.geometry.Point.</summary>
        /// <param name="location" type="Point" optional="false"> Location is an instance of esri.geometry.Point. If the location has a spatial reference, it is assumed to be in map coordinates otherwise screen coordinates are used. Screen coordinates are measured in pixels from the top-left corner of the map control. To convert between map and screen coordinates use Map.toMap and Map.toScreen.</param>
        /// <return type="none">none</return>
    },
    hide: function () {
        /// <summary>Hide the info window. Fire the onHide event at the end of your implementation of this method to hide the info window.Sub-classes should implement this method.</summary>
        /// <return type="none">none</return>
    },
    resize: function (width,height) {
        /// <summary>Resize the info window to the specified width and height (in pixels).Sub-classes should implement this method.</summary>
        /// <param name="width" type="Number" optional="false">The new width of the InfoWindow in pixels.</param>
        /// <param name="height" type="Number" optional="false">The new height of the InfoWindow in pixels.</param>
        /// <return type="none">none</return>
    },
    setMap: function (map) {
        /// <summary>This method is called by the map when the object is set as its info window. The default implementation provided by InfoWindowBase stores the argument to this object in a property named map and is sufficient for most use cases.</summary>
        /// <param name="map" type="Map" optional="false">The map object.</param>
        /// <return type="none">none</return>
    },
    unsetMap: function (map) {
        /// <summary>This method is called by the map when the object is no longer the map's info window. The default implementation provided by InfoWindowBase clears the argument property "map" from the object and is sufficient for most use cases.</summary>
        /// <param name="map" type="Map" optional="false">The map object.</param>
        /// <return type="none">none</return>
    },
    place: function (value,parentNode) {
        /// <summary>Helper method.  Place the HTML value as a child of the specified parent node.</summary>
        /// <param name="value" type="String|DomNode" optional="false">A string with HTML tags or a DOM node.</param>
        /// <param name="parentNode" type="DOMNode" optional="false">The parent node where the value will be placed.</param>
        /// <return type="none">none</return>
    },
    startupDijits: function () {
        /// <summary>Helper method. Call startup on dijits that are embedded into the specified node. Sub-classes may need to call this method right after displaying the info window, passing in a reference to the content node.</summary>
        /// <return type="none">none</return>
    },
    destroyDijits: function () {
        /// <summary>Helper method. Call destroy on dijits that are embedded into the specified node. Sub-classes may need to call this method before executing setContent logic to finalize the destruction of any embedded dijits in the previous content.</summary>
        /// <return type="none">none</return>
    },

};
esri.UndoManager = function (options) {
    /// <summary>Creates a new UndoManager object.</summary>
    /// <param name="options" type="Object" optional="false">See options list for parameters.&#10;
    /// Number maxOperations</param>
    /// <field name="canUndo" type="Boolean">When true, there are undo operations available on the stack.</field>
    /// <field name="canRedo" type="Boolean">When true, there are redo operations available on the stack.</field>
    /// <field name="position" type="Integer">The current operation position.  A position value of 0 means that no operations are available on the stack. When an undo operation is performed the position decreases by 1. When a redo occurs the position is incremented by 1.</field>
    /// <field name="length" type="Integer">The number of operations stored in the history stack.</field>
};
esri.UndoManager.prototype =
{
    add: function (operation) {
        /// <summary>Adds an undo operation to the stack and clears the redo stack.</summary>
        /// <param name="operation" type="Operation" optional="false">An operation to add to the stack.</param>
        /// <return type="none">none</return>
    },
    undo: function () {
        /// <summary>Moves the current position to the next undo operation and calls the operation's performUndo method.</summary>
        /// <return type="none">none</return>
    },
    redo: function () {
        /// <summary>Moves the current position to the next redo operation and calls the operation's performRedo() method.</summary>
        /// <return type="none">none</return>
    },
    clearUndo: function () {
        /// <summary>Clear the undo stack.</summary>
        /// <return type="none">none</return>
    },
    clearRedo: function () {
        /// <summary>Clear the redo stack</summary>
        /// <return type="none">none</return>
    },
    peekUndo: function () {
        /// <summary>Get the next undo operation from the stack.</summary>
        /// <return type="Operation">Operation</return>
    },
    peekRedo: function () {
        /// <summary>Get the next redo operation from the stack</summary>
        /// <return type="Operation">Operation</return>
    },
    get: function (operation) {
        /// <summary>Get the specified operation from the stack.</summary>
        /// <param name="operation" type="Operation" optional="false">The operation id.</param>
        /// <return type="Operation">Operation</return>
    },
    remove: function (operation) {
        /// <summary>Remove the specified operation from the stack.</summary>
        /// <param name="operation" type="Operation" optional="false">The operation id.</param>
        /// <return type="Operation">Operation</return>
    },
    destroy: function () {
        /// <summary>Destroy the operation manager. Sets the history stack to null and cleans up all references.</summary>
        /// <return type="none">none</return>
    },

};
esri.OperationBase = function (params) {
    /// <summary>Creates a new OperationBase object.</summary>
    /// <param name="params" type="Object" optional="false">See options list for parameters.&#10;
    /// String label&#10;
    /// String type</param>
    /// <field name="type" type="String">The type of operation, for example: "edit" or "navigation".</field>
    /// <field name="label" type="String">Details about the operation, for example: "Update" may be the label for an edit operation that updates features.</field>
};
esri.OperationBase.prototype =
{
    performUndo: function () {
        /// <summary>Reverse the operation. When inheriting from OperationBase provide a custom implementation for this method.</summary>
        /// <return type="none">none</return>
    },
    performRedo: function () {
        /// <summary>Re-perform the last undo operation. When inherting from OperationBase provide a custom implementation for this method.</summary>
        /// <return type="none">none</return>
    },

};
esri.SnappingManager = function (options) {
    /// <summary>Create a new SnappingManager object.  It is not required to create a SnappingManager object to enable snapping for the Editor, Measurement or Draw and Edit Toolbars. To enable snapping, call the map's enableSnapping method.  Create a new snapping manager object if the default options need to be modified.</summary>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  See options list.&#10;
    /// Map map&#10;
    /// Number tolerance&#10;
    /// Object[] layerInfos&#10;
    /// SimpleMarkerSymbol snapPointSymbol&#10;
    /// Boolean alwaysSnap&#10;
    /// dojo.keys snapKey</param>
};
esri.SnappingManager.prototype =
{
    getSnappingPoint: function (screenPoint) {
        /// <summary>Returns a deferred object, which can be added to a callback to find the snap point.</summary>
        /// <param name="screenPoint" type="Point" optional="false">The input screen point for which to find the snapping location.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    setLayerInfos: function (setLayerInfos) {
        /// <summary>An array of layerInfo objects used to specify the target snapping layers.</summary>
        /// <param name="setLayerInfos" type="Object[]" optional="false">An array of layerInfo objects that define the snapping target layers. All values are optional. If no snapping options    are set the default values will be used.                            &lt;Layer> layer                          Reference to a feature or graphics layer that will be a target snapping layer. The default option          is to set all feature and graphics layers in the map to be target snapping layers.                                      &lt;Boolean> snapToPoint                          Default is true. When true snapping to points will be enabled for layers with point geometry.                                      &lt;Boolean> snapToVertex                          Default is true. When true snapping to vertices will be enabled for layers with polyline or polygon geometry.                                      &lt;Boolean> snapToEdge                          Default is true. When true snapping to edges will be enabled for layers with polyline or polygon geometry.                  </param>
        /// <return type="none">none</return>
    },
    destroy: function () {
        /// <summary>Destroy the SnappingManager object. All related objects will be set to null.</summary>
        /// <return type="none">none</return>
    },

};
esri.Credential = function () {
    /// <summary>Class added v2.5dojo.require("esri.IdentityManagerBase");The Credential class represents a credential object used to access a secure ArcGIS resource.</summary>
    /// <field name="userId" type="String">User associated wth the Credential object.</field>
    /// <field name="server" type="String">The server url.</field>
    /// <field name="token" type="String">Token generated by the token service using the specified userId and password.</field>
    /// <field name="expires" type="String">Token expiration time specified as number of milliseconds since 1 January 1970 00:00:00 UTC.</field>
    /// <field name="ssl" type="Boolean">Indicates whether the resources accessed using this credential should be fetched over HTTPS protocol.</field>
    /// <field name="isAdmin" type="Boolean">Indicates whether this credential belongs to a user with admin privileges.</field>
};
esri.Credential.prototype =
{
    refreshToken: function () {
        /// <summary>Generate a new token and update the Credential's token property with the newly acquired token. Tokens are typically kept valid using a timer that automatically triggers a refresh before the token expires. Use this method in cases where the timer has been delayed or stopped. </summary>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    toJson: function () {
        /// <summary>Return the properties of this object in JSON.</summary>
        /// <return type="Object">Object</return>
    },
    destroy: function () {
        /// <summary>Destroy a credential. When the credential is destroyed remove any map layers that are using this credential.</summary>
        /// <return type="none">none</return>
    },

};
esri.IdentityManagerBase = function () {
    /// <summary>Class added v2.5dojo.require("esri.IdentityManagerBase"); This class provides the framework and helper methods required to implement a solution for managing user credentials for the following resources:  ArcGIS Server resources secured using token-based authentication. Note that only ArcGIS Server versions 10 SP 1 and greater are supported.   Secured ArcGIS.com resources (i.e. web maps).This class is not typically used by itself and does not include a user interface to obtain user input. The esri.IdentityManager class provides a complete out-of-the-box implementation.</summary>
    /// <field name="tokenValidity" type="Number">The suggested lifetime of the token in minutes.  Default is 60 minutes.</field>
};
esri.IdentityManagerBase.prototype =
{
    findServerInfo: function (url) {
        /// <summary>Returns information about the server that is hosting the specified url.</summary>
        /// <param name="url" type="String" optional="false">The url to a server.</param>
        /// <return type="ServerInfo">ServerInfo</return>
    },
    findCredential: function (url,userId) {
        /// <summary>Returns the credential for the resource identified by the specified url. Optionally you can provide a userId to find credentials for a specific user.</summary>
        /// <param name="url" type="String" optional="false">The url to a server.</param>
        /// <param name="userId" type="String" optional="true">The userId for which you want to obtain credentials.</param>
        /// <return type="Credential">Credential</return>
    },
    getCredential: function (url,options) {
        /// <summary>Returns a Credential object that can be used to access the secured resource identified by the input url. If required the user will be challenged for a username and password which is used to generate a token. Note: The IdentityManager sets up a timer to update the Credential object with a new token prior to the expiration time. This method is typically called by esri.request when a request fails due to an "invalid credentials" error.</summary>
        /// <param name="url" type="String" optional="false">The url for the secure resource.</param>
        /// <param name="options" type="Object" optional="true">Optional parameters. (As of 3.0).      &lt;Boolean&gt; retry    Determines if the method should make additional attempts to get the credentials after a failure.        &lt;String&gt; token    Token used for a previous unsuccessful attempt to fetch the given url        &lt;Error&gt; error    Error object returned by the server from a previous attempt to fetch the given url.  </param>
        /// <return type="dojo.Deferred &lt;Credential&gt;">dojo.Deferred &lt;Credential&gt;</return>
    },
    generateToken: function (serverInfo,userInfo,options) {
        /// <summary>Returns an object containing a token and its expiration time. You need to provide the ServerInfo object that contains token service URL and a user info object containing username and password. This is a helper method typically called by sub-classes to generate tokens.</summary>
        /// <param name="serverInfo" type="ServerInfo" optional="false">A ServerInfo object that contains a token service URL.</param>
        /// <param name="userInfo" type="Object" optional="false">A user info object containing a user name and password.</param>
        /// <param name="options" type="Object" optional="true">Optional parameters. (As of 3.0).      &lt;Boolean&gt; isAdmin    Indicate that the token should be generated using the token service deployed with the ArcGIS Server Admin API. The default value is false.  </param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    isBusy: function () {
        /// <summary>Returns true if the identity manager is busy accepting user input, i.e. the user has invoked signIn and is waiting for a response.</summary>
        /// <return type="Boolean">Boolean</return>
    },
    signIn: function (url,serverInfo,options) {
        /// <summary>Sub-classes must implement this method to create and manager the user interface that is used to obtain a username and password from the end-user. It should perform the following tasks:Challenge the user for a username and password.Generate a token and return it to the caller via Deferred object. </summary>
        /// <param name="url" type="String" optional="false">Url for the secure resource.</param>
        /// <param name="serverInfo" type="ServerInfo" optional="false">A ServerInfo object that contains the token service url.</param>
        /// <param name="options" type="Object" optional="true">Optional parameters. (As of 3.0).      &lt;Error&gt; error    Error object returned by the server from a previous attempt to fetch the given url.         &lt;Boolean&gt; isAdmin    Indicate that the token should be generated using the token service deployed with the ArcGIS Server Admin API. The default value is false.        &lt;String&gt; token    Token used for previous unsuccessful attempts to fetch the given url  </param>
        /// <return type="dojo.Deferred &lt;Credential&gt;">dojo.Deferred &lt;Credential&gt;</return>
    },
    registerServers: function (serverInfos) {
        /// <summary>Register secure servers and the token endpoints.</summary>
        /// <param name="serverInfos" type="ServerInfo" optional="false">A ServerInfos object that defines the secure service and token endpoint. The Identity Manager makes its best guess to determine the locatation of the secure server and token endpoint so in most cases calling registerServers is not necessary. However if the location of your server or token endpoint is non-standard use this method to register the location.</param>
        /// <return type="none">none</return>
    },
    setRedirectionHandler: function (handler) {
        /// <summary>When accessing secure resources from ArcGIS.com or one of its sub-domains the IdentityManager redirects the user to the ArcGIS.com sign-in page. Once the user successfully logs-in they are redirected back to the application. Use this method if the application needs to execute custom logic before the page is redirected by creating a custom redirection handler.</summary>
        /// <param name="handler" type="Object" optional="false">An object containing the following redirection properties:  &lt;String&gt; resourceUrl  The URL of the secure resource that triggers the redirection to the ArcGIS.com sign-in page.  &lt;ServerInfo&gt; serverInfo  ServerInfo object describing the server where the secure resource is hosted.  &lt;String&gt; signInPage  URL of the sign-in page where users will be redirected.  &lt;String&gt; returnUrlParamName  The application URL where the sign-in page redirects after a successful log-in. To create the return URL append the application's URL to signInPage as a parameter. returnUrlParamName contains the name of the parameter.  </param>
        /// <return type="none">none</return>
    },
    setProtocolErrorHandler: function (handlerFunction) {
        /// <summary>When accessing secured resources, identity manager may prompt for username and password and send them to the server using a secure connection. Due to browser limitations under certain conditions, it may not be possible to establish a secure connection with the server if the application is being run over HTTP protocol (you can identify the protocol by looking at the URL bar in any browser). In such cases, the Identity Manager will abort the request to fetch the secured resource.</summary>
        /// <param name="handlerFunction" type="Function" optional="false">The function to call when the protocol is mismatched.</param>
        /// <return type="none">none</return>
    },
    toJson: function () {
        /// <summary>Return properties of this object in JSON.It can be stored in a Cookie or persisted in HTML5 LocalStorage and later used to:Initialize the IdentityManager the next time user opens your application.Share the state of identity manager between multiple web pages of your website.This way your users won't be asked to sign in repeatedly when they launch your app multiple times or when navigating between multiple web pages in your website.</summary>
        /// <return type="Object">Object</return>
    },
    initialize: function (json) {
        /// <summary>Call this method (during your application initialization) with JSON previously obtained from toJson method to re-hydrate the state of identity manager.</summary>
        /// <param name="json" type="Object" optional="false">The JSON obtained from the toJson method.</param>
        /// <return type="Object">Object</return>
    },

};
esri.IdentityManager = function () {
    /// <summary>Class added v2.5dojo.require("esri.IdentityManager"); This singleton class is automatically instantiated when the module containing this class is imported into the application. This class extends esri.IdentityManagerBase so it inherits is properties and methods. This class provides the framework and helper methods required to implement a solution for managing user credentials for the following resources:  ArcGIS Server resources secured using token-based authentication. Note that only ArcGIS Server versions 10 SP 1 and greater are supported.   Secured ArcGIS.com resources (i.e. web maps).IdentityManager is a singleton class and is automatically instantiated into esri.id when the module containing this class is imported into the application. Because IdentityManager extends esri.IdentityManagerBase it inherits all of the IdentityManagerBase class properties and methods. You can access the dialog box used by the IdentityManager using this code:  var dialog = dijit.byNode(dojo.query(".esriSignInDialog")[0]);</summary>
    /// <field name="dialog" type="dijit.Dialog">Dialog box widget used to challenge the user for their credentials when the application attempts to access a secure resource. This property is available after the onDialogCreate event has fired.</field>
};
esri.IdentityManager.prototype =
{
    signIn: function () {
        /// <summary>This method is called by the base identity manager implementation.</summary>
        /// <return type="dojo.Deferred &lt;Credential&gt;">dojo.Deferred &lt;Credential&gt;</return>
    },

};
esri.ServerInfo = function () {
    /// <summary>Class added v2.5dojo.require("esri.IdentityManagerBase");This class contains information about an ArcGIS Server and its token endpoint.</summary>
    /// <field name="server" type="String">Server URL in the following format:  scheme://host[:port]</field>
    /// <field name="tokenServiceUrl" type="String">The token service URL used to generate tokens for the secured resources on the server.</field>
    /// <field name="adminTokenServiceUrl" type="String">The token service URL used to generate tokens for ArcGIS Server Admin resources.</field>
    /// <field name="shortLivedTokenValidity" type="Number">Validity of short-lived token in minutes.</field>
    /// <field name="currentVersion" type="Number">Version of the ArcGIS Server REST API deployed on this server. For example 10.0, 10.1</field>
};
esri.ServerInfo.prototype =
{
    toJson: function () {
        /// <summary>Return the properties of this object in JSON.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.layers = function () {
    /// <summary>esri - layers</summary>
};
esri.layers.Layer = function () {
    /// <summary>The base class for all layers that can be added to a map.Layer has no constructor.  Use ArcGISDynamicMapServiceLayer or ArcGISTiledMapServiceLayer.</summary>
    /// <field name="id" type="String">ID assigned to the layer. If not assigned, esri.Map assigns value. By default, the ID of the layer is "layer" followed by a number. The ID can be user defined only in the layer constructor.</field>
    /// <field name="opacity" type="Number">Opacity or transparency of layer.  Values range from 0.0 to 1.0, where 0.0 is 100% transparent and 1.0 has no transparency. Known Values: 0.0 - 1.0</field>
    /// <field name="visible" type="Boolean">Visibility of the layer. Known Values: true | false</field>
    /// <field name="loaded" type="Boolean">When the layer is loaded, the value becomes "true", and layer properties can be accessed.  The onLoad event is also fired. Known Values: true | false</field>
    /// <field name="url" type="String">URL to the ArcGIS Server REST resource that represents a map service.  To obtain the URL, use Services Directory.  An example URL for the Street Map service on ArcGIS Online is:   http://server.arcgisonline.com/ArcGIS/rest/services/ESRI_StreetMap_World_2D/MapServer.</field>
    /// <field name="credential" type="Credential">Provides credential information for the layer such as userid and token if the layer represents a resource that is secured with token-based authentication. This value is available after the layer has been loaded i.e. layer.loaded is true.</field>
};
esri.layers.Layer.prototype =
{
    hide: function () {
        /// <summary>Sets the visibility of the layer to "false".  The layer is not removed, but it is hidden from view.</summary>
    },
    setOpacity: function () {
        /// <summary>Sets the opacity of the layer.  Values range from 0.0 to 1.0, where 0.0 is 100% transparent and 1.0 has no transparency.</summary>
    },
    show: function () {
        /// <summary>Sets the visibility of the layer to "true".</summary>
    },
    setVisibility: function (isVisible) {
        /// <summary>Sets the visibility of the layer. When true, the layer is visible.</summary>
        /// <param name="isVisible" type="Boolean" optional="false">Set the visibility of the layer.</param>
        /// <return type="none">none</return>
    },

};
esri.layers.MapImage = function (options) {
    /// <summary>Creates a new Map Image object.</summary>
    /// <param name="options" type="Object" optional="false">An object that defines the map image options.</param>
    /// <field name="extent" type="Extent">Extent of exported map.</field>
    /// <field name="height" type="Number">Requested image height in pixels.</field>
    /// <field name="href" type="String">URL to returned image.</field>
    /// <field name="scale" type="Number">Scale of requested dynamic map.</field>
    /// <field name="width" type="Number">Requested image width in pixels.</field>
};
esri.layers.MapImage.prototype =
{

};
esri.layers.GraphicsLayer = function (options) {
    /// <summary>Creates a new GraphicsLayer object.</summary>
    /// <param name="options" type="Object" optional="true">Optional. See options list for parameters.&#10;
    /// Boolean displayOnPan&#10;
    /// String id&#10;
    /// Boolean visible&#10;
    /// Number opacity</param> = function (options) {
    /// <summary>Creates a new GraphicsLayer object with parameters.</summary>
    /// <param name="options" type="Object" optional="true">Optional. See options list for parameters.&#10;
    /// Boolean displayOnPan&#10;
    /// String id&#10;
    /// Boolean visible&#10;
    /// Number opacity</param>
    /// <field name="graphics" type="Graphic[]">The array of graphics that make up the layer.</field>
    /// <field name="renderer" type="Renderer">Renderer assigned to the GraphicsLayer.</field>
};
esri.layers.GraphicsLayer.prototype =
{
    add: function (graphic) {
        /// <summary>Adds a graphic.</summary>
        /// <param name="graphic" type="Graphic" optional="false">The graphic to add.</param>
        /// <return type="Graphic">Graphic</return>
    },
    remove: function (graphic) {
        /// <summary>Removes a graphic.</summary>
        /// <param name="graphic" type="Graphic" optional="false">The graphic to remove.</param>
        /// <return type="Graphic">Graphic</return>
    },
    clear: function () {
        /// <summary>Clears all graphics.</summary>
    },
    enableMouseEvents: function () {
        /// <summary>Enables all mouse events on the graphics layer.</summary>
    },
    disableMouseEvents: function () {
        /// <summary>Disables all mouse events on the graphics layer.</summary>
    },
    setRenderer: function (renderer) {
        /// <summary>Sets the renderer for the graphics layer.</summary>
        /// <param name="renderer" type="Renderer" optional="false">The renderer used for the graphic.</param>
    },
    setOpacity: function (opacity) {
        /// <summary>Initial opacity or transparency of layer. Not supported in Internet Explorer.</summary>
        /// <param name="opacity" type="Number" optional="false">Value from 0 to 1, where 0 is 100% transparent and 1 has no transparency. The default value is 1.</param>
    },
    setInfoTemplate: function (infoTemplate) {
        /// <summary>Specify or change the info template for a layer.</summary>
        /// <param name="infoTemplate" type="InfoTemplate" optional="false">The new info template.</param>
        /// <return type="none">none</return>
    },

};
esri.layers.DynamicMapServiceLayer = function () {
    /// <summary>The base class for ArcGIS Server dynamic map services.DynamicMapServiceLayer has no constructor.  Use ArcGISDynamicMapServicLayer and ArcGISImageServiceLayer.htm instead.    (As of v1.2)</summary>
    /// <field name="fullExtent" type="Extent">Full extent as defined by the map service.</field>
    /// <field name="initialExtent" type="Extent">Initial extent as defined by the map service.</field>
    /// <field name="spatialReference" type="SpatialReference">The spatial reference of the map service.  See Projected Coordinate Systems and Geographic Coordinate Systems for the list of supported spatial references.</field>
};
esri.layers.DynamicMapServiceLayer.prototype =
{
    getImageUrl: function (extent,width,height,callback) {
        /// <summary>Method to implement when extending DynamicMapServiceLayer.  For more details, see Creating custom layer types.</summary>
        /// <param name="extent" type="Extent" optional="false">Current extent of the map.</param>
        /// <param name="width" type="Number" optional="false">Current width of the map in pixels.</param>
        /// <param name="height" type="Number" optional="false">Current height of the map in pixels.</param>
        /// <param name="callback" type="Function" optional="false">The function to call when the method has completed.</param>
        /// <return type="String">String</return>
    },
    refresh: function () {
        /// <summary>Refreshes the map by making a new request to the server. In order to refresh the layer in this manner, setDisableClientCaching must be true. This ensures that map images are not cached on the client.</summary>
    },

};
esri.layers.ArcGISTiledMapServiceLayer = function (url,options) {
    /// <summary>Creates a new ArcGISTiledMapServiceLayer object.  A URL is a required parameter.  This layer also takes some optional parameters.  These optional parameters can be included in any order.</summary>
    /// <param name="url" type="String" optional="false">URL to the ArcGIS Server REST resource at represents a map service.  An example is http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Portland/Portland_ESRI_LandBase_AGO/MapServer.  For more information on constructing a URL, see The Services Directory and the REST API.</param>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  See options list.&#10;
    /// Number opacity&#10;
    /// Boolean visible&#10;
    /// String id&#10;
    /// String[] tileServers&#10;
    /// Number displayLevels</param>
    /// <field name="copyright" type="String">Copyright string as defined by the map service.</field>
    /// <field name="description" type="String">Map description as defined by the map service.</field>
    /// <field name="units" type="String">Default units of the layer as defined by the service.  If the layer is the base map, the map is in these units.</field>
    /// <field name="layerInfos" type="LayerInfo[]">Returns the available layers in service and their default visibility.</field>
    /// <field name="timeInfo" type="TimeInfo">Temporal information for the layer, such as time extent. If this property is null or not specified, then the layer does not support time-related operations.</field>
    /// <field name="capabilities" type="String">Capabilities of the map service, possible values are Map, Query and Data. Only available if the map service is published using ArcGIS Server version 10 or greater.</field>
    /// <field name="version" type="Number">The version of ArcGIS Server where the map service is published. Examples are 9.3, 9.31, 10.</field>
    /// <field name="maxRecordCount" type="Number">The maximum number of results that can be returned from query, identify and find operations. Requires ArcGIS Server version 10.1 or greater.</field>
    /// <field name="maxImageHeight" type="Number">The maximum image height , in pixels,  that the map service will export. Requires ArcGIS Server version 10.1 or greater.</field>
    /// <field name="maxImageWidgth" type="Number">The maximum image width, in pixels, that the map service will export. Requires ArcGIS Server version 10.1 or greater.</field>
};
esri.layers.ArcGISTiledMapServiceLayer.prototype =
{

};
esri.layers.ArcGISDynamicMapServiceLayer = function (url,options) {
    /// <summary>Creates a new ArcGISDynamicMapServiceLayer object.  A URL is a required parameter.  This layer also takes some optional parameters.  These optional parameters can be included in any order.</summary>
    /// <param name="url" type="String" optional="false">URL to the ArcGIS Server REST resource that represents a map service.  An example is http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Population_World/MapServer.  For more information on constructing a URL, see The Services Directory and the REST API.</param>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  See options list.&#10;
    /// Number opacity&#10;
    /// Boolean visible&#10;
    /// String id&#10;
    /// Boolean useMapImage&#10;
    /// ImageParameters imageParameters&#10;
    /// Boolean useMapTime&#10;
    /// String gdbVersion</param>
    /// <field name="dpi" type="Number">The output dpi of the dynamic map service layer.</field>
    /// <field name="imageFormat" type="String">The output image type. As of ArcGIS Server 9.3.1, the list of supported image formats is included in the description of Map Services in Services Directory under "Supported Image Format Types".  In addition, as of ArcGIS Server 9.3.1, optimized map services can produce true PNG32 images. Known Values: png | png8 | png24 | png32 |  jpg | pdf | bmp | gif | svg</field>
    /// <field name="imageTransparency" type="Boolean">Whether or not background of dynamic image is transparent. Known Values: true | false</field>
    /// <field name="copyright" type="String">Copyright string as defined by the map service.</field>
    /// <field name="description" type="String">Map description as defined by the map service.</field>
    /// <field name="units" type="String">Default units of the layer as defined by the service.  If the layer is the base map, the map is in these units.</field>
    /// <field name="layerInfos" type="LayerInfo[]">Returns the available layers in service and their default visibility.</field>
    /// <field name="disableClientCaching" type="Boolean">When true, images are always requested from the server and the browser's cache is ignored.  This should be used when the data supporting the map service changes frequently. Known Values: true | false</field>
    /// <field name="layerDefinitions" type="String[]">Sets the layer definitions used to filter the features of individual layers in the map service. Layer definitions with semicolons or colons are supported at version 2.0 if using a map service published using ArcGIS Server 10.0</field>
    /// <field name="visibleLayers" type="Number[]">Gets the visible layers of the exported map.</field>
    /// <field name="useMapImage" type="Boolean">When true, the image is saved to the server, and a JSON formatted response is sent to the client with the URL location of the image.  A second call is automatically made to the server to retrieve the image.  This value is set in the constructor using useMapImage. Deprecated at v2.0. Known Values: true | false</field>
    /// <field name="timeInfo" type="TimeInfo">Temporal information for the layer, such as time extent. If this property is null or not specified, then the layer does not support time-related operations.</field>
    /// <field name="layerTimeOptions" type="LayerTimeOptions[]">Returns the current layer time options if applicable. Use the setLayerTimeOptions method to modify the time options.</field>
    /// <field name="capabilities" type="String">Capabilities of the map service, possible values are Map, Query and Data. Only available if the map service is published using ArcGIS Server version 10 or greater.</field>
    /// <field name="version" type="Number">The version of ArcGIS Server where the map service is published. Examples are 9.3, 9.31, 10.</field>
    /// <field name="maxRecordCount" type="Number">The maximum number of results that can be returned from query, identify and find operations. Requires ArcGIS Server version 10.1 or greater.</field>
    /// <field name="maxImageHeight" type="Number">The maximum image height , in pixels,  that the map service will export. Requires ArcGIS Server version 10.1 or greater.</field>
    /// <field name="maxImageWidgth" type="Number">The maximum image width, in pixels, that the map service will export. Requires ArcGIS Server version 10.1 or greater.</field>
    /// <field name="dynamicLayerInfos" type="DynamicLayerInfo[]">Array of DynamicLayerInfos used to change the layer ordering or redefine the map.</field>
    /// <field name="layerDrawingOptions" type="LayerDrawingOptions[]">Array of LayerDrawingOptions used to override the way layers are drawn.</field>
};
esri.layers.ArcGISDynamicMapServiceLayer.prototype =
{
    exportMapImage: function (imageParameters,callback) {
        /// <summary>Exports a map using values as specified by ImageParameters.  On completion, MapImage is returned.</summary>
        /// <param name="imageParameters" type="ImageParameters" optional="true">Input parameters assigned before exporting the map image.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onMapImageExport event.</param>
    },
    setDPI: function (dpi,doNotRefresh) {
        /// <summary>Sets the dpi of the exported map.  The default value is 96.</summary>
        /// <param name="dpi" type="Number" optional="false">DPI value.</param>
        /// <param name="doNotRefresh" type="Boolean" optional="true">Added at version 2.2 When true the layer will not refresh the map image. The default value is false.</param>
    },
    setImageFormat: function (imageFormat,doNotRefresh) {
        /// <summary>Sets the image format of the exported map.</summary>
        /// <param name="imageFormat" type="String" optional="false">Valid values are png | png8 | png24 | png32 | jpg | pdf | bmp | gif | svg. Note: The png32 image format is only supported by msd based services published with version 10 or greater. View the service's 'Supported image Format Types' value for the map servcie to determine which formats are supported. The map server performs antialiasing when requesting png32 for an optimized map service. </param>
        /// <param name="doNotRefresh" type="Boolean" optional="true">Added at version 2.2 When true the layer will not refresh the map image. The default value is false.</param>
    },
    setVisibleLayers: function (ids,doNotRefresh) {
        /// <summary>Sets the visible layers of the exported map.  By default, the visible layers are as defined by the default visibility in LayerInfo. To display no visible layers specify an array with a value of -1.</summary>
        /// <param name="ids" type="Number[]" optional="false">Array of layer IDs.</param>
        /// <param name="doNotRefresh" type="Boolean" optional="true">Added at version 2.2 When true the layer will not refresh the map image. The default value is false.</param>
    },
    setImageTransparency: function (transparent,doNotRefresh) {
        /// <summary>Sets the background of a dynamic image to transparent.</summary>
        /// <param name="transparent" type="Boolean" optional="false">Valid values are true | false.  The default is "true".</param>
        /// <param name="doNotRefresh" type="Boolean" optional="true">Added at version 2.2 When true the layer will not refresh the map image. The default value is false.</param>
    },
    setDefaultVisibleLayers: function (doNotRefresh) {
        /// <summary>Clears the visible layers as defined in setVisibleLayers, and resets to the default layers of the map service.</summary>
        /// <param name="doNotRefresh" type="Boolean" optional="true">Added at version 2.2 When true the layer will not refresh the map image. The default value is false.</param>
    },
    setLayerDefinitions: function (layerDefinitions,doNotRefresh) {
        /// <summary>Sets the layer definitions used to filter the features of individual layers in the map service.</summary>
        /// <param name="layerDefinitions" type="String[]" optional="false">An array containing each layer's definition.</param>
        /// <param name="doNotRefresh" type="Boolean" optional="true">Added at version 2.2 When true the layer will not refresh the map image. The default value is false.</param>
    },
    setDefaultLayerDefinitions: function (doNotRefresh) {
        /// <summary>Resets all layer definitions to those defined in the service.</summary>
        /// <param name="doNotRefresh" type="Boolean" optional="true">Added at version 2.2 When true the layer will not refresh the map image. The default value is false.</param>
    },
    setDisableClientCaching: function (disable) {
        /// <summary>Sets whether images are always requested from the server and the browser's cache is ignored. This should be used when the data supporting the map service changes frequently.</summary>
        /// <param name="disable" type="Boolean" optional="false">When true, client side caching is disabled.</param>
    },
    setLayerTimeOptions: function (options,doNotRefresh) {
        /// <summary>Sets the time-related options for the layer.</summary>
        /// <param name="options" type="LayerTimeOptions[]" optional="false">Array of LayerTimeOptions objects that allow you to override how a layer is exported in reference to the map's time extent. There is one object per sub-layer. In the following example, array indices 2 and 5 are valid sub-layer IDs. var timeOption1 = new esri.layers.LayerTimeOptions();timeOption1.timeOffset = 4;timeOption1.timeOffsetUnits = esri.layers.TimeInfo.UNIT_YEARS;var options = [];options[2]= timeOption1;options[5] = timeOption2;imageParameters.layerTimeOptions = options;</param>
        /// <param name="doNotRefresh" type="Boolean" optional="true">Added at version 2.2 When true the layer will not refresh the map image. The default value is false.</param>
    },
    setUseMapTime: function (update) {
        /// <summary>Determine if the layer will update its content based on the map's current time extent. Default value is true.</summary>
        /// <param name="update" type="Boolean" optional="false">When false the layer will not update its content based on the map's time extent. Default value is true.</param>
        /// <return type="none">none</return>
    },
    createDynamicLayerInfosFromLayerInfos: function () {
        /// <summary>Create an array of DynamicLayerInfos based on the current set of LayerInfo.</summary>
        /// <return type="DynamicLayerInfo[]">DynamicLayerInfo[]</return>
    },
    setLayerDrawingOptions: function (layerDrawingOptions,doNotRefresh) {
        /// <summary>Specify an array of LayerDrawingOptions that override the way the layers are drawn.</summary>
        /// <param name="layerDrawingOptions" type="LayerDrawingOptions[]" optional="false">An array of layer drawing options.</param>
        /// <param name="doNotRefresh" type="Boolean" optional="false">When true the layer will not refresh the map image. The default value is false.</param>
        /// <return type="null">null</return>
    },
    setDynamicLayerInfos: function (dynamicLayerInfos,doNotRefresh) {
        /// <summary>Specify an array of DynamicLayerInfos used to change the layer ordering or to redefine the map.</summary>
        /// <param name="dynamicLayerInfos" type="DynamicLayerInfo[]" optional="false">An array of dynamic layer infos.</param>
        /// <param name="doNotRefresh" type="Boolean" optional="false">When true the layer will not refresh the map image. The default value is false.</param>
        /// <return type="null">null</return>
    },
    setGDBVersion: function (gdbVersion,doNotRefresh) {
        /// <summary>Set the version for the ArcGIS DynamicMapServiceLayer. Requires an ArcGIS Server service 10.1 or greater</summary>
        /// <param name="gdbVersion" type="String" optional="false">The name of the version to display.</param>
        /// <param name="doNotRefresh" type="Boolean" optional="true">Added at version 2.7 When true the layer will not refresh the map image. The default value is false.</param>
        /// <return type="none">none</return>
    },

};
esri.layers.ImageParameters = function () {
    /// <summary>Creates a new ImageParameters object.  The constructor takes no parameters.</summary>
    /// <field name="bbox" type="Extent">Extent of map to be exported.</field>
    /// <field name="dpi" type="Number">Dots per inch setting for an ArcGISDynamicMapServiceLayer.</field>
    /// <field name="format" type="String">Map image format. Known Values: png | png8 | png24 | jpg | pdf | bmp | gif | svg</field>
    /// <field name="height" type="Number">Requested image height in pixels.</field>
    /// <field name="imageSpatialReference" type="SpatialReference">Spatial reference of exported map.  See Projected Coordinate Systems and Geographic Coordinate Systems for the list of supported spatial references.</field>
    /// <field name="transparent" type="Boolean">Whether or not background of dynamic image is transparent. Known Values: true | false</field>
    /// <field name="width" type="Number">Requested image width in pixels.</field>
    /// <field name="layerOption" type="String">The option for displaying or hiding the layer.  See the Constants table for valid values.</field>
    /// <field name="layerIds" type="Number[]">A list of layer ID's, that represent which layers to include in the exported map. Use in combination with <a hreflayerOptionto specify how layer visibility is handled.</field>
    /// <field name="layerDefinitions" type="String[]">Array of layer definition expressions that allows you to filter the features of individual layers in the exported map image. Layer definitions with semicolons or colons are supported if using a map service published using ArcGIS Server 10.</field>
    /// <field name="timeExtent" type="TimeExtent">The time extent for the map image.</field>
    /// <field name="layerTimeOptions" type="LayerTimeOptions[]">Array of LayerTimeOptions objects that allow you to override how a layer is exported in reference to the map's time extent. There is one object per sub-layer.</field>
};
esri.layers.ImageParameters.prototype =
{

};
esri.layers.LayerInfo = function () {
    /// <summary>Contains information about each layer in a map service.  LayerInfo has no constructor.</summary>
    /// <field name="id" type="Number">Layer ID assigned by ArcGIS Server for a layer.  The topmost layer is 0, and each layer follows sequentially.  If a layer is added or removed from the source map document, the ID values will shift accordingly.</field>
    /// <field name="name" type="String">Layer name as defined in the  map service.</field>
    /// <field name="parentLayerId" type="Number">If the layer is part of a group layer, it will include the parent ID of the group layer. Otherwise, the value is -1.  If a layer is added or removed from the source map document, the ID values will shift accordingly.</field>
    /// <field name="defaultVisibility" type="Boolean">Default visibility of the layers in the map service.</field>
    /// <field name="subLayerIds" type="Number[]">If the layer is a parent layer, it will have one or more sub layers included in an array.  Otherwise, the value is null.  If a layer is added or removed from the source map document, the ID values will shift accordingly.</field>
    /// <field name="minScale" type="Number">The minimum visible scale for each layer in the map service. If the map is zoomed out beyond this scale the layer will not be visible.  A value of 0 means that the layer does not have a minimum scale. This property is only available for map services published using ArcGIS Server 10 SP1 or later.</field>
    /// <field name="maxScale" type="Number">The maximum visible scale for each layer in the map service. If the map is zoomed in beyond this scale the layer will not be visible.  A value of 0 means that the layer does not have a maximum scale. This property is only available for map services published using ArcGIS Server 10 SP1 or later.</field>
};
esri.layers.LayerInfo.prototype =
{

};
esri.layers.LOD = function () {
    /// <summary>An ArcGISTiledMapServiceLayer has a number of LODs (Levels of Detail). Each LOD corresponds to a map at a given scale or resolution.  LOD has no constructor.</summary>
    /// <field name="level" type="Number">ID for each level. The top most level is 0.  The ID is returned in Map.getLevel() and set in Map.setLevel().</field>
    /// <field name="scale" type="Number">Scale for each level.</field>
    /// <field name="resolution" type="Number">Resolution in map units of each pixel in a tile for each level.</field>
};
esri.layers.LOD.prototype =
{

};
esri.layers.TiledMapServiceLayer = function () {
    /// <summary>dojo.require("esri.layers.tiled");The base class for all tiled map service layers.  (As of v1.2)TiledMapServiceLayer has no constructor.  Use ArcGISTiledMapServiceLayer instead.</summary>
    /// <field name="tileInfo" type="TileInfo">Returns TileInfo, which has information on the tiling schema.</field>
    /// <field name="fullExtent" type="Extent">Full extent as defined by the map service.</field>
    /// <field name="initialExtent" type="Extent">Initial extent as defined by the map service.</field>
    /// <field name="spatialReference" type="SpatialReference">The spatial reference of the map service.  See Projected Coordinate Systems and Geographic Coordinate Systems for the list of supported spatial references.</field>
};
esri.layers.TiledMapServiceLayer.prototype =
{
    refresh: function () {
        /// <summary>Reloads all the tiles in the current view.</summary>
    },
    getTileUrl: function (level,row,column) {
        /// <summary>Method to implement when extending TiledMapServiceLayer.   For more details, see Creating custom layer types.</summary>
        /// <param name="level" type="Number" optional="false">Requested tile's level.</param>
        /// <param name="row" type="Number" optional="false">Requested tile's row.</param>
        /// <param name="column" type="Number" optional="false">Requested tile's column.</param>
        /// <return type="String">String</return>
    },

};
esri.layers.ArcGISImageServiceLayer = function (url,options) {
    /// <summary>Creates a new ArcGISImageServiceLayer object.  A URL is a required parameter.  This layer also takes some optional parameters.  These optional parameters can be included in any order.</summary>
    /// <param name="url" type="String" optional="false">URL to the ArcGIS Server REST resource that represents a map service.  An example is http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Portland/Portland_ESRI_LandBase_AGO/MapServer.  For more information on constructing a URL, see The Services Directory and the REST API.</param>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  See options list.&#10;
    /// Number opacity&#10;
    /// Boolean visible&#10;
    /// String id&#10;
    /// ImageServiceParameters imageServiceParameters&#10;
    /// Boolean useMapTime</param>
    /// <field name="format" type="String">The output image type. Known Values: png8 | png24 | jpg | bmp | gif</field>
    /// <field name="disableClientCaching" type="Boolean">When true, images are always requested from the server and the browser's cache is ignored.  This should be used when the data supporting the map service changes frequently. Known Values: true | false</field>
    /// <field name="bandIds" type="Number[]">Array of current band selections.</field>
    /// <field name="compressionQuality" type="Number">Current compression quality value.  The compression quality controls how much loss the image will be subjected to.  Only valid with JPG image types.</field>
    /// <field name="interpolation" type="String">Current interpolation method.  The interpolation method affects how the raster dataset is transformed when it undergoes warping or when it changes coordinate space.</field>
    /// <field name="bandCount" type="Number">Number of bands in ArcGISImageServiceLayer.</field>
    /// <field name="bands" type="Object[]">The raster bands that the raster dataset is composed of and their statistics. The length of this array gives the number of bands and the array index represents the band ID.</field>
    /// <field name="copyrightText" type="String">Copyright string as defined by the image service.</field>
    /// <field name="description" type="String">Description as defined by the image service.</field>
    /// <field name="pixelSizeX" type="Number">Size of pixel in X direction.</field>
    /// <field name="pixelSizeY" type="Number">Size of pixel in Y direction.</field>
    /// <field name="pixelType" type="Number">The pixel type of the image service. Pertains to the type of values stored in the raster, such as signed integer, unsigned integer, or floating point. Integers are whole numbers, whereas floating points have decimals. Known Values: C64 | C128 | F32 | F64 | S8 | S16 | S32 | U1 | U2 | U4 | U8 | U16 | U32 | UNKNOWN</field>
    /// <field name="renderingRule" type="RasterFunction">Specifies the rendering rule for how the requested image should be rendered. View the Raster Functions help topic in the REST help for more details.</field>
    /// <field name="mosaicRule" type="MosaicRule">Specifies the mosaic rule when defining how individual images should be mosaicked.</field>
    /// <field name="timeInfo" type="TimeInfo">Temporal information for the layer, such as time extent. If this property is null or not specified, then the layer does not support time-related operations.</field>
    /// <field name="version" type="Number">The version of ArcGIS Server the image service is published to, e.g. 9.3, 9.31, 10.</field>
    /// <field name="maxRecordCount" type="Number">The maximum number of results that can be returned from query, identify and find operations. Requires ArcGIS Server version 10.1 or greater.</field>
    /// <field name="maxImageHeight" type="Number">The maximum image height , in pixels,  that the map service will export. Requires ArcGIS Server version 10.1 or greater.</field>
    /// <field name="maxImageWidgth" type="Number">The maximum image width, in pixels, that the map service will export. Requires ArcGIS Server version 10.1 or greater.</field>
};
esri.layers.ArcGISImageServiceLayer.prototype =
{
    exportMapImage: function (imageServiceParameters,callback) {
        /// <summary>Exports a map using values as specified by ImageServiceParameters.  On completion, MapImage is returned.</summary>
        /// <param name="imageServiceParameters" type="ImageServiceParameters" optional="true">Input parameters assigned before exporting the map image.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onMapImageExport event.</param>
    },
    setBandIds: function (bandIds,doNotRefresh) {
        /// <summary>Sets the R,G,B of the exported image to the appropriate ImageService Band ID.  BandIds are zero based.</summary>
        /// <param name="bandIds" type="Number[]" optional="false">Array of band IDs to use in the exported image.</param>
        /// <param name="doNotRefresh" type="Boolean" optional="true">Added at version 2.2 When true the layer will not refresh the map image. The default value is false.</param>
    },
    setCompressionQuality: function (quality,doNotRefresh) {
        /// <summary>Sets the compression quality of the exported image.  Only valid with JPG image format.</summary>
        /// <param name="quality" type="Number" optional="false">A value from 0 to 100.  100 is best quality but largest in file size.</param>
        /// <param name="doNotRefresh" type="Boolean" optional="true">Added at version 2.2 When true the layer will not refresh the map image. The default value is false.</param>
    },
    setDisableClientCaching: function (disable) {
        /// <summary>Sets whether images are always requested from the server and the browser's cache is ignored. This should be used when the data supporting the map service changes frequently.</summary>
        /// <param name="disable" type="Boolean" optional="false">When true, browser client side caching is disabled.</param>
    },
    setInterpolation: function (interpolation,doNotRefresh) {
        /// <summary>Sets the interpolation method.  The interpolation method affects how the raster dataset is transformed when it undergoes warping or when it changes coordinate space.</summary>
        /// <param name="interpolation" type="String" optional="false">Interpolation value defined in ImageServiceParameters Constants Table.</param>
        /// <param name="doNotRefresh" type="Boolean" optional="true">Added at version 2.2 When true the layer will not refresh the map image. The default value is false.</param>
    },
    setMosaicRule: function (mosaicRule,doNotRefresh) {
        /// <summary>Sets the mosaic rule of the layer to the specified value. The mosaic rule defines how individual images should be mosaicked. Refreshes the layer to reflect the mosaic rule.</summary>
        /// <param name="mosaicRule" type="MosaicRule" optional="false">The mosaic rule.</param>
        /// <param name="doNotRefresh" type="Boolean" optional="true">Added at version 2.2 When true the layer will not refresh the map image. The default value is false.</param>
        /// <return type="MosaicRule">MosaicRule</return>
    },
    setRenderingRule: function (renderingRule,doNotRefresh) {
        /// <summary>Sets the rendering rule of the layer to the given value. Refreshes the layer to reflect the rendering rule.</summary>
        /// <param name="renderingRule" type="RasterFunction" optional="false">The new rendering rule.</param>
        /// <param name="doNotRefresh" type="Boolean" optional="true">Added at version 2.2 When true the layer will not refresh the map image. The default value is false.</param>
        /// <return type="RasterFunction">RasterFunction</return>
    },
    setImageFormat: function (imageFormat,doNotRefresh) {
        /// <summary>Set the image format.</summary>
        /// <param name="imageFormat" type="String" optional="false">Valid values are png | png8 | png24 |   jpg | pdf | bmp | gif | svg.</param>
        /// <param name="doNotRefresh" type="Boolean" optional="true">Added at version 2.2 When true the layer will not refresh the map image. The default value is false.</param>
        /// <return type="none">none</return>
    },
    setUseMapTime: function (update) {
        /// <summary>Determine if the layer will update its content based on the map's current time extent. Default value is true.</summary>
        /// <param name="update" type="Boolean" optional="false">When false the layer will not update its content based on the map's time extent. Default value is true.</param>
        /// <return type="none">none</return>
    },

};
esri.layers.ImageServiceParameters = function () {
    /// <summary>Creates a new ImageServiceParameters object.  The constructor takes no parameters.</summary>
    /// <field name="height" type="Number">Requested image height in pixels.</field>
    /// <field name="width" type="Number">Requested image width in pixels.</field>
    /// <field name="format" type="String">Map image format. If no format is specified the format is set to the server default which is jpgpng Known Values: png8 | png24 | jpg | bmp | gif | jpgpng</field>
    /// <field name="bandIds" type="Number[]">Array of current band selections.</field>
    /// <field name="compressionQuality" type="Number">Current compression quality value.  The compression quality controls how much loss the image will be subjected to.  Only valid with JPG image types.</field>
    /// <field name="extent" type="Extent">Extent of the exported image.</field>
    /// <field name="interpolation" type="String">Current interpolation method.  The interpolation method affects how the raster dataset is transformed when it undergoes warping or when it changes coordinate space.</field>
    /// <field name="mosaicRule" type="MosaicRule">Specifies the mosaic rule when defining how individual images should be mosaicked.</field>
    /// <field name="renderingRule" type="RasterFunction">Specifies the rendering rule for how the requested image should be rendered. View the Raster Functions help topic in the REST help for more details.</field>
    /// <field name="timeExtent" type="TimeExtent">Define the time extent for the image.</field>
    /// <field name="noData" type="Number">The pixel value that represents no information.</field>
};
esri.layers.ImageServiceParameters.prototype =
{

};
esri.layers.TileInfo = function () {
    /// <summary>Contains information about the tiling scheme for an ArcGISTiledMapServiceLayer.  TileInfo has no constructor.</summary>
    /// <field name="dpi" type="Number">The dpi of the tiling scheme.</field>
    /// <field name="format" type="String">Image format of the cached tiles.  Valid values are png8, png24, png32, and jpg.</field>
    /// <field name="lods" type="LOD[]">An array of levels of detail that define the tiling scheme.</field>
    /// <field name="spatialReference" type="SpatialReference">The spatial reference of the tiling schema.  See Projected Coordinate Systems and Geographic Coordinate Systems for the list of supported spatial references.</field>
    /// <field name="height" type="Number">Height of each tile in pixels.</field>
    /// <field name="origin" type="Point">The tiling scheme origin.</field>
    /// <field name="width" type="Number">Width of each tile in pixels.</field>
};
esri.layers.TileInfo.prototype =
{

};
esri.layers.FeatureLayer = function (url,options,featureCollectionObject,options) {
    /// <summary>Creates a new instance of a feature layer object from the ArcGIS Server REST resource identified by the input URL. Once created you can optionally set a definition expression or time definition.</summary>
    /// <param name="url" type="String" optional="false">URL to the ArcGIS Server REST resource that represents a feature service.  An example is http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Population_World/MapServer/0.  For more information on constructing a URL, see The Services Directory and the REST API.</param>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  See options list.&#10;
    /// Boolean displayOnPan&#10;
    /// String id&#10;
    /// Boolean visible&#10;
    /// Number mode&#10;
    /// String[] outFields&#10;
    /// InfoTemplate infoTemplate&#10;
    /// String trackIdField&#10;
    /// Number tileWidth&#10;
    /// Number tileHeight&#10;
    /// Number maxAllowableOffset&#10;
    /// Number opacity&#10;
    /// Boolean useMapTime&#10;
    /// Boolean autoGeneralize&#10;
    /// LayerMapSource or LayerDataSource source&#10;
    /// String gdbVersion&#10;
    /// Function editSummaryCallback</param>
    /// <param name="featureCollectionObject" type="Object" optional="false">A feature collection is an object with the following properties:                                   &lt;Object> layerDefinition                                The structure is the same as the information returned by REST for a layer in a feature or map service. The minimum layer definition required to create a feature collection object depends on the required functionality, i.e. time, rendering etc.                                                   &lt;Object> featureSet                                A collection of features.                                   </param>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  See options list.&#10;
    /// Boolean displayOnPan&#10;
    /// String id&#10;
    /// Boolean visible&#10;
    /// Number mode&#10;
    /// String[] outFields&#10;
    /// InfoTemplate infoTemplate&#10;
    /// String trackIdField&#10;
    /// Number tileWidth&#10;
    /// Number tileHeight&#10;
    /// Number maxAllowableOffset&#10;
    /// Number opacity&#10;
    /// Boolean useMapTime&#10;
    /// Boolean autoGeneralize&#10;
    /// LayerMapSource or LayerDataSource source&#10;
    /// String gdbVersion&#10;
    /// Function editSummaryCallback</param> = function (url,options,featureCollectionObject,options) {
    /// <summary>Creates a new instance of a feature layer using a FeatureCollection object. The feature layer, when initialized with a feature collection object has the following behavior:Edits are applied on the client not posted to the server.The feature layer generates a unique object id for new features.Does not support queries that need to be performed on the server, e.g. queries with a where clause or non-extent based spatial queries. The feature layer toJson method returns an object with the same properties as the feature collection. The returned object includes all the features that are in the layer when the method is called. This method can be used to access a serializable representation of the features that can be saved on the server.</summary>
    /// <param name="url" type="String" optional="false">URL to the ArcGIS Server REST resource that represents a feature service.  An example is http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Population_World/MapServer/0.  For more information on constructing a URL, see The Services Directory and the REST API.</param>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  See options list.&#10;
    /// Boolean displayOnPan&#10;
    /// String id&#10;
    /// Boolean visible&#10;
    /// Number mode&#10;
    /// String[] outFields&#10;
    /// InfoTemplate infoTemplate&#10;
    /// String trackIdField&#10;
    /// Number tileWidth&#10;
    /// Number tileHeight&#10;
    /// Number maxAllowableOffset&#10;
    /// Number opacity&#10;
    /// Boolean useMapTime&#10;
    /// Boolean autoGeneralize&#10;
    /// LayerMapSource or LayerDataSource source&#10;
    /// String gdbVersion&#10;
    /// Function editSummaryCallback</param>
    /// <param name="featureCollectionObject" type="Object" optional="false">A feature collection is an object with the following properties:                                   &lt;Object> layerDefinition                                The structure is the same as the information returned by REST for a layer in a feature or map service. The minimum layer definition required to create a feature collection object depends on the required functionality, i.e. time, rendering etc.                                                   &lt;Object> featureSet                                A collection of features.                                   </param>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  See options list.&#10;
    /// Boolean displayOnPan&#10;
    /// String id&#10;
    /// Boolean visible&#10;
    /// Number mode&#10;
    /// String[] outFields&#10;
    /// InfoTemplate infoTemplate&#10;
    /// String trackIdField&#10;
    /// Number tileWidth&#10;
    /// Number tileHeight&#10;
    /// Number maxAllowableOffset&#10;
    /// Number opacity&#10;
    /// Boolean useMapTime&#10;
    /// Boolean autoGeneralize&#10;
    /// LayerMapSource or LayerDataSource source&#10;
    /// String gdbVersion&#10;
    /// Function editSummaryCallback</param>
    /// <field name="layerId" type="Number">Unique ID of the layer that the FeatureLayer was constructed against.</field>
    /// <field name="name" type="String">The name of the layer as defined in the map service.</field>
    /// <field name="description" type="String">The description of the layer as defined in the map service.</field>
    /// <field name="type" type="String">Specifies the type of layer.  Can be "Feature Layer" or "Table".</field>
    /// <field name="geometryType" type="String">Geometry type of the features in the layer. Can be one of the following: "esriGeometryPoint", "esriGeometryPolygon" or "esriGeometryPolyline".</field>
    /// <field name="displayField" type="String">The name of the layer's primary display field. The value of this property matches the name of one of the fields of the layer.</field>
    /// <field name="defaultDefinitionExpression" type="String">Metadata describing the default definition expression for the layer as defined by the service.</field>
    /// <field name="fullExtent" type="Extent">The full extent of the layer.</field>
    /// <field name="fields" type="Field[]">The array of fields in the layer.</field>
    /// <field name="objectIdField" type="String">The name of the field that contains the Object ID field for the layer.</field>
    /// <field name="typeIdField" type="String">The field that represents the Type ID field. Only applicable for ArcGIS Server Feature Service layers.</field>
    /// <field name="types" type="FeatureType[]">An array of sub types defined in the Feature Service layer. Only applicable for ArcGIS Server Feature Service layers.</field>
    /// <field name="templates" type="FeatureTemplate[]">An array of feature templates defined in the Feature Service layer. Only applicable for ArcGIS Server Feature Service layers.</field>
    /// <field name="minScale" type="Number">Minimum visible scale for the layer. If the map is zoomed out beyond this scale, the layer will not be visible. A value of 0 means that the layer does not have a minimum scale.</field>
    /// <field name="maxScale" type="Number">Maximum visible scale for the layer.  If the map is zoomed in beyond this scale, the layer will not be visible. A value of 0 means that the layer does not have a maximum scale.</field>
    /// <field name="timeInfo" type="TimeInfo">Time information for the layer, such as start time field, end time field, track id field, layers time extent and the draw time interval.  Only applicable if the layer is time aware.</field>
    /// <field name="relationships" type="Object[]">Each element in the array is an object that describes the layer's relationship with another layer or table.</field>
    /// <field name="hasAttachments" type="Boolean">True if attachments are enabled on the feature layer.</field>
    /// <field name="renderer" type="Renderer">The renderer for the layer.</field>
    /// <field name="graphics" type="Graphic[]">Array of features in the layer.</field>
    /// <field name="copyright" type="String">Copyright information for the layer.</field>
    /// <field name="capabilities" type="String">Information about the capabilities enabled for this layer.</field>
    /// <field name="globalIdField" type="String">The globalIdField for the layer.</field>
    /// <field name="htmlPopupType" type="String">The html popup type defined for the layer. View the constants table for a list of valid values.</field>
    /// <field name="version" type="Number">The version of ArcGIS Server where the layer is published. Examples are 9.3, 9.31, 10.</field>
    /// <field name="maxRecordCount" type="Number">The maximum number of results that will be returned from a query. Requires ArcGIS Server version 10.1 or greater.</field>
    /// <field name="editFieldsInfo" type="Object">Indicates the field names for the editor fields.</field>
    /// <field name="ownershipBasedAccessControlForFeatures" type="Object">Indicates the ownership access control configuration.</field>
    /// <field name="supportsAdvancedQueries" type="Boolean">When true, the layer supports orderByFields in a query operation.</field>
    /// <field name="supportsStatistics" type="Boolean">When true, the layer supports statistical functions in query operations.</field>
    /// <field name="source" type="LayerMapSource or LayerDataSource">The dynamic layer or table source.</field>
    /// <field name="allowGeometryUpdates" type="Boolean">Returns true if the geometry of the features in the layer can be edited, false otherwise. In ArcGIS Server version 10.1, this option can be configured when publishing the service. For earlier versions, this is always true.</field>
    /// <field name="defaultVisibility" type="Boolean">Indicates the default visibility for the layer.</field>
};
esri.layers.FeatureLayer.prototype =
{
    isEditable: function () {
        /// <summary>Returns true if the FeatureLayer is editable.</summary>
        /// <return type="Boolean">Boolean</return>
    },
    setDefinitionExpression: function (expression) {
        /// <summary>Set's the definition expression for the FeatureLayer. Only the features that match the definition expression are displayed.</summary>
        /// <param name="expression" type="String" optional="false">The definition expression to apply. For example, "TYPE='Park'"</param>
        /// <return type="FeatureLayer">FeatureLayer</return>
    },
    getDefinitionExpression: function () {
        /// <summary>Returns the current definition expression.</summary>
        /// <return type="String">String</return>
    },
    selectFeatures: function (query,selectionMethod,callback,errback) {
        /// <summary>Selects features from the FeatureLayer. Layer properties like layer definition and time definition are honored. The selection method defines how query results are passed to the selection. The feature layer will highlight the current selection if a selection symbol has been defined. Whenever possible, the feature layer will perform the query operation on the client (browser).</summary>
        /// <param name="query" type="Query" optional="false">The input query. The query object has the following restrictions to avoid conflicts between layer and map properties.outFields specified by the query object are overridden by the outFields specified in the FeatureLayer constructor.The returnGeometry value specified by the query object is ignored and true is used.The outSpatialReference set by the query object is ignored and the map's spatial reference is used.</param>
        /// <param name="selectionMethod" type="Number" optional="true">The selection method defines how the restful of the selection is combined with the existing selection. See Constants table for valid values. The default option is to create a new selection.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onSelectionComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    getSelectedFeatures: function () {
        /// <summary>Gets the currently selected features.</summary>
        /// <return type="Graphic[]">Graphic[]</return>
    },
    clearSelection: function () {
        /// <summary>Clears the current selection.</summary>
        /// <return type="FeatureLayer">FeatureLayer</return>
    },
    setSelectionSymbol: function (symbol) {
        /// <summary>Set's the selection symbol for the feature layer. If no symbol is specified, features are drawn using the layer's renderer.</summary>
        /// <param name="symbol" type="Symbol" optional="false">Symbol for the current selection. Make sure the symbol type is appropriate for the geometry type of the layer.</param>
        /// <return type="FeatureLayer">FeatureLayer</return>
    },
    getSelectionSymbol: function () {
        /// <summary>Gets the current selection symbol.</summary>
        /// <return type="Symbol">Symbol</return>
    },
    applyEdits: function (adds,updates,deletes,callback,errback) {
        /// <summary>Apply edits to the feature layer. Only applicable for layers in a feature service.</summary>
        /// <param name="adds" type="Graphic[]" optional="false">Array of features to add to the layer in the feature service. New features are typically created using the Draw toolbar.</param>
        /// <param name="updates" type="Graphic[]" optional="false">Array of features whose geometry and/or attributes have changed. Features must have a valid OBJECTID. The geometry of features is typically modified using the Edit toolbar. Attributes are modified using the Attribute Inspector.</param>
        /// <param name="deletes" type="Graphic[]" optional="false">Array of features to delete. Must have valid ObjectId</param>
        /// <param name="callback" type="Function" optional="false">This function will be called when the operation is complete. The arguments passed to this function are the same as the onEditsComplete event.</param>
        /// <param name="errback" type="Function" optional="false">An error object is returned if an error occurs.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    setTimeDefinition: function (definition) {
        /// <summary>Set's the time definition for the feature layer.</summary>
        /// <param name="definition" type="TimeExtent" optional="false">The new time extent used to filter the layer.</param>
        /// <return type="FeatureLayer">FeatureLayer</return>
    },
    getTimeDefinition: function () {
        /// <summary>Get the current time definition applied to the feature layer.</summary>
        /// <return type="TimeExtent">TimeExtent</return>
    },
    setTimeOffset: function (offsetValue,offsetUnits) {
        /// <summary>Sets a time offset for the layer. Only applicable for time-aware layers.</summary>
        /// <param name="offsetValue" type="Number" optional="false">The length of time to offset from "this" time. Specify a positive or negative whole number.</param>
        /// <param name="offsetUnits" type="String" optional="false">Units in which the offset is specified. See the TimeInfo constants for valid values.</param>
        /// <return type="FeatureLayer">FeatureLayer</return>
    },
    queryFeatures: function (query,callback,errback) {
        /// <summary>Query features from the feature layer. Layer definition and time definition are honored. Whenever possible the feature layer will perform the query on the client.</summary>
        /// <param name="query" type="Query" optional="false">The input query. The query object has the following restrictions to avoid conflicts between layer and map properties.outFields specified by the query object are overridden by the outFields specified in the FeatureLayer constructor.The returnGeometry value specified by the query object is ignored and true is used.The outSpatialReference set by the query object is ignored and the map's spatial reference is used.</param>
        /// <param name="callback" type="Function" optional="false">The function to call when the method has completed.</param>
        /// <param name="errback" type="Function" optional="false">An error object is returned if an error occurs.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    queryRelatedFeatures: function (relQuery,callback,errback) {
        /// <summary>Query features or records, from another layer or table, related to features in this layer.</summary>
        /// <param name="relQuery" type="RelationshipQuery" optional="false">The input query.</param>
        /// <param name="callback" type="Function" optional="false">The function to call when the method has completed.</param>
        /// <param name="errback" type="Function" optional="false">An error object is returned if an error occurs.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    queryIds: function (query,callback,errback) {
        /// <summary>Query for ObjectIds. There is no limit on the number of ObjectIds that are returned from the server. Like queryFeatures this operation will perform queries on the client (browser) whenever possible.  Valid only for layers published using ArcGIS Server 10 SP1 or greater.</summary>
        /// <param name="query" type="Query" optional="false">The input query. The query object has the following restrictions to avoid conflicts between layer and map properties.outFields specified by the query object are overridden by the outFields specified in the FeatureLayer constructor.The returnGeometry value specified by the query object is ignored and true is used.The outSpatialReference set by the query object is ignored and the map's spatial reference is used.</param>
        /// <param name="callback" type="Function" optional="false">The function to call when the method has completed.</param>
        /// <param name="errback" type="Function" optional="false">An error object is returned if an error occurs.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    refresh: function () {
        /// <summary>Refreshes the features in the feature layer. The feature layer requeries all the features in the service, except the selected features, and updates itself.</summary>
    },
    queryAttachmentInfos: function (objectId,callback,errback) {
        /// <summary>Query for information about attachments associated with the specified ObjectIds.</summary>
        /// <param name="objectId" type="Number" optional="false">The ObjectId for the feature to query for attachment information.</param>
        /// <param name="callback" type="Function" optional="false">The function to call when the method has completed.</param>
        /// <param name="errback" type="Function" optional="false">An error object is returned if an error occurs.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    addAttachment: function (objectId,formNode,callback,errback) {
        /// <summary>Add an attachment to the feature specified by the ObjectId.</summary>
        /// <param name="objectId" type="Number" optional="false">The ObjectId of the feature to which the attachment is added.</param>
        /// <param name="formNode" type="HTMLFormElement" optional="false">HTML form that contains a file upload field pointing to the file to be added as an attachment.</param>
        /// <param name="callback" type="Function" optional="false">The function to call when the method has completed.  The arguments in the function are the same as the addAttachmentComplete event.</param>
        /// <param name="errback" type="Function" optional="false">An error object is returned if an error occurs during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    deleteAttachments: function (objectId,attachmentIds,callback,errback) {
        /// <summary>Delete one or more attachments for the feature specified by the input ObjectId.</summary>
        /// <param name="objectId" type="Number" optional="false">The ObjectId of the feature from which the attachment is removed.</param>
        /// <param name="attachmentIds" type="Number[]" optional="false">The array of attachment ids to delete.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    toJson: function () {
        /// <summary>Returns an easily serializable object representation of the layer.</summary>
        /// <return type="Object">Object</return>
    },
    setRenderer: function (renderer) {
        /// <summary>Set the renderer for the feature layer.</summary>
        /// <param name="renderer" type="Renderer" optional="false">The renderer to apply to the feature layer</param>
        /// <return type="none">none</return>
    },
    setOpacity: function (opacity) {
        /// <summary>Initial opacity or transparency of layer. Not supported in Internet Explorer.</summary>
        /// <param name="opacity" type="Number" optional="false">Value from 0 to 1, where 0 is 100% transparent and 1 has no transparency. The default value is 1.</param>
    },
    queryCount: function (query,callback,errback) {
        /// <summary>Get a count of the number of features that satisfy the input query. Valid only for layers published using ArcGIS Server 10 SP1 or greater. Layers published with earlier versions of ArcGIS Server return an error to the error callback.</summary>
        /// <param name="query" type="Query" optional="false">The input query. The query object has the following restrictions to avoid conflicts between layer and map properties.outFields specified by the query object are overridden by the outFields specified in the FeatureLayer constructor.The returnGeometry value specified by the query object is ignored and true is used.The outSpatialReference set by the query object is ignored and the map's spatial reference is used.</param>
        /// <param name="callback" type="Function" optional="false">The function to call when the method has completed.</param>
        /// <param name="errback" type="Function" optional="false">An error object is returned if an error occurs.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    setInfoTemplate: function (infoTemplate) {
        /// <summary>Specify or change the info template for a layer.</summary>
        /// <param name="infoTemplate" type="InfoTemplate" optional="false">The new info template.</param>
        /// <return type="none">none</return>
    },
    setUseMapTime: function (update) {
        /// <summary>Determine if the layer will update its content based on the map's current time extent. Default value is true.</summary>
        /// <param name="update" type="Boolean" optional="false">When false the layer will not update its content based on the map's time extent. Default value is true.</param>
        /// <return type="none">none</return>
    },
    setMaxAllowableOffset: function (offset) {
        /// <summary>Sets the maximum allowable offset used when generalizing geometries.</summary>
        /// <param name="offset" type="Number" optional="false">The maximum allowable offset.</param>
        /// <return type="none">none</return>
    },
    setScaleRange: function (minScale,maxScale) {
        /// <summary>Set the scale range for the layer.  If minScale and maxScale are set to 0 then the layer will be visible at all scales.</summary>
        /// <param name="minScale" type="Number" optional="false">The minimum scale for the layer. If the map is zoomed out beyond the specified scale the layer will not be visible. A value of 0 means the layer does not have a minimum scale.</param>
        /// <param name="maxScale" type="Number" optional="false">The maximum scale for the layer. If the map is zoomed out beyond the specified scale the layer will not be visible. A value of 0 means the layer does not have a maximum scale.</param>
        /// <return type="none">none</return>
    },
    setEditable: function (editable) {
        /// <summary>Set the editability of feature layers created from a feature collection.</summary>
        /// <param name="editable" type="Boolean" optional="false">When true, the layer will be set as editable.</param>
        /// <return type="FeatureLayer">FeatureLayer</return>
    },
    getEditCapabilities: function (options) {
        /// <summary>Returns an object that describes the edit capabilities of the layer.</summary>
        /// <param name="options" type="Object" optional="true">If the layer supports ownership based access control, use the options to determine if the specified user can edit features. Ownership based access control requires ArcGIS Server services version 10.1 or greater.      &lt;Graphic&gt; feature    Check to see if the specified feature can be edited by the specified user.        &lt;String&gt; userId    The name of the currently logged in user. If the application uses the IdentityManager the IdentityManager supplies the layer with the userId so this parameter is not required.  </param>
        /// <return type="Object">Object</return>
    },
    getMaxAllowableOffset: function () {
        /// <summary>Returns the current value of the maxAllowableOffset used by the layer. For non-editable layers in on-demand mode if autoGeneralize is enabled the maxAllowableOffset is set to the current map resolution.</summary>
        /// <return type="Number">Number</return>
    },
    setAutoGeneralize: function (enable) {
        /// <summary>Enable or disable auto generalization for the layer. Note that auto generalization is only applicable to non-editable feature layers in on-demand mode.</summary>
        /// <param name="enable" type="Boolean" optional="false">When true, auto generalize is enabled. Default value for non-editable on-demand feature layers is true.</param>
        /// <return type="FeatureLayer">FeatureLayer</return>
    },
    setGDBVersion: function (versionName) {
        /// <summary>Set the layer's data source to the specified geodatabase version. If the versionName is null then the data source will be the published map's default version. Only applicable if the layer's data source is registered as versioned in SDE. Only valid with ArcGIS Server services version 10.1 or greater.</summary>
        /// <param name="versionName" type="String" optional="false">The name of the geodatabase version to use as the layer's data source.</param>
        /// <return type="FeatureLayer">FeatureLayer</return>
    },
    getEditSummary: function (feature,options) {
        /// <summary>Returns a localized summary of the last edit operation performed on the given feature, if available.</summary>
        /// <param name="feature" type="Feature" optional="false">The feature to get the edit summary for.</param>
        /// <param name="options" type="Object" optional="true">The options object may have the following properties:  &lt;String&gt; action  By default, the method returns a summary of the most recent edit performed on the feature. Use this option to override this behavior.          'creation' indicates creation summary is desired.      'edit' indicates edit summary is desired.        &lt;Function&gt; callback  If you want to customize or override certain components of the summary, provide a callback function using this option. For example:    featureLayer.getEditSummary(feature, {    callback: function(feature, info) {  if (info && info.userId) {    info.userId = "&lt;a href='http://users.my.org/profile/" + info.userId     + "'&gt;" + info.userId + "&lt;/a&gt;";  }    return info;  }});   </param>
        /// <return type="String">String</return>
    },
    getEditInfo: function (feature,options) {
        /// <summary>Returns an object describing the most recent edit operation performed on the given feature, if available.</summary>
        /// <param name="feature" type="Feature" optional="false">The feature to get the edit info for.</param>
        /// <param name="options" type="Object" optional="true">The options object may have the following properties:  &lt;String&gt; action  By default, the method returns a summary of the most recent edit performed on the feature. Use this option to override this behavior.          'creation' indicates creation summary is desired.      'edit' indicates edit summary is desired.      </param>
        /// <return type="Object or Undefined">Object or Undefined</return>
    },

};
esri.layers.FeatureType = function () {
    /// <summary>Class added v2.0.  A type defined by a feature layer.</summary>
    /// <field name="id" type="Number">The feature type identifier.</field>
    /// <field name="name" type="String">The feature type name.</field>
    /// <field name="domains" type="Object">Map of field names to domains. </field>
    /// <field name="templates" type="FeatureTemplate[]">Array of feature templates associated with this feature type.</field>
};
esri.layers.FeatureType.prototype =
{
    toJson: function () {
        /// <summary>Converts object to its ArcGIS Server JSON representation.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.layers.Field = function () {
    /// <summary>Class added v2.0. Information about each field in a layer.</summary>
    /// <field name="name" type="String">The name of the field.</field>
    /// <field name="type" type="String">The data type of the field.</field>
    /// <field name="alias" type="String">The alias name for the field.</field>
    /// <field name="domain" type="Domain">Domain associated with the field.</field>
    /// <field name="length" type="Number">The field length</field>
    /// <field name="editable" type="Boolean">Indicates whether the field is editable.</field>
    /// <field name="nullable" type="Boolean">Indicates if the field can accept null values.  Requires ArcGIS Server version 10.1 or greater.</field>
};
esri.layers.Field.prototype =
{

};
esri.layers.Domain = function () {
    /// <summary>Class added v2.0. Domains define constraints on a layer field. There are two types of domains, coded values and range domains.</summary>
    /// <field name="name" type="String">The domain  name.</field>
    /// <field name="type" type="String">The domain type. Valid values are "range" or "codedValue".</field>
};
esri.layers.Domain.prototype =
{
    toJson: function () {
        /// <summary>Converts object to its ArcGIS Server JSON representation.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.layers.RangeDomain = function () {
    /// <summary>Class added v2.0.  Information about the range of values belonging to the domain.  Range domains specify a valid range of values for a numeric attribute.</summary>
    /// <field name="minValue" type="Number">The minimum valid value.</field>
    /// <field name="maxValue" type="Number">The maximum valid value.</field>
};
esri.layers.RangeDomain.prototype =
{

};
esri.layers.CodedValueDomain = function () {
    /// <summary>Class added v2.0.  Information about the coded values belonging to the domain.  Coded value domains specify a set of valid values for an attribute.</summary>
    /// <field name="codedValues" type="Object[]">An array of the coded values in the domain.</field>
};
esri.layers.CodedValueDomain.prototype =
{

};
esri.layers.FeatureEditResult = function () {
    /// <summary>Class added v2.0.  The results of a feature edit such as add, update or delete.</summary>
    /// <field name="objectId" type="Number">Unique ID of the feature or object.</field>
    /// <field name="success" type="Boolean">If true the operation was successful.</field>
    /// <field name="error" type="Error">Information about  errors that occur if the edit operation failed.</field>
    /// <field name="attachmentId" type="Number">Unique ID of the attachment. Applicable only when adding or deleting feature attachments.</field>
};
esri.layers.FeatureEditResult.prototype =
{

};
esri.layers.TimeReference = function () {
    /// <summary>Class added v2.0. TimeReference contains information about how the time was measured.  Defines information about daylight savings time and the time zone in which the data was collected.</summary>
    /// <field name="respectsDaylightSaving" type="Boolean">Indicates whether the time reference respects daylight savings time.</field>
    /// <field name="timeZone" type="String">The time zone information associated with the time reference.</field>
};
esri.layers.TimeReference.prototype =
{

};
esri.layers.LayerTimeOptions = function () {
    /// <summary>Class added v2.0. Defines the time options for the layer.</summary>
    /// <field name="timeDataCumulative" type="Boolean">If true, the layer will draw all features from the beginning of the data's time extent.</field>
    /// <field name="timeOffset" type="Number">The length of time the data is offset from the time when the data was recorded. Specify the units using the timeOffsetUnits property.</field>
    /// <field name="timeOffsetUnits" type="String">Temporal unit in which the time offset is measured. See the TimeInfo Constants table for valid values.</field>
    /// <field name="useTime" type="Boolean">If true, the layer participates in time-related rendering and query operations.</field>
};
esri.layers.LayerTimeOptions.prototype =
{

};
esri.layers.TimeInfo = function () {
    /// <summary>Class added v2.0. Time information details.</summary>
    /// <field name="timeInterval" type="Number">Time interval of the data in the layer. Typically used for the TimeSlider when animating the layer.</field>
    /// <field name="timeIntervalUnits" type="String">Temporal unit in which the time interval is measured. See the Constants table for valid values.</field>
    /// <field name="startTimeField" type="String">The name of the attribute field that contains the start time information.</field>
    /// <field name="endTimeField" type="String">The name of the attribute field that contains the end time information.</field>
    /// <field name="timeExtent" type="TimeExtent">The time extent for all the data in the layer.</field>
    /// <field name="timeReference" type="TimeReference">Information about how the time was measured.</field>
    /// <field name="trackIdField" type="String">The field that contains the trackId.</field>
    /// <field name="exportOptions" type="LayerTimeOptions">Default time-related export options for the layer. When using a dynamic map service, these options can be overridden for sub-layers using the setLayerTimeOptions method.</field>
};
esri.layers.TimeInfo.prototype =
{

};
esri.layers.FeatureTemplate = function () {
    /// <summary>Class added v2.0.  Feature templates define the information required to create a new feature.</summary>
    /// <field name="name" type="String">The templates name.</field>
    /// <field name="description" type="String">The description of the template.</field>
    /// <field name="prototype" type="Graphic">An instance of the prototypical feature described by the template. It specifies default values for the attribute fields and does not contain geometry.</field>
    /// <field name="drawingTool" type="String">The default drawing tool defined for the template. See the constants table for a list of valid values.</field>
};
esri.layers.FeatureTemplate.prototype =
{
    toJson: function () {
        /// <summary>Converts object to its ArcGIS Server JSON representation.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.layers.MosaicRule = function () {
    /// <summary>Creates a new MosaicRule object</summary>
    /// <field name="method" type="String">The mosaic method determines how the selected rasters are ordered. View the esri.layers.MosaicRule constants for valid values.</field>
    /// <field name="where" type="String">The where clause determines which rasters will participate in the mosaic. This property applies to all mosaic methods.</field>
    /// <field name="sortField" type="String">The name of the attribute field that is used together with a constant sortValue to define the mosaicking order when the mosaic method is set to METHOD_ATTRIBUTE.</field>
    /// <field name="sortValue" type="String">A constant value defining a reference or base value for the sort field when the mosaic method is set to METHOD_ATTRIBUTE.</field>
    /// <field name="ascending" type="Boolean">Indicates whether the sort should be ascending or not.</field>
    /// <field name="lockRasterIds" type="Number[]">An array of raster Ids.  All the rasters with the given list of raster Ids are selected to participate in the mosaic. The rasters will be visible at all pixel sizes regardless of the minimum and maximum pixel size range of the locked rasters.</field>
    /// <field name="viewpoint" type="Point">Defines the viewpoint location on which the ordering is defined based on the distance from the viewpoint and the nadir of rasters.</field>
    /// <field name="objectIds" type="Number[]">Defines a selection using a set of ObjectIds. This property applies to all mosaic methods.</field>
    /// <field name="operation" type="String">Defines the mosaic operation used to resolve overlapping pixels. See the constants for a list of valid values.</field>
};
esri.layers.MosaicRule.prototype =
{
    toJson: function () {
        /// <summary>Returns an easily serializable object representation of the mosaic rule.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.layers.RasterFunction = function () {
    /// <summary>Creates a new RasterFunction object.</summary>
    /// <field name="functionName" type="String">The raster function name. View the Raster Functions documentation in the REST help for more details.</field>
    /// <field name="arguments" type="Object">Specify the input arguments to the raster function, e.g. clipping geometry for the ClipFunction.</field>
    /// <field name="variableName" type="String">Variable name for the raster function.</field>
};
esri.layers.RasterFunction.prototype =
{
    toJson: function () {
        /// <summary>Returns an easily serializable object representation of the raster function.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.layers.InheritedDomain = function () {
    /// <summary>Class added v2.0.Subclass of esri.layers.Domain. This class does not add any new properties or methods.See also:FeatureType</summary>
};
esri.layers.InheritedDomain.prototype =
{

};
esri.layers.OpenStreetMapLayer = function (options) {
    /// <summary>Creates a new OpenStreetMapLayer object.</summary>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  See options list.&#10;
    /// Number[] displayLevels&#10;
    /// String id&#10;
    /// Number opacity&#10;
    /// String[] tileServers&#10;
    /// Boolean visible</param>
};
esri.layers.OpenStreetMapLayer.prototype =
{

};
esri.layers.WMSLayer = function (url,options) {
    /// <summary>Creates a new WMSLayer object.</summary>
    /// <param name="url" type="String" optional="false">URL to the OGC Web Map Service. An example is http://sampleserver1.arcgisonline.com/ArcGIS/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer/WMSServer.</param>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  See options list.&#10;
    /// String format&#10;
    /// Boolean transparent&#10;
    /// String[] visibleLayers&#10;
    /// Object resourceInfo</param>
    /// <field name="version" type="String">Version of the WMS service. Supported versions are: 1.1.0,1.1.1 and 1.3.0.</field>
    /// <field name="title" type="String">Title of the WMS service.</field>
    /// <field name="copyright" type="String">Copyright of the WMS service. This is the value of the AccessConstraints capabilities property.</field>
    /// <field name="description" type="String">Description of the WMS service. This is the value of the Abstract capabilities property.</field>
    /// <field name="maxWidth" type="Number">Maximum width in pixels the WMS service supports.</field>
    /// <field name="maxHeight" type="Number">Maximum height in pixels the WMS service supports.</field>
    /// <field name="layerInfos" type="WMSLayerInfo[]">List of layers in the WMS service.</field>
    /// <field name="extent" type="Extent">Extent of the WMS service.</field>
    /// <field name="spatialReference" type="SpatialReference">Spatial reference of the WMS service.</field>
    /// <field name="getMapUrl" type="String">The URL for the WMS GetMap call.</field>
    /// <field name="imageFormat" type="String">The map image format.</field>
};
esri.layers.WMSLayer.prototype =
{
    setVisibleLayers: function (layers) {
        /// <summary>Specify a list of layer names to updates the visible layers.</summary>
        /// <param name="layers" type="String[]" optional="false">An array of layer ids.</param>
        /// <return type="none">none</return>
    },
    setImageFormat: function (format) {
        /// <summary>Set the map image format, valid values are "png","jpg","pdf","bmp","gif" and "svg".</summary>
        /// <param name="format" type="String" optional="false">The image format.</param>
        /// <return type="none">none</return>
    },
    setImageTransparency: function (transparency) {
        /// <summary>Specify whether the background image is transparent. Only valid if the WMS service supports transparency.</summary>
        /// <param name="transparency" type="Boolean" optional="false">When true the background image is transparent.</param>
        /// <return type="none">none</return>
    },

};
esri.layers.WMSLayerInfo = function (layer) {
    /// <summary>Creates a new WMSLayerInfo object.</summary>
    /// <param name="layer" type="Object" optional="false">WMSLayerInfo layer object An object with the following properties, title is required the rest of the properties are optional.  {    &lt;String> name,    &lt;String> title,    &lt;String> description,    &lt;esri.Geometry.Extent> extent  }</param>
    /// <field name="name" type="String">The layer  name. The layer name must be included in the visibleLayers list.</field>
    /// <field name="title" type="String">The layer title.</field>
    /// <field name="description" type="String">The layer description defines the value of the Abstract capabilities property.</field>
    /// <field name="extent" type="Extent">The layer extent.</field>
};
esri.layers.WMSLayerInfo.prototype =
{

};
esri.layers.WMTSLayer = function (url,options) {
    /// <summary>Creates a new WMTSLayer object.</summary>
    /// <param name="url" type="String" optional="false">The url for the WMTS endpoint.</param>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  See options list.&#10;
    /// String serviceMode&#10;
    /// Object resourceInfo&#10;
    /// WMTSLayerInfo layerInfo</param>
    /// <field name="version" type="String">Version of the WMTS service.</field>
    /// <field name="title" type="String">Title of the WMTS service.</field>
    /// <field name="format" type="String">The tile format.</field>
    /// <field name="fullExtent" type="Extent">The full extent of the active layer.</field>
    /// <field name="initialExtent" type="Extent">The initial extent of the active layer.</field>
    /// <field name="description" type="String">The description of the active layer if specified in the capabilties file or the resource info.</field>
    /// <field name="tileInfo" type="Object">The tile info for the active layer.</field>
    /// <field name="copyright" type="String">Copyright information for the service. This information is only available if specified in the capabilities file or the resource info object.</field>
    /// <field name="layerInfos" type="Object[]">An array of WMTSLayerInfo objects.</field>
    /// <field name="serviceMode" type="String">The service mode for the WMTS layer. Known Values: KVP | RESTful</field>
    /// <field name="spatialReference" type="SpatialReference">The spatial reference for the WMTS service.</field>
};
esri.layers.WMTSLayer.prototype =
{
    setActiveLayer: function (WMTSLayerInfo) {
        /// <summary>Set the active layer for the WMTS service. The layer must be in the same spatial reference as the current active layer.</summary>
        /// <param name="WMTSLayerInfo" type="WMTSLayerInfo" optional="false">The WMTSLayerInfo for the layer to make active.</param>
        /// <return type="none">none</return>
    },

};
esri.layers.WMTSLayerInfo = function (options) {
    /// <summary>Creates a new WMTSLayerInfo object.</summary>
    /// <param name="options" type="Object" optional="false">An object that defines the layer info options. View the options list for the properties.</param>
};
esri.layers.WMTSLayerInfo.prototype =
{

};
esri.layers.KMLLayer = function (url,options) {
    /// <summary>Creates a new KMLLayer object.</summary>
    /// <param name="url" type="String" optional="false">The url for a .kml or .kmz file.</param>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  See options list. View the  Layer object for additional options.&#10;
    /// SpatialReference outSR</param>
    /// <field name="featureInfos" type="Object[]">An array of objects that describe top-level KML features ids and their types.</field>
    /// <field name="folders" type="KMLFolder[]">An array of KMLFolder objects that describe the folders and nested folders defined in the KML file. Use the parentFolderId and subFolderIds to identify the hierarchical relationship between folders.</field>
    /// <field name="linkInfo" type="Object">A link info object with properties that describe the network link.</field>
};
esri.layers.KMLLayer.prototype =
{
    getFeature: function (featureInfo) {
        /// <summary>Get the KML feature identified by the input feature info. The table below lists the type of objects returned for the KML feature types.KML &lt;Feature&gt;Class name of returned objectPlacemarkGraphicGroundOverlayKMLGroundOverlayScreenOverlayKMLScreenOverlay (Not Implemented)NetworkLinkKMLLayerFolderKMLFolder</summary>
        /// <param name="featureInfo" type="Object" optional="false">Feature info for the kml feature.</param>
        /// <return type="Object">Object</return>
    },
    getLayers: function () {
        /// <summary>Get an array of map layers that were created to draw placemarks, ground and screen overlays. The returned array can have instances of the following layer types: FeatureLayer, MapImageLayer or KMLLayer . This method can be used to override the renderer for feature layers.</summary>
        /// <return type="Layer[]">Layer[]</return>
    },
    setFolderVisibility: function (folder,trueOrFalse) {
        /// <summary>Set the visibility for the specified folder.</summary>
        /// <param name="folder" type="KMLFolder" optional="false">A KML folder.</param>
        /// <param name="true" type="Boolean" optional="false">The visibility of the folder and all kml features within the folder.</param>
        /// <return type="none">none</return>
    },

};
esri.layers.KMLFolder = function () {
    /// <summary>Class added v2.4dojo.require("esri.layers.KMLLayer"); Defines information about a KML folder. The KML folder is a hierarchical structure used to arrange features (Folders, Placemarks, Overlays or Network Links).KMLFolder has no constructor.</summary>
    /// <field name="id" type="Number">The KML folder id.</field>
    /// <field name="name" type="String">The KML folder name.</field>
    /// <field name="description" type="String">The KML folder description.</field>
    /// <field name="snippet" type="String">The KML folder snippet.</field>
    /// <field name="visibility" type="Number">The visibility of the KML folder. When 0 the folder is not visible.</field>
    /// <field name="parentFolderId" type="Number">The id of the parent folder.</field>
    /// <field name="subFolderIds" type="Number[]">An array of ids for the KML folder's subfolders.</field>
    /// <field name="featureInfos" type="Object[]">An array of objects that describe top-level KML features ids and their types.  Objects in the array have the following properties:  {    "type":&lt;Number&gt;,    "id": &lt;Number&gt;  }The type can be one of the following:Folder, GroundOverlay, Line, NetworkLink,Point, Polygon, ScreenOverlay.</field>
};
esri.layers.KMLFolder.prototype =
{

};
esri.layers.MapImageLayer = function (options) {
    /// <summary>Creates a new MapImageLayer object</summary>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  View the Layer object for the list of parameters.</param>
};
esri.layers.MapImageLayer.prototype =
{
    addImage: function (mapImage) {
        /// <summary>Add an image to the map. The Map Image extent should have the same coordinate system as the map and be within the map's extent.</summary>
        /// <param name="mapImage" type="MapImage" optional="false">A MapImage object that defines the image to add to the map.</param>
        /// <return type="none">none</return>
    },
    getImages: function () {
        /// <summary>Get an array of MapImage objects that define the images in the MapImageLayer.</summary>
        /// <return type="MapImage[]">MapImage[]</return>
    },
    removeImage: function (mapImage) {
        /// <summary>Remove the specified image from the layer.</summary>
        /// <param name="mapImage" type="MapImage" optional="false">The MapImage object that defines the image to remove.</param>
        /// <return type="none">none</return>
    },
    removeAllImages: function () {
        /// <summary>Remove all images from the layer.</summary>
        /// <return type="none">none</return>
    },

};
esri.layers.KMLGroundOverlay = function () {
    /// <summary>Class added v2.4dojo.require("esri.layers.KMLLayer");The KMLGroundOverlay class provides details about a KML ground overlay.</summary>
    /// <field name="id" type="Number">The id of the KML ground overlay.</field>
    /// <field name="name" type="String">The name of the KML ground overlay.</field>
    /// <field name="description" type="String">KML ground overlay description.</field>
    /// <field name="Snippet" type="String">Short snippet describing the KML ground overlay.</field>
    /// <field name="visibility" type="Number">The KML ground overlay visibility. A value of 0 means the layer is not visible.</field>
    /// <field name="extent" type="Extent">Extent of image.</field>
    /// <field name="height" type="Number">Requested image height in pixels.</field>
    /// <field name="href" type="String">URL to returned image.</field>
    /// <field name="scale" type="Number">Scale of requested dynamic map.</field>
    /// <field name="width" type="Number">Requested image width in pixels.</field>
};
esri.layers.KMLGroundOverlay.prototype =
{

};
esri.layers.DynamicLayerInfo = function (json) {
    /// <summary>Creates a new DynamicLayerInfo object.</summary>
    /// <param name="json" type="Object" optional="true">Optional. JSON object representing the DynamicLayerInfo.       var dynamicLayerInfo = new esri.layers.DynamicLayerInfo({	"defaultVisibility":true,	"id":0,"maxScale":1000000,	"minScale":0,	"parentLayerId":-1});</param>
    /// <field name="id" type="Number">Layer ID assigned by ArcGIS Server for a layer.  The topmost layer is 0, and each layer follows sequentially.  If a layer is added or removed from the source map document, the ID values will shift accordingly.</field>
    /// <field name="name" type="String">Layer name as defined in the  map service.</field>
    /// <field name="parentLayerId" type="Number">If the layer is part of a group layer, it will include the parent ID of the group layer. Otherwise, the value is -1.  If a layer is added or removed from the source map document, the ID values will shift accordingly.</field>
    /// <field name="defaultVisibility" type="Boolean">Default visibility of the layers in the map service.</field>
    /// <field name="subLayerIds" type="Number[]">If the layer is a parent layer, it will have one or more sub layers included in an array.  Otherwise, the value is null.  If a layer is added or removed from the source map document, the ID values will shift accordingly.</field>
    /// <field name="minScale" type="Number">The minimum visible scale for each layer in the map service. If the map is zoomed out beyond this scale the layer will not be visible.  A value of 0 means that the layer does not have a minimum scale. This property is only available for map services published using ArcGIS Server 10 SP1 or later.</field>
    /// <field name="maxScale" type="Number">The maximum visible scale for each layer in the map service. If the map is zoomed in beyond this scale the layer will not be visible.  A value of 0 means that the layer does not have a maximum scale. This property is only available for map services published using ArcGIS Server 10 SP1 or later.</field>
    /// <field name="source" type="LayerMapSource or LayerDataSource">The source for the dynamic layer can be either a LayerMapSource or LayerDataSource. Requires ArcGIS Server 10.1 service.</field>
};
esri.layers.DynamicLayerInfo.prototype =
{
    toJson: function () {
        /// <summary>Converts object to its ArcGIS Server JSON representation.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.layers.LayerMapSource = function (json) {
    /// <summary>Creates a new LayerMapSource object.</summary>
    /// <param name="json" type="Object" optional="true">Optional. JSON object representing the LayerMapSource.</param>
    /// <field name="mapLayerId" type="Number">The layer id for a sub-layer in the current map service.</field>
    /// <field name="gdbVersion" type="String">When supported, specify the version in an SDE workspace that the layer will use.</field>
};
esri.layers.LayerMapSource.prototype =
{
    toJson: function () {
        /// <summary>Converts object to its ArcGIS Server JSON representation.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.layers.LayerDataSource = function (json) {
    /// <summary>Creates a new LayerDataSource object.</summary>
    /// <param name="json" type="Object" optional="true">Optional. JSON object representing the LayerDataSource.</param>
    /// <field name="dataSource" type="Object">The data source used to create the a dynamic data layer on the fly.</field>
};
esri.layers.LayerDataSource.prototype =
{
    toJson: function () {
        /// <summary>Converts object to its ArcGIS Server JSON representation.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.layers.TableDataSource = function (json) {
    /// <summary>Creates a new TableDataSource object.</summary>
    /// <param name="json" type="Object" optional="true">Optional. JSON object representing the TableDataSource.</param>
    /// <field name="workspaceId" type="String">The workspace id for the registered file geodatabase, SDE or Shapefile workspace.</field>
    /// <field name="dataSourceName" type="String">The name of a table, feature class or raster that resides in the registered workspace.</field>
    /// <field name="gdbVersion" type="String">For versioned SDE workspaces, use this property to point to an alternate version. If a gdbVersion is not provided then the version specified when the SDE workspace was registered will be used.</field>
};
esri.layers.TableDataSource.prototype =
{
    toJson: function () {
        /// <summary>Converts object to its ArcGIS Server JSON representation.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.layers.QueryDataSource = function (json) {
    /// <summary>Creates a new QueryDataSource object.</summary>
    /// <param name="json" type="Object" optional="true">Optional. JSON object representing the QueryDataSource.</param>
    /// <field name="workspaceId" type="String">The workspace id for the registered file geodatabase, SDE or Shapefile workspace.</field>
    /// <field name="query" type="String">The SQL query string that defines the data source output.</field>
    /// <field name="oidFields" type="String[]">An array of field names that define a unique identifier for the feature.</field>
    /// <field name="geometryType" type="String">The geometry type of the data source. Required if the specified data source has a geometry column. Known Values: 'point' | 'multipoint' | 'line' | 'polygon'</field>
    /// <field name="spatialReference" type="SpatialReference">The spatial reference for the data source. Required if the specified data source has a geometry column.</field>
};
esri.layers.QueryDataSource.prototype =
{
    toJson: function () {
        /// <summary>Converts object to its ArcGIS Server JSON representation.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.layers.JoinDataSource = function (json) {
    /// <summary>Creates a new JoinDataSource object.</summary>
    /// <param name="json" type="Object" optional="true">Optional. JSON object representing the JoinDataSource.</param>
    /// <field name="leftTableSource" type="LayerMapSource or LayerDataSource">The data source to be used as the left table for the join operation. Determines the output join table type. If the leftTableSource is a table then the output is a table. If the leftDataSource is a layer then the resulting join table is a layer.</field>
    /// <field name="rightTableSource" type="LayerMapSource or LayerDataSource">The data source to be used as the right table for the join operation.</field>
    /// <field name="leftTableKey" type="String">The key field used for the left table source for the join.</field>
    /// <field name="rightTableKey" type="String">The key field used for the right table source for the join.</field>
    /// <field name="joinType" type="String">The type of join that will be performed. Known Values: left-outer | left-inner</field>
};
esri.layers.JoinDataSource.prototype =
{
    toJson: function () {
        /// <summary>Converts object to its ArcGIS Server JSON representation.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.layers.RasterDataSource = function (json) {
    /// <summary>Creates a new RasterDataSource object.</summary>
    /// <param name="json" type="Object" optional="true">Optional. JSON object representing the RasterDataSource.</param>
    /// <field name="workspaceId" type="String">The workspace id for the registered raster workspace.</field>
    /// <field name="dataSourceName" type="String">The name of a raster that resides in the registered workspace.</field>
};
esri.layers.RasterDataSource.prototype =
{
    toJson: function () {
        /// <summary>Converts object to its ArcGIS Server JSON representation.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.layers.LayerDrawingOptions = function (json) {
    /// <summary>Creates a new LayerDrawingOptions object.</summary>
    /// <param name="json" type="Object" optional="true">Optional. JSON object representing the LayerDrawingOptions.</param>
    /// <field name="renderer" type="Renderer">The renderer to use for the dynamic layer.</field>
    /// <field name="transparency" type="Number">The transparency of the layer. Values range from 0 to 1.0 where 0 is 100% transparent and 1 has no transparency.</field>
    /// <field name="scaleSymbols" type="Boolean">Determines if the layer renders the symbols based on scale. When false the layer does not render the symbols based on scale.</field>
    /// <field name="showLabels" type="Boolean">Determines if labels are displayed. When false, labels for the layer are not displayed.</field>
};
esri.layers.LayerDrawingOptions.prototype =
{
    toJson: function () {
        /// <summary>Converts object to its ArcGIS Server JSON representation.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.geometry = function () {
    /// <summary>The esri.geometry namespace has several utility methods associated with it.  These methods are convenience methods that are not associated with any class.At version 2.2, utility methods were added to calculate the length and area on the client without having to use the geometry service. The algorithm used to calculate the geodesic area is unable to work with self-intersecting polygons. The esri.geometry.polygonSelfIntersecting method was added to provide a way to determine if the polygon is self-intersecting. If the polygon is self-intersecting call the geometry service simplify method before calculating the geodesic area.  </summary>
};
esri.geometry.getJsonType = function (geometry) {
    /// <summary>Requests the geometry type name as represented in the ArcGIS REST.</summary>
    /// <param name="geometry" type="Geometry" optional="false">The ArcGIS JavaScript API geometry type to be converted.</param>
    /// <return type="String">String</return>
};
esri.geometry.isClockwise = function (ring) {
    /// <summary>Checks if a Polygon ring is clockwise.  Returns true for clockwise and false for counterclockwise.</summary>
    /// <param name="ring" type="Ring" optional="false">A polygon ring.</param>
    /// <return type="Boolean">Boolean</return>
};
esri.geometry.toScreenPoint = function (extent,width,height,mapPoint) {
    /// <summary>Converts and returns the argument map point in screen coordinates.  Deprecated at v1.1.  Use toScreenGeometry instead.</summary>
    /// <param name="extent" type="Extent" optional="false">The current extent of the map in map coordinates.</param>
    /// <param name="width" type="Number" optional="false">The current width of the map in screen units.</param>
    /// <param name="height" type="Number" optional="false">The current width of the map in screen units.</param>
    /// <param name="mapPoint" type="Point" optional="false">The point to convert from map to screen units.</param>
    /// <return type="Point">Point</return>
};
esri.geometry.toMapPoint = function (extent,width,height,screenPoint) {
    /// <summary>Converts and returns the argument screen point in map coordinates.  Deprecated at v1.1.  Use toMapGeometry instead.</summary>
    /// <param name="extent" type="Extent" optional="false">The current extent of the map in map coordinates.</param>
    /// <param name="width" type="Number" optional="false">The current width of the map in screen units.</param>
    /// <param name="height" type="Number" optional="false">The current width of the map in screen units.</param>
    /// <param name="screenPoint" type="Point" optional="false">The point to convert from screen to map units.</param>
    /// <return type="Point">Point</return>
};
esri.geometry.getLength = function (point1,point2) {
    /// <summary>Calculates the length of a line based on the input of two points.</summary>
    /// <param name="point1" type="Point" optional="false">The beginning point.</param>
    /// <param name="point2" type="Point" optional="false">The ending point.</param>
    /// <return type="Number">Number</return>
};
esri.geometry.getLineIntersection = function (line1start,line1end,line2start,line2end) {
    /// <summary>Calculates the intersecting point of two lines.  If the lines are parallel, a null value is returned.</summary>
    /// <param name="line1start" type="Point" optional="false">The beginning point of the first line.</param>
    /// <param name="line1end" type="Point" optional="false">The ending point of the first line.</param>
    /// <param name="line2start" type="Point" optional="false">The beginning point of the second line.</param>
    /// <param name="line2end" type="Point" optional="false">The ending point of the second line.</param>
    /// <return type="Point">Point</return>
};
esri.geometry.fromJson = function (json) {
    /// <summary>Converts the input JSON object to the appropriate esri.geometry.* object.</summary>
    /// <param name="json" type="Object" optional="false">The JSON object.</param>
    /// <return type="Object">Object</return>
};
esri.geometry.toScreenGeometry = function (extent,width,height,screenGeometry) {
    /// <summary>Converts the geometry argument to screen coordinates based on the extent, width, and height of the Map.</summary>
    /// <param name="extent" type="Extent" optional="false">The current extent of the map in map coordinates.</param>
    /// <param name="width" type="Number" optional="false">The current width of the map in screen units.</param>
    /// <param name="height" type="Number" optional="false">The current width of the map in screen units.</param>
    /// <param name="screenGeometry" type="Geometry" optional="false">The geometry to convert from map to screen units.</param>
    /// <return type="Geometry">Geometry</return>
};
esri.geometry.toMapGeometry = function (extent,width,height,mapGeometry) {
    /// <summary>Converts the geometry argument to map coordinates based on the extent, width, and height of the Map.</summary>
    /// <param name="extent" type="Extent" optional="false">The current extent of the map in map coordinates.</param>
    /// <param name="width" type="Number" optional="false">The current width of the map in map units.</param>
    /// <param name="height" type="Number" optional="false">The current width of the map in map units.</param>
    /// <param name="mapGeometry" type="Geometry" optional="false">The geometry to convert from screen to map units.</param>
    /// <return type="Geometry">Geometry</return>
};
esri.geometry.geographicToWebMercator = function (geometry) {
    /// <summary>Converts geometry from geographic units to Web Mercator units.</summary>
    /// <param name="geometry" type="Geometry" optional="false">The geometry to convert.</param>
    /// <return type="Geometry">Geometry</return>
};
esri.geometry.webMercatorToGeographic = function (geometry) {
    /// <summary>Converts geometry from Web Mercator units to geographic units.</summary>
    /// <param name="geometry" type="Geometry" optional="false">The geometry to convert.</param>
    /// <return type="Geometry">Geometry</return>
};
esri.geometry.getScale = function (map) {
    /// <summary>Gets the current scale of the map.</summary>
    /// <param name="map" type="Map" optional="false">The map whose scale should be calculated.</param>
    /// <return type="Number">Number</return>
};
esri.geometry.getExtentForScale = function (map,scale) {
    /// <summary>Get the extent for the specified scale.</summary>
    /// <param name="map" type="Map" optional="false">The input map.</param>
    /// <param name="scale" type="Number" optional="false">The input scale.</param>
    /// <return type="Extent">Extent</return>
};
esri.geometry.geodesicLengths = function (polylines,lengthUnit) {
    /// <summary>Determine the length for the input polylines using the specified length unit. The input polylines must be in a geographic coordinate system.</summary>
    /// <param name="polylines" type="Polyline[]" optional="false">An array of polylines.</param>
    /// <param name="lengthUnit" type="esri.Units" optional="false">The length unit, view the esri.Units constants for valid values.</param>
    /// <return type="Number[]">Number[]</return>
};
esri.geometry.geodesicAreas = function (polygons,areaUnit) {
    /// <summary>Determine the area for the input polygons. The input polygons must be in a geographic coordinate system.</summary>
    /// <param name="polygons" type="Polygon[]" optional="false">An array of polygons.</param>
    /// <param name="areaUnit" type="esri.Units" optional="false">The area unit, view the esri.Units constants for valid values.</param>
    /// <return type="Number[]">Number[]</return>
};
esri.geometry.polygonSelfIntersecting = function (polygon) {
    /// <summary>When true, the polygon is self-intersecting which means that the ring of the polygon crosses itself. Also checks to see if polygon rings cross each other.</summary>
    /// <param name="polygon" type="Polygon" optional="false">The polygon to test for self-intersection.</param>
    /// <return type="Boolean">Boolean</return>
};
esri.geometry.geodesicDensify = function (geometry,maxSegmentLength) {
    /// <summary>Returns a densified geometry.</summary>
    /// <param name="geometry" type="Geometry" optional="false">A polyline or polygon to densify.</param>
    /// <param name="maxSegmentLength" type="Number" optional="false">The maximum segment length in meters.</param>
    /// <return type="Geometry">Geometry</return>
};
esri.geometry.normalizeCentralMeridian = function (geometries,geometryService,callback,errback) {
    /// <summary>Normalizes  geometries that intersect the central meridian or fall outside the world extent so they stay within the current coordinate system. Only supported for Web Mercator and geographic coordinates.</summary>
    /// <param name="geometries" type="Geometry[]" optional="false">An array of geometries to normalize.</param>
    /// <param name="geometryService" type="GeometryService" optional="false">Specify a valid geometry service. If you've specified a geometry service using  esri.config.defaults.geometryService this service will be used by the function.</param>
    /// <param name="callback" type="Function" optional="false">The function to call when the method has completed. The callback returns an array of normalized geometries.</param>
    /// <param name="errback" type="Function" optional="false">An error object is returned, if an error occurs on the Server during task execution.</param>
    /// <return type="dojo.Deferred">dojo.Deferred</return>
};

esri.geometry.Geometry = function () {
    /// <summary>dojo.require("esri.geometry");The base class for geometry objects.  This class has no constructor.</summary>
    /// <field name="spatialReference" type="SpatialReference">The spatial reference of the geometry.  See Projected Coordinate Systems and Geographic Coordinate Systems for the list of supported spatial references.</field>
    /// <field name="type" type="String">The type of geometry. Known Values: point | multipoint | polyline | polygon | extent</field>
};
esri.geometry.Geometry.prototype =
{
    toJson: function () {
        /// <summary>Converts object to its ArcGIS Server JSON representation.</summary>
        /// <return type="Object">Object</return>
    },
    setSpatialReference: function (sr) {
        /// <summary>Sets the spatial reference.  The return value of Geometry was added at v1.4.</summary>
        /// <param name="sr" type="SpatialReference" optional="false">Spatial reference of the geometry.</param>
        /// <return type="Geometry">Geometry</return>
    },

};
esri.geometry.Point = function (x,y,spatialReference,xyCoord,spatialReference,json) {
    /// <summary>Creates a new Point object using x, y, and a spatial reference.</summary>
    /// <param name="x" type="Number" optional="false">X-coordinate of a point in map units.</param>
    /// <param name="y" type="Number" optional="false">Y-coordinate of a point in map units.</param>
    /// <param name="spatialReference" type="SpatialReference" optional="false">Spatial reference of the geometry.</param>
    /// <param name="xyCoord" type="Array" optional="false">An array that includes an x,y coordinate.</param>
    /// <param name="spatialReference" type="SpatialReference" optional="false">Spatial reference of the geometry.</param>
    /// <param name="json" type="Object" optional="false">A JSON object that contains an x,y coordinate.</param> = function (x,y,spatialReference,xyCoord,spatialReference,json) {
    /// <summary>Creates a new Point object using an array containing an x,y coordinate value and a spatial reference.</summary>
    /// <param name="x" type="Number" optional="false">X-coordinate of a point in map units.</param>
    /// <param name="y" type="Number" optional="false">Y-coordinate of a point in map units.</param>
    /// <param name="spatialReference" type="SpatialReference" optional="false">Spatial reference of the geometry.</param>
    /// <param name="xyCoord" type="Array" optional="false">An array that includes an x,y coordinate.</param>
    /// <param name="spatialReference" type="SpatialReference" optional="false">Spatial reference of the geometry.</param>
    /// <param name="json" type="Object" optional="false">A JSON object that contains an x,y coordinate.</param> = function (x,y,spatialReference,xyCoord,spatialReference,json) {
    /// <summary>Creates a new Point object using a JSON object.</summary>
    /// <param name="x" type="Number" optional="false">X-coordinate of a point in map units.</param>
    /// <param name="y" type="Number" optional="false">Y-coordinate of a point in map units.</param>
    /// <param name="spatialReference" type="SpatialReference" optional="false">Spatial reference of the geometry.</param>
    /// <param name="xyCoord" type="Array" optional="false">An array that includes an x,y coordinate.</param>
    /// <param name="spatialReference" type="SpatialReference" optional="false">Spatial reference of the geometry.</param>
    /// <param name="json" type="Object" optional="false">A JSON object that contains an x,y coordinate.</param>
    /// <field name="x" type="Number">X-coordinate of a point in map units.</field>
    /// <field name="y" type="Number">Y-coordinate of a point in map units.</field>
};
esri.geometry.Point.prototype =
{
    offset: function (dx,dy) {
        /// <summary>Offsets the point in an x and y direction.  Units are map units.</summary>
        /// <param name="dx" type="Number" optional="false">Value for x-coordinate of point.</param>
        /// <param name="dy" type="Number" optional="false">Value for y-coordinate of point.</param>
        /// <return type="Point">Point</return>
    },
    setX: function (x) {
        /// <summary>Sets x-coordinate of point.  The return value of Point was added at v1.4.</summary>
        /// <param name="x" type="Number" optional="false">Value for x-coordinate of point.</param>
        /// <return type="Point">Point</return>
    },
    setY: function (y) {
        /// <summary>Sets y-coordinate of point.  The return value of Point was added at v1.4.</summary>
        /// <param name="y" type="Number" optional="false">Value for y-coordinate of point.</param>
        /// <return type="Point">Point</return>
    },
    update: function (x,y) {
        /// <summary>Updates a point.</summary>
        /// <param name="x" type="Number" optional="false">X-coordinate of the updated point.</param>
        /// <param name="y" type="Number" optional="false">Y-coordinate of the updated point.</param>
        /// <return type="Point">Point</return>
    },

};
esri.geometry.Extent = function (xmin,ymin,xmax,ymax,spatialReference,json) {
    /// <summary>Creates a new Extent object.  The coordinates represent the lower left and upper right corners of the bounding box.  A spatial reference is also required.</summary>
    /// <param name="xmin" type="Number" optional="false">Bottom-left X-coordinate of an extent envelope.</param>
    /// <param name="ymin" type="Number" optional="false">Bottom-left Y-coordinate of an extent envelope.</param>
    /// <param name="xmax" type="Number" optional="false">Top-right X-coordinate of an extent envelope.</param>
    /// <param name="ymax" type="Number" optional="false">Top-right Y-coordinate of an extent envelope.</param>
    /// <param name="spatialReference" type="SpatialReference" optional="false">Spatial reference of the geometry.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the geometry.</param> = function (xmin,ymin,xmax,ymax,spatialReference,json) {
    /// <summary>Creates a new Extent object using a JSON object.</summary>
    /// <param name="xmin" type="Number" optional="false">Bottom-left X-coordinate of an extent envelope.</param>
    /// <param name="ymin" type="Number" optional="false">Bottom-left Y-coordinate of an extent envelope.</param>
    /// <param name="xmax" type="Number" optional="false">Top-right X-coordinate of an extent envelope.</param>
    /// <param name="ymax" type="Number" optional="false">Top-right Y-coordinate of an extent envelope.</param>
    /// <param name="spatialReference" type="SpatialReference" optional="false">Spatial reference of the geometry.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the geometry.</param>
    /// <field name="xmax" type="Number">Top-right X-coordinate of an extent envelope.</field>
    /// <field name="xmin" type="Number">Bottom-left X-coordinate of an extent envelope.</field>
    /// <field name="ymax" type="Number">Top-right Y-coordinate of an extent envelope.</field>
    /// <field name="ymin" type="Number">Bottom-left Y-coordinate of an extent envelope.</field>
};
esri.geometry.Extent.prototype =
{
    getCenter: function () {
        /// <summary>Returns the center point of the extent in map units.</summary>
        /// <return type="Point">Point</return>
    },
    getHeight: function () {
        /// <summary>Distance between ymin and ymax.</summary>
        /// <return type="Number">Number</return>
    },
    getWidth: function () {
        /// <summary>Distance between xmin and xmax.</summary>
        /// <return type="Number">Number</return>
    },
    offset: function (dx,dy) {
        /// <summary>Offsets the current extent.  Units are map units.</summary>
        /// <param name="dx" type="Number" optional="false">The offset distance in map units for the y-coordinate.</param>
        /// <param name="dy" type="Number" optional="false">The offset distance in map units for the x-coordinate.</param>
        /// <return type="Extent">Extent</return>
    },
    centerAt: function (point) {
        /// <summary>A new extent is returned with the same width and height centered at the argument point.</summary>
        /// <param name="point" type="Point" optional="false">Centers the extent on the specified x,y location.</param>
        /// <return type="Extent">Extent</return>
    },
    expand: function (factor) {
        /// <summary>Expands the extent by the factor given.  For example, a value of 1.5 will be 50% bigger.</summary>
        /// <param name="factor" type="Number" optional="false">The multiplier value.</param>
        /// <return type="Extent">Extent</return>
    },
    intersects: function (geometry) {
        /// <summary>Returns the interesection extent if the input geometry intersects this extent.</summary>
        /// <param name="geometry" type="Geometry" optional="false">The geometry used to test the intersection.  Valid geometry includes Point, Multipoint, Extent, Polygon, or Polyline.Prior to version 2.0, the first parameter was 											&lt;Extent> extent									Required										The minx, miny, maxx, and maxy bounding box.  								</param>
        /// <return type="Extent">Extent</return>
    },
    contains: function (geometry) {
        /// <summary>When "true", the geometry in the argument is contained in this extent.</summary>
        /// <param name="geometry" type="Geometry" optional="false">Can be a Point or Extent.Prior to version 2.0, the first parameter was 											&lt;Point> point									Required										When "true", the point in the argument is contained in this extent.  								</param>
        /// <return type="Boolean">Boolean</return>
    },
    union: function (extent) {
        /// <summary>Expands this extent to include the extent of the argument.</summary>
        /// <param name="extent" type="Extent" optional="false">The minx, miny, maxx, and maxy bounding box.</param>
        /// <return type="Extent">Extent</return>
    },
    update: function (xmin,ymin,xmax,ymax,spatialReference) {
        /// <summary>Updates this extent with the specified parameters.The return value of Extent was added at v1.4.</summary>
        /// <param name="xmin" type="Number" optional="false">Bottom-left X-coordinate of an extent envelope.</param>
        /// <param name="ymin" type="Number" optional="false">Bottom-left Y-coordinate of an extent envelope.</param>
        /// <param name="xmax" type="Number" optional="false">Top-right X-coordinate of an extent envelope.</param>
        /// <param name="ymax" type="Number" optional="false">Top-right Y-coordinate of an extent envelope.</param>
        /// <param name="spatialReference" type="SpatialReference" optional="false">Spatial reference of the geometry.</param>
        /// <return type="Extent">Extent</return>
    },

};
esri.geometry.Polyline = function (spatialReference,json) {
    /// <summary>Creates a new Polyline object.</summary>
    /// <param name="spatialReference" type="SpatialReference" optional="false">Spatial reference of the geometry.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the geometry.</param> = function (spatialReference,json) {
    /// <summary>Creates a new Polyline object using a JSON object.</summary>
    /// <param name="spatialReference" type="SpatialReference" optional="false">Spatial reference of the geometry.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the geometry.</param>
    /// <field name="paths" type="Number[][][]">An array of paths.  Each path is made up of an array of two or more points.</field>
};
esri.geometry.Polyline.prototype =
{
    addPath: function (points,path,pointJson) {
        /// <summary>Adds a path to the Polyline.  The path can be one of the following: an array of numbers, an array of points, or a JSON object.  When added the index of the path is incremented by one.The return value of Polyline was added at v1.4.</summary>
        /// <param name="points" type="Point[]" optional="false">An array of ESRI points to create a path.</param>
        /// <param name="path" type="Number[][]" optional="false">An array of x,y coordinate pairs to create a path.</param>
        /// <param name="pointJson" type="Object" optional="false">A JSON object representing a path.</param>
        /// <return type="Polyline">Polyline</return>
    },
    removePath: function (pathIndex) {
        /// <summary>Removes a path from the Polyline.  The index specifies which path to remove.</summary>
        /// <param name="pathIndex" type="Number" optional="false">The index of a path to remove.</param>
        /// <return type="Point[]">Point[]</return>
    },
    getExtent: function () {
        /// <summary>Returns the extent of the Polyline.</summary>
        /// <return type="Extent">Extent</return>
    },
    getPoint: function (pathIndex,pointIndex) {
        /// <summary>Returns a point specified by a path and point in the path.</summary>
        /// <param name="pathIndex" type="Number" optional="false">The index of a path in a polyline.</param>
        /// <param name="pointIndex" type="Number" optional="false">The index of a point in a path.</param>
        /// <return type="Point">Point</return>
    },
    insertPoint: function (pathIndex,pointIndex,point) {
        /// <summary>Inserts a new point into a polyline.</summary>
        /// <param name="pathIndex" type="Number" optional="false">Path index to insert point.</param>
        /// <param name="pointIndex" type="Number" optional="false">The index of the inserted point in the path.</param>
        /// <param name="point" type="Point" optional="false">Point to insert into the path.</param>
        /// <return type="Polyline">Polyline</return>
    },
    setPoint: function (pathIndex,pointIndex,point) {
        /// <summary>Updates a point in a polyline.</summary>
        /// <param name="pathIndex" type="Number" optional="false">Path index for updated point.</param>
        /// <param name="pointIndex" type="Number" optional="false">The index of the updated point in the path.</param>
        /// <param name="point" type="Point" optional="false">Point to update in the path.</param>
        /// <return type="Polyline">Polyline</return>
    },
    removePoint: function (pathIndex,pointIndex) {
        /// <summary>Remove a point from the polyline at the given pointIndex within the path identified by the given pathIndex.</summary>
        /// <param name="pathIndex" type="Number" optional="false">The index of the path containing the point.</param>
        /// <param name="pointIndex" type="Number" optional="false">The index of the point within the path.</param>
        /// <return type="Point">Point</return>
    },

};
esri.geometry.Polygon = function (spatialReference,json) {
    /// <summary>Creates a new Polygon object.</summary>
    /// <param name="spatialReference" type="SpatialReference" optional="false">Spatial reference of the geometry.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the geometry.</param> = function (spatialReference,json) {
    /// <summary>Creates a new Polygon object using a JSON object.</summary>
    /// <param name="spatialReference" type="SpatialReference" optional="false">Spatial reference of the geometry.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the geometry.</param>
    /// <field name="rings" type="Number[][][]">An array of rings.  Each ring is made up of three or more points.</field>
};
esri.geometry.Polygon.prototype =
{
    addRing: function (points,ring,pointJson) {
        /// <summary>Adds a ring  to the Polygon.  The ring can be one of the following: an array of numbers, an array of points, or a JSON object.  When added the index of the ring is incremented by one.The return value of Polygon was added at v1.4.</summary>
        /// <param name="points" type="Point[]" optional="false">An array of ESRI points to create a ring.</param>
        /// <param name="ring" type="Number[][]" optional="false">An array of x,y coordinate pairs to create a ring.</param>
        /// <param name="pointJson" type="Object" optional="false">A JSON object representing a ring.</param>
        /// <return type="Polygon">Polygon</return>
    },
    removeRing: function (ringIndex) {
        /// <summary>Removes a ring from the Polygon.  The index specifies which ring to remove.</summary>
        /// <param name="ringIndex" type="Number" optional="false">The index of the ring to remove.</param>
        /// <return type="Point[]">Point[]</return>
    },
    getExtent: function () {
        /// <summary>Returns the extent of the polygon.</summary>
        /// <return type="Extent">Extent</return>
    },
    getPoint: function (ringIndex,pointIndex) {
        /// <summary>Returns a point specified by a ring and point in the path.</summary>
        /// <param name="ringIndex" type="Number" optional="false">The index of a ring.</param>
        /// <param name="pointIndex" type="Number" optional="false">The index of a point in a ring.</param>
        /// <return type="Point">Point</return>
    },
    contains: function (point) {
        /// <summary>Checks on the client if the specified point is inside the polygon. A point on the polygon line is considered in.</summary>
        /// <param name="point" type="Point" optional="false">The location defined by an X- and Y- coordinate in map units.</param>
        /// <return type="Boolean">Boolean</return>
    },
    insertPoint: function (ringIndex,pointIndex,point) {
        /// <summary>Inserts a new point into a polygon.</summary>
        /// <param name="ringIndex" type="Number" optional="false">Ring index to insert point.</param>
        /// <param name="pointIndex" type="Number" optional="false">The index of the inserted point in the ring.</param>
        /// <param name="point" type="Point" optional="false">Point to insert into the ring.</param>
        /// <return type="Polygon">Polygon</return>
    },
    setPoint: function (ringIndex,pointIndex,point) {
        /// <summary>Updates a point in a polygon.</summary>
        /// <param name="ringIndex" type="Number" optional="false">Ring index for updated point.</param>
        /// <param name="pointIndex" type="Number" optional="false">The index of the updated point in the ring.</param>
        /// <param name="point" type="Point" optional="false">Point to update in the ring.</param>
        /// <return type="Polygon">Polygon</return>
    },
    removePoint: function (ringIndex,pointIndex) {
        /// <summary>Remove a point from the polygon at the given pointIndex within the ring identified by ringIndex.</summary>
        /// <param name="ringIndex" type="Number" optional="false">The index of the ring containing the point.</param>
        /// <param name="pointIndex" type="Number" optional="false">The index of the point within the ring.</param>
        /// <return type="Point">Point</return>
    },

};
esri.geometry.Multipoint = function (spatialReference,json) {
    /// <summary>Creates a new Multipoint object.</summary>
    /// <param name="spatialReference" type="SpatialReference" optional="false">Spatial reference of the geometry.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the geometry.</param> = function (spatialReference,json) {
    /// <summary>Creates a new Multipoint object using a JSON object.</summary>
    /// <param name="spatialReference" type="SpatialReference" optional="false">Spatial reference of the geometry.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the geometry.</param>
    /// <field name="points" type="Number[][]">An array of one or more points.</field>
};
esri.geometry.Multipoint.prototype =
{
    addPoint: function (point,json) {
        /// <summary>Adds a point to the Multipoint.  The point can be one of the following:  an ESRI Point, a number array, or a JSON object.The return value of Multipoint was added at v1.4.</summary>
        /// <param name="point" type="<a href="point.htm">Point</a> or Number[]" optional="false">The point to add.  The point is either an ESRI Point or a number representing the x,y coordinate.</param>
        /// <param name="json" type="object" optional="false">A JSON object representing a point.</param>
        /// <return type="Multipoint">Multipoint</return>
    },
    getExtent: function () {
        /// <summary>Gets the extent of all the points.  If only one point is present, the extent has a width and height of 0.</summary>
        /// <return type="Extent">Extent</return>
    },
    removePoint: function (index) {
        /// <summary>Removes a point from the Multipoint.  The index specifies which path to remove.</summary>
        /// <param name="index" type="Number" optional="false">The index of the point to remove.</param>
        /// <return type="Point">Point</return>
    },
    getPoint: function (index) {
        /// <summary>Returns the point at the specified index.</summary>
        /// <param name="index" type="Number" optional="false">Positional index of the point in the points property.</param>
        /// <return type="Point">Point</return>
    },
    setPoint: function (index,point) {
        /// <summary>Updates the point at the specified index.</summary>
        /// <param name="index" type="Number" optional="false">Positional index of the point in the points property.</param>
        /// <param name="point" type="Point" optional="false">Point that specifies the new location.</param>
        /// <return type="Multipoint">Multipoint</return>
    },

};
esri.symbol = function () {
    /// <summary>The esri.symbol namespace contains utility methods that are not associated with any class.</summary>
};
esri.symbol.fromJson = function () {
    /// <summary>Converts input json into a symbol, returns null if the input json represents an unknown or unsupported symbol type.</summary>
    /// <return type="Symbol">Symbol</return>
};
esri.symbol.getShapeDescriptors = function () {
    /// <summary>Returns the shape description properties for the given symbol as defined by the Dojo GFX API. Using this method, you can apply ArcGIS symbology to shapes or graphics not created within a GraphicsLayer.</summary>
    /// <return type="Object">Object</return>
};

esri.symbol.Symbol = function () {
    /// <summary>dojo.require("esri.symbol");Symbols are used to display points, lines, and polygons on the graphics layer.  Symbol is the base symbol class and has no constructor.  Instead, use the following:Points:&nbsp;&nbsp;SimpleMarkerSymbol, PictureMarkerSymbolLines:&nbsp;&nbsp;SimpleLineSymbol, CartographicLineSymbolPolygons:&nbsp;&nbsp;SimpleFillSymbol, PictureFillSymbolText:&nbsp;&nbsp;TextSymbol, Font</summary>
    /// <field name="color" type="dojo.Color">Symbol color, which is based on dojo.Color.  Colors can be denoted in the following formats:R, G, B:  new dojo.Color([255,0,0]) R,G,B,A.  The "A" value represents transparency where 0.0 is fully transparent and 1.0 has no transparency: new dojo.Color([255,0,0,0.25]) Hex string: new dojo.Color("#C0C0C0") Named string:  new dojo.Color("blue") </field>
    /// <field name="type" type="String">The type of symbol. Known Values: simplemarkersymbol | picturemarkersymbol | simplelinesymbol | cartographiclinesymbol | simplefillsymbol | picturefillsymbol | textsymbol</field>
};
esri.symbol.Symbol.prototype =
{
    setColor: function (color) {
        /// <summary>Sets the symbol color.</summary>
        /// <param name="color" type="dojo.Color" optional="false">Colors can be denoted in the following formats:R, G, B:  new dojo.Color([255,0,0]) R,G,B,A.  The "A" value represents transparency where 0.0 is fully transparent and 1.0 has no transparency: new dojo.Color([255,0,0,0.25]) Hex string: new dojo.Color("#C0C0C0") Named string:  new dojo.Color("blue") </param>
        /// <return type="Symbol">Symbol</return>
    },
    toJson: function () {
        /// <summary>Converts object to its ArcGIS Server JSON representation.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.symbol.MarkerSymbol = function () {
    /// <summary>Marker symbols are used to draw points and multipoints on the graphics layer. MarkerSymbol has no constructor.  Use SimpleMarkerSymbol or PictureMarkerSymbol.</summary>
    /// <field name="angle" type="Number">The angle of the image. 0 is pointing right and values progress clockwise.</field>
    /// <field name="size" type="Number">Size of the marker in pixels.</field>
    /// <field name="xoffset" type="Number">The offset on the x-axis in pixels.</field>
    /// <field name="yoffset" type="Number">The offset on the y-axis in pixels.</field>
};
esri.symbol.MarkerSymbol.prototype =
{
    setAngle: function (angle) {
        /// <summary>Sets the angle of a marker.</summary>
        /// <param name="angle" type="Number" optional="false">The angle value. 0 is pointing right and values progress clockwise.</param>
        /// <return type="MarkerSymbol">MarkerSymbol</return>
    },
    setOffset: function (x,y) {
        /// <summary>Sets the x and y offset of a marker in screen units.</summary>
        /// <param name="x" type="Number" optional="false">The X offset value in pixels.</param>
        /// <param name="y" type="Number" optional="false">The Y offset value in pixels.</param>
        /// <return type="MarkerSymbol">MarkerSymbol</return>
    },
    setSize: function (size) {
        /// <summary>Sets the size of a marker in pixels.</summary>
        /// <param name="size" type="Number" optional="false">The width of the symbol in pixels.</param>
        /// <return type="MarkerSymbol">MarkerSymbol</return>
    },

};
esri.symbol.LineSymbol = function () {
    /// <summary>Line symbols are used to draw linear features on the graphics layer.  LineSymbol has no constructor.  Use SimpleLineSymbol or CartographicLineSymbol.</summary>
    /// <field name="width" type="Number">Width of line symbol in pixels.</field>
};
esri.symbol.LineSymbol.prototype =
{
    setWidth: function (width) {
        /// <summary>Sets the LineSymbol width.</summary>
        /// <param name="width" type="Number" optional="false">Width of line symbol in pixels.</param>
        /// <return type="LineSymbol">LineSymbol</return>
    },

};
esri.symbol.PictureMarkerSymbol = function (url,width,height,json) {
    /// <summary>Creates a new PictureMarkerSymbol object.</summary>
    /// <param name="url" type="String" optional="false">URL of the image.</param>
    /// <param name="width" type="Number" optional="false">Width of the image in pixels.  The default value is the actual width of the image.</param>
    /// <param name="height" type="Number" optional="false">Height of the image in pixels.  The default value is the actual height of the image.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the PictureMarkerSymbol. View the REST API Reference for Symbol Objects for details on creating a JSON symbol. Note that when specifying symbol width and height using JSON the values should be entered in points, the JavaScript API then converts the point values to pixels.</param> = function (url,width,height,json) {
    /// <summary>Creates a new PictureMarkerSymbol object using a JSON object.</summary>
    /// <param name="url" type="String" optional="false">URL of the image.</param>
    /// <param name="width" type="Number" optional="false">Width of the image in pixels.  The default value is the actual width of the image.</param>
    /// <param name="height" type="Number" optional="false">Height of the image in pixels.  The default value is the actual height of the image.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the PictureMarkerSymbol. View the REST API Reference for Symbol Objects for details on creating a JSON symbol. Note that when specifying symbol width and height using JSON the values should be entered in points, the JavaScript API then converts the point values to pixels.</param>
    /// <field name="height" type="Number">Height of the image in pixels.</field>
    /// <field name="url" type="String">URL of the image.</field>
    /// <field name="width" type="Number">Width of the image in pixels.</field>
};
esri.symbol.PictureMarkerSymbol.prototype =
{
    setWidth: function (width) {
        /// <summary>Sets the width of the image for display.  The width can be larger or smaller than the actual width of the image.  As the image gets larger, it will become more pixilated.</summary>
        /// <param name="width" type="Number" optional="false">Width of marker in pixels.</param>
        /// <return type="PictureMarkerSymbol">PictureMarkerSymbol</return>
    },
    setHeight: function (height) {
        /// <summary>Sets the height of the image for display.  The height can be larger or smaller than the actual width of the image.  As the image gets larger, it will become more pixilated.</summary>
        /// <param name="height" type="Number" optional="false">Height of marker in pixels.</param>
        /// <return type="PictureMarkerSymbol">PictureMarkerSymbol</return>
    },
    setUrl: function (url) {
        /// <summary>Sets the URL where the image is located.</summary>
        /// <param name="url" type="String" optional="false">URL location of marker image.</param>
        /// <return type="PictureMarkerSymbol">PictureMarkerSymbol</return>
    },

};
esri.symbol.SimpleFillSymbol = function (style,outline,color,json) {
    /// <summary>Creates a new SimpleFillSymbol object with parameters.</summary>
    /// <param name="style" type="String" optional="false">See Constants table for values.</param>
    /// <param name="outline" type="SimpleLineSymbol" optional="false">See SimpleLineSymbol.</param>
    /// <param name="color" type="dojo.Color" optional="false">Symbol color, which is based on dojo.Color.  Colors can be denoted in the following formats:R, G, B:  new dojo.Color([255,0,0]) R,G,B,A.  The "A" value represents transparency where 0.0 is fully transparent and 1.0 has no transparency: new dojo.Color([255,0,0,0.25]) Hex string: new dojo.Color("#C0C0C0") Named string:  new dojo.Color("blue") </param>
    /// <param name="json" type="Object" optional="false">JSON object representing the SimpleFillSymbol. View the REST API Reference for Symbol Objects for details on creating a JSON symbol. Note that when specifying symbol width and height using JSON the values should be entered in points, the JavaScript API then converts the point values to pixels.</param> = function (style,outline,color,json) {
    /// <summary>Creates a new empty SimpleFillSymbol object.</summary>
    /// <param name="style" type="String" optional="false">See Constants table for values.</param>
    /// <param name="outline" type="SimpleLineSymbol" optional="false">See SimpleLineSymbol.</param>
    /// <param name="color" type="dojo.Color" optional="false">Symbol color, which is based on dojo.Color.  Colors can be denoted in the following formats:R, G, B:  new dojo.Color([255,0,0]) R,G,B,A.  The "A" value represents transparency where 0.0 is fully transparent and 1.0 has no transparency: new dojo.Color([255,0,0,0.25]) Hex string: new dojo.Color("#C0C0C0") Named string:  new dojo.Color("blue") </param>
    /// <param name="json" type="Object" optional="false">JSON object representing the SimpleFillSymbol. View the REST API Reference for Symbol Objects for details on creating a JSON symbol. Note that when specifying symbol width and height using JSON the values should be entered in points, the JavaScript API then converts the point values to pixels.</param> = function (style,outline,color,json) {
    /// <summary>Creates a new SimpleFillSymbol object using a JSON object.</summary>
    /// <param name="style" type="String" optional="false">See Constants table for values.</param>
    /// <param name="outline" type="SimpleLineSymbol" optional="false">See SimpleLineSymbol.</param>
    /// <param name="color" type="dojo.Color" optional="false">Symbol color, which is based on dojo.Color.  Colors can be denoted in the following formats:R, G, B:  new dojo.Color([255,0,0]) R,G,B,A.  The "A" value represents transparency where 0.0 is fully transparent and 1.0 has no transparency: new dojo.Color([255,0,0,0.25]) Hex string: new dojo.Color("#C0C0C0") Named string:  new dojo.Color("blue") </param>
    /// <param name="json" type="Object" optional="false">JSON object representing the SimpleFillSymbol. View the REST API Reference for Symbol Objects for details on creating a JSON symbol. Note that when specifying symbol width and height using JSON the values should be entered in points, the JavaScript API then converts the point values to pixels.</param>
    /// <field name="style" type="String">The fill style.  See the Constants table for valid values.  The default value is STYLE_SOLID.  Color is valid only with STYLE_SOLID.</field>
};
esri.symbol.SimpleFillSymbol.prototype =
{
    setStyle: function (style) {
        /// <summary>Sets the fill symbol style.</summary>
        /// <param name="style" type="String" optional="false">Fill style.  See the Constants table for valid values.</param>
        /// <return type="SimpleFillSymbol">SimpleFillSymbol</return>
    },

};
esri.symbol.FillSymbol = function () {
    /// <summary>Fill symbols are used to draw polygon features on the graphics layer. Fills can be specified as solid, hatched, or pictures. In addition, the symbol can have an optional outline, which is defined by a line symbol.FillSymbol has no constructor.  Use SimpleFillSymbol or PictureFillSymbol.</summary>
    /// <field name="outline" type="SimpleLineSymbol">Outline of the polygon.</field>
};
esri.symbol.FillSymbol.prototype =
{
    setOutline: function (outline) {
        /// <summary>Sets the outline of the fill symbol.</summary>
        /// <param name="outline" type="SimpleLineSymbol" optional="false">Symbol used for outline.</param>
        /// <return type="FillSymbol">FillSymbol</return>
    },

};
esri.symbol.SimpleLineSymbol = function (style,color,width,json) {
    /// <summary>Creates a new SimpleLineSymbol object with parameters.</summary>
    /// <param name="style" type="String" optional="false">See Constants table for values.</param>
    /// <param name="color" type="dojo.Color" optional="false">Symbol color, which is based on dojo.Color.  Colors can be denoted in the following formats:R, G, B:  new dojo.Color([255,0,0]) R,G,B,A.  The "A" value represents transparency where 0.0 is fully transparent and 1.0 has no transparency: new dojo.Color([255,0,0,0.25]) Hex string: new dojo.Color("#C0C0C0") Named string:  new dojo.Color("blue") </param>
    /// <param name="width" type="Number" optional="false">Width of the line in pixels.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the SimpleLineSymbol. View the REST API Reference for Symbol Objects for details on creating a JSON symbol. Note that when specifying symbol width and height using JSON the values should be entered in points, the JavaScript API then converts the point values to pixels.</param> = function (style,color,width,json) {
    /// <summary>Creates a new empty SimpleLineSymbol object.</summary>
    /// <param name="style" type="String" optional="false">See Constants table for values.</param>
    /// <param name="color" type="dojo.Color" optional="false">Symbol color, which is based on dojo.Color.  Colors can be denoted in the following formats:R, G, B:  new dojo.Color([255,0,0]) R,G,B,A.  The "A" value represents transparency where 0.0 is fully transparent and 1.0 has no transparency: new dojo.Color([255,0,0,0.25]) Hex string: new dojo.Color("#C0C0C0") Named string:  new dojo.Color("blue") </param>
    /// <param name="width" type="Number" optional="false">Width of the line in pixels.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the SimpleLineSymbol. View the REST API Reference for Symbol Objects for details on creating a JSON symbol. Note that when specifying symbol width and height using JSON the values should be entered in points, the JavaScript API then converts the point values to pixels.</param> = function (style,color,width,json) {
    /// <summary>Creates a new SimpleLineSymbol object using a JSON object.</summary>
    /// <param name="style" type="String" optional="false">See Constants table for values.</param>
    /// <param name="color" type="dojo.Color" optional="false">Symbol color, which is based on dojo.Color.  Colors can be denoted in the following formats:R, G, B:  new dojo.Color([255,0,0]) R,G,B,A.  The "A" value represents transparency where 0.0 is fully transparent and 1.0 has no transparency: new dojo.Color([255,0,0,0.25]) Hex string: new dojo.Color("#C0C0C0") Named string:  new dojo.Color("blue") </param>
    /// <param name="width" type="Number" optional="false">Width of the line in pixels.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the SimpleLineSymbol. View the REST API Reference for Symbol Objects for details on creating a JSON symbol. Note that when specifying symbol width and height using JSON the values should be entered in points, the JavaScript API then converts the point values to pixels.</param>
    /// <field name="style" type="String">The line style.  See the Constants table for valid values.  The default value is STYLE_SOLID.</field>
};
esri.symbol.SimpleLineSymbol.prototype =
{
    setStyle: function (style) {
        /// <summary>Sets the line symbol style.</summary>
        /// <param name="style" type="String" optional="false">Line style.  See the Constants table for valid values.</param>
        /// <return type="SimpleLineSymbol">SimpleLineSymbol</return>
    },

};
esri.symbol.SimpleMarkerSymbol = function (style,size,outline,color,json) {
    /// <summary>Creates a new SimpleMarkerSymbol object with parameters.</summary>
    /// <param name="style" type="String" optional="false">See Constants table for values.</param>
    /// <param name="size" type="Number" optional="false">Size of the marker in pixels.</param>
    /// <param name="outline" type="SimpleLineSymbol" optional="false">See SimpleLineSymbol.</param>
    /// <param name="color" type="dojo.Color" optional="false">Symbol color, which is based on dojo.Color.  Colors can be denoted in the following formats:R, G, B:  new dojo.Color([255,0,0]) R,G,B,A.  The "A" value represents transparency where 0.0 is fully transparent and 1.0 has no transparency: new dojo.Color([255,0,0,0.25]) Hex string: new dojo.Color("#C0C0C0") Named string:  new dojo.Color("blue") </param>
    /// <param name="json" type="Object" optional="false">JSON object representing the SimpleMarkerSymbol. View the REST API Reference for Symbol Objects for details on creating a JSON symbol. Note that when specifying symbol width and height using JSON the values should be entered in points, the JavaScript API then converts the point values to pixels.</param> = function (style,size,outline,color,json) {
    /// <summary>Creates a new empty SimpleMarkerSymbol object.</summary>
    /// <param name="style" type="String" optional="false">See Constants table for values.</param>
    /// <param name="size" type="Number" optional="false">Size of the marker in pixels.</param>
    /// <param name="outline" type="SimpleLineSymbol" optional="false">See SimpleLineSymbol.</param>
    /// <param name="color" type="dojo.Color" optional="false">Symbol color, which is based on dojo.Color.  Colors can be denoted in the following formats:R, G, B:  new dojo.Color([255,0,0]) R,G,B,A.  The "A" value represents transparency where 0.0 is fully transparent and 1.0 has no transparency: new dojo.Color([255,0,0,0.25]) Hex string: new dojo.Color("#C0C0C0") Named string:  new dojo.Color("blue") </param>
    /// <param name="json" type="Object" optional="false">JSON object representing the SimpleMarkerSymbol. View the REST API Reference for Symbol Objects for details on creating a JSON symbol. Note that when specifying symbol width and height using JSON the values should be entered in points, the JavaScript API then converts the point values to pixels.</param> = function (style,size,outline,color,json) {
    /// <summary>Creates a new SimpleMarkerSymbol object using a JSON object.</summary>
    /// <param name="style" type="String" optional="false">See Constants table for values.</param>
    /// <param name="size" type="Number" optional="false">Size of the marker in pixels.</param>
    /// <param name="outline" type="SimpleLineSymbol" optional="false">See SimpleLineSymbol.</param>
    /// <param name="color" type="dojo.Color" optional="false">Symbol color, which is based on dojo.Color.  Colors can be denoted in the following formats:R, G, B:  new dojo.Color([255,0,0]) R,G,B,A.  The "A" value represents transparency where 0.0 is fully transparent and 1.0 has no transparency: new dojo.Color([255,0,0,0.25]) Hex string: new dojo.Color("#C0C0C0") Named string:  new dojo.Color("blue") </param>
    /// <param name="json" type="Object" optional="false">JSON object representing the SimpleMarkerSymbol. View the REST API Reference for Symbol Objects for details on creating a JSON symbol. Note that when specifying symbol width and height using JSON the values should be entered in points, the JavaScript API then converts the point values to pixels.</param>
    /// <field name="style" type="String">The marker style.  See the Constants table for valid values.  The default value is STYLE_CIRCLE.</field>
    /// <field name="outline" type="SimpleLineSymbol">Outline of the marker.</field>
};
esri.symbol.SimpleMarkerSymbol.prototype =
{
    setOutline: function (outline) {
        /// <summary>Sets the outline of the marker symbol.</summary>
        /// <param name="outline" type="SimpleLineSymbol" optional="false">Symbol used for outline.</param>
        /// <return type="SimpleMarkerSymbol">SimpleMarkerSymbol</return>
    },
    setStyle: function (style) {
        /// <summary>Sets the marker symbol style.</summary>
        /// <param name="style" type="String" optional="false">Marker style.  See the Constants table for valid values.</param>
        /// <return type="SimpleMarkerSymbol">SimpleMarkerSymbol</return>
    },

};
esri.symbol.CartographicLineSymbol = function (style,color,width,cap,join,miterLimit,json) {
    /// <summary>Creates a new CartographicLineSymbol object with parameters.</summary>
    /// <param name="style" type="String" optional="true">Optional. See Constants table for values.</param>
    /// <param name="color" type="dojo.Color" optional="true">Optional. Symbol color, which is based on dojo.Color.  Colors can be denoted in the following formats:R, G, B:  new dojo.Color([255,0,0]) R,G,B,A.  The "A" value represents transparency where 0.0 is fully transparent and 1.0 has no transparency: new dojo.Color([255,0,0,0.25]) Hex string: new dojo.Color("#C0C0C0") Named string:  new dojo.Color("blue") </param>
    /// <param name="width" type="Number" optional="true">Optional. Width of the line in pixels.</param>
    /// <param name="cap" type="String" optional="true">Optional. See Constants table for values.</param>
    /// <param name="join" type="String" optional="true">Optional. See Constants table for values.</param>
    /// <param name="miterLimit" type="String" optional="true">Optional. Size threshold for showing mitered line joins.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the CartographicLineSymbol. View the REST API Reference for Symbol Objects for details on creating a JSON symbol. Note that when specifying symbol width and height using JSON the values should be entered in points, the JavaScript API then converts the point values to pixels.</param> = function (style,color,width,cap,join,miterLimit,json) {
    /// <summary>Creates a new empty CartographicLineSymbol object.</summary>
    /// <param name="style" type="String" optional="true">Optional. See Constants table for values.</param>
    /// <param name="color" type="dojo.Color" optional="true">Optional. Symbol color, which is based on dojo.Color.  Colors can be denoted in the following formats:R, G, B:  new dojo.Color([255,0,0]) R,G,B,A.  The "A" value represents transparency where 0.0 is fully transparent and 1.0 has no transparency: new dojo.Color([255,0,0,0.25]) Hex string: new dojo.Color("#C0C0C0") Named string:  new dojo.Color("blue") </param>
    /// <param name="width" type="Number" optional="true">Optional. Width of the line in pixels.</param>
    /// <param name="cap" type="String" optional="true">Optional. See Constants table for values.</param>
    /// <param name="join" type="String" optional="true">Optional. See Constants table for values.</param>
    /// <param name="miterLimit" type="String" optional="true">Optional. Size threshold for showing mitered line joins.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the CartographicLineSymbol. View the REST API Reference for Symbol Objects for details on creating a JSON symbol. Note that when specifying symbol width and height using JSON the values should be entered in points, the JavaScript API then converts the point values to pixels.</param> = function (style,color,width,cap,join,miterLimit,json) {
    /// <summary>Creates a new CartographicLineSymbol object using a JSON object.</summary>
    /// <param name="style" type="String" optional="true">Optional. See Constants table for values.</param>
    /// <param name="color" type="dojo.Color" optional="true">Optional. Symbol color, which is based on dojo.Color.  Colors can be denoted in the following formats:R, G, B:  new dojo.Color([255,0,0]) R,G,B,A.  The "A" value represents transparency where 0.0 is fully transparent and 1.0 has no transparency: new dojo.Color([255,0,0,0.25]) Hex string: new dojo.Color("#C0C0C0") Named string:  new dojo.Color("blue") </param>
    /// <param name="width" type="Number" optional="true">Optional. Width of the line in pixels.</param>
    /// <param name="cap" type="String" optional="true">Optional. See Constants table for values.</param>
    /// <param name="join" type="String" optional="true">Optional. See Constants table for values.</param>
    /// <param name="miterLimit" type="String" optional="true">Optional. Size threshold for showing mitered line joins.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the CartographicLineSymbol. View the REST API Reference for Symbol Objects for details on creating a JSON symbol. Note that when specifying symbol width and height using JSON the values should be entered in points, the JavaScript API then converts the point values to pixels.</param>
    /// <field name="cap" type="String">The cap style.  See the Constants table for valid values.  The default value is CAP_BUTT.</field>
    /// <field name="join" type="String">The join style.  See the Constants table for valid values.  The default value is JOIN_MITER.</field>
    /// <field name="miterLimit" type="String">Size threshold for showing mitered line joins.</field>
};
esri.symbol.CartographicLineSymbol.prototype =
{
    setCap: function (cap) {
        /// <summary>Sets the cap style.</summary>
        /// <param name="cap" type="String" optional="false">Cap style.  See the Constants table for valid values.</param>
        /// <return type="CartographicLineSymbol">CartographicLineSymbol</return>
    },
    setJoin: function (join) {
        /// <summary>Sets the join style.</summary>
        /// <param name="join" type="String" optional="false">Join style.  See the Constants table for valid values.</param>
        /// <return type="CartographicLineSymbol">CartographicLineSymbol</return>
    },
    setMiterLimit: function (miterLimit) {
        /// <summary>Sets the size threshold for showing mitered line joins.</summary>
        /// <param name="miterLimit" type="String" optional="false">Miter limit.</param>
        /// <return type="CartographicLineSymbol">CartographicLineSymbol</return>
    },

};
esri.symbol.PictureFillSymbol = function (url,outline,width,height,json) {
    /// <summary>Creates a new PictureFillSymbol object.</summary>
    /// <param name="url" type="String" optional="false">URL of the image.</param>
    /// <param name="outline" type="SimpleLineSymbol" optional="false">Outline of the symbol.</param>
    /// <param name="width" type="Number" optional="false">Width of the image in pixels.</param>
    /// <param name="height" type="Number" optional="false">Height of the image in pixels.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the PictureFillSymbol. View the REST API Reference for Symbol Objects for details on creating a JSON symbol. Note that when specifying symbol width and height using JSON the values should be entered in points, the JavaScript API then converts the point values to pixels.</param> = function (url,outline,width,height,json) {
    /// <summary>Creates a new PictureFillSymbol object using a JSON object.</summary>
    /// <param name="url" type="String" optional="false">URL of the image.</param>
    /// <param name="outline" type="SimpleLineSymbol" optional="false">Outline of the symbol.</param>
    /// <param name="width" type="Number" optional="false">Width of the image in pixels.</param>
    /// <param name="height" type="Number" optional="false">Height of the image in pixels.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the PictureFillSymbol. View the REST API Reference for Symbol Objects for details on creating a JSON symbol. Note that when specifying symbol width and height using JSON the values should be entered in points, the JavaScript API then converts the point values to pixels.</param>
    /// <field name="height" type="Number">Height of the image in pixels.</field>
    /// <field name="url" type="String">URL of the image.</field>
    /// <field name="width" type="Number">Width of the image in pixels.</field>
    /// <field name="xoffset" type="Number">The offset on the x-axis in pixels.</field>
    /// <field name="yoffset" type="Number">The offset on the y-axis in pixels.</field>
    /// <field name="xscale" type="Number">Scale factor in x direction.</field>
    /// <field name="yscale" type="Number">Scale factor in y direction.</field>
};
esri.symbol.PictureFillSymbol.prototype =
{
    setHeight: function (height) {
        /// <summary>Sets the height of the symbol.</summary>
        /// <param name="height" type="Number" optional="false">Height in pixels.</param>
        /// <return type="PictureFillSymbol">PictureFillSymbol</return>
    },
    setUrl: function (url) {
        /// <summary>Sets the URL to the location of the symbol.</summary>
        /// <param name="url" type="String" optional="false">URL string.</param>
        /// <return type="PictureFillSymbol">PictureFillSymbol</return>
    },
    setWidth: function (width) {
        /// <summary>Sets the width of the symbol.</summary>
        /// <param name="width" type="Number" optional="false">Width in pixels.</param>
        /// <return type="PictureFillSymbol">PictureFillSymbol</return>
    },
    setXScale: function (scale) {
        /// <summary>Sets the scale factor in x direction. of the symbol.</summary>
        /// <param name="scale" type="Number" optional="false">Scale factor in x direction.</param>
        /// <return type="PictureFillSymbol">PictureFillSymbol</return>
    },
    setYScale: function (scale) {
        /// <summary>Sets the scale factor in y direction.</summary>
        /// <param name="scale" type="Number" optional="false">Scale factor in y direction.</param>
        /// <return type="PictureFillSymbol">PictureFillSymbol</return>
    },
    setOffset: function (x,y) {
        /// <summary>Sets the symbol offset.</summary>
        /// <param name="x" type="Number" optional="false">Offset in x direction in pixels.</param>
        /// <param name="y" type="Number" optional="false">Offset in y direction in pixels.</param>
        /// <return type="PictureFillSymbol">PictureFillSymbol</return>
    },

};
esri.symbol.TextSymbol = function (text,text,font,color,json) {
    /// <summary>Creates a new TextSymbol object.</summary>
    /// <param name="text" type="String" optional="false">Text string for display in the graphics layer.</param>
    /// <param name="text" type="String" optional="false">Text string for display in the graphics layer.</param>
    /// <param name="font" type="Font" optional="false">Font for displaying text.</param>
    /// <param name="color" type="dojo.Color" optional="false">Symbol color, which is based on dojo.Color.  Colors can be denoted in the following formats:R, G, B:  new dojo.Color([255,0,0]) R,G,B,A.  The "A" value represents transparency where 0.0 is fully transparent and 1.0 has no transparency: new dojo.Color([255,0,0,0.25]) Hex string: new dojo.Color("#C0C0C0") Named string:  new dojo.Color("blue") </param>
    /// <param name="json" type="Object" optional="false">JSON object representing the TextSymbol. View the REST API Reference for Symbol Objects for details on creating a JSON symbol. Note that when specifying symbol width and height using JSON the values should be entered in points, the JavaScript API then converts the point values to pixels.</param> = function (text,text,font,color,json) {
    /// <summary>Creates a new TextSymbol object using a JSON object.</summary>
    /// <param name="text" type="String" optional="false">Text string for display in the graphics layer.</param>
    /// <param name="text" type="String" optional="false">Text string for display in the graphics layer.</param>
    /// <param name="font" type="Font" optional="false">Font for displaying text.</param>
    /// <param name="color" type="dojo.Color" optional="false">Symbol color, which is based on dojo.Color.  Colors can be denoted in the following formats:R, G, B:  new dojo.Color([255,0,0]) R,G,B,A.  The "A" value represents transparency where 0.0 is fully transparent and 1.0 has no transparency: new dojo.Color([255,0,0,0.25]) Hex string: new dojo.Color("#C0C0C0") Named string:  new dojo.Color("blue") </param>
    /// <param name="json" type="Object" optional="false">JSON object representing the TextSymbol. View the REST API Reference for Symbol Objects for details on creating a JSON symbol. Note that when specifying symbol width and height using JSON the values should be entered in points, the JavaScript API then converts the point values to pixels.</param> = function (text,text,font,color,json) {
    /// <summary>Creates a new TextSymbol object that includes only the text.</summary>
    /// <param name="text" type="String" optional="false">Text string for display in the graphics layer.</param>
    /// <param name="text" type="String" optional="false">Text string for display in the graphics layer.</param>
    /// <param name="font" type="Font" optional="false">Font for displaying text.</param>
    /// <param name="color" type="dojo.Color" optional="false">Symbol color, which is based on dojo.Color.  Colors can be denoted in the following formats:R, G, B:  new dojo.Color([255,0,0]) R,G,B,A.  The "A" value represents transparency where 0.0 is fully transparent and 1.0 has no transparency: new dojo.Color([255,0,0,0.25]) Hex string: new dojo.Color("#C0C0C0") Named string:  new dojo.Color("blue") </param>
    /// <param name="json" type="Object" optional="false">JSON object representing the TextSymbol. View the REST API Reference for Symbol Objects for details on creating a JSON symbol. Note that when specifying symbol width and height using JSON the values should be entered in points, the JavaScript API then converts the point values to pixels.</param>
    /// <field name="xoffset" type="Number">The offset on the x-axis in pixels from the point.</field>
    /// <field name="yoffset" type="Number">The offset on the y-axis in pixels from the point.</field>
    /// <field name="align" type="String">The text alignment in relation to the point. See the Constants table for valid values.</field>
    /// <field name="angle" type="Number">Text angle. 0 is horizontal and the angle moves clockwise.</field>
    /// <field name="decoration" type="String">The decoration on the text. See the Constants table for valid values.</field>
    /// <field name="font" type="Font">Font for displaying text.</field>
    /// <field name="text" type="String">Text string for display in the graphics layer.</field>
    /// <field name="kerning" type="Boolean">Determines whether to adjust the spacing between characters in the text string. Known Values: true | false</field>
    /// <field name="rotated" type="Boolean">Determines whether every character in the text string is rotated. Known Values: true | false</field>
};
esri.symbol.TextSymbol.prototype =
{
    setAlign: function (align) {
        /// <summary>Sets the alignment of the text.</summary>
        /// <param name="align" type="String" optional="false">The text alignment. See the Constants table for valid values.</param>
        /// <return type="TextSymbol">TextSymbol</return>
    },
    setAngle: function (angle) {
        /// <summary>Sets the angle of the text.</summary>
        /// <param name="angle" type="Number" optional="false">Angle value between 0 and 359.</param>
        /// <return type="TextSymbol">TextSymbol</return>
    },
    setDecoration: function (decoration) {
        /// <summary>Sets the decoration for the text. Many browsers including Internet Explorer 7, Firefox and Opera 9 do not support the decoration properties for text symbols.</summary>
        /// <param name="decoration" type="String" optional="false">The decoration on the text. See the Constants table for valid values.</param>
        /// <return type="TextSymbol">TextSymbol</return>
    },
    setFont: function (font) {
        /// <summary>Sets the text font.</summary>
        /// <param name="font" type="Font" optional="false">Text font.</param>
        /// <return type="TextSymbol">TextSymbol</return>
    },
    setKerning: function (kerning) {
        /// <summary>Sets whether to adjust the spacing between characters in the text string.</summary>
        /// <param name="kerning" type="Boolean" optional="false">Set to true for kerning.</param>
        /// <return type="TextSymbol">TextSymbol</return>
    },
    setOffset: function (x,y) {
        /// <summary>Sets the x and y offset of the text.</summary>
        /// <param name="x" type="Number" optional="false">X offset value in pixels.</param>
        /// <param name="y" type="Number" optional="false">Y offset value in pixels.</param>
        /// <return type="TextSymbol">TextSymbol</return>
    },
    setRotated: function (rotated) {
        /// <summary>Sets whether every character in the text string is rotated. Many browsers including Internet Explorer 7, Firefox and Opera 9 do not support rotated for text symbols.</summary>
        /// <param name="rotated" type="Boolean" optional="false">Set to true to rotate all characters in the string.</param>
        /// <return type="TextSymbol">TextSymbol</return>
    },
    setText: function (text) {
        /// <summary>Sets the text string.</summary>
        /// <param name="text" type="String" optional="false">The text string.</param>
        /// <return type="TextSymbol">TextSymbol</return>
    },

};
esri.symbol.Font = function (size,style,variant,weight,family,json) {
    /// <summary>Creates a new Font object.</summary>
    /// <param name="size" type="Number" optional="false">Font size.</param>
    /// <param name="style" type="String" optional="false">Font style.  See Constants table for values.</param>
    /// <param name="variant" type="String" optional="false">Font variant.  See Constants table for values.</param>
    /// <param name="weight" type="String" optional="false">Font weight.  See Constants table for values.</param>
    /// <param name="family" type="String" optional="false">Font family.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the font.</param> = function (size,style,variant,weight,family,json) {
    /// <summary>Creates a new Font object using a JSON object.</summary>
    /// <param name="size" type="Number" optional="false">Font size.</param>
    /// <param name="style" type="String" optional="false">Font style.  See Constants table for values.</param>
    /// <param name="variant" type="String" optional="false">Font variant.  See Constants table for values.</param>
    /// <param name="weight" type="String" optional="false">Font weight.  See Constants table for values.</param>
    /// <param name="family" type="String" optional="false">Font family.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the font.</param> = function (size,style,variant,weight,family,json) {
    /// <summary>Creates a new Font object.  This constructor takes no parameters.</summary>
    /// <param name="size" type="Number" optional="false">Font size.</param>
    /// <param name="style" type="String" optional="false">Font style.  See Constants table for values.</param>
    /// <param name="variant" type="String" optional="false">Font variant.  See Constants table for values.</param>
    /// <param name="weight" type="String" optional="false">Font weight.  See Constants table for values.</param>
    /// <param name="family" type="String" optional="false">Font family.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the font.</param>
    /// <field name="size" type="String">Font size. Values can be in "pt", "px", "em", and "%".  For example: "12pt", "12px", ".8em", "80%"</field>
    /// <field name="style" type="String">Text style.  See the Constants table for valid values.</field>
    /// <field name="variant" type="String">Text variant.  See the Constants table for valid values.</field>
    /// <field name="weight" type="String">Text weight.  See the Constants table for valid values.</field>
    /// <field name="family" type="String">Font family.</field>
};
esri.symbol.Font.prototype =
{
    setSize: function (size) {
        /// <summary>Sets the font size.</summary>
        /// <param name="size" type="String" optional="false">Font size in points.</param>
        /// <return type="Font">Font</return>
    },
    setStyle: function (style) {
        /// <summary>Sets the font style.</summary>
        /// <param name="style" type="String" optional="false">Font style.  See the Constants table for valid values.</param>
        /// <return type="Font">Font</return>
    },
    setVariant: function (variant) {
        /// <summary>Sets the font variant.</summary>
        /// <param name="variant" type="String" optional="false">Font variant.  See the Constants table for valid values.</param>
        /// <return type="Font">Font</return>
    },
    setWeight: function (weight) {
        /// <summary>Sets the font weight.</summary>
        /// <param name="weight" type="String" optional="false">Font weight.  See the Constants table for valid values.</param>
        /// <return type="Font">Font</return>
    },
    setFamily: function (family) {
        /// <summary>Sets the font family. The font family property does not work in Internet Explorer 7; Arial is always used.</summary>
        /// <param name="family" type="String" optional="false">Font family.</param>
        /// <return type="Font">Font</return>
    },

};
esri.tasks = function () {
    /// <summary>esri - tasks</summary>
};
esri.tasks.AddressCandidate = function () {
    /// <summary>Represents an address and its location.  AddressCandidate has no constructor.</summary>
    /// <field name="address" type="Object">Address of the candidate. It contains one property for each of the address fields defined by a geocode service. Each address field describes some part of the address information for the candidate.</field>
    /// <field name="location" type="Point">X- and y-coordinate of the candidate.</field>
    /// <field name="score" type="Number">Numeric score between 0 and 100 for geocode candidates. A candidate with a score of 100 means a perfect match, and 0 means no match.</field>
    /// <field name="attributes" type="Object">Name value pairs of field name and field value as defined in outFields in Locator.addressToLocations.</field>
};
esri.tasks.AddressCandidate.prototype =
{

};
esri.tasks.DataFile = function () {
    /// <summary>Creates a new DataFile object.  The constructor takes no parameters.</summary>
    /// <field name="url" type="String">URL to the location of the data file.</field>
    /// <field name="itemID" type="String">The ID of the uploaded file returned as a result of the upload operation. For ArcGIS Server 10.1 and greater services that support uploads this class can be used to specify an uploaded item as input by specifying the ItemID.</field>
};
esri.tasks.DataFile.prototype =
{

};
esri.tasks.FindParameters = function () {
    /// <summary>Creates a new FindParameters object.  The constructor takes no parameters.</summary>
    /// <field name="contains" type="Boolean">The contains parameter determines whether to look for an exact match of the search text or not. If true, searches for a value that contains the searchText provided.This is a case-insensitive search. If false, searches for an exact match of the searchText string. The exact match is case-sensitive. Known Values: true | false</field>
    /// <field name="layerIds" type="Number[]">The layers to perform the find operation on. The layers are specified as a comma-separated list of layer ids.  The list of ids is returned in ArcGISMapServiceLayer layerInfos.</field>
    /// <field name="outSpatialReference" type="SpatialReference">The spatial reference of the output geometries. If outSR is not specified, the output geometries are returned in the spatial reference of the map.  See Projected Coordinate Systems and Geographic Coordinate Systems for the list of supported spatial references.</field>
    /// <field name="returnGeometry" type="Boolean">If "true", the result set include the geometry associated with each result. The default is "false". Known Values: true | false</field>
    /// <field name="searchFields" type="String[]">The names of the fields of a layer to search. The fields are specified as a comma-separated list of field names. If this parameter is not specified, all fields are searched.</field>
    /// <field name="searchText" type="String">The search string text that is searched across the layers and the fields as specified in the layers and searchFields parameters.</field>
    /// <field name="layerDefinitions" type="String[]">Array of layer definition expressions that allows you to filter the features of individual layers.  Layer definitions with semicolons or colons are supported at version 2.0 if using a map service published using ArcGIS Server 10.</field>
    /// <field name="maxAllowableOffset" type="Number">The maximum allowable offset used for generalizing geometries returned by the find operation. The offset is in the units of the spatialReference. If a spatialReference is not defined the spatial reference of the map is used.</field>
    /// <field name="dynamicLayerInfos" type="DynamicLayerInfos[]">An array of DynamicLayerInfos used to change the layer ordering or redefine the map. When set the find operation will perform the find against the dynamic layers.</field>
};
esri.tasks.FindParameters.prototype =
{

};
esri.tasks.FindTask = function (url,options) {
    /// <summary>Creates a new FindTask object.  A URL is a required parameter.</summary>
    /// <param name="url" type="String" optional="false">URL to the ArcGIS Server REST resource that represents a layer in a service.  An example is http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Portland/Portland_ESRI_LandBase_AGO/MapServer/1.  For more information on constructing a URL, see The Services Directory and the REST API.</param>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  See options list.&#10;
    /// String gdbVersion</param>
    /// <field name="url" type="String">URL to the ArcGIS Server REST resource that represents a map service. To obtain the URL, use Services Directory.</field>
};
esri.tasks.FindTask.prototype =
{
    execute: function (findParameters,callback,errback) {
        /// <summary>Sends a request to the ArcGIS REST map service resource to perform a search based on the FindParameters specified in the findParameters argument. On completion, the onComplete event is fired and the optional callback function is invoked.</summary>
        /// <param name="findParameters" type="FindParameters" optional="false">Specifies the layers and fields that are used to search against.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution. (As of v1.3) </param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },

};
esri.tasks.Geoprocessor = function (url) {
    /// <summary>Creates a new Geoprocessor object that represents the GP Task identifed by a URL.</summary>
    /// <param name="url" type="String" optional="false">URL to the ArcGIS Server REST resource that represents a geoprocessing service.  An example is http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Network.  For more information on constructing a URL, see The Services Directory and the REST API.</param>
    /// <field name="updateDelay" type="Number">The time interval in milliseconds between each job status request sent to an asynchronous GP task.</field>
    /// <field name="url" type="String">ArcGIS Server Rest API endpoint to the resource that receives the geoprocessing request.</field>
    /// <field name="processSpatialReference" type="SpatialReference">The spatial reference that the model will use to perform geometry operations. If processSpatialReference is specified and outputSpatialReference is not specified, the output geometries are in the spatial reference of the process spatial reference.  See Projected Coordinate Systems and Geographic Coordinate Systems for the list of supported spatial references.</field>
    /// <field name="outputSpatialReference" type="SpatialReference">Deprecated at v2.0.  Use outSpatialReference instead.</field>
    /// <field name="outSpatialReference" type="SpatialReference">The spatial reference of the output geometries. If not specified, the output geometries are in the spatial reference of the input geometries. If processSpatialReference is specified and outSpatialReference is not specified, the output geometries are in the spatial reference of the process spatial reference.  See Projected Coordinate Systems and Geographic Coordinate Systems for the list of supported spatial references.</field>
};
esri.tasks.Geoprocessor.prototype =
{
    cancelJobStatusUpdates: function (jobId) {
        /// <summary>Cancels the periodic job status updates initiated automatically when submitJob() is invoked for the job identified by jobId. You can still obtain the status of this job by calling the checkStatus() method at your own discretion.</summary>
        /// <param name="jobId" type="String" optional="false">A string that uniquely identifies the job for which the job updates are cancelled.</param>
    },
    checkJobStatus: function (jobId,callback,errback) {
        /// <summary>Sends a request to the GP Task for the current state of the job identified by jobId. Upon receiving the response, the onStatusUpdate event is fired and the optional callback function is invoked.</summary>
        /// <param name="jobId" type="String" optional="false">A string that uniquely identifies a job on the server.  It is created when a job is submitted for execution and later used to check its status and retrieve the results.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onStatusUpdate event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution. (As of v1.3) </param>
    },
    execute: function (inputParameters,callback,errback) {
        /// <summary>Sends a request to the server to execute a synchronous GP task. On completion, the onExecuteComplete event is fired and the optional callback function is invoked.</summary>
        /// <param name="inputParameters" type="Object" optional="false">The inputParameters argument specifies the input parameters accepted by the task and their corresponding values. These input parameters are listed in the parameters field of the associated GP Task resource. For example, assume that a GP Task resource has the following input parameters: Input_Points (GPFeatureRecordSetLayer)Distance (GPDouble)The parameters argument for the above inputs is a data object of the form: { Input_Points: &lt;FeatureSet>, Distance: &lt;Number>}</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onExecuteComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution. (As of v1.3) </param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    getResultData: function (jobId,parameterName,callback,errback) {
        /// <summary>Sends a request to the GP Task to get the task result identified by jobId and resultParameterName. On completion, the getresultdatacomplete event will be fired and the optional callback function will be invoked.</summary>
        /// <param name="jobId" type="String" optional="false">The jobId returned from JobInfo.</param>
        /// <param name="parameterName" type="String" optional="false">The name of the result parameter as defined in Services Directory.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onGetResultDataComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution. (As of v1.3) </param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    getResultImage: function (jobId,parameterName,imageParameters,callback,errback) {
        /// <summary>Sends a request to the GP Task to get the task result identified by jobId and resultParameterName as an image.</summary>
        /// <param name="jobId" type="String" optional="false">The jobId returned from JobInfo.</param>
        /// <param name="parameterName" type="String" optional="false">The name of the result parameter as defined in Services Directory.</param>
        /// <param name="imageParameters" type="ImageParameters" optional="false">Specifies the properties of the result image.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onGetResultImageComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution. (As of v1.3) </param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    getResultImageLayer: function (jobId,parameterName,imageParameters,callback,errback) {
        /// <summary>Sends a request to the GP Task to get the task result identified by jobId and resultParameterName as an ArcGISDynamicMapServiceLayer.</summary>
        /// <param name="jobId" type="String" optional="false">The jobId returned from JobInfo.</param>
        /// <param name="parameterName" type="String" optional="false">The name of the result parameter as defined in Services Directory.</param>
        /// <param name="imageParameters" type="ImageParameters" optional="false">Contains various options that can be specified when generating a dynamic map image.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onGetResultImageLayerComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution. (As of v1.3) </param>
    },
    submitJob: function (inputParameters,callback,statusCallback,errback) {
        /// <summary>Submits a job to the server for asynchronous processing by the GP task. Once the job is submitted and until it is completed, the onStatusUpdate event is fired and the optional statusCallback() function is invoked at regular intervals, the duration of which is specified by the updateDelay property. Upon completion of the job, the onJobComplete event is fired and the optional callback function is invoked. The task execution results can be retrieved using getResultData(), getResultImage() or getResultImageLayer() methods.</summary>
        /// <param name="inputParameters" type="Object" optional="false">The inputParameters argument specifies the input parameters accepted by the task and their corresponding values. These input parameters are listed in the parameters field of the associated GP Task resource. For example, assume that a GP Task resource has the following input parameters: Input_Points (GPFeatureRecordSetLayer)Distance (GPDouble)The parameters argument for the above inputs is a data object of the form: { Input_Points: &lt;FeatureSet>, Distance: &lt;Number>}</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onJobComplete event.</param>
        /// <param name="statusCallback" type="Function" optional="true">Checks the current status of the job.  The returned JobInfo message includes the status along with the GPMessage.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution. (As of v1.3) </param>
    },
    setUpdateDelay: function (delay) {
        /// <summary>Sets the time interval in milliseconds between each job status request sent to an asynchronous GP task.</summary>
        /// <param name="delay" type="Number" optional="false">The value in milliseconds.  One second equals 1000 milliseconds.</param>
    },
    setProcessSpatialReference: function (spatialReference) {
        /// <summary>Sets the well-known ID of the spatial reference that the model uses to perform geometry operations.</summary>
        /// <param name="spatialReference" type="SpatialReference" optional="false">The well-known ID of a spatial reference. {"wkid" : 4326} </param>
    },
    setOutputSpatialReference: function (spatialReference) {
        /// <summary>Deprecated at v2.0.  Use setOutSpatialReference instead.</summary>
        /// <param name="spatialReference" type="SpatialReference" optional="false">The well-known ID of a spatial reference. {"wkid" : 4326} </param>
    },
    setOutSpatialReference: function (spatialReference) {
        /// <summary>Sets the well-known ID of the spatial reference of the output geometries.</summary>
        /// <param name="spatialReference" type="SpatialReference" optional="false">The well-known ID of a spatial reference. {"wkid" : 4326} </param>
    },
    cancelJob: function (jobId,callback,errback) {
        /// <summary>Cancel an asynchronous geoprocessing job. Requires an ArcGIS Server 10.1 service or greater.</summary>
        /// <param name="jobId" type="String" optional="false">A string that uniquely identifies a job on the server. It is created when a job is submitted for execution and later used to check its status and retrieve the results.</param>
        /// <param name="callback" type="Function" optional="false">The function to call when the method has completed.  The arguments in the function are the same as the onJobCancel event.</param>
        /// <param name="errback" type="Function" optional="false">An error object is returned if an error occurs during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },

};
esri.tasks.IdentifyParameters = function () {
    /// <summary>Creates a new IdentifyParameters object.  The constructor takes no parameters.</summary>
    /// <field name="geometry" type="Geometry">The geometry used to select features during Identify. The type of the geometry is specified by Geometry type. The most common geometry used with Identify is a Point.</field>
    /// <field name="layerIds" type="Number[]">The layers to perform the identify operation on. The layers are specified as a comma-separated list of layer ids.  The list of ids is returned in ArcGISMapServiceLayer layerInfos.</field>
    /// <field name="mapExtent" type="Extent">The Extent or bounding box of the map currently being viewed. The mapExtent property is assumed to be in the spatial reference of the map unless sr has been specified.The values for mapExtent, height, width, and dpi are used to determine the current map scale. Once the scale is known, the map service can exclude layers based on their scale dependency settings. The map service is not performing a spatial intersection based on the provided extent. These properties are also used to calculate the search distance on the map based on the tolerance in screen pixels.</field>
    /// <field name="returnGeometry" type="Boolean">If "true", the result set includes the geometry associated with each result.  The default is "false". Known Values: true | false</field>
    /// <field name="spatialReference" type="SpatialReference">The spatial reference of the input and output geometries as well as of the mapExtent. If the spatial reference is not specified, the geometry and the extent are assumed to be in the spatial reference of the map, and the output geometries will also be in the spatial reference of the map.  See Projected Coordinate Systems and Geographic Coordinate Systems for the list of supported spatial references.</field>
    /// <field name="tolerance" type="Number">The distance in screen pixels from the specified geometry within which the identify should be performed.</field>
    /// <field name="layerOption" type="String">Specifies which layers to use when using Identify.  See the Constants table for valid values.</field>
    /// <field name="height" type="Number">Height of the map currently being viewed in pixels.</field>
    /// <field name="width" type="Number">Width of the map currently being viewed in pixels.</field>
    /// <field name="dpi" type="Number">Resolution of the current map view in dots per inch.</field>
    /// <field name="layerDefinitions" type="String[]">Array of layer definition expressions that allows you to filter the features of individual layers. Layer definitions with semicolons or colons are supported at version 2.0 if using a map service published using ArcGIS Server 10.</field>
    /// <field name="maxAllowableOffset" type="Number">The maximum allowable offset used for generalizing geometries returned by the identify operation.  The offset is in the units of the spatialReference. If a spatialReference is not defined the spatial reference of the map is used.</field>
    /// <field name="timeExtent" type="TimeExtent">Specify the time extent used by the identify task.</field>
    /// <field name="layerTimeOptions" type="LayerTimeOptions[]">Array of LayerTimeOptions objects that allow you to define time options for the specified layers. There is one object per sub-layer.</field>
    /// <field name="dynamicLayerInfos" type="DynamicLayerInfos[]">An array of DynamicLayerInfos used to change the layer ordering or redefine the map. When set the Identify operation will perform the identify against the dynamic layers.</field>
};
esri.tasks.IdentifyParameters.prototype =
{

};
esri.tasks.FindResult = function () {
    /// <summary>Represents a result of a find operation. FindResult has no constructor.</summary>
    /// <field name="displayFieldName" type="String">The name of the layer's primary display field. The value of this property matches the name of one of the fields of the feature.</field>
    /// <field name="feature" type="Graphic">The found feature.</field>
    /// <field name="foundFieldName" type="String">The name of the field that contains the search text.</field>
    /// <field name="layerId" type="Number">Unique ID of the layer that contains the feature.</field>
    /// <field name="layerName" type="String">The layer name that contains the feature.</field>
};
esri.tasks.FindResult.prototype =
{

};
esri.tasks.FeatureSet = function (json) {
    /// <summary>Creates a new FeatureSet object.  The constructor takes no parameters.</summary>
    /// <param name="json" type="Object" optional="false">A JSON object that contains feature set.</param> = function (json) {
    /// <summary>Creates a new FeatureSet object using a JSON object.</summary>
    /// <param name="json" type="Object" optional="false">A JSON object that contains feature set.</param>
    /// <field name="displayFieldName" type="String">The name of the layer's primary display field. The value of this property matches the name of one of the fields of the feature.  Only applicable when the FeatureSet is returned from a task.  It is ignored when the FeatureSet is used as input to a geoprocessing task.</field>
    /// <field name="features" type="Graphic[]">The array of graphics returned.</field>
    /// <field name="fieldAliases" type="Object">Set of name-value pairs for the attribute's field and alias names.</field>
    /// <field name="geometryType" type="String">The geometry type of the FeatureSet.</field>
    /// <field name="spatialReference" type="SpatialReference">When a FeatureSet is used as input to Geoprocessor, the spatial reference is set to the map's spatial reference by default.  This value can be changed.  When a FeatureSet is returned from a task, the value is the result as returned from the server.  See Projected Coordinate Systems and Geographic Coordinate Systems for the list of supported spatial references.</field>
    /// <field name="exceededTransferLimit" type="Number">Typically a layer has a limit on the number of features (i.e. records) returned by the query operation see FeatureLayer.maxRecordCount property. If maxRecordCount is configured for a layer, exceededTransferLimit will be true if a query matches more than the maxRecordCount features false otherwise.Supported by ArcGIS Server version 10.1 and later.</field>
};
esri.tasks.FeatureSet.prototype =
{

};
esri.tasks.IdentifyResult = function () {
    /// <summary>Represents a result of an identify operation.  IdentifyResult has no constructor.</summary>
    /// <field name="displayFieldName" type="String">The name of the layer's primary display field. The value of this property matches the name of one of the fields of the feature.</field>
    /// <field name="feature" type="Graphic">An identified feature.</field>
    /// <field name="layerId" type="Number">Unique ID of the layer that contains the feature.</field>
    /// <field name="layerName" type="String">The layer name that contains the feature.</field>
};
esri.tasks.IdentifyResult.prototype =
{

};
esri.tasks.IdentifyTask = function (url,options) {
    /// <summary>Creates a new IdentifyTask object.   A URL is a required parameter.</summary>
    /// <param name="url" type="String" optional="false">URL to the ArcGIS Server REST resource that represents a map service.  An example is http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Portland/Portland_ESRI_LandBase_AGO/MapServer.  For more information on constructing a URL, see The Services Directory and the REST API.</param>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  See options list.&#10;
    /// String gdbVersion</param>
    /// <field name="url" type="String">URL to the ArcGIS Server REST resource that represents a map service. To obtain the URL, use Services Directory.</field>
};
esri.tasks.IdentifyTask.prototype =
{
    execute: function (identifyParameters,callback,errback) {
        /// <summary>Sends a request to the ArcGIS REST map service resource to identify features based on the IdentifyParameters specified in the identifyParameters argument. On completion, the onComplete event is fired and the optional callback function is invoked.</summary>
        /// <param name="identifyParameters" type="IdentifyParameters" optional="false">Specifies the criteria used to identify the features.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution. (As of v1.3) </param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },

};
esri.tasks.JobInfo = function () {
    /// <summary>Represents information pertaining to the execution of an asynchronous GP task on the server.  JobInfo has no constructor.</summary>
    /// <field name="jobId" type="String">The unique job ID assigned by ArcGIS Server.</field>
    /// <field name="messages" type="GpMessage[]">An array of messages that include the message type and a description.</field>
    /// <field name="jobStatus" type="String">The job status.  Returned values are included in the Constants table.</field>
};
esri.tasks.JobInfo.prototype =
{

};
esri.tasks.LinearUnit = function () {
    /// <summary>Creates a new LinearUnit object.  The constructor takes no parameters.</summary>
    /// <field name="distance" type="Number">Specifies the value of the linear distance.</field>
    /// <field name="units" type="String">Specifies the unit type of the linear distance, such as "esriMeters", "esriMiles", "esriKilometers" etc.</field>
};
esri.tasks.LinearUnit.prototype =
{

};
esri.tasks.Locator = function (url) {
    /// <summary>Creates a new Locator object.</summary>
    /// <param name="url" type="String" optional="false">URL to the ArcGIS Server REST resource that represents a locator service.  An example is http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Locators/ESRI_Geocode_USA/GeocodeServer.  For more information on constructing a URL, see The Services Directory and the REST API.</param>
    /// <field name="url" type="String">URL to the ArcGIS Server REST resource that represents a locator service. To obtain the URL, use Services Directory.</field>
    /// <field name="outSpatialReference" type="SpatialReference">The spatial reference of the output geometries. If not specified, the output geometries are in the spatial reference of the input geometries. If processSpatialReferencew is specified and outSpatialReference is not specified, the output geometries are in the spatial reference of the process spatial reference.  See Projected Coordinate Systems and Geographic Coordinate Systems for the list of supported spatial references.</field>
};
esri.tasks.Locator.prototype =
{
    addressToLocations: function (params,callback,errback) {
        /// <summary>Sends a request to the ArcGIS REST geocode resource to find candidates for a single address specified in the address argument. On completion, the onAddressToLocationsComplete event is fired and the optional callback function is invoked.</summary>
        /// <param name="params" type="Object" optional="false">Specify the address and optionally specify the outFields and searchExtent. The searchExtent parameter requires a locator published with ArcGIS Server 10.1 or greater.            &lt;Object&gt; address      Required      The address argument is data object that contains properties representing the various address fields accepted by the corresponding geocode service. These fields are listed in the addressFields property of the associated geocode service resource. For example, if the addressFields of a geocode service resource includes fields with the following names: Street, City, State and Zone, then the address argument is of the form:                                                        {  Street: "&lt;street&gt;",  City: "&lt;city&gt;",  State: "&lt;state&gt;",  Zone: "&lt;zone&gt;"}Locators published using ArcGIS 10 or later support a single line address field which can be specified using the following syntax:var address = {"Single Line Input":"380 New York St, Redlands, CA 92373"};Services Directory can be used to find out the required and optional address fields.            &lt;String[]&gt; outFields    Optional    The list of fields included in the returned result set. This list is a comma delimited list of field names. If you specify the shape field in the list of return fields, it is ignored. For non-intersection addresses you can specify the candidate fields as defined in the geocode service. For intersection addresses you can specify the intersection candidate fields.              &lt;Extent&gt; searchExtent      Optional      Defines the extent within which the geocode server will search. Requires ArcGIS Server version 10.1 or greater.            </param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onAddressToLocationsComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution. (As of v1.3) </param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    locationToAddress: function (location,distance,callback,errback) {
        /// <summary>Locates an address based on a given point.</summary>
        /// <param name="location" type="Point" optional="false">The point at which to search for the closest address. The location should be in the same spatial reference as that of the geocode service.</param>
        /// <param name="distance" type="Number" optional="false">The distance in meters from the given location within which a matching address should be searched. If this parameter is not provided or an invalid value is provided, a default value of 0 meters is used.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onLocationToAddressComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution. (As of v1.3) </param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    setOutSpatialReference: function (spatialReference) {
        /// <summary>Sets the well-known ID of the spatial reference of the output geometries.</summary>
        /// <param name="spatialReference" type="SpatialReference" optional="false">The well-known ID of a spatial reference. {"wkid" : 4326} </param>
    },
    addressesToLocations: function (params,callback,errback) {
        /// <summary>Find address candidates for the input addresses. This method requires an ArcGIS Server 10.1 or greater geocode service.</summary>
        /// <param name="params" type="Object" optional="false">The input addresses in the format supported by the geocoding service. If the service supports 'Single Line Input' the input addresses will be in the following format:        &lt;Array> addresses      The input addresses in the format supported by the geocode service. If the service supports 'Single Line Input' the input addresses will be in the following format:      {    "OBJECTID": 0,    "Single Line Input":"440 Arguello Blvd, 94118"    }        </param>
        /// <param name="callback" type="Function" optional="false">The function to call when the method has completed.  The arguments in the function are the same as the onAddressesToLocationsComplete event.</param>
        /// <param name="errback" type="Function" optional="false">The function to call if an error occurs on the server during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },

};
esri.tasks.ParameterValue = function () {
    /// <summary>Represent the output parameters of a GP task and their properties and values.  ParameterValue has no constructor.</summary>
    /// <field name="dataType" type="String">Specifies the type of data for the parameter. It can have one of the following values: "GPString", "GPDouble", "GPLong", "GPBoolean", "GPDate", "GPLinearUnit", "GPDataFile", "GPRasterData", "GPRecordSet", "GPRasterDataLayer", "GPFeatureRecordSetLayer","GPMultiValue".</field>
    /// <field name="paramName" type="String">Unique name of the parameter.</field>
    /// <field name="value" type="Object">The value of the parameter. The data structure of this value depends on the dataType.</field>
};
esri.tasks.ParameterValue.prototype =
{

};
esri.tasks.Query = function () {
    /// <summary>Creates a new Query  object used to execute a query on the layer resource identified by the URL.</summary>
    /// <field name="outFields" type="String[]">Attribute fields to include in the FeatureSet.  Fields must exist in the map layer.  You must list the actual field names rather than the alias names.  Returned fields are also the actual field names.  However, you are able to use the alias names when you display the results. You can set field alias names in the map document.  When you specify the output fields, you should limit the fields to only those you expect to use in the query or the results.  The fewer fields you include, the faster the response will be. Each query must have access to the Shape and ObjectId fields for a layer, but your list of fields does not need to include these two fields.</field>
    /// <field name="outSpatialReference" type="SpatialReference">The spatial reference for the returned geometry. If not specified, the geometry is returned in the spatial reference of the map.  See Projected Coordinate Systems and Geographic Coordinate Systems for the list of supported spatial references.</field>
    /// <field name="geometry" type="Geometry">The geometry to apply to the spatial filter. The spatial relationship as specified by spatialRelationship is applied to this geometry while performing the query. The valid geometry types are Extent, Point,  Multipoint, Polyline, or Polygon. </field>
    /// <field name="returnGeometry" type="Boolean">If "true", each feature in the FeatureSet includes the geometry. Set to "false" (default) if you do not plan to include highlighted features on a map since the geometry makes up a significant portion of the response. Known Values: true | false</field>
    /// <field name="spatialRelationship" type="String">The spatial relationship to be applied on the input geometry while performing the query.  The valid values are listed in the Constants table.</field>
    /// <field name="text" type="String">Shorthand for a where clause using "like".  The field used is the display field defined in the map document.  You can determine what the display field is for a layer in Services Directory.</field>
    /// <field name="where" type="String">A where clause for the query.  Any legal SQL where clause operating on the fields in the layer is allowed.</field>
    /// <field name="objectIds" type="Number[]">A comma delimited list of ObjectIds for the features in the layer/table that you want to query.</field>
    /// <field name="timeExtent" type="TimeExtent">Specify a time extent for the query.</field>
    /// <field name="relationParam" type="String">The 'Shape Comparison Language' string to evaluate.</field>
    /// <field name="maxAllowableOffset" type="Number">The maximum allowable offset used for generalizing geometries returned by the query operation.  The offset is in the units of the spatialReference. If a spatialReference is not defined the spatial reference of the map is used.</field>
    /// <field name="orderByFields" type="String[]">One or more field names that will be used to order the query results.</field>
    /// <field name="outStatistics" type="StatisticDefinition[]">The definitions for one or more field-based statistic to be calculated.</field>
    /// <field name="groupByFieldsForStatistics" type="String[]">One or more field names that will be usedto  group the statistics.</field>
    /// <field name="geometryPrecision" type="Number">Specify the number of decimal places for the geometries returned by the query operation.</field>
};
esri.tasks.Query.prototype =
{

};
esri.tasks.QueryTask = function (url,options) {
    /// <summary>Creates a new QueryTask object used to execute a query on the layer resource identified by the url.</summary>
    /// <param name="url" type="String" optional="false">URL to the ArcGIS Server REST resource that represents a layer in a service.  An example is http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Portland/Portland_ESRI_LandBase_AGO/MapServer/1.  For more information on constructing a URL, see The Services Directory and the REST API.</param>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  See options list.&#10;
    /// LayerMapSource or LayerDataSource source&#10;
    /// String gdbVersion</param>
    /// <field name="url" type="String">URL to the ArcGIS Server REST resource that represents a map service layer. To obtain the URL, use Services Directory.</field>
};
esri.tasks.QueryTask.prototype =
{
    execute: function (parameters,callback,errback) {
        /// <summary>Executes a Query against an ArcGIS Server map layer. The result is returned as a FeatureSet.  If the query is successful, the user-specified callback function is invoked with the result. A FeatureSet contains an array of Graphic features, which can be added to the map using Map.graphics.add().  This array will not be populated if no results are found.</summary>
        /// <param name="parameters" type="Query" optional="false">Specifies the attributes and spatial filter of the query.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution. (As of v1.3) </param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    executeForIds: function (parameters,callback,errback) {
        /// <summary>Executes a Query against an ArcGIS Server map layer. The result is returned as a FeatureSet.  If the query is successful, the user-specified callback function is invoked with the result. A FeatureSet contains an array of Graphic features, which can be added to the map using Map.graphics.add().  This array will not be populated if no results are found.</summary>
        /// <param name="parameters" type="Query" optional="false">Specifies the attributes and spatial filter of the query.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onExecuteForIdsComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    executeRelationshipQuery: function (parameters,callback,errback) {
        /// <summary>Executes a Query against an ArcGIS Server map layer. The result is returned as a FeatureSet.  If the query is successful, the user-specified callback function is invoked with the result. A FeatureSet contains an array of Graphic features, which can be added to the map using Map.graphics.add().  This array will not be populated if no results are found.</summary>
        /// <param name="parameters" type="Query" optional="false">Specifies the attributes and spatial filter of the query.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onExecuteRelationshipQueryComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    executeForCount: function (query,callback,errback) {
        /// <summary>Get a count of the number of features that satisfy the input query.  Valid only for layers published using ArcGIS Server 10 SP1 or greater. Layers published with earlier versions of ArcGIS Server return an error to the error callback.</summary>
        /// <param name="query" type="Query" optional="false">Specify the input query object.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onExecuteForCountComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution. (As of v1.3) </param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },

};
esri.tasks.RasterData = function () {
    /// <summary>Creates a new RasterData object.  The constructor takes no parameters.</summary>
    /// <field name="format" type="String">Specifies the format of the raster data such as "jpg", "tif" etc.</field>
    /// <field name="url" type="String">URL to the location of the raster data file.</field>
    /// <field name="itemID" type="String">The ID of the uploaded file returned as a result of the upload operation. For ArcGIS Server 10.1 and greater services that support uploads this class can be used to specify an uploaded item as input by specifying the ItemID.</field>
};
esri.tasks.RasterData.prototype =
{

};
esri.tasks.GeometryService = function (url) {
    /// <summary>Creates a new GeometryService object.  A URL is a required parameter.</summary>
    /// <param name="url" type="String" optional="false">Set the url to the ArcGIS Server REST resource that represents a GeometryService, e.g. http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer.For more information on constructing a URL, see the ArcGIS Services Directory.</param>
    /// <field name="url" type="String">URL to the ArcGIS Server REST resource that represents a locator service. To obtain the URL, use Services Directory.</field>
};
esri.tasks.GeometryService.prototype =
{
    project: function (params,callback,errback) {
        /// <summary>Projects a set of geometries into a new spatial reference. On completion, the onProjectComplete event is fired and the optional callback function is invoked. Both the callback and event handlers receive an array that contains the projected geometries.</summary>
        /// <param name="params" type="ProjectParameters" optional="false">The input projection parameters.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onProjectComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution. (As of v1.3) </param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    simplify: function (geometries,callback,errback) {
        /// <summary>Alters the given geometries to make their definitions topologically legal with respect to their geometry type. On completion, the onSimplifyComplete event is fired and the optional callback function is invoked. Both the callback and event handlers receive an array of Graphic that contains the simplified geometries.</summary>
        /// <param name="geometries" type="Geometry[]" optional="false">The geometries to simplify</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onSimplifyComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution. (As of v1.3) </param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    buffer: function (bufferParameters,callback,errback) {
        /// <summary>Creates buffer polygons at a specified distance around the given geometries. On completion, the onBufferComplete event is fired and the optional callback function is invoked. Both the callback and event handlers receive an array of Geometry that contains the buffer polygons.</summary>
        /// <param name="bufferParameters" type="BufferParameters" optional="false">Specifies the input geometries, buffer distances, and other options.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onBufferComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution. (As of v1.3) </param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    areasAndLengths: function (areasAndLengthsParameters,callback,errback) {
        /// <summary>Computes the area and length for the input polygons.</summary>
        /// <param name="areasAndLengthsParameters" type="AreasAndLengthsParameters" optional="false">Specify the input polygons and optionally the linear and areal units.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onAreasAndLengthsComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution. (As of v1.3) </param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    lengths: function (lengthsParameter,callback,errback) {
        /// <summary>Gets the lengths for a Geometry[] when the geometry type is Polyline.</summary>
        /// <param name="lengthsParameter" type="LengthsParameters" optional="false">Specify the polylines and optionally the length unit and the geodesic length option.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onLengthsComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution. (As of v1.3) </param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    labelPoints: function (polygons,callback,errback) {
        /// <summary>Calculates an interior point for each polygon specified. These interior points can be used by clients for labeling the polygons.</summary>
        /// <param name="polygons" type="Geometry[]" optional="false">The graphics to process.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onLabelPointsComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution. (As of v1.3) </param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    autoComplete: function (polygons,polylines,callback,errback) {
        /// <summary>The Auto Complete operation is performed on a geometry service resource. The AutoComplete operation simplifies the process of constructing new polygons that are adjacent to other polygons. It constructs polygons that fill in the gaps between existing polygons and a set of polylines.</summary>
        /// <param name="polygons" type="Polygon[]" optional="false">The array of polygons that will provide some boundaries for new polygons.</param>
        /// <param name="polylines" type="Polyline[]" optional="false">An array of polylines that will provide the remaining boundaries for new polygons.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onAutoCompleteComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    convexHull: function (geometries,callback,errback) {
        /// <summary>The convexHull operation is performed on a geometry service resource. It returns the convex hull of the input geometry. The input geometry can be a point, multipoint, polyline or polygon. The hull is typically a polygon but can also be a polyline or point in degenerate cases.</summary>
        /// <param name="geometries" type="Geometry[]" optional="false">The geometries whose convex hull is to be created.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onConvexHullComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    cut: function (geometries,cutterGeometry,callback,errback) {
        /// <summary>The cut operation is performed on a geometry service resource. This operation splits the input polyline or polygon where it crosses a cutting polyline.</summary>
        /// <param name="geometries" type="Geometry[]" optional="false">The polyline or polygon to be cut.</param>
        /// <param name="cutterGeometry" type="Geometry" optional="false">The polyline that will be used to divide the target into pieces where it crosses the target.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onCutComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    difference: function (geometries,geometry,callback,errback) {
        /// <summary>The difference operation is performed on a geometry service resource. This operation constructs the set-theoretic difference between an array of geometries and another geometry.</summary>
        /// <param name="geometries" type="Geometry[]" optional="false">An array of points, multipoints, polylines or polygons.</param>
        /// <param name="geometry" type="Geometry" optional="false">A single geometry of any type, of dimension equal to or greater than the elements of geometries.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onDifferenceComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    intersect: function (geometries,geometry,callback,errback) {
        /// <summary>The intersect operation is performed on a geometry service resource. This operation constructs the set-theoretic intersection between an array of geometries and another geometry.</summary>
        /// <param name="geometries" type="Geometry[]" optional="false">An array of points, multipoints, polylines or polygons.</param>
        /// <param name="geometry" type="Geometry" optional="false">A single geometry of any type, of dimension equal to or greater than the elements of geometries.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onIntersectComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    reshape: function (targetGeometry,reshaperGeometry,callback,errback) {
        /// <summary>The reshape operation is performed on a geometry service resource. It reshapes a polyline or a part of a polygon using a reshaping line.</summary>
        /// <param name="targetGeometry" type="Geometry" optional="false">The polyline or polygon to be reshaped.</param>
        /// <param name="reshaperGeometry" type="Geometry" optional="false">The single-part polyline that does the reshaping.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onReshapeComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    union: function (geometries,callback,errback) {
        /// <summary>The union operation is performed on a geometry service resource. This operation constructs the set-theoretic union of the geometries in the input array. All inputs must be of the same type.</summary>
        /// <param name="geometries" type="Geometry[]" optional="false">The array of geometries to be unioned.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onUnionComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    relation: function (relationParameters,callback,errback) {
        /// <summary>Computes the set of pairs of geometries from the input geometry arrays that belong to the specified relation.</summary>
        /// <param name="relationParameters" type="RelationParameters" optional="false">The set of parameters required to perform the comparison.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onRelationComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    distance: function (params,callback,errback) {
        /// <summary>Measures the planar or geodesic distance between geometries.</summary>
        /// <param name="params" type="DistanceParameters" optional="false">Sets the input geometries to measure, distance units and other parameters.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onDistanceComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    generalize: function (params,callback,errback) {
        /// <summary>Generalizes the input geometries using the Douglas-Peucker algorithm.</summary>
        /// <param name="params" type="GeneralizeParameters" optional="false">An array of geometries to generalize and a maximum deviation. Optionally set the deviation units.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onGeneralizeComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    offset: function (params,callback,errback) {
        /// <summary>Constructs the offset of the input geometries.</summary>
        /// <param name="params" type="OffsetParameters" optional="false">Set the geometries to offset, distance and units.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onOffsetComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    trimExtend: function (params,callback,errback) {
        /// <summary>Trims or extend the input polylines.</summary>
        /// <param name="params" type="TrimExtendParameters" optional="false">Input parameters for the trimExtend operation.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onTrimExtendComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },

};
esri.tasks.GPMessage = function () {
    /// <summary>Represents a message generated during the execution of a geoprocessing task.  It includes information such as when the processing started, what parameter values are being used, the task progress, warnings of potential problems and errors.  It is composed of a message type and description.  GPMessage has no constructor.</summary>
    /// <field name="type" type="Number">The geoprocessing message type. It can have one of the following values: "esriJobMessageTypeInformative", "esriJobMessageTypeWarning", "esriJobMessageTypeError", "esriJobMessageTypeEmpty" and "esriJobMessageTypeAbort"</field>
    /// <field name="description" type="String">A description of the geoprocessing message.</field>
};
esri.tasks.GPMessage.prototype =
{

};
esri.tasks.BufferParameters = function () {
    /// <summary>Creates a new BufferParameters object.  The constructor takes no parameters.</summary>
    /// <field name="geometries" type="Geometry[]">The input geometries to buffer.</field>
    /// <field name="bufferSpatialReference" type="SpatialReference">The spatial reference in which the geometries are buffered. See Projected Coordinate Systems and Geographic Coordinate Systems for the list of supported spatial references. If bufferSpatialReference is not specified, the geometries are buffered in the spatial reference specified by outSpatialReference. If outSpatialReference is also not specified, they are buffered in the spatial reference of the features.</field>
    /// <field name="outSpatialReference" type="SpatialReference">The spatial reference for the returned geometries. See Projected Coordinate Systems and Geographic Coordinate Systems for the list of supported spatial references.If outSpatialReference is not specified, the output geometries are in the spatial reference specified by bufferSR. If bufferSpatialReference is also not specified, they are in the spatial reference of the features.</field>
    /// <field name="distances" type="Number[]">The distances the input features are buffered. The distance units are specified by unit.</field>
    /// <field name="unit" type="String">The units for calculating each buffer distance.  If unit is not specified, the units are derived from bufferSpatialReference. If bufferSpatialReference is not specified, the units are derived from the features.  See the Geometry service constants table for values.<!-- For a list of valid units, see esriSRUnitType Constants and esriSRUnit2Type Constants. --></field>
    /// <field name="unionResults" type="Boolean">If true, all geometries buffered at a given distance are unioned into a single (possibly multipart) polygon, and the unioned geometry is placed in the output array. Known Values: true | false</field>
    /// <field name="geodesic" type="Boolean">If the input geometries are in geographic coordinate system set geodesic to true in order to generate a buffer polygon using a geodesic distance. The bufferSpatialReference property is ignored when geodesic is set to true. Requires ArcGIS Server 10.1 or greater geometry service.</field>
};
esri.tasks.BufferParameters.prototype =
{

};
esri.tasks.Date = function () {
    /// <summary>Creates a new Date object.  This constructor takes no parameters.</summary>
    /// <field name="date" type="Date">Date value returned from server.</field>
    /// <field name="format" type="String">The format of the date used in the date property.  The format is EEE MMM dd HH:mm:ss zzz yyyy. For example, Mon Apr 28 13:31:28 PDT 2008.</field>
};
esri.tasks.Date.prototype =
{

};
esri.tasks.NAOutputLine = function () {
    /// <summary>Class added v1.4.   Constants representing how the geometry is returned.  NAOutputLine has no constructor.</summary>
};
esri.tasks.NAOutputLine.prototype =
{

};
esri.tasks.NAUTurn = function () {
    /// <summary>Class added v1.4.  Constants representing how U-Turns are handled.  NAUTurn has no constructor.</summary>
};
esri.tasks.NAUTurn.prototype =
{

};
esri.tasks.RouteParameters = function () {
    /// <summary>Creates a new RouteParameters object.</summary>
    /// <field name="accumulateAttributes" type="String[]">The list of network attribute names to be accumulated with the analysis, i.e. which attributes should be returned as part of the response.</field>
    /// <field name="barriers" type="Object">The set of point barriers loaded as network locations during analysis.</field>
    /// <field name="directionsLanguage" type="String">The language used when computing directions.</field>
    /// <field name="directionsLengthUnits" type="String">The length units to use when computing directions. Known Values: esriFeet | esriKilometers | esriMeters | esriMiles | esriNauticalMiles | esriYards</field>
    /// <field name="directionsTimeAttribute" type="String">The name of network attribute to use for the drive time when computing directions. The default is as defined in the specific routing network layer used in your RouteTask.</field>
    /// <field name="doNotLocateOnRestrictedElements" type="Boolean">If true, avoids network elements restricted by barriers or due to restrictions specified in restrictionAttributes. Known Values: true | false</field>
    /// <field name="findBestSequence" type="Boolean">If true, optimizes the order of the stops in the route while taking into account preserveFirstStop and preserveLastStop, if they are set to true. Known Values: true | false</field>
    /// <field name="ignoreInvalidLocations" type="Boolean">In routes where a stop is not located on a network or a stop could not be reached, the results will differ depending on the value of ignoreInvalidLocations. When false, the solve operation will fail if at least one of the stops specified cannot be located or reached.When true, as long as there are at least two valid stops that have been connected by a route, a valid result is returned.  If multiple routes are processed in a single request, as long as least one route is built, a valid result is returned.  The list of routes that cannot be solved is included in the message parameter of RouteTask.onSolveComplete. Known Values: true | false</field>
    /// <field name="impedanceAttribute" type="String">The network attribute name to be used as the impedance attribute in analysis. The default is as defined in the specific routing network layer used in your RouteTask.</field>
    /// <field name="outputLines" type="String">The type of output lines to be generated in the result. The default is as defined in the specific routing network layer used in your RouteTask. For possible values, see NAOutputLine.</field>
    /// <field name="outputGeometryPrecision" type="Number">The precision of the output geometry after generalization.</field>
    /// <field name="outputGeometryPrecisionUnits" type="String">The units of the output geometry precision. Known Values: esriUnknownUnits | esriCentimeters | esriDecimalDegrees | esriDecimeters | esriFeet | esriInches | esriKilometers | esriMeters | esriMiles | esriMillimeters | esriNauticalMiles | esriPoints | esriYards</field>
    /// <field name="outSpatialReference" type="SpatialReference">The well-known ID of the spatial reference for the geometries returned with the analysis results. If not specified, the geometries are returned in the spatial reference of the map.</field>
    /// <field name="preserveFirstStop" type="Boolean">If true, keeps the first stop fixed in the sequence even when findBestSequence is true. Only applicable if findBestSequence is true. Known Values: true | false</field>
    /// <field name="preserveLastStop" type="Boolean">If true, keeps the last stop fixed in the sequence even when findBestSequence is true. Only applicable if findBestSequence is true. Known Values: true | false</field>
    /// <field name="restrictionAttributes" type="String[]">The list of network attribute names to be used as restrictions with the analysis.</field>
    /// <field name="restrictUTurns" type="String">Specifies how U-Turns should be handled.</field>
    /// <field name="returnBarriers" type="Boolean">If true, barriers are returned as the second parameter of RouteTask.onSolveComplete. Known Values: true | false</field>
    /// <field name="returnDirections" type="Boolean">If true, directions are generated and returned in the directions property of each RouteResult.  For more information, see Getting driving directions. Known Values: true | false</field>
    /// <field name="returnRoutes" type="Boolean">If true, routes are generated and returned in the route property of each RouteResult. Known Values: true | false</field>
    /// <field name="returnStops" type="Boolean">If true, stops are returned in the stops property of each RouteResult. Known Values: true | false</field>
    /// <field name="startTime" type="Date">The time the route begins. If not specified, the default is the time specified in the route service.</field>
    /// <field name="stops" type="Object">The set of stops loaded as network locations during analysis.</field>
    /// <field name="useHierarchy" type="Boolean">If true, the hierarchy attribute for the network should be used in analysis. Known Values: true | false</field>
    /// <field name="useTimeWindows" type="Boolean">If true, time windows should be used in the analysis. Known Values: true | false</field>
    /// <field name="attributeParameterValues" type="Object[]">Each element in the array is an object that describes the parameter values.</field>
    /// <field name="polygonBarriers" type="Object">The set of polygon barriers loaded as network locations during analysis. Can be either an instance of DataLayer or FeatureSet.At ArcGIS Server 10.1 an optional url property was added. Use this property to specify a REST query request to a Feature, Map or GP Service that returns a JSON feature set. The url property can be specified using DataFile  Note that either the features or url property should be specified. </field>
    /// <field name="polylineBarriers" type="Object">The set of polyline barriers loaded as network locations during analysis. Can be either an instance of DataLayer or FeatureSet.At ArcGIS Server 10.1 an optional url property was added. Use this property to specify a REST query request to a Feature, Map or GP Service that returns a JSON feature set. The url property can be specified using DataFile  Note that either the features or url property should be specified. </field>
    /// <field name="returnPolygonBarriers" type="Boolean">If true, polygon barriers are returned as the third parameter of RouteTask.onSolveComplete.</field>
    /// <field name="returnPolylineBarriers" type="Boolean">If true, polyline barriers are returned as the fourth parameter of RouteTask.onSolveComplete.</field>
};
esri.tasks.RouteParameters.prototype =
{

};
esri.tasks.DataLayer = function () {
    /// <summary>Creates a new DataLayer object.</summary>
    /// <field name="name" type="String">The name of the data layer in the map service that is being referenced.</field>
    /// <field name="where" type="String">A where clause for the query. Any legal SQL where clause operating on the fields in the layer is allowed, for example: query.where = "POP2000 &gt; 350000".</field>
    /// <field name="geometry" type="Geometry">The geometry to apply to the spatial filter. The spatial relationship as specified by spatialRelationship is applied to this geometry while performing the query.</field>
    /// <field name="spatialRelationship" type="String">The spatial relationship to be applied on the input geometry while performing the query.  See the Constants Table for a list of valid values.</field>
};
esri.tasks.DataLayer.prototype =
{

};
esri.tasks.RouteTask = function (url) {
    /// <summary>Creates a new RouteTask object.</summary>
    /// <param name="url" type="String" optional="false">URL to the ArcGIS Server REST resource that represents a network analysis service. To obtain the URL, use Services Directory.</param>
    /// <field name="url" type="String">URL to the ArcGIS Server REST resource that represents a network analysis service. To obtain the URL, use Services Directory.</field>
};
esri.tasks.RouteTask.prototype =
{
    solve: function (params,callback,errback) {
        /// <summary>Solves the route against the route layer with the route parameters.</summary>
        /// <param name="params" type="RouteParameters" optional="false">Route parameters used as input to generate the route.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onSolveComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },

};
esri.tasks.RouteResult = function () {
    /// <summary>Class added v1.4.  The result from the Route Task.  The RouteResult properties are dependent on the RouteParameter inputs.  For example, directions are only returned if RouteParameters.returnDirections is set to "true".  RouteResult has no constructor.</summary>
    /// <field name="directions" type="DirectionsFeatureSet">Route directions are returned if RouteParameters.returnDirections is set to true.  For more information, see Getting driving directions.</field>
    /// <field name="route" type="Graphic">The Route graphic that is returned if RouteParameters.returnRoutes is true. For the list of attributes associated with the route, see the "Route properties" section in Finding the best route.</field>
    /// <field name="routeName" type="String">The name of the route.</field>
    /// <field name="stops" type="Graphic[]">Array of stops. Returned only if RouteParameters.returnStops is true. For the list of attributes returned for each stop, see the "Stop properties" section in Finding the best route.</field>
};
esri.tasks.RouteResult.prototype =
{

};
esri.tasks.DirectionsFeatureSet = function () {
    /// <summary>Class added v1.4.  A FeatureSet that has properties specific to routing. The FeatureSet.features property contains the turn by turn directions text and geometry of the route. The attributes for each feature provide information associated with the corresponding route segment. The following attributes are returned:text - The direction text. length - The length of the route segment. time - The time to travel along the route segment. ETA - The estimated time of arrival at the route segment in the local time. maneuverType - The type of maneuver that the direction represents. DirectionsFeatureSet has no constructor.  For more information, see Getting driving directions.</summary>
    /// <field name="extent" type="Extent">The extent of the route.</field>
    /// <field name="mergedGeometry" type="Polyline">A single polyline representing the route.</field>
    /// <field name="routeId" type="String">The ID of the route returned from the server.</field>
    /// <field name="routeName" type="String">Name specified in RouteParameters.stops.</field>
    /// <field name="totalLength" type="Number">The length of the route as specified in RouteParameters.directionsLengthUnits.</field>
    /// <field name="totalTime" type="Number">The total time calculated for the route as specified in RouteParameters.directionsTimeAttribute.</field>
    /// <field name="totalDriveTime" type="Number">Actual drive time calculated for the route.</field>
};
esri.tasks.DirectionsFeatureSet.prototype =
{

};
esri.tasks.AreasAndLengthsParameters = function () {
    /// <summary>Creates a new AreasAndLengthsParameters object.</summary>
    /// <field name="polygons" type="Geometry[]">Polygon geometries for which to compute areas and lengths</field>
    /// <field name="calculationType" type="String">Defines the type of calculation for the geometry.</field>
};
esri.tasks.AreasAndLengthsParameters.prototype =
{

};
esri.tasks.LengthsParameters = function () {
    /// <summary>Creates a new LengthsParameter object.</summary>
    /// <field name="polylines" type="Geometry[]">The array of polylines whose lengths are to be computed. The spatial reference of the polylines is specified by sr. The structure of each polyline in the array is same as the structure of the JSON polyline objects returned by the ArcGIS REST API.</field>
    /// <field name="lengthUnit" type="esri.tasks.GeometryService constant">The length unit in which perimeters of polygons will be calculated. It can be any esriUnits constant. If unit is not specified, the units are derived from sr. For a list of valid units, see esriSRUnitType constants and esriSRUnit2Type Constants.</field>
    /// <field name="geodesic" type="Boolean">If polylines are in geographic coordinate system, then geodesic needs to be set to true in order to calculate the ellipsoidal shortest path distance between each pair of the vertices in the polylines. The output if lengthUnit if not specified is returned in meters.Note:If you are using an ArcGIS Server 10.1 or greater then use the calculationType property instead.</field>
    /// <field name="calculationType" type="String">Defines the type of calculation for the geometry.</field>
};
esri.tasks.LengthsParameters.prototype =
{

};
esri.tasks.RelationParameters = function () {
    /// <summary>Creates a new RelationParameter object.</summary>
    /// <field name="geometries1" type="Geometry[]">The first array of geometries to compute the relations. The structure of each geometry in the array is same as the structure of the json geometry objects returned by the ArcGIS REST API.</field>
    /// <field name="geometries2" type="Geometry[]">The second array of geometries to compute the relations. The structure of each geometry in the array is same as the structure of the json geometry objects returned by the ArcGIS REST API.</field>
    /// <field name="relation" type="esri.tasks.RelationParameters constant">The spatial relationship to be tested between the two input geometry arrays.   If the relation is specified as esri.tasks.RelationParameter.SPATIAL_REL_RELATION, the relationParam parameter describes the spatial relationship and must be specified.</field>
    /// <field name="relationParam" type="String">The 'Shape Comparison Language' string to evaluate.</field>
};
esri.tasks.RelationParameters.prototype =
{

};
esri.tasks.RelationshipQuery = function () {
    /// <summary>Creates a new RelationshipQuery object.</summary>
    /// <field name="relationshipId" type="Number">The ID of the relationship to test. The ids for the relationships the table or layer participates in are listed in the ArcGIS Services directory.</field>
    /// <field name="objectIds" type="Number[]">A comma delimited list of ObjectIds for the features in the layer/table that you want to query.</field>
    /// <field name="definitionExpression" type="String">The definition expression to be applied to the related table or layer. Only records that fit the definition expression and are in the list of ObjectIds will be returned.</field>
    /// <field name="outFields" type="String[]">Attribute fields to include in the FeatureSet.  Fields must exist in the map layer.  You must list the actual field names rather than the alias names.  Returned fields are also the actual field names.  However, you are able to use the alias names when you display the results. You can set field alias names in the map document.  When you specify the output fields, you should limit the fields to only those you expect to use in the query or the results.  The fewer fields you include, the faster the response will be. Each query must have access to the Shape and ObjectId fields for a layer, but your list of fields does not need to include these two fields.</field>
    /// <field name="returnGeometry" type="Boolean">If "true", each feature in the FeatureSet includes the geometry. Set to "false" (default) if you do not plan to include highlighted features on a map since the geometry makes up a significant portion of the response.</field>
    /// <field name="outSpatialReference" type="SpatialReference">The spatial reference for the returned geometry. If not specified, the geometry is returned in the spatial reference of the map.  See Projected Coordinate Systems and Geographic Coordinate Systems for the list of supported spatial references.</field>
    /// <field name="maxAllowableOffset" type="Number">The maximum allowable offset used for generalizing geometries returned by the query operation.  The offset is in the units of the spatialReference. If a spatialReference is not defined the spatial reference of the map is used.</field>
    /// <field name="geometryPrecision" type="Number">Specify the number of decimal places for the geometries returned by the query operation.</field>
};
esri.tasks.RelationshipQuery.prototype =
{

};
esri.tasks.DistanceParameters = function () {
    /// <summary>Creates a new DistanceParameters object. The constructor takes no parameters.</summary>
    /// <field name="geometry1" type="Geometry">The geometry from which the distance is to measured. The geometry can be one of the following geometry types: esriGeometryPoint, esriGeometryPolyline, esriGeometryPolygon or esriGeometryMultipoint.</field>
    /// <field name="geometry2" type="Geometry">The geometry to which the distance is measured. The geometry can be one of the following geometry types: esriGeometryPoint, esriGeometryPolyline, esriGeometryPolygon or esriGeometryMultipoint.</field>
    /// <field name="distanceUnit" type="esri.tasks.GeometryService Constant">Specifies the units for measuring distance between geometry1 and geometry2. If the unit is not specified the units are derived from the spatial reference.</field>
    /// <field name="geodesic" type="Boolean">Default value is false. When true the geodesic distance between geometry1 and geometry2 is measured.</field>
};
esri.tasks.DistanceParameters.prototype =
{

};
esri.tasks.GeneralizeParameters = function () {
    /// <summary>Creates a new GeneralizeParameters object. The constructor takes no parameters</summary>
    /// <field name="geometries" type="Geometry[]">The array of input geometries to generalize. All geometries in this array must be of the same geometry type (esriGeometryPolyline or esriGeometryPolygon).</field>
    /// <field name="deviationUnit" type="esri.tasks.GeometryService Constant">The maximum deviation unit. If the unit is not specified, units are derived from the spatial reference. For a list of valid units see esriSRUnitType constants or esriSRUnit2Type constants.</field>
    /// <field name="maxDeviation" type="Number">The maximum deviation for constructing a generalized geometry based on the input geometries.</field>
};
esri.tasks.GeneralizeParameters.prototype =
{

};
esri.tasks.OffsetParameters = function () {
    /// <summary>Creates a new OffsetParameters object. The constructor takes no parameters</summary>
    /// <field name="geometries" type="Geometry[]">The array of geometries to be offset.</field>
    /// <field name="bevelRatio" type="Number">The bevelRatio is multiplied by the offset distance and the result determines how far a mitered offset intersection can be located before it is beveled. When mitered is specified, the value set for bevelRatio is ignored and 10 is used internally. If beveled is specified 1.1 will be used if no value is set for bevelRatio. The bevelRatio is ignored when rounded is specified.</field>
    /// <field name="offsetDistance" type="Number">Specifies the distance for constructing an offset based on the input geometries. If the offsetDistance parameter is positive the constructed offset will be on the right side of the curve. Left side offsets are constructed with negative values.</field>
    /// <field name="offsetUnit" type="String">The offset distance unit. For a list of valid units see esriSRUnitType constants or esriSRUnit2Type constants.</field>
    /// <field name="offsetHow" type="String">Options that determine how the ends intersect.</field>
};
esri.tasks.OffsetParameters.prototype =
{

};
esri.tasks.TrimExtendParameters = function () {
    /// <summary>Creates a new TrimExtendParameters object. The constructor takes no parameters.</summary>
    /// <field name="polylines" type="Polyline[]">The array of polylines to trim or extend. The structure of each geometry in the array is the same as the structure of the JSON polyline objects returned by the ArcGIS REST API.</field>
    /// <field name="trimExtendTo" type="Polyline">A polyline used as a guide for trimming or extending input polylines. The structure of the polyline is the same as the structure of the JSON polyline object returned by the ArcGIS REST API.</field>
    /// <field name="extendHow" type="String">A flag used with the trimExtend operation.</field>
};
esri.tasks.TrimExtendParameters.prototype =
{

};
esri.tasks.NAMessage = function () {
    /// <summary>Class added v1.4Represents a message generated during the execution of a network analyst task. It is composed of a message type and description. NAMessage has no constructor.</summary>
    /// <field name="type" type="Number">The network analyst message type, see constants table for a list of values.</field>
    /// <field name="description" type="String">A description of the network analyst message.</field>
};
esri.tasks.NAMessage.prototype =
{

};
esri.tasks.ClosestFacilityTask = function () {
    /// <summary>Creates a new ClosestFacilityTask object.</summary>
};
esri.tasks.ClosestFacilityTask.prototype =
{
    solve: function (params,callback,errback) {
        /// <summary>Solve the closest facility.</summary>
        /// <param name="params" type="ClosestFacilityParameters" optional="false">The ClosestFacilityParameters object.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onSolveComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },

};
esri.tasks.ClosestFacilitySolveResult = function () {
    /// <summary>Class added v2.0. The result from a ClosestFacilityTask operation.Note: ClosestFacilitySolveResult, and other closest facility related classes, requires ArcGIS Server 10.0 or above and a closest facility layer. A closest facility layer is a layer of type esriNAServerClosestFacilityLayer.</summary>
    /// <field name="directions" type="DirectionsFeatureSet">An array of directions. A direction is an instance of esri.tasks.DirectionFeatureSest. Route directions are returned if returnDirections was set to true, the default is false.</field>
    /// <field name="facilities" type="Point[]">An array of points, only returned when ClosestFacilityParameters.returnFacilities is true.</field>
    /// <field name="incidents" type="Point[]">An array of points, only returned when ClosestFacilityParameters.returnIncidents is true.</field>
    /// <field name="messages" type="esri.tasks.NAMessage">Message received when the solve is complete. If a closest facility cannot be solved, the message returned by the server identifies the incident that could not be solved.</field>
    /// <field name="pointBarriers" type="Point[]">The point barriers are an array of points. They are returned only if ClosestFacilityParameters.returnPointBarriers was set to true (which is not the default). If you send in the point barriers as a featureSet (instead of using DataLayer), you already have the barriers and might not need to request them back from the server.</field>
    /// <field name="polygonBarriers" type="Polygon[]">The polygon barriers are an array of polygons. They are returned only if ClosestFacilityParameters.returnPolygonBarriers was set to true (which is not the default). If you send in the polygon barriers as a featureSet (instead of using DataLayer), you already have the barriers and might not need to request them back from the server.</field>
    /// <field name="polylineBarriers" type="Polyline[]">The polyline barriers are an array of polylines. They are returned only if ClosestFacilityParameters.returnPolylineBarriers was set to true (which is not the default). If you send in the polyline barriers as a featureSet (instead of using DataLayer), you already have the barriers and might not need to request them back from the server.</field>
    /// <field name="routes" type="Graphic[]">The array of routes.  Route graphics are returned if returnRoutes is true and outputLines does not equal esriNAOutputLineNone. From version 2.0 to 2.5 the type is an array of Polylines. At version 2.6 the type is an array of Graphics.</field>
};
esri.tasks.ClosestFacilitySolveResult.prototype =
{

};
esri.tasks.ServiceAreaParameters = function () {
    /// <summary>Creates a new ServiceAreaParameters object.</summary>
    /// <field name="accumulateAttributes" type="String[]">The list of network attribute names to be accumulated with the analysis, i.e., which attributes should be returned as part of the response.</field>
    /// <field name="attributeParameterValues" type="Object[]">An array of attribute parameter values that can be used to determine which network elements can be used by a vehicle.</field>
    /// <field name="defaultBreaks" type="Number[]">An array of numbers defining the breaks. The default value is defined in the network analysis layer .</field>
    /// <field name="excludeSourcesFromPolygons" type="String[]">An array of network source names to NOT use when generating polygons.</field>
    /// <field name="facilities" type="Object">The set of facilities loaded as network locations during analysis. Can be either an instance of esri.tasks.DataLayer or esri.tasks.FeatureSet.At ArcGIS Server 10.1 an optional url property was added. Use this property to specify a REST query request to a Feature, Map or GP Service that returns a JSON feature set. The url property can be specified using DataFile  Note that either the features or url property should be specified. </field>
    /// <field name="impedanceAttribute" type="String">The network attribute name used as the impedance attribute in analysis.</field>
    /// <field name="mergeSimilarPolygonRanges" type="Boolean">If true, similar ranges will be merged in the result polygons.</field>
    /// <field name="outputGeometryPrecision" type="Number">The precision of the output geometry after generalization.</field>
    /// <field name="outputGeometryPrecisionUnits" type="String">The units of the output geometry precision. The default value is esriUnknownUnits. Known Values: esriUnknownUnits | esriCentimeters | esriDecimalDegrees | esriDecimeters | esriFeet | esriInches | esriKilometers | esriMeters | esriMiles | esriMillimeters | esriNauticalMiles | esriPoints | esriYards</field>
    /// <field name="outputLines" type="String">The type of output lines to be generated in the result</field>
    /// <field name="outputPolygons" type="String">The type of output polygons to be generated in the result</field>
    /// <field name="outSpatialReference" type="SpatialReference">The well-known ID of the spatial reference for the geometries returned with the analysis results. If outSpatialReference is not specified, the geometries are returned in the spatial reference of the map.</field>
    /// <field name="overlapLines" type="Boolean">Indicates if the lines should overlap from multiple facilities. The default is defined by the network analysis layer in your ServiceAreaTask.</field>
    /// <field name="overlapPolygons" type="Boolean">Indicates if the polygons should overlap from multiple facilities. The default is defined by the network analysis layer in your ServiceAreaTask.</field>
    /// <field name="pointBarriers" type="Object">The set of point barriers loaded as network locations during analysis. Can be either an instance of esri.tasks.DataLayer or esri.tasks.FeatureSet.At ArcGIS Server 10.1 an optional url property was added. Use this property to specify a REST query request to a Feature, Map or GP Service that returns a JSON feature set. The url property can be specified using DataFile  Note that either the features or url property should be specified. </field>
    /// <field name="polygonBarriers" type="Object">The set of polygons barriers loaded as network locations during analysis. Can be either an instance of esri.tasks.DataLayer or esri.tasks.FeatureSet.At ArcGIS Server 10.1 an optional url property was added. Use this property to specify a REST query request to a Feature, Map or GP Service that returns a JSON feature set. The url property can be specified using DataFile  Note that either the features or url property should be specified. </field>
    /// <field name="polylineBarriers" type="Object">The set of polyline barriers loaded as network locations during analysis. Can be either an instance of esri.tasks.DataLayer or esri.tasks.FeatureSet.At ArcGIS Server 10.1 an optional url property was added. Use this property to specify a REST query request to a Feature, Map or GP Service that returns a JSON feature set. The url property can be specified using DataFile  Note that either the features or url property should be specified. </field>
    /// <field name="restrictionAttributes" type="String[]">The list of network attribute names to be used as restrictions with the analysis</field>
    /// <field name="restrictUTurns" type="String">Specifies how U-Turns should be handled. The default is as defined in the specific routing network layer used in your RouteTask.See NAUTurn for a list of valid values.</field>
    /// <field name="returnFacilities" type="Boolean">If true, facilities will be returned with the analysis results. Default value is false.</field>
    /// <field name="returnPointBarriers" type="Boolean">If true, barriers will be returned in the barriers property of ClosestFacilitySolveResult.The default value is false.</field>
    /// <field name="returnPolygonBarriers" type="Boolean">If true, polygon barriers will be returned in the polygonBarriers property of ClosestFacilitySolveResult.The default value is false.</field>
    /// <field name="returnPolylineBarriers" type="Boolean">If true, polyline barriers will be returned in the polylineBarriers property of ClosestFacilitySolveResult.The default value is false.</field>
    /// <field name="splitLinesAtBreaks" type="Boolean">If true, lines will be split at breaks.</field>
    /// <field name="splitPolygonsAtBreaks" type="Boolean">If true, polygons will be split at breaks.</field>
    /// <field name="travelDirection" type="String">Options for traveling to or from the facility. Default values are defined by the newtork layer. See NATravelDirection for a list of valid values.</field>
    /// <field name="trimOuterPolygon" type="Boolean">If true, the outermost polygon (at the maximum break value) will be trimmed. The default is defined in the network analysis layer in your ServiceAreaTask.</field>
    /// <field name="trimPolygonDistance" type="Number">If polygons are being trimmed, provides the distance to trim. The default is defined in the network analysis layer.</field>
    /// <field name="trimPolygonDistanceUnits" type="String">If polygons are being trimmed, specifies the units of the trimPolygonDistance. The default is defined in the network analysis layer. See the ESRI Unit constants table for a list of valid values.</field>
    /// <field name="timeOfDay" type="Date">Local date and time at the facility.</field>
    /// <field name="useHierarchy" type="Boolean">When true, the hierarchy attributes for the network will be used in analysis.</field>
    /// <field name="doNotLocateOnRestrictedElements" type="Boolean">When true, restricted network elements should be considered when finding network locations. The default value is false.</field>
};
esri.tasks.ServiceAreaParameters.prototype =
{

};
esri.tasks.ServiceAreaTask = function () {
    /// <summary>Creates a new ServiceAreaTask object.</summary>
};
esri.tasks.ServiceAreaTask.prototype =
{
    solve: function (params,callback,errback) {
        /// <summary>Solve the service area.</summary>
        /// <param name="params" type="ServiceAreaParameters" optional="false">The ServiceAreaParameters object.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onSolveComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },

};
esri.tasks.ServiceAreaSolveResult = function () {
    /// <summary>Class added v2.0.The result from a ServiceAreaTask operation.Note: ServiceAreaSolveResult, and other service area related classes, requires ArcGIS Server 10.0 or above and a service area layer. A service area layer is a layer of type esriNAServerServiceAreaLayer.</summary>
    /// <field name="facilities" type="Point[]">Array of points, only returned if ServiceAreaParameters.returnFacilities is set to true.</field>
    /// <field name="messages" type="NAMessage">Message received when solve is completed. If a service area cannot be solved, the message returned by the server identifies the incident that could not be solved.</field>
    /// <field name="pointBarriers" type="Point[]">The point barriers are an array of points. They are returned only if ServiceAreaParameters.returnPointBarriers was set to true (which is not the default). If you send in the point barriers as a featureSet (instead of using DataLayer), you already have the barriers and might not need to request them back from the server.</field>
    /// <field name="polygonBarriers" type="Polygon[]">The polygon barriers are an array of polygons. They are returned only if ServiceAreaParameters.returnPolygonBarriers was set to true (which is not the default). If you send in the polygon barriers as a featureSet (instead of using DataLayer), you already have the barriers and might not need to request them back from the server.</field>
    /// <field name="polylineBarriers" type="Polyline[]">The polyline barriers are an array of polylines. They are returned only if ServiceAreaParameters.returnPolylineBarriers was set to true (which is not the default). If you send in the polyline barriers as a featureSet (instead of using DataLayer), you already have the barriers and might not need to request them back from the server.</field>
    /// <field name="serviceAreaPolygons" type="Graphics[]">Array of service area polygon graphics. From version 2.0 to 2.5 the type was an array of Polygons. At version 2.6 the type is now an array of Graphics.</field>
    /// <field name="serviceAreaPolylines" type="Graphics[]">Array of service area polyline graphics. From version 2.0 to 2.5 the type was an array of Polylines. At version 2.6 the type is now an array of Graphics.</field>
};
esri.tasks.ServiceAreaSolveResult.prototype =
{

};
esri.tasks.NAOutputPolygon = function () {
    /// <summary>Class added v2.0Constants representing how the geometry is returned.  NAOutputPolygon has no constructor.</summary>
};
esri.tasks.NAOutputPolygon.prototype =
{

};
esri.tasks.NATravelDirection = function () {
    /// <summary>Class added v2.0Constants representing how the geometry is returned.  NATravelDirection has no constructor.</summary>
};
esri.tasks.NATravelDirection.prototype =
{

};
esri.tasks.ImageServiceIdentifyTask = function (url) {
    /// <summary>Creates a new ImageServiceIdentifyTask object.</summary>
    /// <param name="url" type="String" optional="false">URL to the ArcGIS Server REST resource that represents an image service.var imageTask = new esri.tasks.ImageServiceIdentifyTask("http://servicesbeta.esri.com/ArcGIS/rest/services/Portland/PortlandAerial/ImageServer");</param>
};
esri.tasks.ImageServiceIdentifyTask.prototype =
{
    execute: function (params,callback,errback) {
        /// <summary>Sends a request to the ArcGIS REST image service resource to identify content based on the ImageServiceIdentifyParameters specified in the imageServiceIdentifyParameters argument.</summary>
        /// <param name="params" type="ImageServiceIdentifyParameters" optional="false">Specifies the criteria used to identify the features.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },

};
esri.tasks.ImageServiceIdentifyParameters = function () {
    /// <summary>Creates a new ImageServiceIdentifyParameters object.</summary>
    /// <field name="geometry" type="Geometry">Input geometry that defines the location to be identified.  The location can be a point or a polygon.</field>
    /// <field name="mosaicRule" type="MosaicRule">Specifies the mosaic rules defining the image sorting order. When a mosaic rule is not specified, METHOD_CENTER is used.</field>
    /// <field name="pixelSizeX" type="Number">The pixel level being identified (or the resolution being looked at) on the x-axis. If not specified, it will default to the base resolution of the dataset.</field>
    /// <field name="pixelSizeY" type="Number">The pixel level being identified (or the resolution being looked at) on the y-axis. If not specified, it will default to the base resolution of the dataset.</field>
};
esri.tasks.ImageServiceIdentifyParameters.prototype =
{

};
esri.tasks.ImageServiceIdentifyResult = function () {
    /// <summary>Class added v2.0. The results from an ImageServiceIdentifyTask. ImageServiceIdentifyResult has no constructor.</summary>
    /// <field name="catalogItems" type="FeatureSet">The set of catalog items that overlap the input geometry. CatalogItems are returned only when the image service source is a mosaic dataset.</field>
    /// <field name="catalogItemVisibilities" type="Number[]">The set of visible areas for the identified catalog items. CatalogItemVisibilities are returned only when the image service source is a mosaic dataset.</field>
    /// <field name="location" type="Point">The identified location.</field>
    /// <field name="name" type="String">The identify property name.</field>
    /// <field name="objectId" type="Number">The identify property id.</field>
    /// <field name="properties" type="Object">The attributes of the identified object.</field>
    /// <field name="value" type="String">The identify property pixel value.</field>
};
esri.tasks.ImageServiceIdentifyResult.prototype =
{

};
esri.tasks.StatisticDefinition = function () {
    /// <summary>Creates a new StatisticDefinition object.</summary>
    /// <field name="statisticType" type="String">Define the type of statistic. Known Values: 'count'|'sum'|'min'|'max'|'avg'|'stddev'</field>
    /// <field name="onStatisticField" type="String">Define the field on which statistics will be calculated.</field>
    /// <field name="outStatisticFieldName" type="String">Specify the output field name. Output field names can only contain alpha-numeric characters and an underscore. If no output field name is specified the map server assigns a field name to the returned statistic field.</field>
};
esri.tasks.StatisticDefinition.prototype =
{

};
esri.tasks.GenerateRendererTask = function (url,options) {
    /// <summary>Creates a new GenerateRendererTask object.</summary>
    /// <param name="url" type="String" optional="false">The url to a layer in a map service or table. Requires an ArcGIS Server version 10.1 or greater service that supports the generateDataClasses operation.</param>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters. See options list.&#10;
    /// LayerMapSource or LayerDataSource source&#10;
    /// String gdbVersion</param>
};
esri.tasks.GenerateRendererTask.prototype =
{
    execute: function (generateRendererParameters,callback,errback) {
        /// <summary>Perform a classification on the layer or table resource.  Upon successful completion of the classification operation the onComplete event is fired and the optional callback function is invoked. The result is a renderer object that can be applied to graphics layers, feature layers or dynamic layers.</summary>
        /// <param name="generateRendererParameters" type="GenerateRendererParameters" optional="false">A GenerateRendererParameters object that defines the classification definition and an optional where clause.</param>
        /// <param name="callback" type="Function" optional="true">This function will be called when the operation is complete. The arguments passed to this function are the same as the OnComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs on the Server during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },

};
esri.tasks.GenerateRendererParameters = function () {
    /// <summary>Creates a new GenerateRendererParameters object.</summary>
    /// <field name="classificationDefinition" type="ClassificationDefinition">A ClassBreaksDefinition or UniqueValueDefinition classification definition used to generate the data classes.</field>
    /// <field name="where" type="String">A where clause used to generate the data classes. Any legal SQL where clause operating on the fields in the layer/table is allowed.</field>
};
esri.tasks.GenerateRendererParameters.prototype =
{

};
esri.tasks.ClassificationDefinition = function () {
    /// <summary>Class added v2.6 The super class for the classification definition objects used by the GenerateRendererTask class to generate data classes. This class has no constructor. Use ClassBreaksDefinition or UniqueValueDefinition instead.</summary>
    /// <field name="type" type="String">The type of classification definition. Known Values: uniqueValueDef | classBreaksDef</field>
    /// <field name="baseSymbol" type="Symbol">Define a default symbol for the classification. If a baseSymbol is not defined then a default symbol is created based on the geometryType of the layer.</field>
    /// <field name="colorRamp" type="AlgorithmicColorRamp or MultiPartColorRamp">Define a color ramp for the classification.  If a colorRamp is not defined then a default color ramp will be used to assign a color to each class.</field>
};
esri.tasks.ClassificationDefinition.prototype =
{

};
esri.tasks.ClassBreaksDefinition = function () {
    /// <summary>Creates a new ClassBreaksDefinition object</summary>
    /// <field name="classificationField" type="String">The name of the field used to match values.</field>
    /// <field name="classificationMethod" type="String">The name of the classification method. Known Values: natural-breaks | equal-interval | quantile | standard-deviation | geometrical-interval</field>
    /// <field name="breakCount" type="Number">The number of class breaks.</field>
    /// <field name="standardDeviationInterval" type="Number">The standard deviation interval. When standardDeviationInterval is specified breakCount is ignored. Only valid when the classificationMethod is set to 'standard-deviation'. Known Values: 1 | 0.5 | 0.33 | 0.25</field>
    /// <field name="normalizationType" type="String">The type of normalization used to normalize class breaks. Known Values: field | log | percent-of-total</field>
    /// <field name="normalizationField" type="String">The name of the field that contains the values used to normalize class breaks when normalizationType is set to 'field'.</field>
    /// <field name="baseSymbol" type="Symbol">Define a default symbol for the classification. If a baseSymbol is not defined then a default symbol is created based on the geometryType of the layer.</field>
    /// <field name="colorRamp" type="AlgorithmicColorRamp or MultiPartColorRamp">Define a color ramp for the classification.  If a colorRamp is not defined then a default color ramp will be used to assign a color to each class.</field>
};
esri.tasks.ClassBreaksDefinition.prototype =
{
    toJson: function () {
        /// <summary>Returns an easily serializable object representation of the class breaks definition.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.tasks.UniqueValueDefinition = function () {
    /// <summary>Creates a new UniqueValueDefinition object.</summary>
    /// <field name="baseSymbol" type="Symbol">Define a default symbol for the classification. If a baseSymbol is not defined then a default symbol is created based on the geometryType of the layer.</field>
    /// <field name="colorRamp" type="AlgorithmicColorRamp or MultiPartColorRamp">Define a color ramp for the classification.  If a colorRamp is not defined then a default color ramp will be used to assign a color to each class.</field>
    /// <field name="attributeField" type="String">Attribute field renderer uses to match values. At version 3.0 the Unique Value renderer can be used to render feature layer tracks. Specify the layer's trackIdField as the attributeField</field>
    /// <field name="attributeField2" type="String">The name of the field that contains unique values when combined with the values specified by attributeField.</field>
    /// <field name="attributeField3" type="String">The name of the field that contains unique values when combined with the values specified by attributeField and attributeField2.</field>
};
esri.tasks.UniqueValueDefinition.prototype =
{
    toJson: function () {
        /// <summary>Returns an easily serializable object representation of the unique value definition.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.tasks.AlgorithmicColorRamp = function () {
    /// <summary>Creates a new AlgorithmicColorRamp object.</summary>
    /// <field name="fromColor" type="dojo.Color">The first color in the color ramp.</field>
    /// <field name="toColor" type="dojo.Color">The last color in the color ramp.</field>
    /// <field name="algorithim" type="String">The algorithim used to generate the colors between the fromColor and toColor. Known Values: cie-lab | hsv | lab-lch</field>
};
esri.tasks.AlgorithmicColorRamp.prototype =
{
    toJson: function () {
        /// <summary>Returns an easily serializable object representation of an algorithmic color ramp.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.tasks.MultipartColorRamp = function () {
    /// <summary>Creates a new MultipartColorRamp object.</summary>
    /// <field name="colorRamps" type="AlgorithmicColorRamp[]">Define an array of algorithmic color ramps used to generate the multi part ramp.</field>
};
esri.tasks.MultipartColorRamp.prototype =
{
    toJson: function () {
        /// <summary>Returns an easily serializable object representation of a multipart color ramp.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.tasks.PrintTask = function (url,params) {
    /// <summary>Creates a new PrintTask object.</summary>
    /// <param name="url" type="String" optional="false">The url to the Export Web Map Task. Requires ArcGIS Server 10.1 or later.</param>
    /// <param name="params" type="Object" optional="false">Parameters for the print task.  See the options table below for details on the parameters.&#10;
    /// Boolean async</param>
    /// <field name="url" type="String">The url to the Export Web Map Task. Requires ArcGIS Server 10.1 or later.</field>
};
esri.tasks.PrintTask.prototype =
{
    execute: function (printParameters,callback,errback) {
        /// <summary>Sends a request to the print service resource to create a print page using the information specified in the printParameters argument. On completion, the onComplete event is fired and the optional callback function is invoked.</summary>
        /// <param name="printParameters" type="PrintParameters" optional="true">A PrintParameters object that defines the printing options.</param>
        /// <param name="callback" type="Function" optional="false">The function to call when the method has completed.  The arguments in the function are the same as the onComplete event.</param>
        /// <param name="errback" type="Function" optional="false">An error object is returned if an error occurs during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },

};
esri.tasks.PrintParameters = function () {
    /// <summary>Creates a new PrintParameters object.</summary>
    /// <field name="map" type="Map">The map to print.</field>
    /// <field name="template" type="PrintTemplate">Defines the layout template used for  the printed map.</field>
    /// <field name="extraParameters" type="Object">Additional parameters for the print service. When an arcpy script is published as a custom print service there may be additional parameters associated with the print service. To determine the extra parameters visit the ArcGIS REST Services Directory page for the print service.  At version 3.0, this property is supported by the Print Task.</field>
    /// <field name="outSpatialReference" type="SpatialReference">Specify the output spatial reference for the printout.</field>
};
esri.tasks.PrintParameters.prototype =
{

};
esri.tasks.PrintTemplate = function () {
    /// <summary>Creates a new PrintTemplate object.</summary>
    /// <field name="label" type="String">The text that appears on the PrintWidget's print button.</field>
    /// <field name="format" type="String">The print output format. Known Values: pdf | png32 | png8 | jpg | gif | eps | svg | svgz</field>
    /// <field name="layout" type="String">The layout used for the print output.</field>
    /// <field name="exportOptions" type="Object">Define the map width, height and dpi. Required when the layoutTemplate is set to 'MAP_ONLY'.</field>
    /// <field name="layoutOptions" type="Object">Define the layout elements.</field>
    /// <field name="preserveScale" type="Boolean">Define whether the printed map will preserve the map scale or the map extent.</field>
};
esri.tasks.PrintTemplate.prototype =
{

};
esri.tasks.ProjectParameters = function () {
    /// <summary>Creates a new ProjectParameters object.</summary>
    /// <field name="geometries" type="Geometry[]">The input geometries to project.</field>
    /// <field name="outSR" type="SpatialReference">The spatial reference to which you are projecting the geometries.</field>
    /// <field name="transformation" type="Object">The well-known id {wkid:number} or well-known text {wkt:string} or  for the datum transfomation to be applied on the projected geometries. If a transformation is specified a value must also be specified for the transformForward property. If a transformation is not specified, a default GeoTransformation is used.For a list of valid datum transformation ID values, see Datum Transformations.</field>
    /// <field name="transformationForward" type="Boolean">Indicates whether to transform forward or not. The forward or reverse direction of transformation is implied in the name of the transformation.</field>
};
esri.tasks.ProjectParameters.prototype =
{

};
esri.tasks.LegendLayer = function () {
    /// <summary>Creates a new LegendLayer object.</summary>
    /// <field name="layerId" type="String">The id of the operational layer to include in the printout's legend.</field>
    /// <field name="subLayerIds" type="String[]">The ids of the sublayers to include in the printout's legend.</field>
};
esri.tasks.LegendLayer.prototype =
{

};
esri.toolbars = function () {
    /// <summary>esri - toolbars</summary>
};
esri.toolbars.Draw = function (map,options) {
    /// <summary>Creates a new Draw object.  A map is a required parameter.</summary>
    /// <param name="map" type="Map" optional="false">Map the toolbar is associated with.</param>
    /// <param name="options" type="Object" optional="false">Parameters that define the functionality of the draw toolbar.  See the options for a list of valid values.&#10;
    /// Boolean showTooltips&#10;
    /// Number tooltipOffset&#10;
    /// Number drawTime&#10;
    /// Number tolerance</param>
    /// <field name="markerSymbol" type="SimpleMarkerSymbol">Symbol to be used when drawing a Point or Multipoint.</field>
    /// <field name="respectDrawingVertexOrder" type="Boolean">When set to false, the geometry is modified to be topologically correct. When set to true, the input geometry is not modified. Known Values: true | false</field>
    /// <field name="lineSymbol" type="SimpleLineSymbol">Symbol to be used when drawing a Polyline.</field>
    /// <field name="fillSymbol" type="SimpleFillSymbol">Symbol to be used when drawing a Polygon or Extent.</field>
};
esri.toolbars.Draw.prototype =
{
    activate: function (geometryType,options) {
        /// <summary>Activates the toolbar for drawing geometries.  Activating the toolbar disables map navigation.</summary>
        /// <param name="geometryType" type="String" optional="false">The type of geometry drawn.  See the Constants table for valid values.</param>
        /// <param name="options" type="Object" optional="true">Options that define the functionality of the draw toolbar.      &lt;Number> drawTime        Determines how much time to wait before adding a new point when using a freehand tool. The default value is 75.           &lt;Boolean> showTooltips        If true, tooltips are displayed when creating new graphics with the draw toolbar. The default value is true.          &lt;Number> tolerance        Determines how far the mouse moves before adding a new point when using one of the freehand tools. The default value is 8.               &lt;Number> tooltipOffset        Determines how farm to offset the tool tip from the mouse pointer. The default value is 15.    </param>
    },
    deactivate: function () {
        /// <summary>Deactivates the toolbar and reactivates map navigation.</summary>
    },
    setRespectDrawingVertexOrder: function (set) {
        /// <summary>Sets whether the polygon geometry should be modified to be topologically correct.</summary>
        /// <param name="set" type="Boolean" optional="false">When set to false, the geometry is modified to be topologically correct.  When set to true, the input geometry is not modified.</param>
    },
    setMarkerSymbol: function (markerSymbol) {
        /// <summary>Sets the marker symbol.</summary>
        /// <param name="markerSymbol" type="MarkerSymbol" optional="false">The marker symbol.</param>
    },
    setLineSymbol: function (lineSymbol) {
        /// <summary>Sets the line symbol.</summary>
        /// <param name="lineSymbol" type="LineSymbol" optional="false">The line symbol.</param>
    },
    setFillSymbol: function (fillSymbol) {
        /// <summary>Sets the fill symbol.</summary>
        /// <param name="fillSymbol" type="FillSymbol" optional="false">The fill symbol.</param>
    },
    finishDrawing: function () {
        /// <summary>Finishes drawing the geometry and fires the onDrawEnd event. Use this method to finish drawing a polyline, polygon or multipoint when working with the compact build on a touch supported device like the iPhone.</summary>
        /// <return type="none">none</return>
    },

};
esri.toolbars.Navigation = function (map) {
    /// <summary>Creates a new Navigation object.  A Map is a required parameter.</summary>
    /// <param name="map" type="Map" optional="false">Map the toolbar is associated with.</param>
};
esri.toolbars.Navigation.prototype =
{
    activate: function (navType) {
        /// <summary>Activates the toolbar for map navigation.  Activating the toolbar overrides default map navigation.</summary>
        /// <param name="navType" type="String" optional="false">The navigation type.  The Constants table lists valid navigation values.</param>
    },
    deactivate: function () {
        /// <summary>Deactivates the toolbar and reactivates map navigation.</summary>
    },
    zoomToFullExtent: function () {
        /// <summary>Zoom to full extent of base layer.</summary>
    },
    zoomToPrevExtent: function () {
        /// <summary>Zoom to previous extent in extent history.</summary>
    },
    zoomToNextExtent: function () {
        /// <summary>Zoom to next extent in extent history.</summary>
    },
    isFirstExtent: function () {
        /// <summary>When "true", map is at the first extent.</summary>
        /// <return type="Boolean">Boolean</return>
    },
    isLastExtent: function () {
        /// <summary>When "true", map is at the last extent.</summary>
        /// <return type="Boolean">Boolean</return>
    },
    setZoomSymbol: function (symbol) {
        /// <summary>Set the SimpleFillSymbol used for the rubber band zoom.</summary>
        /// <param name="symbol" type="Symbol" optional="false">The SimpleFillSymbol used for the rubber band zoom.</param>
    },

};
esri.toolbars.Edit = function (map,options) {
    /// <summary>Creates a new Edit object. A map is a required parameter.</summary>
    /// <param name="map" type="Map" optional="false">Map the toolbar is associated with.</param>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  See options list.&#10;
    /// Boolean allowAddVertices&#10;
    /// Boolean allowDeletevertices&#10;
    /// MarkerSymbol ghostVertexSymbol&#10;
    /// LineSymbol ghostLineSymbol&#10;
    /// MarkerSymbol vertexSymbol</param>
};
esri.toolbars.Edit.prototype =
{
    activate: function (tool,graphic,options) {
        /// <summary>Activates the toolbar to edit the supplied graphic.</summary>
        /// <param name="tool" type="String" optional="false">The following are valid options, see the Constants table for more details.    Constant  Description  esri.toolbars.Edit.MOVE  The graphic can be moved.  esri.toolbars.Edit.EDIT_VERTICES  The vertices can be edited.  esri.toolbars.Edit.MOVE | esri.toolbars.Edit.EDIT_VERTICES  Graphics can be moved and the vertices are editable.</param>
        /// <param name="graphic" type="Graphic" optional="false">The graphic to edit.</param>
        /// <param name="options" type="Object" optional="true">The following properties are valid options:    Value  Description  Valid geometry  allowAddVertices  Specifies whether users can add new vertices.  Polyline, Polygon  allowDeleteVertices  Specifies whether users can delete vertices.  Polyline, Polygon, Multipoint  ghostVertexSymbol  MarkerSymbol for insertable vertices.  Polyline, Polygon  ghostLineSymbol  LineSymbol for guide lines, displayed when moving vertices.  Polyline, Polygon  vertexSymbol  MarkerSymbol for vertices.  Polyline, Polygon</param>
    },
    deactivate: function () {
        /// <summary>Deactivates the toolbar.  Call this method to deactivate the toolbar after editing the graphic.</summary>
    },
    refresh: function () {
        /// <summary>Refreshes the internal state of the toolbar.</summary>
    },
    getCurrentState: function () {
        /// <summary>An object with the following properties that describe the current state.  Value  Description  &lt;Number> tool  Indicates if the tool is currently being used. Valid values are listed in the constants table.  &lt;Graphic&gt; graphic  The graphic that is currently being edited.  &lt;Boolean> isModified  Indicates if the graphic has been modified.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.dijit = function () {
    /// <summary>esri - dijit</summary>
};
esri.dijit.InfoWindow = function () {
    /// <summary>dojo.require("esri.dijit.InfoWindow");An InfoWindow is an HTML popup.  It often contains the attributes of a Graphic.  The default behavior on a Graphic is to show the InfoWindow after a click on the Graphic.  An InfoTemplate is required for this default behavior.In addition, the InfoWindow can be used to display custom content on the map.</summary>
    /// <field name="anchor" type="String">Placement of the InfoWindow with respect to the graphic.  See the Constants table for values.</field>
    /// <field name="coords" type="Point">The anchor point of the InfoWindow in screen coordinates.</field>
    /// <field name="fixedAnchor" type="String">InfoWindow always show with the specified anchor. See the Constants table for values.</field>
    /// <field name="isShowing" type="Boolean">Determines whether the InfoWindow is currently shown on the map. Known Values: true | false</field>
};
esri.dijit.InfoWindow.prototype =
{
    hide: function () {
        /// <summary>Hides the InfoWindow.</summary>
    },
    move: function (point) {
        /// <summary>Moves the InfoWindow to the specified screen point.</summary>
        /// <param name="point" type="Point" optional="false">The new anchor point when moving the InfoWindow.</param>
    },
    resize: function (width,height) {
        /// <summary>Resizes the InfoWindow to the specified height and width in pixels.</summary>
        /// <param name="width" type="Number" optional="false">The new width of the InfoWindow in pixels.</param>
        /// <param name="height" type="Number" optional="false">The new height of the InfoWindow in pixels.</param>
    },
    setContent: function (content) {
        /// <summary>Sets the content in the InfoWindow. View the Format Info Window Content help topic for more details.</summary>
        /// <param name="content" type="Object" optional="false">The content for the InfoWindow.  Can be any valid HTML or DOM element.</param>
        /// <return type="InfoWindow">InfoWindow</return>
    },
    setFixedAnchor: function (anchor) {
        /// <summary>Sets the fixed location of the InfoWindow anchor.  Valid values are listed in the Constants table.</summary>
        /// <param name="anchor" type="String" optional="false">Fixed anchor that cannot be overridden by InfoWindow.show().  See Constants table for values.</param>
    },
    setTitle: function (title) {
        /// <summary>Sets the title for the InfoWindow. View the Format Info Window Content help topic for more details.</summary>
        /// <param name="title" type="String" optional="false">The title for the InfoWindow.  Can be any valid HTML.</param>
        /// <return type="InfoWindow">InfoWindow</return>
    },
    show: function (point,placement) {
        /// <summary>Display the InfoWindow at the specified location. Placement can be specified with respect to the location i.e., place the window at the location's upper-right corner. If placment is not specified the info window places the window to avoid falling off the map edge.</summary>
        /// <param name="point" type="Point" optional="false">Location to place anchor.</param>
        /// <param name="placement" type="String" optional="true">Placement of the InfoWindow with respect to the graphic. See the Constants table for values.</param>
    },

};
esri.dijit.AttributeInspector = function (params,srcNodeRef) {
    /// <summary>Creates a new Attribute Inspector object.</summary>
    /// <param name="params" type="Object" optional="false">See options list.&#10;
    /// Object[] layerInfos</param>
    /// <param name="srcNodeRef" type="String" optional="false">HTML element where the attribute inspector should be rendered.</param>
};
esri.dijit.AttributeInspector.prototype =
{
    refresh: function () {
        /// <summary>Updates the contents of the AttributeInspector.</summary>
    },
    destroy: function () {
        /// <summary>Destroys the widget, used for page clean up.</summary>
    },
    next: function () {
        /// <summary>Move to the next feature.</summary>
        /// <return type="none">none</return>
    },
    previous: function () {
        /// <summary>Move to the previous feature.</summary>
        /// <return type="none">none</return>
    },
    first: function () {
        /// <summary>Moves to the first feature.</summary>
    },
    last: function () {
        /// <summary>Moves to the last feature.</summary>
    },

};
esri.dijit.TimeSlider = function (params,srcNodeRef) {
    /// <summary>Creates a new TimeSlider object.</summary>
    /// <param name="params" type="String" optional="false">Parameters for the time slider object. See the options table below for parameters.&#10;
    /// Boolean excludeDataAtTrailingThumb&#10;
    /// Boolean excludeDataAtLeadingThumb</param>
    /// <param name="srcNodeRef" type="Object" optional="false">HTML element where the time slider should be rendered.</param>
    /// <field name="playing" type="Boolean">Default value is false.</field>
    /// <field name="loop" type="Boolean">Default value is false.</field>
    /// <field name="thumbCount" type="Number">Default value is 1.</field>
    /// <field name="thumbMovingRate" type="Number">Rate at which the time animation plays. Default value is 1000 milliseconds.</field>
    /// <field name="timeStops" type="Date[]">An array of dates representing the stops (tics) on the TimeSlider.</field>
};
esri.dijit.TimeSlider.prototype =
{
    createTimeStopsByCount: function (timeExtent,count) {
        /// <summary>The specified number of time stops are created for the input time extent.</summary>
        /// <param name="timeExtent" type="TimeExtent" optional="false">The time extent used to define the time slider's start and end time stops.</param>
        /// <param name="count" type="Number" optional="false">The number of time stops to create.</param>
        /// <return type="none">none</return>
    },
    createTimeStopsByTimeInterval: function (timeExtent,timeInterval,timeIntervalUnits) {
        /// <summary>Create a time stop for each interval specified, i.e.(week, month, day).</summary>
        /// <param name="timeExtent" type="TimeExtent" optional="false">The time extent used to define the time slider's start and end time stops.</param>
        /// <param name="timeInterval" type="Number" optional="false">The length of the time interval.</param>
        /// <param name="timeIntervalUnits" type="String" optional="false"> Valid values are listed in the TimeInfo constants table.</param>
        /// <return type="none">none</return>
    },
    setTimeStops: function (timeStops) {
        /// <summary>Manually define the time stop locations by providing an array of dates.</summary>
        /// <param name="timeStops" type="Date[]" optional="false">Array of dates</param>
        /// <return type="none">none</return>
    },
    setLoop: function (loop) {
        /// <summary>Determines whether or not loop. Default value is false.</summary>
        /// <param name="loop" type="Boolean" optional="false">True plays the time slider continuously. Default value is false.</param>
        /// <return type="none">none</return>
    },
    setThumbCount: function (thumbCount) {
        /// <summary>The number of thumbs to display. A value of one displays a single thumb. Setting the value to 2 displays a range slider.</summary>
        /// <param name="thumbCount" type="Number" optional="false">The number of thumbs to display. Default value is one.</param>
        /// <return type="none">none</return>
    },
    setThumbIndexes: function (indexes) {
        /// <summary>Array of two integers, the first value determines where to put the first thumb. If it is a two thumb slider the second value determines where to place the additional thumb.</summary>
        /// <param name="indexes" type="Array" optional="false">Array of two integers.</param>
        /// <return type="none">none</return>
    },
    setThumbMovingRate: function (thumbMovingRate) {
        /// <summary>Change the rate at which the time animation plays.</summary>
        /// <param name="thumbMovingRate" type="Number" optional="false">The rate at which the time slider plays. Default value is 1500.</param>
        /// <return type="none">none</return>
    },
    next: function () {
        /// <summary>Move to the next time step.</summary>
        /// <return type="none">none</return>
    },
    pause: function () {
        /// <summary>Pause the time slider.</summary>
        /// <return type="none">none</return>
    },
    play: function () {
        /// <summary>Play the time slider.</summary>
        /// <return type="none">none</return>
    },
    previous: function () {
        /// <summary>Move to the previous time step.</summary>
        /// <return type="none">none</return>
    },
    singleThumbAsTimeInstant: function (createTimeInstants) {
        /// <summary>Determine if the time is displayed for an instant in time. Only valid when the thumb count is set to one.</summary>
        /// <param name="createTimeInstants" type="Boolean" optional="false">When true, the time slider displays features for the current point in time. When false cumulative data is displayed from the start time to the current thumb location. The default value is false.</param>
        /// <return type="none">none</return>
    },
    getCurrentTimeExtent: function () {
        /// <summary>Gets the current time extent for the time slider.</summary>
        /// <return type="TimeExtent">TimeExtent</return>
    },
    setLabels: function (labels) {
        /// <summary>Specify an array of strings to be used as labels. The array position for each string defines which tick it will be placed on.</summary>
        /// <param name="labels" type="String[]" optional="false">An array of strings that define the labels for each tick.</param>
    },
    setTickCount: function (count) {
        /// <summary>Specify the number of ticks to display on the time slider.</summary>
        /// <param name="count" type="Number" optional="false">The number of ticks to display on the slider.</param>
        /// <return type="none">none</return>
    },

};
esri.dijit.OverviewMap = function (params,srcNodeRef) {
    /// <summary>Creates a new OverviewMap object.</summary>
    /// <param name="params" type="Object" optional="false">Parameters that define the functionality of the OverviewMap widget. See the parameters information for details.&#10;
    /// Boolean visible&#10;
    /// Boolean maximizeButton&#10;
    /// Map map&#10;
    /// Layer baseLayer&#10;
    /// String id&#10;
    /// Number width&#10;
    /// Number height&#10;
    /// String attachTo&#10;
    /// Number expandFactor&#10;
    /// String color&#10;
    /// Number opacity</param>
    /// <param name="srcNodeRef" type="Object" optional="false">HTML element where the widget should be rendered.</param>
};
esri.dijit.OverviewMap.prototype =
{
    destroy: function () {
        /// <summary>Releases  the resources used by the dijit. Call this method when an instance of this dijit is no longer needed.</summary>
    },
    startup: function () {
        /// <summary>Finalizes the creation of the OverviewMap dijit. Call this method after the constructor for the dijit is called and before users interact with the dijit.</summary>
    },

};
esri.dijit.BasemapGallery = function (params,srcNodeRef) {
    /// <summary>Creates a new BasemapGallery dijit.</summary>
    /// <param name="params" type="Object" optional="false">Parameters used to configure the widgit. See the list below for details.&#10;
    /// Map map&#10;
    /// Boolean showArcGISBasemaps&#10;
    /// String bingMapsKey&#10;
    /// Basemap[] basemaps&#10;
    /// String[] basemapIds&#10;
    /// String[] referenceIds&#10;
    /// Object basemapsGroup</param>
    /// <param name="srcNodeRef" type="String" optional="true">Optional. Reference or id of the HTML element where the widget should be rendered. If a srcNodeRef is not provided the BasemapGallery has no user interface representation.</param>
    /// <field name="loaded" type="Boolean">This value is true after the BasemapGallery retrieves the ArcGIS.com basemaps.  If showArcGISBasemaps is false the loaded property is set to true immediately.</field>
    /// <field name="basemaps" type="Basemap[]">List of basemaps displayed in the BasemapGallery. The list contains basemaps added using the basemaps constructor option and if showArcGISBasemaps is true ArcGIS.com basemaps are also included.</field>
};
esri.dijit.BasemapGallery.prototype =
{
    startup: function () {
        /// <summary>Finalizes the creation of the basemap gallery. Call startup() after creating the widget when you are ready for user interaction. Startup is only required when a srcNodeRef is provided in the BasemapGallery constructor.</summary>
    },
    destroy: function () {
        /// <summary>Destroys the basemap gallery. Call destroy() when the widget is no longer needed by the application.</summary>
    },
    get: function (id) {
        /// <summary>Return the basemap with the specified id. Returns null if a basemap with the specified id is not found.</summary>
        /// <param name="id" type="String" optional="false">The basemap id.</param>
        /// <return type="Basemap">Basemap</return>
    },
    select: function (id) {
        /// <summary>Select a new basemap for the map. The map refreshes to display the new basemap. Returns null if a basemap with the specified id is not found.</summary>
        /// <param name="id" type="String" optional="false">The basemap id.</param>
        /// <return type="Basemap">Basemap</return>
    },
    add: function (basemap) {
        /// <summary>Add a new basemap to the BasemapGallery's list of basemaps. Returns true if the basemap is successfully added and false if the item was not added, e.g. if the id is already in the list of basemaps.</summary>
        /// <param name="basemap" type="Basemap" optional="false">The basemap to add to the map.</param>
        /// <return type="Boolean">Boolean</return>
    },
    remove: function (id) {
        /// <summary>Remove a basemap from the BasemapGallery's list of basemaps. Returns null if a basemap with the specified id is not found.</summary>
        /// <param name="id" type="String" optional="false">The basemap id.</param>
        /// <return type="Basemap">Basemap</return>
    },
    getSelected: function () {
        /// <summary>Gets the currently selected basemap. Returns null if the map is displaying a basemap that is not from the BasemapGallery.</summary>
        /// <return type="Basemap">Basemap</return>
    },

};
esri.dijit.BasemapLayer = function (params) {
    /// <summary>Creates a new BasemapLayer object.</summary>
    /// <param name="params" type="Object" optional="true">Optional. Set of parameters used to create a basemap layer. See the list below for details.&#10;
    /// String url&#10;
    /// String type&#10;
    /// Number[] displayLevels&#10;
    /// Number[] visibleLayers&#10;
    /// Number[] bandIds&#10;
    /// Boolean isReference&#10;
    /// Number opacity</param>
};
esri.dijit.BasemapLayer.prototype =
{

};
esri.dijit.Legend = function (params,srcNodeRef) {
    /// <summary>Creates a new Legend dijit. Should be called after all the layers have been loaded in the map, typically in the map's onLayerAddResult event.</summary>
    /// <param name="params" type="Object" optional="false">Parameters used to configure the dijit. See the list below for details.&#10;
    /// Map map&#10;
    /// Object[] layerInfos&#10;
    /// Boolean respectCurrentMapScale&#10;
    /// Number arrangement</param>
    /// <param name="srcNodeRef" type="String" optional="false">Reference or id of the HTML element where the widget should be rendered.</param>
    /// <field name="autoUpdate" type="Boolean">When false, the legend will not automatically update if the map changes scale or when layers are added are removed from the map. Call refresh to force a legend update. The default value is true.</field>
    /// <field name="hideLayers" type="Number[]">List of sublayer ids that are not displayed in the legend even if they are visible in the map.</field>
};
esri.dijit.Legend.prototype =
{
    destroy: function () {
        /// <summary>Destroys the legend. Call destroy() when the widget is no longer needed by the application.</summary>
    },
    startup: function () {
        /// <summary>Finalizes the creation of the legend . Call startup() after creating the widget when you are ready for user interaction.</summary>
    },
    refresh: function () {
        /// <summary>Refresh the legend.  Takes an optional list of layerInfos to replace the layers setup by the legend constructor. Calling refresh is only necessary when layerInfos is used in the Legend constructor, otherwise the legend will refresh the layers automatically.</summary>
    },

};
esri.dijit.Scalebar = function (params,srcNodeRef) {
    /// <summary>Creates a new Scalebar dijit.  The Scalebar constructor should be called after the map is loaded, e.g., in the map's onLoad event.</summary>
    /// <param name="params" type="Object" optional="false">Parameters used to configure the widgit. See the list below for details.&#10;
    /// Map map&#10;
    /// String scalebarUnit&#10;
    /// String attachTo</param>
    /// <param name="srcNodeRef" type="String" optional="true">Optional. Reference or id of the HTML element where the widget should be rendered.</param>
};
esri.dijit.Scalebar.prototype =
{
    show: function () {
        /// <summary>Set the scalebar's visibility to true. This method only applies if the scalebar has been hidden using scalebar.hide.</summary>
    },
    hide: function () {
        /// <summary>Hide the scalebar dijit.</summary>
    },
    destroy: function () {
        /// <summary>Destroy the scalebar. Call this method when the scalebar is no longer needed by the application.</summary>
        /// <return type="none">none</return>
    },

};
esri.dijit.Basemap = function (params) {
    /// <summary>Creates a new Basemap Object.</summary>
    /// <param name="params" type="Object" optional="true">Optional. Set of parameters used to create a basemap.  See options list.&#10;
    /// BasemapLayers[] layers&#10;
    /// String thumbnailUrl&#10;
    /// String title&#10;
    /// String id</param>
    /// <field name="id" type="String">The basemap's id.</field>
    /// <field name="title" type="String">The title for the basemap.</field>
    /// <field name="thumbnailUrl" type="String">The URL to the thumbnail image for the basemap.</field>
};
esri.dijit.Basemap.prototype =
{
    getLayers: function () {
        /// <summary>The list of layers contained in the basemap or a dojo.Deferred if a call to ArcGIS.com needs to be made to retrieve the list of ArcGIS.com basemaps.</summary>
        /// <return type="BasemapLayer[]">BasemapLayer[]</return>
    },

};
esri.dijit.Gallery = function (params,srcNodeRef) {
    /// <summary>Creates a new mobile Gallery.</summary>
    /// <param name="params" type="Object" optional="false">See options list.&#10;
    /// Object[] items&#10;
    /// String thumbnailStyle&#10;
    /// Boolean showTitle</param>
    /// <param name="srcNodeRef" type="String" optional="false">HTML element where the  gallery should be rendered.</param>
};
esri.dijit.Gallery.prototype =
{
    setFocus: function (item) {
        /// <summary>Set the focus to the specified item.</summary>
        /// <param name="item" type="Object" optional="false">The item which will have focus.</param>
        /// <return type="none">none</return>
    },
    select: function (item) {
        /// <summary>Select an item in the gallery.</summary>
        /// <param name="item" type="Object" optional="false">The item to select.</param>
        /// <return type="none">none</return>
    },
    getFocusedItem: function () {
        /// <summary>Gets the item with the current focus.</summary>
        /// <return type="Object">Object</return>
    },
    getSelectedItem: function () {
        /// <summary>Get the currently selected item.</summary>
        /// <return type="Object">Object</return>
    },
    next: function () {
        /// <summary>Move the gallery to the next page of items.</summary>
        /// <return type="none">none</return>
    },
    previous: function () {
        /// <summary>Move the gallery to the previous page of items.</summary>
        /// <return type="none">none</return>
    },
    startup: function () {
        /// <summary>Finalize the creation of the gallery.  Call startup after creating the gallery widget.</summary>
        /// <return type="none">none</return>
    },
    destroy: function () {
        /// <summary>Removes any object references and associated objects created by the gallery. The DOM node used by the gallery is also removed.</summary>
        /// <return type="none">none</return>
    },

};
esri.dijit.Measurement = function (params,srcNodeRef) {
    /// <summary>Creates a new Measurement widget, the widget should be created in the map's onLoad event handler.</summary>
    /// <param name="params" type="Object" optional="false">See options list for parameters.&#10;
    /// Map map&#10;
    /// MarkerSymbol pointSymbol&#10;
    /// SimpleLineSymbol lineSymbol&#10;
    /// Units defaultLengthUnit&#10;
    /// Units defaultAreaUnit</param>
    /// <param name="srcNodeRef" type="String" optional="false">Reference or id of the HTML element where the widget should be rendered.</param>
};
esri.dijit.Measurement.prototype =
{
    startup: function () {
        /// <summary>Finalizes the creation of the measurement widget . Call startup() after creating the widget when you are ready for user interaction.</summary>
    },
    destroy: function () {
        /// <summary>Destroy the measurement widget.</summary>
        /// <return type="none">none</return>
    },
    hide: function () {
        /// <summary>Hide the measurement widget.</summary>
        /// <return type="none">none</return>
    },
    show: function () {
        /// <summary>Show the measurement widget after it has been hidden using the hide method.</summary>
        /// <return type="none">none</return>
    },
    clearResult: function () {
        /// <summary>Remove the measurement graphics and results.</summary>
        /// <return type="none">none</return>
    },
    setTool: function (toolName,activate) {
        /// <summary>Activate or deactivate a tool.  The widget must be created before using this method so wait until after startup to set the tool.</summary>
        /// <param name="toolName" type="String" optional="false">The name of the tool to activate or deactivate. Valid values are "area", "distance", "location".</param>
        /// <param name="activate" type="Boolean" optional="false">When true, the specified tool is activated. Set to false to deactivate the tool.</param>
        /// <return type="none">none</return>
    },
    showTool: function (toolName) {
        /// <summary>Display the specified tool.</summary>
        /// <param name="toolName" type="String" optional="false"> Valid values are "area","distance","location".</param>
        /// <return type="none">none</return>
    },
    hideTool: function (toolName) {
        /// <summary>Hide the specified tool.</summary>
        /// <param name="toolName" type="String" optional="false"> Valid values are "area","distance","location".</param>
        /// <return type="none">none</return>
    },

};
esri.dijit.Popup = function (options,srcNodeRef) {
    /// <summary>Create a new Popup object.</summary>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  See options list.&#10;
    /// Boolean highlight&#10;
    /// MarkerSymbol markerSymbol&#10;
    /// LineSymbol lineSymbol&#10;
    /// FillSymbol fillSymbol&#10;
    /// Number offsetX&#10;
    /// Number offsetY&#10;
    /// Number marginLeft&#10;
    /// Number marginTop&#10;
    /// Number zoomFactor</param>
    /// <param name="srcNodeRef" type="String" optional="false">Reference or id of the HTML element where the widget should be rendered.</param>
    /// <field name="domNode" type="Object">The HTML element (reference to a DOM Node) where the info window is constructed.</field>
    /// <field name="isShowing" type="Boolean">Indicates if the info window is visible. When true the window is visible.</field>
    /// <field name="features" type="Graphic[]">The array of features currently associated with the info window. Returns null if no features are associated with the info window.</field>
    /// <field name="deferreds" type="Deferred[]">An array of  pending deferreds, null if there are not any pending deferreds. When the pending deferreds are resolved they are removed from the array and the features they return will be pushed into the features array.</field>
    /// <field name="count" type="Number">The number of features associated with the info window.</field>
    /// <field name="selectedIndex" type="Number">The index of the currently selected feature in the features array.  Value is -1 if there are no selected features.</field>
};
esri.dijit.Popup.prototype =
{
    setFeatures: function (features) {
        /// <summary>Associate an array of features or an array of deferreds that return features with the info window. The first feature in the array is automatically selected.</summary>
        /// <param name="features" type="Feature[] | Deferreds[]" optional="false">An array of features or deferreds.</param>
        /// <return type="none">none</return>
    },
    clearFeatures: function () {
        /// <summary>Removes all features and destroys any pending deferreds.</summary>
        /// <return type="none">none</return>
    },
    select: function (index) {
        /// <summary>Selects the feature at the specified index.</summary>
        /// <param name="index" type="Number" optional="false">The index of the feature to select.</param>
        /// <return type="none">none</return>
    },
    getSelectedFeature: function () {
        /// <summary>Get the currently selected feature.</summary>
        /// <return type="Graphic">Graphic</return>
    },
    setContent: function (content) {
        /// <summary>Set the content for the info window.</summary>
        /// <param name="content" type="String|Function" optional="false">The content for the info window.</param>
        /// <return type="none">none</return>
    },
    setTitle: function (title) {
        /// <summary>Set the info window title.</summary>
        /// <param name="title" type="String | Function" optional="false">The text for the title.</param>
        /// <return type="none">none</return>
    },
    show: function (location,options) {
        /// <summary>Display the info window at the specified location.</summary>
        /// <param name="location" type="Point" optional="false">An instance of esri.geometry.Point that represents the geographic location to display the popup.</param>
        /// <param name="options" type="Object" optional="true">Optional parameters. (As of 3.0).      &lt;Boolean&gt; closestFirst    When using the setFeatures method to display multiple features in the popup, enable this option to display the feature closest to the specified location first.  </param>
        /// <return type="none">none</return>
    },
    hide: function () {
        /// <summary>Hide the info window.</summary>
        /// <return type="none">none</return>
    },
    maximize: function () {
        /// <summary>Maximize the info window.</summary>
        /// <return type="none">none</return>
    },
    restore: function () {
        /// <summary>Restore the info window to the pre-maximized state.</summary>
        /// <return type="none">none</return>
    },
    resize: function (width,height) {
        /// <summary>Resize the info window to the specified height (in pixels).</summary>
        /// <param name="width" type="Number" optional="false">The new width of the InfoWindow in pixels.</param>
        /// <param name="height" type="Number" optional="false">The new height of the InfoWindow in pixels. This value is set to be the maximum allowable height, if the content doesn't fit within the specified height a vertical scroll bar is displayed.</param>
        /// <return type="none">none</return>
    },
    destroy: function () {
        /// <summary>Destroy the popup. Call this method when the popup is no longer needed by the application.</summary>
        /// <return type="none">none</return>
    },
    reposition: function () {
        /// <summary>Re-calculates the popup's position with respect to the map location it is pointing to. Typically popup automatically takes care of this whenever the content inside it is modified using setTitle, setContent or setFeatures methods. If you modify the popup's DOM in other ways, then you need to call this method to make sure it points to the correct map location.</summary>
        /// <return type="none">none</return>
    },

};
esri.dijit.PopupTemplate = function (popupInfo) {
    /// <summary>Create a new PopupTemplate object.</summary>
    /// <param name="popupInfo" type="Object" optional="false">An object that defines popup content. Field names can be used in the content by specifying the field name in curly brackets, for example {description}. View the Popup Content help topic for information on the object properties.</param>
    /// <field name="info" type="Object">The popup definition defined as  JavaScript object.</field>
};
esri.dijit.PopupTemplate.prototype =
{

};
esri.dijit.PopupMobile = function (options,srcNodeRef) {
    /// <summary>Create a new PopupMobile object.</summary>
    /// <param name="options" type="Object" optional="true">Optional. Optional parameters.  See options list.&#10;
    /// LineSymbol lineSymbol&#10;
    /// FillSymbol fillSymbol&#10;
    /// MarkerSymbol markerSymbol&#10;
    /// Number marginTop&#10;
    /// Number marginLeft&#10;
    /// Number offsetX&#10;
    /// Number offsetY&#10;
    /// Boolean highlight&#10;
    /// Number zoomFactor</param>
    /// <param name="srcNodeRef" type="String" optional="false">Reference or id of the HTML element where the widget should be rendered.</param>
};
esri.dijit.PopupMobile.prototype =
{
    clearFeatures: function () {
        /// <summary>Removes all features and destroys any pending deferreds.</summary>
        /// <return type="none">none</return>
    },
    destroy: function () {
        /// <summary>Destroy the popup. Call this method when the popup is no longer needed by the application.</summary>
        /// <return type="none">none</return>
    },
    getSelectedFeature: function () {
        /// <summary>Get the currently selected feature.</summary>
        /// <return type="Graphic">Graphic</return>
    },
    hide: function () {
        /// <summary>Hide the info window.</summary>
        /// <return type="none">none</return>
    },
    select: function () {
        /// <summary>Selects the feature at the specified index.</summary>
        /// <return type="none">none</return>
    },
    setContent: function () {
        /// <summary>Set the content for the info window.</summary>
        /// <return type="none">none</return>
    },
    setFeatures: function () {
        /// <summary>Associate an array of features or an array of deferreds that return features with the info window. The first feature in the array is automatically selected.</summary>
        /// <return type="none">none</return>
    },
    setTitle: function () {
        /// <summary>Set the info window title.</summary>
        /// <return type="none">none</return>
    },
    show: function () {
        /// <summary>Display the info window at the specified location.</summary>
        /// <return type="none">none</return>
    },

};
esri.dijit.Bookmarks = function (params,srcNodeRef) {
    /// <summary>Creates a new Bookmark widget</summary>
    /// <param name="params" type="Object" optional="false">See options list for parameters.&#10;
    /// Map map&#10;
    /// BookmarkItems[] bookmarks&#10;
    /// Boolean editable</param>
    /// <param name="srcNodeRef" type="Object" optional="false">HTML element where the bookmark widget should be rendered.</param>
    /// <field name="bookmarks" type="BookmarkItem">An array of BookmarkItem objects.</field>
};
esri.dijit.Bookmarks.prototype =
{
    addBookmark: function (bookmarkItem) {
        /// <summary>Add a new bookmark to the bookmark widget. The bookmark can be a BookmarkItem or a json object with the same format.</summary>
        /// <param name="bookmarkItem" type="BookmarkItem" optional="false">A BookmarkItem or json object with the same structure that defines the new location.</param>
        /// <return type="none">none</return>
    },
    removeBookmark: function (bookmarkName) {
        /// <summary>Remove a bookmark from the bookmark widget.</summary>
        /// <param name="bookmarkName" type="String" optional="false">The name of the bookmark to remove from the bookmark widget.</param>
        /// <return type="none">none</return>
    },
    destroy: function () {
        /// <summary>Destroy the bookmark widget. Call this method when the bookmark widget is no longer needed by the application.</summary>
        /// <return type="none">none</return>
    },
    hide: function () {
        /// <summary>Hides the Bookmark widget.</summary>
        /// <return type="none">none</return>
    },
    show: function () {
        /// <summary>Show the Bookmark widget.</summary>
        /// <return type="none">none</return>
    },
    toJson: function () {
        /// <summary>Returns an array of json objects.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.dijit.BookmarkItem = function (name,extent) {
    /// <summary>Creates a new BookmarkItem.</summary>
    /// <param name="name" type="String" optional="false">The name for the bookmark item.</param>
    /// <param name="extent" type="Extent" optional="false">The extent for the specified bookmark item.</param>
};
esri.dijit.BookmarkItem.prototype =
{

};
esri.dijit.Print = function (params,srcNodeRef) {
    /// <summary>Creates a new Print widget.</summary>
    /// <param name="params" type="Object" optional="false">Parameters for the print widget.  See the options table below for details on the parameters.&#10;
    /// String url&#10;
    /// Map map&#10;
    /// PrintTemplate[] templates&#10;
    /// Boolean async</param>
    /// <param name="srcNodeRef" type="Object" optional="false">HTML element where the print widget button and drop down list will be rendered.</param>
};
esri.dijit.Print.prototype =
{
    startup: function () {
        /// <summary>Finalizes the creation of the print widget. Call startup() after creating the widget when you are ready for user interaction.</summary>
        /// <return type="none">none</return>
    },
    destroy: function () {
        /// <summary>Destroys the print widget. Call destroy() when the widget is no longer needed by the application.</summary>
    },
    show: function () {
        /// <summary>Set the print widget's visibility to true.</summary>
    },
    hide: function () {
        /// <summary>Hide the print widget.</summary>
    },

};
esri.dijit.Gauge = function (params,srcNodeRef) {
    /// <summary>Create a new Gauge object.</summary>
    /// <param name="params" type="Object" optional="false">See options list for parameters.&#10;
    /// String caption&#10;
    /// String color&#10;
    /// String dataField&#10;
    /// String dataFormat&#10;
    /// String dataLabelField&#10;
    /// GraphicsLayer layer&#10;
    /// Number maxDataValue&#10;
    /// String noDataLabel&#10;
    /// Object numberFormat&#10;
    /// String title&#10;
    /// String unitLabel&#10;
    /// Boolean fromWebmap</param>
    /// <param name="srcNodeRef" type="String" optional="false">HTML element where the  gauge should be rendered.</param>
};
esri.dijit.Gauge.prototype =
{
    startup: function () {
        /// <summary>Finalizes the creation of the gauge. Call startup() after creating the widget when you are ready for user interaction.</summary>
    },
    destroy: function () {
        /// <summary>Destroy the gauge. Call this method when the gauge is no longer needed by the application.</summary>
        /// <return type="none">none</return>
    },
    get: function () {
        /// <summary>Get the value of the property from the Gauge.</summary>
        /// <return type="varies">varies</return>
    },
    set: function () {
        /// <summary>Set the value of a property from the Gauge.</summary>
        /// <return type="varies">varies</return>
    },

};
esri.renderer = function () {
    /// <summary>The esri.renderer namespace contains convenience methods that are not associated with any class.</summary>
};
esri.renderer.fromJson = function (json) {
    /// <summary>Converts the input JSON object to the appropriate esri.renderer.* object.</summary>
    /// <param name="json" type="Object" optional="false">The JSON object.</param>
    /// <return type="Object">Object</return>
};

esri.renderer.Renderer = function () {
    /// <summary>Class added v1.4.dojo.require("esri.renderer"); Base class for the renderers - SimpleRenderer, ClassBreaksRenderer, UniqueValueRenderer.The base class for all renderers used with a GraphicsLayer.  Renderer has no constructor. Use SimpleRenderer, ClassBreaksRenderer, or UniqueValueRenderer.</summary>
    /// <field name="defaultSymbol" type="Symbol">Default symbol used when a value or break cannot be matched.</field>
};
esri.renderer.Renderer.prototype =
{
    getSymbol: function (graphic) {
        /// <summary>Gets the symbol for the Graphic.</summary>
        /// <param name="graphic" type="Graphic" optional="false">Graphic to symbolize.  Used when creating a custom renderer.</param>
        /// <return type="Symbol">Symbol</return>
    },
    toJson: function () {
        /// <summary>Converts object to its ArcGIS Server JSON representation. Not supported for the TemporalRenderer.</summary>
        /// <return type="Object">Object</return>
    },

};
esri.renderer.SimpleRenderer = function (defaultSymbol,json) {
    /// <summary>Creates a new SimpleRenderer object with a Symbol parameter.</summary>
    /// <param name="defaultSymbol" type="Symbol" optional="false">Symbol to use for the renderer.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the SimpleRenderer.</param> = function (defaultSymbol,json) {
    /// <summary>Creates a new Simple Renderer</summary>
    /// <param name="defaultSymbol" type="Symbol" optional="false">Symbol to use for the renderer.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the SimpleRenderer.</param>
    /// <field name="symbol" type="Symbol">The symbol for the renderer.</field>
    /// <field name="label" type="String">Label for the renderer.</field>
    /// <field name="description" type="String">Description for the renderer.</field>
};
esri.renderer.SimpleRenderer.prototype =
{

};
esri.renderer.UniqueValueRenderer = function (defaultSymbol,attributeField,attributeField2,attributeField3,fieldDelimeter,json) {
    /// <summary>Creates a new UniqueValueRenderer object. Typically features are rendered based on the unique values of one attribute field. However up to three fields can be combined to generate a unique value. For example, if two fields are used which store the values A and B; and X, Y, and Z respectively, then the unique values for the renderer can be A:X, A:Y, A:Z, B:X, B:Y and B:Z, assuming ":" is the field delimiter.</summary>
    /// <param name="defaultSymbol" type="Symbol" optional="true">Optional. Default symbol for the renderer.  This symbol is used for unmatched values.</param>
    /// <param name="attributeField" type="String" optional="false">Attribute field renderer uses to match values. At version 3.0 the Class Breaks renderer can be used to render feature layer tracks. Specify the layer's trackIdField as the attributeField</param>
    /// <param name="attributeField2" type="String" optional="true">Optional. If needed, specify an additional attribute field the renderer uses to match values.</param>
    /// <param name="attributeField3" type="String" optional="true">Optional. If needed, specify an additional attribute field the renderer uses to match values.</param>
    /// <param name="fieldDelimeter" type="String" optional="true">Optional. String inserted between the values of different fields. Applicable only when more than one attribute field is specifed for the renderer.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the UniqueValueRenderer.</param> = function (defaultSymbol,attributeField,attributeField2,attributeField3,fieldDelimeter,json) {
    /// <summary>Creates a new Unique Value Renderer.</summary>
    /// <param name="defaultSymbol" type="Symbol" optional="true">Optional. Default symbol for the renderer.  This symbol is used for unmatched values.</param>
    /// <param name="attributeField" type="String" optional="false">Attribute field renderer uses to match values. At version 3.0 the Class Breaks renderer can be used to render feature layer tracks. Specify the layer's trackIdField as the attributeField</param>
    /// <param name="attributeField2" type="String" optional="true">Optional. If needed, specify an additional attribute field the renderer uses to match values.</param>
    /// <param name="attributeField3" type="String" optional="true">Optional. If needed, specify an additional attribute field the renderer uses to match values.</param>
    /// <param name="fieldDelimeter" type="String" optional="true">Optional. String inserted between the values of different fields. Applicable only when more than one attribute field is specifed for the renderer.</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the UniqueValueRenderer.</param>
    /// <field name="attributeField" type="String">Attribute field renderer uses to match values. At version 3.0 the Unique Value renderer can be used to render feature layer tracks. Specify the layer's trackIdField as the attributeField</field>
    /// <field name="values" type="String[]">Deprecated at v2.0, use infos instead. An array of values defined for the renderer.</field>
    /// <field name="defaultLabel" type="String">Label for the default symbol used to draw unspecified values.</field>
    /// <field name="attributeField2" type="String">If needed, specify an additional attribute field the renderer uses to match values.</field>
    /// <field name="attributeField3" type="String">If needed, specify an additional attribute field the renderer uses to match values.</field>
    /// <field name="fieldDelimiter" type="String">String inserted between the values if multiple attribute fields are specified.</field>
    /// <field name="infos" type="Object[]"> Each element in the array is an object that provides information about the unique values associated with the renderer. The object has the following properties:                                  &lt;String> value                                The unique value.                                                                  &lt;Symbol> symbol                                                  The symbol used to display the value.                                                                                          &lt;String> label                                                                    Label for the symbol used to draw the value.                                                                                                           &lt;String> description                                                                    Label for the symbol used to draw the value.                                     </field>
};
esri.renderer.UniqueValueRenderer.prototype =
{
    centerAt: function (valueOrInfo,symbol) {
        /// <summary>Adds a unique value and symbol. You can provide the value and its associated symbol as individual arguments or as an info object.</summary>
        /// <param name="valueOrInfo" type="String" optional="false">Value to match with. The value can be provided as individual arguments or as an info object with the following properties:                                  &lt;String> value                                The unique value.                                                                  &lt;Symbol> symbol                                                  The symbol used to display the value.                                                                                          &lt;String> label                                                                    Label for the symbol used to draw the value.                                                                                                           &lt;String> description                                                                    Label for the symbol used to draw the value.                                     </param>
        /// <param name="symbol" type="Symbol" optional="false">Symbol used for the value.</param>
    },
    removeValue: function (value) {
        /// <summary>Removes a unique value.  After making changes, you must refresh the graphic.</summary>
        /// <param name="value" type="String" optional="false">Value to remove.</param>
    },

};
esri.renderer.ClassBreaksRenderer = function (defaultSymbol,attributeField,json) {
    /// <summary>Creates a new ClassBreaksRenderer object.</summary>
    /// <param name="defaultSymbol" type="Symbol" optional="true">Optional. Default symbol for the renderer.  This symbol is used for unmatched values.</param>
    /// <param name="attributeField" type="String" optional="false">Attribute field renderer uses to match values. At version 3.0 the Class Breaks renderer can be used to render feature layer tracks. Specify the layer's trackIdField as the attributeField</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the ClassBreaksRenderer.</param> = function (defaultSymbol,attributeField,json) {
    /// <summary>Creates a new ClassBreaksRenderer.</summary>
    /// <param name="defaultSymbol" type="Symbol" optional="true">Optional. Default symbol for the renderer.  This symbol is used for unmatched values.</param>
    /// <param name="attributeField" type="String" optional="false">Attribute field renderer uses to match values. At version 3.0 the Class Breaks renderer can be used to render feature layer tracks. Specify the layer's trackIdField as the attributeField</param>
    /// <param name="json" type="Object" optional="false">JSON object representing the ClassBreaksRenderer.</param>
    /// <field name="attributeField" type="String">Attribute field renderer uses to match values. At version 3.0 the Class Breaks renderer can be used to render feature layer tracks. Specify the layer's trackIdField as the attributeField</field>
    /// <field name="breaks" type="Object[]">Deprecated at v2.0, use infos instead. A 2-D array representing defined breaks.  The array consists of [minValue,maxValue] pairs.</field>
    /// <field name="infos" type="Object[]">Each element in the array is an object that provides information about the class breaks associated with the renderer.</field>
};
esri.renderer.ClassBreaksRenderer.prototype =
{
    centerAt: function (minValueOrInfo,maxValue,symbol) {
        /// <summary>Adds a class break. You can provide the minimum, maximum and symbol values as individual arguments or using the info object.  The range of the break is greater than or equal to the minimum value and less than the maximum value.  After making changes, you must refresh the graphic.</summary>
        /// <param name="minValueOrInfo" type="Number" optional="false">The value can be provided as individual arguments or as an info object with the following properties:                                  &lt;Number> minValue                                The minimum value.                                                            &lt;Number> maxValue                                The maximum value.                                                                  &lt;Symbol> symbol                                                  The symbol used to display the value.                                                                                          &lt;String> label                                                                    Label for the symbol used to draw the value.                                                                                                           &lt;String> description                                                                    Label for the symbol used to draw the value.                                     </param>
        /// <param name="maxValue" type="Number" optional="true">Maximum value in the break.</param>
        /// <param name="symbol" type="Symbol" optional="true">Symbol used for the break.</param>
    },
    removeBreak: function (minValue,maxValue) {
        /// <summary>Removes a break.  After making changes, you must refresh the graphic.</summary>
        /// <param name="minValue" type="Number" optional="false">Minimum value in the break to remove.</param>
        /// <param name="maxValue" type="Number" optional="false">Maximum value in the break to remove.</param>
    },

};
esri.renderer.TemporalRenderer = function (observationRenderer,latestObservationRenderer,trackRenderer,observationAger) {
    /// <summary>Creates a new TemporalRenderer object that can be used with a time-aware feature layer.</summary>
    /// <param name="observationRenderer" type="Renderer" optional="false">Renderer for regular/historic observations.</param>
    /// <param name="latestObservationRenderer" type="Renderer" optional="true">Optional. Renderer for the most current observations.In the snippet below RouteID is the field that contains the trackID for the feature layer this is used to display the latest observation for the specified tracks.var latestObservationRenderer = new esri.renderer.UniqueValueRenderer(defaultSymbol, "RouteID");latestObservationRenderer.addValue(1,new esri.symbol.PictureMarkerSymbol('images/runnergreen.png',20,20));latestObservationRenderer.addValue(2,new esri.symbol.PictureMarkerSymbol('images/runnerblue.png',20,20));latestObservationRenderer.addValue(3,new esri.symbol.PictureMarkerSymbol('images/runnerred.png',20,20));</param>
    /// <param name="trackRenderer" type="Renderer" optional="true">Optional. Renderer for the tracks. A track is a collection of events that share a common track ID. A track line is a graphic line that connects the observations. Applicable only for feature layers with a valid trackIdField. var trackRenderer = new esri.renderer.SimpleRenderer(myLineSymbol);</param>
    /// <param name="observationAger" type="SymbolAger" optional="true">Optional. Symbol ager for regular observations.var infos = [      {      minAge: 0,      maxAge: 1,      color: new dojo.Color([255, 0, 0])},      {      minAge: 1,      maxAge: 5,      color: new dojo.Color([255, 153, 0])},      {      minAge: 5,      maxAge: 10,      color: new dojo.Color([255, 204, 0])},      {      minAge: 10,      maxAge: Infinity,      color: new dojo.Color([0, 0, 0, 0])}    ];var ager = new esri.renderer.TimeClassBreaksAger(infos, esri.renderer.TimeClassBreaksAger.UNIT_MINUTES);</param>
};
esri.renderer.TemporalRenderer.prototype =
{
    getSymbol: function (graphic) {
        /// <summary>Returns the symbol used to render the graphic.</summary>
        /// <param name="graphic" type="Graphic" optional="false">The input graphic.</param>
        /// <return type="Symbol">Symbol</return>
    },

};
esri.renderer.SymbolAger = function () {
    /// <summary>Class added v2.0. Base class for agers. Determine the symbology used to represent the aging of features in a feature layer.</summary>
};
esri.renderer.SymbolAger.prototype =
{
    getAgedSymbol: function (symbol,graphic) {
        /// <summary>All subclasses override this method to provide their own implementation to calculate aging and return the appropriate symbol.</summary>
        /// <param name="symbol" type="Symbol" optional="false">The symbol to age.</param>
        /// <param name="graphic" type="Graphic" optional="false">Feature being rendered.</param>
        /// <return type="Symbol">Symbol</return>
    },

};
esri.renderer.TimeRampAger = function (colorRange,sizeRange,alphaRange) {
    /// <summary>Creates a new TimeRampAger object with the specified color and size ranges.</summary>
    /// <param name="colorRange" type="dojo.Color" optional="true">Optional. An array containing the minimum and maximum color values the default is:[ new dojo.Color([0,0,0,0.1]), new dojo.Color([0,0,255,1]) ] New features will be close to the max value and older ones will be closer to the minimum value.</param>
    /// <param name="sizeRange" type="Number[]" optional="true">Optional. An array containing the minimum and maximum size in  pixels. The default value is [2,10]Newer features will be close to the max value and older ones will be close to the min value.</param>
    /// <param name="alphaRange" type="Number[]" optional="true">Optional. An array containing the minimum and maximum alpha opacity values.  Newer features will be close to the max value and older ones close to the min value. As of v2.8</param>
};
esri.renderer.TimeRampAger.prototype =
{
    getAgedSymbol: function (symbol,graphic) {
        /// <summary>Calculates aging and returns the appropriate symbol. See the SymbolAger class for details.</summary>
        /// <param name="symbol" type="Symbol" optional="false">The symbol to age.</param>
        /// <param name="graphic" type="Graphic" optional="false">Feature being rendered.</param>
        /// <return type="Symbol">Symbol</return>
    },

};
esri.renderer.TimeClassBreaksAger = function (infos) {
    /// <summary>Creates a new TimeClassBreaksAgerObject with the specified time breaks inforamtion.</summary>
    /// <param name="infos" type="Object[]" optional="false">Each element in the array is an object that describes the class breaks information. Each break info can specify a color, size or both. The features age is calculated with respect to the map's time extent end time. The object has the following properties:                                  &lt;Number> minAge                                The minimum age for the break info.                                                                  &lt;Number> maxAge                                                  The maximum age for the break info.                                                                                           &lt;dojo.Color> color                                                                    The color for the break.                                                                                                          &lt;Number> size                                                                    The size for the break.                                                                                                          &lt;Number> alpha                                                                   The alpha opacity for the break. Valid values are between 0 and 1. As of v2.8                                          </param>
};
esri.renderer.TimeClassBreaksAger.prototype =
{
    getAgedSymbol: function (symbol,graphic) {
        /// <summary>Calculates aging and returns the appropriate symbol. See the SymbolAger class for details.</summary>
        /// <param name="symbol" type="Symbol" optional="false">The symbol to age.</param>
        /// <param name="graphic" type="Graphic" optional="false">Feature being rendered.</param>
        /// <return type="Symbol">Symbol</return>
    },

};
esri.virtualearth = function () {
    /// <summary>esri - virtualearth</summary>
};
esri.virtualearth.VETiledLayer = function (options) {
    /// <summary>Creates a new VETiledLayer object.</summary>
    /// <param name="options" type="Object" optional="false">See options list for parameters.&#10;
    /// String culture&#10;
    /// String mapStyle&#10;
    /// String bingMapsKey</param>
    /// <field name="culture" type="String">Specifies the culture in which to return results. The default value is "en-US". For a list of supported cultures, see http://msdn.microsoft.com/en-us/library/cc981048.aspx.</field>
    /// <field name="mapStyle" type="String">Bing Maps style.  See Constants table for valid values.</field>
};
esri.virtualearth.VETiledLayer.prototype =
{
    setCulture: function (culture) {
        /// <summary>Sets the culture in which to return results.</summary>
        /// <param name="culture" type="String" optional="false">The culture value.  The default value is "en-US". For a list of supported cultures, see http://msdn.microsoft.com/en-us/library/cc981048.aspx.</param>
    },
    setMapStyle: function (style) {
        /// <summary>Sets the Bing Maps style.</summary>
        /// <param name="style" type="String" optional="false">Bing Maps style.  See Constants table for valid values.</param>
    },

};
esri.virtualearth.VEGeocoder = function (options) {
    /// <summary>Creates a new VEGeocoder object.</summary>
    /// <param name="options" type="Object" optional="false">See options list for parameters.&#10;
    /// String culture</param>
    /// <field name="culture" type="String">Specifies the culture in which to return results. The default value is "en-US". For a list of supported cultures, see http://msdn.microsoft.com/en-us/library/cc981048.aspx.</field>
};
esri.virtualearth.VEGeocoder.prototype =
{
    addressToLocations: function (query,callback,errback) {
        /// <summary>Sends a geocode request to Bing Maps to find candidates for a single address specified in the query argument. On completion, the onAddressToLocationsComplete event is fired and the optional callback function is invoked.</summary>
        /// <param name="query" type="String" optional="false">The address to locate.</param>
        /// <param name="callback" type="Function" optional="true">The function to call when the method has completed.  The arguments in the function are the same as the onAddressToLocationsComplete event.</param>
        /// <param name="errback" type="Function" optional="true">An error object is returned if an error occurs during task execution.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    setCulture: function (culture) {
        /// <summary>Sets the culture in which to return results.</summary>
        /// <param name="culture" type="String" optional="false">The culture value.  The default value is "en-US". For a list of supported cultures, see http://msdn.microsoft.com/en-us/library/cc981048.aspx.</param>
    },

};
esri.virtualearth.VEGeocodeResult = function () {
    /// <summary>Class added v1.4.  Represents a Bing Maps address and its location. Many of the property definitions are taken from the Bing Maps documentation GeocodeResult Class.  VEGeocodeResult has no constructor.Note:  there are restrictions when using Bing Maps geocoding:Geocodes may not be stored for any purpose except caching for performance.Geocodes may not be displayed on any map other than a Bing Map.For more information on the Bing Maps terms of use when using Esri products, see the Microsoft Bing Maps Services Terms of Use.</summary>
    /// <field name="address" type="VEAddress">Specifies address properties for the result.</field>
    /// <field name="bestView" type="Extent">Best extent for displaying the result.</field>
    /// <field name="calculationMethod" type="String">Contains values that indicate the geocode method used to match the location to the map. The values are "Interpolation", "Parcel", and "Rooftop".  For more information see http://msdn.microsoft.com/en-us/library/cc980868.aspx under "Match Methods".</field>
    /// <field name="confidence" type="String">Value indicating how confident the service is about the result.  Values are Low, Medium, and High.</field>
    /// <field name="displayName" type="String">Contains a display name for the result.</field>
    /// <field name="entityType" type="String">Further refines the geocode results that have been returned. For more details on entities and a list of entities that are returned see, http://msdn.microsoft.com/en-us/library/cc981001.aspx.</field>
    /// <field name="location" type="Point">The X and Y coordinates of the result in decimal degrees.</field>
    /// <field name="matchCodes" type="String">An array of values that indicate the geocoding level of the location match. For more information and a list of values, see http://msdn.microsoft.com/en-us/library/cc980868.aspx.</field>
};
esri.virtualearth.VEGeocodeResult.prototype =
{

};
esri.virtualearth.VEAddress = function () {
    /// <summary>Class added v1.4.  The Bing Maps address details. The property definitions are taken from the Bing Maps documentation Address Class.  VEAddress has no constructor.</summary>
    /// <field name="addressLine" type="String">Specifies the street line of an address. This property is the most precise, official line for an address relative to the postal agency servicing the area specified by the Locality, PostalTown, or PostalCode properties. Typical use of this element would be to enclose a street address, private bag, or any other similar official address.</field>
    /// <field name="adminDistrict" type="String">Specifies the subdivision name within the country or region for an address. This element is also commonly treated as the first order administrative subdivision, but in some cases it is the second, third, or fourth order subdivision within a country, dependency, or region.</field>
    /// <field name="countryRegion" type="String">Specifies the country or region name of an address.</field>
    /// <field name="district" type="String">Specifies the higher level administrative subdivision used in some countries or regions.</field>
    /// <field name="formattedAddress" type="String">Contains the complete address.</field>
    /// <field name="locality" type="String">Specifies the populated place for the address. This commonly refers to a city, but may refer to a suburb or neighborhood in certain countries.</field>
    /// <field name="postalCode" type="String">Specifies the post code, postal code, or ZIP Code of an address.</field>
    /// <field name="postalTown" type="String">Specifies the postal city of an address.</field>
};
esri.virtualearth.VEAddress.prototype =
{

};
esri.dijit.editing = function () {
    /// <summary>esri - dijit.editing</summary>
};
esri.dijit.editing.TemplatePicker = function (params,srcNodeRef) {
    /// <summary>Creates a  new TemplatePicker object that displays a gallery of templates from the input feature layers or items. A symbol and label is displayed for each template. The symbol is defined by the template's feature type. The label is the template's name.</summary>
    /// <param name="params" type="Object" optional="false">FeatureLayers or items are required all other parameters are optional. See options list.&#10;
    /// FeatureLayer[] featureLayers&#10;
    /// Object[] items&#10;
    /// Boolean grouping&#10;
    /// Boolean showTooltip&#10;
    /// Number maxLabelLength&#10;
    /// Number rows&#10;
    /// Number columns&#10;
    /// String style&#10;
    /// String emptyMessage&#10;
    /// Boolean useLegend</param>
    /// <param name="srcNodeRef" type="Object" optional="false">HTML element where the TemplatePicker will be rendered. Specify the HTML element using the "id" or a reference to the element."templatePickerDiv" or dojo.byId("templatePickerDiv");</param>
    /// <field name="grid" type="dojox.grid.DataGrid">Reference to the data grid used to display the templates.</field>
    /// <field name="tooltip" type="div">If tooltips are enabled the reference to the tooltip div.</field>
};
esri.dijit.editing.TemplatePicker.prototype =
{
    getSelected: function () {
        /// <summary>Gets the selected item picked by the user.</summary>
        /// <return type="Object">Object</return>
    },
    startup: function () {
        /// <summary>Finalizes the creation of the template picker. Call startup() after creating the widget when you are ready for user interaction.</summary>
    },
    destroy: function () {
        /// <summary>Destroys the template picker. Call destroy() when the widget is no longer needed by the application.</summary>
    },
    clearSelection: function () {
        /// <summary>Clears the current selection.</summary>
        /// <return type="none">none</return>
    },
    attr: function (name,value) {
        /// <summary>Get or set the properties of the template picker. See the dojo documentation for more details about this method.</summary>
        /// <param name="name" type="String" optional="false">Name of the attribute of interest.</param>
        /// <param name="value" type="Object" optional="true">Value for the specified attribute.</param>
    },
    update: function () {
        /// <summary>Updates the templatePicker after modifying the properties of the widget.</summary>
    },

};
esri.dijit.editing.Editor = function (params,srcNodeRef) {
    /// <summary>Creates a new Editor object.</summary>
    /// <param name="params" type="Object" optional="false">Parameters that define the functionality of the editor widget.  Create a new settings object to pass to the widget (see options).</param>
    /// <param name="srcNodeRef" type="Object" optional="false">HTML element where the widget should be rendered.</param>
};
esri.dijit.editing.Editor.prototype =
{

};
esri.dijit.editing.AttachmentEditor = function (params,srcNodeRef) {
    /// <summary>Creates a new AttachmentEditor object.</summary>
    /// <param name="params" type="Object" optional="false">No parameter options.</param>
    /// <param name="srcNodeRef" type="String" optional="false">HTML element where the widget is rendered.</param>
};
esri.dijit.editing.AttachmentEditor.prototype =
{
    startup: function () {
        /// <summary>Finalizes the creation of the attachment editor. Call startup() after creating the widget when you are ready for user interaction.</summary>
    },
    showAttachments: function (graphic,featureLayer) {
        /// <summary>Display the attachment editor.</summary>
        /// <param name="graphic" type="Graphic" optional="false">Graphic, with attachments, to display in the attachment editor.</param>
        /// <param name="featureLayer" type="FeatureLayer" optional="false">The feature layer to display attachments for. The feature layer must have attachments enabled.</param>
    },

};
esri.dijit.editing.Add = function (params) {
    /// <summary>Create a new Add operation.</summary>
    /// <param name="params" type="Object" optional="false">See options list for parameters.&#10;
    /// FeatureLayer featureLayer&#10;
    /// Graphic[] addedGraphics</param>
};
esri.dijit.editing.Add.prototype =
{
    performUndo: function () {
        /// <summary>Undo the current operation.</summary>
        /// <return type="none">none</return>
    },
    performRedo: function () {
        /// <summary>Redo the current operation.</summary>
        /// <return type="none">none</return>
    },

};
esri.dijit.editing.Delete = function (params) {
    /// <summary>Create a new Delete operation.</summary>
    /// <param name="params" type="Object" optional="false">See options list for parameters.&#10;
    /// Graphic[] deletedGraphics&#10;
    /// FeatureLayer featureLayer</param>
};
esri.dijit.editing.Delete.prototype =
{
    performRedo: function () {
        /// <summary>Redo the current operation.</summary>
        /// <return type="none">none</return>
    },
    performUndo: function () {
        /// <summary>Undo the current operation.</summary>
        /// <return type="none">none</return>
    },

};
esri.dijit.editing.Update = function (params) {
    /// <summary>Create a new Update operation.</summary>
    /// <param name="params" type="Object" optional="false">See options list for parameters.&#10;
    /// Graphic[] preUpdatedGraphics&#10;
    /// FeatureLayer featureLayer&#10;
    /// Graphic[] postUpdatedGraphics</param>
};
esri.dijit.editing.Update.prototype =
{
    performRedo: function () {
        /// <summary>Redo the current operation.</summary>
        /// <return type="none">none</return>
    },
    performUndo: function () {
        /// <summary>Undo the current operation.</summary>
        /// <return type="none">none</return>
    },

};
esri.dijit.editing.Cut = function (params) {
    /// <summary>Create a new Cut operation. Cut is a combination of the Add and Update operations.</summary>
    /// <param name="params" type="Object" optional="false">See options list for parameters.&#10;
    /// Graphic[] preUpdatedGraphics&#10;
    /// FeatureLayer featureLayer&#10;
    /// Graphic[] postUpdatedGraphics&#10;
    /// Graphic[] addedGraphics</param>
};
esri.dijit.editing.Cut.prototype =
{
    performRedo: function () {
        /// <summary>Redo the current operation.</summary>
        /// <return type="none">none</return>
    },
    performUndo: function () {
        /// <summary>Undo the current operation.</summary>
        /// <return type="none">none</return>
    },

};
esri.dijit.editing.Union = function (params) {
    /// <summary>Create a new Union operation. Union is a combination of the Delete and Update operations.</summary>
    /// <param name="params" type="Object" optional="false">See options list for parameters.&#10;
    /// Graphic[] preUpdatedGraphics&#10;
    /// FeatureLayer featureLayer&#10;
    /// Graphic[] postUpdatedGraphics&#10;
    /// Graphic[] deletedGraphics</param>
};
esri.dijit.editing.Union.prototype =
{
    performRedo: function () {
        /// <summary>Redo the current operation.</summary>
        /// <return type="none">none</return>
    },
    performUndo: function () {
        /// <summary>Undo the current operation.</summary>
        /// <return type="none">none</return>
    },

};
esri.tasks = function () {
    /// <summary>esri - tasks</summary>
};
esri.tasks.ClosestFacilityParameters = function () {
    /// <summary>Creates a new ClosestFacilityParameters object</summary>
    /// <field name="accumulateAttributes" type="String[]">The list of network attribute names to be accumulated with the analysis, i.e., which attributes should be returned as part of the response.</field>
    /// <field name="attributeParameterValues" type="Object[]">An array of attribute parameter values that determine which network elements can be used by a vehicle.</field>
    /// <field name="defaultCutoff" type="Number">The cutoff value used to determine when to stop traversing.</field>
    /// <field name="defaultTargetFacilityCount" type="int">The  number of facilities to find.</field>
    /// <field name="directionsLanguage" type="String">The language used when computing directions. By default the task will use the language defined in the network layer used by the RouteTask.</field>
    /// <field name="directionsLengthUnits" type="String">The length units used when computing directions. By default the value defined by the routing network layer is used.</field>
    /// <field name="directionsTimeAttribute" type="String">The name of the attribute field that contains the drive time values.  If not specified the task will use the attribute field defined by the routing network layer.</field>
    /// <field name="facilities" type="Object">The set of facilities loaded as network locations during analysis.</field>
    /// <field name="impedenceAttribute" type="String">The network attribute field name used as the impedance attribute during analysis.</field>
    /// <field name="incidents" type="Object">The set of incidents loaded as network locations during analysis.</field>
    /// <field name="outputGeometryPrecision" type="Number">The output geometry precision.</field>
    /// <field name="outputLines" type="String">The type of output lines generated in the result.</field>
    /// <field name="outSpatialReference" type="SpatialReference">The well-known id  of the spatial reference for the geometries returned with the analysis results. If the outSpatialReference is not specified, the geometries are returned in the spatial reference of the map.</field>
    /// <field name="pointBarriers" type="Object">The set of point barriers loaded as network locations during analysis. Can be an instance of  esri.tasks.DataLayer or esri.tasks.FeatureSet.At ArcGIS Server 10.1 an optional url property was added. Use this property to specify a REST query request to a Feature, Map or GP Service that returns a JSON feature set. The url property can be specified using DataFile  Note that either the features or url property should be specified. </field>
    /// <field name="polygonBarriers" type="Object">The set of polygon barriers loaded as network locations during analysis. Can be an instance of  esri.tasks.DataLayer or esri.tasks.FeatureSet.At ArcGIS Server 10.1 an optional url property was added. Use this property to specify a REST query request to a Feature, Map or GP Service that returns a JSON feature set. The url property can be specified using DataFile  Note that either the features or url property should be specified. </field>
    /// <field name="polylineBarriers" type="Object">The set of polyline barriers loaded as network locations during analysis. Can be an instance of  esri.tasks.DataLayer or esri.tasks.FeatureSet.At ArcGIS Server 10.1 an optional url property was added. Use this property to specify a REST query request to a Feature, Map or GP Service that returns a JSON feature set. The url property can be specified using DataFile  Note that either the features or url property should be specified. </field>
    /// <field name="restrictionAttributes" type="String[]">The list of network attribute names to be used as restrictions with the analysis.</field>
    /// <field name="restrictUTurns" type="String">Specifies how U-Turns should be handled. The default is as defined in the specific routing network layer used in your RouteTask.</field>
    /// <field name="returnDirections" type="Boolean">If true, directions will be generated and returned in the directions property of each RouteResult and RouteSolveResult. Default value is false.</field>
    /// <field name="returnFacilities" type="Boolean">If true, facilities will be returned with the analysis results. Default values is false.</field>
    /// <field name="returnIncidents" type="Boolean">If true, incidents will be returned with the analysis results. Default value is false.</field>
    /// <field name="returnPointBarriers" type="Boolean">If true, barriers will be returned in the barriers property of the ClosestFacilitySolveResult. Default value is false.</field>
    /// <field name="returnPolygonBarriers" type="Boolean">If true, polygon barriers will be returned in the barriers property of the ClosestFacilitySolveResult. Default value is false.</field>
    /// <field name="returnPolylineBarriers" type="Boolean">If true, polyline barriers will be returned in the barriers property of the ClosestFacilitySolveResult. Default value is false.</field>
    /// <field name="returnRoutes" type="Boolean">When true, closest facility routes will be generated and returned in the route property of each ClosestFacilityResult and ClosestFacilitySolveResult. Default value is true.</field>
    /// <field name="travelDirection" type="String">Options for traveling to or from the facility. Default values are defined by the newtork layer. See NATravelDirection for a list of valid values.</field>
    /// <field name="useHierarchy" type="Boolean">If true, the hierarchy attribute for the network will be used in analysis. The default is defined in the routing network layer used by the ClosestFacilityTask.</field>
    /// <field name="outputGeometryPrecisionUnits" type="String">The units of the output geometry precision. The default value is esriUnknownUnits</field>
    /// <field name="timeOfDay" type="Date">The arrival or departure date and time.</field>
    /// <field name="timeOfDayUsage" type="String">Defines the way the timeOfDay value is used. Known Values: start | end</field>
    /// <field name="doNotLocateOnRestrictedElements" type="Boolean">When true, restricted network elements should be considered when finding network locations. The default value is false.</field>
};
esri.tasks.ClosestFacilityParameters.prototype =
{

};
esri.arcgis = function () {
    /// <summary>esri - arcgis</summary>
};
esri.arcgis.utils = function () {
    /// <summary>dojo.require("esri.arcgis.utils");The esri.arcgis.utils namespace has several utility methods to work with maps from ArcGIS.com. These methods work with items shared on ArcGIS Online. You can discover the item's unique ID by browsing to the item in ArcGIS.com then extracting the id from the item's URL.</summary>
    /// <field name="esri.arcgis.utils.arcgisUrl" type="String">Specify the domain where the map associated with the webmap id is located. The default value is http://www.arcgis.com/sharing/content/items</field>
};
esri.arcgis.utils.getItem = function (itemId) {
    /// <summary>Get details about the input ArcGIS.com item.</summary>
    /// <param name="itemId" type="String" optional="false">The itemId for a publicly shared ArcGIS.com item. You can discover the item's unique ID by browsing to the item in ArcGIS.com then extracting the id from the item's URL.</param>
    /// <return type="dojo.Deferred">dojo.Deferred</return>
};
esri.arcgis.utils.createMap = function (itemIditemInfo,mapDiv,options) {
    /// <summary>Create a map using information from an ArcGIS.com item.</summary>
    /// <param name="itemIditemInfo" type="String|Object" optional="false">An itemId for an ArcGIS.com item or the response object obtained from calling the esri.arcgis.utils.getItem method. You can discover the item's unique ID by browsing to the item in ArcGIS.com then extracting the id from the item's URL.</param>
    /// <param name="mapDiv" type="String" optional="false">Container ID for referencing map.</param>
    /// <param name="options" type="Object" optional="false">Optional parameters that define the map functionality:      &lt;Object> mapOptions       See the optional parameters for the esri.map constructor for more details.          &lt;String> bingMapsKey       The Bing Maps Key, required if working with Microsoft Bing Maps.            &lt;Boolean> ignorePopups        When true, webmap defined popups will not display.          &lt;String> geometryServiceURL        URL to the ArcGIS Server REST resource that represents a geometry service. For more information on constructing a URL, see The Services Directory and the REST API.    </param>
    /// <return type="dojo.Deferred">dojo.Deferred</return>
};
esri.arcgis.Portal = function (url) {
    /// <summary>Creates a new Portal object.</summary>
    /// <param name="url" type="String" optional="false">The url to the ArcGIS.com site or in-house portal.</param>
    /// <field name="acccess" type="String">The access level of the organization. When public, anonymous users can access the organization. When private access is restricted to only members of the organization. Known Values: public | private</field>
    /// <field name="allSSL" type="Boolean">When true, access to the Portal resources must occur over SSL.</field>
    /// <field name="basemapGalleryGroupQuery" type="String">The query that defines the basemaps that are displayed in the Basemap Gallery.</field>
    /// <field name="canSearchPublic" type="Boolearn">When true, public items, groups and users are included in search queries. When false, no public items outside of the organization are included. However, public items which are part of the organization are included.</field>
    /// <field name="canSharePublic" type="Boolean">When true, members of the organization can share resources outside the organization.</field>
    /// <field name="created" type="Date">Date the organization was created.</field>
    /// <field name="defaultBasemap" type="Object">The default basemap the portal displays in the map viewer. Returns an object that provides the url and title to the default basemap service.</field>
    /// <field name="defaultExtent" type="Object">The default extent for the map the portal displays in the map viewer. The extent will be in the default basemap's spatial reference.</field>
    /// <field name="description" type="String"> A description of the organization / portal.</field>
    /// <field name="featuredGroups" type="Object[]">The featured groups for the portal. Returns an array of objects that provide access to the owner and title for each featured group.</field>
    /// <field name="featuredItemsGroupQuery" type="String">The query that defines the featured group. If null, then the most viewed items in the organization will be the featured items.</field>
    /// <field name="id" type="String">The id of the organization that owns this portal. If null then this is the default portal for anonymous and non organizational users.</field>
    /// <field name="isOrganization" type="Boolean">Indicates if the portal is an organization.</field>
    /// <field name="layerTemplatesGroupQuery" type="String">The query that defines the collection of editable layer  templates.</field>
    /// <field name="modified" type="Date">Date the organization was last modified.</field>
    /// <field name="name" type="String">The Name of the  organization / portal.</field>
    /// <field name="portalMode" type="String">Denotes multitenant or singletenant.</field>
    /// <field name="portalName" type="String">The name of the portal  i.e. ArcGIS Online.</field>
    /// <field name="symbolSetsGroupQuery" type="String">The query that defines the symbols sets used by the map viewer.</field>
    /// <field name="templatesGroupQuery" type="String">The query that defines the collection of templates that will appear in the template gallery.</field>
    /// <field name="thumbnailUrl" type="String">The url to the thumbnail of the organization.</field>
    /// <field name="url" type="String">The portal url.</field>
    /// <field name="culture" type="String">The default locale (language and country) information.</field>
};
esri.arcgis.Portal.prototype =
{
    queryGroups: function (queryParams) {
        /// <summary>Execute a query against the Portal to return a deferred  that when resolved returns PortalQueryResult that contain a results array of PortalGroup ojbects for all the groups that match the input query.</summary>
        /// <param name="queryParams" type="PortalQueryParams" optional="true">The input query parameters.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    queryUsers: function (queryParams) {
        /// <summary>Execute a query against the Portal to return a deferred that when resolved returns PortalQueryResult that contain a results array of PortalUser objects that match the input query.</summary>
        /// <param name="queryParams" type="PortalQueryParams" optional="true">The input query parameters.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    queryItems: function (queryParams) {
        /// <summary>Execute a query against the Portal to return a deferred that when resolved returns PortalQueryResult that contain a results array of PortalItem objects that match the input query.</summary>
        /// <param name="queryParams" type="PortalQueryParams" optional="true">The input query parameters.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    signIn: function () {
        /// <summary>Prompts the user using the IdentityManager and returns a deferred that when resolved returns the PortalUser for the input credentials.</summary>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    signOut: function () {
        /// <summary>Sign out of the Portal which resets the Portal and disables identity checking.</summary>
        /// <return type="Portal">Portal</return>
    },

};
esri.arcgis.PortalUser = function () {
    /// <summary>Class added v2.8Represents a registered user of the Portal. Personal details of the user, such as email and groups, are returned only to the user or the administrator of the user's organization. A user is not visible to any other users (except their organization's administrator) if their access setting is set to 'private'.View the ArcGIS Portal API REST documentation for the user for more details.</summary>
    /// <field name="access" type="String">The access level for the user: private, org or public. If private, the users descriptive information will not be available and the user name will not be searchable. Available only if the user is signed-in. Known Values: private | org | public</field>
    /// <field name="created" type="Date">The date the user was created.</field>
    /// <field name="culture" type="String">The default culture for the user.</field>
    /// <field name="description" type="String">Description of the user.</field>
    /// <field name="email" type="String">The user's email address. Available only if the user is signed-in.</field>
    /// <field name="fullName" type="String">The user's full name.</field>
    /// <field name="modified" type="Date">The date the user was modified.</field>
    /// <field name="orgId" type="String">The id of the organization the user belongs to.</field>
    /// <field name="portal" type="Portal">The portal.</field>
    /// <field name="preferredView" type="String">The user's preferred view for content, either Web or GIS. Available only if the user is signed-in.</field>
    /// <field name="region" type="String">The user's preferred region, used to set the featured maps on the portal home page, content in the gallery and the default extent for new maps in the Viewer.</field>
    /// <field name="role" type="String">The user's role in the organization: administrator (org_admin), publisher (org_publisher), or user (org_user).</field>
    /// <field name="tags" type="String[]">User-defined tags that describe the user.</field>
    /// <field name="thumbnailUrl" type="String">The url to the thumbnail image for the user.</field>
    /// <field name="username" type="String">The username for the user.</field>
};
esri.arcgis.PortalUser.prototype =
{
    getNotifications: function () {
        /// <summary>Get information about any notifications for the portal user.  Returns a deferred that when resolved provides access to the results as json. View the REST API documentation for details on the result format.</summary>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    getGroupInvitations: function () {
        /// <summary>Provides access to the group invitations for the portal user. Returns a deferred that when resolved provides access to the results as json. View the REST API documentation for details on the result format.</summary>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    getGroups: function () {
        /// <summary>Find all the groups that the portal user has permissions to access. Returns a deferred that when resolved provides access to an array of PortalGroup objects.</summary>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    getTags: function () {
        /// <summary>Access the tag objects that have been created by the portal user. Returns a deferred that when resolved provides access to an array of tag objects used by the user. Each tag object contains a tag property with the name of the tag along with a count that reports the number of times the tag was used.</summary>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    getFolders: function () {
        /// <summary>Find folders for the portal user. Returns a deferred that when resolved provides access to an array of PortalFolder objects.</summary>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    getItems: function (folderId) {
        /// <summary>Retrieve all the items in the specified folder. Returns a deferred that when resolved provides access to an array of PortalItem objects.</summary>
        /// <param name="folderId" type="String" optional="false">The id of the folder that contains the items to retrieve.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },

};
esri.arcgis.PortalFolder = function () {
    /// <summary>Class added v2.8The PortalFolder class provides information about folders used to organize content in a portal. Folders are only visible to the user and are used for organizing content within the user's content space.</summary>
    /// <field name="created" type="Date">The date the folder was created.</field>
    /// <field name="id" type="String">The id of the folder.</field>
    /// <field name="portal" type="Portal">The portal for the folder.</field>
    /// <field name="title" type="String">The title of the folder.</field>
    /// <field name="url" type="String">The url to to the folder.</field>
};
esri.arcgis.PortalFolder.prototype =
{
    getItems: function () {
        /// <summary>Find all the items in the folder. Returns a deferred that when resolved provides access to an array of PortalItem objects.</summary>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },

};
esri.arcgis.PortalGroup = function () {
    /// <summary>Class added v2.8The group resource represents a group within the Portal. A group resource represents a group (e.g., "San Bernardino Fires"). The visibility of the group to other users is deteremined by the access property. If the group is private no one except the administrators and the members of the group will be able to see it. If the group is shared with an organization, then all members of the organization will be able to find the group. View the ArcGIS Portal API REST documentation for the Group for more details. </summary>
    /// <field name="access" type="String">The access privileges on the group which determines who can see and access the group. Can be: private, org, or public.</field>
    /// <field name="created" type="Date">The date the group was created.</field>
    /// <field name="description" type="String">A detailed description of the group.</field>
    /// <field name="id" type="String">The id for the group.</field>
    /// <field name="isInvitationOnly" type="Boolean">If this is set to true, then users will not be able to apply to join the group.</field>
    /// <field name="modified" type="Date">The date the group was last modified.</field>
    /// <field name="owner" type="Portal">The username of the group's owner.</field>
    /// <field name="portal" type="Portal">The portal for the group.</field>
    /// <field name="snippet" type="String">A short summary that describes the group.</field>
    /// <field name="tags" type="String[]">User defined tags that describe the group.</field>
    /// <field name="thumbnailUrl" type="String">The url to the thumbnail used for the group.</field>
    /// <field name="title" type="String">The title for the group. This is the name that is displayed to users and by which they refer to the group. Every group must have a title and it must be unique for a user.</field>
    /// <field name="url" type="String">The url to the group.</field>
};
esri.arcgis.PortalGroup.prototype =
{
    getMembers: function () {
        /// <summary>Get the current members for the group. Returns a deferred that when resolved provides access to a PortalGroupMembers object.</summary>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    queryItems: function (queryParams) {
        /// <summary>Execute a query against the group to return a deferred that when resolved returns PortalQueryResults that contain a results array of PortalItem objects that match the input query.</summary>
        /// <param name="queryParams" type="PortalQueryParams" optional="true">The input query parameters.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },

};
esri.arcgis.PortalGroupMembers = function () {
    /// <summary>Class added v2.8List the users, owner and administrator of a group. Only available to members or administrators of the group. View the ArcGIS Portal API REST documentation for the Group Users for more details.</summary>
    /// <field name="owner" type="String">The user name of the owner of the group.</field>
    /// <field name="admins" type="String[]">An array containing the user names for each administrator of the group.</field>
    /// <field name="users" type="String[]">An array containing the user names for each user in the group.</field>
};
esri.arcgis.PortalGroupMembers.prototype =
{

};
esri.arcgis.PortalItem = function () {
    /// <summary>Class added v2.8An item (a unit of content) in the Portal. Each item has a unique identifier and a well known url that is independent of the user owning the item. An item may have associated binary or textual data which is available via the item data resource. View the ArcGIS Portal API REST documentation for the item for more details. </summary>
    /// <field name="access" type="String">Indicates the level of access: private, shared, org, or public.</field>
    /// <field name="accessInformation" type="String">Information on the source of the item.</field>
    /// <field name="avgRating" type="Number">Average rating. Uses a weighted average called "Bayesian average".</field>
    /// <field name="created" type="Date">The date the item was created.</field>
    /// <field name="culture" type="String">The item locale information (language and country).</field>
    /// <field name="description" type="String">The detailed description of the item.</field>
    /// <field name="extent" type="Object">The bounding rectangle of the item returned as an extent object.</field>
    /// <field name="id" type="String">The unique id for this item.</field>
    /// <field name="itemUrl" type="String">The url to the item.</field>
    /// <field name="itemDataUrl" type="String">The url to the data resource associated with the item.</field>
    /// <field name="licenseInfo" type="String">Any license information or restrictions.</field>
    /// <field name="modified" type="Date">Date the item was last modified.</field>
    /// <field name="numComments" type="Number">Number of comments on the item.</field>
    /// <field name="numRatings" type="Number">Number of ratings on the item.</field>
    /// <field name="numViews" type="Number">Number of views on the item.</field>
    /// <field name="name" type="String">The name of the item.</field>
    /// <field name="owner" type="String">The username of the user who owns this item.</field>
    /// <field name="portal" type="Portal">The portal that contains the item.</field>
    /// <field name="size" type="Number">The size of the item.</field>
    /// <field name="snippet" type="String">A summary description of the item.</field>
    /// <field name="spatialReference" type="String">The item's coordinate system.</field>
    /// <field name="tags" type="String[]">User defined tags that describe the item.</field>
    /// <field name="userItemUrl" type="String">The url to the user item.</field>
    /// <field name="thumbnailUrl" type="String">The url to the thumbnail used for the item.</field>
    /// <field name="title" type="String">The title for the item. This is the name that is displayed to users and by which they refer to the item. Every item must have a title.</field>
    /// <field name="typeKeywords" type="String[]">A set of keywords that further describes the type of this item. Each item is tagged with a set of type keywords that are derived based on its primary type.</field>
    /// <field name="url" type="String">The url for the resource represented by the item.</field>
    /// <field name="type" type="String">The gis content type of this item. Example types include : "Web Map" and "Web Mapping Application".</field>
};
esri.arcgis.PortalItem.prototype =
{
    addComment: function (comment) {
        /// <summary>Add a comment to the item.Only available for authenticated users who have access to the item. Returns a deferred that when resolved provides access to a PortalComment object.</summary>
        /// <param name="comment" type="String" optional="false">The text for the comment.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    getComments: function () {
        /// <summary>Get the comments associated with the item. Returns a deferred that when resolved provides access to an array of PortalComment objects.</summary>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    updateComment: function (comment) {
        /// <summary>Updates an item comment. Only available to the authenticated user who created the comment.</summary>
        /// <param name="comment" type="PortalComment" optional="false">A PortalComment that contains the comment updates.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    deleteComment: function (comment) {
        /// <summary>Deletes an item comment. Only available to the authenticated user who created the comment.</summary>
        /// <param name="comment" type="PortalComment" optional="false">The PortalComment to delete.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    addRating: function (rating) {
        /// <summary>Add a rating to an item that you have access to. Only 1 rating can be given to an item per user. If this call is made on an already rated item, the new rating will overwrite the current one. A user cannot rate their own item. Available only to authenticated users.</summary>
        /// <param name="rating" type="Number" optional="false">Rating to set for the item. Rating must be a number between 1.0 and 5.0.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    getRating: function () {
        /// <summary>Returns the rating (if any) given to the item. Returns a deferred that when resolved provides access to a PortalRating object.</summary>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },
    deleteRating: function (rating) {
        /// <summary>Delete a rating that you created for the specified item. Returns a deferred that when resolved provides access to a PortalRating object.</summary>
        /// <param name="rating" type="PortalRating" optional="false">Rating to delete.</param>
        /// <return type="dojo.Deferred">dojo.Deferred</return>
    },

};
esri.arcgis.PortalComment = function () {
    /// <summary>Class added v2.8Details about a comment on a Portal item.View the ArcGIS Portal API REST documentation for the item comment for more details.</summary>
    /// <field name="id" type="String">The comment id.</field>
    /// <field name="created" type="String">The date and time the comment was created.</field>
    /// <field name="owner" type="String">The user name of the user who created the comment.</field>
    /// <field name="comment" type="String">The comment text.</field>
};
esri.arcgis.PortalComment.prototype =
{

};
esri.arcgis.PortalRating = function () {
    /// <summary>Class added v2.8Details about the rating associated with a Portal item. View the ArcGIS Portal API REST documentation for the Item Rating for more details. </summary>
    /// <field name="created" type="Date">Date the rating was added to the item.</field>
    /// <field name="rating" type="Number">A rating between 1.0 and 5.0 for the item.</field>
};
esri.arcgis.PortalRating.prototype =
{

};
esri.arcgis.xxxPortalNotification = function () {
    /// <summary>Class added v2.8A notification for the specified user. Available only to the user to whom the notification was sent. Notifications can be generated for many types of events - user applying to join a group, acceptance of a group application, rejection of a group application, etc. Notifications are categorized by their notificationType.The supported notification types are: group_join, group_application_accepted, group_application_declined, user_invite, user_invitation_accepted and user_invitation_declined. More types will be added as needed in the future and developers should make sure they ignore types they do not know about rather than throw an error. </summary>
    /// <field name="id" type="String">The id of the notification.</field>
    /// <field name="received" type="Date">Date the notification was received.</field>
    /// <field name="target" type="String">The user who received the notification.</field>
    /// <field name="targetType" type="String">Currently the only value is user. In the future there may be additional target types.</field>
    /// <field name="type" type="String">??? Used???</field>
    /// <field name="data" type="Object">The data for the notification.</field>
};
esri.arcgis.xxxPortalNotification.prototype =
{

};
esri.arcgis.xxxPortalGroupInvitation = function () {
    /// <summary>Class added v2.8An individual invitation for a given group. The invitee may accept or decline. Invitations are currently only to join groups but may be extended in the future to allow for other target types. Developers should design their applications to make sure the targetType is checked and unknown target types are ignored.Invitations are also currently only sent to usernames. This is determined by the type property of the invitation. In the future other types of invitations might be introduced. Developers should design their applications to make sure they check type and ignore unknown types.</summary>
    /// <field name="accepted" type="String">???need to test is this a value that says if notificatino was accepted?</field>
    /// <field name="created" type="String">The date the invitation was created.</field>
    /// <field name="dateAccepted" type="String">The date the notification was accepted.</field>
    /// <field name="email" type="String">???not listed in rest - test</field>
    /// <field name="groupId" type="String">The id of the group. ??? Is this used? Or is it same as targetid</field>
    /// <field name="id" type="String">The id of the invitation.</field>
    /// <field name="mustApprove" type="Boolean">???not listed in rest test</field>
    /// <field name="received" type="Date">The id of the group (if targetType is set to group) that the user is invited to join.received	The date received.</field>
    /// <field name="role" type="String">The role which the invitee will have in the group, either group_member or group_admin.</field>
    /// <field name="targetId" type="String">The id of the group (if targetType is set to group) that the user is invited to join.</field>
    /// <field name="targetType" type="String">The type of invitation. For now this will only be set to group but other types might be added in the future.</field>
    /// <field name="type" type="String">For now always set to 'user'. In the future type could include other types of invitations.</field>
    /// <field name="fromUsername" type="String">The user name of the user who sent the invitation.</field>
    /// <field name="username" type="String">The user name of the user receiving the invitation.</field>
    /// <field name="expiration" type="Date">	Expiration of the invitation.</field>
};
esri.arcgis.xxxPortalGroupInvitation.prototype =
{

};
esri.arcgis.PortalQueryParams = function () {
    /// <summary>Class added v2.8Define parameters to use when querying. View the ArcGIS Portal API REST documentation for details.  </summary>
    /// <field name="num" type="String">The maximum number of results to be included. The default value is 10 and the maximum allowed value is 100.</field>
    /// <field name="q" type="String">The query string to search with.</field>
    /// <field name="sortField" type="String">A comma seperated list of field(s) to sort by. Valid fields are: title, created, type, owner, avgRating, numRatings, numComments and numViews.</field>
    /// <field name="start" type="String">The number of the first entry in the result set response. The index number is 1-based. The start parameter, along with the num parameter can be used to paginate the search results.</field>
};
esri.arcgis.PortalQueryParams.prototype =
{

};
esri.arcgis.PortalQueryResult = function () {
    /// <summary>Class added v2.8Details about the result of a query.</summary>
    /// <field name="queryParams" type="PortalQueryParams">The query parameters for the first set of results.</field>
    /// <field name="nextQueryParams" type="PortalQueryParams">The query parameters for the next set of results.</field>
    /// <field name="total" type="Number">The total number of results. The maximum number of results is limited to 1000.</field>
    /// <field name="results" type="Object[]">An array of  result item objects.</field>
};
esri.arcgis.PortalQueryResult.prototype =
{

};
