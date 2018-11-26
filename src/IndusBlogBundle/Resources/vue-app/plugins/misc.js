import Vue from 'vue';

import Notifications from 'vue-notification';
import ToggleButton from 'vue-js-toggle-button';
import VModal from 'vue-js-modal';
import VTooltip from 'v-tooltip';
import VeeValidate from 'vee-validate';
import VoerroTagsInput from '@voerro/vue-tagsinput';
import VueClipboard from 'vue-clipboard2';
import VueTabs from 'vue-nav-tabs';
import 'vue-nav-tabs/themes/vue-tabs.css';


Vue.use(Notifications);
Vue.use(ToggleButton);
Vue.use(VModal, { dynamic: true });
Vue.use(VTooltip);
Vue.use(VeeValidate);
Vue.use(VoerroTagsInput);
Vue.use(VueClipboard);
Vue.use(VueTabs);
