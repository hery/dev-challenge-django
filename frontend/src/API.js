import request from "axios"

export const calculate = (savingsAmount, monthlyDeposit, interestRate, compoundPeriod) => {
	return request
		.post("/calculate/", {
			savingsAmount,
			monthlyDeposit,
			interestRate,
			compoundPeriod
		})
}
