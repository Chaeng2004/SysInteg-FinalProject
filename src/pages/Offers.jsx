import React from 'react';
import { Film, Bell, User, Flame } from 'lucide-react';

export default function CynergyOffers() {
  const offers = [
    {
      id: 1,
      title: "KTV Room",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
      rooms: [
        { type: "Small room (4 - 6 people)", price: "240.00/hr" },
        { type: "Deluxe room (8 - 12 people)", price: "400.00/hr" },
        { type: "VIP room (15 - 25+ people)", price: "800.00/hr" }
      ]
    },
    {
      id: 2,
      title: "Movie Room",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
      rooms: [
        { type: "Small room (4 - 6 people)", price: "240.00/hr" },
        { type: "Deluxe room (8 - 12 people)", price: "400.00/hr" },
        { type: "VIP room (15 - 25+ people)", price: "800.00/hr" }
      ]
    },
    {
      id: 3,
      title: "Game Room",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      rooms: [
        { type: "Small room (4 - 6 people)", price: "240.00/hr" },
        { type: "Deluxe room (8 - 12 people)", price: "400.00/hr" },
        { type: "VIP room (15 - 25+ people)", price: "800.00/hr" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-black">
     
      <header className="bg-red-950/90 backdrop-blur-sm border-b border-red-800/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
              <Film className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-xl font-light tracking-wide">Cynergy</span>
          </div>
          <nav className="flex items-center gap-8">
            <a href="#" className="text-white border-b-2 border-white pb-1 text-sm">Offers</a>
            <a href="#" className="text-white/80 hover:text-white transition text-sm">Rates</a>
            <a href="#" className="text-white/80 hover:text-white transition text-sm">Services</a>
            <a href="#" className="text-white/80 hover:text-white transition text-sm">About</a>
            <button className="text-white/80 hover:text-white transition">
              <Bell className="w-5 h-5" />
            </button>
            <button className="text-white/80 hover:text-white transition">
              <User className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </header>

     
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold text-white mb-2">Exclusive Offers</h1>
        <p className="text-2xl text-white/90">Limited Time Only</p>
      </div>

      
      <main className="max-w-3xl mx-auto px-6 pb-16 space-y-12">
        {offers.map((offer) => (
          <article 
            key={offer.id} 
            className="bg-gradient-to-br from-red-900/70 to-red-950/70 rounded-3xl overflow-hidden border-4 border-red-700/60 shadow-2xl"
          >
           
            <div className="relative">
              <img 
                src={offer.image} 
                alt={offer.title}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 to-transparent"></div>
              
          
              <div className="absolute top-4 right-4 bg-white rounded-2xl px-4 py-2 shadow-lg">
                <div className="flex items-center gap-1 mb-1">
                  <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                  <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                  <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                </div>
                <p className="text-red-600 font-bold text-lg">20% OFF</p>
              </div>
            </div>

      
            <div className="p-8 bg-gradient-to-b from-red-900/80 to-red-950/80">
              <h2 className="text-4xl font-bold text-white mb-6">{offer.title}</h2>
              
          
              <div className="space-y-4 mb-6">
                {offer.rooms.map((room, index) => (
                  <div key={index} className="flex justify-between items-center text-white/95">
                    <span className="text-lg">{room.type}</span>
                    <span className="text-xl font-bold">{room.price}</span>
                  </div>
                ))}
              </div>

              
              <button className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                Book now
              </button>
            </div>
          </article>
        ))}
      </main>

      <footer className="text-center text-white/50 py-8 border-t border-red-800/30">
        <p className="text-sm">Cynergy Ent. 2025. All rights reserved</p>
      </footer>
    </div>
  );
}