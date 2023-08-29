import { Root, View } from '@vkontakte/vkui';
import { Home } from './pages/home.tsx';
import { About } from './pages/about.tsx';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

export function App() {
  const { view: activeView, panel: activePanel } = useActiveVkuiLocation();
  return (
    <Root activeView={activeView}>
      <View nav="default_view" activePanel={activePanel}>
        <Home nav="home_panel"></Home>
        <About nav="about_panel"></About>
      </View>
    </Root>
  );
}
