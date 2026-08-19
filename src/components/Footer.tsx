'use client';

import { useState, type FormEvent } from 'react';
import { Container } from '@/components/Container';
import { contactInfo, portfolioConfig } from '@/data/social';
import { experience } from '@/data/experience';
import { NAVIGATION_LINKS, SITE_NAME } from '@/lib/constants';
import { MapPin, Linkedin, Mail, Send, Check } from 'lucide-react';
import { SocialIcon } from '@/components/ui/SocialIcon';

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export function Footer() {
  const currentYear = new Date().getFullYear();
  const initials = SITE_NAME.split(' ');
  const currentLocation = experience[0]?.location;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!WEB3FORMS_ACCESS_KEY) {
      // No key configured — fall back to the visitor's own email client instead of failing silently.
      const subject = `Portfolio feedback from ${name || 'a visitor'}`;
      const body = `${message}\n\n- ${name}${email ? ` (${email})` : ''}`;
      window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus('sending');
    try {
      // FormData (not JSON) avoids a CORS preflight that Web3Forms' API rejects.
      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('subject', `Portfolio feedback from ${name}`);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="relative mt-12">
      <div className="rounded-t-[28px] border border-b-0 border-border bg-white/70 dark:bg-dark-bg-light/60 backdrop-blur-sm pt-10 pb-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <h3 className="font-heading text-xl font-extrabold uppercase leading-none tracking-tight">
                {initials.map((word, i) => (
                  <span key={i}>
                    <span className="text-primary">{word[0]}</span>
                    <span className="text-text">{word.slice(1)}</span>
                  </span>
                ))}
                <span className="text-primary">.</span>
              </h3>
              <p className="mt-4 text-secondary-text text-sm leading-relaxed max-w-xs">
                I&apos;m {portfolioConfig.name.split(' ')[0]}, a {portfolioConfig.title} building scalable systems
                across the stack. Thanks for checking out my site!
              </p>
              {currentLocation && (
                <div className="flex items-center gap-2 mt-4 text-sm text-secondary-text">
                  <MapPin size={16} /> {currentLocation}
                </div>
              )}
              <div className="flex items-center gap-3 mt-3">
                <SocialIcon
                  href={contactInfo.linkedin}
                  icon={Linkedin}
                  label="LinkedIn"
                  external
                  className="text-secondary-text hover:text-primary"
                />
                <SocialIcon
                  href={`mailto:${contactInfo.email}`}
                  icon={Mail}
                  label="Email"
                  className="text-secondary-text hover:text-primary"
                />
              </div>
              <p className="mt-6 text-xs text-secondary-text">
                © {currentYear} {SITE_NAME} ~ All Rights Reserved
              </p>
            </div>

            {/* General nav */}
            <div>
              <h4 className="font-heading font-bold text-text mb-4 underline decoration-wavy decoration-2 decoration-primary/50 underline-offset-4">
                General
              </h4>
              <ul className="space-y-3 text-sm">
                {NAVIGATION_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-secondary-text hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Feedback form */}
            <div>
              <h4 className="font-heading font-bold text-text mb-1 underline decoration-wavy decoration-2 decoration-primary/50 underline-offset-4 inline-block">
                Feedback
              </h4>{' '}
              <span className="text-secondary-text italic text-sm">~ thoughts, bugs, or just saying hi</span>

              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <div className="flex gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="flex-1 min-w-0 px-3 py-2 rounded-[10px] border border-[rgba(15,23,42,0.12)] bg-white/65 dark:bg-dark-bg/50 text-sm text-text placeholder:text-secondary-text focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(47,128,255,0.1)] transition-all"
                  />
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    aria-label="Send feedback"
                    className="shrink-0 inline-flex items-center gap-2 button-primary !px-4 !py-2 !text-sm disabled:opacity-60"
                  >
                    {status === 'sent' ? (
                      <>
                        SENT <Check size={14} />
                      </>
                    ) : (
                      <>
                        {status === 'sending' ? 'SENDING…' : 'SEND'} <Send size={14} />
                      </>
                    )}
                  </button>
                </div>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-[10px] border border-[rgba(15,23,42,0.12)] bg-white/65 dark:bg-dark-bg/50 text-sm text-text placeholder:text-secondary-text focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(47,128,255,0.1)] transition-all"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 rounded-[10px] border border-[rgba(15,23,42,0.12)] bg-white/65 dark:bg-dark-bg/50 text-sm text-text placeholder:text-secondary-text focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(47,128,255,0.1)] transition-all resize-y"
                />
                {status === 'error' && (
                  <p className="text-xs text-red-500">Something went wrong. Please try again or email me directly.</p>
                )}
                <p className="text-xs text-secondary-text">
                  Sent via Web3Forms, straight to my inbox. Not stored anywhere else, not shared.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
