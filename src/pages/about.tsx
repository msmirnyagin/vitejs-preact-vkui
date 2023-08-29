import { memo, FC } from 'preact/compat';
import {
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  NavIdProps,
  PanelHeaderBack,
} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
export const About: FC<NavIdProps> = memo((props: NavIdProps) => {
  const routeNavigator = useRouteNavigator();
  return (
    <Panel {...props}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
      >
        About
      </PanelHeader>

      <Group header={<Header mode="secondary">Строки</Header>}>
        <SimpleCell>Привет</SimpleCell>
        <SimpleCell>Ответ</SimpleCell>
      </Group>
    </Panel>
  );
});
