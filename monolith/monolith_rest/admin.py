from django.contrib import admin
from monolith_rest.models import ReviewModel, CommentsModel, MovieInformationModel
# Register your models here.
# from .models import USER_MODEL

# @admin.register(USER_MODEL)
# class USER_MODELAdmin(admin.ModelAdmin):
#     passs

class ReviewModelAdmin(admin.ModelAdmin):
    pass

class CommentsModelAdmin(admin.ModelAdmin):
    pass

class MovieInformationModelAdmin(admin.ModelAdmin):
    pass

admin.site.register(ReviewModel, ReviewModelAdmin)
admin.site.register(CommentsModel, CommentsModelAdmin)
admin.site.register(MovieInformationModel, MovieInformationModelAdmin)

