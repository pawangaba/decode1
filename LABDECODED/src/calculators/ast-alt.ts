import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'ast-alt',
  title: 'AST / ALT Ratio (De Ritis)',
  description: 'Calculate the AST-to-ALT ratio.',
  category: 'Liver',
  keywords: ['ast', 'alt', 'de ritis'],
  featured: false,
  inputs: [
  {
    "id": "ast",
    "label": "AST",
    "type": "number",
    "unit": "U/L",
    "required": true,
    "min": 0,
    "max": 10000,
    "step": 0.01
  },
  {
    "id": "alt",
    "label": "ALT",
    "type": "number",
    "unit": "U/L",
    "required": true,
    "min": 0,
    "max": 10000,
    "step": 0.01
  }
],
  calculate(values) {
    const r=num(values.ast)/num(values.alt); return {primary:{label:"AST/ALT ratio",value:fixed(r,2)}};
  },
  formula: 'AST/ALT ratio = AST ÷ ALT',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
