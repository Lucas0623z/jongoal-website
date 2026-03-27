import React from 'react';
import { Link } from "react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTranslation } from "../translations";

export default function SolutionsPage() {
  const t = useTranslation();

  const solutions = [
    {
      title: t.solutions.solutionsList.chemical.title,
      description: t.solutions.solutionsList.chemical.description,
      image: "https://images.unsplash.com/photo-1768128834406-f5b1b962af9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHByb2Nlc3NpbmclMjBwbGFudCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc0NDk3NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: t.solutions.solutionsList.chemical.features,
      products: [t.products.productData.bagFilter.name, t.products.productData.cartridgeFilter.name, t.products.productData.centrifugalPump.name],
    },
    {
      title: t.solutions.solutionsList.water.title,
      description: t.solutions.solutionsList.water.description,
      image: "https://images.unsplash.com/photo-1759668987649-a2057d0a9f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlbGluZSUyMGluZHVzdHJpYWwlMjBzeXN0ZW18ZW58MXx8fHwxNzc0NDk3NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: t.solutions.solutionsList.water.features,
      products: [t.products.productData.bagFilter.name, t.products.productData.basketStrainer.name, t.products.productData.diaphragmPump.name],
    },
    {
      title: t.solutions.solutionsList.food.title,
      description: t.solutions.solutionsList.food.description,
      image: "https://images.unsplash.com/photo-1768737180431-9b986c7dd1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcHJvY2Vzc2luZyUyMGVxdWlwbWVudCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc0NDk3NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: t.solutions.solutionsList.food.features,
      products: [t.products.productData.cartridgeFilter.name, t.products.productData.centrifugalPump.name, t.products.productData.yStrainer.name],
    },
    {
      title: t.solutions.solutionsList.mining.title,
      description: t.solutions.solutionsList.mining.description,
      image: "https://images.unsplash.com/photo-1758750518277-1a8a182033e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBlcXVpcG1lbnQlMjBpbmR1c3RyaWFsJTIwaGVhdnl8ZW58MXx8fHwxNzc0NDk3NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: t.solutions.solutionsList.mining.features,
      products: [t.products.productData.magneticSeparator.name, t.products.productData.diaphragmPump.name, t.products.productData.basketStrainer.name],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="relative h-[400px] flex items-center bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-5xl font-bold text-white mb-4">{t.solutions.title}</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            {t.solutions.subtitle}
          </p>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{solution.title}</h2>
                  <p className="text-lg text-slate-600 mb-6">{solution.description}</p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{t.products.features}:</h3>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{t.products.relatedProducts}:</h3>
                    <div className="flex flex-wrap gap-2">
                      {solution.products.map((product, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                  >
                    {t.solutions.contactUs}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                <div className={`rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <ImageWithFallback
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t.products.cantFind}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t.products.customOEM}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-md hover:bg-slate-100 transition-colors"
          >
            {t.solutions.contactUs}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
