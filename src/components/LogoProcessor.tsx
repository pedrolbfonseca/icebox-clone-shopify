import { useEffect, useState } from 'react';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';

interface LogoProcessorProps {
  logoUrl: string;
  alt: string;
  className: string;
  loading?: "eager" | "lazy";
  draggable?: boolean;
}

const LogoProcessor = ({ logoUrl, alt, className, loading = "eager", draggable = false }: LogoProcessorProps) => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string>(logoUrl);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        console.log('Loading logo for background removal...');
        
        // Load the image
        const imageElement = await loadImageFromUrl(logoUrl);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for the processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedLogoUrl(processedUrl);
        
        console.log('Logo background removed successfully');
      } catch (error) {
        console.error('Failed to process logo:', error);
        // Fallback to original logo
        setProcessedLogoUrl(logoUrl);
      } finally {
        setIsProcessing(false);
      }
    };

    // Only process if we detect the logo has a background to remove
    if (logoUrl.includes('b4f1e581-2bf5-4822-8e4c-c3cba8e3e968')) {
      processLogo();
    }
  }, [logoUrl]);

  return (
    <img 
      src={processedLogoUrl}
      alt={alt}
      className={className}
      loading={loading}
      draggable={draggable}
      style={{
        opacity: isProcessing ? 0.7 : 1,
        transition: 'opacity 0.3s ease'
      }}
    />
  );
};

export default LogoProcessor;