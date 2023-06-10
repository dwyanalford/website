// components/MainContainer.js
import { useContext } from 'react';
import { GlobalContext } from '@/context/GlobalState';

export default function MainContainer({ Component, pageProps }) {
  const { state } = useContext(GlobalContext);

  const mainContainerClass = state.isOverlayActive ? 'disable-pointer-events' : '';

  return (
    <div className={mainContainerClass}>
      <Component {...pageProps} />
    </div>
  );
}
