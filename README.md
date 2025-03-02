# Monorepo Demo

This repository is a monorepo that manages multiple projects in a single codebase using pnpm workspace.

## Purpose

The purpose of this repository is to enable developers to quickly set up a monorepo for business development. Developers can use the current project structure to develop their own business logic and organize their own monorepo.

## Project Structure

```
monorepo-demo/
├── apps/
│   ├── backend/
│   └── frontend/
│       ├── dashboard/
│       └── home/
├── packages/
│   ├── cli/
│   └── tools/
│   └── ui/
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── README.md
```

- **apps/**: Contains business logic code.
  - **backend/**: Backend service code.
  - **frontend/**: Frontend application code.
    - **dashboard/**: Example application demonstrating the integration of the packages/ui library.
    - **home/**: Another frontend application.
- **packages/**: Contains all the shared libraries.
  - **cli/**: Scripts for managing the monorepo.
  - **tools/**: Common utility functions for the project.
  - **ui/**: UI component library.

## Getting Started

- Install **pnpm**
- At the root directory, run `pnpm i` to install all dependencies
- Open the `apps/frontend/dashboard` directory, and run `pnpm run dev` to start the example application.
- If you want to use hot reload in the packages project, you can open the project you want to develop and run `pnpm run dev`

### Prerequisites

- Node.js
- pnpm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ivonzhang/monorepo-demo.git
    cd monorepo-demo
    ```

2. Install dependencies:
    ```sh
    pnpm i
    ```

### Running Projects

To run a specific project, navigate to the project's directory and run the start script:

```sh
cd apps/frontend/dashboard
pnpm run dev
```

### Using Hot Reload

To enable hot reload for local development, follow these steps:

1. Navigate to the package or app you want to develop. For example, to develop the `ui` package:
    ```sh
    cd packages/ui
    ```

2. Run the development script:
    ```sh
    pnpm run dev
    ```

3. In another terminal, navigate to the app that uses the package. For example, to run the `dashboard` app:
    ```sh
    cd apps/frontend/dashboard
    pnpm run dev
    ```

Changes made in the `ui` package will now be reflected in the `dashboard` app without needing to restart the app.

### Adding a New Project

1. Create a new directory under `packages/`:
    ```sh
    mkdir packages/project-c
    ```

2. Initialize a new project:
    ```sh
    cd packages/project-c
    pnpm init
    ```

3. Add the necessary dependencies and scripts.

### Common Scripts

- **Build all projects**:
    ```sh
    pnpm build
    ```

- **Start the projects**:
    ```sh
    pnpm run dev
    ```

## License

This project is licensed under the MIT License.