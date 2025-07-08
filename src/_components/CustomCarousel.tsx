import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type CarouselProps = {
  className?: string;
  autoPlayInterval?: number;
};

export const CustomCarousel = ({
  className,
  autoPlayInterval = 4000,
}: CarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentInterval, setCurrentInterval] = useState(autoPlayInterval);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      const current = api.selectedScrollSnap();
      const total = api.scrollSnapList().length;

      if (current === total - 1) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
      setCurrentInterval(autoPlayInterval);
    }, currentInterval);

    setIntervalId(interval);

    return () => {
      clearInterval(interval);
    };
  }, [api, autoPlayInterval, currentInterval]);

  const handleManualNavigation = (direction: "prev" | "next") => {
    if (!api) return;

    if (intervalId) {
      clearInterval(intervalId);
    }

    if (direction === "prev") {
      api.scrollPrev();
    } else {
      api.scrollNext();
    }

    setCurrentInterval(10000);
  };
  return (
    <Carousel setApi={setApi} className={cn("w-full max-w-xs", className)}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious onClick={() => handleManualNavigation("prev")} />
      <CarouselNext onClick={() => handleManualNavigation("next")} />
    </Carousel>
  );
};
