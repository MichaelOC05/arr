# Generated by Django 4.0.3 on 2022-09-02 21:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('monolith_rest', '0004_remove_movieinformationmodel_list_of_reviews_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reviewmodel',
            name='reviewer_id',
            field=models.ForeignKey(default=False, on_delete=django.db.models.deletion.PROTECT, related_name='reviews_model', to=settings.AUTH_USER_MODEL),
        ),
    ]