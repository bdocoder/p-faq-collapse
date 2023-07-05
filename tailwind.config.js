import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".accordion": {
          marginBottom: "1.5rem",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "520px",

          "& .accordion-header": {
            background: theme("colors.gray.200"),
            borderRadius: "6px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "20px",
            fontWeight: 600,
            padding: `${theme("spacing.6")} ${theme("spacing.10")}`,

            "& .caret": {
              width: "12px",
              height: "12px",
              borderBottom: `3px solid ${theme("colors.neutral.600")}`,
              borderRight: `3px solid ${theme("colors.neutral.600")}`,
              transform: "rotate(-45deg)",
            },
          },

          "&.active .caret": {
            transform: "rotate(45deg)",
          },

          "& .accordion-body": {
            padding: `${theme("spacing.4")} ${theme("spacing.6")}`,
            fontSize: "18px",
            display: "none",
          },

          "&.active .accordion-body": {
            display: "block",
          },
        },
      });
    }),
  ],
};
