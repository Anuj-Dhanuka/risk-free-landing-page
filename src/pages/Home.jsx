import React, { useState, useEffect } from 'react';
import {
  ArrowRight, CheckCircle, Target, Zap, TrendingUp,
  Users, Star, Clock, Shield, Award, ChevronDown, ChevronUp
} from 'lucide-react';

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('trust');
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 32 });
  const [spotsLeft] = useState(3);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const industries = [
    { name: 'Business Coaches', icon: '💼', stat: '+847% leads' },
    { name: 'Life Coaches', icon: '🌟', stat: '+634% conversions' },
    { name: 'Fitness Trainers', icon: '💪', stat: '+729% bookings' },
    { name: 'Financial Advisors', icon: '💰', stat: '+892% revenue' },
    { name: 'Marketing Consultants', icon: '📈', stat: '+756% ROI' },
    { name: 'Sales Coaches', icon: '🎯', stat: '+681% results' }
  ];

  const clientResults = [
    { name: 'Sarah M.', result: '3 → 47 qualified leads in 28 days', industry: 'Business Coach' },
    { name: 'Marcus R.', result: '$180K in booked calls in 60 days', industry: 'Sales Coach' },
    { name: 'Jennifer L.', result: '1.2% → 14.7% conversions in 45 days', industry: 'Life Coach' }
  ];

  const ObjectionTab = ({ id, title, isActive, onClick, children }) => (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className={`w-full p-4 text-left flex justify-between items-center transition-colors ${
          isActive ? 'bg-blue-50 text-blue-900' : 'bg-white hover:bg-gray-50'
        }`}
        onClick={() => onClick(id)}
      >
        <span className="font-semibold">{title}</span>
        {isActive ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isActive && (
        <div className="p-4 bg-white border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">

      {/* Section 1: Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  20+ Qualified Leads in 30 Days —{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    Or You Don't Pay a Dime
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100">
                  For coaches & consultants who want booked calls — not just pretty funnels or wasted ad spend.
                </p>
              </div>
              
              <p className="text-lg text-gray-300">
                Stop throwing money at ads that don't convert. I build funnels that guarantee results. 
                If you don't hit 20+ qualified leads in 30 days, you pay nothing. That's my skin in the game.
              </p>
              
              <div className="space-y-4">
                <button className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 hover:shadow-xl flex items-center gap-2">
                  👉 Claim My Risk-Free Funnel Audit ({spotsLeft} Spots Left This Month)
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-sm text-blue-200">⚡ Results guaranteed in 30 days or full refund</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-sm text-blue-200 mb-2">BROKEN FUNNEL</div>
                    <div className="bg-red-500/20 border border-red-400 rounded-lg p-4">
                      <div className="text-red-300">73% Fail Rate</div>
                      <div className="text-sm text-red-200">$300-500 lost daily</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <ArrowRight className="w-8 h-8 text-orange-400" />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-blue-200 mb-2">FIXED FUNNEL</div>
                    <div className="bg-green-500/20 border border-green-400 rounded-lg p-4">
                      <div className="text-green-300">847% More Leads</div>
                      <div className="text-sm text-green-200">$22K-36K yearly revenue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections 2 – 11 remain same as your original code (Problem, Future Consequences, Proof, Authority, Objections, Process, etc.) */}

      {/* Section 12: Final CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Fill Your Calendar with Qualified Leads?
            </h2>
            <p className="text-xl text-orange-100">
              20+ leads in 30 days, guaranteed — or you don’t pay a dime.
            </p>
          </div>

          <button className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-5 rounded-xl text-lg font-bold transition-all transform hover:scale-105">
            👉 Claim My Risk-Free Funnel Audit ({spotsLeft} Spots Left)
          </button>

          <p className="mt-6 text-sm text-orange-200">
            ⚡ Don’t wait — every day costs you $300–500 in lost opportunities
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
