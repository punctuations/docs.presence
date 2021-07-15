# Queries

Customization is a huge thing when it comes to — well, anything. That's why I ensured it would be included in this project.

## Available Queries

| Query         | Type              | Outcome                                                                                                           | Notes                                                            |
| ------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| type          | "base64" \| "png" | returns base64 encoding of image or png image.                                                                    | Only accepts 'base64' or 'png', else it will return just the svg |
| rounded       | boolean           | rounds the corners of the image.                                                                                  | n/a                                                              |
| theme         | string            | uses theme presets located within [themes.json] (./themes.json).                                                  | n/a                                                              |
| icon          | hex               | changes the icon colo(u)r of the current platform.                                                                | colo(u)r cannot contain "#", ex. good: "c4c4c4", bad: "#c4c4c4"  |
| bg            | hex               | changes the background colo(u)r.                                                                                  | "                                                                |
| text          | hex               | changes the colo(u)r of any text that isn't specified otherwise by other queries.                                  | "                                                                |
| desc          | hex               | changes the description/bio colo(u)r.                                                                             | "                                                                |
| stats         | hex               | changes the colo(u)r of the svg or the text that accompanies stats_text.                                          | "                                                                |
| stats_text    | hex               | changes the colo(u)r of the text that accompanies any number or svg of statistics.                                | "                                                                |
| accent        | hex               | changes the colo(u)r of the border of any secondary info (ex. github/card, twitter/card).                         | "                                                                |
| show_language | boolean           | toggles the visibility of language on GitHub images.                                                              | n/a                                                              |
| show_icon     | boolean           | toggles the visibility of the icon on spotify/song & spotify/track                                                | n/a                                                              |
| top           | boolean           | only appears on spotify/song & spotify/track, changes the position of song text to the top.                       | n/a                                                              |
| bottom        | boolean           | only appears on spotify/song & spotify/track & discord/guild, changes the position of text to the bottom.         | n/a                                                              |
| index         | number            | only appears on spotify/song & spotify/track, changes the most popular colo(u)r from the image as the background. | n/a                                                              |