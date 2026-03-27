import React from 'react';
import { useParams, Link } from "react-router";
import { CheckCircle, Download, FileText, Send, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import { useTranslation } from "../translations";

export default function ProductDetailPage() {
  const t = useTranslation();
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  // Mock product data - in real app would fetch based on id
  const product = {
    id: id || "bag-filter-bf-series",
    name: "Bag Filter BF Series",
    category: "Filtration Equipment",
    description: "High-efficiency bag filtration system designed for industrial liquid applications. Features durable construction, easy maintenance, and excellent filtration performance.",
    longDescription: "The BF Series Bag Filter is engineered for demanding industrial applications requiring high-efficiency liquid filtration. Constructed from premium stainless steel, it offers exceptional durability and corrosion resistance. The system features a quick-opening closure for easy bag replacement, minimizing downtime. With multiple bag configurations available, the BF Series can be customized to meet specific flow rates and filtration requirements.",
    images: [
      "https://images.unsplash.com/photo-1748002757537-00ab5114135b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWx0cmF0aW9uJTIwc3lzdGVtJTIwZXF1aXBtZW50JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzQ0OTc2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1759668987649-a2057d0a9f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlbGluZSUyMGluZHVzdHJpYWwlMjBzeXN0ZW18ZW58MXx8fHwxNzc0NDk3NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZmFjdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzQ0OTc2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    specifications: [
      { label: "Flow Rate", value: "5-500 m³/h" },
      { label: "Operating Pressure", value: "0.6-1.6 MPa" },
      { label: "Operating Temperature", value: "-20°C to 200°C" },
      { label: "Filtration Rating", value: "1-500 microns" },
      { label: "Housing Material", value: "SS304/SS316L/Carbon Steel" },
      { label: "Connection Type", value: "Flange/Thread" },
      { label: "Filter Bag Size", value: "#1, #2, #3, #4" },
      { label: "Sealing Method", value: "O-ring/Spring-loaded" },
    ],
    advantages: [
      "High filtration efficiency with minimal pressure drop",
      "Durable stainless steel construction for long service life",
      "Quick-opening cover design for easy bag replacement",
      "Multiple bag configurations for various applications",
      "Wide range of filtration ratings available",
      "Compact design saves installation space",
      "Compatible with various liquid types",
      "ISO 9001 certified manufacturing quality",
    ],
    applications: [
      {
        industry: "Chemical Processing",
        uses: "Process liquid filtration, chemical catalyst recovery, paint and coating filtration",
      },
      {
        industry: "Food & Beverage",
        uses: "Syrup filtration, beverage clarification, edible oil filtration",
      },
      {
        industry: "Pharmaceutical",
        uses: "API filtration, intermediate product purification, water treatment",
      },
      {
        industry: "Petrochemical",
        uses: "Fuel oil filtration, lubricant purification, wastewater treatment",
      },
      {
        industry: "Water Treatment",
        uses: "Pre-filtration, suspended solids removal, municipal water treatment",
      },
    ],
    documents: [
      { name: "Product Datasheet (EN)", size: "2.4 MB", type: "PDF" },
      { name: "Installation Manual (EN)", size: "5.1 MB", type: "PDF" },
      { name: "CAD Drawing (DWG)", size: "1.8 MB", type: "DWG" },
      { name: "产品规格书 (CN)", size: "2.6 MB", type: "PDF" },
    ],
  };

  const relatedProducts = [
    {
      id: "cartridge-filter-cf-series",
      name: "Cartridge Filter CF Series",
      image: "https://images.unsplash.com/photo-1759668987649-a2057d0a9f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlbGluZSUyMGluZHVzdHJpYWwlMjBzeXN0ZW18ZW58MXx8fHwxNzc0NDk3NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "y-strainer-ys-series",
      name: "Y-Strainer YS Series",
      image: "https://images.unsplash.com/photo-1748002757537-00ab5114135b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWx0cmF0aW9uJTIwc3lzdGVtJTIwZXF1aXBtZW50JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzQ0OTc2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "basket-strainer-bs-series",
      name: "Basket Strainer BS Series",
      image: "https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZmFjdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzQ0OTc2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you shortly.");
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link to="/" className="hover:text-blue-600">{t.header.home}</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/products" className="hover:text-blue-600">{t.header.products}</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product header */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product gallery */}
            <div>
              <div className="mb-4 rounded-lg overflow-hidden border border-slate-200">
                <ImageWithFallback
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? "border-blue-600" : "border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product overview */}
            <div>
              <div className="text-sm font-semibold text-blue-600 uppercase mb-2">
                {product.category}
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
              <p className="text-lg text-slate-600 mb-6">{product.description}</p>
              <p className="text-slate-700 mb-8">{product.longDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#inquiry"
                  className="inline-flex items-center justify-center px-8 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                >
                  Request Quote
                  <Send className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#documents"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-md hover:border-slate-400 transition-colors"
                >
                  Download Specs
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical specifications */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Technical Specifications</h2>
          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
            <table className="w-full">
              <tbody className="divide-y divide-slate-200">
                {product.specifications.map((spec, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-semibold text-slate-900 w-1/3 bg-slate-50">
                      {spec.label}
                    </td>
                    <td className="px-6 py-4 text-slate-700">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Product advantages */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Product Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.applications.map((app, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{app.industry}</h3>
                <p className="text-slate-600">{app.uses}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable documents */}
      <section id="documents" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Downloadable Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.documents.map((doc, index) => (
              <button
                key={index}
                className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium text-slate-900 text-sm">{doc.name}</div>
                  <div className="text-xs text-slate-500">{doc.type} • {doc.size}</div>
                </div>
                <Download className="h-5 w-5 text-slate-400 group-hover:text-blue-600" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/products/${relatedProduct.id}`}
                className="group bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {relatedProduct.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="inquiry" className="py-12 bg-blue-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Request a Quote</h2>
            <p className="text-blue-100">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Please provide details about your requirements..."
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center px-8 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
            >
              Submit Inquiry
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
