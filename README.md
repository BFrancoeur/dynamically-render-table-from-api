# Dynamically Render a Table from API

## Overview
This solution was created for a website that needed to access remote parts data and render it in a table format. 

## Main Components
     getData(), which makes the API call and returns the JSON response
     
     renderTable(), which processes the response and renders it in an HTML table. 
     
## Challenges
1. Getting the newly created HTML elements to append to the parent element. For some reason, it seemed that the DOM didn't always update with the newly created element.
   To ensure that newly created elements rendered every time, I added the appendChild() method in the same lexical context as the elementCreate() method. This seems to work
   every time. 
   
2. Accessing the nested objects in the JSON response. Even with JSON.parse(), I couldn't access the properties of the nested objects. This proved to be a major challenge,
   since object values cannot be accessed like an array. After trying .map() and serveral different approaches to travers the response, I learned about Object.values().
   This method returned the object key-value pairs as an indexed array, making traversal easy. 
   
3. Nested for loops. These were also more difficult to get working than I expected. I had to experiment with different approaches until I found one that delivered the exact
   result I was after. 
   
4. Appending a link to the last productDetail <td> element. The response JSON had the Request Form URL as a string. To add the link, I did two things: 
    a. Created an if condition to check if the last product detail was exactly equal to the Request Form URL. 
    b. If it was, I removed the text content from the parent <td> textContent and replaced it with .innerHTML equal to a string that made up the actual link.
       This was the option I decided on after I couldn't append the link to its parent <td>. 
       
 ## What I learned from this project
 Rendering an HTML table from an API is easy, once I figured out how to do it. Also, consider what's already available first. It turned out that there is a WordPress plugin
 that does exactly what I was trying to do, plus it included an advanced search feature that works great. 
 
 ## Future Development
 *WordPress* -- My goal is to turn this into a WordPress plugin that is made available through WordPress.org. I also see use cases for e-commerce where products are displayed in a 
 table rather than as single products. 
 
 *Load on Scroll* -- This solution was developed for an aviation company with an inventory of about 30,000 items. This means that the data has to be chunked and
 rendered as needed, rather than all at once. To improve performance, caching also needs to be developed, plus a means by which to 'pre-load' the table on page load. 
 
 *React* -- I plan to transform a fork of this solution into a React app that renders an interactive table on a web page. 
 
 *Features* -- Ultimately, I plan to include the following: 
      Filters/Sorting
      Search
      Alphabetical list by product type
      Numeric listing (ascending or descending)
      
      
   
   
