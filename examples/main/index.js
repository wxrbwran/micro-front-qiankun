/**
 * @author Kuitos
 * @since 2019-05-16
 */

import React from 'react';
import ReactDOM from 'react-dom';
// import Vue from 'vue';
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from '../../es';
import Framework from './Framework';
import App from './App';
// import Framework from './Framework.vue';

// let app = null;

function render({ appContent, loading }) {
  /*
  examples for vue
   */
  // if (!app) {
  //   app = new Vue({
  //     el: '#container',
  //     data() {
  //       return {
  //         content: appContent,
  //         loading,
  //       };
  //     },
  //     render(h) {
  //       return h(Framework, {
  //         props: {
  //           content: this.content,
  //           loading: this.loading,
  //         },
  //       });
  //     },
  //   });
  // } else {
  //   app.content = appContent;
  //   app.loading = loading;
  // }

  const container = document.getElementById('container');
  ReactDOM.render(<Framework loading={loading} content={appContent} />, container);
}

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

function initApp() {
  render({ appContent: '', loading: true });
}

initApp();
const host = 'localhost';
// console.log('process.env', process.env);

const token = localStorage.getItem('token');
console.log('index token', token);

registerMicroApps(
  [
    {
       name: 'react16',
       entry: `//${host}:7100`,
       render,
       activeRule: genActiveRule('/react')
    },
    {
       name: 'vue app',
       entry: `//${host}:7101`,
       render,
       activeRule: genActiveRule('/vue')
    },
  ],
  {
    beforeLoad: [
      app => {
        console.log('before load', app);
      },
    ],
    beforeMount: [
      app => {
        console.log('before mount', app);
      },
    ],
    afterUnmount: [
      app => {
        console.log('after unload', app);
      },
    ],
  },
);

// setDefaultMountApp('/login');
runAfterFirstMounted(() => console.info('first app mounted'));

start({ prefetch: true });
