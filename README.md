# TastyTV project

In this project I designed and implemented an announcement website for a new streaming service.
##Technologies Used

1. CSS
1. Javascript
1. HTML

##Planning
My initial planning went into basic wireframes for the project.
From there I set up the html bases for the pages.
The main challenge in implementing the website was creating the timetable and random film.
I decided to use an OOP approach in order to allow for simpler patches to the website allowing for things such as rendering new timetables in the future.

##Reccomendations
I solved the reccomendations special feature by taking the timetable that I had previously generated, and choosing a random film from the list by shuffling the list and popping off a value.
I also implemented a feature that allowed the user to choose a genre that they prefered.
This would give them a random film of their chosen genre.
If we are not currently showing any films of their chosen genre it tells them this and asks them to choose again.

##Resources
I used two outside sources for my code.
The first was an algorith to shuffle my List.
I could have implemented it myself, however I wanted the most time and space efficient algorithm so I used the knuth shuffle found here https://github.com/coolaj86/knuth-shuffle. This was used in my helper class.

The second external piece of code that I used was a regex expression to validate email addresses. It can be found in register.js

##Unsolved problems
The largest issue with my project is the design.
The design is simplistic and ugly and given more time or access to css libraries, I would make it far more presentable to a client, however due to time constraints I was not able to spend more time on this.

A smaller issue is that as I didn't use a date library such as datejs to implement the timetable, when the clocks change it will be 1 hour out of sync.
This is a relatively simple fix that I would implement with more time.
I would also use local memory to save the current timetable so it doesn't generate a new one every time you refresh the page as well as creating users who could log in and an administrator role that could edit the company info and announcements.

##Favourite function
Other than my helper class which made the implementation of my project far easier, my favourite function is the generateSchedule function.
This works by creating a dictionary of times and films so that the object can be referenced later from the name of the film at any given time.
A small issue with this, is that it converts a date object into a string to make a dictionary.
This was fixed by creating a string to date function that uses Date.parse and new Date together to convert the string into the number of milliseconds and then converts it again into a standard date object.

##User Stories
My user stories are [here](https://miro.com/app/board/o9J_lxI12Ik=/)
