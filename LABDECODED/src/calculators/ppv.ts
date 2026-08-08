import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'ppv',
  title: 'Positive Predictive Value',
  description: 'Calculate PPV.',
  category: 'Diagnostic Statistics',
  keywords: ['ppv'],
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
    "id": "fp",
    "label": "false positives",
    "type": "number",
    "unit": "count",
    "required": true,
    "min": 0,
    "max": 1000000000.0,
    "step": 0.01
  }
],
  calculate(values) {
    const r=num(values.tp)/(num(values.tp)+num(values.fp))*100; return {primary:{label:'PPV',value:fixed(r,3),unit:'%'}};
  },
  formula: 'TP / (TP + FP) × 100',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
