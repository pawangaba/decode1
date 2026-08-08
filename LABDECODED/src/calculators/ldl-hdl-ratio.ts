import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'ldl-hdl-ratio',
  title: 'LDL / HDL Ratio',
  description: 'Calculate LDL to HDL ratio.',
  category: 'Endocrinology',
  keywords: ['ldl hdl ratio'],
  featured: false,
  inputs: [
  {
    "id": "ldl",
    "label": "LDL cholesterol",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 1,
    "max": 1000,
    "step": 0.01
  },
  {
    "id": "hdl",
    "label": "HDL cholesterol",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 1,
    "max": 300,
    "step": 0.01
  }
],
  calculate(values) {
    const r=num(values.ldl)/num(values.hdl); return {primary:{label:"LDL/HDL ratio",value:fixed(r,2)}};
  },
  formula: 'LDL/HDL ratio = LDL-C / HDL-C',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
