
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SEOContent = () => {
  return (
    <div className="mt-16 space-y-8 animate-fade-in">
      <Card className="shadow-lg border-secondary/20">
        <CardHeader className="bg-primary text-white rounded-t-lg">
          <CardTitle>Understanding Recurring Deposits: A Complete Guide</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 text-charcoal">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">What is a Recurring Deposit?</h2>
              <p className="leading-relaxed">
                A Recurring Deposit (RD) is a popular investment option offered by banks and financial institutions in India that allows individuals to save money regularly while earning guaranteed returns. It's designed for disciplined savers who can commit to depositing a fixed amount at regular intervals, typically monthly. Unlike Fixed Deposits where a lump sum amount is invested once, RDs enable you to build your corpus gradually through systematic investments.
              </p>
              <p className="leading-relaxed mt-3">
                The interest rates on Recurring Deposits are usually similar to Fixed Deposit rates and are compounded quarterly in most banks. This makes RDs an excellent choice for achieving short to medium-term financial goals while maintaining the discipline of regular savings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">Key Benefits of Recurring Deposits</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Disciplined Savings:</strong> RDs encourage regular saving habits by requiring monthly deposits, helping you build financial discipline.
                </li>
                <li>
                  <strong>Guaranteed Returns:</strong> Unlike market-linked investments, RDs offer fixed and guaranteed interest rates, providing certainty of returns.
                </li>
                <li>
                  <strong>Low Risk:</strong> RDs are considered among the safest investment options as they are not affected by market fluctuations.
                </li>
                <li>
                  <strong>Flexible Tenure:</strong> You can choose tenures ranging from 6 months to 10 years based on your financial goals.
                </li>
                <li>
                  <strong>Loan Facility:</strong> Many banks offer loan facilities against RD accounts, typically up to 80-90% of the deposit amount.
                </li>
                <li>
                  <strong>High Liquidity:</strong> While premature withdrawals may incur penalties, RDs offer better liquidity compared to many other fixed-income investments.
                </li>
                <li>
                  <strong>Tax Benefits:</strong> TDS rules apply similarly to Fixed Deposits, and you can submit Form 15G/15H to avoid TDS if eligible.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">How Does a Recurring Deposit Work?</h2>
              <p className="leading-relaxed">
                When you open a Recurring Deposit account, you commit to depositing a fixed amount every month for a predetermined period. The bank pays interest on these deposits, typically compounded quarterly. At maturity, you receive the total amount of your deposits plus the accumulated interest.
              </p>
              <p className="leading-relaxed mt-3">
                Most banks calculate RD interest using the following method: they apply the interest rate to each monthly deposit for the period it remains with the bank until maturity. For example, your first deposit earns interest for the entire tenure, while your last deposit earns interest only for one month.
              </p>
              <p className="leading-relaxed mt-3">
                The interest calculation uses quarterly compounding, which means the interest is added to your principal amount every three months, and subsequent interest calculations include this accumulated interest, resulting in interest-on-interest or compound interest.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">Who Should Invest in Recurring Deposits?</h2>
              <p className="leading-relaxed">
                Recurring Deposits are particularly suitable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>First-time investors</strong> who want to start with a safe investment option
                </li>
                <li>
                  <strong>Conservative investors</strong> seeking guaranteed returns without market risks
                </li>
                <li>
                  <strong>Regular income earners</strong> who can set aside a fixed amount monthly
                </li>
                <li>
                  <strong>Goal-based savers</strong> planning for specific short to medium-term financial objectives
                </li>
                <li>
                  <strong>Senior citizens</strong> looking for regular income with safety of principal
                </li>
                <li>
                  <strong>Parents</strong> saving for their children's future education or other expenses
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">Comparing Recurring Deposits with Other Investment Options</h2>
              
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white border border-secondary/20">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="py-3 px-4 text-left">Investment Option</th>
                      <th className="py-3 px-4 text-left">Risk Level</th>
                      <th className="py-3 px-4 text-left">Returns</th>
                      <th className="py-3 px-4 text-left">Liquidity</th>
                      <th className="py-3 px-4 text-left">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-secondary/20">
                      <td className="py-3 px-4 font-medium">Recurring Deposit</td>
                      <td className="py-3 px-4">Low</td>
                      <td className="py-3 px-4">5-7% p.a. (Fixed)</td>
                      <td className="py-3 px-4">Moderate</td>
                      <td className="py-3 px-4">Short to Medium-term goals</td>
                    </tr>
                    <tr className="border-b border-secondary/20 bg-cream">
                      <td className="py-3 px-4 font-medium">Fixed Deposit</td>
                      <td className="py-3 px-4">Low</td>
                      <td className="py-3 px-4">5-7.5% p.a. (Fixed)</td>
                      <td className="py-3 px-4">Low to Moderate</td>
                      <td className="py-3 px-4">Capital preservation</td>
                    </tr>
                    <tr className="border-b border-secondary/20">
                      <td className="py-3 px-4 font-medium">Public Provident Fund</td>
                      <td className="py-3 px-4">Very Low</td>
                      <td className="py-3 px-4">7-8% p.a. (Tax-free)</td>
                      <td className="py-3 px-4">Very Low</td>
                      <td className="py-3 px-4">Long-term tax-saving</td>
                    </tr>
                    <tr className="border-b border-secondary/20 bg-cream">
                      <td className="py-3 px-4 font-medium">Mutual Funds (SIP)</td>
                      <td className="py-3 px-4">Moderate to High</td>
                      <td className="py-3 px-4">10-15% p.a. (Variable)</td>
                      <td className="py-3 px-4">High</td>
                      <td className="py-3 px-4">Long-term wealth creation</td>
                    </tr>
                    <tr className="border-b border-secondary/20">
                      <td className="py-3 px-4 font-medium">Stock Market</td>
                      <td className="py-3 px-4">High</td>
                      <td className="py-3 px-4">15%+ p.a. (Variable)</td>
                      <td className="py-3 px-4">Very High</td>
                      <td className="py-3 px-4">Long-term growth</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="leading-relaxed mt-4">
                While Recurring Deposits offer lower returns compared to market-linked investments like mutual funds or stocks, they provide safety and certainty that these other options cannot. This makes RDs an essential component of any well-diversified investment portfolio, particularly for your emergency fund or short-term financial goals.
              </p>
            </section>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg border-secondary/20">
        <CardHeader className="bg-secondary text-white rounded-t-lg">
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-primary font-medium">
                What happens if I miss a monthly installment in my RD account?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal">
                If you miss a monthly installment, most banks charge a penalty (typically ranging from ₹10 to ₹50 per month) for each missed payment. Some banks may allow a grace period of a few days. It's important to note that consistently missing payments might impact the overall returns of your RD. To avoid penalties, consider setting up automatic transfers from your savings account to your RD account on a specific date each month.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-primary font-medium">
                Can I close my RD account prematurely?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal">
                Yes, most banks allow premature closure of RD accounts. However, there's usually a penalty involved, typically 0.5% to 1% reduction in the applicable interest rate. Additionally, some banks may have a minimum lock-in period (often 3 months) before which premature withdrawal is not allowed. The exact terms vary from bank to bank, so it's advisable to check with your specific bank regarding their premature closure policy.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-primary font-medium">
                How is tax calculated on Recurring Deposit interest?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal">
                Interest earned on Recurring Deposits is taxable as "Income from Other Sources" in your income tax return. Banks deduct TDS (Tax Deducted at Source) at 10% if the interest earned exceeds ₹40,000 in a financial year (₹50,000 for senior citizens). If your total income is below the taxable limit, you can submit Form 15G (for non-senior citizens) or Form 15H (for senior citizens) to avoid TDS deduction. Remember that even if TDS is not deducted, you're still required to report the interest income in your tax return.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-primary font-medium">
                Can I get a loan against my Recurring Deposit?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal">
                Yes, many banks offer loans against Recurring Deposits. Typically, you can get a loan of up to 80-90% of the deposit amount accumulated at the time of loan application. The interest rate on such loans is usually 1-2% higher than the interest rate of your RD. This can be a good option when you need funds temporarily but don't want to break your RD and lose out on interest. The loan processing is usually quick and involves minimal documentation since the bank already has your KYC details.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-primary font-medium">
                What is the minimum and maximum amount I can deposit in an RD?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal">
                The minimum monthly deposit amount for an RD varies from bank to bank, but it usually starts from as low as ₹100 and can go up to ₹1,000. There's generally no upper limit on the maximum amount, allowing you to deposit any amount based on your financial capacity. Some banks might have their own limits, so it's best to check with your specific bank. The flexibility in deposit amounts makes RDs accessible to individuals across different income brackets.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-primary font-medium">
                How does an RD calculator help in financial planning?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal">
                An RD calculator helps in accurate financial planning in several ways. First, it provides a clear picture of how much wealth you can accumulate through regular savings over a specific period. This helps you assess whether an RD is the right instrument for your financial goals. Second, it allows you to experiment with different monthly deposit amounts and tenures to find the optimal combination that aligns with your goals. Third, by showing you the exact maturity amount, it enables you to plan your future expenses more precisely. Finally, the calculator helps you compare the returns from RDs with other investment options to make informed decisions about your investment portfolio.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default SEOContent;
