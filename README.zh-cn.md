# 概览

[English](./README.md) | [中文](./README.zh-cn.md)

这个仓库是一个**monorepo**，使用**pnpm workspace**管理单个代码库中的多个项目。它还支持使用**turbo**进行增量构建。

## 目录

- [目的](#目的)
- [项目结构](#项目结构)
- [快速开始](#快速开始)
  - [前置条件](#前置条件)
  - [安装](#安装)
  - [运行项目](#运行项目)
  - [使用热更新](#使用热更新)
  - [添加新项目](#添加新项目)
  - [常用脚本](#常用脚本)
  - [使用Turbo进行增量构建](#使用turbo进行增量构建)
- [许可证](#许可证)

## 目的

这个仓库的目的是为了让开发者能够快速搭建一个monorepo进行业务开发。开发者可以使用当前的项目结构来开发自己的业务逻辑并组织自己的monorepo。

## 项目结构

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

- **apps/**: 包含业务逻辑代码。
  - **backend/**: 后端服务代码。
  - **frontend/**: 前端应用代码。
    - **dashboard/**: 示例应用，展示如何集成packages/ui库。
    - **home/**: 另一个前端应用。
- **packages/**: 包含所有共享库。
  - **cli/**: 管理monorepo的脚本。
  - **tools/**: 项目中的一些通用工具函数。
  - **ui/**: UI组件库。

## 快速开始

- 安装 **pnpm**
- 全局安装 **turbo**:
    ```sh
    npm install -g turbo
    ```
- 在根目录运行 `pnpm i` 安装所有依赖
- 打开 `apps/frontend/dashboard` 目录，运行 `pnpm run dev` 启动示例应用。
- 如果你想在packages项目中使用热更新，可以打开你想开发的项目并运行 `pnpm run dev`

### 前置条件

- Node.js
- pnpm
- turbo

### 安装

1. 克隆仓库:
    ```sh
    git clone https://github.com/ivonzhang/monorepo-demo.git
    cd monorepo-demo
    ```

2. 安装依赖:
    ```sh
    pnpm i
    ```

### 运行项目

要运行特定项目，导航到项目目录并运行启动脚本:

```sh
cd apps/frontend/dashboard
pnpm run dev
```

### 使用热更新

要启用本地开发的热更新，请按照以下步骤操作:

1. 导航到你想开发的包或应用。例如，要开发`ui`包:
    ```sh
    cd packages/ui
    ```

2. 运行开发脚本:
    ```sh
    pnpm run dev
    ```

3. 在另一个终端中，导航到使用该包的应用。例如，要运行`dashboard`应用:
    ```sh
    cd apps/frontend/dashboard
    pnpm run dev
    ```

现在在`ui`包中所做的更改将反映在`dashboard`应用中，而无需重新启动应用。

### 添加新项目

1. 在 `packages/` 下创建一个新目录:
    ```sh
    mkdir packages/project-c
    ```

2. 初始化新项目:
    ```sh
    cd packages/project-c
    pnpm init
    ```

3. 添加必要的依赖和脚本。

### 常用脚本

- **构建所有项目**:
    ```sh
    pnpm build
    ```

- **启动项目**:
    ```sh
    pnpm run dev
    ```

### 使用Turbo进行增量构建

要使用turbo进行增量构建，可以运行以下命令:

```sh
turbo run build
```

这将只构建自上次构建以来发生更改的项目，从而显著加快构建过程。

## 许可证

这个项目使用 MIT 许可证。
