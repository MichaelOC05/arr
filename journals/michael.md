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



