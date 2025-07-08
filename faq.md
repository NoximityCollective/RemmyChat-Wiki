# FAQ & Troubleshooting

Find answers to common questions and solutions to typical issues with RemmyChat.

## General

**Q: How do I reload the plugin after changing the config?**
A: Use `/remchat reload` or restart your server.

**Q: Where are the config files located?**
A: In `plugins/RemmyChat/` (`config.yml`, `messages.yml`, `symbols.yml`).

---

## Permissions & Commands

**Q: Players can't use a channel or command. Why?**
A: Make sure they have the correct permission (see [Commands & Permissions](./commands.md)). Use LuckPerms or another permissions plugin to assign permissions.

**Q: How do I give staff access to social spy?**
A: Grant `remmychat.socialspy` permission to your staff group.

---

## Formatting & Placeholders

**Q: Why aren't my placeholders working?**
A: Ensure PlaceholderAPI is installed and the placeholder is correct. Some placeholders require additional expansions.

**Q: How do I add a new emoji or symbol?**
A: Edit `symbols.yml` and add your code/replacement. See [Symbols & Emoji](./symbols.md).

**Q: Can I use gradients and hover/click events in messages?**
A: Yes! Use MiniMessage formatting in `config.yml` and `messages.yml`.

---

## Integration

**Q: How do I use LuckPerms groups for chat formatting?**
A: RemmyChat automatically detects LuckPerms. Configure group formats in `config.yml` under `groups:`.

**Q: Can I use custom textures from my resource pack?**
A: Yes! Reference them in `symbols.yml` using `<texture:your_texture>`.

---

For more help, see:
- [Configuration](./configuration.md)
- [Commands & Permissions](./commands.md)
- [Symbols & Emoji](./symbols.md)
- [Integration](./integration.md) 