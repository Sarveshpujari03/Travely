import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const animation = (selector , obj) => {

    useGSAP(() => {
        gsap.from(selector , obj)
    })

}

export const scrollAni = (selector,trigger) => {
    gsap.from(selector, {
      opacity:1,
      y : 200,
      scrollTrigger: {
        trigger: trigger,
        markers: true,
        start: "top 80%",
        end: "bottom 80%",
        scrub: 1,
      },
      ease: "sine"
    })
}

export default animation;