import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface ProjectImage {
  src: string;
  title?: string;
  synthesis?: string;
  span?: string;
}

interface CarouselProps {
  images: ProjectImage[];
}

export function Carousel({ images }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden w-full h-full rounded-t-xl group" ref={emblaRef}>
      <div className="flex h-full">
        {images.map((image, index) => (
          <div className="flex-[0_0_100%] min-w-0 h-full relative" key={index}>
            <img 
              src={image.src} 
              alt={image.title || `Slide ${index}`} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 to-transparent opacity-60" />
          </div>
        ))}
      </div>
      
      {/* Controls */}
      <button 
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-bg)]/50 text-[var(--color-text)] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] backdrop-blur-sm"
      >
        <ChevronLeft size={16} />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-bg)]/50 text-[var(--color-text)] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] backdrop-blur-sm"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
