import { useState } from 'react';

export default function RegisterForm() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
   <div className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20240104/pngtree-ethereal-textured-artwork-featuring-gradient-subtle-red-stripes-and-intricate-mesh-image_13896004.png)' }}>
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
      
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-white-400"> </div>
        </div>
        <h1 className="text-white text-3xl font-semibold text-center mb-8">Welcome!</h1>
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setIsSignUp(false)}
            className={`flex-1 py-3 rounded-full font-medium transition-all ${
              !isSignUp 
                ? 'bg-white text-black' 
                : 'bg-transparent text-white/70 hover:text-white'
            }`}
          >
            Sign in
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className={`flex-1 py-3 rounded-full font-medium transition-all ${
              isSignUp 
                ? 'bg-white text-black' 
                : 'bg-transparent text-white/70 hover:text-white'
            }`}
          >
            Sign up 
          </button>
        </div>

        <div className="space-y-4">
          {isSignUp && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-black/20 border border-white/10 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
            />
          )}
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-6 py-4 bg-black/20 border border-white/10 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
          />
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-6 py-4 bg-black/20 border border-white/10 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
          />
          
          {isSignUp && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-black/20 border border-white/10 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
            />
          )}

          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all mt-6"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </div>

        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-white/20"></div>
          <span className="text-white/50 text-sm">OR</span>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        <button className="w-full py-4 bg-white/90 text-black font-medium rounded-full hover:bg-white transition-all flex items-center justify-center gap-3">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign In with Google
        </button>
      </div>
    </div>
  );
}