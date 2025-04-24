<template>
  <section class="coffee w-full mt-25 md:mt-50 overflow-x-hidden">
    <div
      class="p-4 flex w-full md:w-fit flex-col items-center md:flex-row md:gap-40 xl:px-16 bg-gradient-to-br from-[#D9D9D9] to-[#EDD0C6] md:rounded-r-sm"
    >
      <div
        class="grid grid-cols-1 grid-rows-auto sm:grid-cols-1 md:grid-cols-3 gap-4 p-4 text-lg md:text-xl text-[color:var(--color-brown)] font-text uppercase font-medium w-full h-auto"
      >
        <!-- Line 1: Left Column, Row 2 -->
        <div
          class="line-left py-2 max-w-fit max-h-fit md:col-start-1 md:row-start-2 border-b-2 border-[color:var(--color-brown)] md:pr-6"
        >
          <p>grab a cup</p>
        </div>

        <!-- Cup Image: Center Column, Rows 1-2 -->
        <div
          ref="cupContainer"
          class="md:col-start-2 md:row-span-2 flex justify-center max-w-fit max-h-fit"
        >
          <svg
            class="w-60 h-80 md:w-80 md:h-96"
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 831.25 767.16"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="336"
                y1="767.16"
                x2="336"
                y2="747.19"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f7d0c6" />
                <stop offset="1" stop-color="#9a382e" />
              </linearGradient>
              <radialGradient
                id="radial-gradient"
                cx="335.93"
                cy="738.62"
                fx="335.93"
                fy="738.62"
                r="258.26"
                gradientTransform="translate(0 699.91) scale(1 .05)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".07" stop-color="#9a382e" />
                <stop offset="1" stop-color="#f7d0c6" />
              </radialGradient>
              <linearGradient
                id="linear-gradient-2"
                x1="770.67"
                y1="465.42"
                x2="677.4"
                y2="626.96"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".34" stop-color="#9a382e" />
                <stop offset="1" stop-color="#f7d0c6" />
              </linearGradient>
              <radialGradient
                id="radial-gradient-2"
                cx="334.89"
                cy="422.56"
                fx="334.89"
                fy="422.56"
                r="309.44"
                gradientTransform="translate(0 348.86) scale(1 .17)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".55" stop-color="#f7d0c6" />
                <stop offset="1" stop-color="#9a382e" />
              </radialGradient>
              <linearGradient
                id="linear-gradient-3"
                x1="309.34"
                y1="422.56"
                x2="309.34"
                y2="720.48"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".11" stop-color="#f7d0c6" />
                <stop offset=".7" stop-color="#9a382e" />
              </linearGradient>
              <linearGradient
                id="linear-gradient-4"
                x1="636.24"
                y1="607.66"
                x2="811.83"
                y2="484.71"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".4" stop-color="#f7d0c6" />
                <stop offset=".91" stop-color="#9a382e" />
              </linearGradient>
            </defs>
            <g id="Layer_1-2" data-name="Layer 1">
              <g id="Plate">
                <path
                  class="cls-10"
                  d="M521.86,767.16H150.13c-1.16,0-1.89-1.26-1.29-2.26.98-1.65,2-4.06,2.13-7.08.15-3.59-1.03-6.46-2.13-8.34-.6-1.01.11-2.28,1.28-2.28h371.71c1.14,0,1.89,1.23,1.34,2.23-1.01,1.82-2.08,4.56-2.03,7.99.05,3.22,1.07,5.8,2.04,7.54.55.99-.19,2.21-1.32,2.21Z"
                />
                <path
                  class="cls-4"
                  d="M604.06,749.19H67.81c-7.93,0-14.36-6.43-14.36-14.36s6.43-14.36,14.36-14.36h536.25c7.93,0,14.36,6.43,14.36,14.36s-6.43,14.36-14.36,14.36Z"
                />
              </g>
              <g id="Cup">
                <path
                  class="cls-1"
                  d="M724.04,639.47c-51.44,0-93.28-41.85-93.28-93.28s41.85-93.28,93.28-93.28,93.28,41.85,93.28,93.28-41.85,93.28-93.28,93.28ZM724.04,485.72c-33.34,0-60.47,27.12-60.47,60.47s27.13,60.47,60.47,60.47,60.47-27.12,60.47-60.47-27.13-60.47-60.47-60.47Z"
                />
                <g>
                  <path
                    class="cls-6"
                    d="M334.89,457.25c-89.28,0-173.2-4.07-236.28-11.45-91.55-10.71-94.11-23.12-94.11-23.24s2.56-12.53,94.11-23.24c63.08-7.38,147-11.45,236.28-11.45s173.2,4.07,236.28,11.45c91.55,10.71,94.11,23.12,94.11,23.24s-2.56,12.53-94.11,23.24c-63.08,7.38-147,11.45-236.28,11.45Z"
                  />
                  <path
                    class="cls-7"
                    d="M334.89,392.37c83.92,0,164.08,3.65,225.71,10.29,69.82,7.52,91.61,16.13,98.1,19.9-6.49,3.77-28.27,12.38-98.1,19.9-61.63,6.64-141.79,10.29-225.71,10.29s-164.08-3.65-225.71-10.29c-69.82-7.52-91.61-16.13-98.1-19.9,6.49-3.77,28.27-12.38,98.1-19.9,61.63-6.64,141.79-10.29,225.71-10.29M334.89,383.37C149.94,383.37,0,400.92,0,422.56s149.94,39.19,334.89,39.19,334.89-17.55,334.89-39.19-149.94-39.19-334.89-39.19h0Z"
                  />
                </g>
                <path
                  class="cls-5"
                  d="M334.89,461.75C149.94,461.75,0,444.2,0,422.56c.81,142.17,97.35,261.64,228.43,297.23h160.14v.69c125.9-33.02,220.46-143.3,230.12-277.12-59.23,11.04-164.15,18.39-283.79,18.39Z"
                />
                <path
                  class="cls-2"
                  d="M334.89,461.75c-119.64,0-224.56-7.35-283.79-18.39,9.59,132.88,102.9,242.57,227.47,276.43h162.78c131.08-35.59,227.62-155.06,228.43-297.23,0,21.64-149.94,39.19-334.89,39.19Z"
                />
                <path
                  class="cls-3"
                  d="M724.04,653.4c-59.12,0-107.22-48.1-107.22-107.22s48.1-107.22,107.22-107.22,107.22,48.1,107.22,107.22-48.1,107.22-107.22,107.22ZM724.04,471.79c-41.02,0-74.4,33.38-74.4,74.4s33.38,74.4,74.4,74.4,74.4-33.38,74.4-74.4-33.38-74.4-74.4-74.4Z"
                />
                <path
                  class="cls-9"
                  d="M637.4,429.36c.15,8.68-152.29,21.44-300.24,21.51-149.33.07-302.72-12.79-302.57-21.51.16-9.56,185.08-14.11,301.4-14.11,116.67,0,301.24,4.56,301.4,14.11Z"
                />
              </g>
              <g id="Smoke" :class="{ hidden: !smokeVisible }">
                <path
                  id="Puff_3"
                  class="cls-8"
                  d="M373.2,368.05c8.79-29.01,26.17-45.04,40.96-53.34,16.4-9.22,25.65-4.22,31.94-15.54,10.84-19.49-4.19-19.83-13.28-20.57-5.89-.46-28.51-.74-24.9-18.34,2.38-11.57,18.83-21.33,24.9-24.92,9.66-5.67,20.11-11.21,28.84-20.8,7.41-8.16,11.86-21,6.92-34.52-4.35-11.88-20.28-12.08-26.28-20.21,18.81.48,55.92,18.31,59.32,52.95,2.66,26.97-14.33,28.42-27.5,35.56-5.05,2.73-14.84,10.15-14.64,21.19.2,11.03,18.7,6.58,22.98,20.3,5.43,17.42-1.77,36.36-12.34,39.81-26.41,8.65-30.13-10.47-68.64,9.43-25.55,13.19-28.26,29.01-28.26,29.01Z"
                />
                <path
                  id="Puff_2"
                  class="cls-8"
                  d="M318.14,435.99c-15.64-2.17-38.31-11.84-50.57-29.9-16.19-23.81,1.53-40.07,14.66-46.75,16.35-8.29,32.55-15.46,48.84-22.52,12.74-5.5,33.08-14.17,42.21-30.57,15.73-28.33-6.08-28.78-19.26-29.84-8.54-.68-41.35-1.11-36.13-26.62,3.46-16.81,27.32-30.94,36.13-36.11,14-8.26,29.17-16.27,41.82-30.23,10.75-11.81,17.22-30.46,10.05-50.08-6.31-17.19-29.44-17.49-38.11-29.25,27.3.7,81.09,26.51,86.03,76.75,3.35,34.02-14.81,40.07-32.15,47.83-10.3,4.64-30.75,19.02-28.97,34.49,1.78,15.5,24.9.94,31.1,20.83,7.88,25.27-3.27,54.91-15.7,66.34-10.77,9.92-20.78,16.15-33.04,20.75-17.17,6.48-37.4,5.79-53.67,17.3-24.75,17.55-1.26,56.12,18.86,49.48l.66-.41-22.76-1.48Z"
                />
                <path
                  id="Puff_1"
                  class="cls-8"
                  d="M270.41,208.25c8.79-29.01,26.17-45.04,40.96-53.34,16.4-9.22,25.65-4.22,31.94-15.54,10.84-19.49-4.19-19.83-13.28-20.57-5.89-.46-28.51-.74-24.9-18.34,2.38-11.57,18.83-21.33,24.9-24.92,9.66-5.67,20.11-11.21,28.84-20.8,7.41-8.16,11.86-21,6.92-34.52-4.35-11.88-20.28-12.08-26.28-20.21,18.81.48,55.92,18.31,59.32,52.95,2.66,26.97-14.33,28.42-27.5,35.56-5.05,2.73-14.84,10.15-14.64,21.19.2,11.03,18.7,6.58,22.98,20.3,5.43,17.42-1.77,36.36-12.34,39.81-26.41,8.65-30.13-10.47-68.64,9.43-25.55,13.19-28.26,29.01-28.26,29.01Z"
                />
              </g>
            </g>
          </svg>
        </div>

        <!-- Line 2: Right Column, Row 1 -->
        <div
          class="line-right py-2 order-4 md:order-2 max-h-fit max-w-fit md:col-start-3 md:row-start-1 border-b-2 border-[color:var(--color-brown)] md:pl-6"
        >
          <p>
            watch my video<span class="text-[color:var(--color-orange)] text-3xl pl-2">CV</span>
          </p>
        </div>

        <!-- Line 3: Full Bottom Row -->
        <div class="line-final py-2 order-2 md:order-4 md:col-span-3 md:row-start-3">
          <p class="text-[color:var(--color-orange)] text-center">My creativity runs on coffee</p>
        </div>
      </div>

      <!-- PDF Icon -->
      <div
        @click="openVideoInNewTab"
        class="mt-2 p-6 bg-[color:var(--color-brown)] rounded-sm shadow-xl"
      >
        <font-awesome-icon
          :icon="['fas', 'file-video']"
          class="text-8xl text-[color:var(--color-orange)]"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const videoUrl = 'https://www.youtube.com/embed/2ufOm5cGD4M?autoplay=1&rel=0'

const openVideoInNewTab = () => {
  // Open the video URL in a new tab
  window.open(videoUrl, '_blank')
}
gsap.registerPlugin(ScrollTrigger)

const smokeVisible = ref(false)

onMounted(() => {
  // Timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.coffee',
      start: 'top center',
      end: 'bottom center',
      toggleActions: 'play reverse play reverse',
    },
  })
  //  Plate
  tl.from('#Plate', {
    y: 50,
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: 'elastic.out(1, 0.5)',
  })
  //  Cup
  tl.from('#Cup', {
    scaleY: 0,
    scaleX: 1.4,
    opacity: 0,
    transformOrigin: 'bottom center',
    duration: 0.6,
    ease: 'elastic.out(1, 0.4)',
  })

  // Timeline for smoke (still doesn't work as i want )
  const smokeTl = gsap.timeline({
    paused: true,
    repeat: -1,
    yoyo: true,
  })

  smokeTl.to('#Smoke', {
    scale: 0.9,
    opacity: 0.5,
    transformOrigin: 'center top',
    ease: 'sine.inOut',
    duration: 1.6,
  })

  // ScrollTrigger to control when smoke starts/stops i don't see it works
  ScrollTrigger.create({
    trigger: '.coffee',
    start: 'top center',
    end: 'bottom center',
    onEnter: () => {
      smokeVisible.value = true
      smokeTl.play()
    },
    onLeave: () => {
      smokeTl.pause()
    },
    onEnterBack: () => {
      smokeTl.play()
    },
    onLeaveBack: () => {
      smokeTl.pause()
    },
  })

  // Text
  tl.from('.line-left', {
    x: '-100%',
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  })
    .from(
      '.line-right',
      {
        x: '100%',
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.6',
    )
    .from(
      '.line-final',
      {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.6',
    )
})
</script>
<style scoped>
.cls-1 {
  fill: url(#linear-gradient-2);
}

.cls-2 {
  fill: #f7d0c6;
}

.cls-3 {
  fill: url(#linear-gradient-4);
}

.cls-4 {
  fill: url(#radial-gradient);
}

.cls-5 {
  fill: url(#linear-gradient-3);
}

.cls-6 {
  fill: url(#radial-gradient-2);
}

.cls-7 {
  fill: #edd0c6;
}

.cls-8 {
  fill: #fff;
  opacity: 0.6;
}

.cls-9 {
  fill: #401d19;
}

.cls-10 {
  fill: url(#linear-gradient);
}
</style>
