# tfsInput <Badge type="tip" text="0.9.8" />

## Props

| **Prop**       | **Type** | **Default Value** | **Description**                                    |
| -------------- | -------- | ----------------- | -------------------------------------------------- |
| `label`        | String   | `"Label"`         | Text displayed as a floating label.                |
| `val`          | String   | `"Input Value"`   | Bound value for input.                             |
| `placehold`    | String   | `"Placeholder"`   | Placeholder text for input.                        |
| `primaryColor` | String   | `"#2563eb"`       | Customizes the primary color.                      |
| `textColor`    | String   | `"#27272a"`       | Customizes the text color.                         |
| `theme`        | String   | `"auto"`          | Customizes the theme (e.g., light, dark, or auto). |

## Emits

| **Event**    | **Payload** | **Description**                                          |
| ------------ | ----------- | -------------------------------------------------------- |
| `update:val` | `String`    | Emits the updated input value for v-model compatibility. |
