import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* Font Awesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* Only import the icons you need */
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faFileVideo } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

/* Add them to the library */
library.add(
  faLinkedin,
  faFacebook,
  faPlus,
  faPlayCircle,
  faPause,
  faArrowTurnUp,
  faFaceSmile,
  faFilePdf,
  faFileVideo,
  faPaperPlane,
  faCopy,
  faQuoteLeft,
)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
