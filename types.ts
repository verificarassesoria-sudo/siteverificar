
import React from 'react';

export interface ServiceContent {
  id: string;
  slug: string;
  title: string;
  h1: string;
  description: string;
  text: string;
  cta: string;
  icon: string;
  seo: {
    title: string;
    description: string;
  };
}

export interface SiteConfig {
  name: string;
  whatsapp: string;
  whatsappUrl: string;
  address: string;
  email: string;
}

export interface BlogPostData {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  content: React.ReactNode;
}
