import {defineSectionSelector, fetchData} from "./utils";
import {AudioListResponse, Item} from "./interfaces";
import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.scss'

defineSectionSelector('data-audio-slider', 'section');
const sliderMetaElement = document.querySelector('[data-audio-slider] [data-ghost]');
const sliderCount = 1;

fetchData(sliderMetaElement.getAttribute('data-blog-href'))
    .then((response:AudioListResponse) => buildSliderContent(response.items))
    .then((html) => {
        sliderMetaElement.innerHTML = `<div class="${sliderMetaElement.getAttribute('data-ghost-plugin-name')} swiper swiper-${sliderCount}">
            <div class="arrows-wrapper">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <div class="swiper-wrapper">${html}</div>
            <div class="swiper-pagination-wrap">
                <span>Sample Mix</span>
                <div class="swiper-pagination"></div>
            </div>
        </div>`;

        const swiperElement = sliderMetaElement.querySelector('.swiper') as HTMLElement;
        const slides = swiperElement.querySelectorAll('.swiper-slide');


        slides.forEach((slide, i) => {
            const btnPlay = slide.querySelector('[data-btn-play]') as HTMLButtonElement;
            const toggle = slide.querySelector('input[type="checkbox"]') as HTMLInputElement;

            btnPlay.addEventListener('click', (e) => {
                if (btnPlay.classList.contains('playing')) {
                    btnPlay.textContent = 'Play'
                } else {
                    btnPlay.textContent = 'Pause'
                }


                if (btnPlay.classList.contains('playing')) {
                    if (toggle.checked) {
                        audioObj[i].audio2.pause();
                    } else {
                        audioObj[i].audio1.pause();
                    }
                } else {
                    if (toggle.checked) {
                        audioObj[i].audio2.play();
                    } else {
                        audioObj[i].audio1.play();
                    }
                }

                btnPlay.classList.toggle('playing');
            })


            toggle.addEventListener('change', () => {
                if (!btnPlay.classList.contains('playing')) {
                    return;
                }
                if (toggle.checked) {
                    audioObj[i].audio1.pause();
                    audioObj[i].audio2.currentTime = audioObj[i].audio1.currentTime;
                    audioObj[i].audio2.play();
                } else {
                    audioObj[i].audio2.pause();
                    audioObj[i].audio1.currentTime = audioObj[i].audio2.currentTime;
                    audioObj[i].audio1.play();
                }
            })

        })
        swiperElement.classList.add('loaded')

        const swiper = new Swiper(swiperElement, {
            modules: [Navigation, Pagination],
            pagination: {
                el: ".swiper-pagination",
                clickable: true,

            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            direction: "horizontal",
            speed: 400,
            loop: true,
            grabCursor: true,
            slidesPerGroup: 1,
            slidesPerView: 4,
            spaceBetween: 30,

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                500: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                900: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
            }

        });

        swiper.on('slideChange', function () {

            Object.values(audioObj).forEach((el) => {
                el.audio1.pause();
                el.audio2.pause();
            })
            document.querySelectorAll('[data-btn-play]').forEach((el) => {
                el.classList.remove("playing");
            })
        });
    })

const audioObj:{[key:string]:{audio1: HTMLAudioElement; audio2: HTMLAudioElement;}} = {};

const buildSliderContent = (items:Item[]) => {
    const result = [];
    for (let i = 0; i < items.length; i++) {

        const getItemTitle = items[i].title;
        const getItemExcerpt = items[i].excerpt;
        const p = document.createElement('p');
        p.innerHTML = getItemExcerpt;
        const div = document.createElement('div');
        div.innerHTML = items[i].body;
        const audioItems = div.querySelectorAll('[data-url]');
        const urls = Array.from(audioItems).map((item) => {
            return item.getAttribute('data-url');
        })

        const createItem = `
    <div class="swiper-slide">
    <div class="swiper-slide-inner">
        <button class="btn btn-play" type="button" data-btn-play data-url='${JSON.stringify(urls)}' data-index='${i}'>
    </button>
    <div class="description-wrapper">
        <h4 class="title">${getItemTitle}</h4>
        <p>${p.textContent}</p>
    </div>
    <div class="checkbox-wrap">
        <input id='${i}' type="checkbox" data-audio-toggle class="switch-audio-input">
        <label for='${i}' class="switch-audio-wrapper">
            <span class="toggle-element"></span>
        </label>
    </div>
</div>
</div>`;

        audioObj[i] = {audio1: new Audio(urls[0]), audio2: new Audio(urls[1])};
        audioObj[i].audio1.load();
        audioObj[i].audio2.load();
        result.push(createItem);
    }

    return result.join('');
}




