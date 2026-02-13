
export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  category: 'cidadao' | 'empresa' | 'servidor';
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}
