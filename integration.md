# Integration

RemmyChat integrates seamlessly with popular Minecraft plugins and features for maximum flexibility and customization.

## PlaceholderAPI
- **Automatic Integration:** If PlaceholderAPI is installed, you can use any PlaceholderAPI placeholders in your chat formats, messages, and templates.
- **Usage Example:**
  ```yaml
  placeholders:
    player-balance: "%vault_eco_balance%"
    display: "Balance: %player-balance%"
  ```
- **Tip:** See the PlaceholderAPI documentation for available placeholders.

## LuckPerms
- **Group-Based Formatting:** RemmyChat detects LuckPerms and uses its groups for chat formatting, making it easy to assign different formats/styles to different groups.
- **Setup:**
  - Assign players to groups in LuckPerms.
  - Configure group formats in `config.yml` under `groups:`.
- **Example:**
  ```yaml
  groups:
    admin:
      name-style: "admin"
      format: "%admin-hover% %player_name%: %default-message%"
  ```

## Resource Pack Support
- **Custom Textures & Emoji:** Use codes like `<texture:diamond>` in `symbols.yml` to display custom icons or emojis from your resource pack.
- **Setup:**
  - Add textures to your resource pack.
  - Reference them in `symbols.yml`.
- **Example:**
  ```yaml
  symbols:
    ":diamond:": "<texture:diamond>"
  ```

---

See also: [Configuration](./configuration.md), [Symbols & Emoji](./symbols.md), [Channels & Groups](./channels.md) 