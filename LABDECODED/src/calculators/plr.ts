import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'plr',
  title: 'Platelet-Lymphocyte Ratio',
  description: 'Calculate PLR.',
  category: 'Hematology',
  keywords: ['plr', 'platelets', 'lymphocytes'],
  featured: false,
  inputs: [
  {
    "id": "platelets",
    "label": "Platelets",
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
    const r=num(values.platelets)/num(values.lymphocytes); return {primary:{label:'Platelet-Lymphocyte Ratio',value:fixed(r,2),unit:''}};
  },
  formula: 'PLR = platelets / lymphocytes',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
