/** @type {import('next').NextConfig} */
const nextConfig = {
  dangerouslyAllowSVG: true,
    images: {
        domains: ["portfolio-image-store.s3.ap-south-1.amazonaws.com"],
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        
      },

    
    

};

export default nextConfig;
