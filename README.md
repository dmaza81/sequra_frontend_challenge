# SeQura Frontend Challenge
From this document we will explain how we have structured the challenge and how we can test it on any third-party page to integrate said Widget.


## Architecture and technology used

### Tech Stack

- **[Vite](https://vite.dev/)**: Frontend build tool.
- **[React](https://es.react.dev/)**: Library for web and native user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: Strongly typed programming language.

### Test
- **[Vitest](https://vitest.dev/)**: A Vite-native testing framework
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)**: Builds on top of DOM Testing Library by adding APIs for working with React components
- **[MSW](https://mswjs.io/)**: An API mocking library that allows you to write client-agnostic mocks and reuse them across any frameworks, tools, and environments


### Clean Architecture

- **Domain/Models/State**: Defines entities and their state during the application lifecycle
- **Use Cases**: Operations that can be performed on the models.
- **Adapters**: Facilitate the conversion of external data so that it can be handled by the application

#### Benefits

- Clear code organization.
- Ease of maintenance.
- Project scalability.

## Suggested Folder Structure

```
src/
├── __mocks__
│  ├── handlers.ts
│  └── node.ts
├── __tests__
│  └── App.test.tsx
├── adapters/
│   ├── index.ts
│   └── creditAgreements.adapter.ts
├── components/
│   ├──__tests__
│   │  ├── Chevron.test.tsx
│   │  ├── Dropdown.test.tsx
│   │  ├── Header.test.tsx
│   │  └── Popup.test.tsx
│   ├── Chevron.tsx
│   ├── Dropdown.tsx
│   ├── Header.tsx
│   ├── Popup.tsx
│   └── index.ts
├── hooks/
│   ├── index.ts
│   ├── useFetchAndLoad.ts
│   └── useMutationObserver.ts
├── models/
│   ├── index.ts
│   ├── axiosCall.model.ts
│   └── creditAgreements.model.ts
├── services/
│   └── public.service.ts
├── signals/
│   ├── index.ts
│   └── creditAgreement.signal.ts
├── utils/
│   ├── index.ts
│   └── loadAbortAxios.utility.ts
```

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Run Dev:

`npm run dev`  

To Visit App:

`[localhost:3000/ideas](http://localhost:5173/sequra_frontend_challenge/)`  

To Build for production:

`npm run build`  

To Deploy: We are using Github Pages as a CDN

`npm run deploy`  
