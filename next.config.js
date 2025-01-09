const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/appointment',
        destination: '/appointment.html',
      },
    ];
  },
};

module.exports = nextConfig;

