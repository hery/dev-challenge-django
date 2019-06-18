import request from "axios"

export const calculate = (savingsAmount, monthlyDeposit, interestRate) => {
	return request
		.post("/calculate/", {
			savingsAmount,
			monthlyDeposit,
			interestRate
		})
}
