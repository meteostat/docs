---
title: AI Skill | Meteostat CLI
sidebar_label: AI Skill
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AI Skill

The AI skill provides a natural language interface to the Meteostat CLI. It allows you to ask questions about weather and climate data in plain English and get instant answers — no need to remember commands or parameters.

## 📚 Installation {#installation}

First, install the Meteostat CLI as described in the [overview](/cli#installation) section. Then, add the skill for the AI agent of your choice:

<Tabs>
  <TabItem value="claude" label="Claude" default>
    For Claude, run the following command:

    ```bash
    curl -o .claude/skills/meteo/SKILL.md \
      https://raw.githubusercontent.com/meteostat/cli/refs/heads/main/.claude/skills/meteo/SKILL.md
    ```

    or using `wget`:

    ```bash
    wget -O .claude/skills/meteo/SKILL.md \
      https://raw.githubusercontent.com/meteostat/cli/refs/heads/main/.claude/skills/meteo/SKILL.md
    ```

  </TabItem>
  <TabItem value="copilot" label="Copilot">
    For GitHub Copilot, run the following command:

    ```bash
    curl -o .copilot/skills/meteo/SKILL.md \
      https://raw.githubusercontent.com/meteostat/cli/refs/heads/main/.copilot/skills/meteo/SKILL.md
    ```

    or using `wget`:

    ```bash
    wget -O .copilot/skills/meteo/SKILL.md \
      https://raw.githubusercontent.com/meteostat/cli/refs/heads/main/.copilot/skills/meteo/SKILL.md
    ```

  </TabItem>
  <TabItem value="opencode" label="OpenCode">
    For OpenCode, run the following command:

      ```bash
      curl -o .opencode/skills/meteo/SKILL.md \
        https://raw.githubusercontent.com/meteostat/cli/refs/heads/main/.opencode/skills/meteo/SKILL.md
      ```

      or using `wget`:

      ```bash
      wget -O .opencode/skills/meteo/SKILL.md \
        https://raw.githubusercontent.com/meteostat/cli/refs/heads/main/.opencode/skills/meteo/SKILL.md
      ```

  </TabItem>
  <TabItem value="kiro" label="Kiro">
    For Kiro, run the following command:

      ```bash
      curl -o .kiro/skills/meteo/SKILL.md \
        https://raw.githubusercontent.com/meteostat/cli/refs/heads/main/.kiro/skills/meteo/SKILL.md
      ```

      or using `wget`:

      ```bash
      wget -O .kiro/skills/meteo/SKILL.md \
        https://raw.githubusercontent.com/meteostat/cli/refs/heads/main/.kiro/skills/meteo/SKILL.md
      ```

  </TabItem>
</Tabs>

## 🚀 Usage {#usage}

Now you can ask questions about weather and climate data in natural language. For example, you can ask:

> What was the hottest day in Frankfurt in the 2020s?

The AI agent will then use the skill to query the Meteostat CLI and provide you with an answer. Something like this:

> The hottest day in Frankfurt in the 2020s was August 4, 2022, with a maximum temperature of 38.5°C, recorded at the Frankfurt Westend station. This was during the major European heat wave of summer 2022.
