from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.conf import settings



# class UserModel(models.Model):
#     user = models.CharField(max_length=20)  
#     first_name = models.CharField(max_length=20)
#     last_name = models.CharField(max_length=20)
#     email = models.EmailField()
USER_MODEL = settings.AUTH_USER_MODEL
    

class ReviewModel(models.Model):
    movie_name = models.CharField(max_length = 100)
    base_rating = models.SmallIntegerField(validators=[MaxValueValidator(10),MinValueValidator(1)])
    plot_rating = models.SmallIntegerField(validators=[MaxValueValidator(10),MinValueValidator(1)])# rating based on plot
    char_rating = models.SmallIntegerField(validators=[MaxValueValidator(10),MinValueValidator(1)])# rating based on character accuracy 
    setting_rating = models.SmallIntegerField(validators=[MaxValueValidator(10),MinValueValidator(1)])# rating based on setting accuracy 
    add_on_rating = models.SmallIntegerField(validators=[MaxValueValidator(10),MinValueValidator(1)])# rating based on if they added anything that wasnt in source material 
    removal_rating = models.SmallIntegerField(validators=[MaxValueValidator(10),MinValueValidator(1)])# rating based on if they took anything out that was in the source material 
    rubric_rating = models.FloatField()
    admin_rating = models.FloatField()
    rating_description = models.TextField(max_length= 250)
    reviewer_id = models.ForeignKey(
        USER_MODEL,
        related_name = "review_model",
        on_delete=models.PROTECT,  
        null=True,#CHANGE BACK TO FALSE WHEN USER!!!!!
    )
    def __str__(self):
        return self.movie_name


class CommentsModel(models.Model):
    date_posted = models.DateTimeField()
    comment = models.TextField(max_length=250)
    commenter_id = models.ForeignKey(
        USER_MODEL,
        related_name = "comments_model",
        on_delete=models.PROTECT,  
        null=True, #CHANGE BACK TO FALSE!!!!
    )

class MovieInformationModel(models.Model):
    movie_name = models.CharField(max_length= 100)
    movie_poster = models.URLField(null=True)
    source_cover = models.URLField(null=True)
    movie_director = models.CharField(max_length=100)
    source_author = models.CharField(max_length=100)
    imdb_score = models.FloatField()
    movie_synopsis = models.TextField(max_length=250)
    imdb_id = models.CharField(max_length=100)
    source_type = models.CharField(max_length=100)
    list_of_reviews = models.ForeignKey(
        ReviewModel,
        related_name="list_of_reviews",
        on_delete=models.PROTECT, null=True,
    
    )
