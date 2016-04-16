# Lab 02: Adding User Interaction to a Leaflet Choropleth Map

**Instructions:** Begin with the starter template *index.html* file located within the *module-02/lab-02/lab-02-data/* directory. Beyond the starter template *index.html* file, this directory includes  the *ky_counties_housing.json* data file and a metadata file *ky_counties_housing.txt* (also used in Module 01).

Modify the *index.html* to fulfill the requirements listed below. 

This lesson follows the instructors detailed within [Lesson 02](../lesson-02.md) to extend the map created in Lab 01 to include greater user interaction. 

Specifically, the map will allow the user to select a different data attribute, which will trigger the map and update the legend using this data attribute. The map will also provide the user with an info panel that, upon mousing over the counties, will provide the user with the raw data (i.e., non-normalized data values) associated with each county. To achieve this, carefully follow the instructions detailed in Lesson 02. The HTML, CSS, and JavaScript written within your completed *index.html* file should additionally achieve the following:

1. Build a map allowing the user to explore data related to **vacant** housing units, as opposed to the occupied ones used in the Lesson 01 and Lesson 02 examples (refer to the metadata file *ky_counties_housing.txt* for a description of data property names).

2. Provide a visual affordance for when the user mouses over individual counties, beyond the appearance of the info panel. Changing the color of the county's stroke (i.e., from grey to yellow), is recommended, as this allows the user to still see the color symbolizing a normalized data value, though you may explore other options for such an affordance.

3. Finally, *thoroughly comment your JavaScript code*. Use the commented solution provided to you by the instructor for the solution to Lab 01 (through canvas once you've submitted your Lab 01) for guidance on how much coding and the nature of these comments. The purpose of these comments is to demonstrate that you understand the code you've written. Think of this as writing comments for one of your classmates that will explain what the code is doing. **Note**: this is a key part of of this task and will be graded accordingly.

4. Ensure that all your code is well-maintained with indentions and appropriate whitespace to improve human legibility.

Save your changes to your *index.html* file and **commit changes to your local GitHub repository** as you work.