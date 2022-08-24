## __Review Model__

| Name | Type | Unique | Optional |
|-|-|-|-|
| movie name | string | no | no |
| reviewer name | string | yes | no |
| base rating | float | no | no |
| plot rating | float | no | yes |
| character rating | float | no | yes|
| setting/location rating | float | no | yes |
| add on rating | float | no | yes |
| Remove info rating | float | no | yes |
| rubric rating | float | no | yes |
|description | string | no | yes |
|admin rating | boolean | no | no | 

## __Movie Model__

| Name | Type | Unique | Optional |
|-|-|-|-|
|movie name | string | yes | no |
|movie poster | string | yes | no |
|source cover | string | yes | yes  |
|movie director| string | no | no | 
| source author | string | no | no |
| imdb | float | no | no| 
|movie synopsis | string | no | no| 
|imdb id (from api)| string | yes | no | 
|list of reviews | strings | no | yes | 
|base average rating | no | no| no| 
|rubric rating | float | no | no |
|movie comments | string | no | yes | 

## __User Model__ 
| Name | Type | Unique | Optional |
|-|-|-|-|
| User name | string | yes | no| 
|real name| string | no | no |
|password | string | no | no|
|email | string | yes | no| 
|review history | foreign key | no | yes|


## __Comments  Model__ 
| Name | Type | Unique | Optional |
|-|-|-|-|
|User Name | string | yes | no |
|Date posted | string | yes | no | 
|comment | string | yes | no |

Features: 
    - List of movies that have been rated by users and admins 
    - Rate movies based on source material accuracy 
    - allow registered users to  comment on others reviews 
    - uses rubric to determine rating on a scale of 1 - 10 
    - user account that displays movies that user has rated 

Stretch Goals:
    
    - include amount of people that have rated the movie adaptation to contribute to overall 
    - create api for other websites  to pull our ratings for their website 
    - advertiser model / space 
    - upvote comments 

## DDD Model

*[DDD Diagram](https://files.slack.com/files-pri/T03AAE15UA0-F03V4MWNYSU/screen_shot_2022-08-19_at_4.14.24_pm.png)