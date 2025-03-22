# ads-backend

## Overview
`ads-backend` is a backend service built using Express.js, designed to provide APIs for both the admin panel and the store. This project serves as the backbone of the system, handling authentication, data management, and other essential functionalities.

## Tech Stack
- **Node.js** v20
- **Express.js** - Lightweight and fast web framework for Node.js
- **MongoDB** (Choose based on project requirements)

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js v20](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Database MongoDB

## API Endpoints
| Method | Endpoint          |    Description    |
|--------|-------------------|-------------------|
| GET    | /api/items        | Get all items     |
| GET    | /api/items/:id    | Get detail item   |
| GET    | /api/store        | Get WEB setting   |

## Development
To start the development server with live reload:
```sh
npm run dev
```

## Deployment
To build and deploy:
```sh
npm run build
```

## License
This project is licensed under the MIT License.

---
Maintained by [Your Name](https://github.com/hendzcode) 🚀
