import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'aec',
  title: 'Absolute Eosinophil Count',
  description: 'Calculate absolute eosinophil count.',
  category: 'Hematology',
  keywords: ['aec', 'wbc', 'eos'],
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
    "id": "eos",
    "label": "Eosinophils",
    "type": "number",
    "unit": "%",
    "required": true,
    "min": 0,
    "max": 100000,
    "step": 0.01
  }
],
  calculate(values) {
    const r=num(values.wbc)*num(values.eos)/100; return {primary:{label:'Absolute Eosinophil Count',value:fixed(r,2),unit:'10⁹/L'}};
  },
  formula: 'AEC = WBC × eosinophil% / 100',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
