
export interface ArticleData {
  id: number;
  thumbnail: string;
  title: string;
  author: string;
  platform: string;
  tags: string[];
  reads: string;
  likes: number | string;
  comments: number | string;
  shares: number | string;
  publishTime: string;
  score: number;
}

export interface StatItem {
  label: string;
  value: string;
  colorClass: string;
  icon: string;
}
