import React from 'react';
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-9xl font-bold text-blue-900 mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg text-slate-600 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/" className="px-8 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800">
            Go Home
          </Link>
          <Link to="/products" className="px-8 py-3 border-2 border-slate-300 rounded-md hover:border-slate-400">
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}
