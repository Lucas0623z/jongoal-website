import React from 'react';
import { CheckCircle, Cog, Microscope, Award, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTranslation } from "../translations";

export default function TechnologyPage() {
  const t = useTranslation();

  const capabilities = [
    {
      icon: Cog,
      key: "cncMachining",
    },
    {
      icon: Microscope,
      key: "rdLab",
    },
    {
      icon: Award,
      key: "qualityControl",
    },
    {
      icon: Users,
      key: "engineeringTeam",
    },
  ];

  const processes = [
    {
      key: "designEngineering",
      image: "https://images.unsplash.com/photo-1738162837335-3745e5d16c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBtYWNoaW5pbmclMjBDTkMlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzc0NDk3NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      key: "precisionManufacturing",
      image: "https://images.unsplash.com/photo-1764835822981-1a3ccf47c369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjaWxpdHklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzQ0OTc2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      key: "qualityAssurance",
      image: "https://images.unsplash.com/photo-1748255882537-cbe88b145305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMGluc3BlY3Rpb24lMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3NDQ5NzY0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const certifications = [
    { key: "iso9001" },
    { key: "ce" },
    { key: "api" },
    { key: "asme" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1737703121444-c568a9d3bc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBpbmR1c3RyaWFsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ0OTc2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Technology and manufacturing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">{t.technology.title}</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            {t.technology.subtitle}
          </p>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.technology.coreCapabilities.title}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.technology.coreCapabilities.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => {
              const capData = t.technology.coreCapabilities[capability.key as keyof typeof t.technology.coreCapabilities] as { title: string; description: string; specs: string[] };
              return (
                <div key={index} className="bg-slate-50 p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    <capability.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{capData.title}</h3>
                  <p className="text-slate-600 mb-4">{capData.description}</p>
                  <ul className="space-y-1">
                    {capData.specs.map((spec: string, idx: number) => (
                      <li key={idx} className="text-sm text-slate-500">
                        • {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manufacturing process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.technology.manufacturingExcellence.title}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.technology.manufacturingExcellence.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processes.map((process, index) => {
              const processData = t.technology.manufacturingExcellence[process.key as keyof typeof t.technology.manufacturingExcellence] as { title: string; description: string };
              return (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="h-64 overflow-hidden">
                    <ImageWithFallback
                      src={process.image}
                      alt={processData.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-blue-600 font-bold text-sm mb-2">{t.technology.manufacturingExcellence.step} {index + 1}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{processData.title}</h3>
                    <p className="text-slate-600">{processData.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical innovations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                {t.technology.continuousInnovation.title}
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                {t.technology.continuousInnovation.subtitle}
              </p>
              <div className="space-y-3">
                {t.technology.continuousInnovation.innovations.map((innovation: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{innovation}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1737703121444-c568a9d3bc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBpbmR1c3RyaWFsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ0OTc2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="R&D Laboratory"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t.technology.certificationsStandards.title}</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              {t.technology.certificationsStandards.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const certData = t.technology.certificationsStandards[cert.key as keyof typeof t.technology.certificationsStandards] as { title: string; description: string };
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <CheckCircle className="h-10 w-10 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{certData.title}</h3>
                  <p className="text-slate-300 text-sm">{certData.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facility stats */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.technology.ourFacilities.title}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">50,000 m²</div>
              <div className="text-slate-600">{t.technology.ourFacilities.manufacturingArea}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">80+</div>
              <div className="text-slate-600">{t.technology.ourFacilities.cncMachines}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">200+</div>
              <div className="text-slate-600">{t.technology.ourFacilities.engineers}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-slate-600">{t.technology.ourFacilities.productionLines}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
