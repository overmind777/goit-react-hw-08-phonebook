import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from './AppBar/AppBar';

export default function SharedLayout() {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
