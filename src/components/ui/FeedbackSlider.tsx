import { styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import { FeedbackCard } from "./FeedbackCard";
import { FeedbackSliderProps } from "../../types";

import "swiper/swiper-bundle.css";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";

export function FeedbackSlider(props: FeedbackSliderProps) {
  const { items } = props;
  return (
    <>
      <StyledSwiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {items.map((data) => {
          return (
            <SwiperSlide key={data.title}>
              <FeedbackCard {...data} />
            </SwiperSlide>
          );
        })}
      </StyledSwiper>
    </>
  );
}

const StyledSwiper = styled(Swiper)({
  "&": {
    padding: "12px",
  },

  "& .swiper-pagination": {
    marginBottom: "-14px",
  },
  "& .swiper-pagination .swiper-pagination-bullet": {
    background: "#E6ECF8",
    border: "2px solid #95979b",
    width: "15px",
    height: "15px",
    margin: "0 6px",
  },

  "& .swiper-pagination .swiper-pagination-bullet-active": {
    background: cssMainColors.primary,
    borderColor: cssMainColors.primary,
  },
});
