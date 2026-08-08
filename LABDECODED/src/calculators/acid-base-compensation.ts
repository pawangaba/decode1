import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'acid-base-compensation',
  title: 'Metabolic Acidosis Compensation',
  description: "Estimate expected PCO₂ using Winter's formula.",
  category: 'Electrolytes',
  keywords: ['winter formula', 'acid base'],
  featured: false,
  inputs: [
  {
    "id": "bicarbonate",
    "label": "HCO\u2083",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 5,
    "max": 40,
    "step": 0.01
  }
],
  calculate(values) {
    const expected=1.5*num(values.bicarbonate)+8; return {primary:{label:"Expected PCO₂",value:fixed(expected,1),unit:"mmHg"},secondary:[{label:"Expected range",value:`${fixed(expected-2,1)}–${fixed(expected+2,1)}`}]};
  },
  formula: 'Expected PCO₂ = 1.5 × HCO₃ + 8 ± 2',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
