import React from 'react';
import { Mic, Film, Gamepad2, Clock, Tag, CheckCircle2, ChevronRight } from 'lucide-react';

export default function CynergyServices() {
  const services = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "KTV Rooms",
      description: "Featuring advanced acoustic and audio-visual equipment for a professional-grade karaoke experience."
    },
    {
      icon: <Film className="w-6 h-6" />,
      title: "Movie Rooms",
      description: "Offering private cinema luxury with 4K projection and immersive surround sound systems."
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Game Rooms",
      description: "Furnished with high-specification gaming consoles and other sports games for competitive and engaging gameplay."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast and Flexible Booking",
      description: "Secure your session in minutes with an instant confirmation and digital calendar invite."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast and Flexible Booking",
      description: "Secure your session in minutes with an instant confirmation and digital calendar invite."
    },
    {
      icon: <Tag className="w-6 h-6" />,
      title: "Exclusive Discounts and Packages",
      description: "Secure discounted rates and complimentary amenities like free popcorn or beverage credits."
    }
  ];

  const plans = [
    {
      name: "Starter Pack",
      price: "₱999",
      period: "/month",
      features: [
        "Casual users or solo/duo bookings",
        "5% off standard hourly room rate",
        "Standard KTV, Movie, and Game Rooms",
        "Priority check-in line",
        "Standard 24-hour policy for book cancellation"
      ]
    },
    {
      name: "Premium Pack",
      price: "₱2,499",
      period: "/month",
      features: [
        "Regular users, couples, or small groups",
        "15% off standard hourly room rate",
        "All Standard Rooms + Premium Rooms",
        "One (1) complimentary non-alcoholic drink per booking",
        "Enhanced 12-hour cancellation grace period"
      ]
    },
    {
      name: "Elite Pack",
      price: "₱4,999",
      period: "/month",
      features: [
        "Frequent bookers, large groups, or corporate use",
        "25% off standard hourly room rate",
        "All Rooms (including VIP Suites)",
        "Two (2) complimentary premium snacks",
        "Full refund up to 4 hours before booking time"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-red-950">
    
      <header className="bg-red-950/80 backdrop-blur-sm border-b border-red-800/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <Film className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-2xl font-light">Cynergy</span>
          </div>
          <nav className="flex items-center gap-8">
            <a href="#" className="text-white/80 hover:text-white transition">Offers</a>
            <a href="#" className="text-white/80 hover:text-white transition">Rates</a>
            <a href="#" className="text-white border-b-2 border-white pb-1">Services</a>
            <a href="#" className="text-white/80 hover:text-white transition">About</a>
          </nav>
        </div>
      </header>

    
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-white text-center mb-6">Our Services</h1>
        <p className="text-white/80 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Our mission is to make booking and enjoying a private entertainment room effortless and memorable. 
          We believe the best memories are made when people can relax, be themselves, and focus purely on having fun.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-red-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-red-900 rounded-full flex items-center justify-center mb-4 text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

     
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Unlock Exclusive Plans</h2>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
            Stop paying full price! Our monthly memberships are the easiest way to save money and get 
            priority access to our KTV, Movie, and Game Rooms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-red-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all">
                Choose Pack
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

    
      <footer className="text-center text-white/60 py-8 border-t border-red-800/30">
        <p>Cynergy Ent. 2025. All rights reserved</p>
      </footer>
    </div>
  );
}