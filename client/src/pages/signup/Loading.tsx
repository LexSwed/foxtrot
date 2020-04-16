import React from 'react';
import { Stack, Spinner } from '@fxtrot/edge';

const Loading: React.FC = () => {
  return (
    <Stack align="center">
      <Spinner size="xl" tone="brand" />
    </Stack>
  );
};

export default Loading;
