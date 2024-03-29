# Generated by Django 3.0 on 2020-11-23 05:57

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tourism', '0005_event'),
    ]

    operations = [
        migrations.CreateModel(
            name='Slider_media',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='pics')),
                ('title', models.CharField(max_length=100)),
                ('detail', models.CharField(max_length=10000)),
                ('date', models.DateTimeField(default=datetime.datetime.now)),
            ],
        ),
    ]
