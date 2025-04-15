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
├── adapters/
│   ├── index.ts
│   └── credit-agreements.adapter.ts
├── components/
│   ├── Cher.jsx
│   └── AdminComponent.jsx
├── models/
│   └── userModel.js
├── hooks/
│   ├── useUser.js
│   └── useAdmin.js
├── services/
│   └── userService.js
├── utilities/
│   └── formatter.js
├── interceptors/
│   └── authInterceptor.js
├── contexts/
│   └── UserContext.js
```
