
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] max-w-7xl mx-auto -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-100/50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-100/50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-8 border border-primary-100"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary-600"></span>
            Announcing our new AI features
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]"
          >
            Build your next great idea <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
              faster than ever
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
          >
            SaaSify provides everything you need to launch and scale your product.
            Stop worrying about infrastructure and focus on building features your users love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-base font-semibold py-3 px-8 rounded-full transition-all shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40">
              Start for free
              <ArrowRight size={18} />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-base font-semibold py-3 px-8 rounded-full transition-colors">
              <Play size={18} className="text-slate-500" />
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-500"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 md:mt-24 relative max-w-5xl mx-auto"
        >
          <div className="rounded-2xl border border-slate-200/60 bg-white/50 backdrop-blur-sm p-2 shadow-2xl shadow-slate-200/50">
            <div className="rounded-xl overflow-hidden border border-slate-100 bg-slate-50 aspect-[16/9] relative flex items-center justify-center">
              {/* Abstract dashboard representation */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50 opacity-50"></div>

              <div className="w-full h-full p-4 md:p-8 flex flex-col gap-4">
                {/* Header mock */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded bg-primary-100"></div>
                    <div className="w-32 h-4 rounded bg-slate-200"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                  </div>
                </div>

                {/* Content mock */}
                <div className="flex gap-4 flex-1">
                  {/* Sidebar mock */}
                  <div className="w-48 hidden md:flex flex-col gap-2">
                    <div className="w-full h-8 rounded bg-slate-200/50"></div>
                    <div className="w-full h-8 rounded bg-slate-200/50"></div>
                    <div className="w-full h-8 rounded bg-slate-200/50"></div>
                    <div className="w-full h-8 rounded bg-primary-100"></div>
                    <div className="w-full h-8 rounded bg-slate-200/50"></div>
                  </div>

                  {/* Main area mock */}
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="flex gap-4">
                      <div className="flex-1 h-24 rounded-lg border border-slate-200 bg-white p-4 flex flex-col gap-2">
                        <div className="w-20 h-4 rounded bg-slate-200"></div>
                        <div className="w-12 h-8 rounded bg-slate-300"></div>
                      </div>
                      <div className="flex-1 h-24 rounded-lg border border-slate-200 bg-white p-4 flex flex-col gap-2">
                        <div className="w-20 h-4 rounded bg-slate-200"></div>
                        <div className="w-16 h-8 rounded bg-slate-300"></div>
                      </div>
                      <div className="flex-1 h-24 rounded-lg border border-slate-200 bg-white p-4 flex flex-col gap-2">
                        <div className="w-20 h-4 rounded bg-slate-200"></div>
                        <div className="w-10 h-8 rounded bg-slate-300"></div>
                      </div>
                    </div>
                    <div className="flex-1 rounded-lg border border-slate-200 bg-white flex items-center justify-center relative overflow-hidden">
                      <svg className="w-full h-full text-slate-100 absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M0,100 L0,50 Q25,20 50,50 T100,20 L100,100 Z" fill="currentColor" />
                      </svg>
                      <svg className="w-full h-full text-primary-50 absolute inset-0 translate-y-4" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M0,100 L0,60 Q25,30 50,60 T100,30 L100,100 Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
