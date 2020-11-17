<span>
    <img src='assets/img/icon-one-dark-pro.png' width='75px'>
    <h1>One Dark Pro for JupyterLab</h1>
</span>

A full IDE build of [VSCode's One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme) theme for JupyterLab

![one-dark-pro-preview](assets/img/jlab-one-dark-pro.png)

## Beyond a simple syntax highlighter

Features modern IDE padding, borders, hover effects and rounded corners.

Extends to:

- **Help view:**

<img src='assets/img/help-view.png' width='650px'>

- **Tooltips:**

<img src='assets/img/tooltips.png' width='650px'>

- **Tracebacks:**

<img src='assets/img/traceback.png' width='650px'>

- **and more**

## Prerequisites

* JupyterLab 2

## Installation

```bash
jupyter labextension install jupyterlab_onedarkpro
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```
