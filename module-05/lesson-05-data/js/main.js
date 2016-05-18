L.mapbox.accessToken = 'pk.eyJ1Ijoicmdkb25vaHVlIiwiYSI6Im5Ua3F4UzgifQ.PClcVzU5OUj17kuxqsY_Dg';

var map = L.mapbox.map('map', 'mapbox.light', {
    center: [-.23, 37.8]
    , zoom: 7
    , minZoom: 6
    , maxZoom: 9
    , maxBounds: L.latLngBounds([-6.22, 27.72], [5.76, 47.83])
});

//                var countyCentroids = omnivore.csv('kenya_education_2014.csv').addTo(map);

var currentGrade = 1
    , girls
    , boys
    , scaleFactor = .6;


omnivore.csv('data/kenya_education_2014.csv')
    .on('ready', function (e) {
        drawMap(e.target.toGeoJSON())
    })
    .on('error', function (e) {
        console.log(e.error[0].message);
    });

function drawMap(schoolData) {
    girls = L.geoJson(schoolData, {
        pointToLayer: function (feature, layer) {
            return L.circleMarker(layer, {
                color: '#D96D02'
                , opacity: 1
                , weight: 2
                , fillOpacity: 0
                , radius: calcRadius(Number(feature.properties.G1))
            });
        }
    }).addTo(map);

    boys = L.geoJson(schoolData, {
        pointToLayer: function (feature, layer) {
            return L.circleMarker(layer, {
                color: '#6E77B0'
                , opacity: 1
                , weight: 2
                , fillOpacity: 0
            });
        }
    }).addTo(map);

    sequenceUI();

    infoWindow();

    updateSymbols(); // call here to draw legend upon page load


}


function updateSymbols() {

    var radius, // variable to hold each radius
        allRadii = []; // empty array to hold all values

    girls.eachLayer(function (layer) {
        // store a reference to the radius value
        radius = calcRadius(Number(layer.feature.properties['G' + String(currentGrade)]));
        // use it to set the radius of the layer
        layer.setRadius(radius);
        // push it into the array
        allRadii.push(radius);
    });

    boys.eachLayer(function (layer) {
        radius = calcRadius(Number(layer.feature.properties['B' + String(currentGrade)]));
        layer.setRadius(radius);
        allRadii.push(radius);
    });

    drawLegend(allRadii);


}

function calcRadius(val) {
    var radius = Math.sqrt(val / Math.PI);
    return radius * .6;
}


function drawLegend(allRadii) {

    var legend = $('.legend');

    var circles = {
        max: ss.max(allRadii)
        , median: ss.median(allRadii)
        , min: ss.min(allRadii)
    }

    var svgCircles = '';

    var reverseCalc = function (radius) {
        return Math.round((Math.pow(radius / scaleFactor, 2) * Math.PI));
    }

    for (var circle in circles) {

        svgCircles += '<circle cx="' + 80 + '" cy="' + (circles[circle] - 140) * -1 + '" r="' + circles[circle] + '" stroke="#1C9976" stroke-width="1" fill="ghostwhite" />';

        svgCircles += '<text x="' + 60 + '" y = "' + (circles[circle] - 120) * -1 + '" fill= "#1C9976">' + reverseCalc(circles[circle]) + '</text>'

    }

    legend.html(svgCircles)

}



function sequenceUI() {

    var output = $('#grade span');

    $('.slider')
        .on('input change', function () {
            currentGrade = $(this).val();
            updateSymbols();
            output.html(currentGrade);
            console.log("hi");
        });


}

function infoWindow() {

    var info = $('#info');

    boys.on('mouseover', function (e) {
        var props = e.layer.feature.properties;
        info.show();
        $('#info span').text(props.COUNTY);
        $(".girls span:first-child").text('(grade ' + String(currentGrade) + ')');
        $(".boys span:first-child").text('(grade ' + String(currentGrade) + ')');

        $(".girls span:last-child").text(props['G' + String(currentGrade)].toLocaleString());
        $(".boys span:last-child").text(props['B' + String(currentGrade)].toLocaleString());

        e.layer.setStyle({
            fillOpacity: .6
        });

    });

    boys.on('mouseout', function (e) {
        info.hide();
        e.layer.setStyle({
            fillOpacity: 0
        });
    });

    $(document).mousemove(function (e) {
        // first offset from the mouse position of the info window
        info.css({
            "left": e.pageX + 6
            , "top": e.pageY - info.height() - 15
        });

        // if it crashes into the top, flip it lower right
        if (info.offset().top < 4) {
            info.css({
                "top": e.pageY + 15
            });
        }
        // do the same for crashing into the right
        if (info.offset().left + info.width() >= $(document).width() - 40) {
            info.css({
                "left": e.pageX - info.width() - 30
            });
        }
    });
}