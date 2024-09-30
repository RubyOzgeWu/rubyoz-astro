<template>
  <section class="section-homeView">
    <div class="title">
      <h1
        class="leading-title text-center text-8xl font-bold teko-medium text-text-light"
      >
        Discover <span class="text-gradient">Ruby Oz</span>
      </h1>
      <h3
        class="leading-description text-center text-2xl font-medium mt-6 text-text-default"
      >
        Frontend Developer in Taipei, Taiwan
      </h3>
      <!-- <div class="down-arrow">
				<Image src={downArrow} alt="A description of my image." />
			</div> -->
    </div>
    <div class="cursor" ref="cursor"></div>
  </section>
</template>
<script lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

export default {
  setup() {
    const cursor = ref<HTMLElement | null>(null);

    onMounted(() => {
      gsap.to(".leading-title", {
        filter: "brightness(2)",  // 2 表示亮度加倍
        duration: 2,               // 動畫持續時間
        ease: "power1.inOut",      // 緩動效果
        yoyo: true,                // 來回播放
        repeat: -1,                // 無限循環
        startAt: { filter: "brightness(1)" },
        stagger: {
          from: "start",           // 動畫從文字左邊開始
          amount: 0.5              // 整個元素的動畫時間
        }
      });

      const moveCursor = (event: MouseEvent) => {
        const startX = event.clientX + 100;
        const startY = event.clientY;

        if (cursor.value) {
          gsap.set(cursor.value, {
            x: startX,
            y: startY,
            scale: 2,
            opacity: 1
          });

          gsap.to(cursor.value, {
            x: event.clientX,
            y: event.clientY,
            scale: 1,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
          });
        }
      };

      document.addEventListener('mousemove', moveCursor);

      // Cleanup event listener on component unmount
      return () => {
        document.removeEventListener('mousemove', moveCursor);
      };
    });

    return {
      cursor,
    };
  }
};
</script>

<!-- <script>
import gsap from "gsap";
const cursor = document.querySelector('.cursor') as HTMLElement;

document.addEventListener('DOMContentLoaded', function() {
	gsap.to(".leading-title", {
		filter: "brightness(2)",  // 2 表示亮度加倍
		duration: 2,             // 動畫持續時間
		ease: "power1.inOut",      // 緩動效果
		yoyo: true,                // 來回播放
		repeat: -1,                // 無限循環
		startAt: { filter: "brightness(1)" },
		stagger: {
			from: "start",           // 動畫從文字左邊開始
			amount: 0.5              // 整個元素的動畫時間
		}
	});



	document.addEventListener('mousemove', (event) => {
		const startX = event.clientX + 100;
     const startY = event.clientY;
		gsap.set(cursor, {
			x: startX,
			y: startY,
			scale: 2,
			opacity: 1
		});


		gsap.to(cursor, {
			x: event.clientX,
			y: event.clientY,
			scale: 1,
			opacity: 0,
			duration: 0.6,
			ease: 'power2.out',
		});

	});

});
</script> -->

<style>
.text-gradient {
  --accent-gradient: linear-gradient(
    45deg,
    var(--color-primary),
    var(--color-primary__light) 15%,
    var(--color-text__white) 70%
  );
  background-image: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400%;
  background-position: 0%;
}

.section-homeView {
  height: 100vh;
  .title {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .down-arrow {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      padding-top: 3rem;

      img {
        width: 12%;
        height: 100px;
      }
    }
  }

  .cursor {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    pointer-events: none;
    z-index: 9999;
    left: 0;
    opacity: 0;
  }

  .trail {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    pointer-events: none;
    z-index: 9998;
  }
}
</style>
