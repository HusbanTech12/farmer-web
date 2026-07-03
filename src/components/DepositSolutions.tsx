const deposits = [
  "Group Savings Accounts",
  "Fixed-Term Deposit Accounts",
  "Daily or Weekly Contribution Savings",
  "Secure Withdrawal and Deposit Services",
];

export default function DepositSolutions() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative md:order-1">
            <div
              className="rounded-2xl h-[400px] md:h-[500px] bg-cover bg-center shadow-lg"
              style={{
                backgroundImage:
                  "url('/images/Service/Loan-product-2.jpg')",
              }}
            />
          </div>

          <div className="md:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
              Deposit Solutions That Fit{" "}
              <span className="serif-accent text-4xl md:text-5xl">
                Rural Needs
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
              Our savings products are designed to help rural users save flexibly
              and safely, regardless of their income patterns.
            </p>

            <ul className="space-y-3">
              {deposits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-green-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-charcoal text-sm md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
