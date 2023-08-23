import React from 'react';
import './Layout.css';

import ThemeToggler from '../ThemeToggler/ThemeToggler';

interface LayoutProps {
    children: React.ReactNode
};

const Layout: React.FC<LayoutProps> = ( {children} ) => {
    return (
        <div className='layout'>
            <header>
                <span>Weather app</span>
                <ThemeToggler />
            </header>
            <main className='content'>{ children }</main>
        </div>
    )
}

export default Layout;