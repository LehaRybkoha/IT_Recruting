<template>
    <!--  BR нельзя, знаю. Было лень подгонять... => TODO Remove <br>  -->
    <div class="home">
        <section class="heading">
            <div class="container">
                <p class="heading__first">АААЙ-</p>
                <p class="heading__second">АУ-у-У!1</p>
                <p class="heading__second--lg">Aaaa!1</p>
                <p class="heading__third">ти-иии!</p>
                <p class="heading__fourth">нам нужен твой кот</p>
            </div>
        </section>
        <section class="about">
            <div class="container">
                <h1 v-animate-onscroll="'animated fadeInLeft'" class="about__title">Привет!<br> Мы набираем <span
                        class="about__title-black">крутых и сильных</span>
                    IT-специалистов в нашу команду.</h1>
                <div v-animate-onscroll="'animated fadeInLeft'" class="about__desc">
                    Реальные возможности для личного и профессионального развития
                    в Самарском офисе компании.
                </div>
                <div class="about__slider slider" v-animate-onscroll="'animated pulse'">
                    <swiper ref="mySwiper" :options="swiperOptions">
                        <swiper-slide v-for="(slide, idx) of slides" :key="idx">
                            <div class="slider__item">
                                <img :src="slide.img" alt="" class="slider__img">
                            </div>
                        </swiper-slide>
                        <div class="slider__pagination" slot="pagination"></div>
                    </swiper>
                    <IconWrapper class="slider__button slider__button-prev" slot="button-prev" width="70" height="70">
                        <IconLeft/>
                    </IconWrapper>
                    <IconWrapper class="slider__button slider__button-next" slot="button-next" width="70" height="70">
                        <IconRight/>
                    </IconWrapper>
                </div>
            </div>
        </section>
        <div class="section__wrapper container">
            <section v-animate-onscroll="'animated fadeInRight'" class="advantages">
                <div class="advantages__wrapper">
                    <h2 class="advantages__title">Больше преимуществ?<br>Рассказываем!</h2>
                    <ul class="advantages__content">
                        <li class="advantages__item">
                            <p class="advantages__text">
                                Отсутствие ненужных ограничений и формальностей;
                            </p>
                        </li>
                        <li class="advantages__item">
                            <p class="advantages__text">
                                Комфортный и уютный офис;
                            </p>
                        </li>
                        <li class="advantages__item">
                            <p class="advantages__text">
                                Свобода действий в принятии решений;
                            </p>
                        </li>
                        <li class="advantages__item">
                            <p class="advantages__text">
                                Профессиональная команда, которой мы гордимся;
                            </p>
                        </li>
                        <li class="advantages__item">
                            <p class="advantages__text">
                                Возможность развиваться вместе с нашим бизнесом;
                            </p>
                        </li>
                        <li class="advantages__item">
                            <p class="advantages__text">
                                Стабильная и своевременная оплата;
                            </p>
                        </li>
                        <li class="advantages__item">
                            <p class="advantages__text">
                                Кофе и чай, само собой!
                            </p>
                        </li>
                    </ul>
                </div>
                <a href="#form" v-smooth-scroll class="advantages__button advantages__button--left">
                    Откликнуться!
                </a>
            </section>
            <section v-animate-onscroll="'animated fadeInLeft'" class="products">
                <div class="lines">
                    <div class="lines__line lines__line--red"></div>
                    <div class="lines__line lines__line--blue"></div>
                    <div class="lines__line lines__line--black"></div>
                    <div class="lines__line lines__line--blue lines__line--blue-sec"></div>
                    <div class="lines__line lines__line--blue lines__line--blue-third"></div>
                </div>
                <h2 class="products__title">
                    Наши продукты
                </h2>
                <div class="products__card card">
                    <div class="card__top">
                        <img src="../assets/logo.png" alt="" class="card__img">
                    </div>
                    <div class="card__content">
                        <div class="card__wrapper">
                            <p class="card__title">Promenad</p>
                            <ul class="card__list">
                                <li class="card__item">
                                    IOS | App Store 5
                                    <IconWrapper class="slider__button slider__button-prev " slot="button-prev"
                                                 width="14" height="14">
                                        <IconStar/>
                                    </IconWrapper>
                                </li>
                                <li class="card__item">
                                    Android | Google Play 3.7
                                    <IconWrapper class="slider__button slider__button-prev " slot="button-prev"
                                                 width="14" height="14">
                                        <IconStar/>
                                    </IconWrapper>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section v-animate-onscroll="'animated fadeInRight'" class="garant">
            <div class="container">
                <h2 class="garant__title">
                    Мы гарантируем...
                </h2>
                <ul class="garant__list">
                    <li class="garant__item">
                    <span class="garant__text">
                        честную оплату труда — комфортную месячную или проектную ставку, либо почасовую оплату;
                    </span>
                    </li>
                    <li class="garant__item garant__item-margin">
                    <span class="garant__text">
                        возможность заработать больше, повышая свою ценность и принося пользу общему
                        делу.
                    </span>
                    </li>
                </ul>
            </div>
        </section>
        <section class="requirements" v-if="window.width < 1200">
            <div class="container container-slider">
                <img v-animate-onscroll="'animated fadeInDown'" src="../assets/vue.png" alt="vue"
                     class="animate-img__vue">
                <img v-animate-onscroll="'animated fadeInDown'" src="../assets/js.png" alt="JS" class="animate-img__js">
                <img v-animate-onscroll="'animated fadeInDown'" src="../assets/laravel.png" alt="laravel"
                     class="animate-img__laravel">
                <h2 v-animate-onscroll="'animated fadeInRight'" class="requirements__title">Но есть ожидания...</h2>
                <div class="requirements__slider slider">
                    <swiper ref="mySwiper" :options="swiperOptions">
                        <swiper-slide>
                            <div class="slider__item slider__item--requirements">
                                <h3 class="requirements__slider-title">
                                    ...если ты <span class="requirements__slider-title--bold">full-stack</span> или
                                    умеешь  в <span class="requirements__slider-title--bold">back-end / front-end</span>,
                                    ждём:
                                </h3>
                                <ul class="requirements__slider-list">
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Отличное знание CSS, HTML, PHP, Java;
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Знание и понимание принципов ООП, шаблонов и паттернов проектирования (MVC,
                                            например);
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Идеальное знание возможностей Laravel
                                            и умение их кастомизировать;
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Опыт работы с nginx или Apache;
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Хорошее знание связки Laravel + Vue.JS;
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Знание БД MySQL, PostgreSQL и NoSQL (Mongo DB и т.д.);
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Практику интеграции сторонних API и создания собственных;
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Понимание WebSocket;
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Владение консолью Linux;
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Знание английского языка of course...
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="slider__item slider__item--requirements">
                                <h3 class="requirements__slider-title">
                                    ...если ты опытный <span
                                        class="requirements__slider-title--bold">DevOps-инженер</span>, необходимы
                                    знания:
                                </h3>
                                <ul class="requirements__slider-list">
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            GIT (GITLAB, GITHUB, BITBUCKET);
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            NPM, Composer;
                                        </p>
                                    </li>

                                    <li class="requirements__slider-item requirements__slider-item--no-dots">
                                        <p class="requirements__slider-text requirements__slider-title--bold">
                                            Непрерывной интеграции:
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Jenkins / CI;
                                        </p>
                                    </li>

                                    <li class="requirements__slider-item requirements__slider-item--no-dots">
                                        <p class="requirements__slider-text requirements__slider-title--bold">
                                            Облачного хостинга:
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            DigitalOcean / AWS;
                                        </p>
                                    </li>

                                    <li class="requirements__slider-item requirements__slider-item--no-dots">
                                        <p class="requirements__slider-text requirements__slider-title--bold">
                                            Серверов:
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            nginx / Apache / Node.js;
                                        </p>
                                    </li>

                                    <li class="requirements__slider-item requirements__slider-item--no-dots">
                                        <p class="requirements__slider-text requirements__slider-title--bold">
                                            Баз данных:
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            MySQL / PostgreSQL / NoSQL (Elasticsearch);
                                        </p>
                                    </li>

                                    <li class="requirements__slider-item requirements__slider-item--no-dots">
                                        <p class="requirements__slider-text requirements__slider-title--bold">
                                            Контейнеров и оркестровки:
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Docker / Kubernetes;
                                        </p>
                                    </li>

                                    <li class="requirements__slider-item requirements__slider-item--no-dots">
                                        <p class="requirements__slider-text requirements__slider-title--bold">
                                            Управления конфигурацией:
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Vagrant;
                                        </p>
                                    </li>

                                    <li class="requirements__slider-item requirements__slider-item--no-dots">
                                        <p class="requirements__slider-text requirements__slider-title--bold">
                                            Мониторинга:
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Grafana.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </swiper-slide>
                        <div class="slider__pagination slider__pagination-red" slot="pagination"></div>
                    </swiper>
                    <IconWrapper class="slider__button slider__button-prev " slot="button-prev" width="50" height="50">
                        <IconLeft/>
                    </IconWrapper>
                    <IconWrapper class="slider__button slider__button-next" slot="button-next" width="50" height="50">
                        <IconRight/>
                    </IconWrapper>
                </div>
            </div>
        </section>
        <section v-animate-onscroll="'animated fadeIn'" class="requirements" v-else>
            <div class="container">
                <img v-animate-onscroll="'animated fadeInDown'" src="../assets/vue.png" alt="vue"
                     class="animate-img__vue">
                <img v-animate-onscroll="'animated fadeInDown'" src="../assets/js.png" alt="JS" class="animate-img__js">
                <img v-animate-onscroll="'animated fadeInDown'" src="../assets/laravel.png" alt="Laravel"
                     class="animate-img__laravel">
                <img src="../assets/rotating-el.png" alt="" class="animate-img">
                <svg class="requirements__bg" width="2250" height="574" viewBox="0 0 1800 574" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M450.938 58.7858C450.938 58.7858 1095.72 129.032 1502 70.3791C1800.5 27.2855 2020.79 -73.2141 2020.79 89.5025C2020.79 252.219 1475.5 709 1229.01 526.353C982.518 343.706 617.391 614.689 420 564.786C-4.84274 457.38 -197 194.79 -197 463.837C-197 857.888 450.938 58.7858 450.938 58.7858Z"
                          fill="#00E0FF"/>
                </svg>
                <h2 class="requirements__title">Но есть ожидания...</h2>
                <div class="requirements__wrapper">
                    <div class="requirements__content">
                        <div class="requirements__left">
                            <div class="requirements__left-wrapper">
                                <h3 class="requirements__slider-title">
                                    ...если ты <span class="requirements__slider-title--bold">full-stack</span> или
                                    умеешь  в <span class="requirements__slider-title--bold">back-end / front-end</span>,
                                    ждём:
                                </h3>
                                <ul class="requirements__slider-list">
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Отличное знание CSS, HTML, PHP, Java;
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Знание и понимание принципов ООП, шаблонов и паттернов проектирования (MVC,
                                            например);
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Идеальное знание возможностей Laravel
                                            и умение их кастомизировать;
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Опыт работы с nginx или Apache;
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Хорошее знание связки Laravel + Vue.JS;
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Знание БД MySQL, PostgreSQL и NoSQL (Mongo DB и т.д.);
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Практику интеграции сторонних API и создания собственных;
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Понимание WebSocket;
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Владение консолью Linux;
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Знание английского языка of course...
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="requirements__middle"></div>
                        <div class="requirements__right">
                            <div class="requirements__right-wrapper">
                                <h3 class="requirements__slider-title">
                                    ...если ты опытный <span
                                        class="requirements__slider-title--bold">DevOps-инженер</span>, необходимы
                                    знания:
                                </h3>
                                <ul class="requirements__slider-list">
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            GIT (GITLAB, GITHUB, BITBUCKET);
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            NPM, Composer;
                                        </p>
                                    </li>

                                    <li class="requirements__slider-item requirements__slider-item--no-dots">
                                        <p class="requirements__slider-text requirements__slider-title--bold">
                                            Непрерывной интеграции:
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Jenkins / CI;
                                        </p>
                                    </li>

                                    <li class="requirements__slider-item requirements__slider-item--no-dots">
                                        <p class="requirements__slider-text requirements__slider-title--bold">
                                            Облачного хостинга:
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            DigitalOcean / AWS;
                                        </p>
                                    </li>

                                    <li class="requirements__slider-item requirements__slider-item--no-dots">
                                        <p class="requirements__slider-text requirements__slider-title--bold">
                                            Серверов:
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            nginx / Apache / Node.js;
                                        </p>
                                    </li>

                                    <li class="requirements__slider-item requirements__slider-item--no-dots">
                                        <p class="requirements__slider-text requirements__slider-title--bold">
                                            Баз данных:
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            MySQL / PostgreSQL / NoSQL (Elasticsearch);
                                        </p>
                                    </li>

                                    <li class="requirements__slider-item requirements__slider-item--no-dots">
                                        <p class="requirements__slider-text requirements__slider-title--bold">
                                            Контейнеров и оркестровки:
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Docker / Kubernetes;
                                        </p>
                                    </li>

                                    <li class="requirements__slider-item requirements__slider-item--no-dots">
                                        <p class="requirements__slider-text requirements__slider-title--bold">
                                            Управления конфигурацией:
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Vagrant;
                                        </p>
                                    </li>

                                    <li class="requirements__slider-item requirements__slider-item--no-dots">
                                        <p class="requirements__slider-text requirements__slider-title--bold">
                                            Мониторинга:
                                        </p>
                                    </li>
                                    <li class="requirements__slider-item">
                                        <p class="requirements__slider-text">
                                            Grafana.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section v-animate-onscroll="'animated fadeInLeft'" class="ending">
            <div class="container">
                <h2 class="ending__title">Дружеская атмосфера<br>и команда лучших профессионалов ждёт тебя!</h2>
                <p class="ending__desc">Готовы поддерживать на всех уровнях, ведь мы – одна большая семья.</p>
                <div class="ending__counting">
                    <div class="ending__counting-wrapper">
                        <p class="ending__counting-text ending__counting-text-red">Нас в команде уже</p>
                        <p class="ending__counting-text ending__counting-text-red">X</p>
                    </div>
                    <div class="ending__counting-middle">
                        <span class="ending__counting-middle-heart">   💙</span>
                    </div>
                    <div class="ending__counting-wrapper">
                        <p class="ending__counting-text ending__counting-text-blue">Нам осталось ещё</p>
                        <p class="ending__counting-text ending__counting-text-blue">Y</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="form" v-animate-onscroll="'animated fadeInUp'" class="contact">
            <div class="container container-form">
                <h2 class="contact__title">Ещё подробнее? Лучше лично!</h2>
                <form action="" class="form">
                    <div class="form__content">
                        <input v-model="form.name" type="text" class="form__input" placeholder="Как к тебе обращаться?"
                               required>
                        <input v-model="form.phone" type="text" class="form__input" placeholder="Где с тобой связаться?"
                               required>
                    </div>
                    <span class="error-label" v-if="error">
                        Пожалуйста, проверьте правильность введённых данных
                    </span>
                    <Checkbox class="checkbox" v-model="form.checkbox">
                        <div>
                            <p class="form__checkbox">
                                Согласен с
                                <a href="https://hotelantifraud.ru/privacy" class="form__checkbox-link"
                                >политикой обработки персональных данных</a
                                >
                            </p>
                        </div>
                    </Checkbox>
                    <button @click.prevent="handleUpload" type="submit" class="advantages__button">
                        Откликнуться!
                    </button>
                </form>
            </div>
        </section>
        <footer class="footer">
            <div class="container">
                <p class="footer__date">© {{ new Date().getFullYear() }}</p>
            </div>
        </footer>
    </div>
</template>

<script>
    import IconWrapper from "../IconWrapper";
    import IconLeft from '../Icon/Left'
    import IconRight from '../Icon/Right'
    import IconStar from '../Icon/Star'
    import Checkbox from '../Common/Checkbox'
    import {GoogleSpreadsheet} from 'google-spreadsheet'

    import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
    // import style (<= Swiper 5.x)
    import 'swiper/css/swiper.css'
    // flowing-garage-326522-30da1f4e9c73.json
    export default {
        name: 'Home',
        data() {
            return {
                form: {
                    name: '',
                    phone: '',
                    checkbox: false
                },
                error: false,
                doc: new GoogleSpreadsheet('1BlHy0iQYfWPgLPr7KC9lZwls8pGWRqQinAcyogpijNI'),
                swiperOptions: {
                    pagination: {
                        el: '.slider__pagination'
                    },
                    navigation: {
                        nextEl: '.slider__button-next',
                        prevEl: '.slider__button-prev'
                    },
                    loop: true
                    // Some Swiper option/callback...
                },
                slides: [
                    {
                        img: require('../assets/frontent_bg.jpg')
                    },
                    {
                        img: require('../assets/frontend_sec_bg.jpg')
                    },
                    {
                        img: require('../assets/frontend_third_bg.jpeg')
                    },
                    {
                        img: require('../assets/frontend_fourth_bg.jpg')
                    },
                ],
                window: {
                    width: 0,
                    height: 0
                }
            }
        },
        components: {
            Swiper,
            SwiperSlide,
            IconWrapper,
            IconLeft,
            IconRight,
            IconStar,
            Checkbox
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            },
        },
        created() {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        },
        methods: {
            handleResize() {
                this.window.width = window.innerWidth;
                this.window.height = window.innerHeight;
            },
            normalizePhone (tel) {
                return tel
                    .split('')
                    .filter((symbol) => /(\d)+/i.test(symbol))
                    .join('')
            },
            async handleUpload() {
                console.log(this.form.phone)
                if (this.form.name.length > 1 && this.form.phone.length > 3 && this.form.checkbox) {
                    await this.doc.useServiceAccountAuth(require('../../flowing-garage-326522-30da1f4e9c73.json'));
                    await this.doc.loadInfo();
                    const sheet = this.doc.sheetsByIndex[0];
                    await sheet.addRows([
                        {name: this.form.name, phone: this.normalizePhone(this.form.phone)},
                    ]);
                    window.location.reload()
                } else {
                    this.error = true
                }
            }
        }
    }
</script>

<style lang="scss">
    .swiper-pagination-bullet {
        &-active {
            background-color: #00E0FF;
        }
    }

    .slider__pagination-red .swiper-pagination-bullet {
        background-color: #fff;
    }

    .slider__pagination-red .swiper-pagination-bullet-active {
        background-color: #C476D1;
    }

    .swiper-slide {
        margin: 0 2px;
    }
</style>

<style lang="scss" scoped>
    $mainColor: #00E0FF;
    $additionalColor: #00E0FF;
    $mainBlack: #2B2B2B;
    $redColor: #C476D1;
    @mixin position_images($top:unset, $right:unset, $bottom:unset, $left:unset) {
        position: absolute;
        left: $left;
        right: $right;
        top: $top;
        bottom: $bottom;
        z-index: 9999;
    }

    .home {
        overflow: hidden;
    }

    .container {
        padding: 0 38px;
        position: relative;

        &-slider {
            padding: 0 8px;
        }

        @media screen and (min-width: 600px) {
            max-width: 800px;
            margin: 0 auto;
        }
        @media screen and (min-width: 1200px) {
            max-width: 1000px;
            height: unset;
        }
        @media screen and (min-width: 1340px) {
            max-width: 1100px;
            height: unset;
        }
        @media screen and (min-width: 1440px) {
            max-width: 1340px;
            height: unset;
        }
    }

    .heading {
        position: relative;
        min-height: 300px;
        margin-bottom: 26px;
        @media screen and (min-width: 800px) {
            min-height: 523px;
        }
        @keyframes move_first {
            from {
                left: -500px
            }
            to {
                left: 40px
            }
        }
        @keyframes move_third {
            from {
                right: 500px
            }
            to {
                right: 0
            }
        }
        @keyframes move_second {
            0% {
                left: -300px
            }
            50% {
                left: 100px
            }
            75% {
                left: -30px
            }
            100% {
                left: 0
            }
        }
        @keyframes move_first_lg {
            from {
                left: -500px
            }
            to {
                left: 45%
            }
        }
        @keyframes move_second_lg {
            0% {
                top: -200px;
                left: 100%;
            }
            50% {
                top: 200px;
                left: 10%
            }
            75% {
                top: 230px;
                left: 75%
            }
            100% {
                top: 261px;
                left: 64%;
            }
        }
        @keyframes move_third_lg {
            0% {
                top: 200px;
                left: -10%;
            }
            100% {
                top: 235px;
                left: 40%;
            }
        }
        @keyframes opacity_changing {
            from {
                opacity: 0
            }
            to {
                opacity: 1
            }
        }

        &__first, &__second {
            font-family: Impact, sans-serif;
            color: $mainColor;
            font-weight: normal;
            position: absolute;
        }

        &__first {
            font-size: 144px;
            top: 29px;
            left: 40px;
            animation: 1s linear move_first;
            @media screen and (min-width: 800px) {
                top: 100px;
                left: 45%;
                animation: 1s linear move_first_lg;
            }
        }

        &__second {
            top: 150px;
            left: 0;
            animation: 1.5s linear move_second;
            white-space: nowrap;
            font-size: 104px;

            &--lg {
                display: none;
                @media screen and (min-width: 800px) {
                    font-family: Impact, sans-serif;
                    font-size: 144px;
                    color: $mainColor;
                    font-weight: normal;
                    position: absolute;
                    display: block;
                    top: 261px;
                    left: 64%;
                    animation: 1.5s ease-in-out move_second_lg;
                    white-space: nowrap;
                }
            }

            @media screen and (min-width: 800px) {
                display: none;
            }
        }

        &__third {
            position: absolute;
            font-family: Impact, sans-serif;
            font-size: 72px;
            color: $redColor;
            top: 137px;
            right: 0;
            animation: 1.5s linear move_third;
            white-space: nowrap;
            @media screen and (min-width: 800px) {
                top: 235px;
                left: 40%;
                animation: 1s linear move_third_lg;
            }
        }

        &__fourth {
            top: 388px;
            left: 39px;
            position: absolute;
            font-family: Impact, sans-serif;
            font-size: 48px;
            color: #000;
            display: none;
            @media screen and (min-width: 800px) {
                display: block;
                animation: 4s ease-in-out 1s infinite opacity_changing;
            }
        }
    }

    .about {
        margin-bottom: 30px;

        &__title {
            font-family: "Segoe UI", sans-serif;
            font-size: 36px;
            color: $mainColor;
            max-width: 800px;
            font-weight: 900;
            @media screen and (min-width: 1340px) {
                font-size: 50px;
            }

            &-black {
                color: #0f0f0f;
            }
        }

        &__desc {
            font-family: Lato, sans-serif;
            font-size: 18px;
            color: $mainBlack;
            margin-bottom: 27px;
            @media screen and (min-width: 1340px) {
                font-size: 25px;
            }
        }
    }

    .slider {
        position: relative;
        border-radius: 10px;

        &__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }

        &__item {
            height: 310px;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            @media screen and (min-width: 600px) {
                max-height: 600px;
                max-width: 1000px;
                height: unset;
            }
            @media screen and (min-width: 1340px) {
                height: unset;
                max-width: unset;
                max-height: unset;
            }

            &--requirements {
                display: block;
                background-color: #fff;
                border-radius: 14px;
                padding: 17px 17px 17px 17px;
                min-height: 377px;
                margin: 0 3px;
                @media screen and (min-width: 1024px) {
                    margin-bottom: 50px;
                }
                @media screen and (min-width: 600px) {
                    margin: 0 auto;
                    max-width: 600px;
                    text-align: center;
                }
            }
        }

        &__button {
            width: 10px;
        }

        &__pagination {
            margin-top: 15px;
            text-align: center;
            @media screen and (min-width: 1024px) {
                display: none;
            }
        }

        &__button {
            display: none;
            position: absolute;
            z-index: 1000;
            top: 45%;
            color: #E5E5E5;
            cursor: pointer;

            &:hover {
                color: $mainColor;
            }

            &-next {
                right: -80px;
                @media screen and (min-width: 1340px) {
                    right: -100px;
                }
            }

            &-prev {
                left: -80px;
                @media screen and (min-width: 1340px) {
                    left: -100px;
                }
            }

            @media screen and (min-width: 1024px) {
                display: block;
            }
        }
    }

    .advantages {
        margin-bottom: 20px;
        @media screen and (min-width: 1200px) {
            order: 2;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 0;
        }

        &__title {
            font-family: "Segoe UI", sans-serif;
            color: $redColor;
            font-size: 36px;
            margin-bottom: 31px;
            font-weight: 900;
            @media screen and (min-width: 600px) {
                text-align: center;
            }
            @media screen and (min-width: 1200px) {
                text-align: left;
            }
            @media screen and (min-width: 1340px) {
                font-size: 50px;
            }
        }

        &__text {
            font-family: Lato, sans-serif;
            font-size: 18px;
            color: $mainBlack;
            @media screen and (min-width: 1340px) {
                font-size: 25px;
                white-space: nowrap;
            }
            @media screen and (min-width: 1200px) {
                white-space: nowrap;
            }
        }

        &__content {
            margin-bottom: 50px;
            padding-left: 20px;
            @media screen and (min-width: 600px) {
                max-width: fit-content;
                margin: 0 auto 50px auto;
            }
        }

        &__item {
            margin: 0;
        }

        &__button {
            display: block;
            margin: 0 auto;
            font-family: Lato, sans-serif;
            font-size: 18px;
            line-height: 22px;
            color: #fff;
            background-color: $mainColor;
            border-radius: 19px;
            padding: 14px 0;
            width: 100%;
            text-align: center;
            border: none;
            max-width: 286px;
            cursor: pointer;

            &:hover {
                background-color: $redColor;
            }

            @media screen and (min-width: 1200px) {
                font-size: 22px;
                padding: 18px 0;
            }

            &--left {
                @media screen and (min-width: 1200px) {
                    margin: 0;
                }
            }
        }
    }

    .garant {
        margin-bottom: 60px;

        &__title {
            display: block;
            font-family: "Segoe UI", sans-serif;
            color: $redColor;
            font-size: 36px;
            text-align: left;
            font-weight: 900;
            @media screen and (min-width: 1200px) {
                color: #000000;
            }
            @media screen and (min-width: 1340px) {
                font-size: 40px;
            }
        }

        &__item {
            text-align: right;
            padding-left: 0;

            &-margin {
                margin-left: 73px;
            }
        }

        &__item {
            list-style: none;
        }

        &__text {
            font-family: Lato, sans-serif;
            font-size: 18px;
            color: $mainBlack;
            @media screen and (min-width: 1340px) {
                font-size: 25px;
                white-space: nowrap;
            }

            &::before {
                content: "\2022";
                font-size: 18px;
                padding: 10px;
                border-radius: 100%;
            }
        }
    }

    .requirements {
        position: relative;
        padding: 9px 0;
        background: $mainColor;
        border-radius: 0% 208% 60% 96%/83% 22% 2% 14%;
        margin-bottom: 41px;
        @media screen and (min-width: 1200px) {
            width: 100%;
            /*background: url("../assets/bg-desktop.png") round;*/
            border-radius: unset;
            background: unset;
        }

        &__bg {
            position: absolute;
            z-index: -1;
            top: -20%;
            left: -50%;
            @media screen and (min-width: 1440px) {
                left: -32%;
            }
        }

        &__content {
            display: flex;
        }

        &__wrapper {
            border-radius: 14px;
            padding: 35px 72px;
            position: relative;
            z-index: 999;
            background-color: #fff;
            border: 1px solid $redColor;
            max-height: 377px;
            @media screen and (min-width: 1200px) {
                max-width: 980px;
                margin: 0 auto;
                max-height: 420px;
            }
        }

        &__middle {
            width: 1px;
            background-color: $redColor;
            margin: 0 96px;
        }

        &__left, &__right {
            @media screen and (min-width: 1200px) {
                width: 100%;
                max-width: 315px;
            }
        }

        &__right {
            @media screen and (min-width: 1200px) {
                margin-right: auto;
            }
        }

        &__title {
            position: relative;
            z-index: 999;
            font-family: "Segoe UI", sans-serif;
            color: #fff;
            font-weight: 900;
            line-height: 36px;
            max-width: 200px;
            margin-left: 18px;
            @media screen and (min-width: 600px) {
                max-width: 500px;
                margin: 0 auto 10px auto;
            }
            @media screen and (min-width: 1200px) {
                font-size: 36px;
                margin: 90px auto 10px 12%;
            }
        }

        &__slider {
            &-title {
                font-family: Roboto, sans-serif;
                font-size: 16px;
                color: $mainBlack;
                line-height: 21px;
                margin-bottom: 0;
                font-weight: 500;

                &--bold {
                    font-weight: 900 !important;
                }

                @media screen and (min-width: 1200px) {
                    font-size: 18px !important;
                }
            }

            &-text {
                font-family: Roboto, sans-serif;
                font-weight: 300;
                color: $mainBlack;
                font-size: 14px;
                line-height: 16px;
                @media screen and (min-width: 1200px) {
                    font-size: 15px !important;
                }
            }

            &-list {
                padding-left: 25px;
                @media screen and (min-width: 600px) {
                    text-align: left;
                    padding: 0 72px;
                }
                @media screen and (min-width: 1200px) {
                    padding: 0;
                }
            }

            &-item {
                @media screen and (min-width: 600px) {
                    margin-bottom: 3px;
                }

                &--no-dots {
                    list-style: none;
                    margin-left: -30px;
                }
            }
        }
    }

    .products {
        position: relative;

        &__title {
            font-family: "Segoe UI", sans-serif;
            font-size: 36px;
            color: $redColor;
            font-weight: 900;
            text-align: center;
            @media screen and (min-width: 1340px) {
                font-size: 50px;
            }
        }
    }

    .card {
        border: 2px solid $redColor;
        border-radius: 17px;
        margin: 0 auto;
        @media screen and (min-width: 1200px) {
            width: 355px;
        }

        &__top {
            text-align: center;
            background: #fff;
            border-radius: 17px;
        }

        &__title {
            font-family: Lato, sans-serif;
            font-weight: 900;
            font-size: 24px;
            line-height: 29px;
            color: #fff;
            text-align: center;
        }

        &__content {
            background-color: $redColor;
            padding: 35px 30px 30px 30px;
            border-radius: 13px;
        }

        &__wrapper {
            max-width: 250px;
            margin: 0 auto;
        }

        &__item {
            font-family: Lato, sans-serif;
            font-size: 18px;
            line-height: 22px;
            color: #fff;
        }

        &__img {
            padding: 45px 0;
            @media screen and (min-width: 1200px) {
                padding: 25px 0;
            }
        }
    }

    .ending {
        margin-top: 72px;

        &__title {
            font-family: "Segoe UI", sans-serif;
            font-weight: 900;
            font-size: 30px;
            color: $mainColor;
            text-align: center;
            margin-bottom: 10px;
            @media screen and (min-width: 600px) {
                font-size: 36px;
            }
            @media screen and (min-width: 1200px) {
                font-size: 50px;
            }
            @media screen and (min-width: 1200px) {
                margin-bottom: 30px;
            }
        }

        &__desc {
            font-family: Lato, sans-serif;
            color: $mainBlack;
            font-size: 14px;
            line-height: 22px;
            text-align: center;
            margin-bottom: 19px;
            @media screen and (min-width: 600px) {
                font-size: 18px;
            }
            @media screen and (min-width: 1200px) {
                font-size: 20px;
            }
        }

        &__counting {
            max-width: 243px;
            margin: 0 auto;
            @media screen and (min-width: 1200px) {
                display: flex;
                max-width: 362px;
            }

            &-middle {
                position: relative;
                width: 2px;
                background-color: #E5E5E5;
                margin: 0 26px;

                &-heart {
                    display: none;
                    position: absolute;
                    left: -8px;
                    top: 16px;
                    @media screen and (min-width: 1200px) {
                        display: block;
                    }
                }
            }

            &-wrapper {
                padding: 11px 0;
                border-bottom: 1px solid #E5E5E5;
                @media screen and (min-width: 1200px) {
                    border: none;
                }

                &:last-child {
                    border: none;
                }
            }

            &-text {
                font-size: 18px;
                font-family: "Segoe UI", sans-serif;
                line-height: 24px;
                text-align: center;
                font-weight: 900;
                margin-bottom: 9px;

                &-red {
                    color: $redColor;
                }

                &-blue {
                    color: $mainColor;
                }
            }
        }
    }

    .form {
        max-width: 80%;
        margin: 0 auto;

        &__checkbox {
            font-family: Lato, sans-serif;
            font-size: 9px;
            font-weight: 400;
            color: #C4C4C4;

            &-link {
                color: #C4C4C4;
                text-decoration: underline;
            }
        }

        &__content {
            margin-bottom: 25px;
        }

        &__input {
            width: 100%;
            border: none;
            height: 25px;
            border-bottom: 1px solid $mainColor;
            margin-bottom: 20px;
            outline: none;
            color: #C4C4C4;
            font-family: Lato, sans-serif;
            font-size: 14px;
        }
    }

    .contact {
        @media screen and (min-width: 1200px) {
            max-width: 727px;
        }
        @media screen and (min-width: 600px) {
            max-width: 594px;
            margin: 0 auto;
        }

        &__title {
            font-family: "Segoe UI", sans-serif;
            color: $redColor;
            font-weight: 900;
            line-height: 48px;
            font-size: 30px;
            text-align: center;
            @media screen and (min-width: 600px) {
                font-size: 36px;
            }
            @media screen and (min-width: 1200px) {
                font-size: 45px;
            }
        }
    }

    .footer {
        &__date {
            color: #C4C4C4;
            font-size: 12px;
            font-family: Lato, sans-serif;
            text-align: center;
            margin: 42px 0;
        }
    }

    .section__wrapper {
        @media screen and (min-width: 1200px) {
            display: flex;
            justify-content: space-between;
        }
    }

    .lines {
        &__line {
            height: 858px;
            width: 1px;
            transform: rotate(45deg);
            position: absolute;
            top: -11px;
            z-index: -1;
            @media screen and (min-width: 1200px) {
                transform: rotate(70deg);
            }

            &--red {
                @keyframes move_first_line {
                    from {
                        left: -200px;
                    }
                    to {
                        left: 13px;
                    }
                }
                left: 13px;
                background-color: $redColor;
                /*animation: 1s linear move_first_line;*/
                @media screen and (min-width: 1200px) {
                    top: -126px;
                }
            }

            &--blue {
                left: 56px;
                background-color: $mainColor;

                &-sec {
                    left: 12px;
                    top: 85px
                }

                &-third {
                    left: -90px;
                    top: 90px;
                }
            }

            &--black {
                left: 95px;
                background-color: #000;
                top: 6px;
            }
        }
    }

    .animate-img {
        @keyframes move_round {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
        z-index: 2;
        display: none;
        position: absolute;
        bottom: -52%;
        width: 333px;
        height: 503px;
        left: -3%;
        animation: 10s linear infinite move_round;
        @media screen and (min-width: 1200px) {
            display: block;
        }

        &__vue {
            @include position_images(-22%, unset, unset, 20px);
            @media screen and (min-width: 1200px) {
                width: unset;
                @include position_images(8%, -4%, unset, unset)
            }
        }

        &__laravel {
            @include position_images(-8%, -10px, unset, unset);
            @media screen and (min-width: 1200px) {
                width: unset;
                @include position_images(-8%, 200px, unset, unset)
            }
        }

        &__js {
            width: 98px;
            @include position_images(-16%, 85px, unset, unset);
            @media screen and (min-width: 1200px) {
                width: unset;
                @include position_images(-24%, 0px, unset, unset)
            }
            @media screen and (min-width: 1440px) {
                width: unset;
                @include position_images(-25%, 31px, unset, unset)
            }
        }
    }
    .checkbox {
        margin-bottom: 35px;
        display: flex;
        justify-content: center;
    }
    .error-label {
        font-family: Lato, sans-serif;
        color: red;
        margin-bottom: 20px;
        display: block;
        font-size: 15px;
        text-align: center;
    }
</style>