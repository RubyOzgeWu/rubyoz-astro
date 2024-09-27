<template>
  <section class="section-introduceView px-36">
    <div class="introduce-wrapper flex">
      <div class="image-container" ref="imageContainer">
        <div class="image"></div>
      </div>
      <div class="text-container flex flex-col p-6" ref="textContainer">
        <h3 class="text-3xl font-bold text-text-light self-center mb-4">
          About
        </h3>
        <p class="text-xl text-text-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          officia reiciendis perspiciatis aliquid quibusdam, nobis saepe
          asperiores eligendi quam omnis blanditiis id minus praesentium fuga
          maxime quos ducimus ex! Incidunt.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      this.$refs.imageContainer.style.transform = `translateY(${
        scrollPosition * 0.2
      }px)`;
      this.$refs.textContainer.style.transform = `translateY(${
        scrollPosition * 0.3
      }px)`;
    },
  },
};
</script>

<style scoped>
.section-introduceView {
  border: 2px solid white;
  height: 100vh;
  .introduce-wrapper {
    border: 2px solid lightpink;
    width: 90%;
    overflow: hidden;
    position: relative;
    max-width: 1200px;

    .image-container {
      border: 2px solid lightgreen;
      width: 40%;
      height: 350px;
      position: absolute;

      .image {
        background: var(--color-secondary__light);
        width: 60%;
        height: 350px;
      }
    }

    .text-container {
      border: 2px solid white;
      width: 60%;
      height: 40%;
      position: absolute;
      right: 0;
      top: 10%;
    }
  }
}
</style>
