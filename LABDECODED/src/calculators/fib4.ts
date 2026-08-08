import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'fib4',
  title: 'FIB-4 Index',
  description: 'Calculate the FIB-4 index for liver fibrosis risk stratification.',
  category: 'Liver',
  keywords: ['fib4', 'fib-4', 'liver'],
  featured: true,
  inputs: [
  {
    "id": "age",
    "label": "Age",
    "type": "number",
    "unit": "years",
    "required": true,
    "min": 18,
    "max": 120,
    "step": 1
  },
  {
    "id": "ast",
    "label": "AST",
    "type": "number",
    "unit": "U/L",
    "required": true,
    "min": 1,
    "max": 10000,
    "step": 0.01
  },
  {
    "id": "alt",
    "label": "ALT",
    "type": "number",
    "unit": "U/L",
    "required": true,
    "min": 1,
    "max": 10000,
    "step": 0.01
  },
  {
    "id": "platelets",
    "label": "Platelets",
    "type": "number",
    "unit": "10\u2079/L",
    "required": true,
    "min": 1,
    "max": 1000,
    "step": 0.01
  }
],
  calculate(values) {
    const f=num(values.age)*num(values.ast)/(num(values.platelets)*Math.sqrt(num(values.alt)));
 let interpretation=f<1.3?"Lower risk range":f<=2.67?"Indeterminate range":"Higher risk range";
 return {primary:{label:"FIB-4",value:fixed(f,2)},interpretation};
  },
  formula: 'FIB-4 = Age × AST / (Platelets × √ALT)',
  references: [
  {
    "title": "Sterling et al. Development of a simple noninvasive index to predict significant fibrosis in patients with HIV/HCV."
  }
]
};
export default calculator;
