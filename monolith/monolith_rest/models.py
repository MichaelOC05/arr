from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth.models import AbstractUser


class UserModel(AbstractUser):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField()
    profile_picture = models.URLField(null=True, blank=True)
    profile_bio = models.CharField(max_length=1000, null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.is_staff is not True:
            self.set_password(self.password)
            super().save(*args, **kwargs)
        else:
            super().save(*args, **kwargs)


# class CommentsModel(models.Model):
#     date_posted = models.DateTimeField()
#     comment = models.TextField(max_length=250)
#     commenter_id = models.ForeignKey(
#         UserModel,
#         related_name="comment_model",
#         on_delete=models.PROTECT,
#         null=True,  # CHANGE BACK TO FALSE!!!!
#     )


class MovieInformationModel(models.Model):
    movie_name = models.CharField(max_length=100, unique=True)
    movie_poster = models.URLField(null=True, blank=True)
    movie_director = models.CharField(max_length=100, null=True, blank=True)
    source_author = models.CharField(max_length=100, null=True, blank=True)
    imdb_score = models.FloatField(null=True, blank=True)
    movie_synopsis = models.TextField(max_length=250)
    imdb_id = models.CharField(max_length=100)
    base_rating = models.FloatField(null=True, blank=True)
    plot_rating = models.FloatField(null=True, blank=True)
    char_rating = models.FloatField(null=True, blank=True)
    setting_rating = models.FloatField(null=True, blank=True)
    add_on_rating = models.FloatField(null=True, blank=True)
    removal_rating = models.FloatField(null=True, blank=True)
    rubric_rating = models.FloatField(null=True, blank=True)
    admin_rating = models.FloatField(null=True, blank=True)


class ReviewModel(models.Model):
    movie_id = models.ForeignKey(
        MovieInformationModel,
        related_name="review_models",
        on_delete=models.CASCADE,
        null=False,
    )
    base_rating = models.SmallIntegerField(
        validators=[MaxValueValidator(10), MinValueValidator(1)]
    )
    plot_rating = models.SmallIntegerField(
        validators=[MaxValueValidator(10), MinValueValidator(1)]
    )
    char_rating = models.SmallIntegerField(
        validators=[MaxValueValidator(10), MinValueValidator(1)]
    )  # rating based on character accuracy
    setting_rating = models.SmallIntegerField(
        validators=[MaxValueValidator(10), MinValueValidator(1)]
    )  # rating based on setting accuracy
    add_on_rating = models.SmallIntegerField(
        validators=[MaxValueValidator(10), MinValueValidator(1)]
    )
    removal_rating = models.SmallIntegerField(
        validators=[MaxValueValidator(10), MinValueValidator(1)]
    )
    rubric_rating = models.FloatField(null=True, blank=True)
    admin_rating = models.FloatField(null=True, blank=True)
    rating_description = models.TextField(max_length=250)
    reviewer_id = models.ForeignKey(
        UserModel,
        related_name="reviews_model",
        on_delete=models.PROTECT,
        null=False,  # CHANGE BACK TO FALSE WHEN USER CREATED !!!
        # default = False
    )

    def __str__(self):
        return self.reviewer_id.username + "'s " + self.movie_id.movie_name
