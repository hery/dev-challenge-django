from unittest import TestCase
from interest_calculator.views import capital


class InterestCalculatorTestCase(TestCase):
    def test_capital_formula(self):
        self.assertEqual(
            capital(
                savings_amount=3000,
                monthly_deposit=1500,
                interest_rate=7,
                month=0,
                compound_period=12),
            3000)
        
        self.assertEqual(
            int(capital(
                savings_amount=3000,
                monthly_deposit=1500,
                interest_rate=7,
                month=1,
                compound_period=12)),
            4517)

        self.assertEqual(
            int(capital(
                savings_amount=3000,
                monthly_deposit=1500,s
                interest_rate=7,
                month=2 ,
                compound_period=12)),
            6043)