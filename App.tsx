
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import QueueVisualizer from './components/QueueVisualizer';
import { FEATURES, STORY_STEPS } from './constants';

const App: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', countryCode: '+91', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mqeljqeg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phone}`,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New NotinQ Demo Request from ${formData.name}`
        })
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', countryCode: '+91', phone: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="home" className="min-h-screen relative">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-200/40 blob"></div>
        <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-blue-100/50 blob"></div>
      </div>

      <Navbar />

      <main className="pt-24 sm:pt-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-6 uppercase tracking-widest">
                <i className="fas fa-bolt"></i> Elevating Canteen Experiences
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
                Skip the Line, <br />
                <span className="text-orange-500">Not the Meal.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0">
                NotinQ is the digital pulse of your canteen. Eliminate long wait times, automate orders, and provide a seamless food pickup experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="bg-orange-500 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-orange-600 transition-all hover:shadow-xl hover:-translate-y-1">
                  Book a Demo
                </a>
                <a href="#features" onClick={(e) => smoothScroll(e, '#features')} className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all">
                  Explore Features
                </a>
              </div>
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 grayscale opacity-60">
                <div className="flex items-center gap-2"><i className="fas fa-university"></i> <span className="font-bold">Rathinam</span></div>
                <div className="flex items-center gap-2"><i className="fas fa-building"></i> <span className="font-bold">Google</span></div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end relative">
              <QueueVisualizer />
              {/* Floating Decoration */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 animate-bounce hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Success!</p>
                    <p className="text-xs text-slate-500">Order #101 picked up</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white py-24 sm:py-32 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Everything you need to <span className="text-orange-500">Scale</span></h2>
              <p className="text-slate-500 max-w-2xl mx-auto">From student ordering to backend inventory, we provide the full stack for modern food courts.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURES.map((feature) => (
                <div key={feature.id} className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 transition-all hover:shadow-xl hover:-translate-y-2">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl transition-transform group-hover:scale-110 ${feature.color}`}>
                    <i className={`fas ${feature.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Storytelling Section */}
        <section id="story" className="py-24 sm:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">The Story</span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">Why we built NotinQ</h2>
            </div>
            
            <div className="space-y-32">
              {STORY_STEPS.map((step, idx) => (
                <div key={step.id} className={`flex flex-col ${step.direction === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                  <div className="flex-1">
                    <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${idx % 2 === 0 ? 'from-orange-500/20 to-transparent' : 'from-blue-500/20 to-transparent'} rounded-3xl -rotate-3`}></div>
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="relative rounded-3xl shadow-2xl object-cover aspect-video w-full hover:scale-[1.02] transition-transform duration-700"
                        />
                    </div>
                  </div>
                  <div className="flex-1 space-y-6 text-center lg:text-left">
                    <span className="text-5xl font-black text-slate-100 block">{`0${step.id}`}</span>
                    <h3 className="text-3xl font-black text-slate-900">{step.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {step.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="bg-slate-900 text-white py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
            <i className="fas fa-utensils text-[400px]"></i>
          </div>
          
          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black mb-4">Get Connected</h2>
              <p className="text-slate-400 text-lg">Join 100+ canteens transforming their daily operations. We'll get back to you in 24 hours.</p>
            </div>

            {submitted ? (
              <div className="bg-white/10 p-12 rounded-3xl text-center backdrop-blur-md border border-white/10 animate-fade-in">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                <p className="text-slate-300">Our team will reach out to you shortly. Get ready for a queue-free future.</p>
                <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-orange-400 font-bold hover:underline"
                >
                    Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent backdrop-blur-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Work Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@canteen.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent backdrop-blur-md"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Contact Number</label>
                  <div className="flex gap-3">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                      className="bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent backdrop-blur-md w-32"
                    >
                      <option value="+91" className="bg-slate-800">🇮🇳 +91</option>
                      <option value="+1" className="bg-slate-800">🇺🇸 +1</option>
                      <option value="+44" className="bg-slate-800">🇬🇧 +44</option>
                      <option value="+61" className="bg-slate-800">🇦🇺 +61</option>
                      <option value="+81" className="bg-slate-800">🇯🇵 +81</option>
                      <option value="+86" className="bg-slate-800">🇨🇳 +86</option>
                      <option value="+33" className="bg-slate-800">🇫🇷 +33</option>
                      <option value="+49" className="bg-slate-800">🇩🇪 +49</option>
                      <option value="+971" className="bg-slate-800">🇦🇪 +971</option>
                      <option value="+65" className="bg-slate-800">🇸🇬 +65</option>
                    </select>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setFormData({...formData, phone: value});
                      }}
                      placeholder="9876543210"
                      maxLength={10}
                      pattern="[0-9]{10}"
                      className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent backdrop-blur-md"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Tell us about your canteen</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Approx number of users, current pain points..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent backdrop-blur-md"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-2xl text-xl transition-all hover:shadow-2xl shadow-orange-500/20 disabled:opacity-50"
                >
                  {isSubmitting ? <i className="fas fa-spinner animate-spin"></i> : 'Schedule Free Demo'}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-12 text-slate-500 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                <i className="fas fa-bowl-food text-white text-[10px]"></i>
              </div>
              <span className="text-lg font-black tracking-tighter text-white">Notin<span className="text-orange-500">Q</span></span>
            </div>
            <div className="flex gap-8 text-sm font-medium">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
            </div>
            <div className="flex gap-6 text-xl">
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <div className="mt-12 pt-12 border-t border-white/5 text-center text-xs">
            © {new Date().getFullYear()} NotinQ Systems. Built for the future of food service.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
