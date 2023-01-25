"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/countly-sdk-web/lib/countly.js
  var require_countly = __commonJS({
    "node_modules/countly-sdk-web/lib/countly.js"(exports, module) {
      (function(root, factory) {
        if (typeof define === "function" && define.amd) {
          define([], function() {
            return factory(root.Countly);
          });
        } else if (typeof module === "object" && module.exports) {
          module.exports = factory(root.Countly);
        } else {
          root.Countly = factory(root.Countly);
        }
      })(typeof window !== "undefined" ? window : exports, function(Countly2) {
        if (typeof window === "undefined") {
          return;
        }
        Countly2 = Countly2 || {};
        var featureEnums = {
          SESSIONS: "sessions",
          EVENTS: "events",
          VIEWS: "views",
          SCROLLS: "scrolls",
          CLICKS: "clicks",
          FORMS: "forms",
          CRASHES: "crashes",
          ATTRIBUTION: "attribution",
          USERS: "users",
          STAR_RATING: "star-rating",
          LOCATION: "location",
          APM: "apm",
          FEEDBACK: "feedback",
          REMOTE_CONFIG: "remote-config"
        };
        Countly2.features = [featureEnums.SESSIONS, featureEnums.EVENTS, featureEnums.VIEWS, featureEnums.SCROLLS, featureEnums.CLICKS, featureEnums.FORMS, featureEnums.CRASHES, featureEnums.ATTRIBUTION, featureEnums.USERS, featureEnums.STAR_RATING, featureEnums.LOCATION, featureEnums.APM, featureEnums.FEEDBACK, featureEnums.REMOTE_CONFIG];
        var internalEventKeyEnums = {
          NPS: "[CLY]_nps",
          SURVEY: "[CLY]_survey",
          STAR_RATING: "[CLY]_star_rating",
          VIEW: "[CLY]_view",
          ORIENTATION: "[CLY]_orientation",
          PUSH_ACTION: "[CLY]_push_action",
          ACTION: "[CLY]_action"
        };
        var logLevelEnums = {
          ERROR: "[ERROR] ",
          WARNING: "[WARNING] ",
          INFO: "[INFO] ",
          DEBUG: "[DEBUG] ",
          VERBOSE: "[VERBOSE] "
        };
        var DeviceIdTypeInternalEnums = {
          DEVELOPER_SUPPLIED: 0,
          SDK_GENERATED: 1,
          TEMPORARY_ID: 2,
          URL_PROVIDED: 3
        };
        var configurationDefaultValues = {
          BEAT_INTERVAL: 500,
          QUEUE_SIZE: 1e3,
          FAIL_TIMEOUT_AMOUNT: 60,
          INACTIVITY_TIME: 20,
          SESSION_UPDATE: 60,
          MAX_EVENT_BATCH: 100,
          SESSION_COOKIE_TIMEOUT: 30,
          MAX_KEY_LENGTH: 128,
          MAX_VALUE_SIZE: 256,
          MAX_SEGMENTATION_VALUES: 30,
          MAX_BREADCRUMB_COUNT: 100,
          MAX_STACKTRACE_LINES_PER_THREAD: 30,
          MAX_STACKTRACE_LINE_LENGTH: 200
        };
        Countly2.q = Countly2.q || [];
        Countly2.onload = Countly2.onload || [];
        var SDK_VERSION = "22.06.4";
        var SDK_NAME = "javascript_native_web";
        var urlParseRE = /^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/;
        var CountlyClass = function(ob) {
          var self = this;
          var global = !Countly2.i;
          var sessionStarted = false;
          var apiPath = "/i";
          var readPath = "/o/sdk";
          var beatInterval = getConfig("interval", ob, configurationDefaultValues.BEAT_INTERVAL);
          var queueSize = getConfig("queue_size", ob, configurationDefaultValues.QUEUE_SIZE);
          var requestQueue = [];
          var eventQueue = [];
          var remoteConfigs = {};
          var crashLogs = [];
          var timedEvents = {};
          var ignoreReferrers = getConfig("ignore_referrers", ob, []);
          var crashSegments = null;
          var autoExtend = true;
          var lastBeat;
          var storedDuration = 0;
          var lastView = null;
          var lastViewTime = 0;
          var lastViewStoredDuration = 0;
          var failTimeout = 0;
          var failTimeoutAmount = getConfig("fail_timeout", ob, configurationDefaultValues.FAIL_TIMEOUT_AMOUNT);
          var inactivityTime = getConfig("inactivity_time", ob, configurationDefaultValues.INACTIVITY_TIME);
          var inactivityCounter = 0;
          var sessionUpdate = getConfig("session_update", ob, configurationDefaultValues.SESSION_UPDATE);
          var maxEventBatch = getConfig("max_events", ob, configurationDefaultValues.MAX_EVENT_BATCH);
          var maxCrashLogs = getConfig("max_logs", ob, null);
          var useSessionCookie = getConfig("use_session_cookie", ob, true);
          var sessionCookieTimeout = getConfig("session_cookie_timeout", ob, configurationDefaultValues.SESSION_COOKIE_TIMEOUT);
          var readyToProcess = true;
          var hasPulse = false;
          var offlineMode = getConfig("offline_mode", ob, false);
          var lastParams = {};
          var trackTime = true;
          var startTime = getTimestamp();
          var lsSupport = true;
          var firstView = null;
          var deviceIdType = DeviceIdTypeInternalEnums.SDK_GENERATED;
          var isScrollRegistryOpen = false;
          var scrollRegistryTopPosition = 0;
          try {
            localStorage.setItem("cly_testLocal", true);
            localStorage.removeItem("cly_testLocal");
          } catch (e) {
            log(logLevelEnums.ERROR, "Local storage test failed, Halting local storage support: " + e);
            lsSupport = false;
          }
          var consents = {};
          for (var it = 0; it < Countly2.features.length; it++) {
            consents[Countly2.features[it]] = {};
          }
          this.initialize = function() {
            this.serialize = getConfig("serialize", ob, Countly2.serialize);
            this.deserialize = getConfig("deserialize", ob, Countly2.deserialize);
            this.getViewName = getConfig("getViewName", ob, Countly2.getViewName);
            this.getViewUrl = getConfig("getViewUrl", ob, Countly2.getViewUrl);
            this.getSearchQuery = getConfig("getSearchQuery", ob, Countly2.getSearchQuery);
            this.DeviceIdType = Countly2.DeviceIdType;
            this.namespace = getConfig("namespace", ob, "");
            this.clearStoredId = getConfig("clear_stored_id", ob, false);
            this.app_key = getConfig("app_key", ob, null);
            this.onload = getConfig("onload", ob, []);
            this.utm = getConfig("utm", ob, { source: true, medium: true, campaign: true, term: true, content: true });
            this.ignore_prefetch = getConfig("ignore_prefetch", ob, true);
            this.rcAutoOptinAb = getConfig("rc_automatic_optin_for_ab", ob, true);
            this.useExplicitRcApi = getConfig("use_explicit_rc_api", ob, false);
            this.debug = getConfig("debug", ob, false);
            this.test_mode = getConfig("test_mode", ob, false);
            this.metrics = getConfig("metrics", ob, {});
            this.headers = getConfig("headers", ob, {});
            this.url = stripTrailingSlash(getConfig("url", ob, ""));
            this.app_version = getConfig("app_version", ob, "0.0");
            this.country_code = getConfig("country_code", ob, null);
            this.city = getConfig("city", ob, null);
            this.ip_address = getConfig("ip_address", ob, null);
            this.ignore_bots = getConfig("ignore_bots", ob, true);
            this.force_post = getConfig("force_post", ob, false);
            this.remote_config = getConfig("remote_config", ob, false);
            this.ignore_visitor = getConfig("ignore_visitor", ob, false);
            this.require_consent = getConfig("require_consent", ob, false);
            this.track_domains = getConfig("track_domains", ob, true);
            this.storage = getConfig("storage", ob, "default");
            this.enableOrientationTracking = getConfig("enable_orientation_tracking", ob, true);
            this.maxKeyLength = getConfig("max_key_length", ob, configurationDefaultValues.MAX_KEY_LENGTH);
            this.maxValueSize = getConfig("max_value_size", ob, configurationDefaultValues.MAX_VALUE_SIZE);
            this.maxSegmentationValues = getConfig("max_segmentation_values", ob, configurationDefaultValues.MAX_SEGMENTATION_VALUES);
            this.maxBreadcrumbCount = getConfig("max_breadcrumb_count", ob, null);
            this.maxStackTraceLinesPerThread = getConfig("max_stack_trace_lines_per_thread", ob, configurationDefaultValues.MAX_STACKTRACE_LINES_PER_THREAD);
            this.maxStackTraceLineLength = getConfig("max_stack_trace_line_length", ob, configurationDefaultValues.MAX_STACKTRACE_LINE_LENGTH);
            this.heatmapWhitelist = getConfig("heatmap_whitelist", ob, []);
            if (maxCrashLogs && !this.maxBreadcrumbCount) {
              this.maxBreadcrumbCount = maxCrashLogs;
              log(logLevelEnums.WARNING, "initialize, 'maxCrashLogs' is deprecated. Use 'maxBreadcrumbCount' instead!");
            } else if (!maxCrashLogs && !this.maxBreadcrumbCount) {
              this.maxBreadcrumbCount = 100;
            }
            if (this.storage === "cookie") {
              lsSupport = false;
            }
            if (!this.rcAutoOptinAb && !this.useExplicitRcApi) {
              log(logLevelEnums.WARNING, "initialize, Auto opting is disabled, switching to explicit RC API");
              this.useExplicitRcApi = true;
            }
            if (!Array.isArray(ignoreReferrers)) {
              ignoreReferrers = [];
            }
            if (this.url === "") {
              log(logLevelEnums.ERROR, "initialize, Please provide server URL");
              this.ignore_visitor = true;
            }
            if (getValueFromStorage("cly_ignore")) {
              this.ignore_visitor = true;
            }
            migrate();
            if (this.clearStoredId) {
              log(logLevelEnums.INFO, "initialize, Clearing the device ID storage");
              localStorage.removeItem(this.app_key + "/cly_id");
              localStorage.removeItem(this.app_key + "/cly_id_type");
            }
            requestQueue = getValueFromStorage("cly_queue") || [];
            eventQueue = getValueFromStorage("cly_event") || [];
            remoteConfigs = getValueFromStorage("cly_remote_configs") || {};
            checkIgnore();
            if (window.name && window.name.indexOf("cly:") === 0) {
              try {
                this.passed_data = JSON.parse(window.name.replace("cly:", ""));
              } catch (ex) {
                log(logLevelEnums.ERROR, "initialize, Could not parse name: " + window.name + ", error: " + ex);
              }
            } else if (location.hash && location.hash.indexOf("#cly:") === 0) {
              try {
                this.passed_data = JSON.parse(location.hash.replace("#cly:", ""));
              } catch (ex) {
                log(logLevelEnums.ERROR, "initialize, Could not parse hash: " + location.hash + ", error: " + ex);
              }
            }
            if (this.passed_data && this.passed_data.app_key && this.passed_data.app_key === this.app_key || this.passed_data && !this.passed_data.app_key && global) {
              if (this.passed_data.token && this.passed_data.purpose) {
                if (this.passed_data.token !== getValueFromStorage("cly_old_token")) {
                  setToken(this.passed_data.token);
                  setValueInStorage("cly_old_token", this.passed_data.token);
                }
                var strippedList = [];
                if (Array.isArray(this.heatmapWhitelist)) {
                  this.heatmapWhitelist.push(this.url);
                  strippedList = this.heatmapWhitelist.map(function(e) {
                    return stripTrailingSlash(e);
                  });
                } else {
                  strippedList = [this.url];
                }
                if (strippedList.includes(this.passed_data.url)) {
                  if (this.passed_data.purpose === "heatmap") {
                    this.ignore_visitor = true;
                    showLoader();
                    loadJS(this.passed_data.url + "/views/heatmap.js", hideLoader);
                  }
                }
              }
            }
            if (this.ignore_visitor) {
              log(logLevelEnums.WARNING, "initialize, ignore_visitor:[" + this.ignore_visitor + "], this user will not be tracked");
              return;
            }
            log(logLevelEnums.DEBUG, "initialize, app_key:[" + this.app_key + "], url:[" + this.url + "]");
            log(logLevelEnums.DEBUG, "initialize, device_id:[" + getConfig("device_id", ob, void 0) + "]");
            log(logLevelEnums.DEBUG, "initialize, require_consent is enabled:[" + this.require_consent + "]");
            try {
              log(logLevelEnums.DEBUG, "initialize, metric override:[" + JSON.stringify(this.metrics) + "]");
              log(logLevelEnums.DEBUG, "initialize, header override:[" + JSON.stringify(this.headers) + "]");
              log(logLevelEnums.DEBUG, "initialize, number of onload callbacks provided:[" + this.onload.length + "]");
              log(logLevelEnums.DEBUG, "initialize, utm tags:[" + JSON.stringify(this.utm) + "]");
              if (ignoreReferrers) {
                log(logLevelEnums.DEBUG, "initialize, referrers to ignore :[" + JSON.stringify(ignoreReferrers) + "]");
              }
            } catch (e) {
              log(logLevelEnums.ERROR, "initialize, Could not stringify some config object values");
            }
            log(logLevelEnums.DEBUG, "initialize, app_version:[" + this.app_version + "]");
            log(logLevelEnums.DEBUG, "initialize, provided location info; country_code:[" + this.country_code + "], city:[" + this.city + "], ip_address:[" + this.ip_address + "]");
            if (this.namespace !== "") {
              log(logLevelEnums.DEBUG, "initialize, namespace given:[" + this.namespace + "]");
            }
            if (this.clearStoredId) {
              log(logLevelEnums.DEBUG, "initialize, clearStoredId flag set to:[" + this.clearStoredId + "]");
            }
            if (this.ignore_prefetch) {
              log(logLevelEnums.DEBUG, "initialize, ignoring pre-fetching and pre-rendering from counting as real website visits :[" + this.ignore_prefetch + "]");
            }
            if (this.test_mode) {
              log(logLevelEnums.WARNING, "initialize, test_mode:[" + this.test_mode + "], queues won't be processed");
            }
            if (this.heatmapWhitelist) {
              log(logLevelEnums.DEBUG, "initialize, heatmap whitelist:[" + JSON.stringify(this.heatmapWhitelist) + "], these domains will be whitelisted");
            }
            if (this.storage !== "default") {
              log(logLevelEnums.DEBUG, "initialize, storage is set to:[" + this.storage + "]");
            }
            if (this.ignore_bots) {
              log(logLevelEnums.DEBUG, "initialize, ignore traffic from bots :[" + this.ignore_bots + "]");
            }
            if (this.force_post) {
              log(logLevelEnums.DEBUG, "initialize, forced post method for all requests:[" + this.force_post + "]");
            }
            if (this.remote_config) {
              log(logLevelEnums.DEBUG, "initialize, remote_config callback provided:[" + !!this.remote_config + "]");
            }
            if (typeof this.rcAutoOptinAb === "boolean") {
              log(logLevelEnums.DEBUG, "initialize, automatic RC optin is enabled:[" + this.rcAutoOptinAb + "]");
            }
            if (!this.useExplicitRcApi) {
              log(logLevelEnums.WARNING, "initialize, will use legacy RC API. Consider enabling new API during init with use_explicit_rc_api flag");
            }
            if (this.track_domains) {
              log(logLevelEnums.DEBUG, "initialize, tracking domain info:[" + this.track_domains + "]");
            }
            if (this.enableOrientationTracking) {
              log(logLevelEnums.DEBUG, "initialize, enableOrientationTracking:[" + this.enableOrientationTracking + "]");
            }
            if (!useSessionCookie) {
              log(logLevelEnums.WARNING, "initialize, use_session_cookie is enabled:[" + useSessionCookie + "]");
            }
            if (offlineMode) {
              log(logLevelEnums.DEBUG, "initialize, offline_mode:[" + offlineMode + "], user info won't be send to the servers");
            }
            if (offlineMode) {
              log(logLevelEnums.DEBUG, "initialize, stored remote configs:[" + JSON.stringify(remoteConfigs) + "]");
            }
            log(logLevelEnums.DEBUG, "initialize, 'getViewName' callback override provided:[" + !!this.getViewName + "]");
            log(logLevelEnums.DEBUG, "initialize, 'getSearchQuery' callback override provided:[" + !!this.getSearchQuery + "]");
            if (this.maxKeyLength !== configurationDefaultValues.MAX_KEY_LENGTH) {
              log(logLevelEnums.DEBUG, "initialize, maxKeyLength set to:[" + this.maxKeyLength + "] characters");
            }
            if (this.maxValueSize !== configurationDefaultValues.MAX_VALUE_SIZE) {
              log(logLevelEnums.DEBUG, "initialize, maxValueSize set to:[" + this.maxValueSize + "] characters");
            }
            if (this.maxSegmentationValues !== configurationDefaultValues.MAX_SEGMENTATION_VALUES) {
              log(logLevelEnums.DEBUG, "initialize, maxSegmentationValues set to:[" + this.maxSegmentationValues + "] key/value pairs");
            }
            if (this.maxBreadcrumbCount !== configurationDefaultValues.MAX_BREADCRUMB_COUNT) {
              log(logLevelEnums.DEBUG, "initialize, maxBreadcrumbCount for custom logs set to:[" + this.maxBreadcrumbCount + "] entries");
            }
            if (this.maxStackTraceLinesPerThread !== configurationDefaultValues.MAX_STACKTRACE_LINES_PER_THREAD) {
              log(logLevelEnums.DEBUG, "initialize, maxStackTraceLinesPerThread set to:[" + this.maxStackTraceLinesPerThread + "] lines");
            }
            if (this.maxStackTraceLineLength !== configurationDefaultValues.MAX_STACKTRACE_LINE_LENGTH) {
              log(logLevelEnums.DEBUG, "initialize, maxStackTraceLineLength set to:[" + this.maxStackTraceLineLength + "] characters");
            }
            if (beatInterval !== configurationDefaultValues.BEAT_INTERVAL) {
              log(logLevelEnums.DEBUG, "initialize, interval for heartbeats set to:[" + beatInterval + "] milliseconds");
            }
            if (queueSize !== configurationDefaultValues.QUEUE_SIZE) {
              log(logLevelEnums.DEBUG, "initialize, queue_size set to:[" + queueSize + "] items max");
            }
            if (failTimeoutAmount !== configurationDefaultValues.FAIL_TIMEOUT_AMOUNT) {
              log(logLevelEnums.DEBUG, "initialize, fail_timeout set to:[" + failTimeoutAmount + "] seconds of wait time after a failed connection to server");
            }
            if (inactivityTime !== configurationDefaultValues.INACTIVITY_TIME) {
              log(logLevelEnums.DEBUG, "initialize, inactivity_time set to:[" + inactivityTime + "] minutes to consider a user as inactive after no observable action");
            }
            if (sessionUpdate !== configurationDefaultValues.SESSION_UPDATE) {
              log(logLevelEnums.DEBUG, "initialize, session_update set to:[" + sessionUpdate + "] seconds to check if extending a session is needed while the user is active");
            }
            if (maxEventBatch !== configurationDefaultValues.MAX_EVENT_BATCH) {
              log(logLevelEnums.DEBUG, "initialize, max_events set to:[" + maxEventBatch + "] events to send in one batch");
            }
            if (maxCrashLogs) {
              log(logLevelEnums.WARNING, "initialize, max_logs set to:[" + maxCrashLogs + "] breadcrumbs to store for crash logs max, deprecated ");
            }
            if (sessionCookieTimeout !== configurationDefaultValues.SESSION_COOKIE_TIMEOUT) {
              log(logLevelEnums.DEBUG, "initialize, session_cookie_timeout set to:[" + sessionCookieTimeout + "] minutes to expire a cookies session");
            }
            log(logLevelEnums.INFO, "initialize, Countly initialized");
            var deviceIdParamValue = null;
            var searchQuery = self.getSearchQuery();
            var hasUTM = false;
            var utms = {};
            if (searchQuery) {
              var parts = searchQuery.substring(1).split("&");
              for (var i = 0; i < parts.length; i++) {
                var nv = parts[i].split("=");
                if (nv[0] === "cly_id") {
                  setValueInStorage("cly_cmp_id", nv[1]);
                } else if (nv[0] === "cly_uid") {
                  setValueInStorage("cly_cmp_uid", nv[1]);
                } else if (nv[0] === "cly_device_id") {
                  deviceIdParamValue = nv[1];
                } else if ((nv[0] + "").indexOf("utm_") === 0 && this.utm[nv[0].replace("utm_", "")]) {
                  utms[nv[0].replace("utm_", "")] = nv[1];
                  hasUTM = true;
                }
              }
            }
            var tempIdModeWasEnabled = getValueFromStorage("cly_id") === "[CLY]_temp_id";
            var developerSetDeviceId = getConfig("device_id", ob, void 0);
            if (getValueFromStorage("cly_id") && !tempIdModeWasEnabled) {
              this.device_id = getValueFromStorage("cly_id");
              log(logLevelEnums.INFO, "initialize, Set the stored device ID");
              deviceIdType = getValueFromStorage("cly_id_type");
              if (!deviceIdType) {
                log(logLevelEnums.INFO, "initialize, No device ID type info from the previous session, falling back to DEVELOPER_SUPPLIED");
                deviceIdType = DeviceIdTypeInternalEnums.DEVELOPER_SUPPLIED;
              }
            } else if (deviceIdParamValue !== null) {
              log(logLevelEnums.INFO, "initialize, Device ID set by URL");
              this.device_id = deviceIdParamValue;
              deviceIdType = DeviceIdTypeInternalEnums.URL_PROVIDED;
            } else if (developerSetDeviceId) {
              log(logLevelEnums.INFO, "initialize, Device ID set by developer");
              this.device_id = developerSetDeviceId;
              if (ob && Object.keys(ob).length) {
                if (ob.device_id !== void 0) {
                  deviceIdType = DeviceIdTypeInternalEnums.DEVELOPER_SUPPLIED;
                }
              } else if (Countly2.device_id !== void 0) {
                deviceIdType = DeviceIdTypeInternalEnums.DEVELOPER_SUPPLIED;
              }
            } else if (offlineMode || tempIdModeWasEnabled) {
              this.device_id = "[CLY]_temp_id";
              deviceIdType = DeviceIdTypeInternalEnums.TEMPORARY_ID;
              if (offlineMode && tempIdModeWasEnabled) {
                log(logLevelEnums.INFO, "initialize, Temp ID set, continuing offline mode from previous app session");
              } else if (offlineMode && !tempIdModeWasEnabled) {
                log(logLevelEnums.INFO, "initialize, Temp ID set, entering offline mode");
              } else {
                offlineMode = true;
                log(logLevelEnums.INFO, "initialize, Temp ID set, enabling offline mode");
              }
            } else {
              log(logLevelEnums.INFO, "initialize, Generating the device ID");
              this.device_id = getConfig("device_id", ob, getStoredIdOrGenerateId());
              if (ob && Object.keys(ob).length) {
                if (ob.device_id !== void 0) {
                  deviceIdType = DeviceIdTypeInternalEnums.DEVELOPER_SUPPLIED;
                }
              } else if (Countly2.device_id !== void 0) {
                deviceIdType = DeviceIdTypeInternalEnums.DEVELOPER_SUPPLIED;
              }
            }
            setValueInStorage("cly_id", this.device_id);
            setValueInStorage("cly_id_type", deviceIdType);
            if (hasUTM) {
              for (var tag in this.utm) {
                if (utms[tag]) {
                  this.userData.set("utm_" + tag, utms[tag]);
                } else {
                  this.userData.unset("utm_" + tag);
                }
              }
              this.userData.save();
            }
            notifyLoaders();
            setTimeout(function() {
              heartBeat();
              if (self.remote_config) {
                self.fetch_remote_config(self.remote_config);
              }
            }, 1);
            document.documentElement.setAttribute("data-countly-useragent", currentUserAgentString());
          };
          this.halt = function() {
            log(logLevelEnums.WARNING, "halt, Resetting Countly");
            Countly2.i = void 0;
            global = !Countly2.i;
            sessionStarted = false;
            apiPath = "/i";
            readPath = "/o/sdk";
            beatInterval = 500;
            queueSize = 1e3;
            requestQueue = [];
            eventQueue = [];
            remoteConfigs = {};
            crashLogs = [];
            timedEvents = {};
            ignoreReferrers = [];
            crashSegments = null;
            autoExtend = true;
            storedDuration = 0;
            lastView = null;
            lastViewTime = 0;
            lastViewStoredDuration = 0;
            failTimeout = 0;
            failTimeoutAmount = 60;
            inactivityTime = 20;
            inactivityCounter = 0;
            sessionUpdate = 60;
            maxEventBatch = 100;
            maxCrashLogs = null;
            useSessionCookie = true;
            sessionCookieTimeout = 30;
            readyToProcess = true;
            hasPulse = false;
            offlineMode = false;
            lastParams = {};
            trackTime = true;
            startTime = getTimestamp();
            lsSupport = true;
            firstView = null;
            deviceIdType = DeviceIdTypeInternalEnums.SDK_GENERATED;
            isScrollRegistryOpen = false;
            scrollRegistryTopPosition = 0;
            try {
              localStorage.setItem("cly_testLocal", true);
              localStorage.removeItem("cly_testLocal");
            } catch (e) {
              log(logLevelEnums.ERROR, "halt, Local storage test failed, will fallback to cookies");
              lsSupport = false;
            }
            Countly2.features = [featureEnums.SESSIONS, featureEnums.EVENTS, featureEnums.VIEWS, featureEnums.SCROLLS, featureEnums.CLICKS, featureEnums.FORMS, featureEnums.CRASHES, featureEnums.ATTRIBUTION, featureEnums.USERS, featureEnums.STAR_RATING, featureEnums.LOCATION, featureEnums.APM, featureEnums.FEEDBACK, featureEnums.REMOTE_CONFIG];
            consents = {};
            for (var a = 0; a < Countly2.features.length; a++) {
              consents[Countly2.features[a]] = {};
            }
            self.app_key = void 0;
            self.device_id = void 0;
            self.onload = void 0;
            self.utm = void 0;
            self.ignore_prefetch = void 0;
            self.debug = void 0;
            self.test_mode = void 0;
            self.metrics = void 0;
            self.headers = void 0;
            self.url = void 0;
            self.app_version = void 0;
            self.country_code = void 0;
            self.city = void 0;
            self.ip_address = void 0;
            self.ignore_bots = void 0;
            self.force_post = void 0;
            self.rcAutoOptinAb = void 0;
            self.useExplicitRcApi = void 0;
            self.remote_config = void 0;
            self.ignore_visitor = void 0;
            self.require_consent = void 0;
            self.track_domains = void 0;
            self.storage = void 0;
            self.enableOrientationTracking = void 0;
            self.maxKeyLength = void 0;
            self.maxValueSize = void 0;
            self.maxSegmentationValues = void 0;
            self.maxBreadcrumbCount = void 0;
            self.maxStackTraceLinesPerThread = void 0;
            self.maxStackTraceLineLength = void 0;
          };
          this.group_features = function(features) {
            log(logLevelEnums.INFO, "group_features, Grouping features");
            if (features) {
              for (var i in features) {
                if (!consents[i]) {
                  if (typeof features[i] === "string") {
                    consents[i] = { features: [features[i]] };
                  } else if (features[i] && Array.isArray(features[i]) && features[i].length) {
                    consents[i] = { features: features[i] };
                  } else {
                    log(logLevelEnums.ERROR, "group_features, Incorrect feature list for [" + i + "] value: [" + features[i] + "]");
                  }
                } else {
                  log(logLevelEnums.WARNING, "group_features, Feature name [" + i + "] is already reserved");
                }
              }
            } else {
              log(logLevelEnums.ERROR, "group_features, Incorrect features:[" + features + "]");
            }
          };
          this.check_consent = function(feature) {
            log(logLevelEnums.INFO, "check_consent, Checking if consent is given for specific feature:[" + feature + "]");
            if (!this.require_consent) {
              log(logLevelEnums.INFO, "check_consent, require_consent is off, no consent is necessary");
              return true;
            }
            if (consents[feature]) {
              return !!(consents[feature] && consents[feature].optin);
            }
            log(logLevelEnums.ERROR, "check_consent, No feature available for [" + feature + "]");
            return false;
          };
          this.get_device_id_type = function() {
            log(logLevelEnums.INFO, "check_device_id_type, Retrieving the current device id type.[" + deviceIdType + "]");
            var type;
            switch (deviceIdType) {
              case DeviceIdTypeInternalEnums.SDK_GENERATED:
                type = self.DeviceIdType.SDK_GENERATED;
                break;
              case DeviceIdTypeInternalEnums.URL_PROVIDED:
              case DeviceIdTypeInternalEnums.DEVELOPER_SUPPLIED:
                type = self.DeviceIdType.DEVELOPER_SUPPLIED;
                break;
              case DeviceIdTypeInternalEnums.TEMPORARY_ID:
                type = self.DeviceIdType.TEMPORARY_ID;
                break;
              default:
                type = -1;
                break;
            }
            return type;
          };
          this.get_device_id = function() {
            log(logLevelEnums.INFO, "get_device_id, Retrieving the device id: [" + this.device_id + "]");
            return this.device_id;
          };
          this.check_any_consent = function() {
            log(logLevelEnums.INFO, "check_any_consent, Checking if any consent is given");
            if (!this.require_consent) {
              log(logLevelEnums.INFO, "check_any_consent, require_consent is off, no consent is necessary");
              return true;
            }
            for (var i in consents) {
              if (consents[i] && consents[i].optin) {
                return true;
              }
            }
            log(logLevelEnums.INFO, "check_any_consent, No consents given");
            return false;
          };
          this.add_consent = function(feature) {
            log(logLevelEnums.INFO, "add_consent, Adding consent for [" + feature + "]");
            if (Array.isArray(feature)) {
              for (var i = 0; i < feature.length; i++) {
                this.add_consent(feature[i]);
              }
            } else if (consents[feature]) {
              if (consents[feature].features) {
                consents[feature].optin = true;
                this.add_consent(consents[feature].features);
              } else {
                if (consents[feature].optin !== true) {
                  consents[feature].optin = true;
                  updateConsent();
                  setTimeout(function() {
                    if (feature === featureEnums.SESSIONS && lastParams.begin_session) {
                      self.begin_session.apply(self, lastParams.begin_session);
                      lastParams.begin_session = null;
                    } else if (feature === featureEnums.VIEWS && lastParams.track_pageview) {
                      lastView = null;
                      self.track_pageview.apply(self, lastParams.track_pageview);
                      lastParams.track_pageview = null;
                    }
                  }, 1);
                }
              }
            } else {
              log(logLevelEnums.ERROR, "add_consent, No feature available for [" + feature + "]");
            }
          };
          this.remove_consent = function(feature) {
            log(logLevelEnums.INFO, "remove_consent, Removing consent for [" + feature + "]");
            this.remove_consent_internal(feature, true);
          };
          this.remove_consent_internal = function(feature, enforceConsentUpdate) {
            enforceConsentUpdate = enforceConsentUpdate || false;
            if (Array.isArray(feature)) {
              for (var i = 0; i < feature.length; i++) {
                this.remove_consent_internal(feature[i], enforceConsentUpdate);
              }
            } else if (consents[feature]) {
              if (consents[feature].features) {
                this.remove_consent_internal(consents[feature].features, enforceConsentUpdate);
              } else {
                consents[feature].optin = false;
                if (enforceConsentUpdate && consents[feature].optin !== false) {
                  updateConsent();
                }
              }
            } else {
              log(logLevelEnums.ERROR, "remove_consent, No feature available for [" + feature + "]");
            }
          };
          var consentTimer;
          var updateConsent = function() {
            if (consentTimer) {
              clearTimeout(consentTimer);
              consentTimer = null;
            }
            consentTimer = setTimeout(function() {
              var consentMessage = {};
              for (var i = 0; i < Countly2.features.length; i++) {
                if (consents[Countly2.features[i]].optin === true) {
                  consentMessage[Countly2.features[i]] = true;
                } else {
                  consentMessage[Countly2.features[i]] = false;
                }
              }
              toRequestQueue({ consent: JSON.stringify(consentMessage) });
              log(logLevelEnums.DEBUG, "Consent update request has been sent to the queue.");
            }, 1e3);
          };
          this.enable_offline_mode = function() {
            log(logLevelEnums.INFO, "enable_offline_mode, Enabling offline mode");
            this.remove_consent_internal(Countly2.features, false);
            offlineMode = true;
            this.device_id = "[CLY]_temp_id";
            deviceIdType = DeviceIdTypeInternalEnums.TEMPORARY_ID;
          };
          this.disable_offline_mode = function(device_id) {
            log(logLevelEnums.INFO, "disable_offline_mode, Disabling offline mode");
            offlineMode = false;
            if (device_id && this.device_id !== device_id) {
              this.device_id = device_id;
              deviceIdType = DeviceIdTypeInternalEnums.DEVELOPER_SUPPLIED;
              setValueInStorage("cly_id", this.device_id);
              setValueInStorage("cly_id_type", DeviceIdTypeInternalEnums.DEVELOPER_SUPPLIED);
              log(logLevelEnums.INFO, "disable_offline_mode, Changing id to: " + this.device_id);
            } else {
              this.device_id = getStoredIdOrGenerateId();
              if (this.device_id !== getValueFromStorage("cly_id")) {
                setValueInStorage("cly_id", this.device_id);
                setValueInStorage("cly_id_type", DeviceIdTypeInternalEnums.SDK_GENERATED);
              }
            }
            var needResync = false;
            if (requestQueue.length > 0) {
              for (var i = 0; i < requestQueue.length; i++) {
                if (requestQueue[i].device_id === "[CLY]_temp_id") {
                  requestQueue[i].device_id = this.device_id;
                  needResync = true;
                }
              }
            }
            if (needResync) {
              setValueInStorage("cly_queue", requestQueue, true);
            }
          };
          this.begin_session = function(noHeartBeat, force) {
            log(logLevelEnums.INFO, "begin_session, Starting the session");
            if (noHeartBeat) {
              log(logLevelEnums.INFO, "begin_session, Heartbeats are disabled");
            }
            if (force) {
              log(logLevelEnums.INFO, "begin_session, Session starts irrespective of session cookie");
            }
            if (this.check_consent(featureEnums.SESSIONS)) {
              if (!sessionStarted) {
                if (this.enableOrientationTracking) {
                  this.report_orientation();
                  add_event(window, "resize", function() {
                    self.report_orientation();
                  });
                }
                lastBeat = getTimestamp();
                sessionStarted = true;
                autoExtend = !noHeartBeat;
                var expire = getValueFromStorage("cly_session");
                if (force || !useSessionCookie || !expire || parseInt(expire) <= getTimestamp()) {
                  log(logLevelEnums.INFO, "begin_session, Session started");
                  if (firstView === null) {
                    firstView = true;
                  }
                  var req = {};
                  req.begin_session = 1;
                  req.metrics = JSON.stringify(getMetrics());
                  toRequestQueue(req);
                }
                setValueInStorage("cly_session", getTimestamp() + sessionCookieTimeout * 60);
              }
            } else {
              lastParams.begin_session = arguments;
            }
          };
          this.session_duration = function(sec) {
            log(logLevelEnums.INFO, "session_duration, Reporting session duration");
            if (this.check_consent(featureEnums.SESSIONS)) {
              if (sessionStarted) {
                log(logLevelEnums.INFO, "session_duration, Session extended: ", sec);
                toRequestQueue({ session_duration: sec });
                extendSession();
              }
            }
          };
          this.end_session = function(sec, force) {
            log(logLevelEnums.INFO, "end_session, Ending the current session");
            if (this.check_consent(featureEnums.SESSIONS)) {
              if (sessionStarted) {
                sec = sec || getTimestamp() - lastBeat;
                reportViewDuration();
                if (!useSessionCookie || force) {
                  log(logLevelEnums.INFO, "end_session, Session ended");
                  toRequestQueue({ end_session: 1, session_duration: sec });
                } else {
                  this.session_duration(sec);
                }
                sessionStarted = false;
              }
            }
          };
          this.change_id = function(newId, merge) {
            log(logLevelEnums.INFO, "change_id, Changing the ID");
            if (merge) {
              log(logLevelEnums.INFO, "change_id, Will merge the IDs");
            }
            if (!newId || typeof newId !== "string" || newId.length === 0) {
              log(logLevelEnums.ERROR, "change_id, The provided ID: [" + newId + "] is not a valid ID");
              return;
            }
            if (offlineMode) {
              log(logLevelEnums.WARNING, "change_id, Offline mode was on, initiating disabling sequence instead.");
              this.disable_offline_mode(newId);
              return;
            }
            if (this.device_id !== newId) {
              if (!merge) {
                sendEventsForced();
                this.end_session(null, true);
                timedEvents = {};
                this.remove_consent_internal(Countly2.features, false);
              }
              var oldId = this.device_id;
              this.device_id = newId;
              deviceIdType = DeviceIdTypeInternalEnums.DEVELOPER_SUPPLIED;
              setValueInStorage("cly_id", this.device_id);
              setValueInStorage("cly_id_type", DeviceIdTypeInternalEnums.DEVELOPER_SUPPLIED);
              log(logLevelEnums.INFO, "change_id, Changing ID from:[" + oldId + "] to [" + newId + "]");
              if (merge) {
                toRequestQueue({ old_device_id: oldId });
              } else {
                this.begin_session(!autoExtend, true);
              }
              if (this.remote_config) {
                remoteConfigs = {};
                setValueInStorage("cly_remote_configs", remoteConfigs);
                this.fetch_remote_config(this.remote_config);
              }
            }
          };
          this.add_event = function(event) {
            log(logLevelEnums.INFO, "add_event, Adding event: ", event);
            var respectiveConsent = false;
            switch (event.key) {
              case internalEventKeyEnums.NPS:
                respectiveConsent = this.check_consent("feedback");
                break;
              case internalEventKeyEnums.SURVEY:
                respectiveConsent = this.check_consent("feedback");
                break;
              case internalEventKeyEnums.STAR_RATING:
                respectiveConsent = this.check_consent("star-rating");
                break;
              case internalEventKeyEnums.VIEW:
                respectiveConsent = this.check_consent("views");
                break;
              case internalEventKeyEnums.ORIENTATION:
                respectiveConsent = this.check_consent("users");
                break;
              case internalEventKeyEnums.PUSH_ACTION:
                respectiveConsent = this.check_consent("push");
                break;
              case internalEventKeyEnums.ACTION:
                respectiveConsent = this.check_consent("clicks") || this.check_consent("scroll");
                break;
              default:
                respectiveConsent = this.check_consent("events");
            }
            if (respectiveConsent) {
              add_cly_events(event);
            }
          };
          function add_cly_events(event) {
            if (self.ignore_visitor) {
              log(logLevelEnums.ERROR, "Adding event failed. Possible bot or user opt out");
              return;
            }
            if (!event.key) {
              log(logLevelEnums.ERROR, "Adding event failed. Event must have a key property");
              return;
            }
            if (!event.count) {
              event.count = 1;
            }
            event.key = truncateSingleValue(event.key, self.maxKeyLength, "add_cly_event", log);
            event.segmentation = truncateObject(event.segmentation, self.maxKeyLength, self.maxValueSize, self.maxSegmentationValues, "add_cly_event", log);
            var props = ["key", "count", "sum", "dur", "segmentation"];
            var e = createNewObjectFromProperties(event, props);
            e.timestamp = getMsTimestamp();
            var date = new Date();
            e.hour = date.getHours();
            e.dow = date.getDay();
            eventQueue.push(e);
            setValueInStorage("cly_event", eventQueue);
            log(logLevelEnums.INFO, "Successfully adding event: ", event);
          }
          this.start_event = function(key) {
            log(logLevelEnums.INFO, "start_event, Starting timed event with key: [" + key + "]");
            key = truncateSingleValue(key, self.maxKeyLength, "start_event", log);
            if (timedEvents[key]) {
              log(logLevelEnums.WARNING, "start_event, Timed event with key [" + key + "] already started");
              return;
            }
            timedEvents[key] = getTimestamp();
          };
          this.end_event = function(event) {
            log(logLevelEnums.INFO, "end_event, Ending timed event");
            if (typeof event === "string") {
              event = { key: event };
            }
            if (!event.key) {
              log(logLevelEnums.ERROR, "end_event, Timed event must have a key property");
              return;
            }
            if (!timedEvents[event.key]) {
              log(logLevelEnums.ERROR, "end_event, Timed event with key [" + event.key + "] was not started");
              return;
            }
            event.dur = getTimestamp() - timedEvents[event.key];
            this.add_event(event);
            delete timedEvents[event.key];
          };
          this.report_orientation = function(orientation) {
            log(logLevelEnums.INFO, "report_orientation, Reporting orientation");
            if (this.check_consent(featureEnums.USERS)) {
              add_cly_events({
                key: internalEventKeyEnums.ORIENTATION,
                segmentation: {
                  mode: orientation || getOrientation()
                }
              });
            }
          };
          this.report_conversion = function(campaign_id, campaign_user_id) {
            log(logLevelEnums.WARNING, "report_conversion, Deprecated function call! Use 'recordDirectAttribution' in place of this call. Call will be redirected now!");
            this.recordDirectAttribution(campaign_id, campaign_user_id);
          };
          this.recordDirectAttribution = function(campaign_id, campaign_user_id) {
            log(logLevelEnums.INFO, "recordDirectAttribution, Recording the attribution for campaign ID: [" + campaign_id + "] and the user ID: [" + campaign_user_id + "]");
            if (this.check_consent(featureEnums.ATTRIBUTION)) {
              campaign_id = campaign_id || getValueFromStorage("cly_cmp_id") || "cly_organic";
              campaign_user_id = campaign_user_id || getValueFromStorage("cly_cmp_uid");
              if (campaign_user_id) {
                toRequestQueue({ campaign_id, campaign_user: campaign_user_id });
              } else {
                toRequestQueue({ campaign_id });
              }
            }
          };
          this.user_details = function(user) {
            log(logLevelEnums.INFO, "user_details, Trying to add user details: ", user);
            if (this.check_consent(featureEnums.USERS)) {
              user.name = truncateSingleValue(user.name, self.maxValueSize, "user_details", log);
              user.username = truncateSingleValue(user.username, self.maxValueSize, "user_details", log);
              user.email = truncateSingleValue(user.email, self.maxValueSize, "user_details", log);
              user.organization = truncateSingleValue(user.organization, self.maxValueSize, "user_details", log);
              user.phone = truncateSingleValue(user.phone, self.maxValueSize, "user_details", log);
              user.picture = truncateSingleValue(user.picture, 4096, "user_details", log);
              user.gender = truncateSingleValue(user.gender, self.maxValueSize, "user_details", log);
              user.byear = truncateSingleValue(user.byear, self.maxValueSize, "user_details", log);
              user.custom = truncateObject(user.custom, self.maxKeyLength, self.maxValueSize, self.maxSegmentationValues, "user_details", log);
              var props = ["name", "username", "email", "organization", "phone", "picture", "gender", "byear", "custom"];
              toRequestQueue({ user_details: JSON.stringify(createNewObjectFromProperties(user, props)) });
            }
          };
          var customData = {};
          var change_custom_property = function(key, value, mod) {
            if (self.check_consent(featureEnums.USERS)) {
              if (!customData[key]) {
                customData[key] = {};
              }
              if (mod === "$push" || mod === "$pull" || mod === "$addToSet") {
                if (!customData[key][mod]) {
                  customData[key][mod] = [];
                }
                customData[key][mod].push(value);
              } else {
                customData[key][mod] = value;
              }
            }
          };
          this.userData = {
            set: function(key, value) {
              log(logLevelEnums.INFO, "set, Setting user's custom property value: [" + value + "] under the key: [" + key + "]");
              key = truncateSingleValue(key, self.maxKeyLength, "userData set", log);
              value = truncateSingleValue(value, self.maxValueSize, "userData set", log);
              customData[key] = value;
            },
            unset: function(key) {
              log(logLevelEnums.INFO, "unset, Resetting user's custom property with key: [" + key + "] ");
              customData[key] = "";
            },
            set_once: function(key, value) {
              log(logLevelEnums.INFO, "set_once, Setting user's unique custom property value: [" + value + "] under the key: [" + key + "] ");
              key = truncateSingleValue(key, self.maxKeyLength, "userData set_once", log);
              value = truncateSingleValue(value, self.maxValueSize, "userData set_once", log);
              change_custom_property(key, value, "$setOnce");
            },
            increment: function(key) {
              log(logLevelEnums.INFO, "increment, Increasing user's custom property value under the key: [" + key + "] by one");
              key = truncateSingleValue(key, self.maxKeyLength, "userData increment", log);
              change_custom_property(key, 1, "$inc");
            },
            increment_by: function(key, value) {
              log(logLevelEnums.INFO, "increment_by, Increasing user's custom property value under the key: [" + key + "] by: [" + value + "]");
              key = truncateSingleValue(key, self.maxKeyLength, "userData increment_by", log);
              value = truncateSingleValue(value, self.maxValueSize, "userData increment_by", log);
              change_custom_property(key, value, "$inc");
            },
            multiply: function(key, value) {
              log(logLevelEnums.INFO, "multiply, Multiplying user's custom property value under the key: [" + key + "] by: [" + value + "]");
              key = truncateSingleValue(key, self.maxKeyLength, "userData multiply", log);
              value = truncateSingleValue(value, self.maxValueSize, "userData multiply", log);
              change_custom_property(key, value, "$mul");
            },
            max: function(key, value) {
              log(logLevelEnums.INFO, "max, Saving user's maximum custom property value compared to the value: [" + value + "] under the key: [" + key + "]");
              key = truncateSingleValue(key, self.maxKeyLength, "userData max", log);
              value = truncateSingleValue(value, self.maxValueSize, "userData max", log);
              change_custom_property(key, value, "$max");
            },
            min: function(key, value) {
              log(logLevelEnums.INFO, "min, Saving user's minimum custom property value compared to the value: [" + value + "] under the key: [" + key + "]");
              key = truncateSingleValue(key, self.maxKeyLength, "userData min", log);
              value = truncateSingleValue(value, self.maxValueSize, "userData min", log);
              change_custom_property(key, value, "$min");
            },
            push: function(key, value) {
              log(logLevelEnums.INFO, "push, Pushing a value: [" + value + "] under the key: [" + key + "] to user's custom property array");
              key = truncateSingleValue(key, self.maxKeyLength, "userData push", log);
              value = truncateSingleValue(value, self.maxValueSize, "userData push", log);
              change_custom_property(key, value, "$push");
            },
            push_unique: function(key, value) {
              log(logLevelEnums.INFO, "push_unique, Pushing a unique value: [" + value + "] under the key: [" + key + "] to user's custom property array");
              key = truncateSingleValue(key, self.maxKeyLength, "userData push_unique", log);
              value = truncateSingleValue(value, self.maxValueSize, "userData push_unique", log);
              change_custom_property(key, value, "$addToSet");
            },
            pull: function(key, value) {
              log(logLevelEnums.INFO, "pull, Removing the value: [" + value + "] under the key: [" + key + "] from user's custom property array");
              change_custom_property(key, value, "$pull");
            },
            save: function() {
              log(logLevelEnums.INFO, "save, Saving changes to user's custom property");
              if (self.check_consent(featureEnums.USERS)) {
                toRequestQueue({ user_details: JSON.stringify({ custom: customData }) });
              }
              customData = {};
            }
          };
          this.report_trace = function(trace) {
            log(logLevelEnums.INFO, "report_trace, Reporting performance trace");
            if (this.check_consent(featureEnums.APM)) {
              var props = ["type", "name", "stz", "etz", "apm_metrics", "apm_attr"];
              for (var i = 0; i < props.length; i++) {
                if (props[i] !== "apm_attr" && typeof trace[props[i]] === "undefined") {
                  log(logLevelEnums.WARNING, "report_trace, APM trace don't have the property: " + props[i]);
                  return;
                }
              }
              trace.name = truncateSingleValue(trace.name, self.maxKeyLength, "report_trace", log);
              trace.app_metrics = truncateObject(trace.app_metrics, self.maxKeyLength, self.maxValueSize, self.maxSegmentationValues, "report_trace", log);
              var e = createNewObjectFromProperties(trace, props);
              e.timestamp = trace.stz;
              var date = new Date();
              e.hour = date.getHours();
              e.dow = date.getDay();
              toRequestQueue({ apm: JSON.stringify(e) });
              log(logLevelEnums.INFO, "report_trace, Successfully adding APM trace: ", e);
            }
          };
          this.track_errors = function(segments) {
            log(logLevelEnums.INFO, "track_errors, Started tracking errors");
            Countly2.i[this.app_key].tracking_crashes = true;
            if (!window.cly_crashes) {
              window.cly_crashes = true;
              crashSegments = segments;
              window.onerror = function errorBundler(msg, url, line, col, err) {
                if (err !== void 0 && err !== null) {
                  dispatchErrors(err, false);
                } else {
                  col = col || window.event && window.event.errorCharacter;
                  var error = "";
                  if (typeof msg !== "undefined") {
                    error += msg + "\n";
                  }
                  if (typeof url !== "undefined") {
                    error += "at " + url;
                  }
                  if (typeof line !== "undefined") {
                    error += ":" + line;
                  }
                  if (typeof col !== "undefined") {
                    error += ":" + col;
                  }
                  error += "\n";
                  try {
                    var stack = [];
                    var f = errorBundler.caller;
                    while (f) {
                      stack.push(f.name);
                      f = f.caller;
                    }
                    error += stack.join("\n");
                  } catch (ex) {
                    log(logLevelEnums.ERROR, "track_errors, Call stack generation experienced a problem: " + ex);
                  }
                  dispatchErrors(error, false);
                }
              };
              window.addEventListener("unhandledrejection", function(event) {
                dispatchErrors(new Error("Unhandled rejection (reason: " + (event.reason && event.reason.stack ? event.reason.stack : event.reason) + ")."), true);
              });
            }
          };
          this.log_error = function(err, segments) {
            log(logLevelEnums.INFO, "log_error, Logging errors");
            this.recordError(err, true, segments);
          };
          this.add_log = function(record) {
            log(logLevelEnums.INFO, "add_log, Adding a new log of breadcrumbs: [ " + record + " ]");
            if (this.check_consent(featureEnums.CRASHES)) {
              record = truncateSingleValue(record, self.maxValueSize, "add_log", log);
              while (crashLogs.length >= self.maxBreadcrumbCount) {
                crashLogs.shift();
                log(logLevelEnums.WARNING, "add_log, Reached maximum crashLogs size. Will erase the oldest one.");
              }
              crashLogs.push(record);
            }
          };
          this.fetch_remote_config = function(keys, omit_keys, callback) {
            var keysFiltered = null;
            var omitKeysFiltered = null;
            var callbackFiltered = null;
            if (keys) {
              if (!callback && typeof keys === "function") {
                callbackFiltered = keys;
              } else if (Array.isArray(keys)) {
                keysFiltered = keys;
              }
            }
            if (omit_keys) {
              if (!callback && typeof omit_keys === "function") {
                callbackFiltered = omit_keys;
              } else if (Array.isArray(omit_keys)) {
                omitKeysFiltered = omit_keys;
              }
            }
            if (!callbackFiltered && typeof callback === "function") {
              callbackFiltered = callback;
            }
            if (this.useExplicitRcApi) {
              log(logLevelEnums.INFO, "fetch_remote_config, Fetching remote config");
              var opt = this.rcAutoOptinAb ? 1 : 0;
              fetch_remote_config_explicit(keysFiltered, omitKeysFiltered, opt, null, callbackFiltered);
              return;
            }
            log(logLevelEnums.WARNING, "fetch_remote_config, Fetching remote config, with legacy API");
            fetch_remote_config_explicit(keysFiltered, omitKeysFiltered, null, "legacy", callbackFiltered);
          };
          function fetch_remote_config_explicit(keys, omit_keys, optIn, api, callback) {
            log(logLevelEnums.INFO, "fetch_remote_config_explicit, Fetching sequence initiated");
            var request = {
              method: "rc"
            };
            if (keys) {
              request.keys = JSON.stringify(keys);
            }
            if (omit_keys) {
              request.omit_keys = JSON.stringify(omit_keys);
            }
            var providedCall;
            if (api === "legacy") {
              request.method = "fetch_remote_config";
            }
            if (optIn === 0) {
              request.oi = 0;
            }
            if (optIn === 1) {
              request.oi = 1;
            }
            if (typeof callback === "function") {
              providedCall = callback;
            }
            if (self.check_consent(featureEnums.SESSIONS)) {
              request.metrics = JSON.stringify(getMetrics());
            }
            if (self.check_consent(featureEnums.REMOTE_CONFIG)) {
              prepareRequest(request);
              sendXmlHttpRequest("fetch_remote_config_explicit", self.url + readPath, request, function(err, params, responseText) {
                if (err) {
                  log(logLevelEnums.ERROR, "fetch_remote_config_explicit, An error occurred: " + err);
                  return;
                }
                try {
                  var configs = JSON.parse(responseText);
                  if (request.keys || request.omit_keys) {
                    for (var i in configs) {
                      remoteConfigs[i] = configs[i];
                    }
                  } else {
                    remoteConfigs = configs;
                  }
                  setValueInStorage("cly_remote_configs", remoteConfigs);
                } catch (ex) {
                  log(logLevelEnums.ERROR, "fetch_remote_config_explicit, Had an issue while parsing the response: " + ex);
                }
                if (providedCall) {
                  log(logLevelEnums.INFO, "fetch_remote_config_explicit, Callback function is provided");
                  providedCall(err, remoteConfigs);
                }
              }, true);
            } else {
              log(logLevelEnums.ERROR, "fetch_remote_config_explicit, Remote config requires explicit consent");
              if (providedCall) {
                providedCall(new Error("Remote config requires explicit consent"), remoteConfigs);
              }
            }
          }
          this.enrollUserToAb = function(keys) {
            log(logLevelEnums.INFO, "enrollUserToAb, Providing AB test keys to opt in for");
            if (!keys || !Array.isArray(keys) || keys.length === 0) {
              log(logLevelEnums.ERROR, "enrollUserToAb, No keys provided");
              return;
            }
            var request = {
              method: "ab",
              keys: JSON.stringify(keys)
            };
            prepareRequest(request);
            sendXmlHttpRequest("enrollUserToAb", this.url + readPath, request, function(err, params, responseText) {
              if (err) {
                log(logLevelEnums.ERROR, "enrollUserToAb, An error occurred: " + err);
                return;
              }
              try {
                var resp = JSON.parse(responseText);
                log(logLevelEnums.DEBUG, "enrollUserToAb, Parsed the response's result: [" + resp.result + "]");
              } catch (ex) {
                log(logLevelEnums.ERROR, "enrollUserToAb, Had an issue while parsing the response: " + ex);
              }
            }, true);
          };
          this.get_remote_config = function(key) {
            log(logLevelEnums.INFO, "get_remote_config, Getting remote config from storage");
            if (typeof key !== "undefined") {
              return remoteConfigs[key];
            }
            return remoteConfigs;
          };
          this.stop_time = function() {
            log(logLevelEnums.INFO, "stop_time, Stopping tracking duration");
            if (trackTime) {
              trackTime = false;
              storedDuration = getTimestamp() - lastBeat;
              lastViewStoredDuration = getTimestamp() - lastViewTime;
            }
          };
          this.start_time = function() {
            log(logLevelEnums.INFO, "start_time, Starting tracking duration");
            if (!trackTime) {
              trackTime = true;
              lastBeat = getTimestamp() - storedDuration;
              lastViewTime = getTimestamp() - lastViewStoredDuration;
              lastViewStoredDuration = 0;
              extendSession();
            }
          };
          this.track_sessions = function() {
            log(logLevelEnums.INFO, "track_session, Starting tracking user session");
            this.begin_session();
            this.start_time();
            add_event(window, "beforeunload", function() {
              sendEventsForced();
              self.end_session();
            });
            var hidden = "hidden";
            function onchange() {
              if (document[hidden] || !document.hasFocus()) {
                self.stop_time();
              } else {
                self.start_time();
              }
            }
            add_event(window, "focus", onchange);
            add_event(window, "blur", onchange);
            add_event(window, "pageshow", onchange);
            add_event(window, "pagehide", onchange);
            if ("onfocusin" in document) {
              add_event(window, "focusin", onchange);
              add_event(window, "focusout", onchange);
            }
            if (hidden in document) {
              document.addEventListener("visibilitychange", onchange);
            } else if ("mozHidden" in document) {
              hidden = "mozHidden";
              document.addEventListener("mozvisibilitychange", onchange);
            } else if ("webkitHidden" in document) {
              hidden = "webkitHidden";
              document.addEventListener("webkitvisibilitychange", onchange);
            } else if ("msHidden" in document) {
              hidden = "msHidden";
              document.addEventListener("msvisibilitychange", onchange);
            }
            function resetInactivity() {
              if (inactivityCounter >= inactivityTime) {
                self.start_time();
              }
              inactivityCounter = 0;
            }
            add_event(window, "mousemove", resetInactivity);
            add_event(window, "click", resetInactivity);
            add_event(window, "keydown", resetInactivity);
            add_event(window, "scroll", resetInactivity);
            setInterval(function() {
              inactivityCounter++;
              if (inactivityCounter >= inactivityTime) {
                self.stop_time();
              }
            }, 6e4);
          };
          this.track_pageview = function(page, ignoreList, viewSegments) {
            log(logLevelEnums.INFO, "track_pageview, Tracking page views");
            log(logLevelEnums.VERBOSE, "track_pageview, last view is:[" + lastView + "]");
            if (lastView) {
              log(logLevelEnums.DEBUG, "track_pageview, Scroll registry triggered");
              processScrollView();
              isScrollRegistryOpen = true;
              scrollRegistryTopPosition = 0;
            }
            reportViewDuration();
            page = truncateSingleValue(page, self.maxKeyLength, "track_pageview", log);
            if (page && Array.isArray(page)) {
              ignoreList = page;
              page = null;
            }
            if (!page) {
              page = this.getViewName();
            }
            if (page === void 0 || page === "") {
              log(logLevelEnums.ERROR, "track_pageview, No page name to track (it is either undefined or empty string). No page view can be tracked.");
              return;
            }
            if (page === null) {
              log(logLevelEnums.ERROR, "track_pageview, View name returned as null. Page view will be ignored.");
              return;
            }
            if (ignoreList && ignoreList.length) {
              for (var i = 0; i < ignoreList.length; i++) {
                try {
                  var reg = new RegExp(ignoreList[i]);
                  if (reg.test(page)) {
                    log(logLevelEnums.INFO, "track_pageview, Ignoring the page: " + page);
                    return;
                  }
                } catch (ex) {
                  log(logLevelEnums.ERROR, "track_pageview, Problem with finding ignore list item: " + ignoreList[i] + ", error: " + ex);
                }
              }
            }
            lastView = page;
            lastViewTime = getTimestamp();
            log(logLevelEnums.VERBOSE, "track_pageview, last view is assigned:[" + lastView + "]");
            var segments = {
              name: page,
              visit: 1,
              view: self.getViewUrl()
            };
            segments = truncateObject(segments, self.maxKeyLength, self.maxValueSize, self.maxSegmentationValues, "track_pageview", log);
            if (this.track_domains) {
              segments.domain = window.location.hostname;
            }
            if (useSessionCookie) {
              if (!sessionStarted) {
                var expire = getValueFromStorage("cly_session");
                if (!expire || parseInt(expire) <= getTimestamp()) {
                  firstView = false;
                  segments.start = 1;
                }
              } else if (firstView) {
                firstView = false;
                segments.start = 1;
              }
            } else if (typeof document.referrer !== "undefined" && document.referrer.length) {
              var matches = urlParseRE.exec(document.referrer);
              if (matches && matches[11] && matches[11] !== window.location.hostname) {
                segments.start = 1;
              }
            }
            if (viewSegments) {
              viewSegments = truncateObject(viewSegments, self.maxKeyLength, self.maxValueSize, self.maxSegmentationValues, "track_pageview", log);
              for (var key in viewSegments) {
                if (typeof segments[key] === "undefined") {
                  segments[key] = viewSegments[key];
                }
              }
            }
            if (this.check_consent(featureEnums.VIEWS)) {
              add_cly_events({
                key: internalEventKeyEnums.VIEW,
                segmentation: segments
              });
            } else {
              lastParams.track_pageview = arguments;
            }
          };
          this.track_view = function(page, ignoreList, segments) {
            log(logLevelEnums.INFO, "track_view, Initiating tracking page views");
            this.track_pageview(page, ignoreList, segments);
          };
          this.track_clicks = function(parent) {
            log(logLevelEnums.INFO, "track_clicks, Starting to track clicks");
            if (parent) {
              log(logLevelEnums.INFO, "track_clicks, Tracking the specified children:[" + parent + "]");
            }
            parent = parent || document;
            var shouldProcess = true;
            function processClick(event) {
              if (shouldProcess) {
                shouldProcess = false;
                get_page_coord(event);
                if (typeof event.pageX !== "undefined" && typeof event.pageY !== "undefined") {
                  var height = getDocHeight();
                  var width = getDocWidth();
                  if (self.check_consent(featureEnums.CLICKS)) {
                    var segments = {
                      type: "click",
                      x: event.pageX,
                      y: event.pageY,
                      width,
                      height,
                      view: self.getViewUrl()
                    };
                    segments = truncateObject(segments, self.maxKeyLength, self.maxValueSize, self.maxSegmentationValues, "processClick", log);
                    if (self.track_domains) {
                      segments.domain = window.location.hostname;
                    }
                    add_cly_events({
                      key: internalEventKeyEnums.ACTION,
                      segmentation: segments
                    });
                  }
                }
                setTimeout(function() {
                  shouldProcess = true;
                }, 1e3);
              }
            }
            add_event(parent, "click", processClick);
          };
          this.track_scrolls = function(parent) {
            log(logLevelEnums.INFO, "track_scrolls, Starting to track scrolls");
            if (parent) {
              log(logLevelEnums.INFO, "track_scrolls, Tracking the specified children");
            }
            parent = parent || window;
            isScrollRegistryOpen = true;
            add_event(parent, "scroll", processScroll);
            add_event(parent, "beforeunload", processScrollView);
          };
          this.track_links = function(parent) {
            log(logLevelEnums.INFO, "track_links, Starting to track clicks to links");
            if (parent) {
              log(logLevelEnums.INFO, "track_links, Tracking the specified children");
            }
            parent = parent || document;
            function processClick(event) {
              var elem = get_closest_element(get_event_target(event), "a");
              if (elem) {
                get_page_coord(event);
                if (self.check_consent(featureEnums.CLICKS)) {
                  add_cly_events({
                    key: "linkClick",
                    segmentation: {
                      href: elem.href,
                      text: elem.innerText,
                      id: elem.id,
                      view: self.getViewUrl()
                    }
                  });
                }
              }
            }
            add_event(parent, "click", processClick);
          };
          this.track_forms = function(parent, trackHidden) {
            log(logLevelEnums.INFO, "track_forms, Starting to track form submissions. DOM object provided:[" + !!parent + "] Tracking hidden inputs :[" + !!trackHidden + "]");
            parent = parent || document;
            function getInputName(input) {
              return input.name || input.id || input.type || input.nodeName;
            }
            function processForm(event) {
              var form = get_event_target(event);
              var segmentation = {
                id: form.attributes.id && form.attributes.id.nodeValue,
                name: form.attributes.name && form.attributes.name.nodeValue,
                action: form.attributes.action && form.attributes.action.nodeValue,
                method: form.attributes.method && form.attributes.method.nodeValue,
                view: self.getViewUrl()
              };
              var input;
              if (typeof form.elements !== "undefined") {
                for (var i = 0; i < form.elements.length; i++) {
                  input = form.elements[i];
                  if (input && input.type !== "password" && input.className.indexOf("cly_user_ignore") === -1) {
                    if (typeof segmentation["input:" + getInputName(input)] === "undefined") {
                      segmentation["input:" + getInputName(input)] = [];
                    }
                    if (input.nodeName.toLowerCase() === "select") {
                      if (typeof input.multiple !== "undefined") {
                        segmentation["input:" + getInputName(input)].push(getMultiSelectValues(input));
                      } else {
                        segmentation["input:" + getInputName(input)].push(input.options[input.selectedIndex].value);
                      }
                    } else if (input.nodeName.toLowerCase() === "input") {
                      if (typeof input.type !== "undefined") {
                        if (input.type.toLowerCase() === "checkbox" || input.type.toLowerCase() === "radio") {
                          if (input.checked) {
                            segmentation["input:" + getInputName(input)].push(input.value);
                          }
                        } else if (input.type.toLowerCase() !== "hidden" || trackHidden) {
                          segmentation["input:" + getInputName(input)].push(input.value);
                        }
                      } else {
                        segmentation["input:" + getInputName(input)].push(input.value);
                      }
                    } else if (input.nodeName.toLowerCase() === "textarea") {
                      segmentation["input:" + getInputName(input)].push(input.value);
                    } else if (typeof input.value !== "undefined") {
                      segmentation["input:" + getInputName(input)].push(input.value);
                    }
                  }
                }
                for (var key in segmentation) {
                  if (segmentation[key] && typeof segmentation[key].join === "function") {
                    segmentation[key] = segmentation[key].join(", ");
                  }
                }
              }
              if (self.check_consent(featureEnums.FORMS)) {
                add_cly_events({
                  key: "formSubmit",
                  segmentation
                });
              }
            }
            add_event(parent, "submit", processForm);
          };
          this.collect_from_forms = function(parent, useCustom) {
            log(logLevelEnums.INFO, "collect_from_forms, Starting to collect possible user data. DOM object provided:[" + !!parent + "] Submitting custom user property:[" + !!useCustom + "]");
            parent = parent || document;
            function processForm(event) {
              var form = get_event_target(event);
              var userdata = {};
              var hasUserInfo = false;
              var input;
              if (typeof form.elements !== "undefined") {
                var labelData = {};
                var labels = parent.getElementsByTagName("LABEL");
                var i;
                var j;
                for (i = 0; i < labels.length; i++) {
                  if (labels[i].htmlFor && labels[i].htmlFor !== "") {
                    labelData[labels[i].htmlFor] = labels[i].innerText || labels[i].textContent || labels[i].innerHTML;
                  }
                }
                for (i = 0; i < form.elements.length; i++) {
                  input = form.elements[i];
                  if (input && input.type !== "password") {
                    if (input.className.indexOf("cly_user_ignore") === -1) {
                      var value = "";
                      if (input.nodeName.toLowerCase() === "select") {
                        if (typeof input.multiple !== "undefined") {
                          value = getMultiSelectValues(input);
                        } else {
                          value = input.options[input.selectedIndex].value;
                        }
                      } else if (input.nodeName.toLowerCase() === "input") {
                        if (typeof input.type !== "undefined") {
                          if (input.type.toLowerCase() === "checkbox" || input.type.toLowerCase() === "radio") {
                            if (input.checked) {
                              value = input.value;
                            }
                          } else {
                            value = input.value;
                          }
                        } else {
                          value = input.value;
                        }
                      } else if (input.nodeName.toLowerCase() === "textarea") {
                        value = input.value;
                      } else if (typeof input.value !== "undefined") {
                        value = input.value;
                      }
                      if (input.className && input.className.indexOf("cly_user_") !== -1) {
                        var classes = input.className.split(" ");
                        for (j = 0; j < classes.length; j++) {
                          if (classes[j].indexOf("cly_user_") === 0) {
                            userdata[classes[j].replace("cly_user_", "")] = value;
                            hasUserInfo = true;
                            break;
                          }
                        }
                      } else if (input.type && input.type.toLowerCase() === "email" || input.name && input.name.toLowerCase().indexOf("email") !== -1 || input.id && input.id.toLowerCase().indexOf("email") !== -1 || input.id && labelData[input.id] && labelData[input.id].toLowerCase().indexOf("email") !== -1 || /[^@\s]+@[^@\s]+\.[^@\s]+/.test(value)) {
                        if (!userdata.email) {
                          userdata.email = value;
                        }
                        hasUserInfo = true;
                      } else if (input.name && input.name.toLowerCase().indexOf("username") !== -1 || input.id && input.id.toLowerCase().indexOf("username") !== -1 || input.id && labelData[input.id] && labelData[input.id].toLowerCase().indexOf("username") !== -1) {
                        if (!userdata.username) {
                          userdata.username = value;
                        }
                        hasUserInfo = true;
                      } else if (input.name && (input.name.toLowerCase().indexOf("tel") !== -1 || input.name.toLowerCase().indexOf("phone") !== -1 || input.name.toLowerCase().indexOf("number") !== -1) || input.id && (input.id.toLowerCase().indexOf("tel") !== -1 || input.id.toLowerCase().indexOf("phone") !== -1 || input.id.toLowerCase().indexOf("number") !== -1) || input.id && labelData[input.id] && (labelData[input.id].toLowerCase().indexOf("tel") !== -1 || labelData[input.id].toLowerCase().indexOf("phone") !== -1 || labelData[input.id].toLowerCase().indexOf("number") !== -1)) {
                        if (!userdata.phone) {
                          userdata.phone = value;
                        }
                        hasUserInfo = true;
                      } else if (input.name && (input.name.toLowerCase().indexOf("org") !== -1 || input.name.toLowerCase().indexOf("company") !== -1) || input.id && (input.id.toLowerCase().indexOf("org") !== -1 || input.id.toLowerCase().indexOf("company") !== -1) || input.id && labelData[input.id] && (labelData[input.id].toLowerCase().indexOf("org") !== -1 || labelData[input.id].toLowerCase().indexOf("company") !== -1)) {
                        if (!userdata.organization) {
                          userdata.organization = value;
                        }
                        hasUserInfo = true;
                      } else if (input.name && input.name.toLowerCase().indexOf("name") !== -1 || input.id && input.id.toLowerCase().indexOf("name") !== -1 || input.id && labelData[input.id] && labelData[input.id].toLowerCase().indexOf("name") !== -1) {
                        if (!userdata.name) {
                          userdata.name = "";
                        }
                        userdata.name += value + " ";
                        hasUserInfo = true;
                      }
                    }
                  }
                }
              }
              if (hasUserInfo) {
                log(logLevelEnums.INFO, "collect_from_forms, Gathered user data", userdata);
                if (useCustom) {
                  self.user_details({ custom: userdata });
                } else {
                  self.user_details(userdata);
                }
              }
            }
            add_event(parent, "submit", processForm);
          };
          this.collect_from_facebook = function(custom) {
            log(logLevelEnums.INFO, "collect_from_facebook, Starting to collect possible user data");
            if (FB && FB.api) {
              FB.api("/me", function(resp) {
                var data = {};
                if (resp.name) {
                  data.name = resp.name;
                }
                if (resp.email) {
                  data.email = resp.email;
                }
                if (resp.gender === "male") {
                  data.gender = "M";
                } else if (resp.gender === "female") {
                  data.gender = "F";
                }
                if (resp.birthday) {
                  var byear = resp.birthday.split("/").pop();
                  if (byear && byear.length === 4) {
                    data.byear = byear;
                  }
                }
                if (resp.work && resp.work[0] && resp.work[0].employer && resp.work[0].employer.name) {
                  data.organization = resp.work[0].employer.name;
                }
                if (custom) {
                  data.custom = {};
                  for (var i in custom) {
                    var parts = custom[i].split(".");
                    var get = resp;
                    for (var j = 0; j < parts.length; j++) {
                      get = get[parts[j]];
                      if (typeof get === "undefined") {
                        break;
                      }
                    }
                    if (typeof get !== "undefined") {
                      data.custom[i] = get;
                    }
                  }
                }
                self.user_details(data);
              });
            }
          };
          this.opt_out = function() {
            log(logLevelEnums.INFO, "opt_out, Opting out the user");
            this.ignore_visitor = true;
            setValueInStorage("cly_ignore", true);
          };
          this.opt_in = function() {
            log(logLevelEnums.INFO, "opt_in, Opting in the user");
            setValueInStorage("cly_ignore", false);
            this.ignore_visitor = false;
            checkIgnore();
            if (!this.ignore_visitor && !hasPulse) {
              heartBeat();
            }
          };
          this.report_feedback = function(ratingWidget) {
            log(logLevelEnums.WARNING, "report_feedback, Deprecated function call! Use 'recordRatingWidgetWithID' or 'reportFeedbackWidgetManually' in place of this call. Call will be redirected to 'recordRatingWidgetWithID' now!");
            this.recordRatingWidgetWithID(ratingWidget);
          };
          this.recordRatingWidgetWithID = function(ratingWidget) {
            log(logLevelEnums.INFO, "recordRatingWidgetWithID, Providing information about user with ID: [ " + ratingWidget.widget_id + " ]");
            if (!this.check_consent(featureEnums.STAR_RATING)) {
              return;
            }
            if (!ratingWidget.widget_id) {
              log(logLevelEnums.ERROR, "recordRatingWidgetWithID, Rating Widget must contain widget_id property");
              return;
            }
            if (!ratingWidget.rating) {
              log(logLevelEnums.ERROR, "recordRatingWidgetWithID, Rating Widget must contain rating property");
              return;
            }
            var props = ["widget_id", "contactMe", "platform", "app_version", "rating", "email", "comment"];
            var event = {
              key: internalEventKeyEnums.STAR_RATING,
              count: 1,
              segmentation: {}
            };
            event.segmentation = createNewObjectFromProperties(ratingWidget, props);
            if (!event.segmentation.app_version) {
              event.segmentation.app_version = this.metrics._app_version || this.app_version;
            }
            if (event.segmentation.rating > 5) {
              log(logLevelEnums.WARNING, "recordRatingWidgetWithID, You have entered a rating higher than 5. Changing it back to 5 now.");
              event.segmentation.rating = 5;
            } else if (event.segmentation.rating < 1) {
              log(logLevelEnums.WARNING, "recordRatingWidgetWithID, You have entered a rating lower than 1. Changing it back to 1 now.");
              event.segmentation.rating = 1;
            }
            log(logLevelEnums.INFO, "recordRatingWidgetWithID, Reporting Rating Widget: ", event);
            add_cly_events(event);
          };
          this.reportFeedbackWidgetManually = function(CountlyFeedbackWidget, CountlyWidgetData, widgetResult) {
            if (!this.check_consent(featureEnums.FEEDBACK)) {
              return;
            }
            if (!(CountlyFeedbackWidget && CountlyWidgetData)) {
              log(logLevelEnums.ERROR, "reportFeedbackWidgetManually, Widget data and/or Widget object not provided. Aborting.");
              return;
            }
            if (!CountlyFeedbackWidget._id) {
              log(logLevelEnums.ERROR, "reportFeedbackWidgetManually, Feedback Widgets must contain _id property");
              return;
            }
            if (offlineMode) {
              log(logLevelEnums.ERROR, "reportFeedbackWidgetManually, Feedback Widgets can not be reported in offline mode");
              return;
            }
            log(logLevelEnums.INFO, "reportFeedbackWidgetManually, Providing information about user with, provided result of the widget with  ID: [ " + CountlyFeedbackWidget._id + " ] and type: [" + CountlyFeedbackWidget.type + "]");
            var props = [];
            var type = CountlyFeedbackWidget.type;
            var eventKey;
            if (type === "nps") {
              if (widgetResult) {
                if (!widgetResult.rating) {
                  log(logLevelEnums.ERROR, "reportFeedbackWidgetManually, Widget must contain rating property");
                  return;
                }
                widgetResult.rating = Math.round(widgetResult.rating);
                if (widgetResult.rating > 10) {
                  log(logLevelEnums.WARNING, "reportFeedbackWidgetManually, You have entered a rating higher than 10. Changing it back to 10 now.");
                  widgetResult.rating = 10;
                } else if (widgetResult.rating < 0) {
                  log(logLevelEnums.WARNING, "reportFeedbackWidgetManually, You have entered a rating lower than 0. Changing it back to 0 now.");
                  widgetResult.rating = 0;
                }
                props = ["rating", "comment"];
              }
              eventKey = internalEventKeyEnums.NPS;
            } else if (type === "survey") {
              if (widgetResult) {
                if (Object.keys(widgetResult).length < 1) {
                  log(logLevelEnums.ERROR, "reportFeedbackWidgetManually, Widget should have answers to be reported");
                  return;
                }
                props = Object.keys(widgetResult);
              }
              eventKey = internalEventKeyEnums.SURVEY;
            } else if (type === "rating") {
              if (widgetResult) {
                if (!widgetResult.rating) {
                  log(logLevelEnums.ERROR, "reportFeedbackWidgetManually, Widget must contain rating property");
                  return;
                }
                widgetResult.rating = Math.round(widgetResult.rating);
                if (widgetResult.rating > 5) {
                  log(logLevelEnums.WARNING, "reportFeedbackWidgetManually, You have entered a rating higher than 5. Changing it back to 5 now.");
                  widgetResult.rating = 5;
                } else if (widgetResult.rating < 1) {
                  log(logLevelEnums.WARNING, "reportFeedbackWidgetManually, You have entered a rating lower than 1. Changing it back to 1 now.");
                  widgetResult.rating = 1;
                }
                props = ["rating", "comment", "email", "contactMe"];
              }
              eventKey = internalEventKeyEnums.STAR_RATING;
            } else {
              log(logLevelEnums.ERROR, "reportFeedbackWidgetManually, Widget has an unacceptable type");
              return;
            }
            var event = {
              key: eventKey,
              count: 1,
              segmentation: {
                widget_id: CountlyFeedbackWidget._id,
                platform: this.platform,
                app_version: this.metrics._app_version || this.app_version
              }
            };
            if (widgetResult === null) {
              event.segmentation.closed = 1;
            } else {
              event.segmentation = addNewProperties(event.segmentation, widgetResult, props);
            }
            log(logLevelEnums.INFO, "reportFeedbackWidgetManually, Reporting " + type + ": ", event);
            add_cly_events(event);
          };
          this.show_feedback_popup = function(id) {
            log(logLevelEnums.WARNING, "show_feedback_popup, Deprecated function call! Use 'presentRatingWidgetWithID' in place of this call. Call will be redirected now!");
            this.presentRatingWidgetWithID(id);
          };
          this.presentRatingWidgetWithID = function(id) {
            log(logLevelEnums.INFO, "presentRatingWidgetWithID, Showing rating widget popup for the widget with ID: [ " + id + " ]");
            if (!this.check_consent(featureEnums.STAR_RATING)) {
              return;
            }
            if (offlineMode) {
              log(logLevelEnums.ERROR, "presentRatingWidgetWithID, Cannot show ratingWidget popup in offline mode");
            } else {
              sendXmlHttpRequest("presentRatingWidgetWithID", this.url + "/o/feedback/widget", { widget_id: id }, function(err, params, responseText) {
                if (err) {
                  log(logLevelEnums.ERROR, "presentRatingWidgetWithID, An error occurred: " + err);
                  return;
                }
                try {
                  var currentWidget = JSON.parse(responseText);
                  processWidget(currentWidget, false);
                } catch (JSONParseError) {
                  log(logLevelEnums.ERROR, "presentRatingWidgetWithID, JSON parse failed: " + JSONParseError);
                }
              }, true);
            }
          };
          this.initialize_feedback_popups = function(enableWidgets) {
            log(logLevelEnums.WARNING, "initialize_feedback_popups, Deprecated function call! Use 'initializeRatingWidgets' in place of this call. Call will be redirected now!");
            this.initializeRatingWidgets(enableWidgets);
          };
          this.initializeRatingWidgets = function(enableWidgets) {
            log(logLevelEnums.INFO, "initializeRatingWidgets, Initializing rating widget with provided widget IDs:[ " + enableWidgets + "]");
            if (!this.check_consent(featureEnums.STAR_RATING)) {
              return;
            }
            if (!enableWidgets) {
              enableWidgets = getValueFromStorage("cly_fb_widgets");
            }
            var stickers = document.getElementsByClassName("countly-feedback-sticker");
            while (stickers.length > 0) {
              stickers[0].remove();
            }
            sendXmlHttpRequest("initializeRatingWidgets", this.url + "/o/feedback/multiple-widgets-by-id", { widgets: JSON.stringify(enableWidgets) }, function(err, params, responseText) {
              if (err) {
                log(logLevelEnums.ERROR, "initializeRatingWidgets, An error occurred: " + err);
                return;
              }
              try {
                var widgets = JSON.parse(responseText);
                for (var i = 0; i < widgets.length; i++) {
                  if (widgets[i].is_active === "true") {
                    var target_devices = widgets[i].target_devices;
                    var currentDevice = userAgentDeviceDetection();
                    if (target_devices[currentDevice]) {
                      if (typeof widgets[i].hide_sticker === "string") {
                        widgets[i].hide_sticker = widgets[i].hide_sticker === "true";
                      }
                      if (widgets[i].target_page === "all" && !widgets[i].hide_sticker) {
                        processWidget(widgets[i], true);
                      } else {
                        var pages = widgets[i].target_pages;
                        for (var k = 0; k < pages.length; k++) {
                          var isWildcardMatched = pages[k].substr(0, pages[k].length - 1) === window.location.pathname.substr(0, pages[k].length - 1);
                          var isFullPathMatched = pages[k] === window.location.pathname;
                          var isContainAsterisk = pages[k].includes("*");
                          if ((isContainAsterisk && isWildcardMatched || isFullPathMatched) && !widgets[i].hide_sticker) {
                            processWidget(widgets[i], true);
                          }
                        }
                      }
                    }
                  }
                }
              } catch (JSONParseError) {
                log(logLevelEnums.ERROR, "initializeRatingWidgets, JSON parse error: " + JSONParseError);
              }
            }, true);
          };
          this.enable_feedback = function(params) {
            log(logLevelEnums.WARNING, "enable_feedback, Deprecated function call! Use 'enableRatingWidgets' in place of this call. Call will be redirected now!");
            this.enableRatingWidgets(params);
          };
          this.enableRatingWidgets = function(params) {
            log(logLevelEnums.INFO, "enableRatingWidgets, Enabling rating widget with params:", params);
            if (!this.check_consent(featureEnums.STAR_RATING)) {
              return;
            }
            if (offlineMode) {
              log(logLevelEnums.ERROR, "enableRatingWidgets, Cannot enable rating widgets in offline mode");
            } else {
              setValueInStorage("cly_fb_widgets", params.popups || params.widgets);
              loadCSS(this.url + "/star-rating/stylesheets/countly-feedback-web.css");
              var enableWidgets = params.popups || params.widgets;
              if (enableWidgets.length > 0) {
                document.body.insertAdjacentHTML("beforeend", '<div id="cfbg"></div>');
                this.initializeRatingWidgets(enableWidgets);
              } else {
                log(logLevelEnums.ERROR, "enableRatingWidgets, You should provide at least one widget id as param. Read documentation for more detail. https://resources.count.ly/plugins/feedback");
              }
            }
          };
          this.get_available_feedback_widgets = function(callback) {
            log(logLevelEnums.INFO, "get_available_feedback_widgets, Getting the feedback list, callback function is provided:[" + !!callback + "]");
            if (!this.check_consent(featureEnums.FEEDBACK)) {
              if (callback) {
                callback(null, new Error("Consent for feedback not provided."));
              }
              return;
            }
            if (offlineMode) {
              log(logLevelEnums.ERROR, "get_available_feedback_widgets, Cannot enable feedback widgets in offline mode.");
              return;
            }
            var url = this.url + readPath;
            var data = {
              method: featureEnums.FEEDBACK,
              device_id: this.device_id,
              app_key: this.app_key
            };
            sendXmlHttpRequest("get_available_feedback_widgets", url, data, function(err, params, responseText) {
              if (err) {
                log(logLevelEnums.ERROR, "get_available_feedback_widgets, Error occurred while fetching feedbacks: " + err);
                if (callback) {
                  callback(null, err);
                }
                return;
              }
              try {
                var response = JSON.parse(responseText);
                var feedbacks = response.result || [];
                if (callback) {
                  callback(feedbacks, null);
                }
                return;
              } catch (error) {
                log(logLevelEnums.ERROR, "get_available_feedback_widgets, Error while parsing feedback widgets list: " + error);
                if (callback) {
                  callback(null, error);
                }
              }
            }, false);
          };
          this.getFeedbackWidgetData = function(CountlyFeedbackWidget, callback) {
            if (!CountlyFeedbackWidget.type) {
              log(logLevelEnums.ERROR, "getFeedbackWidgetData, Expected the provided widget object to have a type but got: [" + JSON.stringify(CountlyFeedbackWidget) + "], aborting.");
              return;
            }
            log(logLevelEnums.INFO, "getFeedbackWidgetData, Retrieving data for: [" + JSON.stringify(CountlyFeedbackWidget) + "], callback function is provided:[" + !!callback + "]");
            if (!this.check_consent(featureEnums.FEEDBACK)) {
              if (callback) {
                callback(null, new Error("Consent for feedback not provided."));
              }
              return;
            }
            if (offlineMode) {
              log(logLevelEnums.ERROR, "getFeedbackWidgetData, Cannot enable feedback widgets in offline mode.");
              return;
            }
            var url = this.url;
            var data = {
              widget_id: CountlyFeedbackWidget._id,
              shown: 1,
              sdk_version: SDK_VERSION,
              sdk_name: SDK_NAME,
              platform: this.platform,
              app_version: this.app_version
            };
            if (CountlyFeedbackWidget.type === "nps") {
              url += "/o/surveys/nps/widget";
            } else if (CountlyFeedbackWidget.type === "survey") {
              url += "/o/surveys/survey/widget";
            } else if (CountlyFeedbackWidget.type === "rating") {
              url += "/o/surveys/rating/widget";
            } else {
              log(logLevelEnums.ERROR, "getFeedbackWidgetData, Unknown type info: [" + CountlyFeedbackWidget.type + "]");
              return;
            }
            sendXmlHttpRequest("getFeedbackWidgetData", url, data, responseCallback, true);
            function responseCallback(err, params, responseText) {
              if (err) {
                log(logLevelEnums.ERROR, "getFeedbackWidgetData, Error occurred while fetching feedbacks: " + err);
                if (callback) {
                  callback(null, err);
                }
                return;
              }
              try {
                var response = JSON.parse(responseText);
                if (callback) {
                  callback(response, null);
                }
                return;
              } catch (error) {
                log(logLevelEnums.ERROR, "getFeedbackWidgetData, Error while parsing feedback widgets list: " + error);
                if (callback) {
                  callback(null, error);
                }
              }
            }
          };
          this.present_feedback_widget = function(presentableFeedback, id, className) {
            log(logLevelEnums.INFO, "present_feedback_widget, Presenting the feedback widget by appending to the element with ID: [ " + id + " ] and className: [ " + className + " ]");
            if (!this.check_consent(featureEnums.FEEDBACK)) {
              return;
            }
            if (!presentableFeedback || typeof presentableFeedback !== "object" || Array.isArray(presentableFeedback)) {
              log(logLevelEnums.ERROR, "present_feedback_widget, Please provide at least one feedback widget object.");
              return;
            }
            try {
              var url = this.url;
              if (presentableFeedback.type === "nps") {
                log(logLevelEnums.DEBUG, "present_feedback_widget, Widget type: nps.");
                url += "/feedback/nps";
              } else if (presentableFeedback.type === "survey") {
                log(logLevelEnums.DEBUG, "present_feedback_widget, Widget type: survey.");
                url += "/feedback/survey";
              } else if (presentableFeedback.type === "rating") {
                log(logLevelEnums.DEBUG, "present_feedback_widget, Widget type: rating.");
                url += "/feedback/rating";
              } else {
                log(logLevelEnums.ERROR, "present_feedback_widget, Feedback widget only accepts nps, rating and survey types.");
                return;
              }
              var passedOrigin = window.origin || window.location.origin;
              var feedbackWidgetFamily;
              if (presentableFeedback.type === "rating") {
                log(logLevelEnums.DEBUG, "present_feedback_widget, Loading css for rating widget.");
                feedbackWidgetFamily = "ratings";
                loadCSS(this.url + "/star-rating/stylesheets/countly-feedback-web.css");
              } else {
                log(logLevelEnums.DEBUG, "present_feedback_widget, Loading css for survey or nps.");
                loadCSS(this.url + "/surveys/stylesheets/countly-surveys.css");
                feedbackWidgetFamily = "surveys";
              }
              url += "?widget_id=" + presentableFeedback._id;
              url += "&app_key=" + this.app_key;
              url += "&device_id=" + this.device_id;
              url += "&sdk_name=" + SDK_NAME;
              url += "&platform=" + this.platform;
              url += "&app_version=" + this.app_version;
              url += "&sdk_version=" + SDK_VERSION;
              url += "&origin=" + passedOrigin;
              url += "&widget_v=web";
              var iframe = document.createElement("iframe");
              iframe.src = url;
              iframe.name = "countly-" + feedbackWidgetFamily + "-iframe";
              iframe.id = "countly-" + feedbackWidgetFamily + "-iframe";
              var initiated = false;
              iframe.onload = function() {
                if (initiated) {
                  document.getElementById("countly-" + feedbackWidgetFamily + "-wrapper-" + presentableFeedback._id).style.display = "none";
                  document.getElementById("csbg").style.display = "none";
                }
                initiated = true;
                log(logLevelEnums.DEBUG, "present_feedback_widget, Loaded iframe.");
              };
              var overlay = document.getElementById("csbg");
              while (overlay) {
                overlay.remove();
                overlay = document.getElementById("csbg");
                log(logLevelEnums.DEBUG, "present_feedback_widget, Removing past overlay.");
              }
              var wrapper = document.getElementsByClassName("countly-" + feedbackWidgetFamily + "-wrapper");
              for (var i = 0; i < wrapper.length; i++) {
                wrapper[i].remove();
                log(logLevelEnums.DEBUG, "present_feedback_widget, Removed a wrapper.");
              }
              wrapper = document.createElement("div");
              wrapper.className = "countly-" + feedbackWidgetFamily + "-wrapper";
              wrapper.id = "countly-" + feedbackWidgetFamily + "-wrapper-" + presentableFeedback._id;
              if (presentableFeedback.type === "survey") {
                wrapper.className = wrapper.className + " " + presentableFeedback.appearance.position;
              }
              var element = document.body;
              var found = false;
              if (id) {
                if (document.getElementById(id)) {
                  element = document.getElementById(id);
                  found = true;
                } else {
                  log(logLevelEnums.ERROR, "present_feedback_widget, Provided ID not found.");
                }
              }
              if (!found) {
                if (className) {
                  if (document.getElementsByClassName(className)[0]) {
                    element = document.getElementsByClassName(className)[0];
                  } else {
                    log(logLevelEnums.ERROR, "present_feedback_widget, Provided class not found.");
                  }
                }
              }
              element.insertAdjacentHTML("beforeend", '<div id="csbg"></div>');
              element.appendChild(wrapper);
              if (presentableFeedback.type === "rating") {
                var ratingsOverlay = document.createElement("div");
                ratingsOverlay.className = "countly-ratings-overlay";
                ratingsOverlay.id = "countly-ratings-overlay-" + presentableFeedback._id;
                wrapper.appendChild(ratingsOverlay);
                log(logLevelEnums.DEBUG, "present_feedback_widget, appended the rating overlay to wrapper");
                add_event(document.getElementById("countly-ratings-overlay-" + presentableFeedback._id), "click", function() {
                  document.getElementById("countly-ratings-wrapper-" + presentableFeedback._id).style.display = "none";
                });
              }
              wrapper.appendChild(iframe);
              log(logLevelEnums.DEBUG, "present_feedback_widget, Appended the iframe");
              add_event(window, "message", function(e) {
                var data = {};
                try {
                  data = JSON.parse(e.data);
                  log(logLevelEnums.DEBUG, "present_feedback_widget, Parsed response message " + data);
                } catch (ex) {
                  log(logLevelEnums.ERROR, "present_feedback_widget, Error while parsing message body " + ex);
                }
                if (!data.close) {
                  log(logLevelEnums.DEBUG, "present_feedback_widget, Closing signal not sent yet");
                  return;
                }
                document.getElementById("countly-" + feedbackWidgetFamily + "-wrapper-" + presentableFeedback._id).style.display = "none";
                document.getElementById("csbg").style.display = "none";
              });
              if (presentableFeedback.type === "survey") {
                var surveyShown = false;
                switch (presentableFeedback.showPolicy) {
                  case "afterPageLoad":
                    if (document.readyState === "complete") {
                      if (!surveyShown) {
                        surveyShown = true;
                        showSurvey(presentableFeedback);
                      }
                    } else {
                      add_event(document, "readystatechange", function(e) {
                        if (e.target.readyState === "complete") {
                          if (!surveyShown) {
                            surveyShown = true;
                            showSurvey(presentableFeedback);
                          }
                        }
                      });
                    }
                    break;
                  case "afterConstantDelay":
                    setTimeout(function() {
                      if (!surveyShown) {
                        surveyShown = true;
                        showSurvey(presentableFeedback);
                      }
                    }, 1e4);
                    break;
                  case "onAbandon":
                    if (document.readyState === "complete") {
                      add_event(document, "mouseleave", function() {
                        if (!surveyShown) {
                          surveyShown = true;
                          showSurvey(presentableFeedback);
                        }
                      });
                    } else {
                      add_event(document, "readystatechange", function(e) {
                        if (e.target.readyState === "complete") {
                          add_event(document, "mouseleave", function() {
                            if (!surveyShown) {
                              surveyShown = true;
                              showSurvey(presentableFeedback);
                            }
                          });
                        }
                      });
                    }
                    break;
                  case "onScrollHalfwayDown":
                    add_event(window, "scroll", function() {
                      if (!surveyShown) {
                        var scrollY = Math.max(window.scrollY, document.body.scrollTop, document.documentElement.scrollTop);
                        var documentHeight = getDocHeight();
                        if (scrollY >= documentHeight / 2) {
                          surveyShown = true;
                          showSurvey(presentableFeedback);
                        }
                      }
                    });
                    break;
                  default:
                    if (!surveyShown) {
                      surveyShown = true;
                      showSurvey(presentableFeedback);
                    }
                }
              } else if (presentableFeedback.type === "nps") {
                document.getElementById("countly-" + feedbackWidgetFamily + "-wrapper-" + presentableFeedback._id).style.display = "block";
                document.getElementById("csbg").style.display = "block";
              } else if (presentableFeedback.type === "rating") {
                var ratingShown = false;
                if (document.readyState === "complete") {
                  if (!ratingShown) {
                    ratingShown = true;
                    showRatingForFeedbackWidget(presentableFeedback);
                  }
                } else {
                  add_event(document, "readystatechange", function(e) {
                    if (e.target.readyState === "complete") {
                      if (!ratingShown) {
                        ratingShown = true;
                        showRatingForFeedbackWidget(presentableFeedback);
                      }
                    }
                  });
                }
              }
            } catch (e) {
              log(logLevelEnums.ERROR, "present_feedback_widget, Something went wrong while presenting the widget: " + e);
            }
            function showSurvey(feedback) {
              document.getElementById("countly-surveys-wrapper-" + feedback._id).style.display = "block";
              document.getElementById("csbg").style.display = "block";
            }
            function showRatingForFeedbackWidget(feedback) {
              if (!feedback.appearance.hideS) {
                log(logLevelEnums.DEBUG, "present_feedback_widget, handling the sticker as it was not set to hidden");
                var sticker = document.createElement("div");
                sticker.innerText = feedback.appearance.text;
                sticker.style.color = feedback.appearance.text_color.length < 7 ? "#" + feedback.appearance.text_color : feedback.appearance.text_color;
                sticker.style.backgroundColor = feedback.appearance.bg_color.length < 7 ? "#" + feedback.appearance.bg_color : feedback.appearance.bg_color;
                sticker.className = "countly-feedback-sticker  " + feedback.appearance.position + "-" + feedback.appearance.size;
                sticker.id = "countly-feedback-sticker-" + feedback._id;
                document.body.appendChild(sticker);
                add_event(document.getElementById("countly-feedback-sticker-" + feedback._id), "click", function() {
                  document.getElementById("countly-ratings-wrapper-" + feedback._id).style.display = "flex";
                  document.getElementById("csbg").style.display = "block";
                });
              }
              add_event(document.getElementById("countly-feedback-close-icon-" + feedback._id), "click", function() {
                document.getElementById("countly-ratings-wrapper-" + feedback._id).style.display = "none";
                document.getElementById("csbg").style.display = "none";
              });
            }
          };
          this.recordError = function(err, nonfatal, segments) {
            log(logLevelEnums.INFO, "recordError, Recording error");
            if (this.check_consent(featureEnums.CRASHES) && err) {
              segments = segments || crashSegments;
              var error = "";
              if (typeof err === "object") {
                if (typeof err.stack !== "undefined") {
                  error = err.stack;
                } else {
                  if (typeof err.name !== "undefined") {
                    error += err.name + ":";
                  }
                  if (typeof err.message !== "undefined") {
                    error += err.message + "\n";
                  }
                  if (typeof err.fileName !== "undefined") {
                    error += "in " + err.fileName + "\n";
                  }
                  if (typeof err.lineNumber !== "undefined") {
                    error += "on " + err.lineNumber;
                  }
                  if (typeof err.columnNumber !== "undefined") {
                    error += ":" + err.columnNumber;
                  }
                }
              } else {
                error = err + "";
              }
              if (error.length > self.maxStackTraceLineLength * self.maxStackTraceLinesPerThread) {
                log(logLevelEnums.DEBUG, "record_error, Error stack is too long will be truncated");
                var splittedError = error.split("\n");
                if (splittedError.length > self.maxStackTraceLinesPerThread) {
                  splittedError = splittedError.splice(0, self.maxStackTraceLinesPerThread);
                }
                for (var i = 0, len = splittedError.length; i < len; i++) {
                  if (splittedError[i].length > self.maxStackTraceLineLength) {
                    splittedError[i] = splittedError[i].substring(0, self.maxStackTraceLineLength);
                  }
                }
                error = splittedError.join("\n");
              }
              nonfatal = !!nonfatal;
              var metrics = getMetrics();
              var obj = { _resolution: metrics._resolution, _error: error, _app_version: metrics._app_version, _run: getTimestamp() - startTime };
              obj._not_os_specific = true;
              obj._javascript = true;
              var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery || navigator.msBattery;
              if (battery) {
                obj._bat = Math.floor(battery.level * 100);
              }
              if (typeof navigator.onLine !== "undefined") {
                obj._online = !!navigator.onLine;
              }
              obj._background = !document.hasFocus();
              if (crashLogs.length > 0) {
                obj._logs = crashLogs.join("\n");
              }
              crashLogs = [];
              obj._nonfatal = nonfatal;
              obj._view = this.getViewName();
              if (typeof segments !== "undefined") {
                segments = truncateObject(segments, self.maxKeyLength, self.maxValueSize, self.maxSegmentationValues, "record_error", log);
                obj._custom = segments;
              }
              try {
                var canvas = document.createElement("canvas");
                var gl = canvas.getContext("experimental-webgl");
                obj._opengl = gl.getParameter(gl.VERSION);
              } catch (ex) {
                log(logLevelEnums.ERROR, "Could not get the experimental-webgl context: " + ex);
              }
              var req = {};
              req.crash = JSON.stringify(obj);
              req.metrics = JSON.stringify({ _ua: metrics._ua });
              toRequestQueue(req);
            }
          };
          function checkIgnore() {
            if (self.ignore_prefetch && typeof document.visibilityState !== "undefined" && document.visibilityState === "prerender") {
              self.ignore_visitor = true;
            }
            if (self.ignore_bots && userAgentSearchBotDetection()) {
              self.ignore_visitor = true;
            }
          }
          function sendEventsForced() {
            if (eventQueue.length > 0) {
              toRequestQueue({ events: JSON.stringify(eventQueue) });
              eventQueue = [];
              setValueInStorage("cly_event", eventQueue);
            }
          }
          function processWidget(currentWidget, hasSticker) {
            var isDuplicate = !!document.getElementById("countly-feedback-sticker-" + currentWidget._id);
            if (isDuplicate) {
              log(logLevelEnums.ERROR, "Widget with same ID exists");
              return;
            }
            try {
              var wrapper = document.createElement("div");
              wrapper.className = "countly-iframe-wrapper";
              wrapper.id = "countly-iframe-wrapper-" + currentWidget._id;
              var closeIcon = document.createElement("span");
              closeIcon.className = "countly-feedback-close-icon";
              closeIcon.id = "countly-feedback-close-icon-" + currentWidget._id;
              closeIcon.innerText = "x";
              var iframe = document.createElement("iframe");
              iframe.name = "countly-feedback-iframe";
              iframe.id = "countly-feedback-iframe";
              iframe.src = self.url + "/feedback?widget_id=" + currentWidget._id + "&app_key=" + self.app_key + "&device_id=" + self.device_id + "&sdk_version=" + SDK_VERSION;
              document.body.appendChild(wrapper);
              wrapper.appendChild(closeIcon);
              wrapper.appendChild(iframe);
              add_event(document.getElementById("countly-feedback-close-icon-" + currentWidget._id), "click", function() {
                document.getElementById("countly-iframe-wrapper-" + currentWidget._id).style.display = "none";
                document.getElementById("cfbg").style.display = "none";
              });
              if (hasSticker) {
                var svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svgIcon.id = "feedback-sticker-svg";
                svgIcon.setAttribute("aria-hidden", "true");
                svgIcon.setAttribute("data-prefix", "far");
                svgIcon.setAttribute("data-icon", "grin");
                svgIcon.setAttribute("class", "svg-inline--fa fa-grin fa-w-16");
                svgIcon.setAttribute("role", "img");
                svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                svgIcon.setAttribute("viewBox", "0 0 496 512");
                var svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                svgPath.id = "smileyPathInStickerSvg";
                svgPath.setAttribute("fill", "white");
                svgPath.setAttribute("d", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.4-17.7 15.3 7.9 47.1 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z");
                var stickerText = document.createElement("span");
                stickerText.innerText = currentWidget.trigger_button_text;
                var sticker = document.createElement("div");
                sticker.style.color = currentWidget.trigger_font_color.length < 7 ? "#" + currentWidget.trigger_font_color : currentWidget.trigger_font_color;
                sticker.style.backgroundColor = currentWidget.trigger_bg_color.length < 7 ? "#" + currentWidget.trigger_bg_color : currentWidget.trigger_bg_color;
                sticker.className = "countly-feedback-sticker  " + currentWidget.trigger_position + "-" + currentWidget.trigger_size;
                sticker.id = "countly-feedback-sticker-" + currentWidget._id;
                svgIcon.appendChild(svgPath);
                sticker.appendChild(svgIcon);
                sticker.appendChild(stickerText);
                document.body.appendChild(sticker);
                var smileySvg = document.getElementById("smileyPathInStickerSvg");
                if (smileySvg) {
                  smileySvg.style.fill = currentWidget.trigger_font_color.length < 7 ? "#" + currentWidget.trigger_font_color : currentWidget.trigger_font_color;
                }
                add_event(document.getElementById("countly-feedback-sticker-" + currentWidget._id), "click", function() {
                  document.getElementById("countly-iframe-wrapper-" + currentWidget._id).style.display = "block";
                  document.getElementById("cfbg").style.display = "block";
                });
              } else {
                document.getElementById("countly-iframe-wrapper-" + currentWidget._id).style.display = "block";
                document.getElementById("cfbg").style.display = "block";
              }
            } catch (e) {
              log(logLevelEnums.ERROR, "Somethings went wrong while element injecting process: " + e);
            }
          }
          function notifyLoaders() {
            var i;
            if (typeof self.onload !== "undefined" && self.onload.length > 0) {
              for (i = 0; i < self.onload.length; i++) {
                if (typeof self.onload[i] === "function") {
                  self.onload[i](self);
                }
              }
              self.onload = [];
            }
          }
          function reportViewDuration() {
            if (lastView) {
              var segments = {
                name: lastView
              };
              if (self.check_consent(featureEnums.VIEWS)) {
                add_cly_events({
                  key: internalEventKeyEnums.VIEW,
                  dur: trackTime ? getTimestamp() - lastViewTime : lastViewStoredDuration,
                  segmentation: segments
                });
              }
              lastView = null;
            }
          }
          function getLastView() {
            return lastView;
          }
          function extendSession() {
            if (useSessionCookie) {
              var expire = getValueFromStorage("cly_session");
              if (!expire || parseInt(expire) <= getTimestamp()) {
                sessionStarted = false;
                self.begin_session(!autoExtend);
              }
              setValueInStorage("cly_session", getTimestamp() + sessionCookieTimeout * 60);
            }
          }
          function prepareRequest(request) {
            request.app_key = self.app_key;
            request.device_id = self.device_id;
            request.sdk_name = SDK_NAME;
            request.sdk_version = SDK_VERSION;
            request.t = deviceIdType;
            if (self.check_consent(featureEnums.LOCATION)) {
              if (self.country_code) {
                request.country_code = self.country_code;
              }
              if (self.city) {
                request.city = self.city;
              }
              if (self.ip_address !== null) {
                request.ip_address = self.ip_address;
              }
            } else {
              request.location = "";
            }
            request.timestamp = getMsTimestamp();
            var date = new Date();
            request.hour = date.getHours();
            request.dow = date.getDay();
          }
          function toRequestQueue(request) {
            if (self.ignore_visitor) {
              log(logLevelEnums.WARNING, "User is opt_out will ignore the request: " + request);
              return;
            }
            if (!self.app_key || !self.device_id) {
              log(logLevelEnums.ERROR, "app_key or device_id is missing ", self.app_key, self.device_id);
              return;
            }
            prepareRequest(request);
            if (requestQueue.length > queueSize) {
              requestQueue.shift();
            }
            requestQueue.push(request);
            setValueInStorage("cly_queue", requestQueue, true);
          }
          function heartBeat() {
            notifyLoaders();
            if (self.ignore_visitor) {
              hasPulse = false;
              log(logLevelEnums.WARNING, "User opt_out, no heartbeat");
              return;
            }
            hasPulse = true;
            var i = 0;
            if (global && typeof Countly2.q !== "undefined" && Countly2.q.length > 0) {
              var req;
              var q = Countly2.q;
              Countly2.q = [];
              for (i = 0; i < q.length; i++) {
                req = q[i];
                log(logLevelEnums.DEBUG, "Processing queued call", req);
                if (typeof req === "function") {
                  req();
                } else if (Array.isArray(req) && req.length > 0) {
                  var inst = self;
                  var arg = 0;
                  if (Countly2.i[req[arg]]) {
                    inst = Countly2.i[req[arg]];
                    arg++;
                  }
                  if (typeof inst[req[arg]] === "function") {
                    inst[req[arg]].apply(inst, req.slice(arg + 1));
                  } else if (req[arg].indexOf("userData.") === 0) {
                    var userdata = req[arg].replace("userData.", "");
                    if (typeof inst.userData[userdata] === "function") {
                      inst.userData[userdata].apply(inst, req.slice(arg + 1));
                    }
                  } else if (typeof Countly2[req[arg]] === "function") {
                    Countly2[req[arg]].apply(Countly2, req.slice(arg + 1));
                  }
                }
              }
            }
            if (sessionStarted && autoExtend && trackTime) {
              var last = getTimestamp();
              if (last - lastBeat > sessionUpdate) {
                self.session_duration(last - lastBeat);
                lastBeat = last;
              }
            }
            if (eventQueue.length > 0) {
              if (eventQueue.length <= maxEventBatch) {
                toRequestQueue({ events: JSON.stringify(eventQueue) });
                eventQueue = [];
              } else {
                var events = eventQueue.splice(0, maxEventBatch);
                toRequestQueue({ events: JSON.stringify(events) });
              }
              setValueInStorage("cly_event", eventQueue);
            }
            if (!offlineMode && requestQueue.length > 0 && readyToProcess && getTimestamp() > failTimeout) {
              readyToProcess = false;
              var params = requestQueue[0];
              log(logLevelEnums.DEBUG, "Processing request", params);
              setValueInStorage("cly_queue", requestQueue, true);
              if (!self.test_mode) {
                sendXmlHttpRequest("send_request_queue", self.url + apiPath, params, function(err, parameters) {
                  log(logLevelEnums.DEBUG, "Request Finished", parameters, err);
                  if (err) {
                    failTimeout = getTimestamp() + failTimeoutAmount;
                    log(logLevelEnums.ERROR, "Request error: ", err);
                  } else {
                    requestQueue.shift();
                  }
                  setValueInStorage("cly_queue", requestQueue, true);
                  readyToProcess = true;
                }, false);
              }
            }
            setTimeout(heartBeat, beatInterval);
          }
          function getStoredIdOrGenerateId() {
            var storedDeviceId = getValueFromStorage("cly_id");
            if (storedDeviceId) {
              deviceIdType = getValueFromStorage("cly_id_type");
              return storedDeviceId;
            }
            return generateUUID();
          }
          function isUUID(providedId) {
            return /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-4[0-9a-fA-F]{3}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/.test(providedId);
          }
          function getMetrics() {
            var metrics = JSON.parse(JSON.stringify(self.metrics || {}));
            metrics._app_version = metrics._app_version || self.app_version;
            metrics._ua = metrics._ua || currentUserAgentString();
            if (screen.width) {
              var width = screen.width ? parseInt(screen.width) : 0;
              var height = screen.height ? parseInt(screen.height) : 0;
              if (width !== 0 && height !== 0) {
                var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
                if (iOS && window.devicePixelRatio) {
                  width = Math.round(width * window.devicePixelRatio);
                  height = Math.round(height * window.devicePixelRatio);
                } else {
                  if (Math.abs(window.orientation) === 90) {
                    var temp = width;
                    width = height;
                    height = temp;
                  }
                }
                metrics._resolution = metrics._resolution || "" + width + "x" + height;
              }
            }
            if (window.devicePixelRatio) {
              metrics._density = metrics._density || window.devicePixelRatio;
            }
            var locale = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage;
            if (typeof locale !== "undefined") {
              metrics._locale = metrics._locale || locale;
            }
            if (typeof document.referrer !== "undefined" && document.referrer.length) {
              var matches = urlParseRE.exec(document.referrer);
              if (matches && matches[11] && matches[11] !== window.location.hostname) {
                var ignoring = false;
                if (ignoreReferrers && ignoreReferrers.length) {
                  for (var k = 0; k < ignoreReferrers.length; k++) {
                    try {
                      var reg = new RegExp(ignoreReferrers[k]);
                      if (reg.test(document.referrer)) {
                        log(logLevelEnums.DEBUG, "Ignored: " + document.referrer);
                        ignoring = true;
                        break;
                      }
                    } catch (ex) {
                      log(logLevelEnums.ERROR, "Problem with ignoring: " + ignoreReferrers[k], ", error: " + ex);
                    }
                  }
                }
                if (!ignoring) {
                  metrics._store = metrics._store || document.referrer;
                }
              }
            }
            log(logLevelEnums.DEBUG, "Got metrics", metrics);
            return metrics;
          }
          function log(level, message) {
            if (self.debug && typeof console !== "undefined") {
              if (arguments[2] && typeof arguments[2] === "object") {
                arguments[2] = JSON.stringify(arguments[2]);
              }
              if (!global) {
                message = "[" + self.app_key + "] " + message;
              }
              if (!level) {
                level = logLevelEnums.DEBUG;
              }
              var extraArguments = "";
              for (var i = 2; i < arguments.length; i++) {
                extraArguments += arguments[i];
              }
              var log2 = level + message + extraArguments;
              if (level === logLevelEnums.ERROR) {
                console.error(log2);
              } else if (level === logLevelEnums.WARNING) {
                console.warn(log2);
              } else if (level === logLevelEnums.INFO) {
                console.info(log2);
              } else if (level === logLevelEnums.VERBOSE) {
                console.log(log2);
              } else {
                console.debug(log2);
              }
            }
          }
          function sendXmlHttpRequest(functionName, url, params, callback, useBroadResponseValidator) {
            useBroadResponseValidator = useBroadResponseValidator || false;
            try {
              log(logLevelEnums.DEBUG, "Sending XML HTTP request");
              var xhr = null;
              if (window.XMLHttpRequest) {
                xhr = new window.XMLHttpRequest();
              } else if (window.ActiveXObject) {
                xhr = new window.ActiveXObject("Microsoft.XMLHTTP");
              }
              params = params || {};
              var data = prepareParams(params);
              var method = "GET";
              if (self.force_post || data.length >= 2e3) {
                method = "POST";
              }
              if (method === "GET") {
                xhr.open("GET", url + "?" + data, true);
              } else {
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
              }
              for (var header in self.headers) {
                xhr.setRequestHeader(header, self.headers[header]);
              }
              xhr.onreadystatechange = function() {
                if (this.readyState === 4) {
                  log(logLevelEnums.DEBUG, functionName + " HTTP request completed [" + this.status + "][" + this.responseText + "]");
                  var isResponseValidated;
                  if (useBroadResponseValidator) {
                    isResponseValidated = isResponseValidBroad(this.status, this.responseText);
                  } else {
                    isResponseValidated = isResponseValid(this.status, this.responseText);
                  }
                  if (isResponseValidated) {
                    if (typeof callback === "function") {
                      callback(false, params, this.responseText);
                    }
                  } else {
                    log(logLevelEnums.ERROR, functionName + " Failed Server XML HTTP request, ", this.status);
                    if (typeof callback === "function") {
                      callback(true, params);
                    }
                  }
                }
              };
              if (method === "GET") {
                xhr.send();
              } else {
                xhr.send(data);
              }
            } catch (e) {
              log(logLevelEnums.ERROR, functionName + " Failed XML HTTP request: " + e);
              if (typeof callback === "function") {
                callback(true, params);
              }
            }
          }
          function isResponseValid(statusCode, str) {
            if (!(statusCode >= 200 && statusCode < 300)) {
              log(logLevelEnums.ERROR, "Http response status code is not within the expected range:[" + statusCode + "]");
              return false;
            }
            try {
              var parsedResponse = JSON.parse(str);
              if (Object.prototype.toString.call(parsedResponse) !== "[object Object]") {
                log(logLevelEnums.ERROR, "Http response is not JSON Object");
                return false;
              }
              return !!parsedResponse.result;
            } catch (e) {
              log(logLevelEnums.ERROR, "Http response is not JSON: " + e);
              return false;
            }
          }
          function isResponseValidBroad(statusCode, str) {
            if (!(statusCode >= 200 && statusCode < 300)) {
              log(logLevelEnums.ERROR, "Http response status code is not within the expected range: " + statusCode);
              return false;
            }
            try {
              var parsedResponse = JSON.parse(str);
              if (Object.prototype.toString.call(parsedResponse) !== "[object Object]" && !Array.isArray(parsedResponse)) {
                log(logLevelEnums.ERROR, "Http response is not JSON Object nor JSON Array");
                return false;
              }
              return true;
            } catch (e) {
              log(logLevelEnums.ERROR, "Http response is not JSON: " + e);
              return false;
            }
          }
          function processScroll() {
            scrollRegistryTopPosition = Math.max(scrollRegistryTopPosition, window.scrollY, document.body.scrollTop, document.documentElement.scrollTop);
          }
          function processScrollView() {
            if (isScrollRegistryOpen) {
              isScrollRegistryOpen = false;
              var height = getDocHeight();
              var width = getDocWidth();
              var viewportHeight = getViewportHeight();
              if (self.check_consent(featureEnums.SCROLLS)) {
                var segments = {
                  type: "scroll",
                  y: scrollRegistryTopPosition + viewportHeight,
                  width,
                  height,
                  view: self.getViewUrl()
                };
                segments = truncateObject(segments, self.maxKeyLength, self.maxValueSize, self.maxSegmentationValues, "processScrollView", log);
                if (self.track_domains) {
                  segments.domain = window.location.hostname;
                }
                add_cly_events({
                  key: internalEventKeyEnums.ACTION,
                  segmentation: segments
                });
              }
            }
          }
          function getInternalDeviceIdType() {
            return deviceIdType;
          }
          function setToken(token) {
            setValueInStorage("cly_token", token);
          }
          function getToken() {
            var token = getValueFromStorage("cly_token");
            removeValueFromStorage("cly_token");
            return token;
          }
          function getEventQueue() {
            return eventQueue;
          }
          function getRequestQueue() {
            return requestQueue;
          }
          function readCookie(cookieKey) {
            var cookieID = cookieKey + "=";
            var cookieArray = document.cookie.split(";");
            for (var i = 0, max = cookieArray.length; i < max; i++) {
              var cookie = cookieArray[i];
              while (cookie.charAt(0) === " ") {
                cookie = cookie.substring(1, cookie.length);
              }
              if (cookie.indexOf(cookieID) === 0) {
                return cookie.substring(cookieID.length, cookie.length);
              }
            }
            return null;
          }
          function createCookie(cookieKey, cookieVal, exp) {
            var date = new Date();
            date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1e3);
            var expires = "; expires=" + date.toGMTString();
            document.cookie = cookieKey + "=" + cookieVal + expires + "; path=/";
          }
          function getValueFromStorage(key, useLocalStorage, useRawKey) {
            if (self.storage === "none") {
              log(logLevelEnums.WARNING, "Storage is disabled. Value with key: " + key + " won't be retrieved");
              return;
            }
            if (!useRawKey) {
              key = self.app_key + "/" + key;
              if (self.namespace) {
                key = stripTrailingSlash(self.namespace) + "/" + key;
              }
            }
            if (useLocalStorage === void 0) {
              useLocalStorage = lsSupport;
            }
            var data;
            if (useLocalStorage) {
              data = localStorage.getItem(key);
            } else if (self.storage !== "localstorage") {
              data = readCookie(key);
            }
            return self.deserialize(data);
          }
          function setValueInStorage(key, value, useLocalStorage, useRawKey) {
            if (self.storage === "none") {
              log(logLevelEnums.WARNING, "Storage is disabled. Value with key: " + key + " won't be stored");
              return;
            }
            if (!useRawKey) {
              key = self.app_key + "/" + key;
              if (self.namespace) {
                key = stripTrailingSlash(self.namespace) + "/" + key;
              }
            }
            if (useLocalStorage === void 0) {
              useLocalStorage = lsSupport;
            }
            if (typeof value !== "undefined" && value !== null) {
              value = self.serialize(value);
              if (useLocalStorage) {
                localStorage.setItem(key, value);
              } else if (self.storage !== "localstorage") {
                createCookie(key, value, 30);
              }
            }
          }
          function removeValueFromStorage(key, useLocalStorage, useRawKey) {
            if (self.storage === "none") {
              log(logLevelEnums.WARNING, "Storage is disabled. Value with key: " + key + " won't be removed");
              return;
            }
            if (!useRawKey) {
              key = self.app_key + "/" + key;
              if (self.namespace) {
                key = stripTrailingSlash(self.namespace) + "/" + key;
              }
            }
            if (useLocalStorage === void 0) {
              useLocalStorage = lsSupport;
            }
            if (useLocalStorage) {
              localStorage.removeItem(key);
            } else if (self.storage !== "localstorage") {
              createCookie(key, "", -1);
            }
          }
          function migrate() {
            if (getValueFromStorage(self.namespace + "cly_id", false, true)) {
              setValueInStorage("cly_id", getValueFromStorage(self.namespace + "cly_id", false, true));
              setValueInStorage("cly_id_type", getValueFromStorage(self.namespace + "cly_id_type", false, true));
              setValueInStorage("cly_event", getValueFromStorage(self.namespace + "cly_event", false, true));
              setValueInStorage("cly_session", getValueFromStorage(self.namespace + "cly_session", false, true));
              var requests = getValueFromStorage(self.namespace + "cly_queue", false, true);
              if (Array.isArray(requests)) {
                requests = requests.filter(function(req) {
                  return req.app_key === self.app_key;
                });
                setValueInStorage("cly_queue", requests);
              }
              if (getValueFromStorage(self.namespace + "cly_cmp_id", false, true)) {
                setValueInStorage("cly_cmp_id", getValueFromStorage(self.namespace + "cly_cmp_id", false, true));
                setValueInStorage("cly_cmp_uid", getValueFromStorage(self.namespace + "cly_cmp_uid", false, true));
              }
              if (getValueFromStorage(self.namespace + "cly_ignore", false, true)) {
                setValueInStorage("cly_ignore", getValueFromStorage(self.namespace + "cly_ignore", false, true));
              }
              removeValueFromStorage("cly_id", false, true);
              removeValueFromStorage("cly_id_type", false, true);
              removeValueFromStorage("cly_event", false, true);
              removeValueFromStorage("cly_session", false, true);
              removeValueFromStorage("cly_queue", false, true);
              removeValueFromStorage("cly_cmp_id", false, true);
              removeValueFromStorage("cly_cmp_uid", false, true);
              removeValueFromStorage("cly_ignore", false, true);
            }
          }
          this.onStorageChange = function(key, newValue) {
            log(logLevelEnums.INFO, "onStorageChange, Applying storage changes");
            switch (key) {
              case "cly_queue":
                requestQueue = self.deserialize(newValue || "[]");
                break;
              case "cly_event":
                eventQueue = self.deserialize(newValue || "[]");
                break;
              case "cly_remote_configs":
                remoteConfigs = self.deserialize(newValue || "{}");
                break;
              case "cly_ignore":
                self.ignore_visitor = self.deserialize(newValue);
                break;
              case "cly_id":
                self.device_id = self.deserialize(newValue);
                break;
              case "cly_id_type":
                deviceIdType = self.deserialize(newValue);
                break;
              default:
            }
          };
          this._internals = {
            store: setValueInStorage,
            getDocWidth,
            getDocHeight,
            getViewportHeight,
            get_page_coord,
            get_event_target,
            add_event,
            createNewObjectFromProperties,
            truncateObject,
            truncateSingleValue,
            stripTrailingSlash,
            prepareParams,
            sendXmlHttpRequest,
            isResponseValid,
            getInternalDeviceIdType,
            getMsTimestamp,
            getTimestamp,
            isResponseValidBroad,
            log,
            getMetrics,
            generateUUID,
            sendEventsForced,
            isUUID,
            getId: getStoredIdOrGenerateId,
            heartBeat,
            toRequestQueue,
            reportViewDuration,
            loadJS,
            loadCSS,
            getLastView,
            setToken,
            getToken,
            showLoader,
            hideLoader,
            setValueInStorage,
            getValueFromStorage,
            removeValueFromStorage,
            add_cly_events,
            processScrollView,
            processScroll,
            currentUserAgentString,
            userAgentDeviceDetection,
            userAgentSearchBotDetection,
            getRequestQueue,
            getEventQueue,
            clearQueue: function() {
              requestQueue = [];
              setValueInStorage("cly_queue", []);
              eventQueue = [];
              setValueInStorage("cly_event", []);
            }
          };
          this.initialize();
        };
        Countly2.CountlyClass = CountlyClass;
        Countly2.init = function(conf) {
          conf = conf || {};
          var appKey = conf.app_key || Countly2.app_key;
          if (!Countly2.i || !Countly2.i[appKey]) {
            var inst = new Countly2.CountlyClass(conf);
            if (!Countly2.i) {
              Countly2.i = {};
              for (var key in inst) {
                Countly2[key] = inst[key];
              }
            }
            Countly2.i[appKey] = inst;
          }
          return Countly2.i[appKey];
        };
        function getMultiSelectValues(input) {
          var values = [];
          if (typeof input.options !== "undefined") {
            for (var j = 0; j < input.options.length; j++) {
              if (input.options[j].selected) {
                values.push(input.options[j].value);
              }
            }
          }
          return values.join(", ");
        }
        function generateUUID() {
          var d = new Date().getTime();
          var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === "x" ? r : r & 3 | 8).toString(16);
          });
          return uuid;
        }
        function getTimestamp() {
          return Math.floor(new Date().getTime() / 1e3);
        }
        var lastMsTs = 0;
        function getMsTimestamp() {
          var ts = new Date().getTime();
          if (lastMsTs >= ts) {
            lastMsTs++;
          } else {
            lastMsTs = ts;
          }
          return lastMsTs;
        }
        function getConfig(key, ob, override) {
          if (ob && Object.keys(ob).length) {
            if (typeof ob[key] !== "undefined") {
              return ob[key];
            }
          } else if (typeof Countly2[key] !== "undefined") {
            return Countly2[key];
          }
          return override;
        }
        function dispatchErrors(error, fatality, segments) {
          for (var app_key in Countly2.i) {
            if (Countly2.i[app_key].tracking_crashes) {
              Countly2.i[app_key].recordError(error, fatality, segments);
            }
          }
        }
        function prepareParams(params) {
          var str = [];
          for (var i in params) {
            str.push(i + "=" + encodeURIComponent(params[i]));
          }
          return str.join("&");
        }
        function stripTrailingSlash(str) {
          if (typeof str === "string") {
            if (str.substring(str.length - 1) === "/") {
              return str.substring(0, str.length - 1);
            }
          }
          return str;
        }
        function createNewObjectFromProperties(orig, props) {
          var ob = {};
          var prop;
          for (var i = 0, len = props.length; i < len; i++) {
            prop = props[i];
            if (typeof orig[prop] !== "undefined") {
              ob[prop] = orig[prop];
            }
          }
          return ob;
        }
        function addNewProperties(orig, transferOb, props) {
          if (!props) {
            return;
          }
          var prop;
          for (var i = 0, len = props.length; i < len; i++) {
            prop = props[i];
            if (typeof transferOb[prop] !== "undefined") {
              orig[prop] = transferOb[prop];
            }
          }
          return orig;
        }
        function truncateObject(obj, keyLimit, valueLimit, segmentLimit, errorLog, logCall) {
          var ob = {};
          if (obj) {
            if (Object.keys(obj).length > segmentLimit) {
              var resizedObj = {};
              var i = 0;
              for (var e in obj) {
                if (i < segmentLimit) {
                  resizedObj[e] = obj[e];
                  i++;
                }
              }
              obj = resizedObj;
            }
            for (var key in obj) {
              var newKey = truncateSingleValue(key, keyLimit, errorLog, logCall);
              var newValue = truncateSingleValue(obj[key], valueLimit, errorLog, logCall);
              ob[newKey] = newValue;
            }
          }
          return ob;
        }
        function truncateSingleValue(str, limit, errorLog, logCall) {
          var newStr = str;
          if (typeof str === "number") {
            str = str.toString();
          }
          if (typeof str === "string") {
            if (str.length > limit) {
              newStr = str.substring(0, limit);
              logCall(logLevelEnums.DEBUG, errorLog + ", Key: [ " + str + " ] is longer than accepted length. It will be truncated.");
            }
          }
          return newStr;
        }
        var get_closest_element = function(el, nodeName) {
          nodeName = nodeName.toUpperCase();
          while (el) {
            if (el.nodeName.toUpperCase() === nodeName) {
              return el;
            }
            el = el.parentElement;
          }
        };
        var add_event = function(element, type, listener) {
          if (typeof element.addEventListener !== "undefined") {
            element.addEventListener(type, listener, false);
          } else {
            element.attachEvent("on" + type, listener);
          }
        };
        var get_event_target = function(event) {
          if (!event) {
            return window.event.srcElement;
          }
          if (typeof event.target !== "undefined") {
            return event.target;
          }
          return event.srcElement;
        };
        function currentUserAgentString(uaOverride) {
          if (uaOverride) {
            return uaOverride;
          }
          var ua_raw = navigator.userAgent;
          if (!ua_raw) {
            if (navigator.userAgentData) {
              ua_raw = navigator.userAgentData.brands.map(function(e) {
                return e.brand + ":" + e.version;
              }).join();
              ua_raw += navigator.userAgentData.mobile ? " mobi " : " ";
              ua_raw += navigator.userAgentData.platform;
            }
          }
          return ua_raw;
        }
        function userAgentDeviceDetection(uaOverride) {
          var userAgent;
          if (uaOverride) {
            userAgent = uaOverride;
          } else if (navigator.userAgentData.mobile) {
            return "phone";
          } else {
            userAgent = currentUserAgentString();
          }
          userAgent = userAgent.toLowerCase();
          var device = "desktop";
          var tabletCheck = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/;
          var phoneCheck = /(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/;
          if (tabletCheck.test(userAgent)) {
            device = "tablet";
          } else if (phoneCheck.test(userAgent)) {
            device = "phone";
          }
          return device;
        }
        function userAgentSearchBotDetection(uaOverride) {
          var searchBotRE = /(CountlySiteBot|nuhk|Googlebot|GoogleSecurityScanner|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver|bingbot|Google Web Preview|Mediapartners-Google|AdsBot-Google|Baiduspider|Ezooms|YahooSeeker|AltaVista|AVSearch|Mercator|Scooter|InfoSeek|Ultraseek|Lycos|Wget|YandexBot|Yandex|YaDirectFetcher|SiteBot|Exabot|AhrefsBot|MJ12bot|TurnitinBot|magpie-crawler|Nutch Crawler|CMS Crawler|rogerbot|Domnutch|ssearch_bot|XoviBot|netseer|digincore|fr-crawler|wesee|AliasIO|contxbot|PingdomBot|BingPreview|HeadlessChrome)/;
          return searchBotRE.test(uaOverride || currentUserAgentString());
        }
        function get_page_coord(e) {
          if (typeof e.pageY === "undefined" && typeof e.clientX === "number" && document.documentElement) {
            e.pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            e.pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
          }
          return e;
        }
        function getDocHeight() {
          var D = document;
          return Math.max(Math.max(D.body.scrollHeight, D.documentElement.scrollHeight), Math.max(D.body.offsetHeight, D.documentElement.offsetHeight), Math.max(D.body.clientHeight, D.documentElement.clientHeight));
        }
        function getDocWidth() {
          var D = document;
          return Math.max(Math.max(D.body.scrollWidth, D.documentElement.scrollWidth), Math.max(D.body.offsetWidth, D.documentElement.offsetWidth), Math.max(D.body.clientWidth, D.documentElement.clientWidth));
        }
        function getViewportHeight() {
          var D = document;
          return Math.min(Math.min(D.body.clientHeight, D.documentElement.clientHeight), Math.min(D.body.offsetHeight, D.documentElement.offsetHeight), window.innerHeight);
        }
        function getOrientation() {
          return window.innerWidth > window.innerHeight ? "landscape" : "portrait";
        }
        window.addEventListener("storage", function(e) {
          var parts = (e.key + "").split("/");
          var key = parts.pop();
          var appKey = parts.pop();
          if (Countly2.i && Countly2.i[appKey]) {
            Countly2.i[appKey].onStorageChange(key, e.newValue);
          }
        });
        function loadFile(tag, attr, type, src, data, callback) {
          var fileRef = document.createElement(tag);
          var loaded;
          fileRef.setAttribute(attr, type);
          fileRef.setAttribute(src, data);
          var callbackFunction = function() {
            if (!loaded) {
              callback();
            }
            loaded = true;
          };
          if (callback) {
            fileRef.onreadystatechange = callbackFunction;
            fileRef.onload = callbackFunction;
          }
          document.getElementsByTagName("head")[0].appendChild(fileRef);
        }
        function loadJS(js, callback) {
          loadFile("script", "type", "text/javascript", "src", js, callback);
        }
        function loadCSS(css, callback) {
          loadFile("link", "rel", "stylesheet", "href", css, callback);
        }
        function showLoader() {
          var loader = document.getElementById("cly-loader");
          if (!loader) {
            var css = "#cly-loader {height: 4px; width: 100%; position: absolute; z-index: 99999; overflow: hidden; background-color: #fff; top:0px; left:0px;}#cly-loader:before{display: block; position: absolute; content: ''; left: -200px; width: 200px; height: 4px; background-color: #2EB52B; animation: cly-loading 2s linear infinite;}@keyframes cly-loading { from {left: -200px; width: 30%;} 50% {width: 30%;} 70% {width: 70%;} 80% { left: 50%;} 95% {left: 120%;} to {left: 100%;}}";
            var head = document.head || document.getElementsByTagName("head")[0];
            var style = document.createElement("style");
            style.type = "text/css";
            if (style.styleSheet) {
              style.styleSheet.cssText = css;
            } else {
              style.appendChild(document.createTextNode(css));
            }
            head.appendChild(style);
            loader = document.createElement("div");
            loader.setAttribute("id", "cly-loader");
            document.body.onload = function() {
              if (Countly2.showLoaderProtection) {
                return;
              }
              try {
                document.body.appendChild(loader);
              } catch (e) {
              }
            };
          }
          loader.style.display = "block";
        }
        function hideLoader() {
          Countly2.showLoaderProtection = true;
          var loader = document.getElementById("cly-loader");
          if (loader) {
            loader.style.display = "none";
          }
        }
        Countly2.serialize = function(value) {
          if (typeof value === "object") {
            value = JSON.stringify(value);
          }
          return value;
        };
        Countly2.deserialize = function(data) {
          try {
            data = JSON.parse(data);
          } catch (e) {
          }
          return data;
        };
        Countly2.getViewName = function() {
          return window.location.pathname;
        };
        Countly2.getViewUrl = function() {
          return window.location.pathname;
        };
        Countly2.getSearchQuery = function() {
          return window.location.search;
        };
        Countly2.DeviceIdType = {
          DEVELOPER_SUPPLIED: DeviceIdTypeInternalEnums.DEVELOPER_SUPPLIED,
          SDK_GENERATED: DeviceIdTypeInternalEnums.SDK_GENERATED,
          TEMPORARY_ID: DeviceIdTypeInternalEnums.TEMPORARY_ID
        };
        return Countly2;
      });
    }
  });

  // node_modules/@ipfs-shipyard/ignite-metrics/dist/src/BrowserMetricsProvider.js
  var import_countly_sdk_web = __toESM(require_countly(), 1);

  // node_modules/@ipfs-shipyard/ignite-metrics/dist/src/config.js
  var COUNTLY_API_URL = "https://countly.ipfs.tech";
  var COUNTLY_SETUP_DEFAULTS = {
    url: COUNTLY_API_URL,
    autoTrack: true,
    interval: 5e3,
    max_events: 500,
    queue_size: 1e3,
    session_update: 60,
    require_consent: true
  };

  // node_modules/@ipfs-shipyard/ignite-metrics/dist/src/MetricsProvider.js
  var MetricsProvider = class {
    constructor(config) {
      this.groupedFeatures = this.mapAllEvents({
        minimal: ["sessions", "views", "events"],
        performance: ["crashes", "apm"],
        ux: ["scrolls", "clicks", "forms"],
        feedback: ["star-rating", "feedback"],
        location: ["location"]
      });
      this.sessionStarted = false;
      this._consentGranted = /* @__PURE__ */ new Set();
      this.initDone = false;
      const serviceConfig = Object.assign(Object.assign(Object.assign({}, COUNTLY_SETUP_DEFAULTS), config), { app_key: config.appKey });
      const { autoTrack, metricsService, storageProvider } = serviceConfig;
      this.metricsService = metricsService;
      this.storageProvider = storageProvider !== null && storageProvider !== void 0 ? storageProvider : null;
      this.metricsService.init(serviceConfig);
      this.metricsService.group_features(this.groupedFeatures);
      if (autoTrack) {
        this.setupAutoTrack();
      }
      const existingConsent = this.getConsentStore();
      if (existingConsent.length > 0) {
        this.addConsent(existingConsent);
      }
      this.initDone = true;
    }
    mapAllEvents(eventMap) {
      return Object.assign(Object.assign({}, eventMap), { all: Object.values(eventMap).flat() });
    }
    get consentGranted() {
      return [...this._consentGranted];
    }
    setupAutoTrack() {
      var _a, _b, _c, _d, _e;
      const webSdk = this.metricsService;
      (_a = webSdk.track_clicks) === null || _a === void 0 ? void 0 : _a.call(webSdk);
      (_b = webSdk.track_forms) === null || _b === void 0 ? void 0 : _b.call(webSdk);
      (_c = webSdk.track_links) === null || _c === void 0 ? void 0 : _c.call(webSdk);
      (_d = webSdk.track_scrolls) === null || _d === void 0 ? void 0 : _d.call(webSdk);
      (_e = webSdk.track_sessions) === null || _e === void 0 ? void 0 : _e.call(webSdk);
      this.metricsService.track_errors();
      this.metricsService.track_pageview();
      this.metricsService.track_view();
    }
    addConsent(consent) {
      if (!Array.isArray(consent)) {
        consent = [consent];
      }
      consent.forEach((c) => this._consentGranted.add(c));
      this.metricsService.add_consent(consent);
      this.setConsentStore();
    }
    removeConsent(consent) {
      if (!Array.isArray(consent)) {
        consent = [consent];
      }
      consent.forEach((c) => this._consentGranted.delete(c));
      this.metricsService.remove_consent(consent, true);
      this.setConsentStore();
    }
    setConsentStore() {
      if (this.storageProvider != null && this.initDone) {
        this.storageProvider.setStore(Array.from(this._consentGranted));
      }
    }
    getConsentStore() {
      var _a, _b;
      return (_b = (_a = this.storageProvider) === null || _a === void 0 ? void 0 : _a.getStore()) !== null && _b !== void 0 ? _b : [];
    }
    checkConsent(consent) {
      if (consent in this.groupedFeatures) {
        return this.groupedFeatures[consent].every(this.metricsService.check_consent);
      }
      return this.metricsService.check_consent(consent);
    }
    updateConsent(consent) {
      const approvedConsent = new Set(consent);
      Object.keys(this.groupedFeatures).forEach((groupName) => {
        if (approvedConsent.has(groupName)) {
          this.addConsent(groupName);
        } else {
          this.removeConsent(groupName);
        }
      });
    }
    trackView(page, ignoreList, viewSegments) {
      this.metricsService.track_view(page, ignoreList, viewSegments);
    }
    trackEvent(event) {
      this.metricsService.add_event(event);
    }
    trackError(error, nonFatal = true, segments = {}) {
      this.metricsService.recordError(error, nonFatal, segments);
    }
    startSession(noHeartBeat = false, force = false) {
      if (!this.sessionStarted) {
        this.sessionStarted = true;
        this.metricsService.begin_session(noHeartBeat, force);
      }
    }
    endSession(force = false) {
      if (this.sessionStarted) {
        this.metricsService.end_session(void 0, force);
        this.sessionStarted = false;
      }
    }
  };

  // node_modules/@ipfs-shipyard/ignite-metrics/dist/src/BrowserStorageProvider.js
  var BrowserStorageProvider = class {
    setStore(consentArray) {
      try {
        const jsonString = JSON.stringify(consentArray);
        globalThis.localStorage.setItem("@ipfs-shipyard/ignite-metrics:consent", jsonString);
      } catch (err) {
        console.error(err);
      }
    }
    getStore() {
      try {
        const jsonString = globalThis.localStorage.getItem("@ipfs-shipyard/ignite-metrics:consent");
        if (jsonString != null) {
          return JSON.parse(jsonString);
        }
      } catch (err) {
        console.error(err);
      }
      return ["minimal"];
    }
  };

  // node_modules/@ipfs-shipyard/ignite-metrics/dist/src/BrowserMetricsProvider.js
  var BrowserMetricsProvider = class extends MetricsProvider {
    constructor(args) {
      super(Object.assign({ metricsService: import_countly_sdk_web.default, storageProvider: new BrowserStorageProvider() }, args));
    }
  };

  // src/telemetry.ts
  var telemetry = new BrowserMetricsProvider({ appKey: "53f683cabe5a08fdecdb0ea3ed8547cc47e9219a" });
  window.telemetry = telemetry;
  window.removeMetricsConsent = () => telemetry.removeConsent(["minimal"]);
  window.addMetricsConsent = () => telemetry.addConsent(["minimal"]);
})();
