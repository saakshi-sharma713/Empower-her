import * as React from "react";
import { Card } from "./card";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface CarouselProps {
  images: string[];
  width?: string;  // Tailwind width, e.g., "w-96"
  height?: string; // Tailwind height, e.g., "h-64"
}

export function Carousal({ images, width = "w-96", height = "h-64" }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={cn("flex flex-col items-center gap-4")}>
      <Card className={cn(width, height, "flex flex-col items-center relative overflow-hidden")}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={cn("rounded-md object-cover w-full h-full")}
        />

        {/* Previous Button */}
        <Button
          variant="outline"
          size="sm"
          className="absolute left-2 top-1/2 -translate-y-1/2"
          onClick={prevImage}
        >
          &#10094;
        </Button>

        {/* Next Button */}
        <Button
          variant="outline"
          size="sm"
          className="absolute right-2 top-1/2 -translate-y-1/2"
          onClick={nextImage}
        >
          &#10095;
        </Button>
      </Card>

      {/* Indicators */}
      <div className="flex gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={cn(
              "w-3 h-3 rounded-full",
              idx === currentIndex ? "bg-blue-600" : "bg-gray-300"
            )}
          />
        ))}
      </div>
    </div>
  );
}
