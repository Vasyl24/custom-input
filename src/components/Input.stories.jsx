import { fn } from '@storybook/test';

import Input from './Input/Input';

export const ActionsData = {
  onArchiveInput: fn(),
  onPinInput: fn(),
};

export default {
  component: Input,
  title: 'Input',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {
    input: {
      id: '1',
      title: 'Input',
      state: 'INPUT_INBOX',
    },
  },
};

export const Pinned = {
  args: {
    input: {
      ...Default.args.input,
      state: 'INPUT_PINNED',
    },
  },
};

export const Archived = {
  args: {
    input: {
      ...Default.args.input,
      state: 'INPUT_ARCHIVED',
    },
  },
};
