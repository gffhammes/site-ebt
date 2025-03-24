"use client";

import type { QuestionsCarouselProps } from "@/@types/questions-carousel";
import questionsData from "@/data/questions-data.json";

import { InfiniteRow } from "./infinite-row";
import { CarouselSection, RowContainer } from "./styles";

export const QuestionsCarousel = ({
  rowCount = 2,
  speed = 40,
  pauseOnHover = true,
}: QuestionsCarouselProps) => {
  const questionGroups = Array.from({ length: rowCount }, (_, i) => {
    const start = Math.floor((i * questionsData.length) / rowCount);
    const end = Math.floor(((i + 1) * questionsData.length) / rowCount);
    return questionsData.slice(start, end);
  });

  return (
    <CarouselSection>
      {questionGroups.map((group, index) => (
        <RowContainer key={index}>
          <InfiniteRow
            questions={group}
            direction={index % 2 === 0 ? "left" : "right"}
            speed={speed + index * 5}
            pauseOnHover={pauseOnHover}
          />
        </RowContainer>
      ))}
    </CarouselSection>
  );
};
