import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'quicki',
  title: 'QUICKI',
  description: 'Calculate the Quantitative Insulin Sensitivity Check Index.',
  category: 'Endocrinology',
  keywords: ['quicki'],
  featured: false,
  inputs: [
  {
    "id": "glucose",
    "label": "Fasting glucose",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 20,
    "max": 500,
    "step": 0.01
  },
  {
    "id": "insulin",
    "label": "Fasting insulin",
    "type": "number",
    "unit": "\u00b5IU/mL",
    "required": true,
    "min": 0.1,
    "max": 500,
    "step": 0.01
  }
],
  calculate(values) {
    const r=1/(Math.log10(num(values.glucose))+Math.log10(num(values.insulin))); return {primary:{label:"QUICKI",value:fixed(r,3)}};
  },
  formula: 'QUICKI = 1 / [log₁₀(fasting glucose) + log₁₀(fasting insulin)]',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
