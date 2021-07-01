# Generated by Django 3.0 on 2020-05-09 05:51

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tourism', '0004_track_info_track_cost_cusomization'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=100)),
                ('trek_id', models.CharField(max_length=10)),
                ('subject', models.CharField(max_length=100)),
                ('img1', models.ImageField(upload_to='event_pics')),
                ('sub1', models.CharField(max_length=100)),
                ('des1', models.TextField()),
                ('img2', models.ImageField(upload_to='event_pics')),
                ('sub2', models.CharField(max_length=100)),
                ('des2', models.TextField()),
                ('img3', models.ImageField(upload_to='event_pics')),
                ('sub3', models.CharField(max_length=100)),
                ('des3', models.TextField()),
                ('img4', models.ImageField(upload_to='event_pics')),
                ('sub4', models.CharField(max_length=100)),
                ('des4', models.TextField()),
                ('date', models.DateTimeField(default=datetime.datetime.now)),
            ],
        ),
    ]
