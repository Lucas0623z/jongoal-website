import React from 'react';
import { CheckCircle, Target, Users, TrendingUp, Globe2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTranslation } from "../translations";

export default function AboutPage() {
  const t = useTranslation();

  const values = [
    {
      icon: Target,
      title: t.about.values.innovation.title,
      description: t.about.values.innovation.description,
    },
    {
      icon: Users,
      title: t.about.values.customer.title,
      description: t.about.values.customer.description,
    },
    {
      icon: TrendingUp,
      title: t.about.values.quality.title,
      description: t.about.values.quality.description,
    },
    {
      icon: Globe2,
      title: t.about.values.integrity.title,
      description: t.about.values.integrity.description,
    },
  ];

  const milestones = [
    { year: "1995", event: t.about.journey.milestones[1995] },
    { year: "2003", event: t.about.journey.milestones[2003] },
    { year: "2010", event: t.about.journey.milestones[2010] },
    { year: "2015", event: t.about.journey.milestones[2015] },
    { year: "2020", event: t.about.journey.milestones[2020] },
    { year: "2026", event: t.about.journey.milestones[2026] },
  ];

  const stats = [
    { value: "30+", label: t.about.stats.experience },
    { value: "50+", label: t.about.stats.countries },
    { value: "5000+", label: t.about.stats.products },
    { value: "200+", label: t.about.stats.engineers },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1606337321936-02d1b1a4d5ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjB3b3JraW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzQ0OTc2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">{t.about.hero.title}</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            {t.about.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Company overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                {t.about.overview.title}
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  {t.about.overview.paragraph1}
                </p>
                <p>
                  {t.about.overview.paragraph2}
                </p>
                <p>
                  {t.about.overview.paragraph3}
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764835822981-1a3ccf47c369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjaWxpdHklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzQ0OTc2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-slate-200">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.about.values.title}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.about.values.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.about.journey.title}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.about.journey.subtitle}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-6">
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <p className="text-lg text-slate-700">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t.about.certifications.title}</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              {t.about.certifications.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">{t.about.certifications.iso9001.title}</h3>
              <p className="text-blue-100">{t.about.certifications.iso9001.description}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">{t.about.certifications.ce.title}</h3>
              <p className="text-blue-100">{t.about.certifications.ce.description}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">{t.about.certifications.api.title}</h3>
              <p className="text-blue-100">{t.about.certifications.api.description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
