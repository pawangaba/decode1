import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'nlr',
  title: 'Neutrophil-Lymphocyte Ratio',
  description: 'Calculate NLR.',
  category: 'Hematology',
  keywords: ['nlr', 'neutrophils', 'lymphocytes'],
  featured: false,
  inputs: [
  {
    "id": "neutrophils",
    "label": "Neutrophils",
    "type": "number",
    "unit": "10\u2079/L",
    "required": true,
    "min": 0,
    "max": 100000,
    "step": 0.01
  },
  {
    "id": "lymphocytes",
    "label": "Lymphocytes",
    "type": "number",
    "unit": "10\u2079/L",
    "required": true,
    "min": 0,
    "max": 100000,
    "step": 0.01
  }
],
  calculate(values) {
    const r=num(values.neutrophils)/num(values.lymphocytes); return {primary:{label:'Neutrophil-Lymphocyte Ratio',value:fixed(r,2),unit:''}};
  },
  formula: 'NLR = neutrophils / lymphocytes',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
