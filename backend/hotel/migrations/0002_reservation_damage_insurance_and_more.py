# Generated by Django 5.1 on 2024-11-09 01:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='reservation',
            name='damage_insurance',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='reservation',
            name='damage_report',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='reservation',
            name='total_amount_paid',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=8, verbose_name='Total Amount Paid (USD)'),
            preserve_default=False,
        ),
    ]