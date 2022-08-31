## Monday August 29, 2022:
    Today was a slow start, with the morning dealing with Git merges and planning on how to proceed with the rest of the day. It was strange as the merge requests for mine were different than michaels, where I can click a button to fix the merge requests while he could not. This caused some difficulties with the git merge and I believe it is something we'll have to continue to deal with. 
    After lunch, Michael went off to figure out the login situation while I continued to work on the main page to adjust the HTML to get the main page in a desirable place where it is ok and the review cards are in the right rows. We also took the time as a group to get the logo on the main page and after that was completed I began working on the review form. Michael returned and stated that he solved the login in issue and also got the user model working which was a huge setback. 
    After 5 o'clock attendence, I finished the basis of the review form with some bootstrap css, but it is still non functional as it need to confer with my group on how we want to select the movie the user is reviewing. I also changed some bootstrap css on the main page to make it look a little different. 

    completed: Main page Beta, Log in, user model
    working on: review form

## Thursday August 25th, 2022:
    Right off the start we had some errors going on with the react, and it required the seirs to come and help us for almost two hours. The issue was the react was not refreshing, and the problem turned out to be more than just a minor issue as it turned out we installed react the wrong way and was missing the react-dom-browser import as well as a few lines of code. The issue was solved, but after lunch and the LinkedIN learn activity, we ran into a strange situation with the merge where random lines of code seemed to appear out of nowhere that none of us saw. The random lines of code looked like...
    <<<<<<<HEAD
    =========
    >>>>>>>>main
    Daniel came to help us, explaining that it was a merge conflict issue, but it wasn't the same as the merge conflicts I've seen before. We began merging the code together under Daniel's instruction to ensure that there were no other issues.
    After 5, I began working on the main page of the website frontend. After writing the code, I had a few bugs but was able to fix them with some time, but eventually had problem with populating the information from the database onto the bootstrap cards. I eventually reached out to a seir, and Kieran responded and helped me solve my issue. It wasn't pretty, but I had proof of concept.

## Wednesday August 24th, 2022:
    After Lunch, Me and Michael began trying to troubleshoot our Auth_User_Model while Gio and Kurt began working on the views for the movie reviews (Edgar was not present). As we began doing research, we made a user through the Django Admin to see how the properties of the Auth_User_Model worked and how we can use it to allow users and admin to sign in through the website. Me and Michael ran into some setbacks, and eventually when we combined as a group to check in we had a discussion on how we were going to proceed with the User model. Kurt and Gio stated that the views for the movie review were completed and running, so we spent the rest of the time discussing the user model issue. We decided to do more research oon the problem, as we didn't know the best way to proceed with this course of action. After 5 o'clock attendence, I found out with Kurt there were issues with the movie information views that were not JSON serializable. We tried to figure out how to fix this issue but came to no solution.


    Working on Completing: User model, Views

## Tuesday August 23rd, 2022:
    In the morning after the lecture, we all worked as a team to comlete our four models through Django. It took us until a few minutes before lunch to comlete the models. After the lunch break, we discussed how we wanted to begin splitting up the workload, and eventually agreed to work in pair programming. Me and Michael worked on installing the API key for the Comic Vine API to gather information on source materials involving comics while Gio, Kurt, and Edgar worked on the views. After me and Michael completed the API, we began working on the home page and mapping out how we can display the reviews of users on the home page. We found information on Bootstrap that wa useful to create cards with desired information and began prepping the code for React. However, we are at a halt due to needing necessary information to complete the page by populating it with the proper information provided by the models, views, and urls. After attendence at 5, Kurt and I began working on the other GET, PUT, and DELETE methods for the reviews which we were able to complete and push to the main branch before 7.

    Completed: Models

    Working to Complete: Views, Home Page

## Monday August 22nd, 2022:
    At 2:30, began discussing on the project in how to proceed, then we began working as a team to ge the docker-compose file up and running. Before completion however, I had to leave at 3:30 to go to a doctor's appointment.