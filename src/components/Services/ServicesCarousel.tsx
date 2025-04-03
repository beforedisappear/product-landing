"use client";

import "./Services.css";

import { Context } from "@/providers/ContextProvider";
import { ServicesCarouselSlide } from "./ServicesCarouselSlide";
import { ServicesCarouselThumb } from "./ServicesCarouselThumb";

import useEmblaCarousel from "embla-carousel-react";
import { use, useCallback, useEffect, useState } from "react";

import type { ServicesSlide } from "./Services.types";

interface Props {
  slides: ServicesSlide[];
  slideBtn: string;
}

export function ServicesCarouselWithThumbs({ slides, slideBtn }: Props) {
  const context = use(Context);

  if (!context) throw new Error("CONTEXT_UNDEFINED");

  const { setShowContactUsModal } = context;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ align: "start" });
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const OpenContactUsModel = useCallback(() => {
    setShowContactUsModal(true);
  }, []);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="flex flex-col gap-y-3">
      <div className="embla" ref={emblaMainRef}>
        <div className="embla__container">
          {slides.map((el, i) => (
            <ServicesCarouselSlide
              key={i}
              {...el}
              slideBtn={slideBtn}
              onBtnClick={OpenContactUsModel}
            />
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides.map((item, index) => (
              <ServicesCarouselThumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
