import { useEffect } from 'react';

const ParticlesBackground = () => {
  const styles = {
    particles: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: 0,
      pointerEvents: 'auto' 
    }
  };

  useEffect(() => {
    window.particlesJS.load('particles-js', '/particlesConfig.json', () => {
      console.log('particles.js config loaded');
    });
  }, []);

  return <div id="particles-js" style={styles.particles} />;
};

export default ParticlesBackground;