## Review Model

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

## Movie Model

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

## User Model 
| Name | Type | Unique | Optional |
|-|-|-|-|
| User name | string | yes | no| 
|real name| string | no | no |
|password | string | no | no|
|email | string | yes | no| 
|review history | foreign key | no | yes|

Stretch Goals:
    
    -include amount of people that have rated the movie adaptation to contribute to overall 
    - create api for other websites  to pull our ratings for their website 
    - advertiser model / space 