<script setup>
import ForceLink from '../../components/function/ForceLink.vue';
</script>

<template>
    <section class="hero">
    <!-- 소개글 -->
    <div class="hero-text">
        <h1>TayLee Service Page</h1>
        <p class="subtitle">Developer & Chart Enthusiast</p>
        <p class="description">
        This service provides charts and statistics for <span class="highlight">coins, stocks</span>, and more. 
        Explore tools, visualize data, and enjoy interactive insights.
        </p>
    </div>

    <!-- Fun Link -->
    <div class="fun-link-section">
        <div class="fun">Fun Link</div>
        <force-link></force-link>
    </div>
    </section>
</template>

<style scoped>
    /* Google Font Import */
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    }

    :root {
    --primary-color: #695cfe;
    --secondary-color: #e4e9f7;
    --text-color: #333;
    --highlight-color: #ff5050;
    }

    /* Hero Section */
    .hero {
    min-height: 100vh;
    background-color: var(--secondary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 60px 20px;
    }

    .hero-text h1 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 10px;
    }

    .hero-text .subtitle {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 20px;
    color: var(--text-color);
    }

    .hero-text .description {
    font-size: 1.1rem;
    color: var(--text-color);
    max-width: 600px;
    line-height: 1.6;
    }

    .hero-text .highlight {
    color: var(--highlight-color);
    font-weight: 600;
    }

    /* Fun Link Section */
    .fun-link-section {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    }

    .fun {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--text-color);
    }

    force-link {
    width: 100%;
    max-width: 400px;
    }
</style>
