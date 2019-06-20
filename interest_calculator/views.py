from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
import json


def capital(savings_amount=0, monthly_deposit=0, interest_rate=7, month=1, compound_period=12):
    # reference: https://www.thecalculatorsite.com/articles/finance/compound-interest-formula.php
    # [ P(1+r/n)^(nt) ] + [ PMT × (((1 + r/n)^(nt) - 1) / (r/n)) ]
    
    P = float(savings_amount)
    r = float(interest_rate) / 100
    n = float(compound_period)
    t = float(month) / 12 # years
    PMT = float(monthly_deposit)

    principal_compound_interest = P*(1+r/n)**(n*t)
    future_series_value = PMT * (((1 + r/n)**(n*t) - 1) / (r/n))
    return principal_compound_interest + future_series_value


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
    } for month in range(0, 600)] # 12 months * 50 years = 600 months
    
    return JsonResponse({'result': result })