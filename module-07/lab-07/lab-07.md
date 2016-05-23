#Lab 07: Web Mapping with D3.js

##Part I. D3.js Mapping

**Option #1** 9 pts.

Follow the lesson instructions and submit either a proportional symbol map or choropleth map using the provided data.

**Option #2** 10 pts.

Experiment with a new geography and map a new or different dataset. Note that for projecting specific countries or US states, you'll need to change the projection parameters. Specifically, there are two additional D3 methods you'll need to use. Consider these examples:

To center your map on the state of Colorado:

```javascript
var projection = d3.geo.albers()
        .center([0, 39.07])  // centering the project with lat value
        .rotate([105.42,0])  // rotating the earth to lon value
        .scale(7000)
        .translate([width / 2, height / 2]);
```

There are also standard parallels you can use within an Albers projection. To center your map on France:

```javascript
var projection = d3.geo.albers()
        .center([0, 46.2])
        .rotate([-2, 0])
        .parallels([43, 62])
        .scale(2500)
        .translate([width / 2, height / 2]);
```

Getting the projection parameters right for various projections can be a challenge. This stack overflow question, [d3js - how to set albers projection properly?](http://stackoverflow.com/questions/13303371/d3js-how-to-set-albers-projection-properly), may help. Consult examples and ask me for help!

Also, consider remaking a map previously made with a different web mapping technology (QGIS, Leaflet) with D3.js instead. The bi-variate power plant data from MAP672 would work well!

Or consult examples referenced within the lesson and see if you can get one working within your local development environment.

##Part II. Final Project Proposal

Submit a 1-2 page written project proposal (format of your choice) including: 

**from lab 06**
* description of data topic (with an anticipated map title)
* map objectives
* user needs articulated through a persona/scenario
* data sources

**new this week**
* identification of anticipate thematic representation (e.g., dot map, choropleth, prop symbols, etc)
* a content and requirements list (see Module 05)
* description of the anticipated user interaction (UI)
* a series of low fidelity wireframes, paper prototypes, or mockups (in addition to the 1-2 pages)



