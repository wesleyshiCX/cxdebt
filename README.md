# CX Debt — Framework & Calculator

> Quantify the compounding cost of unresolved customer experience 
> issues. Make invisible operational backlogs visible to finance.

🔗 **Live calculator:** [cxdebt.com](https://cxdebt.com)  
📊 **For:** Support Directors, VPs of CX, and Heads of Support 
building the business case for investment

![CX Debt Calculator](./docs/screenshot.png)

---

## The Concept

Engineering teams use **Technical Debt** to communicate the cost of 
code shortcuts. **CX Debt** does the same for support, customer 
success, and operations — providing leaders a financial mechanism 
to make operational backlogs visible to the rest of the business.

CX Debt is the accumulated cost — financial, operational, and 
relational — incurred when customer-facing issues remain unresolved 
beyond their expected resolution window.

### Six Categories

1. **Resolution Debt** — Aging tickets exceeding SLA
2. **Knowledge Debt** — Missing self-service documentation
3. **Escalation Debt** — Issues trapped in cross-functional limbo
4. **Process Debt** — Manual workarounds and inefficient workflows
5. **Onboarding Debt** — Downstream volume from implementation gaps
6. **Feedback Debt** — Unactioned customer feedback eroding trust

---

## The Calculator

An interactive tool that translates operational noise into a balance 
sheet. It measures:

- **CX Debt Balance** — Estimated dollar liability of the current backlog
- **CX Debt Ratio** — Percentage of support budget consumed servicing debt
- **Debt Trajectory** — 12-month projections comparing growth vs. 
  optimized reduction paths

Try it at **[cxdebt.com](https://cxdebt.com)**.

---

## Built With

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Visualization:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

## Project Structure

```text
/src
  /app
    /framework    # Taxonomy & conceptual definitions
    /calculator   # Interactive calculator logic & interface
    /methodology  # Sources & benchmark transparency
    /about        # Origin & mission
  /components
    /calculator   # Calculator logic, forms, and charts
    /layout       # Shared header and footer
  /lib
    /calculator.ts  # Core financial logic and debt accumulation models
