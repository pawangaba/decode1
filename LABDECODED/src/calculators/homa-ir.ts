import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'homa-ir',
  title: 'HOMA-IR',
  description: 'Estimate insulin resistance from fasting glucose and insulin.',
  category: 'Endocrinology',
  keywords: ['homa-ir', 'insulin resistance'],
  featured: true,
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
    const r=num(values.glucose)*num(values.insulin)/405; return {primary:{label:"HOMA-IR",value:fixed(r,2)}};
  },
  formula: 'HOMA-IR = fasting glucose (mg/dL) × fasting insulin (µIU/mL) / 405',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
