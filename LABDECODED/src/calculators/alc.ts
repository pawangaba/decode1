import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'alc',
  title: 'Absolute Lymphocyte Count',
  description: 'Calculate absolute lymphocyte count.',
  category: 'Hematology',
  keywords: ['alc', 'wbc', 'lymph'],
  featured: false,
  inputs: [
  {
    "id": "wbc",
    "label": "WBC",
    "type": "number",
    "unit": "10\u2079/L",
    "required": true,
    "min": 0,
    "max": 100000,
    "step": 0.01
  },
  {
    "id": "lymph",
    "label": "Lymphocytes",
    "type": "number",
    "unit": "%",
    "required": true,
    "min": 0,
    "max": 100000,
    "step": 0.01
  }
],
  calculate(values) {
    const r=num(values.wbc)*num(values.lymph)/100; return {primary:{label:'Absolute Lymphocyte Count',value:fixed(r,2),unit:'10⁹/L'}};
  },
  formula: 'ALC = WBC × lymphocyte% / 100',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
