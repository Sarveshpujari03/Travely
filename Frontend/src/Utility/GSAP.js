import gsap from 'gsap';
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(useGSAP);

const animation = (selector , obj) => {

    useGSAP(() => {
        gsap.from(selector , obj)
    })

}

export default animation;