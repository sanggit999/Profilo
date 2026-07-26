import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Github, Linkedin, MessageSquare } from 'lucide-react';
import { contactInfoData } from '@/data/profileData';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-surface-borderDark/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="blue" className="mb-3">05. GET IN TOUCH</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Have a project in mind, a technical question, or want to discuss full-time opportunities? Send me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Info Column */}
          <div className="space-y-8">
            <div className="glass-panel p-6 sm:p-8 rounded-xl border border-surface-borderDark space-y-6 shadow-card">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand-blue" />
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${contactInfoData.email}`}
                  className="flex items-center gap-4 p-4 rounded-lg bg-surface-dark/80 border border-surface-borderDark hover:border-brand-blue/40 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-brand-blue/10 text-brand-blue group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase block">Direct Email</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-brand-blue transition-colors">
                      {contactInfoData.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-surface-dark/80 border border-surface-borderDark">
                  <div className="p-3 rounded-lg bg-brand-violet/10 text-brand-violet">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase block">Location</span>
                    <span className="text-sm font-semibold text-slate-200">
                      {contactInfoData.location}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                  ⚡ {contactInfoData.availability}
                </div>
              </div>
            </div>

            {/* Social Connect Cards */}
            <div className="flex gap-4">
              <a
                href={contactInfoData.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 glass-panel p-4 rounded-xl border border-surface-borderDark hover:border-brand-blue/40 flex items-center justify-center gap-2 text-slate-300 hover:text-white transition-all group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform text-brand-blue" />
                <span className="text-xs font-mono font-medium">GitHub</span>
              </a>

              <a
                href={contactInfoData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 glass-panel p-4 rounded-xl border border-surface-borderDark hover:border-brand-blue/40 flex items-center justify-center gap-2 text-slate-300 hover:text-white transition-all group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform text-brand-blue" />
                <span className="text-xs font-mono font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-surface-borderDark shadow-card">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-slate-400 max-w-md mx-auto">
                  Thank you for reaching out. I've received your message and will respond within 24 hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="mt-4"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Smith"
                    className="w-full px-4 py-3 rounded-lg bg-surface-dark text-slate-100 border border-surface-borderDark focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-surface-dark text-slate-100 border border-surface-borderDark focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Alex, I'd like to discuss a project..."
                    className="w-full px-4 py-3 rounded-lg bg-surface-dark text-slate-100 border border-surface-borderDark focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue transition-colors text-sm resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={loading}
                  icon={<Send className="w-4 h-4" />}
                  className="w-full"
                >
                  {loading ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
