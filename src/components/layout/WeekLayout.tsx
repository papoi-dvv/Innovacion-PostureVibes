import type { ReactNode } from 'react';
import '../../styles/WeekLayout.css';

interface WeekLayoutProps {
    title: string;
    subtitle?: string;
    children: ReactNode;
}

export default function WeekLayout({ title, subtitle, children }: WeekLayoutProps) {
    return (
        <div className="week-container">
            <header className="week-header">
                <h1 className="week-title">{title}</h1>
                {subtitle && <p className="week-subtitle">{subtitle}</p>}
            </header>

            <main className="week-content">
                {children}
            </main>

            <footer style={{ marginTop: '80px', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem' }}>
                <p>© 2025 Posture Vibes - Innovación Tecnológica</p>
            </footer>
        </div>
    );
}
