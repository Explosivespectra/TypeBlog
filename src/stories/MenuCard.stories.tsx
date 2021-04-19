import { Story, Meta } from "@storybook/react";

import {
  MenuCard,
  MenuCardProps,
} from "../components/pageComponents/MenuPage/ChildComponents/MenuCard";

export default {
  title: "Example/MenuCard",
  component: MenuCard,
} as Meta;

const Template: Story<MenuCardProps> = (args) => <MenuCard {...args} />;

export const MoonPie = Template.bind({});
MoonPie.args = {
  name: "Moon Pie",
  rarity: 4,
  imgFileName: "moon_pie.png",
  id: 10,
};
