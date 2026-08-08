import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'mlr',
  title: 'Monocyte-Lymphocyte Ratio',
  description: 'Calculate MLR.',
  category: 'Hematology',
  keywords: ['mlr', 'monocytes', 'lymphocytes'],
  featured: false,
  inputs: [
  {
    "id": "monocytes",
    "label": "Monocytes",
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
    const r=num(values.monocytes)/num(values.lymphocytes); return {primary:{label:'Monocyte-Lymphocyte Ratio',value:fixed(r,2),unit:''}};
  },
  formula: 'MLR = monocytes / lymphocytes',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
