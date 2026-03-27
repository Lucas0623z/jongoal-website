import React from 'react';
import { Link } from "react-router";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import { useTranslation } from "../translations";

export default function NewsPage() {
  const t = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "categories.all" },
    { id: "product", label: "categories.product" },
    { id: "company", label: "categories.company" },
    { id: "industry", label: "categories.industry" },
    { id: "events", label: "categories.events" },
  ];

  const newsArticles = [
    {
      id: 1,
      category: "product",
      key: "bagFilterLaunch",
      image: "https://images.unsplash.com/photo-1748002757537-00ab5114135b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWx0cmF0aW9uJTIwc3lzdGVtJTIwZXF1aXBtZW50JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzQ0OTc2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "2026-03-15",
    },
    {
      id: 2,
      category: "company",
      key: "expansionNews",
      image: "https://images.unsplash.com/photo-1764835822981-1a3ccf47c369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjaWxpdHklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzQ0OTc2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "2026-03-10",
    },
    {
      id: 3,
      category: "events",
      key: "achemaEvent",
      image: "https://images.unsplash.com/photo-1758520145178-29eafeda9908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHMlMjBvZmZpY2UlMjBtZWV0aW5nfGVufDF8fHx8MTc3NDQ5NzY0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "2026-03-05",
    },
    {
      id: 4,
      category: "industry",
      key: "sustainabilityTrends",
      image: "https://images.unsplash.com/photo-1737703121444-c568a9d3bc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBpbmR1c3RyaWFsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ0OTc2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "2026-02-28",
    },
    {
      id: 5,
      category: "company",
      key: "qualityAward",
      image: "https://images.unsplash.com/photo-1606337321936-02d1b1a4d5ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjB3b3JraW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzQ0OTc2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "2026-02-20",
    },
    {
      id: 6,
      category: "product",
      key: "smartMonitoring",
      image: "https://images.unsplash.com/photo-1768779611359-c4bb38ba3c1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2F0ZXIlMjBwdW1wJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NDQ5NzY0MXww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "2026-02-15",
    },
  ];

  const filteredNews = selectedCategory === "all"
    ? newsArticles
    : newsArticles.filter(item => item.category === selectedCategory);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const locale = t.header.home === "首页" ? "zh-CN" : "en-US";
    return date.toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
  };

  const getCategoryLabel = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return categoryId;
    const keys = category.label.split(".");
    return t.news[keys[0] as keyof typeof t.news][keys[1] as any];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="relative h-[300px] flex items-center bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-5xl font-bold text-white mb-4">{t.news.title}</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            {t.news.subtitle}
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const keys = category.label.split(".");
              const label = t.news[keys[0] as keyof typeof t.news][keys[1] as any];
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedCategory === category.id
                      ? "bg-blue-900 text-white"
                      : "bg-white text-slate-700 border border-slate-300 hover:border-blue-600"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured article */}
      {filteredNews.length > 0 && (() => {
        const article = filteredNews[0];
        const articleData = t.news.articles[article.key as keyof typeof t.news.articles];
        return (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-slate-50 rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="h-[400px]">
                    <ImageWithFallback
                      src={article.image}
                      alt={articleData.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold">
                        {getCategoryLabel(article.category)}
                      </span>
                      <span className="text-slate-500 text-sm flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(article.date)}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                      {articleData.title}
                    </h2>
                    <p className="text-lg text-slate-600 mb-6">
                      {articleData.excerpt}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium">
                      {t.news.readMore}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* News grid */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.slice(1).map((article) => {
              const articleData = t.news.articles[article.key as keyof typeof t.news.articles];
              return (
                <article key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={articleData.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-900 rounded text-xs font-semibold">
                        {getCategoryLabel(article.category)}
                      </span>
                      <span className="text-slate-500 text-xs flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(article.date)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2">
                      {articleData.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                      {articleData.excerpt}
                    </p>
                    <button className="text-blue-600 font-medium text-sm hover:text-blue-700 flex items-center">
                      {t.news.readMore}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter subscription */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t.news.newsletter.title}
          </h2>
          <p className="text-blue-100 mb-8">
            {t.news.newsletter.subtitle}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t.news.newsletter.placeholder}
              className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-blue-900 rounded-md hover:bg-slate-100 transition-colors font-medium"
            >
              {t.news.newsletter.button}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
