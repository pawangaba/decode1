import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'chol-hdl-ratio',
  title: 'Total Cholesterol / HDL Ratio',
  description: 'Calculate the total cholesterol to HDL ratio.',
  category: 'Endocrinology',
  keywords: ['cholesterol ratio'],
  featured: false,
  inputs: [
  {
    "id": "total",
    "label": "Total cholesterol",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 20,
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
    const r=num(values.total)/num(values.hdl); return {primary:{label:"TC/HDL ratio",value:fixed(r,2)}};
  },
  formula: 'TC/HDL ratio = total cholesterol / HDL-C',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
