import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'gestational-age',
  title: 'Gestational Age Calculator',
  description: 'Calculate gestational age from the last menstrual period date.',
  category: 'Reproductive',
  keywords: ['pregnancy', 'gestational age'],
  featured: false,
  inputs: [
  {
    "id": "lmp",
    "label": "Last menstrual period",
    "type": "date",
    "required": true
  }
],
  calculate(values) {
    const l=new Date(values.lmp+"T00:00:00"),now=new Date(); const days=Math.floor((now.getTime()-l.getTime())/86400000);
 const weeks=Math.floor(days/7), rem=days%7; return {primary:{label:"Gestational age",value:`${weeks} weeks ${rem} days`},interpretation:"Calendar estimate from LMP; ultrasound dating may be preferred when clinically indicated."};
  },
  formula: 'Gestational age = elapsed time since first day of LMP',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
