import React from 'react';
import {MainPage} from '../src/components/main-page/MainPage'

export const routes: Array<{ path: string; component: React.ComponentType; fetch?: (param: { dispatch: any }) => any }> = [
  { path: '/search', component: MainPage }
];