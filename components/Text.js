export const Text = ({ text }) => {
  if (text?.href) {
    return (
      <a href={text.href} className="text-primary underline bg-emerald-100">
        {text?.plain_text || "Embeded Link"}
      </a>
    );
  }
  return (
    <>
      <p
        className={[
          text?.annotations?.bold ? "text-xl font-extrabold" : "",
          text?.annotations?.code ? "font-mono" : "",
          text?.annotations?.italic ? "italic" : "",
          text?.annotations?.strikethrough ? "line-through" : "",
          text?.annotations?.underline ? "underline" : "",
          "text-lg my-4 w-fit",
        ].join(" ")}
        // style={text?.annotations?.color !== "default" ? { borderBottomWidth: 2, borderBottomColor: text?.annotations?.color } : {}}
        style={
          text?.annotations?.color !== "default"
            ? {
                backgroundColor: text?.annotations?.color,
                padding: "1px 1px",
                borderRadius: "1px",
              }
            : {}
        }
      >
        {text?.plain_text}
      </p>
    </>
  );
};
