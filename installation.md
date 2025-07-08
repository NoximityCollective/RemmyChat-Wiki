# Installation & Quickstart

RemmyChat is designed for easy installation and rapid setup on any PaperMC server. Follow these steps to get started.

## Requirements

- **PaperMC 1.21.7** or compatible server
- **Java 21** or higher
- (Optional) [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) for advanced placeholders
- (Optional) [LuckPerms](https://luckperms.net/) for group/permission integration

## Download & Installation

1. **Download the latest RemmyChat JAR** from the official source.
2. Place the JAR file in your server's `plugins` folder.
3. Restart your server.
4. RemmyChat will generate its configuration files on first run:
   - `plugins/RemmyChat/config.yml`
   - `plugins/RemmyChat/messages.yml`
   - `plugins/RemmyChat/symbols.yml`

## First-Time Setup

1. **Edit `config.yml`** to customize channels, groups, formats, and features.
2. **Edit `symbols.yml`** to define your own emoji and symbol replacements.
3. **Edit `messages.yml`** to personalize all plugin messages.
4. Reload the plugin with:

```sh
/remchat reload
```

Or restart your server for all changes to take effect.

## Basic Configuration Example

```yaml
# config.yml (excerpt)
default-channel: "global"
chat-cooldown: 3
features:
  format-hover: true
  clickable-links: true
  player-formatting: false
```

For a full breakdown of configuration options, see [Configuration](./configuration.md). 