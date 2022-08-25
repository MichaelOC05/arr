## August 25 2022

What we worked on and problems we ran into: 

We struggled to get react up and running again. We had Neil and Phil help us because the docker wouldnt update the code and it kept saying that we have problems with the react-router-dom. Spent 2 hours 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 August 24 2022 

What we worked on and problems we ran into:

Worked on the views for the Review and comments model with kurt using pair programming. One problem we ran into was that we kept getting a skipkeys error and we fixed by correcting a misspelled encoder. 
Tomorrow we will finish the views and start to work on the user model.

Features running:
- Create movie info views and encoders 
- create comments views and encoders 
- create movie list in insomnia 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## August 23 2022

What we did and problems we ran into:

We set up the models together, and then we split into groups. Kurt, edgar and I made model encoders and views for the review model.
One problem we ran into was that our review didnt want to return an empty dictionary, and the solution was that I misspelled django in the import for the http method.
Another problem we faced was that when we created a POST request it would give us a 403 forbidden error and we fixed it but commenting out django.middleware.csrf.CsrfViewMiddleware.
Set reviewer id null = true so that the review can be changed in insomnia. 

Features Running:
- create and list review
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## August 22 2022

What we did today and problems we had run into: 

We set up journals for everyone and set up the monolith services along with the docker and docker 
files. Discussed model designs and prepped coding for tomorrows work. 
Had trouble setting up docker and yaml files and datbaseURLS but fixed by changing it to match directory names 

Features Running: 
 - React
 - Docker
 - Journals
 - Main site features documentation 

