// src/button.tsx
export default function Button() {
  return (
    <div style={{width: '100%', height: '50px', background: '#dccac7', color: 'black', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <button style={{textDecoration: 'none'}}>Accueil</button>
      <button style={{textDecoration: 'none'}}>Services</button>
      <button style={{textDecoration: 'none'}}>À propos</button>
      <button style={{textDecoration: 'none'}}>Contact</button>
    </div>
  );
}