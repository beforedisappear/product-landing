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
    0: <Megaphone />, // 5 Social Media Ad Designs
    1: <FileText />, // 3 Product Descriptions
    2: <PencilRuler />, // Basic Logo Design
    3: <MonitorSmartphone />, // Simple Landing Page
    4: <Search />, // Basic SEO Setup
    5: <RefreshCcw />, // 2 Rounds of Revisions
    6: <MessageCircle />, // Support: Email Only
    7: <CalendarClock />, // Delivery: 7 Business Days
  },
  1: {
    0: <Megaphone />, // 10 Social Media Ad Designs
    1: <Video />, // 1 Video Ad (30 sec)
    2: <FileText />, // Complete Product Description Set (up to 10)
    3: <Palette />, // Full Brand Identity Package
    4: <ShoppingCart />, // Complete E-commerce Website
    5: <Send />, // Email Marketing Sequence (5 emails)
    6: <BarChart3 />, // Basic Market Research Report
    7: <RefreshCcw />, // 3 Rounds of Revisions
    8: <MessageCircle />, // Support: Email + Messenger
    9: <CalendarClock />, // Delivery: 14 Business Days
  },
  2: {
    0: <Megaphone />, // 20 Social Media Ad Designs
    1: <Video />, // 2 Video Ads (30 sec each)
    2: <FileText />, // Full Product Description Library (up to 25)
    3: <PackageSearch />, // Complete Brand + Packaging Design
    4: <ShoppingBasket />, // Advanced E-commerce Website with CMS
    5: <SendHorizonal />, // Full Email & SMS Marketing Automation
    6: <BarChart4 />, // In-depth Market Research & Competitor Analysis
    7: <Infinity />, // Unlimited Revisions
    8: <MessageCircle />, // Support: Email, Messenger & Zoom
    9: <CalendarCheck2 />, // Delivery: 21 Business Days
    10: <CalendarClock />, //Delivery: Priority (Custom Timeline)
  },
};
