<template>
    <header class="header" :class="{ 'header-scrolled': scrolled }">
        <div class="header-content">
            <div class="logo">
                <div class="logo-drawing-container">
                    <div class="logo-drawing" ref="logo">
                        <img class="logo-image" src="kaist_logo.png" />
                    </div>
                </div>
                <div class="logo-text">
                    KAIST<br />
                    <small>Artificial Intelligence</small>
                </div>
            </div>
            <div class="header-menu">
                <router-link class="header-menu-item" to="/"> Home </router-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "AppHeader",
    props: {
        scrolled: Boolean,
    },
    data() {
        return {};
    },
    mounted() {},
    watch: {
        scrolled() {},
    },
};
</script>

<style>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background-color: var(--header-bg-color);
    margin: 0;
    padding: 0;
    z-index: 998;
    transition: all 1s ease;
}
.header-scrolled {
    height: 3.75rem;
    background-color: var(--header-scrolled-bg-color);
    border-bottom: 1px solid var(--light-grey-color);
}
.header-content {
    display: flex;
    margin: 0 auto;
    padding: 0;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: transparent;
    width: 100%;
    height: 100%;
    max-width: var(--max-width);
    border-bottom: 1px solid var(--header-border-color);
}
.header-scrolled .content {
    border: 0;
}
.logo {
    flex: 0 0 auto;
}
.logo-drawing-container {
    float: left;
}
.logo-drawing {
    width: 2.7rem;
    height: 2.7rem;
    padding-top: 0.6rem;
    padding-left: 0.35rem;
    color: black;
}
.logo-image {
    width: 2rem;
    height: auto;
    margin: auto auto;
}
.logo-text {
    display: block;
    float: left;
    padding: 0 0.5rem;
    font-size: 1.1rem;
    line-height: 1.2em;
    font-weight: bold;
    color: var(--white-color);
    transition: color 1s ease;
}
.logo-text small {
    font-size: 0.9rem;
    line-height: 1.0em;
}
.header-scrolled .logo-text {
    color: var(--text-color);
}
.header-menu {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.header-menu-item {
    padding: 1rem 1rem;
    text-decoration: none;
    color: var(--header-text-color);
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 1s ease;
}
.header-scrolled .header-menu-item {
    color: var(--grey-color);
}
.header-menu-item:hover {
    color: var(--header-text-highlight-color);
}
.header-scrolled .header-menu-item:hover {
    color: var(--text-color);
}

@media screen and (max-width: 48rem) {
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 5.5rem;
        margin: 0;
        padding: 0;
        z-index: 998;
        transition: height 1s ease, background-color 1s ease;
    }
    .header-scrolled {
        height: 5.5rem;
        background-color: var(--header-scrolled-bg-color);
        border-bottom: 1px solid var(--light-grey-color);
    }
    .header-content {
        display: flex;
        padding: 0.5rem 0.5rem;
        align-items: center;
        flex-direction: column;
        border-bottom: 1px solid var(--header-border-color);
    }
    .header-menu {
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .header-menu-item {
        padding: 0.2rem 0.5rem;
        text-decoration: none;
        color: var(--header-text-color);
        font-size: 0.7rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: color 1s ease;
    }
}
</style>
