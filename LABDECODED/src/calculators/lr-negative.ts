import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'lr-negative',
  title: 'Likelihood Ratio Negative',
  description: 'Calculate LR−.',
  category: 'Diagnostic Statistics',
  keywords: ['lr-negative'],
  featured: false,
  inputs: [
  {
    "id": "sensitivity",
    "label": "Sensitivity",
    "type": "number",
    "unit": "%",
    "required": true,
    "min": 0,
    "max": 1000000000.0,
    "step": 0.01
  },
  {
    "id": "specificity",
    "label": "Specificity",
    "type": "number",
    "unit": "%",
    "required": true,
    "min": 0,
    "max": 1000000000.0,
    "step": 0.01
  }
],
  calculate(values) {
    const r=(1-num(values.sensitivity)/100)/(num(values.specificity)/100); return {primary:{label:'LR−',value:fixed(r,3),unit:''}};
  },
  formula: '(1 − sensitivity) / specificity',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
