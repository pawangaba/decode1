import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'friedewald-ldl',
  title: 'LDL Cholesterol — Friedewald',
  description: 'Estimate LDL cholesterol using the Friedewald equation for conventional mg/dL inputs.',
  category: 'Endocrinology',
  keywords: ['ldl', 'friedewald', 'cholesterol'],
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
  },
  {
    "id": "triglycerides",
    "label": "Triglycerides",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 1,
    "max": 2000,
    "step": 0.01
  }
],
  calculate(values) {
    const l=num(values.total)-num(values.hdl)-num(values.triglycerides)/5; return {primary:{label:"Estimated LDL-C",value:fixed(l,1),unit:"mg/dL"},interpretation:"The Friedewald estimate has limitations, particularly with high triglycerides; follow local laboratory practice."};
  },
  formula: 'LDL-C = Total cholesterol − HDL-C − triglycerides/5',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
