## August 22, 2022
Today we pair programed the docker compose file. We also discussed who would be handling what tasks.

## August 23, 2022
Today the group colabed on the models for the Django app. Also I pair programed with Gio and Edgar on the model encoders and the one of the first views. We were able to sort out a spelling bug and get insomnia to return a GET and a POST response.

## August 24, 2022
Gio and I finished working on the views. We used the live share coding for the first time. It worked out really well. We are having an issue where when we make an insomia request we are getting an object of type User is not JSON serializable. The requests were working yesterday so something we did today broke them.
We have hit a blocker when it comes to authentication of users. I think we are all going to workon that tomorrow.

## August 25, 2022
We ran into a lot of problems today. The first was a problem with React. We had to get SIER help. This took around 2 hours to fix. After lunch we ran into a merge conflict that somehow made it into our code in the main branch.
Gio and I are currently working on reasearching how to set up our third party api's in Django.

## August 29, 2022
I worked on the ACLS with Gio. I also worked on a Nav bar for the page. Michael was able to get the JWT tokens to work.

## August 30, 2022


## August 31, 2022
Today Gio and I worked on the ACLS again today. With Phils help we were able to get the movie API working. We are still working on the comic API. We are having problems with the API endpoint.

## September 1, 2022
We worked on the comic book api again today. Through some research we found out that the API is not well maintianed and that the endpoint we are trying to hit is likely broken. We are considering abandoning that API for a different one. Also Jack and I were able to get the movie posters to display on the main page this evening.

## September 2, 2022
We didn't have a lot of time to work on projects because of manditory fun. No coding was done but we did discuss what we wanted to work on next week.

## September 6, 2022
Gio and I worked on the CI/CD pipeline today. We were able to get the unit test to pass but we are still having some problems getting flake8 to pass. We are going to continue to work on it tomorrow.

## September 7, 2022
Gio and I continued working on the CI/CD pipeline. We are currently running into some problems

## September 8, 2022
I worked with Gio on the CI/CD agian this afternoon. We are propbably going to need to get help sorting out this issue. The logs on heroku are not very descripitve.

## September 9, 2022
Gio and I worked on the CI/CD pipeline again today. We found that we had 2 jobs with the same name that was keeping one of them from running. We are still running into an error with getting the page to display on heroku though.

## September 12, 2022
Michael and I worked on writing a search function in React to seach our movie api. We were able to get it working and are porbably going to replace our ACLs with it.

## September 13, 2022
Gio and I were finally able to get the site deployed. We were missing the basename from the app.js.

## September 14, 2022
We worked as group today. We fixed our Heroku deployment. Also worked on fixing the login, movie search and review pages.

## September 15, 2022
Finished the rest of the unit tests. Fixed all the linting issues so the pipeline would run.