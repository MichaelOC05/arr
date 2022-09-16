## Friday September 16, 2022:
    We found a bug last night that wasn't showing the reviews from viewers on their web page. We immediately 
    fixed the problem and got it all fixed within two hours, deployed, and now we are no longer adding anymore
    code for this project until we can work on strech goals. I am proud of our project. Could there have been more?
    always, but that is for the strech goals because we got a minimum viable product that works and I find enjoyable.

## Thursday September 15, 2022:
    Today we created all of our unit tests as per requirements for the project. mine took a little help from andrew 
    as I was trying to create a review to see if it was in the database for my test. Got all the 
    tests running and was able to fix the update button for the user page to work and lastly removed 
    a model that was not being used. We spent the rest of the day trying to get our mvp up and running by 
    our code freeze at five. Unfortunately, we had to chase a bug that made us work till six. We decided to call 
    it there and made sure that the deployment was working before we called it a  day.

## Wednesday September 14, 2022:
    For the majority of the day, we worked on getting the website to operate as it should when
    it is deployed. It took a long time, with help from multiple seirs and teachers, and major
    effort from Michael to get it running. It took a long time, and after we worked on creating
    an update button for the user page so they can add a bio and a profile picture. It was 
    successful, but unfortunately it created another bug that if you don't enter in the any
    information it will delete your previous information. I put a temporary fix but will try 
    tomorrow to make it work. 

    completed:User update profile

## Tuesday September 13, 2022:
    We decided to remove the Comic Api as the information we were getting was not what we
    wanted, unfortunate but necessary. Today we worked on the review form to get an aggregate
    score for the rubric rating. We were successful in doing so today mostly thanks to Michael
    with help from Andrew. Gio and Kurt were able to get the webpage to display on the web app 
    on heroku, but we learned that some aspects of it are not functional due to the transfer. We 
    worked on it as a team but have not gotten it to fully work by end of day due to linting 
    errors and how the code is formatted. I got the review form to work on the Movie Detail 
    Page and made some cosmetic changes with help from michael. We are in a good spot in my 
    opinion, but we still have a lot to do.

## Monday September 12, 2022:
    After the test I worked with Edgar on the user page to get something to populate as well 
    as have the reviews the user created to display. With most of the work done, I went to 
    Michael and Kurt to get some help in making it fully functional, and with some discussion 
    realized we needed to change the user model and movie model to reflect new additions and 
    remove unnecesary data. We realized it was best to do this in the morning of the next day 
    to make sure we do it as a team to avoid errors as well as be on the same page. After the 
    5 o'clock attendance, I worked on some design elements to make the movie list page look 
    better and called it a day.

## Friday September 9, 2022:
    Today the goal of the day was for Kurt and Gio to finish the pipeline, and me Michael, 
    and Edgar worked on the review form to make it submit a review and it worked! we still need
    it to create a rubric rating and admin rating but I'm glad that we have this finished. Kurt 
    and Gio were able to get the pipeline working which was great to hear

    completed: Review Form submission, pipeline
    working on: compiling multiple ratings and user page/movie detail page


## Thursday September 8, 2022:
    With help from Kieran and Ryan, we were able to get the Modal to work with the review form 
    displaying by using the react bootstrap. We were then able to create the way we wanted the 
    review form to present and show the way we wanted, but it is yet to be fully functional.

## Wednesday September 7, 2022:
    A lot of design decisions were made today, and we got the list of movies to display and 
    decided to have the review form populate on the page using a modal but could not get it 
    to work. The list of movies page is not perfect but it is a start and like the forward 
    progress we are making.

## Tuesday September 6, 2022:
    Today me and Michael worked on the Logout button on the navbar to work as well as have 
    the login/logout button disappear depending on if a user is logged in. Kurt and Gio worked 
    on the CICD pipeline during this time. Michael and I were able to get the login/logout 
    button to appear and disappear without help, but we had issue with just having the logout 
    button functional. Daniel helped us for a bit and we eventually got it working. We have 
    it set up as a button, and I was able to figure out how to have the button set up as a 
    navlink while still being a button. Gio and Kurt came back and were successful but not 
    fully finished.

    completed: Navbar and logout button
    working on: CICD pipeline and create review form

## Friday September 2, 2022:
    Today we discussed how to proceed, as there were complications that arose, especially 
    that the login wasn't working anymore. luckily that was solved in the morning as I changed 
    the url back to its original hardcode. Also made slight changes to the bottstrap css and 
    made the rows for the front page have only two per row rather than two, one, two, one.

## Thurday September 1, 2022:
    Today we split into groups as Michael and I worked on the logout button and changing the 
    urls to be no longer hardcoded in. There were some errors, but we got help to get them solved 
    which was due to react not recognizing it. We also changed our review model to have a foreign 
    key attached to the movie model. In the evening, we had some issues with accessing the 
    information, but daniel pointed out we forgot to update information from our encoders and
    the code began to work how it should of. Before we called it a night, me and kurt were able 
    to get the posters to populate the main page.

## Wednesday August 31, 2022:
    The morning we had no issues with git, which was a nice change of pace. Me and Michael worked 
    on a button that would switch between one or the other depending on if you were logged in. We 
    were able to solve this after lunch, and the buttons work with sending you to the proper link. 
    Then we worked on creating the create a user form on the same page as the log in. We had difficulty 
    in doing this, as it was not creating aa user, and with the help of Ryan and Neil, we were able to 
    figure out a solution and the create a user form now works and makes a new user. We pushed it to 
    the main branch and heard from Kurt and Gio that the api for movvies is working but we are having 
    issues with the comic api. This issue we agreed would be good to solve tomorrow, and also agreed 
    to work on the log out function for the user tomorrow as well.

    completed: description page, login/create user page, movie api
    working on: log out, comic api

## Tuesday August 30, 2022:
    Once again, we spent our morning working on git merges to make sure everything was ok because we 
    made changes to our models and migrations and weren't sure what woul happen. luckily, with the 
    merge, the migrations were overwritten and it went smoother than we thought. I only wish we had 
    more time in the morning to work on the project.
    After lunch, I began working on the description page on how to use our website rubric in rating 
    a movie. It was fairly easy, as I only had to write the instructions for the rubric rating system
    and then I spent some time on the bootstrap css to make other pages look like all the others. I also 
    got the nav links to work so the button on the main page takes you to the description page and 
    another button to take you to the create views page. After I completed my task I went to the 
    main group and tried to assist where I can on accessing the api's for the movie and source materials. 
    We were unsuccessful in finishing this task and plan on working on it later.
    After the 5 o'clock attendence, I tried to help out michael with the login cookies, and though I 
    didn't do much to contribute, I was able to assist Michael in getting the log in done.

    completed: description page, nav links
    working on: api's, authentication

## Monday August 29, 2022:
    Today was a slow start, with the morning dealing with Git merges and planning on how to proceed 
    with the rest of the day. It was strange as the merge requests for mine were different than 
    michaels, where I can click a button to fix the merge requests while he could not. This caused 
    some difficulties with the git merge and I believe it is something we'll have to continue to deal with. 
    After lunch, Michael went off to figure out the login situation while I continued to work on the 
    main page to adjust the HTML to get the main page in a desirable place where it is ok and the 
    review cards are in the right rows. We also took the time as a group to get the logo on the 
    main page and after that was completed I began working on the review form. Michael returned 
    and stated that he solved the login in issue and also got the user model working which was a huge setback. 
    After 5 o'clock attendence, I finished the basis of the review form with some bootstrap css, 
    but it is still non functional as it need to confer with my group on how we want to select the 
    movie the user is reviewing. I also changed some bootstrap css on the main page to make it look 
    a little different. 

    completed: Main page Beta, Log in, user model
    working on: review form

## Thursday August 25th, 2022:
    Right off the start we had some errors going on with the react, and it required the seirs to 
    come and help us for almost two hours. The issue was the react was not refreshing, and the 
    problem turned out to be more than just a minor issue as it turned out we installed react the 
    wrong way and was missing the react-dom-browser import as well as a few lines of code. The issue 
    was solved, but after lunch and the LinkedIN learn activity, we ran into a strange situation with 
    the merge where random lines of code seemed to appear out of nowhere that none of us saw. The 
    random lines of code looked like...
    <<<<<<<HEAD
    =========
    >>>>>>>>main
    Daniel came to help us, explaining that it was a merge conflict issue, but it wasn't the same 
    as the merge conflicts I've seen before. We began merging the code together under Daniel's 
    instruction to ensure that there were no other issues.
    After 5, I began working on the main page of the website frontend. After writing the code, 
    I had a few bugs but was able to fix them with some time, but eventually had problem with 
    populating the information from the database onto the bootstrap cards. I eventually reached 
    out to a seir, and Kieran responded and helped me solve my issue. It wasn't pretty, but I 
    had proof of concept.

## Wednesday August 24th, 2022:
    After Lunch, Me and Michael began trying to troubleshoot our Auth_User_Model while Gio and 
    Kurt began working on the views for the movie reviews (Edgar was not present). As we began 
    doing research, we made a user through the Django Admin to see how the properties of the 
    Auth_User_Model worked and how we can use it to allow users and admin to sign in through 
    the website. Me and Michael ran into some setbacks, and eventually when we combined as a 
    group to check in we had a discussion on how we were going to proceed with the User model. 
    Kurt and Gio stated that the views for the movie review were completed and running, so we 
    spent the rest of the time discussing the user model issue. We decided to do more research 
    on the problem, as we didn't know the best way to proceed with this course of action. After 
    5 o'clock attendence, I found out with Kurt there were issues with the movie information 
    views that were not JSON serializable. We tried to figure out how to fix this issue but 
    came to no solution.


    Working on Completing: User model, Views

## Tuesday August 23rd, 2022:
    In the morning after the lecture, we all worked as a team to comlete our four models through 
    Django. It took us until a few minutes before lunch to comlete the models. After the lunch 
    break, we discussed how we wanted to begin splitting up the workload, and eventually agreed 
    to work in pair programming. Me and Michael worked on installing the API key for the Comic 
    Vine API to gather information on source materials involving comics while Gio, Kurt, and 
    Edgar worked on the views. After me and Michael completed the API, we began working on the 
    home page and mapping out how we can display the reviews of users on the home page. We found 
    information on Bootstrap that wa useful to create cards with desired information and began 
    prepping the code for React. However, we are at a halt due to needing necessary information 
    to complete the page by populating it with the proper information provided by the models, 
    views, and urls. After attendence at 5, Kurt and I began working on the other GET, PUT, and 
    DELETE methods for the reviews which we were able to complete and push to the main branch 
    before 7.

    Completed: Models

    Working to Complete: Views, Home Page

## Monday August 22nd, 2022:
    At 2:30, began discussing on the project in how to proceed, then we began working as a team 
    to ge the docker-compose file up and running. Before completion however, I had to leave at 
    3:30 to go to a doctor's appointment.