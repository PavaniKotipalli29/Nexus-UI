import React from 'react';
import SearchBar from './components/ui/SearchBar';

const App = () => {
  const containerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '4rem 2rem',
    backgroundColor: '#f9fafb',
    minHeight: '100vh',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  const sectionStyle = {
    marginBottom: '4rem'
  };

  const headingStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '2rem',
    borderBottom: '2px solid #e5e7eb',
    paddingBottom: '0.5rem'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem'
  };

  const cardStyle = {
    padding: '1.5rem',
    backgroundColor: '#fff',
    borderRadius: '1rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  const labelStyle = {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  return (
    <div style={containerStyle}>
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}>
          Search Bar Variants Preview
        </h1>
        <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
          A collection of premium, production-ready search components.
        </p>
      </header>

      {/* Basic Variants */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Basic Style Variants</h2>
        <div style={gridStyle}>
          <div style={cardStyle}>
            <span style={labelStyle}>Default</span>
            <SearchBar variant="default" />
          </div>
          <div style={cardStyle}>
            <span style={labelStyle}>Outline</span>
            <SearchBar variant="outline" />
          </div>
          <div style={cardStyle}>
            <span style={labelStyle}>Filled</span>
            <SearchBar variant="filled" />
          </div>
          <div style={cardStyle}>
            <span style={labelStyle}>Ghost</span>
            <SearchBar variant="ghost" />
          </div>
          <div style={cardStyle}>
            <span style={labelStyle}>Underline</span>
            <SearchBar variant="underline" />
          </div>
          <div style={cardStyle}>
            <span style={labelStyle}>Minimal</span>
            <SearchBar variant="minimal" />
          </div>
          <div style={cardStyle}>
            <span style={labelStyle}>Elevated</span>
            <SearchBar variant="elevated" />
          </div>
          <div style={cardStyle}>
            <span style={labelStyle}>Soft</span>
            <SearchBar variant="soft" />
          </div>
        </div>
      </section>

      {/* Shape Variants */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Shape Variants</h2>
        <div style={gridStyle}>
          <div style={cardStyle}>
            <span style={labelStyle}>Rounded (Default)</span>
            <SearchBar shape="rounded" variant="default" />
          </div>
          <div style={cardStyle}>
            <span style={labelStyle}>Pill</span>
            <SearchBar shape="pill" variant="default" />
          </div>
          <div style={cardStyle}>
            <span style={labelStyle}>Square</span>
            <SearchBar shape="square" variant="default" />
          </div>
        </div>
      </section>

      {/* Modern Variants */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Modern UI Variants</h2>
        <div style={gridStyle}>
          <div style={cardStyle}>
            <span style={labelStyle}>Glass</span>
            <div style={{ padding: '2rem', background: 'linear-gradient(135deg, #6366f1, #ec4899)', borderRadius: '0.5rem' }}>
              <SearchBar variant="glass" placeholder="Glass search..." />
            </div>
          </div>
          <div style={cardStyle}>
            <span style={labelStyle}>Neumorphic</span>
            <div style={{ padding: '2rem', background: '#e0e5ec', borderRadius: '0.5rem' }}>
              <SearchBar variant="neumorphic" placeholder="Neumorphic..." />
            </div>
          </div>
          <div style={cardStyle}>
            <span style={labelStyle}>Gradient Border</span>
            <SearchBar variant="gradient" placeholder="Premium search..." />
          </div>
          <div style={cardStyle}>
            <span style={labelStyle}>Dark Mode</span>
            <SearchBar variant="dark" placeholder="Dark search..." />
          </div>
        </div>
      </section>

      {/* Functional Demo */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Functional & Size States</h2>
        <div style={gridStyle}>
          <div style={cardStyle}>
            <span style={labelStyle}>Loading State</span>
            <SearchBar loading />
          </div>
          <div style={cardStyle}>
            <span style={labelStyle}>Disabled</span>
            <SearchBar disabled value="Locked search" />
          </div>
          <div style={cardStyle}>
            <span style={labelStyle}>Icon Right</span>
            <SearchBar iconPosition="right" />
          </div>
          <div style={cardStyle}>
            <span style={labelStyle}>Small (36px)</span>
            <SearchBar size="sm" shape="pill" />
          </div>
          <div style={cardStyle}>
            <span style={labelStyle}>Medium (44px)</span>
            <SearchBar size="md" shape="pill" />
          </div>
          <div style={cardStyle}>
            <span style={labelStyle}>Large (52px)</span>
            <SearchBar size="lg" shape="pill" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
