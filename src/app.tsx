import {
  Root,
  View,
  SplitLayout,
  SplitCol,
  Panel,
  PanelHeader,
  useAdaptivityConditionalRender,
  usePlatform,
  Platform,
} from '@vkontakte/vkui';
import { Home } from './pages/home.tsx';
import { About } from './pages/about.tsx';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { MainTabbar, MainCells } from './menu.tsx';

export function App() {
  const platform = usePlatform();
  const isVKCOM = platform !== Platform.VKCOM;
  const { viewWidth } = useAdaptivityConditionalRender();
  return (
    <SplitLayout
      header={isVKCOM && <PanelHeader separator={false} />}
      style={{ justifyContent: 'center' }}
    >
      {viewWidth.tabletPlus && (
        <SplitCol
          className={viewWidth.tabletPlus.className}
          fixed
          width={280}
          maxWidth={280}
        >
          <Panel>
            {isVKCOM && <PanelHeader />}
            <MainCells />
          </Panel>
        </SplitCol>
      )}
      <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
        <MainTabbar className={viewWidth.tabletMinus.className} />

        <MainScreens />
      </SplitCol>
    </SplitLayout>
  );
}

const MainScreens = () => {
  const { view: activeView, panel: activePanel } = useActiveVkuiLocation();
  return (
    <Root activeView={activeView}>
      <View nav="default_view" activePanel={activePanel}>
        <Home nav="home_panel"></Home>
        <About nav="about_panel"></About>
      </View>
    </Root>
  );
};
