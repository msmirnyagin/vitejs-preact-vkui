import { memo, FC } from 'preact/compat';
import {
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  NavIdProps,
  Button,
  Avatar,
} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export const Home: FC<NavIdProps> = memo((props: NavIdProps) => {
  const routeNavigator = useRouteNavigator();
  return (
    <Panel {...props}>
      <PanelHeader>Home</PanelHeader>
      <Group header={<Header mode="secondary">Items</Header>}>
        <SimpleCell>Ответ</SimpleCell>
        <Button onClick={() => routeNavigator.push('/about')}>
          На главную
        </Button>
      </Group>
    </Panel>
  );
});
