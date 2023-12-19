// Cambia jest.config.js a jest.config.cjs
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/src/**/*.test.tsx'],
  moduleNameMapper: {
    // Agrega mapeos si es necesario para los estilos, imágenes, etc.
  },
};
