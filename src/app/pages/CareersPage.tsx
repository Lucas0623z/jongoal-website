import React from 'react';
import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import { useTranslation } from "../translations";

export default function CareersPage() {
  const t = useTranslation();
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const departments = [
    { id: "all", label: "departments.all" },
    { id: "engineering", label: "departments.engineering" },
    { id: "sales", label: "departments.sales" },
    { id: "manufacturing", label: "departments.manufacturing" },
    { id: "quality", label: "departments.quality" },
  ];

  const jobKeys = [
    { key: "seniorMechanical", department: "engineering" },
    { key: "rdEngineer", department: "engineering" },
    { key: "salesManager", department: "sales" },
    { key: "technicalSales", department: "sales" },
    { key: "cncSpecialist", department: "manufacturing" },
    { key: "productionSupervisor", department: "manufacturing" },
    { key: "qcInspector", department: "quality" },
    { key: "qaManager", department: "quality" },
  ];

  const openings = jobKeys.map((job, index) => ({
    id: index + 1,
    department: job.department,
    key: job.key,
  }));

  const filteredOpenings = selectedDepartment === "all"
    ? openings
    : openings.filter(job => job.department === selectedDepartment);

  const getDepartmentLabel = (deptId: string) => {
    const dept = departments.find(d => d.id === deptId);
    if (!dept) return deptId;
    const keys = dept.label.split(".");
    return t.careers[keys[0] as keyof typeof t.careers][keys[1] as any];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1606337321936-02d1b1a4d5ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjB3b3JraW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzQ0OTc2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Careers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">{t.careers.title}</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            {t.careers.subtitle}
          </p>
        </div>
      </section>

      {/* Why join us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.careers.whyWorkWithUs.title}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.careers.whyWorkWithUs.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {t.careers.benefitsList.map((benefit: string, index: number) => (
              <div key={index} className="flex items-start gap-3 bg-slate-50 p-6 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <span className="text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.careers.openPositions.title}</h2>
            <p className="text-lg text-slate-600">
              {t.careers.openPositions.subtitle}
            </p>
          </div>

          {/* Department filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {departments.map((dept) => {
              const keys = dept.label.split(".");
              const label = t.careers[keys[0] as keyof typeof t.careers][keys[1] as any];
              return (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedDepartment === dept.id
                      ? "bg-blue-900 text-white"
                      : "bg-white text-slate-700 border border-slate-300 hover:border-blue-600"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Job listings */}
          <div className="space-y-4">
            {filteredOpenings.map((job) => {
              const jobData = t.careers.jobListings[job.key as keyof typeof t.careers.jobListings];
              return (
                <div key={job.id} className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-600 hover:shadow-md transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{jobData.title}</h3>
                      <p className="text-slate-600 mb-4">{jobData.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {getDepartmentLabel(job.department)}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {jobData.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {jobData.type}
                        </span>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors whitespace-nowrap">
                      {t.careers.apply}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredOpenings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">{t.careers.openPositions.noPositions}</p>
              <button
                onClick={() => setSelectedDepartment("all")}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                {t.careers.openPositions.viewAllPositions}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Application process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.careers.applicationProcess.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              t.careers.applicationProcess.step1,
              t.careers.applicationProcess.step2,
              t.careers.applicationProcess.step3,
              t.careers.applicationProcess.step4,
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t.careers.cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t.careers.cta.subtitle}
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-md hover:bg-slate-100 transition-colors">
            {t.careers.cta.button}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
