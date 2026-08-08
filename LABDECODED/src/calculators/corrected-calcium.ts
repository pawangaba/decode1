import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'corrected-calcium',
  title: 'Corrected Calcium',
  description: 'Correct total calcium for albumin.',
  category: 'Electrolytes',
  keywords: ['calcium', 'albumin'],
  featured: false,
  inputs: [
  {
    "id": "calcium",
    "label": "Total calcium",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 2,
    "max": 20,
    "step": 0.01
  },
  {
    "id": "albumin",
    "label": "Albumin",
    "type": "number",
    "unit": "g/dL",
    "required": true,
    "min": 1,
    "max": 7,
    "step": 0.01
  }
],
  calculate(values) {
    const c=num(values.calcium)+0.8*(4-num(values.albumin));
 return {primary:{label:"Corrected calcium",value:fixed(c,2),unit:"mg/dL"}};
  },
  formula: 'Corrected Ca = measured Ca + 0.8 × (4.0 − albumin)',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
