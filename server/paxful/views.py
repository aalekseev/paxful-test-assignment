from django.http import JsonResponse
from paxful.models import Trade


def rates_view(request):
    return JsonResponse({'trades': tuple([t.as_dict() for t in Trade.objects.all()])})
