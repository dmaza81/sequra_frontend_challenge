# SeQura Frontend Challenge
From this document we will explain how we have structured the challenge and how we can test it on any third-party page to integrate the Widget.

<br>
<br>

## Architecture and technology used

### Tech Stack

- **[Vite](https://vite.dev/)**: Frontend build tool.
- **[React](https://es.react.dev/)**: Library for web and native user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: Strongly typed programming language.
- **[Signals](https://github.com/preactjs/signals)**: Signals is a performant state management library.
- **[Axios](https://axios-http.com/docs/intro)**: Promise based HTTP client for the browser and node.js.

### Test
- **[Vitest](https://vitest.dev/)**: A Vite-native testing framework.
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)**: Builds on top of DOM Testing Library by adding APIs for working with React components.
- **[MSW](https://mswjs.io/)**: An API mocking library that allows you to write client-agnostic mocks and reuse them across any frameworks, tools, and environments.


### Clean Architecture

- **Domain/Models/State**: Defines entities and their state during the application lifecycle.
- **Use Cases**: Operations that can be performed on the models.
- **Adapters**: Facilitate the conversion of external data so that it can be handled by the application.

#### Benefits

- Clear code organization.
- Ease of maintenance.
- Project scalability.
  
<br>
<br>

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
<br>
<br>

## Installation and Setup Instructions To Develop

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm run test`  

To Run test's Coverage:  

To Run Dev:

`npm run dev`  

To Visit App:

`[localhost:3000/ideas](http://localhost:5173/sequra_frontend_challenge/)`  

To Build for production:

`npm run build`  

To Deploy: We are using Github Pages as a CDN

`npm run deploy`  
<br>
<br>

## How to use the Widget in your page

All you need to do is add this code inside the `<head>` tags of your website, just before closing the tag.
```
<script src="https://dmaza81.github.io/sequra_frontend_challenge/sequra-widget.umd.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    window.renderMyWidget("my-widget-container", "product-price");
  });
</script>
```
Note that the function we're calling to include our widget `renderMyWidget` requires two parameters:

- The ID of the HTML component where we'll display the widget, in this example will be `my-widget-container`
- The ID of the HTML component that contains our product's price in text, in this example will be `product-price`

Please take a look at the [example-site](https://github.com/dmaza81/sequra_frontend_challenge/tree/main/example-site) folder in case you have any questions.

## What we should improve

- The deployment system is done manually. A proper CI/CD system hasn't been set up.
- We're using [Signals](https://github.com/preactjs/signals) state as the source of truth, but we haven't set what we receive from the API and transform into this state with the Adapter. It might be a good idea to review and improve this aspect.
- Although the application has good test coverage, I would like to do some E2E with [Playhttps](https://playwright.dev/)
  
  <img width="1076" alt="Captura de pantalla 2025-04-15 a las 17 06 11" src="https://github.com/user-attachments/assets/b5816358-9a1e-47cf-b18a-c46a46bc67de" />

  


