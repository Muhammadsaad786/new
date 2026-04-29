import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for side projects and small startups.',
    monthlyPrice: 19,
    annualPrice: 15,
    features: [
      'Up to 5,000 users',
      'Basic analytics',
      'Community support',
      '48-hour response time',
      'Custom domain',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    description: 'Ideal for growing businesses and teams.',
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      'Up to 50,000 users',
      'Advanced analytics',
      'Priority email support',
      '24-hour response time',
      'Custom domain & SSL',
      'API access',
      'Team collaboration',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large scale organizations and mission critical apps.',
    monthlyPrice: 199,
    annualPrice: 159,
    features: [
      'Unlimited users',
      'Custom reporting',
      '24/7 phone support',
      '1-hour response time',
      'Dedicated account manager',
      'SSO & Advanced Security',
      'Custom integrations',
      'SLA guarantee',
    ],
    popular: false,
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Start for free, upgrade when you need to. No hidden fees.
          </p>

          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 rounded-full bg-primary-600 transition-colors focus:outline-none"
            >
              <div className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Annually <span className="text-primary-600 ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl bg-white border ${
                plan.popular ? 'border-primary-500 shadow-xl shadow-primary-500/10' : 'border-slate-200 shadow-lg shadow-slate-200/50'
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500">{plan.description}</p>
              </div>

              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-slate-500 font-medium">/mo</span>
              </div>

              <ul className="flex-1 flex flex-col gap-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-md shadow-primary-600/20'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
