from uuid import uuid4
from django.db import models

from decimal import Decimal


class User(models.Model):
    first_name = models.CharField(max_length=255)
    positive_rep = models.SmallIntegerField(default=0)
    negative_rep = models.SmallIntegerField(default=0)
    picture = models.URLField()
    online = models.BooleanField(default=False)


class Trade(models.Model):
    STATUS_PAID = 'PAID'
    STATUS_NOT_PAID = 'NOT PAID'
    STATUSES = (
        (STATUS_PAID, 'Paid'),
        (STATUS_NOT_PAID, 'Not Paid')
    )
    hash = models.UUIDField(default=uuid4, editable=False, unique=True)
    title = models.CharField(max_length=255)
    seller = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sell_trades')
    buyer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='buy_trades')
    status = models.CharField(max_length=10, choices=STATUSES, default=STATUS_NOT_PAID)
    amount_usd = models.DecimalField(max_digits=8, decimal_places=2)
    amount_satoshi = models.IntegerField(default=0)
    completed = models.BooleanField(default=False)

    @property
    def amount_btc(self):
        return Decimal(self.amount_satoshi / 100_000_000).quantize(Decimal('.00000001'))

    def as_dict(self):
        seller = {
            'name': self.seller.first_name,
            'reputation': {
                'positive': self.seller.positive_rep,
                'negative': self.seller.negative_rep,
            },
            'img_url': self.seller.picture,
            'online': self.seller.online,
        }
        return {
            'hash': self.hash,
            'seller': seller,
            'title': self.title,
            'amount_usd': self.amount_usd,
            'amount_btc': self.amount_btc,
            'status': self.status,
            'paid': self.completed,
        }
