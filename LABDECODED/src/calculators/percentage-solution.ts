import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'percentage-solution',
  title: 'Percentage Solution Calculator',
  description: 'Calculate grams needed for a % w/v solution.',
  category: 'Laboratory',
  keywords: ['percentage solution', 'w/v'],
  featured: false,
  inputs: [
  {
    "id": "percent",
    "label": "Target concentration",
    "type": "number",
    "unit": "% w/v",
    "required": true,
    "min": 0.0001,
    "max": 100,
    "step": 0.01
  },
  {
    "id": "volume",
    "label": "Final volume",
    "type": "number",
    "unit": "mL",
    "required": true,
    "min": 0.1,
    "max": 100000,
    "step": 0.01
  }
],
  calculate(values) {
    const grams=num(values.percent)*num(values.volume)/100; return {primary:{label:"Solute required",value:fixed(grams,3),unit:"g"}};
  },
  formula: 'grams = % × volume(mL) / 100',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
