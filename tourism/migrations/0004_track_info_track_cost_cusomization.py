# Generated by Django 3.0 on 2020-05-08 15:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tourism', '0003_trekkerstory'),
    ]

    operations = [
        migrations.AddField(
            model_name='track_info',
            name='track_cost_cusomization',
            field=models.CharField(default=0, max_length=5000),
            preserve_default=False,
        ),
    ]
