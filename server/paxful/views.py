from django.http import JsonResponse


def rates_view(request):
    return JsonResponse({
        'rates': [
            [37, -109.05],
            [41, -109.03],
            [41, -102.05],
            [37, -102.04]
        ],
    })
