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

## License

This project uses the MIT License.