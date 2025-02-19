import { Meta, StoryFn } from "@storybook/react";
import Button from "./index";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    children: {
      control: { type: "text" },
      defaultValue: "Click Me",
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

// ✅ 기본 버튼 (Filled, Small)
export const Default = Template.bind({});
Default.args = {
  size: "small",
  variant: "filled",
  children: "Default",
};

// ✅ Medium 크기 버튼
export const size: StoryFn<typeof Button> = (args) => (
  <div style={{ display: "flex", gap: "10px", width: "100%" }}>
    <Button {...args} size="small">
      Small
    </Button>
    <Button {...args} size="medium">
      Medium
    </Button>
    <Button {...args} size="large">
      Large
    </Button>
  </div>
);
size.args = {
  variant: "filled",
};

size.parameters = {
  controls: { disable: true },
}

// ✅ Outlined 버튼 스타일
export const Outlined = Template.bind({});
Outlined.args = {
  size: "medium",
  variant: "outlined",
  children: "Outlined",
};

// ✅ 비활성화된 버튼
export const Disabled = Template.bind({});
Disabled.args = {
  size: "medium",
  variant: "filled",
  disabled: true,
  children: "Disabled",
};
