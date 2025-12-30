---
title: Testing | Contributing | Python Library
sidebar_label: Testing
sidebar_position: 2
---

# Testing

The Meteostat Python library uses [Pytest](https://docs.pytest.org/en/stable/) as its testing framework. Pytest is a powerful and flexible testing tool that makes it easy to write simple and scalable test cases for your code.

## Test Types

The test suite is organized into two main types of tests:

- **Unit Tests**: These tests focus on individual components or functions of the library, ensuring that each part works as expected in isolation. Unit tests are located in the `tests/unit/` directory.
- **Integration Tests**: These tests verify that different components of the library work together correctly. Integration tests are located in the `tests/integration/` directory.
- **System Tests**: These tests validate the overall functionality of the library in a real-world scenario, ensuring that the library behaves as intended when used in practice. System tests are located in the `tests/system/` directory.
- **Provider Tests**: These tests specifically check the integration and functionality of various data providers used by the Meteostat library. Provider tests are located in the `tests/provider/` directory. Provider tests are not meant to run on code changes but are used to verify that data providers are functioning correctly. They are executed regularly in a separate pipeline.

## Running Tests

To run the test suite, navigate to the root directory of the repository and execute the following command:

```bash
poetry run pytest tests/unit/ tests/integration/
```

This command will discover and run all test cases located in the `tests/unit/` and `tests/integration/` directories. You can also specify a particular test file or directory to run by providing its path as an argument:

```bash
poetry run pytest path/to/test_file_or_directory
```
