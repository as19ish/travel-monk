# Generated by Django 3.0 on 2020-11-23 05:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tourism', '0006_slider_media'),
    ]

    operations = [
        migrations.AlterField(
            model_name='slider_media',
            name='image',
            field=models.ImageField(upload_to='home_slider_pics'),
        ),
    ]