# LABDECODED — Astro Medical & Laboratory Calculators

A modular Astro + TypeScript calculator platform for LABDECODED.ORG.

## Included
- 76 calculator definition files at initial build
- Automatic calculator discovery using `import.meta.glob()`
- Dynamic `/calculators/[slug]/` routing
- Automatic category pages
- Search
- Responsive medical/scientific UI
- Light/dark mode
- Browser-side calculations
- No database or backend required

## Run

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Add a new calculator

Create one file:

`src/calculators/my-calculator.ts`

Export the standard `CalculatorDefinition` object. The registry automatically discovers the file. You do not need to edit the route, calculator listing, category page, or registry.

## Architecture

`calculator .ts → automatic registry → dynamic route → reusable calculator UI`

## Important
Clinical formulas and thresholds should be independently reviewed and validated before production clinical use. The included calculator references are deliberately conservative where assay- or guideline-specific variation exists.


## Calculator architecture
All files in `src/calculators/*.ts` are automatically discovered by `src/engine/calculator-registry.ts`. Add a new `CalculatorDefinition` TypeScript file to add a calculator without changing the route.
