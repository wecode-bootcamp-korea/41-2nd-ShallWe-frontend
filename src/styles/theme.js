const color = {
  ivory: '#F2D399',
  yellow: '#F2AF5C',
  brown: 'D9814E',
  redBrown: '#BF522A',
  navy: '#004AAD',
  gray: '#F2F2F2',
};

const common = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

const base = {
  width: '1470px',
};

const theme = {
  color,
  base,
  common,
};

export default theme;
