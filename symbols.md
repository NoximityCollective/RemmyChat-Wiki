# Symbols & Emoji Replacement

RemmyChat supports custom emoji and symbol replacement in chat messages, allowing you to define your own codes (like `:smile:`, `:heart:`) and their replacements (emoji, text, or MiniMessage components).

## How It Works
- Players type codes like `:smile:` in chat.
- The plugin automatically replaces these codes with whatever you configure in `symbols.yml`.
- Supports Unicode emojis, text, and MiniMessage components.
- Works with resource packs for custom textures.

## Example `symbols.yml`
```yaml
symbols:
  ":heart:": "❤"
  ":star:": "⭐"
  ":smile:": "😄"
  ":sad:": "😢"
  ":angry:": "😠"
  ":confused:": "😕"
  ":wink:": "😉"
```

| Code         | Replacement | Example Output |
|--------------|-------------|---------------|
| `:heart:`    | ❤           | ❤             |
| `:star:`     | ⭐           | ⭐             |
| `:smile:`    | 😄           | 😄             |
| `:wink:`     | 😉           | 😉             |

## Advanced Usage
- Replacements can be any string, emoji, or MiniMessage component.
- You can use custom resource pack textures: `<texture:diamond>`
- Codes are case-insensitive and can include dashes (e.g., `:smile-face:`)

## Best Practices
- Keep codes short and memorable.
- Use unique codes to avoid accidental replacements.
- Test with your resource pack if using custom textures.

## File Location
`plugins/RemmyChat/symbols.yml`

---

See also: [Configuration](./configuration.md), [Features](./features.md) 