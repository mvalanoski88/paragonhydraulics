import { useRuntimeConfig  } from '#app';

export function getLogoSrc(location){
    const config = useRuntimeConfig();

    switch(location) {
        case 'nav':
            return `${config.public.awsUrl}phlogo.webp`;
        case 'footer':
            return `${config.public.awsUrl}phlogo_black.webp`;
    }
}
