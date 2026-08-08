import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'od-absorbance',
  title: 'OD / Absorbance Calculator',
  description: 'Convert between transmittance and absorbance.',
  category: 'Laboratory',
  keywords: ['absorbance', 'od', 'spectrophotometry'],
  featured: false,
  inputs: [
  {
    "id": "transmittance",
    "label": "Transmittance",
    "type": "number",
    "unit": "%",
    "required": true,
    "min": 0.0001,
    "max": 100,
    "step": 0.01
  }
],
  calculate(values) {
    const t=num(values.transmittance)/100; const a=-Math.log10(t); return {primary:{label:"Absorbance (OD)",value:fixed(a,4)}};
  },
  formula: 'A = −log₁₀(T), where T is fractional transmittance',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
