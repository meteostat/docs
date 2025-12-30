---
title: Linting & Formatting | Contributing | Python Library
sidebar_label: Linting & Formatting
sidebar_position: 1
---

# Linting & Formatting

To maintain code quality and consistency across the Meteostat Python library, we use [Ruff](https://github.com/astral-sh/ruff), a Python linter and code formatter, written in Rust. Ruff helps us identify and fix common issues in our codebase, ensuring that our code adheres to best practices and style guidelines. Contributors are encouraged to run Ruff locally before submitting pull requests to catch any potential issues early. If available for your IDE, consider installing the Ruff extension ([VS Code](https://marketplace.visualstudio.com/items?itemName=charliermarsh.ruff)) to get real-time feedback while coding.

## Linting

To lint the codebase, run the following command in the root directory of the repository:

```bash
poetry run ruff check
```

This command will analyze the code and report any linting issues it finds. You can also specify a particular file or directory to lint by providing its path as an argument:

```bash
poetry run ruff check path/to/file_or_directory
```

## Formatting

Linting issues can often be automatically fixed using Ruff's formatting capabilities. To format the codebase, run the following command:

```bash
poetry run ruff format
```
