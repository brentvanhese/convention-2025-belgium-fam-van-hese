import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

import familyPhoto from "@/_assets/_images/familyLensCloth.JPG";
import familyPhoto1 from "@/_assets/_images/familyPhotoBornem.jpg";
import familyPhoto2 from "@/_assets/_images/familyRiver.jpg";
import familyPhoto3 from "@/_assets/_images/davidAndBrentBbq.jpg";
import familyPhoto4 from "@/_assets/_images/davidAndDeboraVacation.jpg";
import familyPhoto5 from "@/_assets/_images/familyFrame.jpg";
import familyPhoto6 from "@/_assets/_images/familyTheDam.jpg";

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
  const [currentSlide, setCurrentSlide] = useState(1);

  const images = [
    familyPhoto,
    familyPhoto1,
    familyPhoto2,
    familyPhoto3,
    familyPhoto4,
    familyPhoto5,
    familyPhoto6,
  ];

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

  useEffect(() => {
    if (!api) return;

    const updateSlideOpacity = () => {
      const currentIndex = api.selectedScrollSnap();
      const slides = api.slideNodes();

      // Update current slide number
      setCurrentSlide(currentIndex + 1);

      slides.forEach((slide, index) => {
        const card = slide.querySelector("[data-slide-card]");
        if (card) {
          if (index === currentIndex) {
            card.setAttribute("data-inactive", "false");
          } else {
            card.setAttribute("data-inactive", "true");
          }
        }
      });
    };

    // Set initial opacity
    updateSlideOpacity();

    // Listen for slide changes
    api.on("select", updateSlideOpacity);

    return () => {
      api.off("select", updateSlideOpacity);
    };
  }, [api]);

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
    <div className={className}>
      <Carousel
        setApi={setApi}
        className="w-full mx-auto max-w-3xs md:max-w-2xl lg:max-w-4xl select-none"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card
                  data-slide-card
                  className="py-0 transition-opacity duration-300 data-[inactive=true]:opacity-50"
                >
                  <CardContent className="flex-1 aspect-square items-center justify-center p-4">
                    <img
                      src={image}
                      alt={`Carousel item ${index + 1}`}
                      className="w-full object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={() => handleManualNavigation("prev")} />
        <CarouselNext onClick={() => handleManualNavigation("next")} />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        Slide {currentSlide} of {images.length}
      </div>
    </div>
  );
};
