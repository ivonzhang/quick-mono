# 概览

[English](./README.md) | [中文](./README.zh-cn.md)

这个仓库是一个 **monorepo**，使用 **pnpm workspace** 管理单个代码库中的多个项目。它还支持使用 **turbo** 进行增量构建。

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
- [利用 pnpm 的 publishConfig 字段提升本地开发体验](#利用-pnpm-的-publishconfig-字段提升本地开发体验)
- [许可证](#许可证)

## 目的

这个仓库的目的是为了让开发者能够快速搭建一个 `monorepo` 进行业务开发。开发者可以使用当前的项目结构来开发自己的业务逻辑并组织自己的`monorepo`。

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
    - **dashboard/**: 示例应用，展示如何集成 `packages/ui` 库。
    - **home/**: 另一个前端应用。
- **packages/**: 包含所有共享库。
  - **cli/**: 管理 `monorepo` 的脚本。
  - **tools/**: 项目中的一些通用工具函数。
  - **ui/**: UI 组件库。

## 快速开始

- 全局安装 **pnpm**
    ```bash
    npm i pnpm -g
    ```
- 全局安装 **turbo**
    ```sh
    npm install -g turbo
    ```
- 在根目录运行 `pnpm i` 安装所有依赖
- 根目录下运行 `pnpm dev` 启动示例应用和热更新。
- 增量构建 `pnpm build`
- 发布到 **npm registry**：`pnpm publish`。可以结合 [changeset](https://pnpm.io/using-changesets) 进行版本管理


### 前置条件

- 安装 `Node.js`
- 全局安装 `pnpm`
- 全局安装 [turbo](https://www.npmjs.com/package/turbo)

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

- <b>方式一(推荐)</b>

  本项目已经接入了 `turbo`，并在根目录的 `package.json` 中定义了脚本 `"dev": "turbo dev"`, 所以可以直接在根目录下**一键启动**
  ```bash
  # 你将可以启动所有 dev 脚本，也具备了热更新的能力了
  pnpm dev
  ```

- <b>方式二</b>
  要运行特定项目，导航到项目目录并运行启动脚本:
    ```bash
    cd apps/frontend/dashboard
    pnpm run dev
    ```

### 使用热更新

> **【最新说明】**：本项目已经接入了 turbo，在根目录下可以一键启动，即可具备热更新的能力了。当然你也可以按照以下操作，对特定的包进行操作


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
    pnpm dev
    ```

### 使用Turbo进行增量构建

要使用 turbo 进行增量构建，可以运行以下命令:

```sh
turbo run build
```

这将只构建自上次构建以来发生更改的项目，从而显著加快构建过程。
## 利用 pnpm 的 publishConfig 字段提升本地开发体验

通过在每个包的 `package.json` 中配置 [publishConfig](https://pnpm.io/package_json#publishconfig) 字段（如 `main`、`module`、`types` 等），可以指定包在发布和本地开发时的入口文件路径。这样可以让本地开发时直接链接到源码文件，带来如下优势：

- **无需提前编译 build**：包可直接从源码文件被引用，无需预先构建。
- **浏览器源码调试**：可以在浏览器中直接调试包的源码文件，定位问题更高效。
- **无需配置 Vite 的 alias**：pnpm 会自动链接源码，无需手动指定 alias。

### 使用方法
以当前项目的 `packages/tools` 举例

1. 在包的 `package.json` 中添加如下字段：
    ```json
    {
        // 本地指向真实存在的 TS 源码（确保 src/index.ts 存在）
        "main": "src/index.ts", 
        "module": "src/index.ts", // 统一指向 TS 源码（避免找不到 .mjs）
        "types": "src/index.ts",  // 本地用 TS 源码直接提供类型（无需提前编译 .d.ts）
        "publishConfig": {
            // 发布时覆盖为编译后的产物（不变）
            "main": "dist/index.js",
            "module": "dist/index.mjs",
            "types": "dist/index.d.mts"
        },
    }
    ```
   表示本地开发和发布时都以源码文件为入口。

2. 运行 `pnpm dev` 或启动应用时，依赖的包会自动链接到源码入口文件。

3. 你可以直接调试和修改包源码，变更会实时反映到应用，无需重新构建。

这种方式极大提升了 monorepo 项目在本地开发时的体验。

## 许可证

这个项目使用 MIT 许可证。
