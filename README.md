# CX Debt Framework & Calculator

**CX Debt** is a conceptual and operational framework designed to quantify the compounding financial burden of unresolved customer experience issues.

Just as engineering teams use the metaphor of "Technical Debt" to communicate the cost of code shortcuts, CX Debt provides support, customer success, and operations leaders with a financial mechanism to make invisible operational backlogs visible.

## The Concept

CX Debt is defined as the accumulated cost—financial, operational, and relational—incurred when customer-facing issues remain unresolved beyond their expected resolution window. It categorizes these liabilities into six key areas:

1. **Resolution Debt:** Aging tickets exceeding SLA.
2. **Knowledge Debt:** Missing self-service documentation.
3. **Escalation Debt:** Issues trapped in cross-functional limbo.
4. **Process Debt:** Manual workarounds and inefficient workflows.
5. **Onboarding Debt:** Downstream volume from implementation gaps.
6. **Feedback Debt:** Unactioned customer feedback eroding trust.

## The Tool: CX Debt Calculator

The centerpiece of this project is an interactive calculator that translates operational noise into a balance sheet. It measures:

*   **CX Debt Balance:** Estimated dollar liability of the current backlog.
*   **CX Debt Ratio:** The percentage of the support budget consumed by servicing debt.
*   **Debt Trajectory:** 12-month projections comparing growth vs. optimized reduction paths.

## Built With

*   **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Visualization:** [Recharts](https://recharts.org/) for debt trajectory and breakdown metrics
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Deployment:** [Vercel](https://vercel.com/)

## Project Structure

```text
/src
  /app
    /framework   # Taxonomy & conceptual definitions
    /calculator  # Interactive calculator logic & interface
    /methodology # Sources & benchmark transparency
    /about       # Origin & mission
  /components
    /calculator  # Calculator logic, forms, and charts
    /layout      # Shared header and footer
  /lib
    /calculator.ts # Core financial logic and debt accumulation models
