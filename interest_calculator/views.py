from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
import json

@require_POST
@csrf_exempt
def calculate(request):
    params = json.loads(request.body)
    savings_amount = params.get('savingsAmount', None)
    savings_amount = params.get('monthlyDeposit', None)
    interest_rate = params.get('interestRate', None)

    if savings_amount is None or interest_rate is None:
        return HttpResponseBadRequest('Required parameters are not provided')
    
    result = [
              {
                "month": 1,
                "amount": 500
              },
              {
                "month": 2,
                "amount": 700
              },
              {
                "month": 3,
                "amount": 1000
              },
              {
                "month": 4,
                "amount": 1500
              }
            ] 
    return JsonResponse({'result': result })