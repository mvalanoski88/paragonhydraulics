<template>
    <header>
        <div @click="toggleMenuClose" :class="{'mobile-overlay' : mobileNav}"></div>
        <nav class="w-100" :class="{ 'scrolled-nav' : scrollPosition, 'scrolled-nav-open' : mobileNav }">
            <div class="row align-items-center">
                <div class="col-6 col-md-4">
                    <NuxtLink :class="{'d-none' : mobileNav}" to="/">
                        <img id="mainLogo" width="290" height="130" src="https://s3.amazonaws.com/assets.paragonhydraulics.com/img/phlogo_backup.png" alt="Paragon Hydraulics Logo"/>
                    </NuxtLink>
                </div>
                <div v-if="!mobile" class="desktop d-flex col-6 col-md-8 p-0 justify-content-end">
                    <ul class="p-0 pl-md-4 d-inline-flex">
                        <li class="mb-4 mb-md-0" v-for="link in navlinks">
                            <NuxtLink :to="link.link">{{ link.name }}</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div v-if="mobile" class="col-6 d-flex justify-content-end">
                    <Icon @click="toggleMenuOpen" :class="{ 'mobile-icon' : mobileNav }" icon="ri:menu-3-fill" />
                </div>
                <transition name="mobile-nav">
                    <ul class="p-0 pl-md-4 dropdown-nav" v-if="mobileNav">
                        <li class="mb-4 mb-md-0" v-for="link in navlinks">
                            <NuxtLink @click="toggleMenuClose" :to="link.link">{{ link.name }}</NuxtLink>
                        </li>
                        <li v-if="$route.name != 'contactus'" data-v-1c703980="" class="mobile-menu-cta d-flex d-lg-none align-self-center mb-4 mb-md-0">
                            <a href="tel:757-937-3773">
                                <Icon icon="tabler:phone-call" />
                            </a>
                            <a href="mailto:rfq@paragonhydraulics.com?subject=RFQ Request">
                                <Icon icon="mdi:email-edit-outline" />
                            </a>
                        </li>
                    </ul>
                </transition>
            </div>
        </nav>
    </header>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';

const { isMobileOrTablet } = useDevice()

const navlinks = ref([
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "About Us", link: "/aboutus" },
  { name: "Contact Us", link: "/contactus" },
]);

const scrollPosition = ref(null);
const mobile = ref(null);
const mobileNav = ref(null);

onMounted(() => {
  checkForMobile();
  window.addEventListener('scroll', scrollUpdate);
  window.addEventListener('resize', checkForMobile);
});

function toggleMenuOpen() {
  mobileNav.value = !mobileNav.value;
}

function toggleMenuClose() {
  mobileNav.value = false;
}

function scrollUpdate() {
  const scrollPositionValue = window.scrollY;
  scrollPosition.value = scrollPositionValue > 325;
}

function checkForMobile() {
    if (isMobileOrTablet) {
        mobile.value = true;
        return;
    }
    mobile.value = false;
    mobileNav.value = false;
    return;
}
</script>
<style lang = "scss" scoped>
nav{
    transition: 0.5s all cubic-bezier(0.18, 0.89, 0.32, 1.28);
    max-width: 100%;
    z-index: 9;

    @media (max-width:1000px) {
        #mainLogo {
            width: 55%;
            height: 50%;
    }
    }
}
.dropdown-nav {
    display: flex;
    justify-content: center;
    flex-direction: column;
    top: 0;
    position: fixed;
    width: 100%;
    max-width: 300px;
    height: 100%;
    background-color: #051535;
    right: 0;
    transition: .05s all ease-in-out;
    z-index: 14;

        li {
            padding: 0.5rem;

            a {
                font-size: 4rem;
                color: #fff;
            }
        }

    .mobile-menu-cta {
        svg {
            font-size: 4rem;
            color: #fff;
        }
    }
}

.mobile-overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #0000006e;
    z-index: 9;
}

.scrolled-nav {
    position: fixed;
    background-color: rgba(255, 255, 255, 0.90);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
    transition: 0.85s all ease-in;

    nav {
        padding: 0.5rem;

        >div.row {
            padding-inline: 3rem;
        }

        #mainLogo {
            transition: 0.25s all ease;
            width: 10rem;
            height: 4.5rem;
        }
    }
}

.scrolled-nav-open {
    background-color: transparent;
    box-shadow: none;
}

.nav-menu {
    @media (max-width:1000px) {
        align-items: center;

    }

    & div {
        padding: 0
    }
}

svg {
    font-size: 2.5rem;
    transition: 0.15s all ease;
    cursor: pointer;
  }

  .mobile-icon {
    position: fixed;
    margin-top: 1rem;
    transform: rotate(180deg);
    z-index: 15;
    color: #fff;
  }
</style>