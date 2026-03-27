import React, { useState } from 'react';
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, Phone, Mail, Search } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTranslation } from "../../translations";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const navigation = [
    { name: t.header.home, href: "/" },
    { name: t.header.about, href: "/about" },
    { name: t.header.products, href: "/products" },
    { name: t.header.solutions, href: "/solutions" },
    { name: t.header.industries, href: "/industries" },
    { name: t.header.technology, href: "/technology" },
    { name: t.header.news, href: "/news" },
    { name: t.header.careers, href: "/careers" },
    { name: t.header.contact, href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+86-123-456-7890" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone className="h-4 w-4" />
                <span>+86-123-456-7890</span>
              </a>
              <a href="mailto:info@industrialfilter.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@industrialfilter.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setLanguage('en')}
                className={`hover:text-blue-400 transition-colors ${language === 'en' ? 'text-blue-400 font-semibold' : ''}`}
              >
                EN
              </button>
              <span className="text-slate-500">|</span>
              <button
                onClick={() => setLanguage('zh')}
                className={`hover:text-blue-400 transition-colors ${language === 'zh' ? 'text-blue-400 font-semibold' : ''}`}
              >
                中文
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <div className="text-xl lg:text-2xl font-bold">
              <span className="text-blue-900">INDUSTRIAL</span>
              <span className="text-slate-600">TECH</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md transition-colors text-sm ${
                  isActive(item.href)
                    ? "text-blue-900 bg-blue-50"
                    : "text-slate-700 hover:text-blue-900 hover:bg-slate-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and mobile menu button */}
          <div className="flex items-center gap-3">
            <button className="hidden xl:flex items-center justify-center w-10 h-10 rounded-md hover:bg-slate-100 transition-colors">
              <Search className="h-5 w-5 text-slate-600" />
            </button>
            <Link
              to="/contact"
              className="hidden xl:inline-flex px-4 lg:px-6 py-2.5 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors text-sm whitespace-nowrap"
            >
              {t.header.getQuote}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-slate-700" />
              ) : (
                <Menu className="h-6 w-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-md transition-colors ${
                  isActive(item.href)
                    ? "text-blue-900 bg-blue-50"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center px-4 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors mt-4"
            >
              {t.header.getQuote}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
