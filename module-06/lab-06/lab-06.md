# Lab 06: CartoDB.js and MAP673 Final Map Anticipation

## Part I. Using CartoDB.js

Using your own dataset hosted by CartoDB, build a client-side thematic web map using CartoDB.js the `createLayer()` method, and a source object. The map type may be of any kind (choropleth, prop symbol, etc). And you may symbolize it as you wish.

Be sure to minimally include:

* a map title and description (I recommend creating a div element and positioning it absolutely over the map, and structuring your header, paragraph and/or list items within that div)
* any relevant metadata
* **bonus:** a meaningful legend (the lesson doesn't cover this, but quickly search CartoDB's docs and consider how to include a legend in your map)

### Extra challenges: taking ownership over your learning

**Extra challenge option #1**: Extend what is covered in the lesson to include an interactive info window to retrieve specific information about map features. Consult the CartoDB guide [Creating an info window with the createLayer() function](http://docs.cartodb.com/faqs/infowindows/#creating-an-infowindow-with-the-createlayer-function).

**Extra challenge option #2**: Consider some ways to add some interactivity to the map through toggling on/off layers. This can be achieved through creating some button or UI elements to:
    
* toggle between layers [CartoDB layers switcher example](http://bl.ocks.org/rgdonohue/b01460970969e793ef86)
* toggle between sublayers [CartoDB sublayer switcher example](http://bl.ocks.org/rgdonohue/a477a617a71a8e1cfed5)

**Extra challenge option #3**: Experiment with some examples! Have a look at the [CartoDB examples](https://github.com/CartoDB/cartodb.js/tree/develop/examples). First make a copy of your index.html file (or a separate GitHub branch off your master branch), and try implementing some functionality of interest to you. Don't worry about breaking your code or script, or not getting it to work right. If stuck, briefly describe your experience and problem and post to the Canvas discussion board. If successful, consider briefly documenting your process and share your solution with the class.

## Part II. Your final project's topic, objectives, and data

It's time to start thinking deeply about your final map project for MAP673. Using the process covered in Module 05, the deliverable for this week will include three pieces:

1. the **map topic** and/or geographic phenomena your map will explore
2. an articulation of the **map's objectives** and **user needs**
3. your **data source** and (at least a sample of) the data required to meet the map's objectives

Write thorough descriptions/answers to the following within some text-based format of your choice, and submit through your GitHub account.

### Topic and/or geographic phenomena your map will explore

What are you mapping? Briefly describe the topic and the geography the map intends to represent. Also, provide a tentative title (and possibly a subtitle) for you map. Remember that good titles, while being provocative and potentially fun, also tell a user three things: 1. what is being mapped, 2. where it's being mapped, and 3. when the phenomena occurred.

### Map objectives and user needs

* Begin by answer the question,  "Why are you making this map?" 
* Consider your own positionality with respect to the map and tell us why you are making it and what you want to get out of it.
* Create a brief user persona and tell us what this persona(s) will get out of the map. Why are they using it? How would you characterize this user in terms of their expertise and motivation (i.e., novice/public, average, expert/domain-specific)
* Imagine a scenario about how the user may use the map. It need not cover all potential use case scenarios, but it should describe some potential action the user will engage in to meet their objective (i.e., filtering the data, searching for an address, changing the attribute through a dropdown menu)

## Data source

This one is really important. Sometimes we have great goals and ideas for a map. But if we can't (somewhat easily) get the data ... the map is going nowhere. I need to see that you have access to the data, or at least some ugly data that we can consider strategies for refining and cleaning up.

Provide me with 1. your anticipated data source (URL, etc) and 2. a small sample of the data (e.g., CSV, GeoJSON, Shapefile, or within a database)

## Part III. Anticipating your technology stack

While your answer to this question need not be definite at this point, briefly describe the "technology stack" you anticipate using for your final map. This should include:

* data and information processing tools, web-based or desktop (i.e., QGIS, [MapShaper](http://www.mapshaper.org/))
* the format you'll use to store your data (i.e., flat files such as CSV or GeoJSON, database technology such as CartoDB)
* the JS libraries you anticipate using or need (include any relevant plugins)
* other relevant web technologies you'll be using (i.e., HTML, CSS)
* the hosting platform you intend to use to host your map (i.e., GitHub pages, your own web server)

Note: This is a draft of the information we'll want to include in your final map writeup. While informative to curious users of your map, it also looks good to employers and clients in terms of demonstrating your expertise in the world of open source web mapping!

