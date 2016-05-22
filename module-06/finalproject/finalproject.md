Final Project - Roads I've Travelled Diary Map - Lab 06
====================

General Concept
---------------
My concept for the final project is to create an interactive spatial diary cataloguing the roads I have travelled through my life. I've been very fortunate to criss-cross north America, and I think it would be a powerful neat spatial visualization to see these roads catalogued by time period. I'd like to make it to share with family and friends my journies over time. I think there is some power to thinking of our personal past in a spatial manner. 


User Persona
--------------
The typical user would be a friend, relative, or stranger on the internet that is interested in learning more about me. They could load the map and see by the roads I was travelling at certain points of my life where I was living and what sort of things I was doing for vacation and work. Certainly the user would be novice, so the map would have to start running a timelapse showing roads travelled when the user clicked on it automatically. If users wanted to explore more a slider bar showing the cumulative roads would appear at the bottom and as it is slid from left to right the roads would cumulatively appear.

Data Visualization and Appearance
------------------------
I would sequence the map through time, with new roads travelled highlighting and then slowly fading (just like the sunrise tweets map, only with line features instead of points). The map would gradually build to show the entire web of highways that I have been down. Areas with lots of infill would indicate places I had lived or spend considerable time in. Hopefully these areas would show as bold spots on the map just like this map of streets in North America ![All Streets](https://i.imgur.com/XHX8rTG.jpg).

    
Data Source:
-------------
The particularily interesting challenge with this map would be obtaining the vast network of line data. I think there would be two ways this data could be obtained:
    1. Mapbox directions API

    I would make a table detailing major road trips on highways I have taken during my life, and include a year column. For example the table would look like an extended version of this:

![Example Table](tablescreenshot.png)
            
            Hopefully I could write a script to loop through these values and create a library of geojson objects with the output of each of these directions API requests and the year and comments attribute appended as a geojson field. This would save a huge amount of time, as I could quickly build a table of all large road trips, feed it into the script, and then have a geoJSON file showing the routes. I would assume that the route taken was the one that mapbox gives me (which would in most cases be correct). If an out of the ordinary route was taken, I would break it up into the separate destinations required to make the trip route correctly. For example see above where the trip to Florida is routed through Memphis, TN to ensure that it does not take the default route.
            

    2. The second method of data capture would involve selecting the likely streets that I have traveled down while living in cities. This method would involve selecting an entire area of streets using data available from Open Street map in QGIS. For example, I grew up in Longmont, CO so I would zoom in on the area and select most of the streets and areas in town I knew I had been to, and then save that file as a GeoJSON feature, with the year attribute. Eventually I would have a dataset showing all of the probably streets I had travelled on when I lived in various cities. This dataset could be combined with the highway trips dataset above, and then loaded into the project.

If I have time I'd also like to include a third column to all the data showing information about the specific road trip or area. For example, the Denver to Seattle item would have a comment that would read "I took a road trip here in the summer of 1992 when I was 6 years old. My parents and I camped along the way and enjoyed visiting the space needle". These descriptions could be fed into an info window that the user could click on. For the second data capture method I could write something like this for all values "I moved to Vancouver, BC when I was 18 to attend University. I lived there for 4 5 years and often return to visit." This would provide more contextual data and improve the "diary" function of the map.
    

