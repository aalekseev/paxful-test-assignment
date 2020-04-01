# Generated by Django 2.2.11 on 2020-03-31 16:20
from django.db import migrations
from faker import Faker

fake = Faker(['en_US'])


def forwards(apps, schema_editor):
    if schema_editor.connection.alias != 'default':
        return

    Trade = apps.get_model('paxful', 'Trade')
    User = apps.get_model('paxful', 'User')

    buyer = User.objects.create(
        first_name=fake.first_name(),
        positive_rep=fake.pyint(min_value=-10, max_value=30),
        negative_rep=fake.pyint(min_value=-10, max_value=30),
        picture="https://randomuser.me/api/portraits/men/5.jpg",
        online=fake.boolean(),
    )
    for i in range(5):
        seller = User.objects.create(
            first_name=fake.first_name(),
            positive_rep=fake.pyint(min_value=-10, max_value=30),
            negative_rep=fake.pyint(min_value=-10, max_value=30),
            picture=f"https://randomuser.me/api/portraits/men/{i + 10}.jpg",
            online=fake.boolean(),
        )
        Trade.objects.create(
            seller=seller,
            buyer=buyer,
            title=fake.sentence(nb_words=5),
            status=fake.random_element(elements=('PAID', 'NOT PAID')),
            amount_usd=fake.pyint(min_value=10, max_value=50),
            amount_satoshi=fake.pyint(min_value=10000, max_value=100000),
            completed=fake.boolean(),
        )


class Migration(migrations.Migration):
    dependencies = [
        ('paxful', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(forwards, reverse_code=migrations.RunPython.noop),
    ]
