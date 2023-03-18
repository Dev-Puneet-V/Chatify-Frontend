import Typography from '.';

export default {
  title: 'Typography',
  component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const Default = Template.bind({});

Default.args = {
  variant: 'body1',
  sx: { color: 'text.primary' },
  children: 'Hello World!',
};
