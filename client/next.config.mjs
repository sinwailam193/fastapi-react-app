/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    async rewrites() {
        return [
            {
                source: "/api",
                destination: "http://localhost:8000",
            },
        ];
    },
};

export default nextConfig;