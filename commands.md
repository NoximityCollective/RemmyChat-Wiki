# Commands & Permissions

RemmyChat provides a suite of commands for managing chat, channels, private messages, and moderation. Each command is protected by permissions for granular control.

## Command List

| Command | Usage | Description | Aliases | Permission |
|---------|-------|-------------|---------|------------|
| `/remchat` | `/remchat` | Main command for RemmyChat | `rc` | `remmychat.use` |
| `/remchat channel <name>` | `/remchat channel global` | Switch between chat channels |  | `remmychat.use` |
| `/remchat reload` | `/remchat reload` | Reload plugin configuration |  | `remmychat.admin` |
| `/msg <player> <message>` | `/msg Steve Hello!` | Send a private message | `tell`, `pm`, `whisper`, `w` | `remmychat.msg` |
| `/reply <message>` | `/reply Hi!` | Reply to last private message | `r` | `remmychat.msg` |
| `/msgtoggle` | `/msgtoggle` | Toggle private messages on/off | `togglemsg`, `togglepm` | `remmychat.msgtoggle` |
| `/socialspy` | `/socialspy` | Monitor private messages | `msgspy`, `spy` | `remmychat.socialspy` |

---

## Permissions Reference

| Permission | Description | Default |
|------------|-------------|---------|
| `remmychat.use` | Basic plugin access | `true` |
| `remmychat.msg` | Send private messages | `true` |
| `remmychat.msgtoggle` | Toggle private messages | `true` |
| `remmychat.msgtoggle.bypass` | Bypass message toggle | `op` |
| `remmychat.socialspy` | Use social spy feature | `op` |
| `remmychat.admin` | Administrative access | `op` |
| `remmychat.channel.local` | Access to local channel | `true` |
| `remmychat.channel.staff` | Access to staff channel | `op` |

> **Tip:** Use a permissions plugin like LuckPerms to assign these permissions to players or groups.

---

## Example: Granting Staff Social Spy
```sh
/lp user Steve permission set remmychat.socialspy true
```

---

See also: [Configuration](./configuration.md), [Channels & Groups](./channels.md) 