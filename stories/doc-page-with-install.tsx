import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/addon-docs/blocks';
import { InstallCommand } from './install-command';

export function makeDocPageWithInstall(command: string) {
  return function DocPageWithInstall() {
    return (
      <>
        <Title />
        <Subtitle />
        <Description />
        <InstallCommand command={command} />
        <Primary />
        <Controls />
        <Stories />
      </>
    );
  };
}
