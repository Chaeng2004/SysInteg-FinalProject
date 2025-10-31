import React from 'react';
import { Smartphone, DollarSign, Lock, Bell, User } from 'lucide-react';

export default function CynergyAbout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
  
      <nav className="bg-gradient-to-r from-red-900 to-red-800 px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-red-900 rounded-full"></div>
            </div>
            <span className="text-xl md:text-2xl font-light tracking-wide">Cynergy</span>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <a href="#offers" className="hidden md:inline text-gray-200 hover:text-white transition">Offers</a>
            <a href="#rates" className="hidden md:inline text-gray-200 hover:text-white transition">Rates</a>
            <a href="#services" className="hidden md:inline text-gray-200 hover:text-white transition">Services</a>
            <a href="#about" className="text-white border-b-2 border-white pb-1">About</a>
            <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
            <User className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
          </div>
        </div>
      </nav>

    
      <div 
        className="relative px-4 py-16 md:py-24 lg:py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
          <div className="max-w-2xl space-y-4 text-base md:text-lg">
            <p>
              Welcome to <span className="font-semibold">Cynergy Entertainment</span>, your one-stop
              destination for ultimate fun and unforgettable memories!
            </p>
            <p>We're not just a booking website.</p>
            <p>
              We're your dedicated partner in planning the perfect
              escape whether you're looking to belt out your favorite
              tunes, immerse yourself in a cinematic masterpiece, or
              dive into some friendly competition.
            </p>
          </div>
        </div>
      </div>

    
      <div className="bg-gray-100 text-gray-900 px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">3.63K</div>
            <div className="text-sm md:text-base text-gray-600">Regular Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">6.70K</div>
            <div className="text-sm md:text-base text-gray-600">Client Visits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">5.90K</div>
            <div className="text-sm md:text-base text-gray-600">Clients Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">95%</div>
            <div className="text-sm md:text-base text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>

  
      <div className="bg-gradient-to-b from-red-950 to-red-900 px-4 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
            Why Book with Us?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Instant Booking</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Our system shows real-time availability on your phone. Secure your room in minutes with instant confirmation, allowing you to plan your fun right now, not later.
              </p>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Guaranteed Savings</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Save on every booking. Automatically access reduced off-peak rates and maximize value with discounted packages. Subscribe for deeper member savings and free hours on future visits.
              </p>
            </div>

       
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Private Escape</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Get the best of everything in every room. Enjoy top-tier equipment and absolute privacy without dealing with crowded public venues.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <footer className="bg-gray-950 px-4 py-8 text-center text-gray-400 text-sm">
        <p>Cynergy Ent. 2025. All rights reserved</p>
      </footer>
    </div>
  );
}