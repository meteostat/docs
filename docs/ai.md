---
sidebar_position: 9
---

# Artificial Intelligence

Meteostat provides different interfaces for accessing information using generative AI. Here you can find more information about these interfaces and how to use them.

## Skill

Meteostat provides a [free skill](/cli/skill) based on the [Meteostat CLI](/cli). This allows you to ask questions about weather and climate data in natural language. It is primarily designed for local use with AI agents, such as Claude, GitHub Copilot, OpenCode, Kiro, etc.

## MCP Server

If you're looking for a more scalable solution, Meteostat also provides a [remote MCP server](/api/mcp) through RapidAPI. This provides access to weather and climate data through AI agents that support the MCP protocol, enabling you to ask questions about historical weather data in natural language.

## Context7

If you want to enable your AI agent to access the entire Meteostat documentation, use [Context7](https://context7.com/websites/dev_meteostat_net). You'll need to [setup Context7](https://github.com/upstash/context7#installation) with your AI agent. Then, you can ask questions about the documentation in natural language. This is especially useful if you're building software that uses one of the Meteostat interfaces and you want to quickly find relevant information about the API endpoints, parameters, etc.
