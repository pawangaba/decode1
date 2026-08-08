import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'sensitivity',
  title: 'Sensitivity',
  description: 'Calculate Sensitivity.',
  category: 'Diagnostic Statistics',
  keywords: ['sensitivity'],
  featured: false,
  inputs: [
  {
    "id": "tp",
    "label": "true positives",
    "type": "number",
    "unit": "count",
    "required": true,
    "min": 0,
    "max": 1000000000.0,
    "step": 0.01
  },
  {
    "id": "fn",
    "label": "false negatives",
    "type": "number",
    "unit": "count",
    "required": true,
    "min": 0,
    "max": 1000000000.0,
    "step": 0.01
  }
],
  calculate(values) {
    const r=num(values.tp)/(num(values.tp)+num(values.fn))*100; return {primary:{label:'Sensitivity',value:fixed(r,3),unit:'%'}};
  },
  formula: 'TP / (TP + FN) × 100',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
