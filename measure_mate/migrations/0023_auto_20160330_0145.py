# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-03-30 01:45
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('measure_mate', '0022_measurement_action'),
    ]

    operations = [
        migrations.AddField(
            model_name='measurement',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2016, 3, 30, 1, 44, 49, 738456, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='measurement',
            name='updated',
            field=models.DateTimeField(auto_now=True, default=datetime.datetime(2016, 3, 30, 1, 45, 17, 64656, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
