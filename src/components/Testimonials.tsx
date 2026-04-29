
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "SaaSify completely transformed how we build products. The speed and reliability are unmatched. We've cut our development time in half.",
    author: "Sarah Jenkins",
    role: "CTO, TechStart",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    content: "The analytics dashboard alone is worth the price. Being able to see user behavior in real-time has allowed us to iterate so much faster.",
    author: "Marcus Chen",
    role: "Product Manager, InnovateInc",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    content: "I was skeptical at first, but migrating to SaaSify was the best decision we made this year. The support team is incredibly responsive.",
    author: "Elena Rodriguez",
    role: "Founder, GrowthApp",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Loved by builders worldwide
          </h2>
          <p className="text-lg text-slate-600">
            Don't just take our word for it. See what our customers have to say about building with SaaSify.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col"
            >
              <div className="flex gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 mb-8 flex-1 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.author}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo cloud */}
        <div className="mt-20 pt-10 border-t border-slate-100">
          <p className="text-center text-sm font-medium text-slate-400 uppercase tracking-wider mb-8">
            Trusted by innovative companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using placeholder SVGs for logos */}
            <div className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-indigo-600"></div> Acme Corp
            </div>
            <div className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-600"></div> Globex
            </div>
            <div className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <div className="w-6 h-6 rotate-45 bg-rose-600"></div> Soylent
            </div>
            <div className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <div className="w-6 h-6 rounded-tr-lg rounded-bl-lg bg-blue-600"></div> Initech
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
