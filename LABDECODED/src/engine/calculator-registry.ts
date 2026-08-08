import type { CalculatorDefinition } from "../types/calculator";

const modules = import.meta.glob("../calculators/*.ts", { eager: true, import: "default" }) as Record<string, CalculatorDefinition>;

export const calculators: CalculatorDefinition[] = Object.values(modules).sort((a,b) => a.title.localeCompare(b.title));

export function getCalculatorBySlug(slug: string) {
  return calculators.find(c => c.slug === slug);
}
export function getCalculatorsByCategory(category: string) {
  return calculators.filter(c => c.category === category);
}
export function searchCalculators(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return calculators;
  return calculators.filter(c => [c.title,c.description,c.category,c.slug,...c.keywords].join(" ").toLowerCase().includes(q));
}
export const categories = [...new Set(calculators.map(c => c.category))].sort();
