# Overview

[English](./README.md) | [中文](./README.zh-cn.md)

This repository is a **monorepo** that uses **pnpm workspace** to manage multiple projects in a single codebase. It also supports incremental builds with **turbo**.

## Table of Contents

- [Purpose](#purpose)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Projects](#running-projects)
  - [Using Hot Reload](#using-hot-reload)
  - [Adding a New Project](#adding-a-new-project)
  - [Common Scripts](#common-scripts)
  - [Incremental Builds with Turbo](#incremental-builds-with-turbo)
- [Enhancing Local Development Experience with pnpm publishConfig](#enhancing-local-development-experience-with-pnpm-publishconfig)
- [License](#license)

## Purpose

The purpose of this repository is to help developers quickly set up a monorepo for business development. You can use the current project structure to develop your own business logic and organize your own monorepo.

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
    - **dashboard/**: Example application demonstrating how to integrate the `packages/ui` library.
    - **home/**: Another frontend application.
- **packages/**: Contains all shared libraries.
  - **cli/**: Scripts for managing the monorepo.
  - **tools/**: Common utility functions for the project.
  - **ui/**: UI component library.

## Quick Start

- Install **pnpm** globally
    ```bash
    npm i pnpm -g
    ```
- Install **turbo** globally
    ```sh
    npm install -g turbo
    ```
- Run `pnpm i` in the root directory to install all dependencies
- Run `pnpm dev` in the root directory to start the example app and enable hot reload.
- Incremental build: `pnpm build`
- Publish to **npm registry**: `pnpm publish`. You can use [changeset](https://pnpm.io/using-changesets) for version management.

### Prerequisites

- Install `Node.js`
- Install `pnpm` globally
- Install [turbo]([turbo](https://www.npmjs.com/package/turbo)) globally

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

- <b>Method 1 (Recommended)</b>

  This project has integrated `turbo`, and the root `package.json` defines the script `"dev": "turbo dev"`, so you can start everything with one command at the root:
  ```bash
  # This will start all dev scripts and enable hot reload
  pnpm dev
  ```

- <b>Method 2</b>
  To run a specific project, navigate to the project directory and run the start script:
    ```bash
    cd apps/frontend/dashboard
    pnpm run dev
    ```

### Using Hot Reload

> **[Latest Note]**: This project has integrated turbo, so you can start everything with one command at the root and have hot reload enabled. Of course, you can also operate on specific packages as follows:


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
    pnpm dev
    ```

### Incremental Builds with Turbo

To use turbo for incremental builds, you can run the following command:

```sh
turbo run build
```

This will build only the projects that have changed since the last build, significantly speeding up the build process.
## Enhancing Local Development Experience with pnpm publishConfig

By configuring the [publishConfig](https://pnpm.io/package_json#publishconfig) field (such as `main`, `module`, `types`, etc.) in each package's `package.json`, you can specify the entry file paths for both publishing and local development. This allows you to link directly to source files during local development, with the following benefits:

- **No need to pre-build**: Packages can be referenced directly from source files without prior compilation.
- **Source debugging in browser**: You can debug package source files directly in the browser for more efficient troubleshooting.
- **No need to configure Vite alias**: pnpm automatically links to source files, so you don't need to manually specify aliases.

### How to use
Take the current project's `packages/tools` as an example:

1. Add the following fields to the package's `package.json`:
    ```json
    {
        // Locally point to the actual TS source (ensure src/index.ts exists)
        "main": "src/index.ts", 
        "module": "src/index.ts", // Unified to TS source (avoid missing .mjs)
        "types": "src/index.ts",  // Directly provide types from TS source (no need to pre-compile .d.ts)
        "publishConfig": {
            // Overwrite with compiled output when publishing (unchanged)
            "main": "dist/index.js",
            "module": "dist/index.mjs",
            "types": "dist/index.d.mts"
        },
    }
    ```
   This means both local development and publishing use the source file as the entry point.

2. When you run `pnpm dev` or start your app, dependent packages will automatically link to the source entry file.

3. You can directly debug and modify package source code, and changes will be reflected in the app in real time without rebuilding.

This approach greatly improves the local development experience for monorepo projects.

## License

This project uses the MIT License.