module.exports = (phase, { defaultConfig }) => {
	/**
	 * @type {import('next').NextConfig}
	 */
	const nextConfig = {
        phase,optimization,minimize = false
	}
	return nextConfig
  }