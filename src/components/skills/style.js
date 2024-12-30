const SkillsContainer = {
    display: 'grid',
    gap: '2rem',
  
    '@media (min-width: 468px)': {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  
    '@media (min-width: 994px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  };
  
  const SkillsContent = (color, backgroundAlt) => ({
    width: '12rem',
    height: '10rem',
    borderRadius: '25px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem',
    overflow: 'hidden',
    transition: '0.5s',
    flexDirection: 'column',
    gap: '1rem',
  
    h4: {
      zIndex: 1,
    },
  
    img: {
      zIndex: 1,
    },
  
    '.border::before': {
      content: "''",
      position: 'absolute',
      width: '5rem',
      height: '17rem',
      left: '4.5rem',
      top: '-40%',
      background: color,
      animation: 'barra 6s linear infinite',
      borderRadius: '10px',
    },
  
    '@keyframes barra': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  
    '.border::after': {
      content: "''",
      position: 'absolute',
      inset: '5px',
      background: backgroundAlt,
      borderRadius: '20px',
    },
  });
  
  
  
  export { SkillsContainer, SkillsContent };
  