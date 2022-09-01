## August 31 2022

What needs to be done:
- Handle submit for about page 
- Get api keys to work
- deploy to heroku
- list of movies 
- user page 
- main movie review page (details of movie and review)
- create user page 
Working features:
- user login 
- home page
- about page buttons
Kurt and I had the api for the movie api working but are still struggling with how to get the comic api working. Jack and micheal are working on the logout page. 

## August 30 2022

What needs to be done today:
- Acls
- About page
- Main Page
Biggest Blocker:
- Acls
- migrations 
What we did today:
Kurt, and I struggled with the acl and the api keys and trying to get the information out of the keys. Jack got the about page running so we got most of the front end done. Micheal is still working on the login page. Some users are allowed but not all of them. Tomorrow we try to get a seirs help to get the api key done. 


## August 29 2022
Today Kurt, Jack and I worked on the MainPage and we got our logo to display along with some template reivews. Kurt was also able to get the navbar working. I tried tackling the acls and spent most of the time looking at documentation and trying to understand how to grab the api. Micheal was able to get the user model working correctly. Tomorrow we are going to get the acls working and trying to implement the api keys.

Features Running:
-Main Page
-Navbar
-user model

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## August 25 2022

What we worked on and problems we ran into: 

We struggled to get react up and running again. We had Neil and Phil help us because the docker wouldnt update the code and it kept saying that we have problems with the react-router-dom. Spent 2 hours 
trying to get react up and running by installing the react router dom and rebuilding containers.
Kurt and I are currently reading up on ACL for the API we plan on using, Micheal is still working on the usermodel and Jack is helping with the ACL and the front end Main Page. We still have one problem with creating a movie in insomnia but I think that once we get a usermodel up and running we should be fine. 
Features Running:
- same as yesterday 
- React

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## August 24 2022 

What we worked on and problems we ran into:

Worked on the views for the Review and comments model with kurt using pair programming. One problem we ran into was that we kept getting a skipkeys error and we fixed by correcting a misspelled encoder. 
Tomorrow we will finish the views and start to work on the user model.

Features running:
- Create movie info views and encoders 
- create comments views and encoders 
- create movie list in insomnia 

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## August 23 2022

What we did and problems we ran into:

We set up the models together, and then we split into groups. Kurt, edgar and I made model encoders and views for the review model.
One problem we ran into was that our review didnt want to return an empty dictionary, and the solution was that I misspelled django in the import for the http method.
Another problem we faced was that when we created a POST request it would give us a 403 forbidden error and we fixed it but commenting out django.middleware.csrf.CsrfViewMiddleware.
Set reviewer id null = true so that the review can be changed in insomnia. 

Features Running:
- create and list review

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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

