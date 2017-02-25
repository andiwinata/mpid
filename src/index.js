// var map = new Datamap({
//     element: document.getElementById('container'),
//     geographyConfig: {
//         dataUrl: require("./charts/nsw.json")
//     },
//     scope: 'custom',
//     setProjection: function (element, options) {
//         var projection, path;
//         projection = d3.geo.albersUsa();
//             // .center([-31.2532, 146.9211])
//             // .scale(element.offsetWidth)
//             // .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

//         path = d3.geo.path()
//             .projection(projection);

//         return {path: path, projection: projection};
//     }
// });

var map = new Datamap({
    element: document.getElementById('container'),
    scope: 'aus'
});

// var map = new Datamap({
//     element: document.getElementById('container'),
//     fills: {
//         HIGH: '#afafaf',
//         LOW: '#123456',
//         MEDIUM: 'blue',
//         UNKNOWN: 'rgb(0,0,0)',
//         defaultFill: 'green'
//     },
//     data: {
//         CA: {
//             fillKey: 'LOW',
//             healthIndex: 2002
//         },
//         FL: {
//             fillKey: 'MEDIUM',
//             healthIndex: 10381
//         }
//     },
//     geographyConfig: {
//         popupTemplate: function (geo, data) {
//             return ['<div class="hoverinfo"><strong>',
//                 'Health index in ' + geo.properties.name,
//                 ': ' + data.healthIndex,
//                 '</strong></div>'].join('');
//         }
//     }
// });

// // Draw a legend for this map
map.legend();