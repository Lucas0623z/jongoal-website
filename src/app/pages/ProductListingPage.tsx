import React from 'react';
import { Link } from "react-router";
import { Filter, Search } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import { useTranslation } from "../translations";

export default function ProductListingPage() {
  const t = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: t.products.allProducts },
    { id: "filtration", name: t.home.productCategories.filtration.title },
    { id: "pumps", name: t.home.productCategories.pumps.title },
    { id: "separators", name: t.home.productCategories.separators.title },
    { id: "filters", name: t.home.productCategories.filters.title },
    { id: "oem", name: t.products.oemEquipment },
  ];

  const products = [
    {
      id: "bag-filter-bf-series",
      category: "filtration",
      name: t.products.productData.bagFilter.name,
      description: t.products.productData.bagFilter.description,
      image: "https://images.unsplash.com/photo-1748002757537-00ab5114135b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWx0cmF0aW9uJTIwc3lzdGVtJTIwZXF1aXBtZW50JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzQ0OTc2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      specs: t.products.productData.bagFilter.specs,
    },
    {
      id: "cartridge-filter-cf-series",
      category: "filtration",
      name: t.products.productData.cartridgeFilter.name,
      description: t.products.productData.cartridgeFilter.description,
      image: "https://images.unsplash.com/photo-1759668987649-a2057d0a9f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlbGluZSUyMGluZHVzdHJpYWwlMjBzeXN0ZW18ZW58MXx8fHwxNzc0NDk3NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      specs: t.products.productData.cartridgeFilter.specs,
    },
    {
      id: "centrifugal-pump-cp-series",
      category: "pumps",
      name: t.products.productData.centrifugalPump.name,
      description: t.products.productData.centrifugalPump.description,
      image: "https://images.unsplash.com/photo-1768779611359-c4bb38ba3c1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2F0ZXIlMjBwdW1wJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NDQ5NzY0MXww&ixlib=rb-4.1.0&q=80&w=1080",
      specs: t.products.productData.centrifugalPump.specs,
    },
    {
      id: "diaphragm-pump-dp-series",
      category: "pumps",
      name: t.products.productData.diaphragmPump.name,
      description: t.products.productData.diaphragmPump.description,
      image: "https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZmFjdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzQ0OTc2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      specs: t.products.productData.diaphragmPump.specs,
    },
    {
      id: "magnetic-separator-ms-series",
      category: "separators",
      name: t.products.productData.magneticSeparator.name,
      description: t.products.productData.magneticSeparator.description,
      image: "https://images.unsplash.com/photo-1683119926853-6427b2966f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHNlcGFyYXRvciUyMGluZHVzdHJpYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzc0NDk3NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      specs: t.products.productData.magneticSeparator.specs,
    },
    {
      id: "drum-separator-ds-series",
      category: "separators",
      name: t.products.productData.drumSeparator.name,
      description: t.products.productData.drumSeparator.description,
      image: "https://images.unsplash.com/photo-1738162837335-3745e5d16c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBtYWNoaW5pbmclMjBDTkMlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzc0NDk3NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      specs: t.products.productData.drumSeparator.specs,
    },
    {
      id: "y-strainer-ys-series",
      category: "filters",
      name: t.products.productData.yStrainer.name,
      description: t.products.productData.yStrainer.description,
      image: "https://images.unsplash.com/photo-1759668987649-a2057d0a9f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlbGluZSUyMGluZHVzdHJpYWwlMjBzeXN0ZW18ZW58MXx8fHwxNzc0NDk3NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      specs: t.products.productData.yStrainer.specs,
    },
    {
      id: "basket-strainer-bs-series",
      category: "filters",
      name: t.products.productData.basketStrainer.name,
      description: t.products.productData.basketStrainer.description,
      image: "https://images.unsplash.com/photo-1748002757537-00ab5114135b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWx0cmF0aW9uJTIwc3lzdGVtJTIwZXF1aXBtZW50JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzQ0OTc2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      specs: t.products.productData.basketStrainer.specs,
    },
    {
      id: "custom-oem-filtration",
      category: "oem",
      name: t.products.productData.customFiltration.name,
      description: t.products.productData.customFiltration.description,
      image: "https://images.unsplash.com/photo-1764835822981-1a3ccf47c369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjaWxpdHklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzQ0OTc2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      specs: t.products.productData.customFiltration.specs,
    },
    {
      id: "custom-oem-pumps",
      category: "oem",
      name: t.products.productData.customPumps.name,
      description: t.products.productData.customPumps.description,
      image: "https://images.unsplash.com/photo-1768779611359-c4bb38ba3c1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2F0ZXIlMjBwdW1wJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NDQ5NzY0MXww&ixlib=rb-4.1.0&q=80&w=1080",
      specs: t.products.productData.customPumps.specs,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="relative h-[300px] flex items-center bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-5xl font-bold text-white mb-4">{t.products.title}</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            {t.products.subtitle}
          </p>
        </div>
      </section>

      {/* Filters and search */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder={t.products.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 w-full lg:w-auto">
              <Filter className="h-5 w-5 text-slate-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex-1 lg:flex-none px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-slate-600">
            {t.products.showingProducts} {filteredProducts.length} {filteredProducts.length === 1 ? t.products.product : t.products.productsPlural}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-blue-600 uppercase mb-2">
                    {categories.find((c) => c.id === product.category)?.name}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">{product.description}</p>
                  <div className="text-xs text-slate-500 mb-4 font-mono bg-slate-50 p-2 rounded">
                    {product.specs}
                  </div>
                  <div className="text-blue-600 font-medium">
                    {t.products.viewDetails} →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-600 text-lg mb-4">{t.products.noProductsFound}</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {t.products.clearFilters}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            {t.products.cantFind}
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            {t.products.customOEM}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
          >
            {t.products.contactCustom}
          </Link>
        </div>
      </section>
    </div>
  );
}
