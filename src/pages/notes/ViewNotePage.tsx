import { Box, Link, Tabs, Textarea } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark as dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prose } from "../../components/ui/prose";
import remarkGfm from "remark-gfm";

const mdPath =
  "https://raw.githubusercontent.com/sannlynnhtun-coding/csharp-course/refs/heads/main/README.md";

const mdText = `
# Hello

## World

![C# .NET Training](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfNxFXx_X7eFfOleWObEU6UMN-TQaKs8eqWA&s)

~~~cs
class Calculator {
  public int Add(int a, int b) {
      return a + b;
  }

  public double Add(double a, double b) {
      return a + b;
  }

  public int Add(int a, int b, int c) {
      return a + b + c;
  }
}
~~~

Self Study
- [x] [ASP.NET Core + GraphQL](https://github.com/sannlynnhtun-coding/SLHDotNetCore.GraphqlExample)
- [x] ASP.NET Core + gRPC
- [x] [C# Examples](https://github.com/sannlynnhtun-coding/csharp-examples)
`;

export default function ViewNotePage() {
  const [md, setMd] = useState(mdText);

  function MarkdownPreview() {
    return (
      <Prose overflow={"auto"}>
        <ReactMarkdown
          remarkPlugins={[[remarkGfm]]}
          components={{
            pre({ children, ...props }) {
              return (
                <pre style={{ padding: "0px" }} {...props}>
                  {children}
                </pre>
              );
            },
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={dark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            ul({ children, ...props }) {
              return (
                <ul style={{ overflow: "auto" }} {...props}>
                  {children}
                </ul>
              );
            },
            a({ children, ...props }) {
              return (
                <Link color={"blue.500"} {...props}>
                  {children}
                </Link>
              );
            },
          }}
        >
          {md}
        </ReactMarkdown>
      </Prose>
    );
  }

  useEffect(() => {
    // (async () => {
    //   const res = await fetch(mdPath);
    //   const text = await res.text();
    //   setMd(text);
    // })();
  }, []);

  return (
    <Box>
      <Tabs.Root
        defaultValue={"preview"}
        w={"auto"}
        position={"sticky"}
        top={0}
      >
        <Tabs.List>
          <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
          <Tabs.Trigger value="code">Code</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="code">
          <Textarea
            h={"calc(100vh - 180px)"}
            value={md}
            onChange={(e) => setMd(e.target.value)}
          />
        </Tabs.Content>
        <Tabs.Content value="preview" display={"grid"}>
          <MarkdownPreview />
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
}
