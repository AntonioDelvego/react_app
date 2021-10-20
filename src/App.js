import React from 'react';
import styles from './App.module.scss';

import { AppRouter } from './router';

export function App() {
    return (
        <div className={styles.App}>
            <AppRouter />
        </div>
    );
}

