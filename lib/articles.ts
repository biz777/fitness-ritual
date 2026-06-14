export type Category = "nutrition" | "exercise" | "recipes";

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: Category;
  categoryLabel: string;
  publishedAt: string;
  readTime: number;
}

export const categoryColors: Record<Category, string> = {
  nutrition: "#5B4FC8",
  exercise: "#22C55E",
  recipes: "#F59E0B",
};

export const articles: Article[] = [
  {
    slug: "best-protein-sources-after-50",
    title: "Best protein sources for muscle retention after 50",
    description: "Why protein needs increase with age and which foods deliver the most without excess calories.",
    category: "nutrition",
    categoryLabel: "Nutrition & Diet",
    publishedAt: "2026-06-01",
    readTime: 7,
  },
  {
    slug: "20-minute-morning-routine",
    title: "The 20-minute morning routine that actually works",
    description: "A low-impact daily routine designed for joints, balance, and energy — no gym required.",
    category: "exercise",
    categoryLabel: "Exercise & Fitness",
    publishedAt: "2026-06-05",
    readTime: 6,
  },
  {
    slug: "high-fiber-dinner-recipes",
    title: "5 high-fiber dinner recipes under 500 calories",
    description: "Quick, satisfying meals that support digestion and help manage weight without feeling deprived.",
    category: "recipes",
    categoryLabel: "Healthy Recipes",
    publishedAt: "2026-06-08",
    readTime: 5,
  },
  {
    slug: "hydration-tips-over-50",
    title: "Why staying hydrated gets harder after 50 (and what to do)",
    description: "The science behind age-related dehydration and simple daily habits to stay properly hydrated.",
    category: "nutrition",
    categoryLabel: "Nutrition & Diet",
    publishedAt: "2026-06-10",
    readTime: 6,
  },
  {
    slug: "strength-training-beginners-50",
    title: "Strength training for beginners over 50: where to start",
    description: "A practical, no-intimidation guide to building muscle safely after 50 — at home or at the gym.",
    category: "exercise",
    categoryLabel: "Exercise & Fitness",
    publishedAt: "2026-06-12",
    readTime: 8,
  },
  {
    slug: "anti-inflammatory-breakfast",
    title: "7 anti-inflammatory breakfast ideas for people over 50",
    description: "Start your day with foods that reduce inflammation, support joints, and keep energy stable all morning.",
    category: "recipes",
    categoryLabel: "Healthy Recipes",
    publishedAt: "2026-06-14",
    readTime: 5,
  },
];

export function getArticlesByCategory(category: Category) {
  return articles.filter((a) => a.category === category);
}

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
