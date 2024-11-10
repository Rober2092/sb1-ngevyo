import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Loader2 } from 'lucide-react';
import { sendEmail } from '../utils/emailService';
import { FormData, FormErrors } from '../types/contact';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await sendEmail(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border ${
            errors.name ? 'border-red-500' : 'border-gray-600'
          }`}
          placeholder="Your name"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="text-red-400 text-sm mt-1">{errors.name}</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border ${
            errors.email ? 'border-red-500' : 'border-gray-600'
          }`}
          placeholder="your@email.com"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border ${
            errors.message ? 'border-red-500' : 'border-gray-600'
          }`}
          placeholder="Tell me about your project"
          disabled={isSubmitting}
        ></textarea>
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-lg font-semibold transition-all 
          ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-blue-500/25'}`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
      {submitStatus === 'success' && (
        <p className="text-green-400 text-sm text-center">Message sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-400 text-sm text-center">Failed to send message. Please try again.</p>
      )}
    </form>
  );
}