export type InputType = "number" | "select" | "text" | "date";

export interface CalculatorInput {
  id: string;
  label: string;
  type?: InputType;
  unit?: string;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  options?: { value: string; label: string }[];
  placeholder?: string;
  help?: string;
}

export interface CalculatorResult {
  primary: { label: string; value: string | number; unit?: string };
  secondary?: { label: string; value: string | number; unit?: string }[];
  interpretation?: string;
}

export interface CalculatorDefinition {
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  category: string;
  keywords: string[];
  featured?: boolean;
  inputs: CalculatorInput[];
  calculate: (values: Record<string, string>) => CalculatorResult;
  formula: string;
  variables?: string[];
  references: { title: string; url?: string }[];
  disclaimer?: string;
}
