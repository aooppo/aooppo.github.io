/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2017/11/20/Docker常用命令及使用/index.html","22ae74a78c8611c02b6c4d5629945182"],["/2018/02/11/docker-alias/index.html","2e001f6ad42ca67a0359c9d62209b5ed"],["/2018/08/08/Docker中exec和attach区别/index.html","94c9e59be13b72480e810c9c1592420d"],["/2019/03/01/update-by-partition/index.html","95fa27b580c7f79a7b96763e87d61e7c"],["/2020/10/08/AQS/image-1602226897.png","25c2e20a1386ea558cbc291c59909131"],["/2020/10/08/AQS/image-1602226949.png","b06278b62320102981a14cba362fe765"],["/2020/10/08/AQS/image-1602226980.png","4103017cb54363e598c24f9e67073c59"],["/2020/10/08/AQS/image-1602227154.png","62c1009ce3703516271e8054a4287a39"],["/2020/10/08/AQS/image-1602227175.png","52bcca62d3d6d5155e6f86cf26caee9e"],["/2020/10/08/AQS/image-1602227193.png","7b5ecdb50c30c468e4919fdbcd78225b"],["/2020/10/08/AQS/image-1602227263.png","d1dc1da3150004bc6c502bb8e6e6b06c"],["/2020/10/08/AQS/image-1602227277.png","2bdd0739b9d28e16f5e6c193e7663420"],["/2020/10/08/AQS/image-1602227311.png","21f624e6602a6cdb5192e6c70e590773"],["/2020/10/08/AQS/image-1602227326.png","d0658e3675886128724e33bef514a1c5"],["/2020/10/08/AQS/image-1602227337.png","8285de3c79bdda201d9c2a442ef6e1ad"],["/2020/10/08/AQS/image-1602227426.png","068886a39b44da44a0c16379d173db51"],["/2020/10/08/AQS/image-1602227617.png","339fc407d9ac3f05d823eeabecc0f87d"],["/2020/10/08/AQS/image-1602227845.png","cb58222b09234831524e72a170ec75e6"],["/2020/10/08/AQS/image-1602227858.png","edd300aa0f24d160920d910cf6f2ab34"],["/2020/10/08/AQS/image-1602227928.png","76fb6715651d748014c6badcc9007a0f"],["/2020/10/08/AQS/image-1602227939.png","ffa6471643fb1f3cf744af5bbb15a128"],["/2020/10/08/AQS/image-1602227951.png","b21b5ece4a0a212fe9cf37e0a0370292"],["/2020/10/08/AQS/image-1602228428.png","999296cdcfafa74333b2fff8cf6bb1a1"],["/2020/10/08/AQS/index.html","db1641949ca43583b3773ec9f475f2fa"],["/2020/10/08/AQS/struct-aqs.png","c9384206e5359f942fb785f97ec4b1ae"],["/2020/10/08/从0到1手写一个RPC实现/index.html","46ceaf2cfed24a4d5836cfb171a5cf65"],["/2020/10/09/Sentinel-的使用/image-1602236063.png","9cebdbdf6704869e02b42c7f7754f719"],["/2020/10/09/Sentinel-的使用/index.html","6375e5f1fdcb7dbb5c7efd100f22d69f"],["/2020/10/12/K8s部署环境准备/image-1602495143.png","d7149f7e3023ae93ad9c6e5826ce7f88"],["/2020/10/12/K8s部署环境准备/image-1602497147.png","c93c50e8c3da650f962a77de674354f8"],["/2020/10/12/K8s部署环境准备/image-1602498926.png","0010b2dbad50fd9775e7f5e9e37d84ea"],["/2020/10/12/K8s部署环境准备/image-1602504308.png","fdc78f9771023996f58685565cd8f747"],["/2020/10/12/K8s部署环境准备/image-1602505559.png","d32a4e44e236ebd39f575c3a1006d559"],["/2020/10/12/K8s部署环境准备/index.html","411a78171138dae9285f4b88faee7802"],["/2020/10/13/kubesphere-安装与部署/image-1602575029.png","6af67c1e1e2965b10def72fa3c2120ac"],["/2020/10/13/kubesphere-安装与部署/image-1602577862.png","1d805caeddc1d955169e2252c623cfb8"],["/2020/10/13/kubesphere-安装与部署/image-1602578327.png","e9e39bf78adafdc81d1749513ad8a134"],["/2020/10/13/kubesphere-安装与部署/image-1602581460.png","a2ea0635d0909e46a528ffe7d9d21ac6"],["/2020/10/13/kubesphere-安装与部署/image-1602581661.png","4e58e5c209ddeb0df32af04bf29a9c2e"],["/2020/10/13/kubesphere-安装与部署/image-1602649614.png","bcfef4e5e4874eb00cd12d271f7d9b7e"],["/2020/10/13/kubesphere-安装与部署/index.html","902b73c6c590daffd5d0b1bc51961ba6"],["/2020/10/23/Linux 用户空间与内核空间/image-1603462135.png","ae4649fac592dbb567d2ff79e8dd09e4"],["/2020/10/23/Linux 用户空间与内核空间/image-1603462481.png","ae4649fac592dbb567d2ff79e8dd09e4"],["/2020/10/23/Linux 用户空间与内核空间/image-1603462814.png","d29416a98eee2ea1fccc93a2fb847869"],["/2020/10/23/Linux 用户空间与内核空间/image-1603463448.png","cb15d4bb33b34201553084efb0b62662"],["/2020/10/23/Linux 用户空间与内核空间/index.html","4e0b16143c5a834cb6c436be58fd92a7"],["/2020/10/27/linux五种IO模型/image-1603765833.png","c747d96b7da96fdada685d5bc023a6a0"],["/2020/10/27/linux五种IO模型/image-1603765852.png","fa14b1ed9d2e6afac5de51635c07b4de"],["/2020/10/27/linux五种IO模型/image-1603765870.png","5a5b279800def2835183865a90ace878"],["/2020/10/27/linux五种IO模型/image-1603765886.png","b24f9cbe98c1809abf3f15d803582b7e"],["/2020/10/27/linux五种IO模型/image-1603765906.png","7f87da91e9f4874d50a1bc29a1d67390"],["/2020/10/27/linux五种IO模型/image-1603765975.png","3d1ea8f67ad580281b92f280195c3549"],["/2020/10/27/linux五种IO模型/index.html","fed01868b5f25ee0910e32cbd074dbe1"],["/2020/10/29/Netty模型/image-1603962877.png","dc7ff89d78fc63558bd02d4515e42f38"],["/2020/10/29/Netty模型/image-1603963186.png","2882a43ae27016cc885444b46a735801"],["/2020/10/29/Netty模型/image-1603963398.png","8674352e3cb3638da5807ef88b8f225d"],["/2020/10/29/Netty模型/image-1603963588.png","7f40ae8ed9ea07aec016f8454acd4beb"],["/2020/10/29/Netty模型/image-1603964201.png","f5cc24e8836ddf1ce5f593b8b1ed0070"],["/2020/10/29/Netty模型/image-1603964258.png","3bc3c64d097674d33900d3c070497928"],["/2020/10/29/Netty模型/image-1603982976.png","5cb6079450293dc512b2b9f21d55daf3"],["/2020/10/29/Netty模型/image-1603982991.png","ea57c60be070d29d2d305677b76b478f"],["/2020/10/29/Netty模型/image-1603983106.png","684a73c472dc2257cb18b84befe73538"],["/2020/10/29/Netty模型/image-1603983165.png","8af6f532ce912d16b25e9839e6a472c1"],["/2020/10/29/Netty模型/image-1603983917.png","6cc8d1a5a4f11881486fb1ac2b9804ef"],["/2020/10/29/Netty模型/index.html","acd5ae760b9c073e1f9524b2b94ff024"],["/about/index.html","02bad69ae8a7ed9e5d126353eb863259"],["/archives/2017/11/index.html","9d3fe19818dcf7b500bcc746587c2621"],["/archives/2017/index.html","f5925b33e72144d962f72ae000b58424"],["/archives/2018/02/index.html","ca45c0ba4f29f78bc25086d9b05e7dbe"],["/archives/2018/08/index.html","09a0b81a5f03596eb797e0272c7b074d"],["/archives/2018/index.html","4f185405a6068dd38e959b8b161ab7b5"],["/archives/2019/03/index.html","8d40c323cc9a4753de4e26bd92fc6619"],["/archives/2019/index.html","6c3a640cde2e11795093df06c45ed38b"],["/archives/2020/10/index.html","61f8bfbee6445ad5c08c318df3baa012"],["/archives/2020/index.html","ae9572937c3edcd2c8698dec5ff2b140"],["/archives/index.html","7c191405362b937b632b401c8481e36e"],["/categories/index.html","317725135b3ea258e730021914648a29"],["/content.json","06dafa35fdf36c7398ab47b1ba5ea9c3"],["/css/layout/about.css","724c251da5b013d4e4576efeffedb4b1"],["/css/layout/archive-content.css","fcaa385fb6d1b8bf5f6b9469928fc25d"],["/css/layout/article-content.css","45efa84ece5b8448418e4c6b785bd72e"],["/css/layout/category-content.css","b0e04092f0916afe708f94b8c73f908e"],["/css/layout/category-list.css","6cae6945b65108be5390cb83e32f8605"],["/css/layout/common/animated.css","d5492577996ca6b0122be226ebc7e715"],["/css/layout/common/basic.css","05cbd488ec5d7c99d716c42dac45a1de"],["/css/layout/common/codeblock/code-theme.css","310bf6c798a6172ebb1f543470b98d96"],["/css/layout/common/codeblock/copy-code.css","5037440037018631d46f81c6c25c34f0"],["/css/layout/common/codeblock/highlight.css","3d83d2c5bedd3aff271f1b9151f7dccf"],["/css/layout/common/magic-theme.css","d5492577996ca6b0122be226ebc7e715"],["/css/layout/common/markdown.css","3c23f3efc8dfbe3d3d4088bf58db4e40"],["/css/layout/common/variables.css","99c364b1653ac9e94ade395b13821c34"],["/css/layout/home-content.css","4f889dff3dbce3c1555d1f250716fa53"],["/css/layout/links.css","ca6dab314e7f92c8c37e66c05572c2bc"],["/css/layout/page.css","4bb229e00419910b60525645522ff066"],["/css/layout/tag-content.css","ddea36f7f01a046fe7aec185529175a4"],["/css/libs/font-awesome.min.css","9497dc435d867b8ea4db811cefd98d32"],["/css/style.css","e23d5c4f06275fc74f795b3b26b55c3c"],["/fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["/images/avatar.png","4f97a9418b9e8a0f142e318e651fe661"],["/images/favicon.png","4f97a9418b9e8a0f142e318e651fe661"],["/images/wecom.jpg","b4d865105dd0eae4424ea69fd875e29d"],["/index.html","47f975291b57a6710d6aebd5bd830b0c"],["/js/code-copy.js","c27396a897025c0c106f7389d8034b97"],["/js/header-shrink.js","ad7c19e50a651a32e0b6aa00816327c7"],["/js/local-search.js","6d46597376edda6cbcec700af4e3742d"],["/js/main.js","d9a521b362a2f696d28fc5d743e0ffcd"],["/js/md5.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/post-toc.js","f776d1d6b0e5d9667588e494175bfced"],["/js/scroll-to-top.js","07538edc0f4bee866da1497b94cf97b4"],["/js/toc.js","1f90d177048df4b631d478ac52a09cb3"],["/js/toggle-mode.js","300523de9c1e202da9f095fba715c557"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/manifest.json","4e9b8c5c7eccee8dd87dc07f77ecadfd"],["/page/2/index.html","e264f4228126393cdab72d0ccfcda6ff"],["/projects/index.html","6166a4492417da72016589171c747bb5"],["/tags/docker/index.html","ca47966c4043c37508eca0db3e5213fc"],["/tags/io/index.html","1a4ce6470cdd722f4ca2418fbde0a5fc"],["/tags/java/index.html","93e9c3994081142c14a11a9e026dc469"],["/tags/k8s-cluster/index.html","f626ea3bcc299717798d07fb3f549ad4"],["/tags/k8s/index.html","1b94ef23ff096bcc05dbc6aabcd2aa64"],["/tags/karnel/index.html","70174dec5ce359acf3e5fd1ef00fd724"],["/tags/linux/index.html","a1e84a5bdc91d6851fc091f0527daa3a"],["/tags/netty/index.html","3c98a6fb807905292d160504686b6cc9"],["/tags/nio/index.html","f1643965a135533a31f939999c1150c2"],["/tags/postgresql/index.html","94500e4b975ffdadc06d8f101214f95b"],["/tags/rpc/index.html","20c7910fc6fdd1fdad05e57dbd9a618d"],["/tags/shell/index.html","928f764f1a7a33f318391f4386c4b413"],["/tags/sql/index.html","d0af2437ce697ab4da7294ec469f80b5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});




