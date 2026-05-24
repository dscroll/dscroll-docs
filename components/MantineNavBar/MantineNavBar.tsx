'use client';

import { useEffect } from 'react';
import { Navbar, useTheme } from 'nextra-theme-docs';
import { Group, Text, Button, useMantineColorScheme } from '@mantine/core';
import { IconBrandX } from '@tabler/icons-react';
import { ColorSchemeControl } from '../ColorSchemeControl/ColorSchemeControl';
import { Logo } from '../Logo/Logo';

/**
 * You can customize the Nextra NavBar component.
 *
 * @since 1.0.0
 *
 */
export const MantineNavBar = () => {
  const { setColorScheme } = useMantineColorScheme();
  const { theme } = useTheme();

  useEffect(() => {
    if (theme) {
      setColorScheme(theme === 'dark' ? 'dark' : theme === 'system' ? 'auto' : 'light');
    }
  }, [theme, setColorScheme]);

  return (
    <Navbar
      logo={
        <Group align="center" gap={4}>
          <Logo />

        </Group>
      }
      // Odude X (Twitter)
      chatLink="https://x.com/dscrollhq"
      chatIcon={<IconBrandX size={18} />}
      projectLink="https://github.com/dscroll"
    >
      <ColorSchemeControl key="color-scheme-control" />
      <Button key="dashboard-button" component="a" href="https://manager.dscroll.com" target="_blank">
        Manager
      </Button>
      <Button key="dashboard-button" component="a" href="https://app.dscroll.com" target="_blank">
        Showcase
      </Button>
    </Navbar>
  );
};
