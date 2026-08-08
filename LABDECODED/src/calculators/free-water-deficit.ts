import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'free-water-deficit',
  title: 'Free Water Deficit',
  description: 'Estimate free-water deficit from serum sodium and body weight.',
  category: 'Electrolytes',
  keywords: ['free water', 'sodium'],
  featured: false,
  inputs: [
  {
    "id": "weight",
    "label": "Weight",
    "type": "number",
    "unit": "kg",
    "required": true,
    "min": 10,
    "max": 300,
    "step": 0.01
  },
  {
    "id": "sodium",
    "label": "Serum sodium",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 120,
    "max": 220,
    "step": 0.01
  },
  {
    "id": "target",
    "label": "Target sodium",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 120,
    "max": 160,
    "step": 0.01
  }
],
  calculate(values) {
    const deficit=(0.6*num(values.weight))*(num(values.sodium)/num(values.target)-1);
 return {primary:{label:"Estimated free-water deficit",value:fixed(Math.max(0,deficit),2),unit:"L"}};
  },
  formula: 'Water deficit = TBW × [(serum Na / target Na) − 1]',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
