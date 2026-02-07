import App from '@/App.jsx';
import { useState } from 'react';
import AppYes from '@/AppYes.jsx';

export default function Router() {
  const [yesPage, setYesPage] = useState(false);

  if (!yesPage) {
    return (
      <>
        <App onYesClickHandler={setYesPage} />
      </>
    );
  } else {
    return (
      <>
        <AppYes />
      </>
    );
  }
}
