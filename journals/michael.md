## September 15, 2022
Created a view that decodes the jwt tokens and returns the user information, used this information when necessary.

## September 14, 2022
Spent most of the day working of CD errors, among them were our PUBLIC_URL environment variable not having a / on the end of it. We also were using an environment varibale that included the app name in it which was throwing off our urls. Lastly we did not include all of the required variables in our gitlab ci variables.

## September 12, 2022
Today I worked with Kurt on the movie selection feature. This feature selects the first 10 instances that are returned from The Movie Database API. These 10 instances are then displayed on the page and the user can select from them the instance they were looking for. If there are no instances returned a modal window pops up alerting the user that either there are no matches or they must double check their input. Once a user selects the instance they are looking for a post fetch request is sent to Django that populates the database with the information from that instance. The user is then directed to the movie detail page for that instance. A problem I ran into was I do not want multiple instances of a certain movie to be created, I was trying to apply some sort of logical if statements on the backend combined with a queryset. However, this was throwing errors, the fix which I will implement tomorrow is to add unique=True to the movie_name property for our MovieModel. Once that is done I need to figure out a way to handle this specific exception on the front end, either by letting the user know that this instance already exists and to use the search bar in the nav, or by directing the user to the movie detail page automatically. I feel that the automatic option is much more user friendly, however I would like to showcase this difference. Also need to adjust the movie_name key to point towards tv show names in the case that the instance is a tv show and not a movie. Ended up quickly using a useEffect to fix the tv show vs. movie differences.

## September 9, 2022
Worked on using tokens to store, update, and delete the user's user id in order to connect it with forms. We used universal-cookies to set, get, and delete the token for the userId. Got this working, but ran into an error where we needed to change some properties on the review model to blank=True, null=True. We were also calling the function before getting the userId value which Jack found out.

## September 8, 2022
Worked on modal for a form in React to pop up for each movie in order for users to review the accuracy of movies. Ran into trouble because we needed to use a newer version of bootstrap that incorporates react modals. Jack with help from the SEIRs was able to figure this out.

## September 7, 2022
Today I worked with jack to get our form to have the movie instance auto added to it. From working on this I realized that I need a better understanding of how to pass id values from lists to details. In order to understand how to do this I chose to work on a easier problem which was to create a movie detail page. I was able to get the detail page to work by using the useEffect and useParams hooks. For tomorrow I will work on using this same functionality on the form.

## September 6, 2022
Today I worked with Jack on getting our logout button to function. After much frustration and with Daniel's help we were able to get it work. The problem was we didn't realize that the logout view was contained within the djwto urls. We also worked on displaying and not displaying the login and logout buttons depending on whether we were logged in or out. We determined this by using the jwt_token. 


## September 2, 2022
I took the day off for vacation.

## September 1, 2022 
Worked on the models updating them to reflect the database normalization for foreign keys. Also worked to figure out how to get process.env to work in react, however I was unable to figure it out.

## August 31, 2022
Today I continued to work on the authentication.


## August 30, 2022
Ran into an error where login function was not working with users that were not created in the command line. Through looking at the volume in beekeeper we noticed that the passwords for users created in the command line were hashed, whereas the users that were created in admin did not have hashed passwords. This caused a failure in the djwto login url where I assume it does a un hashing function. The fix for this was to create a function on our UserModel model that inherits from AbstractUser's save function but includes the set_password function call on the instance's password which produces hashed passwords.

## August 29, 2022
We had an issue with our USER_MODEL was not json serializable, we figured out that it problem was it did not have an encoder. We realized we needed to create a new model encoder for it. However, the isInstance within the model encoder was not functioning (the self.model did not match up with the o). So what I did was created a new custom made user model based off of abstract user. I ran into a problem where the prior USER_MODEL was blocking this new user model. I had to delete migrations and reset everything with the help of Kieran. Then I worked on finally getting the login working, I had made the mistake of trying to create my own cookies with universal-cookies, however it was the djwto that was setting the cookies. The problem at the end was my custom made cookies had the same name as the cookies djwto were attempting to make and therefore were blocking the creation of djwto cookies. The fix was to delete the cookies in the application tab in the developer tools. Once this was done and the login function was created the tokens were created properly and placed in the cookies.
Goals for tomorrow:
Authenticate users with a backend view.

## August 26, 2022
I went through the context code making comments so my group could reference them when they look through it, also did this to better understand what is going on. Spent time trying to understand useContext and context. Built a mini project in order to understand it. Realized that state that is held in context does not persist on page reload, in order to do that we need to either use local storage or cookies. I then started trying to figure out how to use local storage when I noticed that cookies was the one of the two that was accessed api_user_token in the views. Therefore, I started looking at cookies in react, I included universal-cookie in package.json. I then looked up how to set and get cookies with universal-cookie. I incorporated cookies in my mini project in order to understand it further. I used cookies.set to set the value of a cookie from the useState. Lastly, I realized that we to generate the JWT in the views. 
Questions for tomorrow:
Do we need to store the JWT in the database? Or is storing it in the cookies enough? If it is enough why do we use a delete method in the logout function? Would also like to take a look at redux as another solution. Also need to understand useNavigate.
Lastly need to understand how the login function works.

## August 25, 2022
Ran into a major issue where our page React page was not load on code change, further we had issues where react-router and react-router-dom were not installed. Had the SEIRs help us for around 2 hours. The fix was to include the react-router and react-router-dom in the scripts of package.json as well as include node ./windows-setup.js in order to have React update for us properly. Next we ran into a git conflict that somehow went through to GitLab. We had help from Daniel in fixing it. 

## August 24, 2022
Ran into some trouble with our USER_MODEL. My major issue was understanding useToken, useContext etc.

## August 23, 2022
Me and Jack began work on the React front-end. We combined a bootstrap grid with a card similar to what I used in conference-go. The idea was to create a similar effect without 
having to manage the 'columns' in a state. Instead we can loop through a grid object placing each instance in a card in the next open grid.


## August 22, 2022
We discussed the way we would like to set up our models and then we pair programmed them in order for us all to understand their structure.



