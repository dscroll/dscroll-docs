import { Box, Stack, Text } from '@mantine/core';

export const Content = () => {
  return (
    <>
      <Stack align="center" my={32}>
        <Box lightHidden>
          <Text
            my={32}
            fz={32}
            ta="center"
            variant="gradient"
            gradient={{ from: 'yellow', to: 'violet' }}
            style={{
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
            }}
          >
            DScroll
          </Text>
        </Box>

      </Stack>
    </>
  );
};
