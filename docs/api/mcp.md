---
title: MCP Server | JSON API
sidebar_label: MCP Server
sidebar_position: 4
---

# MCP Server

Meteostat provides a remote MCP (Model Context Protocol) server through RapidAPI. This provides access to weather and climate data through AI agents that support the MCP protocol, enabling you to ask questions about historical weather data in natural language.

## 📚 Installation {#installation}

Before you can start asking questions about the weather, you need to [set up an account on RapidAPI and subscribe to the Meteostat API](https://rapidapi.com/meteostat/api/meteostat). Then, you must add the MCP server to your agent's configuration. The exact steps depend on the agent (Claude, GitHub Copilot, OpenCode, Kiro, etc.) you are using, but generally involve adding something like the following to your agent's configuration file:

```json
{
  "mcpServers": {
    "meteostat": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://mcp.rapidapi.com",
        "--header",
        "x-api-host: meteostat.p.rapidapi.com",
        "--header",
        "x-api-key: YOUR_RAPIDAPI_KEY"
      ]
    }
  }
}
```

## 🚀 Usage {#usage}

Now you can ask questions about weather and climate data in natural language. For example, you can ask:

> What was the hottest day in Frankfurt in the 2020s?

The AI agent will then use the MCP server to query the Meteostat API and provide you with an answer. Something like this:

> The hottest day in Frankfurt in the 2020s (through 2025) was August 4, 2022, with a maximum temperature of 38.6°C (101.5°F). That was part of a severe European heat wave that summer.
