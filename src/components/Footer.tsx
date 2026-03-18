export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--card-border)', padding: '3rem 0', marginTop: '5rem', background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Eliel Kwesi Agbeke</h3>
          <p style={{ color: 'var(--text-muted)' }}>Full-stack Developer & AI Specialist</p>
        </div>
        
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://linkedin.com/in/eliel-agbeke-7b36282a3/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}>
            LinkedIn
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=brighteliel@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}>
            Email
          </a>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        <p>&copy; {new Date().getFullYear()} Eliel Kwesi Agbeke. All rights reserved.</p>
      </div>
    </footer>
  );
}
