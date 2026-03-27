import React from 'react';
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Factory, Droplet, Zap, Package, Pill, Car } from "lucide-react";
import { useTranslation } from "../translations";

export default function IndustriesPage() {
  const t = useTranslation();

  const industries = [
    {
      icon: Factory,
      key: "chemicalProcessing",
      image: "https://images.unsplash.com/photo-1768128834406-f5b1b962af9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHByb2Nlc3NpbmclMjBwbGFudCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc0NDk3NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Zap,
      key: "miningMinerals",
      image: "https://images.unsplash.com/photo-1758750518277-1a8a182033e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBlcXVpcG1lbnQlMjBpbmR1c3RyaWFsJTIwaGVhdnl8ZW58MXx8fHwxNzc0NDk3NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Package,
      key: "foodBeverage",
      image: "https://images.unsplash.com/photo-1768737180431-9b986c7dd1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcHJvY2Vzc2luZyUyMGVxdWlwbWVudCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc0NDk3NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Car,
      key: "automotive",
      image: "https://images.unsplash.com/photo-1689942007858-7b12bf5864bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwbWFudWZhY3R1cmluZyUyMGluZHVzdHJ5fGVufDF8fHx8MTc3NDQ5NzY0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Pill,
      key: "pharmaceutical",
      image: "https://images.unsplash.com/photo-1737703121444-c568a9d3bc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBpbmR1c3RyaWFsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ0OTc2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Droplet,
      key: "waterTreatment",
      image: "https://images.unsplash.com/photo-1759668987649-a2057d0a9f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlbGluZSUyMGluZHVzdHJpYWwlMjBzeXN0ZW18ZW58MXx8fHwxNzc0NDk3NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="relative h-[400px] flex items-center bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-5xl font-bold text-white mb-4">{t.industries.title}</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            {t.industries.subtitle}
          </p>
        </div>
      </section>

      {/* Industries overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {industries.map((industry, index) => {
              const industryData = t.industries.details[industry.key as keyof typeof t.industries.details];
              return (
                <div key={index} className="group">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                    <ImageWithFallback
                      src={industry.image}
                      alt={industryData.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-3">
                        <industry.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{industryData.name}</h3>
                    </div>
                  </div>
                  <p className="text-slate-600">{industryData.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed industry sections */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => {
              const industryData = t.industries.details[industry.key as keyof typeof t.industries.details];
              return (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <industry.icon className="h-7 w-7" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">{industryData.name}</h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">{t.industries.typicalApplications}</h3>
                      <ul className="space-y-2">
                        {industryData.applications.map((app: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-700">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">{t.industries.keyChallenges}</h3>
                      <ul className="space-y-2">
                        {industryData.challenges.map((challenge: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-700">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t.industries.trustedTitle}</h2>
            <p className="text-xl text-blue-100">
              {t.industries.trustedSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">6+</div>
              <div className="text-blue-200">{t.industries.stats.majorIndustries}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">{t.industries.stats.countries}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-200">{t.industries.stats.installations}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">{t.industries.stats.satisfactionRate}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
