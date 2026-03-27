// Script to download all Figma Make files
// Run with: node download-figma-files.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesList = [
  // Translations
  'src/app/translations/en.ts',
  'src/app/translations/zh.ts',
  'src/app/translations/index.ts',

  // Layout
  'src/app/components/layout/Header.tsx',
  'src/app/components/layout/Footer.tsx',

  // Figma components
  'src/app/components/figma/ImageWithFallback.tsx',

  // Pages
  'src/app/pages/HomePage.tsx',
  'src/app/pages/AboutPage.tsx',
  'src/app/pages/ProductListingPage.tsx',
  'src/app/pages/ProductDetailPage.tsx',
  'src/app/pages/SolutionsPage.tsx',
  'src/app/pages/IndustriesPage.tsx',
  'src/app/pages/TechnologyPage.tsx',
  'src/app/pages/NewsPage.tsx',
  'src/app/pages/CareersPage.tsx',
  'src/app/pages/ContactPage.tsx',
  'src/app/pages/NotFoundPage.tsx',

  // Styles
  'src/styles/tailwind.css',
  'src/styles/index.css',
  'src/styles/theme.css',

  // UI Components
  'src/app/components/ui/accordion.tsx',
  'src/app/components/ui/alert-dialog.tsx',
  'src/app/components/ui/alert.tsx',
  'src/app/components/ui/aspect-ratio.tsx',
  'src/app/components/ui/avatar.tsx',
  'src/app/components/ui/badge.tsx',
  'src/app/components/ui/breadcrumb.tsx',
  'src/app/components/ui/button.tsx',
  'src/app/components/ui/calendar.tsx',
  'src/app/components/ui/card.tsx',
  'src/app/components/ui/carousel.tsx',
  'src/app/components/ui/chart.tsx',
  'src/app/components/ui/checkbox.tsx',
  'src/app/components/ui/collapsible.tsx',
  'src/app/components/ui/command.tsx',
  'src/app/components/ui/context-menu.tsx',
  'src/app/components/ui/dialog.tsx',
  'src/app/components/ui/drawer.tsx',
  'src/app/components/ui/dropdown-menu.tsx',
  'src/app/components/ui/form.tsx',
  'src/app/components/ui/hover-card.tsx',
  'src/app/components/ui/input-otp.tsx',
  'src/app/components/ui/input.tsx',
  'src/app/components/ui/label.tsx',
  'src/app/components/ui/menubar.tsx',
  'src/app/components/ui/navigation-menu.tsx',
  'src/app/components/ui/pagination.tsx',
  'src/app/components/ui/popover.tsx',
  'src/app/components/ui/progress.tsx',
  'src/app/components/ui/radio-group.tsx',
  'src/app/components/ui/resizable.tsx',
  'src/app/components/ui/scroll-area.tsx',
  'src/app/components/ui/select.tsx',
  'src/app/components/ui/separator.tsx',
  'src/app/components/ui/sheet.tsx',
  'src/app/components/ui/sidebar.tsx',
  'src/app/components/ui/skeleton.tsx',
  'src/app/components/ui/slider.tsx',
  'src/app/components/ui/sonner.tsx',
  'src/app/components/ui/switch.tsx',
  'src/app/components/ui/table.tsx',
  'src/app/components/ui/tabs.tsx',
  'src/app/components/ui/textarea.tsx',
  'src/app/components/ui/toggle-group.tsx',
  'src/app/components/ui/toggle.tsx',
  'src/app/components/ui/tooltip.tsx',
  'src/app/components/ui/use-mobile.ts',
  'src/app/components/ui/utils.ts',
];

console.log(`Total files to download: ${filesList.length}`);
console.log('\nPlease use Claude Code MCP Figma tools to download these files.');
console.log('\nFile list saved for reference.');

// Save the list for reference
fs.writeFileSync('files-to-download.txt', filesList.join('\n'));
console.log('\nFile list saved to files-to-download.txt');
