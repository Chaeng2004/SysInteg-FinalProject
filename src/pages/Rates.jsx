import React from 'react';
import { Film, Bell, User } from 'lucide-react';

export default function CynergyRooms() {
  const rooms = [
    {
      id: 1,
      title: "KTV Room",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
      description: "Ready to hit those high notes? This KTV room features a professional-grade premium sound system that makes every voice sound incredible. Dual wireless, studio-quality microphones give you freedom to roam, while the 4K crystal-clear display guarantees you won't miss a single lyric. Forget grainy screens and feedback. This room is built for pitch-perfect performances and unforgettable recording-studio sound."
    },
    {
      id: 2,
      title: "Movie Room",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
      description: "Skip the loud theaters and sticky floors! Our Cinema Lounge is like having a blockbuster theater all to yourselves but way cozier. You get to stretch out on super comfy reclining seats and watch anything you want on a big screen. Bring your favorite date, grab a few buddies, and enjoy cinematic quality without draining your wallet. It's the best movie day and night upgrade that feels expensive but totally isn't!"
    },
    {
      id: 3,
      title: "Game Room",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      description: "This Game room provides the best of both worlds. Dedicated gaming stations (PS5 included) and classic pub sports like billiards and darts. Designed for groups seeking variety and excellent value, this room allows your party to switch between active challenges and digital downtime effortlessly. Secure your private session and enjoy a comprehensive entertainment experience at a sensible price."
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
            <a href="#" className="text-white/80 hover:text-white transition text-sm">Offers</a>
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

    
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {rooms.map((room, index) => (
          <article 
            key={room.id} 
            className="bg-gradient-to-br from-red-900/60 to-red-950/60 rounded-3xl overflow-hidden border-4 border-red-800/50 shadow-2xl hover:border-red-700/70 transition-all duration-300"
          >
           
            <div className="relative h-96 overflow-hidden">
              <img 
                src={room.image} 
                alt={room.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-950/20 to-transparent"></div>
            </div>

         
            <div className="p-8 space-y-6">
              <h2 className="text-4xl font-bold text-white">{room.title}</h2>
              
              <p className="text-white/90 leading-relaxed text-lg">
                {room.description}
              </p>

              <button className="w-full bg-gradient-to-r from-red-200 via-red-100 to-red-200 hover:from-white hover:via-red-50 hover:to-white text-red-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                View Rates
              </button>
            </div>
          </article>
        ))}
      </main>


      <footer className="text-center text-white/50 py-8 mt-16 border-t border-red-800/30">
        <p className="text-sm">Cynergy Ent. 2025. All rights reserved</p>
      </footer>
    </div>
  );
}