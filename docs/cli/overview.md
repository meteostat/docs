---
title: Meteostat CLI
sidebar_label: Overview
id: cli-overview
slug: /cli
sidebar_position: 1
---

import DocCardList from '@theme/DocCardList';

# Meteostat CLI

The Meteostat CLI gives you direct access to weather and climate data from the terminal. It is built on top of the [Meteostat Python library](/python) and lets you query historical observations, browse weather stations, and export data in a variety of formats — all without writing a single line of code.

![](demo.gif)

## 📚 Installation {#installation}

Install the CLI via [PyPI](https://pypi.org/project/meteostat-cli/):

```bash
uv tool install meteostat-cli
```

For plotting capabilities (`png` and `svg` output), install the `plot` extra:

```bash
uv tool install "meteostat-cli[plot]"
```

Alternatively, you can use `uvx`:

```bash
uvx meteostat-cli [YOUR_COMMAND]
```

### ⚡ Shell Completion {#shell-completion}

To enable shell completion (Bash, Zsh, Fish, PowerShell), run the following command:

```bash
meteo --install-completion
```

## 🚀 Usage {#usage}

Want to know the hottest temperature of 2024 at Frankfurt Airport (station `10637`)? Run the following command:

```bash
meteo daily 10637 -s 2024-01-01 -e 2024-12-31 -p tmax --agg max
```

This will yield the following output:

```
         tmax
station
10637    35.9
```

## 👀 Learn More {#learn-more}

<DocCardList />
