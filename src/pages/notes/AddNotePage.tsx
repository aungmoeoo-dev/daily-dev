import {
  Button,
  createListCollection,
  Flex,
  Input,
  Select,
  Separator,
  Textarea,
} from "@chakra-ui/react";
import { Field } from "../../components/ui/field";

const list = createListCollection({
  items: [{ label: "Category", value: "category" }],
});

export default function AddNotePage() {
  return (
    <Flex flexDir={{ base: "column", lg: "row-reverse" }} gap={4}>
      <Flex flexDir={"column"} flexBasis={"1/2"} gap={4}>
        <Field label="Title">
          <Input size={"lg"} />
        </Field>
        <Field>
          <Select.Root collection={list} size={{ base: "lg", lg: "sm" }}>
            <Select.Label>Category</Select.Label>
            <Select.Trigger>
              <Select.ValueText placeholder="Select category" />
            </Select.Trigger>
            <Select.Content>
              {list.items.map((item) => (
                <Select.Item item={item} key={item.label}>
                  {item.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </Field>
        <Button>Save</Button>
      </Flex>
      <Field>
        <Textarea
          px={0}
          size={"lg"}
          border={"none"}
          outline={"none"}
          h={"calc(100vh - 120px)"}
          placeholder="Write contents here..."
        />
      </Field>
    </Flex>
  );
}
