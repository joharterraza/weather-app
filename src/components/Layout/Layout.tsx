import React from 'react';
import styles from './Layout.module.css';

import ThemeToggler from '../ThemeToggler/ThemeToggler';

interface LayoutProps {
    children: React.ReactNode
};

const Layout: React.FC<LayoutProps> = ( {children} ) => {
    return (
        <div className={styles.layout}>
            <header>
                <strong>Weather app</strong>
                <ThemeToggler />
            </header>
            <main className={styles.content}>{ children }</main>
        </div>
    )
}

export default Layout;