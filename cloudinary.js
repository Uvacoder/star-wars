import Vue from 'vue';
import Cloudinary, { CldImage, CldTransformation } from 'cloudinary-vue';

Vue.use(Cloudinary, {
    configuration: { cloudName: 'starwarsimages' },
    components: [ CldImage, CldTransformation ]
})
