# SeQura Frontend Challenge
From this document we will explain how we have structured the challenge and how we can test it on any third-party page to integrate said Widget.


## Architecture and technology used

For this challenge we have based ourselves on a Clean architecture and the use of Vite with React

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
