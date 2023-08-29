import { render } from 'preact';
import { App } from './app.tsx';
import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  WebviewType,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';
import bridge from '@vkontakte/vk-bridge';
import router from './routes';
/** Метод инициализирующий мини-апп */
bridge.send('VKWebAppInit');

const Main = () => {
  return (
    <RouterProvider router={router}>
      <ConfigProvider webviewType={WebviewType.INTERNAL}>
        <AdaptivityProvider>
          <AppRoot>
            <App />
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </RouterProvider>
  );
};

render(<Main />, document.getElementById('app')!);
