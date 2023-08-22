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
                <span>This is a header</span>
                <ThemeToggler />
            </header>
            <main className='content'>{ children }</main>
        </div>
    )
}

export default Layout;