
import { motion } from 'framer-motion';
import { Zap, Shield, BarChart3, Users, Globe, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Zap className="text-primary-600" size={24} />,
    title: 'Lightning Fast',
    description: 'Optimized for speed. Load times are reduced by up to 50% compared to traditional alternatives.',
    color: 'bg-primary-50',
  },
  {
    icon: <Shield className="text-emerald-600" size={24} />,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with major data protection regulations out of the box.',
    color: 'bg-emerald-50',
  },
  {
    icon: <BarChart3 className="text-blue-600" size={24} />,
    title: 'Advanced Analytics',
    description: 'Gain actionable insights with our comprehensive dashboard and custom reporting tools.',
    color: 'bg-blue-50',
  },
  {
    icon: <Users className="text-purple-600" size={24} />,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with built-in commenting, roles, and real-time cursor tracking.',
    color: 'bg-purple-50',
  },
  {
    icon: <Globe className="text-rose-600" size={24} />,
    title: 'Global Edge CDN',
    description: 'Your app is served from the edge, closer to your users, ensuring minimal latency anywhere.',
    color: 'bg-rose-50',
  },
  {
    icon: <Smartphone className="text-amber-600" size={24} />,
    title: 'Mobile Optimized',
    description: 'Every interface is designed to work perfectly on any device, from desktop to smartphone.',
    color: 'bg-amber-50',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Everything you need to scale
          </h2>
          <p className="text-lg text-slate-600">
            We've built all the core infrastructure you need so you can focus entirely on your unique business logic and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
