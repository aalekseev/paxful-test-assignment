# Generated by Django 2.2.11 on 2020-04-01 10:54

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255)),
                ('positive_rep', models.SmallIntegerField(default=0)),
                ('negative_rep', models.SmallIntegerField(default=0)),
                ('picture', models.URLField()),
                ('online', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Trade',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hash', models.UUIDField(default=uuid.uuid4, editable=False, unique=True)),
                ('title', models.CharField(max_length=255)),
                ('status', models.CharField(choices=[('PAID', 'Paid'), ('NOT PAID', 'Not Paid')], default='NOT PAID', max_length=10)),
                ('amount_usd', models.DecimalField(decimal_places=2, max_digits=8)),
                ('amount_satoshi', models.IntegerField(default=0)),
                ('buyer', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='buy_trades', to='paxful.User')),
                ('seller', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='sell_trades', to='paxful.User')),
            ],
        ),
    ]
