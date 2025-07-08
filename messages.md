# Messages & Customization

RemmyChat allows you to fully customize all plugin messages via `messages.yml`. This includes notifications, errors, help, and private message formats.

## File Location
`plugins/RemmyChat/messages.yml`

## Message Structure
- All messages use [MiniMessage](https://docs.adventure.kyori.net/minimessage/format.html) formatting for rich colors, gradients, and interactive elements.
- Messages are grouped by type: general, private, toggle, help, and error.

## Example: messages.yml
```yaml
plugin-reloaded: "<#5BC0DE>RemmyChat has been reloaded.</#5BC0DE>"
current-channel: "<#778899>You are currently in channel: <#5BC0DE><channel></#5BC0DE></#778899>"
msg-to-format: "<#778899>To <#5BC0DE><player></#5BC0DE>: <#F8F9FA><message></#F8F9FA></#778899>"
error:
  players-only: "<#D0021B>This command can only be used by players.</#D0021B>"
  no-permission: "<#D0021B>You don't have permission to do this.</#D0021B>"
```

## Key Messages

| Key | Description | Example |
|-----|-------------|---------|
| `plugin-reloaded` | Shown when plugin reloads | RemmyChat has been reloaded. |
| `current-channel` | Shows current chat channel | You are currently in channel: global |
| `msg-to-format` | Private message (to) | To Steve: Hello! |
| `msg-from-format` | Private message (from) | From Steve: Hi! |
| `socialspy-format` | Social spy message | [Spy] Steve → Alex: Hi! |
| `cooldown` | Chat cooldown warning | Please wait 3 seconds before chatting again. |
| `error.no-permission` | No permission error | You don't have permission to do this. |
| `help-header` | Help menu header | ┌─── RemmyChat Help ───┐ |

## Customization Tips
- Use MiniMessage tags for color, gradients, hover, and click events.
- Placeholders like `<player>`, `<message>`, `<channel>`, `<seconds>` are replaced at runtime.
- Group error messages under `error:` for clarity.

::: tip
You can preview MiniMessage formatting using the [MiniMessage Web Editor](https://webui.advntr.dev/).
:::

---

See also: [Configuration](./configuration.md), [Features](./features.md) 