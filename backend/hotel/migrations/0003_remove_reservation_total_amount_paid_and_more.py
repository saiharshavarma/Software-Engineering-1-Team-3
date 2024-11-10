# Generated by Django 5.1 on 2024-11-10 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel', '0002_reservation_damage_insurance_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='reservation',
            name='total_amount_paid',
        ),
        migrations.AddField(
            model_name='reservation',
            name='amount',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
        migrations.AddField(
            model_name='reservation',
            name='currency',
            field=models.CharField(default='usd', max_length=3),
        ),
        migrations.AddField(
            model_name='reservation',
            name='payment_status',
            field=models.CharField(choices=[('Pending', 'Pending'), ('Paid', 'Paid'), ('Failed', 'Failed')], default='Pending', max_length=20),
        ),
        migrations.AddField(
            model_name='reservation',
            name='stripe_payment_id',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
