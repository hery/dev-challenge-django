from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
import json


def capital(savings_amount=0, monthly_deposit=0, interest_rate=0, month=0, compound_period=12):
    # A = P(1 + r)t
    return savings_amount * (1 + interest_rate/100.0) * (month/12.0)


@require_POST
@csrf_exempt
def calculate(request):
    params = json.loads(request.body)
    savings_amount = params.get('savingsAmount', None)
    monthly_deposit = params.get('monthlyDeposit', None)
    interest_rate = params.get('interestRate', None)
    compound_period = params.get('compoundPeriod', None)

    print('Calculating %s %s %s %s' % (
        savings_amount,
        monthly_deposit,
        interest_rate,
        compound_period,
    ))

    if savings_amount is None or interest_rate is None:
        return HttpResponseBadRequest('Required parameters are not provided')

    result = [{
        "month": month,
        "amount": capital(savings_amount, monthly_deposit, interest_rate, month, compound_period)
    } for month in range(0, 24)] # 12 months * 50 years = 600 months

    print(result)
    
    return JsonResponse({'result': result })