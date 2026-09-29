"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const boxesRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // =====================================
      // INITIAL STATE
      // =====================================

      // Car starts from left
      gsap.set(carRef.current, {
        x: 0,
        opacity: 1,
      });

      // Welcome hidden initially
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 30,
      });

      // Subtitle hidden initially
      gsap.set(subtitleRef.current, {
        opacity: 0,
        y: 20,
      });

      // All boxes hidden initially
      gsap.set(boxesRef.current, {
        opacity: 0,
        y: 30,
      });

      // =====================================
      // SCROLL TIMELINE
      // =====================================

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // =====================================
      // CAR: LEFT → RIGHT
      // =====================================

      tl.to(
        carRef.current,
        {
          x: "55vw",
          duration: 1,
          ease: "none",
        },
        0
      );

      // =====================================
      // WELCOME APPEARS
      // =====================================

      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.18,
          ease: "power2.out",
        },
        0.55
      );

      // =====================================
      // SUBTITLE APPEARS
      // =====================================

      tl.to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.15,
          ease: "power2.out",
        },
        0.6
      );

      // =====================================
      // BOXES APPEAR
      // =====================================

      tl.to(
        boxesRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.18,
          ease: "power2.out",
        },
        0.55
      );
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main className="bg-[#d3d3d3] text-black">

      {/* ==================================================
          HERO SCROLL SECTION
      ================================================== */}

      <section
        ref={heroRef}
        className="relative h-[200vh]"
      >
        {/* ==================================================
            STICKY VIEWPORT
        ================================================== */}

        <div className="sticky top-0 h-screen overflow-hidden">

          {/* ==================================================
              BOXES
          ================================================== */}

          <div
            ref={boxesRef}
            className="pointer-events-none absolute inset-0 z-30"
          >
            {/* ================= TOP BOXES ================= */}

            <div
              className="
                absolute
                right-[10%]
                top-10
                flex
                gap-2
              "
            >
              {/* 58% BOX */}

              <div
                className="
                  flex
                  h-[150px]
                  w-[290px]
                  flex-col
                  justify-center
                  rounded-xl
                  bg-[#e8ff32]
                  px-8
                "
              >
                <h2 className="text-5xl font-bold">
                  58%
                </h2>

                <p className="mt-2 text-sm">
                  Increase in pick up point use
                </p>
              </div>

              {/* 27% BOX */}

              <div
                className="
                  flex
                  h-[150px]
                  w-[260px]
                  flex-col
                  justify-center
                  rounded-xl
                  bg-[#858585]
                  px-8
                  text-white
                "
              >
                <h2 className="text-5xl font-bold">
                  27%
                </h2>

                <p className="mt-2 text-sm">
                  Increase in pick up point use
                </p>
              </div>
            </div>

            {/* ================= BOTTOM BOX ================= */}

            <div
              className="
                absolute
                bottom-[4%]
                left-1/2
                w-[310px]
                -translate-x-1/2
                rounded-xl
                bg-[#61bdf0]
                px-8
                py-8
              "
            >
              <h2 className="text-5xl font-bold">
                23%
              </h2>

              <p className="mt-2 text-sm">
                Decreased in customer phone calls
              </p>
            </div>
          </div>

          {/* ==================================================
              GREEN STRIP
          ================================================== */}

          <div
            className="
              absolute
              left-0
              top-[34%]
              h-[250px]
              w-full
              bg-[#45d87b]
            "
          />

          {/* ==================================================
              WELCOME CONTENT
          ================================================== */}

          <div
            className="
              absolute
              left-[4%]
              top-[38%]
              z-20
            "
          >
            {/* WELCOME */}

            <h1
              ref={titleRef}
              className="
                text-[clamp(4rem,10vw,9rem)]
                font-black
                uppercase
                leading-none
                tracking-tight
              "
            >
              WELCOME ITFIZ
            </h1>

            {/* SUBTITLE */}

            <p
              ref={subtitleRef}
              className="
                mt-4
                max-w-lg
                text-sm
                text-black/60
                md:text-base
              "
            ></p>
          </div>

          {/* ==================================================
              CAR
          ================================================== */}

          <div
            ref={carRef}
            className="
              pointer-events-none
              absolute
              left-[5%]
              top-[34%]
              z-40
              w-[300px]
              md:w-[380px]
              lg:w-[450px]
            "
          >
            <img
              src="/car.png"
              alt="Sports car"
              className="h-auto w-full object-contain"
            />
          </div>

          {/* ==================================================
              SCROLL INDICATOR
          ================================================== */}

          <div
            className="
              absolute
              bottom-6
              left-1/2
              z-50
              -translate-x-1/2
              text-xs
              uppercase
              tracking-[0.3em]
              text-black/50
            "
          >
            Scroll ↓
          </div>
        </div>
      </section>

      {/* ==================================================
          SECOND SECTION
      ================================================== */}

      <section
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-black
          px-6
          text-white
        "
      >
        <div className="text-center">
          <p
            className="
              mb-4
              text-xs
              uppercase
              tracking-[0.3em]
              text-white/50
            "
          >
            Keep scrolling
          </p>

          <h2 className="text-4xl font-semibold md:text-6xl">
            Scroll Driven Motion
          </h2>
        </div>
      </section>

    </main>
  );
}