
import { ArticleData, StatItem } from './types';

export const STATS_DATA: StatItem[] = [
  { label: '账号数', value: '184', colorClass: 'text-gray-700', icon: 'UserCircle' },
  { label: '稿件数', value: '1.2万', colorClass: 'text-gray-700', icon: 'FileText' },
  { label: '原创数', value: '4674', colorClass: 'text-green-500', icon: 'Edit3' },
  { label: '粉丝总量', value: '3713.8万', colorClass: 'text-gray-700', icon: 'Users' },
  { label: '新增粉丝量', value: '6.9万', colorClass: 'text-orange-500', icon: 'UserPlus' },
  { label: '阅评赞数', value: '961.9万', colorClass: 'text-pink-500', icon: 'Heart' },
  { label: '转发数', value: '12.5万', colorClass: 'text-gray-700', icon: 'Share2' },
  { label: '热榜总数', value: '0', colorClass: 'text-blue-500', icon: 'TrendingUp' },
];

export const MOCK_ARTICLES: ArticleData[] = [
  {
    id: 1,
    thumbnail: 'https://picsum.photos/seed/food1/100/60',
    title: '冬天，这“去火菜”使劲吃！一助眠润肠，二排毒，三健胃，别错过',
    author: 'Lily美食谈',
    platform: '头条号',
    tags: ['2025年海南网络文明大会'],
    reads: '21.7万',
    likes: 1862,
    comments: 236,
    shares: 14,
    publishTime: '2025-12-04 22:33',
    score: 600
  },
  {
    id: 2,
    thumbnail: 'https://picsum.photos/seed/uni1/100/60',
    title: '海口1所学院拟更名为大学！',
    author: '海口本地宝',
    platform: '微信公众号',
    tags: [],
    reads: '10万+',
    likes: 214,
    comments: '-',
    shares: 0,
    publishTime: '2025-12-16 21:00',
    score: 500
  },
  {
    id: 3,
    thumbnail: 'https://picsum.photos/seed/city1/100/60',
    title: '浙金中心暴雷，可能比想象的严重，我问了好几个杭州的朋友，有本地土著，也有前几年从北京去...',
    author: '升值计',
    platform: '头条号',
    tags: ['2025年海南网络文明大会'],
    reads: '9.1万',
    likes: 328,
    comments: 122,
    shares: 7,
    publishTime: '2025-12-10 12:05',
    score: 300
  },
  {
    id: 4,
    thumbnail: 'https://picsum.photos/seed/shop1/100/60',
    title: '我建议月薪3000的人都去开一个山姆超市会员，能够极大得增强你的生活品质和饮食健康额度。建议...',
    author: '升值计',
    platform: '头条号',
    tags: [],
    reads: '6.9万',
    likes: 407,
    comments: 242,
    shares: 11,
    publishTime: '2025-11-30 16:48',
    score: 300
  },
  {
    id: 5,
    thumbnail: 'https://picsum.photos/seed/event1/100/60',
    title: '深耕海南，步履不停——Today今天百店庆典暨品牌升级仪式圆满举行',
    author: '锦鲤正能量',
    platform: '新浪微博',
    tags: [],
    reads: '6.7万',
    likes: 0,
    comments: 0,
    shares: 0,
    publishTime: '2025-12-05 18:56',
    score: 300
  }
];
