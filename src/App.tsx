import { useState } from 'react'

function App() {
  const [demoActive, setDemoActive] = useState(true)

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
      minHeight: '100vh',
    }}>
      {/* Premium Dashboard Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '1.5rem',
        borderBottom: '1px solid hsl(var(--color-border))',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
            <span style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: 'hsl(var(--emerald))',
              boxShadow: '0 0 10px hsl(var(--emerald) / 0.5)',
            }} />
            <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0 }}>
              ZENITH
            </h1>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '0.25rem 0.6rem',
              borderRadius: '99px',
              background: 'hsl(var(--emerald) / 0.1)',
              color: 'hsl(var(--emerald))',
              border: '1px solid hsl(var(--emerald) / 0.2)',
            }}>
              Active
            </span>
          </div>
          <p style={{ fontSize: '0.875rem', margin: 0 }}>
            Asset & Wealth Analytics Portal • Enterprise Demo
          </p>
        </div>

        {/* Demo Status & Connection */}
        <div className="glass-panel" style={{
          padding: '0.5rem 1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: '0.875rem',
          borderRadius: '12px',
        }}>
          <span style={{ color: 'hsl(var(--text-secondary))' }}>Node Status:</span>
          <span style={{ fontWeight: 600, color: 'hsl(var(--cyan))' }}>Connected</span>
        </div>
      </header>

      {/* Main Grid Placeholder */}
      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
      }}>
        {/* KPI Card 1: Assets */}
        <div className="glass-panel" style={{
          padding: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.875rem', color: 'hsl(var(--text-secondary))', fontWeight: 500 }}>
              Treasury Holdings
            </span>
            <span style={{ color: 'hsl(var(--gold))', fontSize: '1.25rem' }}>★</span>
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-sans)', color: 'hsl(var(--text-primary))' }}>
              $2,480,950.00
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem', fontSize: '0.875rem' }}>
              <span style={{ color: 'hsl(var(--emerald))', fontWeight: 600 }}>+4.25%</span>
              <span style={{ color: 'hsl(var(--text-muted))' }}>since last rebalance</span>
            </div>
          </div>
        </div>

        {/* KPI Card 2: Projected Yield */}
        <div className="glass-panel" style={{
          padding: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.875rem', color: 'hsl(var(--text-secondary))', fontWeight: 500 }}>
              Projected APY
            </span>
            <span style={{ color: 'hsl(var(--cyan))', fontSize: '1.25rem' }}>⚡</span>
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-sans)', color: 'hsl(var(--text-primary))' }}>
              8.42%
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem', fontSize: '0.875rem' }}>
              <span style={{ color: 'hsl(var(--cyan))', fontWeight: 600 }}>Optimized</span>
              <span style={{ color: 'hsl(var(--text-muted))' }}>under current profile</span>
            </div>
          </div>
        </div>

        {/* KPI Card 3: System Status / Action */}
        <div className="glass-panel" style={{
          padding: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '1rem',
        }}>
          <div>
            <span style={{ fontSize: '0.875rem', color: 'hsl(var(--text-secondary))', fontWeight: 500 }}>
              System Integration
            </span>
            <p style={{ fontSize: '0.875rem', color: 'hsl(var(--text-muted))', marginTop: '0.5rem' }}>
              Bootstrap completed. Standing by for real-time market data hooks.
            </p>
          </div>
          <button 
            onClick={() => setDemoActive(!demoActive)}
            style={{
              padding: '0.75rem 1.2rem',
              borderRadius: '8px',
              border: '1px solid hsl(var(--color-border))',
              background: demoActive ? 'hsl(var(--bg-card))' : 'hsl(var(--emerald) / 0.1)',
              color: demoActive ? 'hsl(var(--text-primary))' : 'hsl(var(--emerald))',
              fontWeight: 600,
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'var(--transition-smooth)',
            }}
          >
            {demoActive ? 'Simulation Ready' : 'Awaiting Peer Review'}
          </button>
        </div>
      </main>

      {/* Bootstrapping Notification Banner */}
      <footer className="glass-panel" style={{
        padding: '1.25rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, hsl(var(--bg-surface) / 0.8), hsl(var(--bg-card) / 0.8))',
        borderLeft: '4px solid hsl(var(--cyan))',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <h3 style={{ fontSize: '1rem', color: 'hsl(var(--cyan))', fontWeight: 600 }}>
            Iterative Step 1: Complete
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'hsl(var(--text-secondary))' }}>
            Fully styled design tokens and skeleton canvas. Awaiting your approval before adding domain models.
          </p>
        </div>
        <div style={{ fontSize: '0.875rem', color: 'hsl(var(--text-muted))', fontWeight: 500 }}>
          v1.0.0-bootstrap
        </div>
      </footer>
    </div>
  )
}

export default App
