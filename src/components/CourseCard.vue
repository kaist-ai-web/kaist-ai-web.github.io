<template>
    <div class="course-card">
        <div class="card-top">
            <div class="department">
                <div class="tag">{{ course.department }}</div>
            </div>
            <div class="title">{{ course.title }}</div>
        </div>
        <div class="card-bottom">
            <div class="instructor">{{ course.instructor }}</div>
            <a class="card-button small full-width">See more</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'course-card',
    props: {
        course: Object,
    }
}
</script>

<style scoped>
    .course-card {
        position: relative;
        margin: 0.25rem;
        background-color: #fff;
        border: 2px solid #ddd;
        border-radius: 4px; 
        float: left;
        width: 18rem;
        height: 10rem;
    }
    .card-top {
        position: absolute;
        padding: 0.25rem;
        width: 100%;
        left: 0;
        top: 0;
    }
    .card-bottom {
        position: absolute;
        padding: 0.25rem;
        width: 100%;
        left: 0;
        bottom: 0;
    }
    .department {
        font-size: 0.8rem;
        font-weight: bold;
        padding-bottom: 0.25rem;
    }
    .title {
        font-size: 1rem;
        font-weight: bold;
        padding-bottom: 0.25rem;
    }
    .instructor {
        font-size: 0.8rem;
        color: #666;
        padding-bottom: 0.25rem;
    }
    .button {

    }
</style>