import { Box, Heading, Image, Tabs } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark as dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

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

export default function Notes() {
  const [md, setMd] = useState(mdText);

  function MarkdownPreview() {
    return (
      <Box>
        <ReactMarkdown
          children={md}
          components={{
            h1({ children }) {
              return (
                <Heading textStyle={"2xl"} fontWeight={"bold"}>
                  {children}
                </Heading>
              );
            },
            code({ node, inline, className, children, ...props }) {
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
              return <Box>{children}</Box>;
            },
            img({ src }) {
              return <Image src={src} />;
            },
          }}
        />
      </Box>
    );
  }

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch(mdPath);
  //     const text = await res.text();
  //     console.log({ text });
  //     setMd(text);
  //   })();
  // }, []);

  return (
    <Box>
      <Tabs.Root defaultValue={"preview"} w={"fit-content"}>
        <Tabs.List>
          <Tabs.Trigger value="code">Code</Tabs.Trigger>
          <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="code"></Tabs.Content>
        <Tabs.Content value="preview">
          <MarkdownPreview />
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
}
