# Generated by Django 3.2.7 on 2021-09-19 12:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0005_alter_review_value'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='value',
            field=models.CharField(choices=[('up', 'up vote'), ('down', 'down vote')], max_length=200),
        ),
    ]