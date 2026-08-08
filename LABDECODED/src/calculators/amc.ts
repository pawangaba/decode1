import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'amc',
  title: 'Absolute Monocyte Count',
  description: 'Calculate absolute monocyte count.',
  category: 'Hematology',
  keywords: ['amc', 'wbc', 'mono'],
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
    "id": "mono",
    "label": "Monocytes",
    "type": "number",
    "unit": "%",
    "required": true,
    "min": 0,
    "max": 100000,
    "step": 0.01
  }
],
  calculate(values) {
    const r=num(values.wbc)*num(values.mono)/100; return {primary:{label:'Absolute Monocyte Count',value:fixed(r,2),unit:'10⁹/L'}};
  },
  formula: 'AMC = WBC × monocyte% / 100',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
