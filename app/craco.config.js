const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  jest: {
    configure: {
      testEnvironment: 'jsdom',
      reporters: [
        'default',
        ['jest-junit', { outputDirectory: '.', outputName: 'junit-report.xml' }],
      ],
      collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
      coverageReporters: ['text', 'json', 'json-summary', 'cobertura'],
      coverageDirectory: './coverage',
    },
  },
}
