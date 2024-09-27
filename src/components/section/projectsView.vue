<template>
  <section class="section-projectsView px-36">
    <div class="projects-wrapper p-4 pt-20 flex flex-col items-center">
      <h1 class="text-6xl mb-10 font-bold text-text-light">Projects</h1>
      <div class="search-bar flex items-center relative">
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Search..."
          class="border rounded-full bg-gradient"
          style="color: black"
        />
        <div class="search-btn p-2 absolute flex">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div class="project-container mt-12">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card mb-6 px-9 py-7 flex"
        >
          <div class="project-intro flex-1 flex flex-col">
            <div class="col flex items-center">
              <span class="text-lg font-bold text-text-light mr-2">{{
                project.title
              }}</span>
              <span
                v-for="(stack, index) in project.stacks"
                :key="index"
                class="stack-badge text-xs px-1 py-0 ml-2 rounded text-text-default"
              >
                {{ stack }}
              </span>
            </div>
            <p class="col text-sm text-text-light">{{ project.description }}</p>
          </div>
          <div class="project-link flex">
            <a :href="project.siteUrl" target="_blank" rel="noopener noreferrer"
              ><i class="fa-solid fa-globe"></i
            ></a>
            <div class="github-icon pl-3">
              <a
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                ><img src="/rubyoz-astro/github.svg" alt="GitHub Icon"
              /></a>
            </div>
          </div>
        </div>
        <div v-if="filteredProjects.length === 0">No projects found.</div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { projects } from "../../data/projectsData.js";

export default defineComponent({
  setup() {
    const searchTerm = ref("");

    const filteredProjects = computed(() => {
      const sortedProjects = projects.slice().sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

      return sortedProjects.filter((project) => {
        const searchLower = searchTerm.value.toLowerCase();

        const matchesTitleOrDescription =
          project.title.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower);

        const matchesStack = project.stacks.some((stack) =>
          stack.toLowerCase().includes(searchLower)
        );

        return matchesTitleOrDescription || matchesStack;
      });
    });

    return {
      searchTerm,
      filteredProjects,
    };
  },
});
</script>

<style scoped>
.bg-gradient {
  --accent-gradient: linear-gradient(
    45deg,
    var(--color-text__light),
    var(--color-text)
  );
  background-image: var(--accent-gradient);
}
.section-projectsView {
  min-height: 100vh;
  .projects-wrapper {
    width: 60%;
    .search-bar {
      width: 75%;

      input {
        width: 100%;
        padding: 0.25rem 1.5rem;
        padding-right: 5rem;
      }

      .search-btn {
        background: var(--color-accent__light);
        right: 0.5rem;
        font-size: 1rem;
        border-radius: 50%;

        i {
          color: var(--color-text__light);
        }
      }
    }

    .project-container {
      width: 100%;
      .project-card {
        width: 100%;
        height: 130px;
        background: var(--color-text__dark);
        border-radius: 0.5rem;

        .project-intro {
          .stack-badge {
            border: 1px solid var(--color-text);
          }
        }

        .project-link {
          .github-icon {
            img {
              width: 1.5rem;
              padding-top: 0.2rem;
            }
          }
          i {
            font-size: 1.35rem;
            color: var(--color-secondary__light);
          }
        }
      }
    }
  }
}
</style>
