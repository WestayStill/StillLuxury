// Mock data for Still clothing brand

export const mockProducts = [
  {
    id: '1',
    name: 'Essential Tee',
    category: 'Essentials',
    price: 85,
    image: 'https://images.unsplash.com/photo-1601926299866-6a5c9bfa6be0',
    description: 'Soft cotton jersey in perfect proportions',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Ivory', 'Black', 'Slate'],
    isNewDrop: true
  },
  {
    id: '2',
    name: 'Oversized Hoodie',
    category: 'Essentials',
    price: 195,
    image: 'https://images.unsplash.com/photo-1590739169125-a9438401596a',
    description: 'Heavyweight cotton fleece with dropped shoulders',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Beige', 'Black'],
    isNewDrop: false
  },
  {
    id: '3',
    name: 'Wide Leg Trouser',
    category: 'Bottoms',
    price: 145,
    image: 'https://images.unsplash.com/photo-1664923159942-cb050d5d9d85',
    description: 'Relaxed fit with subtle drape',
    sizes: ['26', '27', '28', '29', '30', '31', '32'],
    colors: ['Black', 'Slate'],
    isNewDrop: true
  },
  {
    id: '4',
    name: 'Minimalist Bag',
    category: 'Accessories',
    price: 225,
    image: 'https://images.unsplash.com/photo-1706099347777-002ab5e8190c',
    description: 'Structured leather with clean lines',
    sizes: ['One Size'],
    colors: ['Black', 'Ivory'],
    isNewDrop: false
  }
];

export const mockLookbook = [
  {
    id: '1',
    title: 'Autumn Quietude',
    image: 'https://images.pexels.com/photos/4066292/pexels-photo-4066292.jpeg',
    description: 'Finding peace in transition',
    season: 'AW24'
  },
  {
    id: '2',
    title: 'Urban Calm',
    image: 'https://images.unsplash.com/photo-1706099347777-002ab5e8190c',
    description: 'City life, simplified',
    season: 'AW24'
  },
  {
    id: '3',
    title: 'Essential Forms',
    image: 'https://images.unsplash.com/photo-1664923159942-cb050d5d9d85',
    description: 'Beauty in fundamentals',
    season: 'AW24'
  }
];

export const mockJournal = [
  {
    id: '1',
    title: 'On Slow Fashion',
    date: '2024-01-15',
    excerpt: 'In a world of constant noise, we choose to speak quietly. Our approach to fashion is intentional—each piece designed to last, to accompany you through seasons of change.',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1601926299866-6a5c9bfa6be0'
  },
  {
    id: '2',
    title: 'The Philosophy of Less',
    date: '2024-01-08',
    excerpt: 'Minimalism isn\'t about having nothing—it\'s about having everything you need. We design with this principle, creating pieces that serve multiple purposes and occasions.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1590739169125-a9438401596a'
  },
  {
    id: '3',
    title: 'Sustainable Luxury',
    date: '2024-01-01',
    excerpt: 'True luxury lies in quality and longevity. We believe in creating pieces that improve with time, becoming more beautiful as they become part of your story.',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/4066292/pexels-photo-4066292.jpeg'
  }
];

export const mockAbout = {
  philosophy: 'still. exists in the space between movement and pause, between noise and silence. We create clothing for those who understand that true luxury is found in simplicity, that beauty lies in the essential.',
  values: [
    'Timeless design over trends',
    'Quality over quantity',
    'Mindful consumption',
    'Ethical production'
  ],
  mission: 'To create clothing that serves as a quiet companion to your life—pieces that feel as good as they look, that age beautifully, and that respect both the wearer and the world.'
};

export const mockQuote = '"In stillness, we find our truest selves."';