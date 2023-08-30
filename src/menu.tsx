import { Tabbar, TabbarItem, Group, Cell } from '@vkontakte/vkui';
import { VKIcons } from './icons';
import { Icon28NewsfeedOutline } from '@vkontakte/icons';
const menu = [
  {
    datastory: 'feed',
    text: 'Новости',
  },
  {
    datastory: 'services',
    text: 'Сервисы',
  },
  {
    datastory: 'messages',
    text: 'Сообщения',
  },
  {
    datastory: 'clips',
    text: 'Клипы',
  },
];

export const MainTabbar = (props) => {
  const { className } = props;
  return (
    <Tabbar className={className}>
      {menu.map((item, index) => (
        <TabbarItem data-story={item.datastory} text={item.text}>
          {VKIcons}
        </TabbarItem>
      ))}
    </Tabbar>
  );
};

export const MainCells = () => {
  return (
    <Group>
      {menu.map((item, index) => (
        <Cell
          data-story={item.datastory}
          text={item.text}
          before={<Icon28NewsfeedOutline />}
        >
          {item.text}
        </Cell>
      ))}
    </Group>
  );
};
