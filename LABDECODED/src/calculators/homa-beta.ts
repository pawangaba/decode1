import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'homa-beta',
  title: 'HOMA-Beta',
  description: 'Estimate beta-cell function using the original HOMA model.',
  category: 'Endocrinology',
  keywords: ['homa beta'],
  featured: false,
  inputs: [
  {
    "id": "glucose",
    "label": "Fasting glucose",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 1,
    "max": 30,
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
    const g=num(values.glucose),i=num(values.insulin); const r=20*i/(g-3.5); return {primary:{label:"HOMA-%B",value:fixed(r,1),unit:"%"}};
  },
  formula: 'HOMA-%B = 20 × fasting insulin / (fasting glucose − 3.5)',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
