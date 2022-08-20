import { createStyles, Text } from "@mantine/core";

const useStyles2 = createStyles((theme) => ({
  bold: {
    fontWeight: "700",
    fontSize: "110%",
  },

  italic: {
    fontStyle: "italic",
  },

  line: {
    textDecoration: "line-through",
  },
  underline: {
    textDecoration: "underline",
  },
  default: {
    marginBlock: "0.5rem",
    fontSize: "1.125rem",
    lineBreak: "anywhere",
  },
}));

export default function MyCustomText({ text }) {
  const { classes } = useStyles2();
  if (text?.href) {
    return (
      <a href={text.href} className="text-primary underline bg-emerald-100">
        {text?.plain_text || "Embeded Link"}
      </a>
    );
  }

  console.log({text});
  return (
    <>
      <p
        color="white"
        className={[
          text?.annotations?.bold ? classes.bold : "",
          text?.annotations?.italic ? classes.italic : "",
          text?.annotations?.strikethrough ? classes.line : "",
          text?.annotations?.underline ? classes.underline : "",
          classes.default,
        ].join(" ")}
        // style={text?.annotations?.color !== "default" ? { borderBottomWidth: 2, borderBottomColor: text?.annotations?.color } : {}}
        style={
          text?.annotations?.color !== "default"
            ? {
                color: text?.annotations?.color,
                padding: "1px 1px",
                borderRadius: "1px",
              }
            : { color: "darkgray" }
        }
      >
        {text?.plain_text}
      </p>
    </>
  );
}
