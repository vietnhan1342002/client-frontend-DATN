'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/redux/store';

// Tạo một instance của store duy nhất
const store = makeStore();

export default function StoreProvider({ children }: { children: ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}
