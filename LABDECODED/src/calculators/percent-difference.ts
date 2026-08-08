import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'percent-difference',
  title: 'Percent Difference',
  description: 'Calculate percentage difference between two measurements.',
  category: 'Statistics',
  keywords: ['percent difference'],
  featured: false,
  inputs: [
  {
    "id": "a",
    "label": "Measurement A",
    "type": "number",
    "unit": "",
    "required": true,
    "min": -1000000000.0,
    "max": 1000000000.0,
    "step": 0.01
  },
  {
    "id": "b",
    "label": "Measurement B",
    "type": "number",
    "unit": "",
    "required": true,
    "min": -1000000000.0,
    "max": 1000000000.0,
    "step": 0.01
  }
],
  calculate(values) {
    const a=num(values.a),b=num(values.b),r=Math.abs(a-b)/((Math.abs(a)+Math.abs(b))/2)*100; return {primary:{label:"Percent difference",value:fixed(r,2),unit:"%"}};
  },
  formula: '% difference = |A−B| / [(|A|+|B|)/2] × 100',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
