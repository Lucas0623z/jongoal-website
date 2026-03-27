import React from 'react';
import { Link } from "react-router";
import { ArrowRight, CheckCircle, Factory, Zap, Award, Globe, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTranslation } from "../translations";

export default function HomePage() {
  const t = useTranslation();

  const products = [
    {
      id: "filtration",
      title: t.home.productCategories.filtration.title,
      description: t.home.productCategories.filtration.description,
      image: "https://images.unsplash.com/photo-1748002757537-00ab5114135b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWx0cmF0aW9uJTIwc3lzdGVtJTIwZXF1aXBtZW50JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzQ0OTc2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "pumps",
      title: t.home.productCategories.pumps.title,
      description: t.home.productCategories.pumps.description,
      image: "https://images.unsplash.com/photo-1768779611359-c4bb38ba3c1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2F0ZXIlMjBwdW1wJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NDQ5NzY0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "separators",
      title: t.home.productCategories.separators.title,
      description: t.home.productCategories.separators.description,
      image: "https://images.unsplash.com/photo-1683119926853-6427b2966f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHNlcGFyYXRvciUyMGluZHVzdHJpYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzc0NDk3NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "filters",
      title: t.home.productCategories.filters.title,
      description: t.home.productCategories.filters.description,
      image: "https://images.unsplash.com/photo-1759668987649-a2057d0a9f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlbGluZSUyMGluZHVzdHJpYWwlMjBzeXN0ZW18ZW58MXx8fHwxNzc0NDk3NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const strengths = [
    {
      icon: Factory,
      title: t.home.whyChooseUs.manufacturing.title,
      description: t.home.whyChooseUs.manufacturing.description,
    },
    {
      icon: Zap,
      title: t.home.whyChooseUs.innovation.title,
      description: t.home.whyChooseUs.innovation.description,
    },
    {
      icon: Award,
      title: t.home.whyChooseUs.quality.title,
      description: t.home.whyChooseUs.quality.description,
    },
    {
      icon: Globe,
      title: t.home.whyChooseUs.global.title,
      description: t.home.whyChooseUs.global.description,
    },
  ];

  const industries = [
    {
      name: t.home.industries.chemical,
      image: "https://images.unsplash.com/photo-1768128834406-f5b1b962af9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHByb2Nlc3NpbmclMjBwbGFudCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc0NDk3NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: t.home.industries.automotive,
      image: "https://images.unsplash.com/photo-1689942007858-7b12bf5864bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwbWFudWZhY3R1cmluZyUyMGluZHVzdHJ5fGVufDF8fHx8MTc3NDQ5NzY0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: t.home.industries.mining,
      image: "https://images.unsplash.com/photo-1758750518277-1a8a182033e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBlcXVpcG1lbnQlMjBpbmR1c3RyaWFsJTIwaGVhdnl8ZW58MXx8fHwxNzc0NDk3NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: t.home.industries.food,
      image: "https://images.unsplash.com/photo-1768737180431-9b986c7dd1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcHJvY2Vzc2luZyUyMGVxdWlwbWVudCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc0NDk3NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZmFjdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzQ0OTc2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Industrial machinery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t.home.hero.title}
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              {t.home.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {t.home.hero.exploreProducts}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-md hover:bg-slate-100 transition-colors"
              >
                {t.home.hero.requestQuote}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.home.productCategories.title}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.home.productCategories.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    {t.home.productCategories.learnMore}
                    <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Company strengths */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.home.whyChooseUs.title}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.home.whyChooseUs.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <strength.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{strength.title}</h3>
                <p className="text-slate-600">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t.home.industries.title}</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              {t.home.industries.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Link
                key={index}
                to="/industries"
                className="group relative h-64 rounded-lg overflow-hidden"
              >
                <ImageWithFallback
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {industry.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/industries"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              {t.home.industries.viewAll}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Manufacturing capability */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                {t.home.manufacturing.title}
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                {t.home.manufacturing.description}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{t.home.manufacturing.features.iso}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{t.home.manufacturing.features.rd}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{t.home.manufacturing.features.oem}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{t.home.manufacturing.features.testing}</span>
                </li>
              </ul>
              <Link
                to="/technology"
                className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
              >
                {t.home.manufacturing.learnMore}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764835822981-1a3ccf47c369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjaWxpdHklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzQ0OTc2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t.home.cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t.home.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-md hover:bg-slate-100 transition-colors"
            >
              {t.home.cta.requestQuote}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-md hover:bg-white hover:text-blue-900 transition-colors"
            >
              {t.home.cta.browseProducts}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
