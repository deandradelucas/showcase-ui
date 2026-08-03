import type { Preview } from "@storybook/nextjs-vite"
import { useDarkMode } from "storybook-dark-mode"
import { useEffect } from "react"
import "../app/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },

    darkMode: {
      stylePreview: true,
    },
  },

  decorators: [
    (Story) => {
      const isDark = useDarkMode()

      useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark)
      }, [isDark])

      return <Story />
    },
  ],
}

export default preview
