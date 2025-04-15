<template>
    <img src="@/assets/bg/sidelight-bg.svg" class="bg-img" id="desktop-bg" alt="background image">
    <img src="@/assets/bg/mobi-sidelight-bg.svg" class="bg-img" id="mobile-bg" alt="background image">
    <div class="timeline-container">
        <TimelineItem />
    </div>
</template>

<script setup>
import TimelineItem from '../components/TimelineItem.vue';
</script>

<style scoped> 
#desktop-bg {
    display: block ;
}

#mobile-bg {
    display: none;
}

@media screen and (max-width: 601px) {
    #desktop-bg {
        display: none;
    }
    
    #mobile-bg {
        display: block;
    }
}

.timeline-container {
    margin: 5rem 10rem;
}

@media screen and (max-width: 1024px) {
    .timeline-container {
        margin: 5rem 2rem;
    }
    
}

@media screen and (max-width: 601px) {
    .timeline-container {
        margin: 5rem 1rem 2rem 0;
    }
    
}
</style>