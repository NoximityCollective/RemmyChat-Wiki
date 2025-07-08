# Configuration

RemmyChat offers a highly flexible configuration system via `config.yml`. Below is a detailed guide to each section and option.

## File Location

`plugins/RemmyChat/config.yml`

## Main Sections

### Default Channel
| Option            | Description                        | Example      |
|-------------------|------------------------------------|--------------|
| `default-channel` | Channel players join by default    | `global`     |

### Debug Settings
Enable detailed logging for troubleshooting.

| Option                      | Description                                 | Default |
|-----------------------------|---------------------------------------------|---------|
| `debug.enabled`             | Enable debug logging                        | false   |
| `debug.format-processing`   | Log format processing details               | false   |
| `debug.placeholder-resolution` | Log placeholder resolution details        | false   |
| `debug.group-selection`     | Log group selection details                 | false   |
| `debug.verbose-startup`     | Show/hide startup loading messages          | false   |

### Placeholders
Define reusable text elements for chat formats.

```yaml
placeholders:
  default-message: "<white>%message%</white>"
  special-name: "<gradient:gold:yellow>%player_name%</gradient>"
  owner-prefix: "<red>[OWNER]</red>"
  # ...
```

See [Templates](#templates) and [Groups](./channels.md) for advanced usage.

### Features
Toggle core plugin features.

| Option                   | Description                                 | Default |
|--------------------------|---------------------------------------------|---------|
| `features.format-hover`  | Enable hover events in chat                 | true    |
| `features.clickable-links` | Enable clickable URLs in chat             | true    |
| `features.player-formatting` | Allow players to use MiniMessage        | false   |
| `features.use-group-format`  | Use group-based chat formatting         | true    |
| `features.allow-self-messaging` | Allow players to message themselves  | false   |

### Chat Cooldown
| Option           | Description                        | Default |
|------------------|------------------------------------|---------|
| `chat-cooldown`  | Seconds between chat messages      | 3       |

### URL Formatting
Customize how URLs appear in chat.

```yaml
url-formatting:
  enabled: true
  color: "#3498DB"
  underline: true
  hover-text: "<#AAAAAA>Click to open"
```

### Templates
Reusable components for hovers, prefixes, and name styles.

```yaml
templates:
  hovers:
    player-info: "<#778899>Player information\n<#F8F9FA>Name: <#E8E8E8>%player_name%\n<#F8F9FA>Click to message"
  channel-prefixes:
    local: "<#5BC0DE>[Local]"
  name-styles:
    default: "<#4A90E2>%player_name%"
    owner: "<bold><gradient:#FF0000:#FFAA00>%player_name%</gradient></bold>"
```

### Chat Format
Controls the final assembly of chat messages.

```yaml
chat-format: "%channel_prefix% %group_prefix%%name%<#778899>: <#F8F9FA>%message%"
```

### Channels
Define chat channels with permissions, radius, prefix, hover, and display name.

```yaml
channels:
  global:
    permission: ""
    radius: -1
    prefix: ""
    hover: "player-info"
    display-name: ""
  local:
    permission: "remmychat.channel.local"
    radius: 100
    prefix: "local"
    hover: "local-chat"
    display-name: "<gray>[Local]</gray>"
```

See [Channels & Groups](./channels.md) for more details.

### Groups
Configure group-based chat formatting and styles.

```yaml
groups:
  owner:
    name-style: "owner"
    prefix: ""
    format: "%owner-hover% %special-name%: %default-message%"
  admin:
    name-style: "admin"
    prefix: ""
    format: "%admin-hover% %player_name%: %default-message%"
  default:
    name-style: "default"
    prefix: ""
    format: "%default-format%"
```

See [Channels & Groups](./channels.md) for advanced formatting.

---

For a full list of available placeholders, templates, and formatting options, see the [Features](./features.md) and [Symbols](./symbols.md) pages. 