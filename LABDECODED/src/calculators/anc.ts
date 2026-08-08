import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'anc',
  title: 'Absolute Neutrophil Count',
  description: 'Calculate ANC from WBC and neutrophil percentages.',
  category: 'Hematology',
  keywords: ['anc', 'wbc', 'neut', 'bands'],
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
    "id": "neut",
    "label": "Neutrophils",
    "type": "number",
    "unit": "%",
    "required": true,
    "min": 0,
    "max": 100000,
    "step": 0.01
  },
  {
    "id": "bands",
    "label": "Bands",
    "type": "number",
    "unit": "%",
    "required": true,
    "min": 0,
    "max": 100000,
    "step": 0.01
  }
],
  calculate(values) {
    const r=num(values.wbc)*(num(values.neut)+num(values.bands))/100; return {primary:{label:'Absolute Neutrophil Count',value:fixed(r,2),unit:'10⁹/L'}};
  },
  formula: 'ANC = WBC × (neutrophils% + bands%) / 100',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
