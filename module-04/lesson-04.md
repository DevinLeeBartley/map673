# Lesson 04: Mapping Workflow Part I &ndash; Toward the elements of the User Experience

This module and the following one walk us through a typical, though somewhat simplified, web mapping process from start to finish. 

The goal is not to delineate the specific techniques one would always follow for making a web map, but rather to think through the design and development process at a more conceptual level. We want to highlight the points when design decisions are made. 

For this lesson we'll be using another JavaScript mapping library named [Mapbox.js](https://www.mapbox.com/mapbox.js). Like CartoDB's JavaScript library, Mapbox.js is  built upon Leaflet.js. Consider it a "wrapper" for Leaflet.js, which extends Leaflet's functionality. That is to say, the methods, options, and events that are available through the [Leaflet API](http://leafletjs.com/reference.html) are all available within the Mapbox.js library as well.

Much like [Leaflet's many useful plugins](http://leafletjs.com/plugins.html), there are additional [plugins for Mapbox.js](https://www.mapbox.com/mapbox.js/plugins/) that extend its functionality. 

If you don't already have an account with Mapbox, you'll want to sign up for one and request the [upgrade to the Mapbox Standard account](https://www.mapbox.com/help/nonprofit-student-plan/) as a student. You'll need to obtain this account and an access key for using Mapbox.js below.

## TOC
- [The user experience](#the-user-experience)
    - [user-centered design](#user-centered-design)
    - [personas and scenarios](#personas-and-scenarios)
    - [the elements of the user experience](#the-elements-of-the-user-experience)
- [The strategy plane: product objectives and user needs](#the-strategy-plane-product-objectives-and-user-needs)
- [Scope plane: functional specifications and content requirements](#scope-plane-functional-specifications-and-content-requirements)
    - [developing functional specifications and content requirements](#developing-functional-specifications-and-content-requirements)
- [The structure plane: interaction design and information architecture](#the-structure-plane-interaction-design-and-information-architecture)
    - [Data wrangling and preparation](#data-wrangling-and-preparation)
    - [Building a development boilerplate: HTML, CSS, and JavaScript](#building-a-development-boilerplate-html-css-and-javascript)
    - [Understanding the mapbox.js API](#understanding-the-mapboxjs-api)
    - [loading data into the app](#loading-data-into-the-app)
- [Additional Reading and Resources](#additional-reading-and-resources)

## The user experience

So far within the New Maps curriculum, we've been focused on some foundational principles of cartography and GIS (MAP671) and building the HTML/CSS/JavaScript skills (MAP672) needed for web map design and development. This lesson introduces some higher-order design strategies for approaching a web mapping project.

What follows falls under the fields of **user-centered design**, **usability engineering**, **user experience**, and **human-computer interaction**. These are all big fields, with lots of literature (some references are provided at the end of this lesson). We're going to give you a general sense of these design strategies and how they are applied uniquely throughout a mapping process. 

Keep in mind that, in addition to helping you make an effective interactive map, these practices are good "buzz words" to use when applying for jobs and speaking with potential client/employers. If you're asked a question like, "How would you begin to code a map that does XY or Z?", declaring variables and writing functions may not be the best first answer. Demonstrating that you have a broader sense of an application's design process will go a long way.

### user-centered design

**User-centered Design (UCD)**, also known as taking a **user-centered perspective**, is an approach to interface design and development that places an early and active focus on the needs of the user. This may seem obvious to some of us (and after you build products and design maps for clients long enough, it will become second nature). Of course you want to design your map so the intended user finds it easy, intuitive, and fun to use!!! Right? Who would argue against this?

Surprisingly, there are many things in the world, both within the analog and digital environments, that are NOT well-designed with the experience of the user in mind. Particularly, engineers and programmers coming out of Computer Science programs tend to build robust application interfaces that, though may be impressive in terms of the code efficiency and plethora of functionality, are overly complex and not well-designed visually. Users may have a hard time using them, or it may take a long time to figure out how to access certain functionality. GIS systems like ArcGIS and QGIS may still characterize this overly-complex interface design. Yet this attention to "usability" extends to all designed things in our built environment.

A classic book in this regard is *The Design of Everyday Things* (1998), by Donald Norman. Within the book Norman writes about encountering "frustrations of everyday life":

> If I were placed in the cockpit of a modern jetliner, my inability to perform gracefully and smoothly would neither surprise nor bother me. But I shouldn't have trouble with doors and switches, water faucets and stoves. "Doors?" I can hear the reader saying, "you have trouble opening doors?" Yes. I push doors that are meant to be pulled, pull doors that should be pushed, and walk into doors that should be slid. [ ... ] A door poses only two essential questions: In which direction does it move? On which side should one work it? The answers should be given by the design, without any need for words or symbols, certainly without any need for trial and error.

When Norman writes of the "psychology of everyday things," he talks of how people often blame themselves when they encounter elements of their built environment they do not understand how to use. They take the blame, even though, as Norman argues, it's really a poor design that's at fault. Consider a classic example (Figure 01). When you approach these doors, why are these signs indicating "push" or "pull" required? What does the design of the door handles tell you to do? What is your "call to action" in this case, to push or to pull?

![Classic problem of poor door design](lesson-04-graphics/norman-doors.png)  
**Figure 01.** Classic problem of poor door design.

The handle design invites an action to pull it. Imagine if you didn't read the sign, or couldn't! The signs to "pull" on the doors to the right aren't necessary. That handle design tells you to instinctually pull it open. Evidently whoever installed the doors on the left did so incorrectly. If indeed those doors require to be pushed to open, there should be a push plate there, instead of a pull handle. 

Even worse are the clear swinging glass doors that only open toward one direction. As you approach, you are unclear of what action you should take. You're forced to try one. You may get it right, or you may fail.

Another case of poor door design is the push bar on the top door below. Its design indicates that it should be pushed, but on which side? The door will only swing open one direction, so inevitably a user will push on both ends to determine this. The push handle design on the bottom is an improvement: it offers the same functionality as the one on top, but it indicates that the door hinges are on the left.

![Bar indicates to push, but which side? Lower is improvement.](lesson-04-graphics/doors-push.png)  
**Figure 02.** Bar indicates to push, but which side? Lower is improvement.

While Norman explores similar examples from daily living, we can apply this way of thinking to the design of a digital interface as well. We spend a lot of time working with the data, struggling to get our code error free, learning how to put an interface widget on the map and fire a function when the user changes its value. But often we lose sight of how that interface may be used by someone who hasn't built the map. We forget about the user experience itself, which should always remain present as we design and develop.

Consider some of the maps we've already made through the courses. When we place a simple marker or a circle on the map, and the user can click on this marker to open a popup, how does the user know about this functionality? They may have experience using Leaflet maps, and therefore test. Or, perhaps we change the color of the marker slightly when the user mouses over the marker, giving them an indication that further interaction is possible. This small example of offering the user an "affordance" illustrates a UCD perspective.

Remember that we may become great programmers and write beautiful, optimized code underlying our maps. We may design complex interfaces that offer dozens of different features for filtering, re-expressing, re-symbolizing and exploring our data. But if users are unsure of how to interact with the interface, they may become confused and run out of patience using it.

The following graphic illustrates two competing tensions that influence whether an interface design is successful. While it is in part due to the **level of complexity** (the higher the complexity, the greater the chance of interface failure), the **user's expertise and motivation** also enters into how the interface is used. Having a sense of your user's experience using similar interfaces and their motivation to learn the system will help you make key design decisions. 

![User motivation vs Interface Complexity, from Roth and Harrower](lesson-04-graphics/user-motivation-interface-complexity.png)  
**Figure 03.** User motivation vs Interface Complexity, from (2008) Roth and Harrower.

Other than Donald Norman, the other name you should know with respect to usability engineering and UCD is Jacob Nielsen (Ph.D. in human-computer interaction), who along with Norman, formed the [Nielsen Norman Group](https://www.nngroup.com/). Their company provides empirically-based advice and consulting for improving usability of information design, and their research informs such resources as [usability.gov](http://www.usability.gov/), which provides detailed guidelines for the UCD process and improving the utility of interfaces. The usability website is worth perusing as it offers a valuable resource when considering the various solutions for a given design problem.

### personas and scenarios

While more robust processes using UCD  bring the target user through the mapping design and development phases from beginning, another less intensive approach is to develop what is known as a **persona** of the user, which is an abstracted but specific description of the intended user. Often the use of a persona is coupled with a **scenario**, which is a detailed description, or story, of how the user will engage with the interface. A scenario may sound something like:

>Tom is curious about cancer rates across America.  He sees the wider pattern of the data displayed as a choropleth map. He becomes concerned about the high rates in his state of Kentucky and then zooms in to obtain more detailed information about Kentucky counties, which will appear within an info window when hovering over specific counties. He then is curious to see how these rates have changed over time. A time slider available on the edge of the map allows his to sequence through temporal data.

Personas and scenarios may go beyond merely detailing the functionality or steps of a system to consider the motivations and emotions of the user. 

One of the more influential people to make use of personas and scenarios is Alan Cooper. In his book, *The Inmates are Running the Asylum* (2004), Cooper writes that traditionally UI design questions were left to programmers, who were not trained in design and often built software application interfaces that were painful and difficult to use. To help solve this, he advocates using personas and scenarios to develop what he dubs **goal-directed design**, a subset of user-centered design that organizes design and development processes in terms of how decisions ultimately meet the goals of the user.

### the elements of the user experience

Both the Nielson Norman group's Usability Engineering/HCI approach and Cooper's personas/scenarios approach offer guidance for achieving successful interface design. Ultimately, both are interested in improving the user's experience (UX). However, strict adherence to one over the other, or following either as a procedural guarantee of usability success, is not likely recommended in practice. While both may make perfect sense in the abstract, following a USD lifecycle or creating a persona may not yield the desired results. It's probably best to be aware of these strategies and to think of them as suggestions you should blend with your own experience and design sensibilities as they continue to grow.

To that end, we'll introduce one additional but related approach: that of writer/designer Jesse James Garrett,  a founder of [Adaptive Path](http://www.adaptivepath.com/), a user experience consultancy based in San Francisco. Garrett's insights are most notably captured in his 2011 book titled *The Elements of the User Experience*. Like the other approaches described above, Garrett too recognizes the important of taking the user's experience into account at every step of the process. However, the implications of this are complex and made more simple by breaking down the user experience design process into its principle components. To this end he offers five planes, the **elements of the user experience**, which are placed on a continuum of more abstract to more concrete.

![Garrett's elements of the user experience](lesson-04-graphics/elements-user-experience.png)  
**Figure 04.** Garrett's elements of the user experience.

Garrett extends uses his abstract - concrete continuum of user experience elements to address a "basic duality" between a product as functionality and one as information.  As he writes:

>When the Web user experience community started to form, its
members spoke two different languages. One group saw every problem
as an application design problem, and applied problem-solving
approaches from the traditional desktop and mainframe software
worlds. (These, in turn, were rooted in common practices applied
to creating all kinds of products, from cars to running shoes.) The
other group saw the Web in terms of information distribution and
retrieval, and applied problem-solving approaches from the traditional
worlds of publishing, media, and information science.

Rather than pick one over the other, Garrett offers a further modification to his elements in which both functional and informational elements play a role on each plane of the elements' scope.

![Garrett's elements of the user experience addressing the product function duality](lesson-04-graphics/product-function-information.png)  
**Figure 05.** Garrett's elements of the user experience addressing the product function duality.

As we move forward through this lesson, we'll explore these elements of the user experience and apply them to a mapping workflow seeking to create a map of Kenyan education. However, these planes should not be viewed with firm edges. One does not completely finish the goals of the strategy plane before moving on the scope plane. Design is an interactive process, but these elements can provide a structure and direction for moving through a project.

## The strategy plane: product objectives and user needs

For this lesson our mapping scenario is as follows: The Kenyan government has  invested in their education system, and they are proud of the equal rates of boys and girls attending primarily school. They are interested in knowing more about  the attrition rates of boys and girls as they progress through school, and they (the "stakeholders") would like to see the data they've collected on a map to help visualize this. 

We've been hired by the Kenyan government to make a map with data they've provided through the [Kenya Open Data Portal](https://opendata.go.ke/) portal. Note that the Kenyan government has an impressive collection of clean open data (though of course we should always be asking critical questions as to the quality and selectiveness of the data)! 

We've been directed to download data of Kenyan enrollment across primary schools (grades 1 - 8) for the year 2014: [National Boys and Girls Enrollments numbers per Class for Primary School](https://www.opendata.go.ke/ECD-and-Primary-EDU/National-Boys-and-Girls-Enrollments-numbers-per-Cl/wchj-qzhr)

While it's tempting to immediately grab the data and work on getting it loaded into a map, let's first consider the wider design strategy and ask the most general of questions, "Why are we making this product?" 

![Strategy Plane](lesson-04-graphics/strategy-plane.png)  
**Figure 06.** Strategy Plane.

As Garrett writes, 

>The most common reason for the failure of a Web site is not technology. It’s not user experience either. Web sites most often fail because—before the first line of code was written, the first pixel was pushed, or the first server was installed—nobody bothered to answer two very basic questions:
>
>1. What do we want to get out of this product?
>2. What do our users want to get out of it?

Our first step is then to answer these two questions.

What we as mappers want to get out of this product is an intuitive interface that visually represents the data in a meaningful way and allows for interaction with which the data can be explored.

Since we're not actually dealing directly with the Kenya government, we'll need to make up the answers by anticipating who the stakeholders or "clients" are and what they want (i.e., create a persona/scenario). For this case, let's say we've determined that the the user wants to:

1. see the spatial distribution of boys and girls enrollment rates across the Kenyan counties for a given grade
2. be able to visually compare boys and girls enrollment rates across these schools for a given grade
3. see any changes in this distribution through the grade levels (i.e., how do rates change as students progress through the grades?)

There are a number of ways we could think about achieving these goals. For that, we'll move on to the next plane.

## Scope plane: functional specifications and content requirements

The scope plane allows us to get more concrete than the strategy plane. Moving beyond the question of why we're making the map, we're now ready to answer the question, "What are we going to make?" 

![Scope Plane](lesson-04-graphics/scope-plane.png)  
**Figure 07.** Scope Plane.

Garrett writes, 

>Strategy becomes scope when you translate user needs and product objectives into specific requirements for what content and functionality the product will offer to users.

We want to think about this both in terms of functional specifications and content requirements. While these are conceptually split within the functionality/information dualism posed by Garrett, in practice they influence each other. As mappers, it may be better to let the content drive the functionality. This echoes a broader ["content-first" approach](https://gathercontent.com/blog/designing-content-first-for-a-better-ux) within general web UX/UI design. Let's begin with the "content" of our application, which will be a cartographic representation of the data itself.

First download the data, [National Boys and Girls Enrollments numbers per Class for Primary School](https://www.opendata.go.ke/ECD-and-Primary-EDU/National-Boys-and-Girls-Enrollments-numbers-per-Cl/wchj-qzhr). In any mapping project, it's a good idea to get a sense of the data availability and quality early on in the process. Beyond our need to determine the product scope's specific requirements, it's practically advisable to not move forward on a mapping project until you're certain the necessary data is available. Clients can be notorious about wanting you to move forward using placeholder data until the real information is gathered. This is a recipe for disaster (and a user-experience failure).

We can see the data portal displays the data for us in the web page itself:

![National Boys and Girls Enrollments numbers per Class for Primary School in the web page](lesson-04-graphics/kenya-portal.png)  
**Figure 08.** National Boys and Girls Enrollments numbers per Class for Primary School in the web page.

Take note of the structure of the data:

1. records are organized so each row contains the number of students for either boys or girls, for a particular grade level, aggregated to the county level
2. county centroids are provided (that's handy!)

One important question we as mappers should consider when asking, "What are we going to make?" is "Do we really need to make a map?" There is a lot of interest in making maps and seeing data in a geospatial form. But always remember that sometimes a simple bar chart or graph may actually be more effective for reaching the user's goals. A more basic question when it comes to what we will make is, "Is the data actually geospatial?" Not all interesting data have a geospatial signature, or it may be costly or impractical to discover what this is. In this case, the data seems appropriate for a map of Kenya's counties.

While in some cases we may need to write a script to scrape these data from the web page (or email the administrator and ask for a digital copy), this portal allows us to download the data in a variety of static formats (e.g., CSV, JSON, PDF) using the blue Export button. We may want to download a few different formats to compare them, as we begin to anticipate our needs to further process the data. For now, let's download the CSV version.

I'm going to use Open Office's Calc program to first inspect the data (though you may prefer to use Microsoft Excel). For now I'll simply open up the data file to inspect it's contents and structure. I can see that it mirrors what was on their web page.

![National Boys and Girls Enrollments numbers per Class for Primary School opened as a CSV in Open Office Calc](lesson-04-graphics/data-csv-open-office.png)  
**Figure 09.** National Boys and Girls Enrollments numbers per Class for Primary School opened as a CSV in Open Office Calc.

Scanning through the data, we see there are records for each county for each grade for boys and girls. We can now better anticipate the content and move toward articulating those requirements.

### developing content requirements and functional specifications of a map

Once we have a better sense of the data, we're ready to begin thinking about how to best represent that data cartographically, in a thematic form. 

As web mappers, our choice of the thematic form is dictated by a few factors. For one, like static (or classical) cartography, we know there are a number of thematic map types (i.e., symbology) that can be used to display different kinds of data (see Figure 10). To summarize a few of these map types quickly:  

* **Choropleth** maps use defined polygons, e.g., states, counties or user-created grid cells, etc., to display values for aggregated data within each area.
* **Isopleth**  or **heat** maps visualize continuous phenomenon (e.g., temperature or elevation) 
* **Dot** maps show the actual location of each observation within a dataset (e.g., car crashes or tweets) when there is a one to one relationship and the general distribution of a phenomena when there is a one to many relationship (e.g., a “dot density" map).
* **Proportional** symbol maps use differing sized symbology located at the site of a phenomenon to compare magnitudes (e.g., the number of tweets per state).

![Types of Thematic Maps Reproduced from Slocum, et al., 2009](lesson-04-graphics/thematic-map-types.png)  
**Figure 10.** Types of Thematic Maps Reproduced from Slocum, et al., 2009.

In selecting a thematic map type it is useful to classify the phenomenon along two continua in which the vertical axis represents a discrete-continuous continuum and the horizontal axis operates along an abrupt-smooth continuum (see Figure 11). 

![Character of the distribution of phenomena influences the map type. Reproduced from MacEachren (1992)](lesson-04-graphics/symbol-type-distribution.jpg)  
**Figure 11.** Character of the distribution of phenomena influences the map type. Reproduced from MacEachren (1992).

While the boundaries of these rules are fluid, this acts as a useful guide for selecting an appropriate map type and symbology. For example, for tax rates by county, this is a continuous phenomena (i.e., it exists across the whole of the landscape), yet it is also abrupt (i.e., the rates change at county borders). Therefore, a choropleth map is an appropriate symbology for this phenomena. Suppose we wanted to map individuals living in the United States. These individuals are a discrete phenomena, but they also exist in a fairly smooth pattern (well, we know they are concentrated in urban areas, but not all). Therefore a dot map would be useful for this phenomena (see this example of [The Racial Dot Map](http://demographics.coopercenter.org/DotMap/)).

In the case of the school enrollments we're aiming to map in this scenario, we can think carefully of the phenomena in two senses. For one, the individual schools from which the enrollment rates are aggregated are a discrete, abrupt phenomena. If we had data from the individual schools, this type of phenomena begs for a proportional symbol map, in a similar way as our power plants did in the MAP672 examples. Yet we can also think of the students attending these schools as coming from the surrounding counties, and although we don't know for sure which county they may live in, it's not unreasonable to infer that residence in a particular county means they attend a particular school. Therefore, a choropleth by county is another option as well. Since the data are in fact aggregated to the county level, we can use either a proportional symbol map (i.e., using the centroid of the county) or a choropleth map.

The second factor we must consider, as web mappers specifically, are the limitations of our tools to create a diverse range of thematic map types (as well as our own technical limitations or experience for implementing available solutions). So far we've really only been making dot maps, proportional symbol maps, and choropleth maps. This is in part because they generally work well for most use-case scenarios, but also because the emerging web mapping libraries are still quite young, as well as rapidly changing. While techniques are emerging for creating better isoline and flow maps, we're still pushing at the horizon of the diversity of thematic forms we can employ. See some of these examples using various JavaScript libraries:

* [Mapbox Studio Gallery](https://www.mapbox.com/gallery/)
* [CartoDB gallery](https://cartodb.com/gallery/)
* [D3.js gallery](https://github.com/mbostock/d3/wiki/Gallery#maps)

Long story short, for this lesson we're going to symbolize these data using proportional symbols (though later on we can consider strategies for re-symbolizing the data as choropleth map standardized to the county unit).

Here's an example of a list of content and functional requirements stemming from our consideration of the scope plane (you may want to be even more specific in a real example):

**Content requirements**

* quantitative data will be represented as proportional symbols
* data will be encoded as two circles for each school, one for boys and one for girls
* raw totals will be available to the user
* data will be displayed on a basemap for locating counties in wider geography 
* a legend will inform user of the relative magnitude of the circles

**Functional specifications**

Now that we have a concrete sense of how the content (i.e., data) will be represented, we can articulate the functional specifications of the map, which we can likely anticipate as being:

* map will load data dynamically from CSV file
* two data layers will be created from the data file: one for girls and one for boys
* data layers will be drawn to map
* additional information (i.e., raw totals) will be attached to each symbol and available to user on a click or hover
* a ui-slider widget will allow user to re-symbolize the proportional symbols for each grade level

Note that these requirements and specifications do not necessarily lock us into to these decisions. The iterative nature of both the design process and a user-centered design approach will allow for further modifications to achieve interface success. However, they do provide enough specificity for use to move forward to the next phase. Additionally, these requirements and specifications can be "signed off" by a client (perhaps as stipulated through a contract) and help prevent what's known as "feature creep" whereby a client keeps asking for additional features and functionality extending beyond the original project scope.

## The structure plane: interaction design and information architecture

Once the requirements of the product are determined, it's time to starting thinking of "how the pieces fit together to form a cohesive whole." This is the role of the structure plane, which goes beyond the previous question of, "What are we going to make?" to ask, "How is it going to work?"

![Structure Plane](lesson-04-graphics/structure-plane.png)  
**Figure 12.** The structure plane

Garrett writes that,

>Interaction design and information architecture share an emphasis
on defining patterns and sequences in which options will be presented
to users. Interaction design concerns the options involved in
performing and completing tasks. Information architecture deals
with the options involved in conveying information to a user.

While this still sounds fairly conceptual, we'll begin building up some of the technical aspects of our map that speak to these two needs. First, we'll work on the "information architecture, " a broad term stemming from such fields as library science, journalism, and social informatics which at a basic level involves organizing and structuring the (eventual) presentation of the content.

Because the "information" within this web application is largely the data we're representing, considerations of information architecture involve structuring how the data is made available within the DOM and to the JavaScript. We'll now consider this aspect of the process more specifically.

### Data wrangling and preparation

Let's go back to when we opened our CSV file downloaded from the Kenyan data portal. Here, knowing how to use a spreadsheet program is very important. We want to clean the data up, both in terms of what content we want to keep, but also the structure of its format. Again, this is an information architecture question, and knowing how we want that data to be structured within our script will help us prepare the data now. Drawing from previous maps using Leaflet, we know that:

1. the data will be encoded in a JSON or GeoJSON format
2. these data will consist of a single feature for each geographic unit
3. each feature will also contain the data attributes  

We therefore want to re-organize this CSV data so that:

1. each row is a record for a single Kenyan county
2. the data attributes are encoded in separate columns including:

a. the latitude of the county centroid
b. the longitude of the county centroid
c. the number of boys in grade 1
d. the number of girls in grade 1
e. the number of boys in grade 2
f. the number of girls in grade 2
g. etc. through all 8 grades
    
   
After that operation, we need the data to be formatted from the original (Figure 09) to look like this:    
    
![CSV data formatted after the pivot table](lesson-04-graphics/csv-post-pivot-table.png)  
**Figure 13.** CSV data formatted after the pivot table.

To achieve this, we'll want to make use of the **pivot table** functionality of a spreadsheet program, after going through some simple data clean-up (deleting columns and/or characters we don't need, etc). It's suggested to use either Open Office Calc or Excel. Both will work well for our data wrangling and prep but the processes and the data's appearances in these programs vary slightly. Below, follow the steps for *either* Open Office Calc or Excel. 

#### Wrangling in Open Office Calc

Let's first look at the data and consider what we wish to retain within our map. We don't need the year/time column (we know it's all 2014), so we can simply delete that column. Next, we notice that there are latitude and longitude coordinates within the data, though they're lacking the respective headings in the first header row of the CSV. Also, they've been encoded with `"(` before the latitude values and `)"` after the longitude values. The data are a bit messy at this point, and we want to clean this up before proceeding.

We can use a Find and Replace operation to remove these (replacing them with no characters). We also note that some of the closing parentheses/quotations have additional spaces between them. After a few more Find and Replace operations we should visually inspect the rest of the data values to ensure there are not more odd characters.

The following animation demonstrates a process for cleaning up the data using the Find and Replace functionality of Open Office Calc.

![Cleaning up the CSV data](lesson-04-graphics/csv-cleaning.gif)  
**Figure 14.** Cleaning up the CSV data.

Next we want to use the pivot table to transpose the data into the desired format. 

First we select all the data fields and columns and chose **Data -> Pivot Table -> Create ...** and clicked OK to choose the **Current Selection.**

Within the pivot table you have the option to structure which fields will be used for a new tables rows, columns and data. In this case, per our anticipated needs outlined above, we know we want the COUNTY field (the "names" of the counties) and the LAT and the LON for the **Row Fields**. We then choose GENDER and CLASS as our **Column Fields**. Then we can use our NUMBER field (our actual data) within the **Data Fields**. Be sure this is SUM (there are other useful operations you can perform on your data in these operations).

We may need to play with a few different options before achieving what you want. After a little trial and error, we'll produce the table we want. The following animation demonstrates using Open Office Calc to transpose the data into the desired format. The result is cut and pasted into a clean document.

![CSV data formatted after the pivot table](lesson-04-graphics/pivot-table.gif)  
**Figure 15.** CSV data formatted after the pivot table.

While we could spend more time playing with the pivot table options to format the column heads like we want on the output, there are only 24 columns. It may sometimes be just as fast to simply copy the resultant table out and manually tweak column names until they are the way we want.

We want to delete the first row of mostly empty cells, though we should take careful note that the first 8 data columns are the boys 1 - 8 enrollment rates, the next 8 are the girls 1 - 8 enrollment rates. We can quickly rename these column headings (again, thinking about how we want to access these attribute values later on in our JavaScript). We'll rename the coordinate columns to LAT and LON as well, and then save this CSV file as something useful such as *kenya_education_2014*.

#### Wrangling in Excel

Let's first look at the data and consider what we wish to retain within our map. We don't need the year/time column (we know it's all 2014), so we can simply delete that column. Next, we notice that there are latitude and longitude coordinates within the data, though they are grouped together in a single column, enclosed in parenthesis.

![CSV data opened in Excel](lesson-04-graphics/excel-originaldata.png)  
**Figure 16.** CSV data opened in Excel.

After deleting the year/time column, we can use the Text to Columns tool to split the County (Centroids) column into separate Lat, Long columns. Select the entire County (Centroids) column and, under the Data tab, click the Text to Columns icon. A window opens (shown below) which offers various options for splitting the data held in this column's cells. We'll choose "Delimited" because there are commas separating our coordinates. 

![Text to Columns window](lesson-04-graphics/excel-texttocolumns.png)
**Figure 17.** Text to Columns window.

Clicking "Next" shows us where we can specifically choose "comma" as the delimiter type. In the Data preview window, we see what the data will look like. There will be two columns, one with latitude and one with longitude. This is perfect! Click through the rest of the Wizard to finish using this tool.

![Choosing comma delimiter](lesson-04-graphics/excel-commadelimiter.png)
**Figure 18.** Choosing comma delimiter.

The next clean-up on our list is to get rid of the parenthesis which are now in both of the lat and long columns. We can use a Find and Replace operation to remove these (replacing them with no characters). After, we should visually inspect the rest of the data values to ensure there are not more odd characters, such as extra spaces, that we can remove with another Find and Replace operation. Make sure to rename the columns "Lat" and "Lng."

![Find and Replace in Excel](lesson-04-graphics/excel-findreplace.png)
**Figure 19.** Find and Replace in Excel.

Now, we are ready to use Excel's Pivot Table functionality to re-organize the data per our anticipated needs outlined at the beginning of this section. First, we select all of the data fields and columns, *excluding* the header row. Navigate to the Insert tab > PivotTable and, using the current selection, create the pivot table on a new Excel worksheet (this will exist in the same excel file but will be a separate sheet at the bottom). 

![Pivot Table window in Excel](lesson-04-graphics/excel-creatingpivot.png)
**Figure 20.** Pivot Table window in Excel.

Within the pivot table you have the option to structure which fields will be used for the new table rows, columns, and data. In this case, we know we want the COUNTY field (the "names" of the counties) and the LAT and the LON for the **Row Fields**. We then choose GENDER and CLASS as our **Column Fields**. Then we can use our NUMBER field (our actual data) within the **Values Field**. Be sure this is SUM of Number. Complete this re-organization by dragging and dropping the fields into the correct areas. Below is what this dragging and dropping produces: 

![First Product of Pivot Table in Excel](lesson-04-graphics/excel-firstpivot.png)
**Figure 21.** First Product of Pivot Table in Excel.

We are almost complete. There are some weird row indentions and "sub-rows" which we need to get rid of. The solution? Under the tab PivotTable Tools, select Design > Subtotals > Do Not Display Subtotals and next, Design > Report Layout > Show in Tabular Form. This compacts the data into a form we can use! 

After this, the pivot table is complete (shown below). However, there are still filters on the data and the data is also unable to be edited. So, we just need to select all of the data (including headers) and copy/paste into a new worksheet or Excel spreadsheet. Save the new, re-organized and cleaned up CSV and we are ready to start map development!

![Final Pivot Table with filters](lesson-04-graphics/excel-finalpivot.png)
**Figure 22.** Final Pivot Table with filters.


### Building a development boilerplate: HTML, CSS, and JavaScript

Before we get started actually coding our map, or getting the data into the application, we want to start with a basic HTML boilerplate. This isn't something we need to recall from memory or write from scratch. Rather, we either keep a boilerplate ready, copy and paste the markup from a previous project, or grab it from an example on the web. While it's most efficient in terms of your workflow to keep a boilerplate handy, occasionally you'll want to revisit this as advancements in the web specifications change (as they recently did in a big shift from HTML4 to HTML5). 

For this map we're going to be using [Mapbox.js](https://www.mapbox.com/mapbox.js). To start our HTML document, we can go to their [a simple map](https://www.mapbox.com/mapbox.js/example/v1.0.0/) page and cut and paste the HTML from their simple example into our *index.html* file. You'll need to obtain your [API access token](https://www.mapbox.com/studio/account/tokens/) from Mapbox and enter it as a String value for the property `L.mapbox.accessToken`. However, if you're logged into your Mapbox account, they've dynamically entered your access token for you on the  [a simple map](https://www.mapbox.com/mapbox.js/example/v1.0.0/) page, so you can simply cut and paste.

```html
<html>
<head>
<meta charset=utf-8 />
<title>A simple map</title>
<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
<script src='https://api.mapbox.com/mapbox.js/v2.2.4/mapbox.js'></script>
<link href='https://api.mapbox.com/mapbox.js/v2.2.4/mapbox.css' rel='stylesheet' />
<style>
  body { margin:0; padding:0; }
  #map { position:absolute; top:0; bottom:0; width:100%; }
</style>
</head>
<body>
<div id='map'></div>
<script>
L.mapbox.accessToken = '< your access token here>';
var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([40, -74.50], 9);
</script>
</body>
</html>
```

Save these changes and then test the file in your browser (using a local host server, of course). This animation demonstrates a basic map being loaded by Mapbox.js.

![A simple Mapbox.js template map](lesson-04-graphics/simple-map-start.gif)  
**Figure 23.** A simple Mapbox.js template map.

We see that the map has been centered on the city Philadelphia at a zoom level of 9. Let's change these latitude/longitude coordinates to center it within Kenya (-.23, 37.8). We'll also want to adjust the zoom level to fit within our window (6 or 7).

This animation demonstrates changing the center coordinates and the zoom level to center the initial map load on Kenya.

![Centering the map on Kenya](lesson-04-graphics/center-kenya.gif)  
**Figure 24.** Centering the map on Kenya.

Note that we're loading a tileset provided by Mapbox. This is designated by the `mapbox.streets` within the `L.mapbox.map()` method call. The [Mapbox maps API offers a variety of basemaps](https://www.mapbox.com/developers/api/maps/) for use within a Mapbox.js-enabled map. Feel free to explore these various base maps.

Let's change the basemap to be `mapbox.light`, which may be more suitable for thematic mapping than the `mapbox.streets`. The basemap and its design is an important consideration and one perhaps left until later in our process (more within Garrett's surface plane, even). Fortunately, the available ones are easily swapped later on.

This animation shows switching the basemap to the `mapbox.light` tiles.

![Changing the Mapbox.js basemap and structuring the HTML](lesson-04-graphics/change-basemap.gif)  
**Figure 25.** Changing the Mapbox.js basemap and structuring the HTML.

Before we get into figuring out how this Mapbox.js library is different than the Leaflet.js library, let's load a couple more resources into our document so they're ready when we need them.

Next let's load JQuery into the project in the same way (we can assume we'll want it at some point, so may as well make it available now for our "rapid prototyping" later on).

We've used JQuery in previous modules, and this animation shows that process of grabbing the CDN address from the JQuery website and including it without our script.

![Adding JQuery to the DOM from a CDN](lesson-04-graphics/jquery-cdn.gif)  
**Figure 26.** Adding Query's JavaScript to the DOM from a CDN.

Our modified page now contains the following HTML, CSS, and JavaScript:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset=utf-8 />
    <title>A simple map</title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
   
    <script src='https://api.mapbox.com/mapbox.js/v2.2.4/mapbox.js'></script>
    <script src='https://code.jquery.com/jquery-1.12.0.min.js'></script>
    
    <link href='https://api.mapbox.com/mapbox.js/v2.2.4/mapbox.css' rel='stylesheet' />
    <style>
      body { margin:0; padding:0; }
      #map { position:absolute; top:0; bottom:0; width:100%; }
    </style>
</head>
<body>

    <div id='map'></div>
    

    <script>
        L.mapbox.accessToken = 'your_access_token_here';
        
        var map = L.mapbox.map('map', 'mapbox.light')
            .setView([-.23, 37.8], 7);
        
    </script>
</body>
</html>
```

Currently, the style rules for our page is as follows:

```css
<style>
      body { 
          margin:0; 
          padding:0; 
      }
      #map { 
          position:absolute; 
          top:0; 
          bottom:0;
          width: 100%;
      }
</style>
```
We're not going to worry too much about the fine tuning of the CSS rules for now. Instead, we're ready to begin reading through the Mapbox API and coding our map to load and display the data. 

### Understanding the mapbox.js API

Returning to the JavaScript code we copied from the Mapbox simple example, we create  a map object, specific the coordinates for the map's center and a zoom level, and add it to the DOM using this statement:

```javascript
var map = L.mapbox.map('map', 'mapbox.light')
    .setView([-.23, 37.8], 7);
```

Like Leaflet, and many other JavaScript libraries, [the Mapbox.js API is well-documented](https://www.mapbox.com/mapbox.js/api). You should take some time to scan through this documentation to get a sense of the extended functionality Mapbox.js provides to Leaflet.js. Again, what's key here is that Mapbox.js was built on top of Leaflet.js.

For example, we see that beyond, Leaflet Mapbox.js offers such functionality as the [L.mapbox.geocoder](https://www.mapbox.com/mapbox.js/api/v2.3.0/l-mapbox-geocoder/), which offers a geocoding and reverse-geocoding service.

Read documentation of the [`L.mapbox.map()`](https://www.mapbox.com/mapbox.js/api/v2.2.4/l-mapbox-map/) method, which creates and configures a map with layers. The only difference in how the method is written is the addition of  `mapbox` between the `L.map`. Like `L.map`, as [documented within Leaflet's API reference](http://leafletjs.com/reference.html#map-constructor), this method refers to a `<div>` element with the `id` attribute of "map" and references a set of tiles to be served remotely. 

A third optional argument is an object of options. Importantly, Mapbox says, "If provided, it is the same options as provided to L.Map with the following additions." This means we can use all of Leaflet's options in here as well. For example, we can [set minimum and maximum zoom levels of the map and enable dragging](https://www.mapbox.com/mapbox.js/api/v2.3.0/l-map-class/).

So, rather than setting the view with a method, we could do this by passing options, in addition to doing things like setting the bounds and the min and max zoom levels.

![Applying Leaflet options to a L.mapbox.map map](lesson-04-graphics/add-map-options.gif)  
**Figure 27.** Applying Leaflet options to a `L.mapbox.map` map.

And the code:

```javascript
var map = L.mapbox.map('map', 'mapbox.light', {
    center: [-.23, 37.8],
    zoom: 7,
    minZoom: 6,
    maxZoom: 9,
    maxBounds: L.latLngBounds([-6.22, 27.72],[5.76, 47.83])
});
```

### loading data into the app

Next let's get our Kenyan primary school data into the map. We've encoded the point-level schools data within a CSV file. As you remember, in a previous module we used a JavaScript library named [PapaParse](http://papaparse.com/) to asynchronously load the CSV data into our script. When using Mapbox.js, we can make use of a plugin named [Leaflet Omnivore](https://www.mapbox.com/mapbox.js/plugins/#leaflet-omnivore), which loads and parses a variety of data formats and converts them into a Leaflet GeoJson layer.

First we need to include the plugin script within our web page, and then can try implementing it using our `keyna_education_2014` data. Within the head of our document, after we load the Mapbox.js script, let's load the Omnivore code.

```javascript
<meta charset=utf-8 />
    <title>A simple map</title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <script src='https://api.mapbox.com/mapbox.js/v2.2.4/mapbox.js'></script>
    <script src='https://api.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.2.0/leaflet-omnivore.min.js'></script>
```

Then, drawing from the [Leaflet Omnivore example](https://www.mapbox.com/mapbox.js/example/v1.0.0/markers-from-csv/), we can first try loading the data and adding it to the map using the statement:

```javascript
omnivore.csv('kenya_education_2014.csv').addTo(map);.
```

![CSV data loaded with Omnivore and added to map as Leaflet GeoJson layer](lesson-04-graphics/data-loaded-markers.png)  
**Figure 28.** CSV data loaded with Omnivore and added to map as Leaflet GeoJson layer.

With the inclusion of this one statement it appears we've successfully loaded the data and drawn them on the map as the default Leaflet markers! 

```javascript
omnivore.csv('kenya_education_2014.csv').addTo(map);
```
We're now ready to move on to the next element plane to refine the structure of the application, give the interface greater form (particularly our data currently merely displayed as markers), and write the JavaScript need to run the application. We'll save this for then next module.

## Additional Reading and Resources

* [The Elements of User Experience Graphic](docs/Elements-of-User-Experience.pdf) (2000)
* [The Elements of User Experience (Chapters 1 - 5)](docs/Garrett2011_chapters_1-5.pdf) (2011)
* [The origin of personas](http://www.cooper.com/journal/2008/05/the_origin_of_personas) (2008)
* [Addressing Map Interface Usability: Learning from the Lakeshore Nature Preserve Interactive Map](http://cartographicperspectives.org/index.php/journal/article/viewFile/cp60-roth-harrower/292) (2008)
