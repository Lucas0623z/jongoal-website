import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import { useTranslation } from "../translations";

export default function ContactPage() {
  const t = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.contact.form.success);
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      country: "",
      subject: "",
      message: "",
    });
  };

  const offices = [
    {
      name: t.contact.offices.headquarters,
      address: "No. 123 Industrial Park, High-Tech Zone, Shanghai 201203, China",
      phone: "+86-21-1234-5678",
      email: "info@industrialtech.com",
      hours: "Mon-Fri: 8:30 AM - 5:30 PM",
    },
    {
      name: t.contact.offices.manufacturing,
      address: "No. 456 Manufacturing District, Suzhou Industrial Park, Suzhou 215000, China",
      phone: "+86-512-8765-4321",
      email: "suzhou@industrialtech.com",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM",
    },
    {
      name: t.contact.offices.international,
      address: "Suite 2501, Tower A, International Trade Center, Shanghai 200030, China",
      phone: "+86-21-9876-5432",
      email: "export@industrialtech.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
  ];

  const contactReasons = [
    t.contact.contactReasons.inquiry,
    t.contact.contactReasons.quote,
    t.contact.contactReasons.support,
    t.contact.contactReasons.partnership,
    t.contact.contactReasons.general,
    t.contact.contactReasons.other,
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="relative h-[300px] flex items-center bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-5xl font-bold text-white mb-4">{t.contact.title}</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact form and info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">{t.contact.sendMessage}</h2>
                <p className="text-slate-600 mb-8">
                  {t.contact.messagePrompt}
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        {t.contact.form.name} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        {t.contact.form.email} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        {t.contact.form.company}
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        {t.contact.form.phone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-2">
                        {t.contact.form.country}
                      </label>
                      <input
                        type="text"
                        id="country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                        {t.contact.form.subject} *
                      </label>
                      <select
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="">Select...</option>
                        {contactReasons.map((reason) => (
                          <option key={reason} value={reason}>
                            {reason}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      {t.contact.form.message} *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white px-8 py-4 rounded-md hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    {t.contact.form.submit}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact information */}
            <div className="space-y-6">
              {offices.map((office, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">{office.name}</h3>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600">{office.address}</span>
                    </div>
                    <div className="flex gap-3">
                      <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{office.phone}</span>
                    </div>
                    <div className="flex gap-3">
                      <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{office.email}</span>
                    </div>
                    <div className="flex gap-3">
                      <Clock className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{office.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-200 h-96 rounded-lg flex items-center justify-center">
            <MapPin className="h-16 w-16 text-slate-400" />
          </div>
        </div>
      </section>
    </div>
  );
}
