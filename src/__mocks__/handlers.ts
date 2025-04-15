import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(
    import.meta.env.VITE_SEQURA_HOST_API + "/credit_agreements",
    ({ request }) => {
      const url = new URL(request.url);

      const totalWithTax = url.searchParams.get("totalWithTax");

      if (!totalWithTax) {
        return new HttpResponse(null, { status: 404 });
      }

      if (Number(totalWithTax) === 0) {
        return HttpResponse.json([
          {
            instalment_count: 3,
            total_with_tax: { value: 0, string: "0 €" },
            instalment_amount: { value: 0, string: "0 €" },
            instalment_fee: { value: 500, string: "5 €" },
            instalment_total: { value: 500, string: "5 €" },
            grand_total: { value: 1500, string: "15 €" },
            cost_of_credit: { value: 1500, string: "15 €" },
            cost_of_credit_pct: { value: 600, string: "6,00 %" },
            apr: { value: 2500, string: "25 %" },
            max_financed_amount: { value: 200000, string: "2000 €" },
          },
          {
            instalment_count: 6,
            total_with_tax: { value: 0, string: "0 €" },
            instalment_amount: { value: 0, string: "0 €" },
            instalment_fee: { value: 500, string: "5 €" },
            instalment_total: { value: 500, string: "5 €" },
            grand_total: { value: 3000, string: "30 €" },
            cost_of_credit: { value: 3000, string: "30 €" },
            cost_of_credit_pct: { value: 600, string: "6,00 %" },
            apr: { value: 2500, string: "25 %" },
            max_financed_amount: { value: 200000, string: "2000 €" },
          },
        ]);
      }
      return HttpResponse.json([
        {
          instalment_count: 3,
          total_with_tax: { value: 15000, string: "150 €" },
          instalment_amount: { value: 5000, string: "50 €" },
          instalment_fee: { value: 500, string: "5 €" },
          instalment_total: { value: 5500, string: "55 €" },
          grand_total: { value: 16500, string: "165 €" },
          cost_of_credit: { value: 1500, string: "15 €" },
          cost_of_credit_pct: { value: 600, string: "6,00 %" },
          apr: { value: 2500, string: "25 %" },
          max_financed_amount: { value: 200000, string: "2000 €" },
        },
        {
          instalment_count: 6,
          total_with_tax: { value: 15000, string: "150 €" },
          instalment_amount: { value: 2500, string: "25 €" },
          instalment_fee: { value: 500, string: "5 €" },
          instalment_total: { value: 3000, string: "30 €" },
          grand_total: { value: 18000, string: "180 €" },
          cost_of_credit: { value: 3000, string: "30 €" },
          cost_of_credit_pct: { value: 600, string: "6,00 %" },
          apr: { value: 2500, string: "25 %" },
          max_financed_amount: { value: 200000, string: "2000 €" },
        },
      ]);
    }
  ),
];
