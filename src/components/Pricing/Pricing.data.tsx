import {
  Megaphone,
  FileText,
  PencilRuler,
  MonitorSmartphone,
  Search,
  RefreshCcw,
  CalendarClock,
  Video,
  Palette,
  ShoppingCart,
  Send,
  MessageCircle,
  BarChart3,
  PackageSearch,
  ShoppingBasket,
  SendHorizonal,
  BarChart4,
  Infinity,
  CalendarCheck2,
} from "lucide-react";
import type { ReactElement } from "react";

type PricingIcons = Record<number, Record<number, ReactElement>>;

export const packageIcons: PricingIcons = {
  0: {
    0: <Megaphone className="flex-shrink" />, // 5 Social Media Ad Designs
    1: <FileText className="flex-shrink-0" />, // 3 Product Descriptions
    2: <PencilRuler className="flex-shrink-0" />, // Basic Logo Design
    3: <MonitorSmartphone className="flex-shrink-0" />, // Simple Landing Page
    4: <Search className="flex-shrink-0" />, // Basic SEO Setup
    5: <RefreshCcw className="flex-shrink-0" />, // 2 Rounds of Revisions
    6: <MessageCircle className="flex-shrink-0" />, // Support: Email Only
    7: <CalendarClock className="flex-shrink-0" />, // Delivery: 7 Business Days
  },
  1: {
    0: <Megaphone className="flex-shrink-0" />, // 10 Social Media Ad Designs
    1: <Video className="flex-shrink-0" />, // 1 Video Ad (30 sec)
    2: <FileText className="flex-shrink-0" />, // Complete Product Description Set (up to 10)
    3: <Palette className="flex-shrink-0" />, // Full Brand Identity Package
    4: <ShoppingCart className="flex-shrink-0" />, // Complete E-commerce Website
    5: <Send className="flex-shrink-0" />, // Email Marketing Sequence (5 emails)
    6: <BarChart3 className="flex-shrink-0" />, // Basic Market Research Report
    7: <RefreshCcw className="flex-shrink-0" />, // 3 Rounds of Revisions
    8: <MessageCircle className="flex-shrink-0" />, // Support: Email + Messenger
    9: <CalendarClock className="flex-shrink-0" />, // Delivery: 14 Business Days
  },
  2: {
    0: <Megaphone className="flex-shrink-0" />, // 20 Social Media Ad Designs
    1: <Video className="flex-shrink-0" />, // 2 Video Ads (30 sec each)
    2: <FileText className="flex-shrink-0" />, // Full Product Description Library (up to 25)
    3: <PackageSearch className="flex-shrink-0" />, // Complete Brand + Packaging Design
    4: <ShoppingBasket className="flex-shrink-0" />, // Advanced E-commerce Website with CMS
    5: <SendHorizonal className="flex-shrink-0" />, // Full Email & SMS Marketing Automation
    6: <BarChart4 className="flex-shrink-0" />, // In-depth Market Research & Competitor Analysis
    7: <Infinity className="flex-shrink-0" />, // Unlimited Revisions
    8: <MessageCircle className="flex-shrink-0" />, // Support: Email, Messenger & Zoom
    9: <CalendarCheck2 className="flex-shrink-0" />, // Delivery: 21 Business Days
    10: <CalendarClock className="flex-shrink-0" />, //Delivery: Priority (Custom Timeline)
  },
};
