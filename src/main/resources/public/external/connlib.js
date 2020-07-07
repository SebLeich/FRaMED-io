/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/input.json":
/*!***************************!*\
  !*** ./assets/input.json ***!
  \***************************/
/*! exports provided: root, connections, layer, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"root\":[\"io.framed.model.Package\",{\"id\":1,\"metadata\":{\"creationDate\":\"Mon Jan 21 2019 15:14:11 GMT+0100 (Mitteleuropäische Normalzeit)\",\"modifiedDate\":\"Mon Jan 21 2019 15:14:11 GMT+0100 (Mitteleuropäische Normalzeit)\",\"author\":\"\"},\"name\":\"AssignmentProcess\",\"children\":[[\"io.framed.model.Class\",{\"id\":380,\"name\":\"User\",\"attributes\":[[\"io.framed.model.Attribute\",{\"id\":381,\"name\":\"guid\",\"type\":\"Guid\"}],[\"io.framed.model.Attribute\",{\"id\":582,\"name\":\"name\",\"type\":\"string\"}]],\"methods\":[[\"io.framed.model.Method\",{\"id\":583,\"name\":\"toString\",\"type\":\"string\",\"parameters\":[]}]]}],[\"io.framed.model.Scene\",{\"id\":56,\"name\":\"Distribution department process\",\"attributes\":[],\"children\":[[\"io.framed.model.Event\",{\"id\":58,\"type\":\"STANDARD\",\"desc\":\"customer request arrived\"}],[\"io.framed.model.RoleType\",{\"id\":59,\"name\":\"RequestEditor\",\"occurrenceConstraint\":\"\",\"attributes\":[],\"methods\":[]}],[\"io.framed.model.Event\",{\"id\":61,\"type\":\"STANDARD\",\"desc\":\"customer request received\"}],[\"io.framed.model.RoleType\",{\"id\":63,\"name\":\"ShoppingCartEditor\",\"occurrenceConstraint\":\"\",\"attributes\":[],\"methods\":[]}],[\"io.framed.model.Event\",{\"id\":65,\"type\":\"STANDARD\",\"desc\":\"Shopping cart composed (all products in portfolio)\"}],[\"io.framed.model.Event\",{\"id\":66,\"type\":\"STANDARD\",\"desc\":\"Shopping cart composed (at least one not in portfolio)\"}],[\"io.framed.model.RoleType\",{\"id\":70,\"name\":\"RequestSender\",\"occurrenceConstraint\":\"\",\"attributes\":[],\"methods\":[]}],[\"io.framed.model.Event\",{\"id\":72,\"type\":\"STANDARD\",\"desc\":\"Request sent to main contractor\"}],[\"io.framed.model.Event\",{\"id\":74,\"type\":\"STANDARD\",\"desc\":\"Positive feasibility check of the main contractor\"}],[\"io.framed.model.RoleType\",{\"id\":76,\"name\":\"AssignmentCreator\",\"occurrenceConstraint\":\"\",\"attributes\":[],\"methods\":[]}],[\"io.framed.model.Event\",{\"id\":79,\"type\":\"STANDARD\",\"desc\":\"Assignment created\"}],[\"io.framed.model.RoleType\",{\"id\":81,\"name\":\"CreatedAssignmentSender\",\"occurrenceConstraint\":\"\",\"attributes\":[],\"methods\":[]}],[\"io.framed.model.RoleType\",{\"id\":82,\"name\":\"AssignmentClearer\",\"occurrenceConstraint\":\"\",\"attributes\":[],\"methods\":[]}],[\"io.framed.model.Event\",{\"id\":87,\"type\":\"STANDARD\",\"desc\":\"Assignment sended to customer\"}],[\"io.framed.model.Event\",{\"id\":89,\"type\":\"STANDARD\",\"desc\":\"Assignment cleared\"}],[\"io.framed.model.RoleType\",{\"id\":122,\"name\":\"ClearedAssignmentSender\",\"occurrenceConstraint\":\"\",\"attributes\":[],\"methods\":[]}],[\"io.framed.model.ReturnEvent\",{\"id\":124,\"type\":\"STANDARD\",\"desc\":\"Cleared assignment sended to main contractor\"}],[\"io.framed.model.RoleType\",{\"id\":585,\"name\":\"ProcessIssue\",\"occurrenceConstraint\":\"\",\"attributes\":[],\"methods\":[]}]]}],[\"io.framed.model.Scene\",{\"id\":125,\"name\":\"TechnicalServicdeDepartment\",\"attributes\":[],\"children\":[[\"io.framed.model.Event\",{\"id\":126,\"type\":\"STANDARD\",\"desc\":\"Customer request received\"}],[\"io.framed.model.RoleType\",{\"id\":128,\"name\":\"ControlSlipCreator\",\"occurrenceConstraint\":\"\",\"attributes\":[],\"methods\":[]}],[\"io.framed.model.Event\",{\"id\":130,\"type\":\"STANDARD\",\"desc\":\"Control slip created\"}],[\"io.framed.model.Event\",{\"id\":132,\"type\":\"STANDARD\",\"desc\":\"Assignment from main contractor\"}],[\"io.framed.model.RoleType\",{\"id\":134,\"name\":\"ReceiptConfirmationResponsible\",\"occurrenceConstraint\":\"\",\"attributes\":[],\"methods\":[]}],[\"io.framed.model.Event\",{\"id\":137,\"type\":\"STANDARD\",\"desc\":\"Receipt confirmed\"}],[\"io.framed.model.RoleType\",{\"id\":139,\"name\":\"MeetingManager\",\"occurrenceConstraint\":\"\",\"attributes\":[],\"methods\":[]}],[\"io.framed.model.RoleType\",{\"id\":141,\"name\":\"AssignmentProcessor\",\"occurrenceConstraint\":\"\",\"attributes\":[],\"methods\":[]}],[\"io.framed.model.Event\",{\"id\":142,\"type\":\"STANDARD\",\"desc\":\"Meeting arranged\"}],[\"io.framed.model.RoleType\",{\"id\":145,\"name\":\"AssignmentLogCreator\",\"occurrenceConstraint\":\"\",\"attributes\":[],\"methods\":[]}],[\"io.framed.model.Event\",{\"id\":146,\"type\":\"STANDARD\",\"desc\":\"Assignment processed\"}],[\"io.framed.model.RoleType\",{\"id\":205,\"name\":\"AssignmentLogSender\",\"occurrenceConstraint\":\"\",\"attributes\":[],\"methods\":[]}],[\"io.framed.model.Event\",{\"id\":206,\"type\":\"STANDARD\",\"desc\":\"Assignment log created\"}],[\"io.framed.model.Event\",{\"id\":209,\"type\":\"STANDARD\",\"desc\":\"AssignmentLogSended\"}],[\"io.framed.model.RoleType\",{\"id\":211,\"name\":\"CompleteAssignmentLogSender\",\"occurrenceConstraint\":\"\",\"attributes\":[],\"methods\":[]}],[\"io.framed.model.Event\",{\"id\":213,\"type\":\"STANDARD\",\"desc\":\"Complete assignment reported\"}],[\"io.framed.model.RoleType\",{\"id\":215,\"name\":\"ProductBookResponsible\",\"occurrenceConstraint\":\"\",\"attributes\":[],\"methods\":[]}],[\"io.framed.model.Event\",{\"id\":217,\"type\":\"STANDARD\",\"desc\":\"Products booked\"}],[\"io.framed.model.RoleType\",{\"id\":219,\"name\":\"IssueArchiever\",\"occurrenceConstraint\":\"\",\"attributes\":[],\"methods\":[]}],[\"io.framed.model.RoleType\",{\"id\":221,\"name\":\"FinishIssueResponsible\",\"occurrenceConstraint\":\"\",\"attributes\":[],\"methods\":[]}],[\"io.framed.model.Event\",{\"id\":222,\"type\":\"STANDARD\",\"desc\":\"Issue archieved\"}],[\"io.framed.model.ReturnEvent\",{\"id\":225,\"type\":\"STANDARD\",\"desc\":\"Issue finished\"}],[\"io.framed.model.RoleType\",{\"id\":587,\"name\":\"ProcessIssue\",\"occurrenceConstraint\":\"\",\"attributes\":[],\"methods\":[]}]]}],[\"io.framed.model.Class\",{\"id\":589,\"name\":\"Issue\",\"attributes\":[],\"methods\":[]}],[\"io.framed.model.Class\",{\"id\":590,\"name\":\"AbstractIssue\",\"attributes\":[],\"methods\":[]}]]}],\"connections\":{\"connections\":[[\"io.framed.model.CreateRelationship\",{\"id\":60,\"sourceId\":58,\"targetId\":59,\"name\":\"\"}],[\"io.framed.model.DestroyRelationship\",{\"id\":62,\"sourceId\":59,\"targetId\":61,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":64,\"sourceId\":61,\"targetId\":63,\"name\":\"\"}],[\"io.framed.model.DestroyRelationship\",{\"id\":67,\"sourceId\":63,\"targetId\":65,\"name\":\"\"}],[\"io.framed.model.DestroyRelationship\",{\"id\":68,\"sourceId\":63,\"targetId\":66,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":71,\"sourceId\":66,\"targetId\":70,\"name\":\"\"}],[\"io.framed.model.DestroyRelationship\",{\"id\":73,\"sourceId\":70,\"targetId\":72,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":77,\"sourceId\":65,\"targetId\":76,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":78,\"sourceId\":74,\"targetId\":76,\"name\":\"\"}],[\"io.framed.model.DestroyRelationship\",{\"id\":80,\"sourceId\":76,\"targetId\":79,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":83,\"sourceId\":79,\"targetId\":81,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":84,\"sourceId\":79,\"targetId\":82,\"name\":\"\"}],[\"io.framed.model.DestroyRelationship\",{\"id\":88,\"sourceId\":81,\"targetId\":87,\"name\":\"\"}],[\"io.framed.model.DestroyRelationship\",{\"id\":90,\"sourceId\":82,\"targetId\":89,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":123,\"sourceId\":89,\"targetId\":122,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":129,\"sourceId\":126,\"targetId\":128,\"name\":\"\"}],[\"io.framed.model.DestroyRelationship\",{\"id\":131,\"sourceId\":128,\"targetId\":130,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":135,\"sourceId\":132,\"targetId\":134,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":136,\"sourceId\":130,\"targetId\":134,\"name\":\"\"}],[\"io.framed.model.DestroyRelationship\",{\"id\":138,\"sourceId\":134,\"targetId\":137,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":140,\"sourceId\":137,\"targetId\":139,\"name\":\"\"}],[\"io.framed.model.DestroyRelationship\",{\"id\":143,\"sourceId\":139,\"targetId\":142,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":144,\"sourceId\":142,\"targetId\":141,\"name\":\"\"}],[\"io.framed.model.DestroyRelationship\",{\"id\":147,\"sourceId\":141,\"targetId\":146,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":148,\"sourceId\":146,\"targetId\":145,\"name\":\"\"}],[\"io.framed.model.DestroyRelationship\",{\"id\":207,\"sourceId\":145,\"targetId\":206,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":208,\"sourceId\":206,\"targetId\":205,\"name\":\"\"}],[\"io.framed.model.DestroyRelationship\",{\"id\":210,\"sourceId\":205,\"targetId\":209,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":212,\"sourceId\":206,\"targetId\":211,\"name\":\"\"}],[\"io.framed.model.DestroyRelationship\",{\"id\":214,\"sourceId\":211,\"targetId\":213,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":216,\"sourceId\":213,\"targetId\":215,\"name\":\"\"}],[\"io.framed.model.DestroyRelationship\",{\"id\":218,\"sourceId\":215,\"targetId\":217,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":220,\"sourceId\":217,\"targetId\":219,\"name\":\"\"}],[\"io.framed.model.DestroyRelationship\",{\"id\":223,\"sourceId\":219,\"targetId\":222,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":224,\"sourceId\":222,\"targetId\":221,\"name\":\"\"}],[\"io.framed.model.Fulfillment\",{\"id\":382,\"sourceId\":380,\"targetId\":59,\"name\":\"\"}],[\"io.framed.model.Fulfillment\",{\"id\":383,\"sourceId\":380,\"targetId\":63,\"name\":\"\"}],[\"io.framed.model.Fulfillment\",{\"id\":384,\"sourceId\":380,\"targetId\":70,\"name\":\"\"}],[\"io.framed.model.Fulfillment\",{\"id\":385,\"sourceId\":380,\"targetId\":76,\"name\":\"\"}],[\"io.framed.model.Fulfillment\",{\"id\":386,\"sourceId\":380,\"targetId\":81,\"name\":\"\"}],[\"io.framed.model.Fulfillment\",{\"id\":388,\"sourceId\":380,\"targetId\":82,\"name\":\"\"}],[\"io.framed.model.Fulfillment\",{\"id\":389,\"sourceId\":380,\"targetId\":122,\"name\":\"\"}],[\"io.framed.model.Fulfillment\",{\"id\":476,\"sourceId\":380,\"targetId\":128,\"name\":\"\"}],[\"io.framed.model.Fulfillment\",{\"id\":477,\"sourceId\":380,\"targetId\":134,\"name\":\"\"}],[\"io.framed.model.Fulfillment\",{\"id\":478,\"sourceId\":380,\"targetId\":139,\"name\":\"\"}],[\"io.framed.model.Fulfillment\",{\"id\":479,\"sourceId\":380,\"targetId\":141,\"name\":\"\"}],[\"io.framed.model.Fulfillment\",{\"id\":480,\"sourceId\":380,\"targetId\":145,\"name\":\"\"}],[\"io.framed.model.Fulfillment\",{\"id\":481,\"sourceId\":380,\"targetId\":205,\"name\":\"\"}],[\"io.framed.model.Fulfillment\",{\"id\":482,\"sourceId\":380,\"targetId\":211,\"name\":\"\"}],[\"io.framed.model.Fulfillment\",{\"id\":483,\"sourceId\":380,\"targetId\":215,\"name\":\"\"}],[\"io.framed.model.Fulfillment\",{\"id\":484,\"sourceId\":380,\"targetId\":219,\"name\":\"\"}],[\"io.framed.model.Fulfillment\",{\"id\":485,\"sourceId\":380,\"targetId\":221,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":586,\"sourceId\":58,\"targetId\":585,\"name\":\"\"}],[\"io.framed.model.CreateRelationship\",{\"id\":588,\"sourceId\":126,\"targetId\":587,\"name\":\"\"}],[\"io.framed.model.Inheritance\",{\"id\":591,\"sourceId\":589,\"targetId\":590,\"name\":\"\",\"sourceCardinality\":\"\",\"targetCardinality\":\"\"}],[\"io.framed.model.Fulfillment\",{\"id\":592,\"sourceId\":589,\"targetId\":587,\"name\":\"\"}],[\"io.framed.model.Fulfillment\",{\"id\":593,\"sourceId\":589,\"targetId\":585,\"name\":\"\"}]]},\"layer\":{\"1\":{\"data\":{\"1\":{\"left\":-100,\"top\":-100,\"width\":4000,\"height\":3000,\"autosize\":true,\"data\":{},\"labels\":[],\"connectors\":{\"591\":{\"pathPoints\":[]}}},\"2\":{\"left\":32,\"top\":32,\"width\":621,\"height\":480,\"autosize\":false,\"data\":{\"flat-preview\":\"true\"},\"labels\":[]},\"3\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]},\"4\":{\"left\":829.8261339092873,\"top\":56.26349892008639,\"width\":352,\"height\":320,\"autosize\":false,\"data\":{\"flat-preview\":\"true\"},\"labels\":[]},\"5\":{\"left\":0,\"top\":0,\"width\":266,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"6\":{\"left\":820.0061987041042,\"top\":87.43013131749456,\"width\":194,\"height\":111,\"autosize\":true,\"data\":{},\"labels\":[]},\"7\":{\"left\":0,\"top\":0,\"width\":101,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"8\":{\"left\":0,\"top\":0,\"width\":178,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"9\":{\"left\":246.74936112311008,\"top\":219.918161987041,\"width\":227,\"height\":153,\"autosize\":true,\"data\":{},\"labels\":[]},\"10\":{\"left\":0,\"top\":0,\"width\":167,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"11\":{\"left\":0,\"top\":0,\"width\":211,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"15\":{\"left\":0,\"top\":0,\"width\":200,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"16\":{\"left\":0,\"top\":0,\"width\":189,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"17\":{\"left\":368,\"top\":544,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]},\"18\":{\"left\":68.05622030237583,\"top\":218.27854427645786,\"width\":227,\"height\":153,\"autosize\":true,\"data\":{},\"labels\":[]},\"19\":{\"left\":0,\"top\":0,\"width\":156,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"20\":{\"left\":0,\"top\":0,\"width\":211,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"21\":{\"left\":0,\"top\":0,\"width\":189,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"22\":{\"left\":0,\"top\":0,\"width\":167,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"23\":{\"left\":32,\"top\":32,\"width\":116,\"height\":69,\"autosize\":true,\"data\":{},\"labels\":[]},\"24\":{\"left\":32,\"top\":112,\"width\":116,\"height\":69,\"autosize\":true,\"data\":{},\"labels\":[]},\"25\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]},\"27\":{\"left\":197.963,\"top\":112.12923023758098,\"width\":599.2294254859612,\"height\":403.1717343412528,\"autosize\":false,\"data\":{\"flat-preview\":\"true\"},\"labels\":[]},\"28\":{\"left\":0,\"top\":0,\"width\":156,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"29\":{\"left\":34.03237969762419,\"top\":20.967607775377964,\"width\":183,\"height\":90,\"autosize\":true,\"data\":{\"complete-view\":\"true\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"30\":{\"left\":352,\"top\":18,\"width\":249,\"height\":90,\"autosize\":true,\"data\":{\"complete-view\":\"true\"},\"labels\":[]},\"31\":{\"left\":65.17925831533482,\"top\":148.46763066954645,\"width\":172,\"height\":111,\"autosize\":true,\"data\":{\"complete-view\":\"true\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"32\":{\"left\":370.03288336933036,\"top\":25.7235,\"width\":205,\"height\":90,\"autosize\":true,\"data\":{\"complete-view\":\"true\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"33\":{\"left\":297.9031166306696,\"top\":156.39517494600435,\"width\":282,\"height\":90,\"autosize\":true,\"data\":{\"complete-view\":\"true\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"34\":{\"left\":0,\"top\":0,\"width\":167,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"35\":{\"left\":0,\"top\":0,\"width\":233,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"36\":{\"left\":0,\"top\":0,\"width\":156,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"37\":{\"left\":0,\"top\":0,\"width\":266,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"38\":{\"left\":0,\"top\":0,\"width\":101,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"39\":{\"left\":0,\"top\":0,\"width\":156,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"40\":{\"left\":0,\"top\":0,\"width\":167,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"41\":{\"left\":1248,\"top\":160,\"width\":161,\"height\":272,\"autosize\":true,\"data\":{},\"labels\":[]},\"42\":{\"left\":96,\"top\":272,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"name\"}]},\"43\":{\"left\":1226.2889179265655,\"top\":92.88446868250554,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"transfer\",\"left\":21.71,\"top\":-3.1155,\"position\":0,\"id\":\"name\"}]},\"44\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"},{\"text\":\"\",\"left\":0,\"top\":0,\"position\":-30,\"id\":\"source\"},{\"text\":\"\",\"left\":0,\"top\":0,\"position\":31,\"id\":\"target\"}]},\"45\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"46\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"47\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"48\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"49\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"50\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"51\":{\"left\":12,\"top\":12,\"width\":116,\"height\":69,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"52\":{\"left\":12,\"top\":134,\"width\":116,\"height\":69,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"53\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"},{\"text\":\"1\",\"left\":0,\"top\":0,\"position\":-30,\"id\":\"source\"},{\"text\":\"1\",\"left\":0,\"top\":0,\"position\":31,\"id\":\"target\"}]},\"54\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"55\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"56\":{\"left\":456.91121468327674,\"top\":40.3788051190791,\"width\":664.1875469690657,\"height\":1038.02,\"autosize\":false,\"data\":{},\"labels\":[]},\"57\":{\"left\":779.2491470274009,\"top\":154.48254482955429,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"name\"}]},\"58\":{\"left\":77.07162256972777,\"top\":25.690569907029655,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"customer request arrived\",\"left\":24.026736865111754,\"top\":-7.2422851998050355,\"position\":0,\"id\":\"name\"}]},\"59\":{\"left\":311.85889204545447,\"top\":88.21672045454542,\"width\":117.32761917382913,\"height\":43.74614153572372,\"autosize\":false,\"data\":{\"complete-view\":\"false\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"60\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"61\":{\"left\":79.583911740333,\"top\":125.94200131136961,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"customer request received\",\"left\":22.900747460446976,\"top\":-14.09307416739393,\"position\":0,\"id\":\"name\"}]},\"62\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"63\":{\"left\":306.60244246579765,\"top\":176.10612120308747,\"width\":161.73529968573695,\"height\":41.10310543334214,\"autosize\":false,\"data\":{\"complete-view\":\"false\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"64\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"65\":{\"left\":171.06046363907376,\"top\":362.44558177481986,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Shopping cart composed (all products in portfolio)\",\"left\":24.60136667660378,\"top\":-20.12839091722128,\"position\":0,\"id\":\"name\"}]},\"66\":{\"left\":171.06095151876502,\"top\":279.6950211732761,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Shopping cart composed (at least one not in portfolio)\",\"left\":24.601366676603778,\"top\":-13.418927278147514,\"position\":0,\"id\":\"name\"}]},\"67\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"68\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"69\":{\"left\":291.8313997793573,\"top\":1027,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"name\"}]},\"70\":{\"left\":389.108382372285,\"top\":268.516,\"width\":183,\"height\":37,\"autosize\":true,\"data\":{\"complete-view\":\"false\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"71\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"72\":{\"left\":457.628568702434,\"top\":387.7366587785391,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Request sent to main contractor\",\"left\":31.219920814964954,\"top\":-18.67186192575424,\"position\":0,\"id\":\"name\"}]},\"73\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"74\":{\"left\":180.00646363907376,\"top\":485.4527818344426,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Positive feasibility check of the main contractor\",\"left\":6.709457564013714,\"top\":-15.655383639073776,\"position\":0,\"id\":\"name\"}]},\"75\":{\"left\":468.5139422749662,\"top\":1027,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"name\"}]},\"76\":{\"left\":311.96014544370496,\"top\":476.50629088740993,\"width\":227,\"height\":37,\"autosize\":true,\"data\":{\"complete-view\":\"false\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"77\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"78\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"79\":{\"left\":182.8,\"top\":588.8692822287343,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Assignment created\",\"left\":19.717607429114704,\"top\":-19.717607429114704,\"position\":0,\"id\":\"name\"}]},\"80\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"81\":{\"left\":400.63854696906566,\"top\":589.7494638976184,\"width\":195.5506607095528,\"height\":45.69689712619743,\"autosize\":false,\"data\":{\"complete-view\":\"false\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"82\":{\"left\":324.909,\"top\":669.8527851417709,\"width\":146.49837189049993,\"height\":45.69689712619743,\"autosize\":false,\"data\":{\"complete-view\":\"false\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"83\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"84\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"85\":{\"left\":1460.3407474796977,\"top\":655.5633794907562,\"width\":44,\"height\":47,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"name\"}]},\"86\":{\"left\":689.5427474796977,\"top\":675.6269187478448,\"width\":44,\"height\":47,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"name\"}]},\"87\":{\"left\":477.0797131119605,\"top\":758.0797725190265,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Assignment sended to customer\",\"left\":30.52464728332898,\"top\":63.96983610238158,\"position\":0,\"id\":\"name\"}]},\"88\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"89\":{\"left\":184.77147851417706,\"top\":786.045631827974,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Assignment cleared\",\"left\":19.717607429114704,\"top\":-9.858803714557254,\"position\":0,\"id\":\"name\"}]},\"90\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"122\":{\"left\":305.993752716671,\"top\":891.6577418499869,\"width\":193.43219681193443,\"height\":40,\"autosize\":false,\"data\":{\"complete-view\":\"false\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"123\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"124\":{\"left\":537.1380223308665,\"top\":1038,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Cleared assignment sended to main contractor\",\"left\":0.0002563751025455276,\"top\":34.258643559223934,\"position\":0,\"id\":\"name\"}]},\"125\":{\"left\":1639.6146735526856,\"top\":100,\"width\":610.1310108666842,\"height\":1226.696144409527,\"autosize\":false,\"data\":{},\"labels\":[]},\"126\":{\"left\":84.00694701497858,\"top\":31.141011308844504,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Customer request received\",\"left\":22.240890470756046,\"top\":-8.340333926533509,\"position\":0,\"id\":\"name\"}]},\"127\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"128\":{\"left\":253.32148579545444,\"top\":104.51121193181812,\"width\":138.43219681193435,\"height\":44.185469330960586,\"autosize\":false,\"data\":{\"complete-view\":\"false\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"129\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"130\":{\"left\":86.78699822039941,\"top\":128.44521727888733,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Control slip created\",\"left\":13.90055654422255,\"top\":-16.680667853067064,\"position\":0,\"id\":\"name\"}]},\"131\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"132\":{\"left\":89.5674,\"top\":211.84933392653352,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Assignment from main contractor\",\"left\":19.460779161911574,\"top\":-13.900556544222557,\"position\":0,\"id\":\"name\"}]},\"133\":{\"left\":317.53711216012243,\"top\":334.173598206679,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"name\"}]},\"134\":{\"left\":248.03566785306705,\"top\":200.72811130884452,\"width\":219.5890632690925,\"height\":47.736405433342185,\"autosize\":false,\"data\":{\"complete-view\":\"false\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"135\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"136\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"137\":{\"left\":95.12855298502141,\"top\":298.0323250285315,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Receipt confirmed\",\"left\":19.46077916191151,\"top\":-11.120445235378103,\"position\":0,\"id\":\"name\"}]},\"138\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"139\":{\"left\":245.25377382310987,\"top\":348.074102410842,\"width\":135.20494952860557,\"height\":40,\"autosize\":false,\"data\":{\"complete-view\":\"false\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"140\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"141\":{\"left\":246.91366607346646,\"top\":455.37789580955734,\"width\":164.26144409526336,\"height\":42.78324153572373,\"autosize\":false,\"data\":{\"complete-view\":\"false\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"142\":{\"left\":100.68841130884451,\"top\":417.57721727888764,\"width\":44,\"height\":47,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Meeting arranged\",\"left\":22.240890470756046,\"top\":-2.780111308844467,\"position\":0,\"id\":\"name\"}]},\"143\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"144\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"145\":{\"left\":248.5738886911555,\"top\":559.902,\"width\":164.66912460717117,\"height\":47.020169330960584,\"autosize\":false,\"data\":{\"complete-view\":\"false\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"146\":{\"left\":103.46822083808831,\"top\":520.4413250285301,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Assignment processed\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"name\"}]},\"147\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"148\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"205\":{\"left\":255.79411130884452,\"top\":664.4258886911555,\"width\":164.26144409526327,\"height\":45.563341535723794,\"autosize\":false,\"data\":{\"complete-view\":\"false\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"206\":{\"left\":103.468,\"top\":628.8646660734664,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Assignment log created\",\"left\":16.68066785306705,\"top\":-19.460779161911823,\"position\":0,\"id\":\"name\"}]},\"207\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"208\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"209\":{\"left\":492.27769137859207,\"top\":661.9592888190526,\"width\":44,\"height\":47,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"AssignmentLogSended\",\"left\":25.02102261768901,\"top\":-16.680677382310932,\"position\":0,\"id\":\"name\"}]},\"210\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"211\":{\"left\":12.748997159090907,\"top\":746.5999943181818,\"width\":220.4844856309871,\"height\":43.68763322857899,\"autosize\":false,\"data\":{\"complete-view\":\"false\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"212\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"213\":{\"left\":106.24844345577748,\"top\":867.954777382311,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Complete assignment reported\",\"left\":5.560222617689027,\"top\":-13.900556544222528,\"position\":0,\"id\":\"name\"}]},\"214\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"215\":{\"left\":266.56675271667103,\"top\":872.7807111809474,\"width\":176.07680511907915,\"height\":43.499477638105304,\"autosize\":false,\"data\":{\"complete-view\":\"false\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"216\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"217\":{\"left\":154.70595846427625,\"top\":957.9016083071447,\"width\":44,\"height\":47,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Products booked\",\"left\":22.240890470756078,\"top\":-11.120445235378138,\"position\":0,\"id\":\"name\"}]},\"218\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"219\":{\"left\":278.61615527621035,\"top\":1013.9115974404602,\"width\":121.97222748097386,\"height\":40,\"autosize\":false,\"data\":{\"complete-view\":\"false\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"220\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"221\":{\"left\":232.49484665480273,\"top\":1100.9154223618937,\"width\":163.36602173336865,\"height\":42.83784153572378,\"autosize\":false,\"data\":{\"complete-view\":\"false\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"222\":{\"left\":122.9297738231098,\"top\":1061.5666607346657,\"width\":44,\"height\":47,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Issue archieved\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"name\"}]},\"223\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"224\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"225\":{\"left\":567.700630248935,\"top\":1227,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Issue finished\",\"left\":-2.780111308844503,\"top\":33.36133570613444,\"position\":0,\"id\":\"name\"}]},\"380\":{\"left\":1270,\"top\":250,\"width\":100,\"height\":42.14031661428953,\"autosize\":false,\"data\":{\"complete-view\":\"false\"},\"labels\":[]},\"381\":{\"left\":0,\"top\":0,\"width\":134,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"382\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"383\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"384\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"385\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"386\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"387\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"388\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"389\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"476\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"477\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"478\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"479\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"480\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"481\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"482\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"483\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"484\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"485\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"582\":{\"left\":0,\"top\":0,\"width\":156,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"583\":{\"left\":0,\"top\":0,\"width\":222,\"height\":21,\"autosize\":true,\"data\":{},\"labels\":[]},\"584\":{\"left\":316.4080056818182,\"top\":2.8242994318182095,\"width\":183,\"height\":75.52308964909949,\"autosize\":false,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"585\":{\"left\":314.5865710227268,\"top\":9.072273863636362,\"width\":118.74054696906586,\"height\":45.69689712619741,\"autosize\":false,\"data\":{\"complete-view\":\"false\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"586\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"587\":{\"left\":260.96959943181804,\"top\":12.72059375000001,\"width\":112.6830108666843,\"height\":40,\"autosize\":false,\"data\":{\"complete-view\":\"false\"},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"588\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"589\":{\"left\":1214.596022727272,\"top\":400,\"width\":116,\"height\":37,\"autosize\":true,\"data\":{\"complete-view\":\"false\"},\"labels\":[]},\"590\":{\"left\":1340,\"top\":86.62295740411196,\"width\":116.79800319942456,\"height\":47.75339031085531,\"autosize\":false,\"data\":{\"complete-view\":\"false\"},\"labels\":[]},\"591\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"592\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"593\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"-31\":{\"left\":171.0002341252671,\"top\":0,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: Customer\",\"left\":-107,\"top\":-32,\"position\":0,\"id\":\"name\"}]},\"-29\":{\"left\":0,\"top\":202.99979141364997,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: Consultant\",\"left\":-59.01511879049674,\"top\":-27.868250539956758,\"position\":0,\"id\":\"name\"}]},\"-32\":{\"left\":394.9999295411298,\"top\":0,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: CheckingAccount\",\"left\":149,\"top\":-32,\"position\":0,\"id\":\"name\"}]},\"-33\":{\"left\":599,\"top\":267.0002721382331,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: SavingAccount\",\"left\":105,\"top\":21,\"position\":0,\"id\":\"name\"}]},\"-51\":{\"left\":0,\"top\":53.1261233308411,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: Source\",\"left\":-96,\"top\":21,\"position\":0,\"id\":\"name\"}]},\"-52\":{\"left\":0,\"top\":153.82903601327848,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: Target\",\"left\":-96,\"top\":21,\"position\":0,\"id\":\"name\"}]},\"-59\":{\"left\":664,\"top\":158.0626330084836,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: RequestEditor\",\"left\":15.555555555555472,\"top\":28.888888888888964,\"position\":0,\"id\":\"name\"}]},\"-63\":{\"left\":664,\"top\":243.1283972457177,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: ShoppingCartEditor\",\"left\":13.333333333333004,\"top\":17.777777777777814,\"position\":0,\"id\":\"name\"}]},\"-70\":{\"left\":664,\"top\":301.4937605271507,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: RequestSender\",\"left\":8.888888888888836,\"top\":31.111111111111178,\"position\":0,\"id\":\"name\"}]},\"-76\":{\"left\":664,\"top\":380.1893930566375,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: AssignmentCreator\",\"left\":8.88888888888874,\"top\":24.444444444444528,\"position\":0,\"id\":\"name\"}]},\"-81\":{\"left\":664,\"top\":619.5826989577345,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: CreatedAssignmentSender\",\"left\":19.368141790920568,\"top\":31.87364035818415,\"position\":0,\"id\":\"name\"}]},\"-82\":{\"left\":664,\"top\":773.9696579194504,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: AssignmentClearer\",\"left\":2.222222222222179,\"top\":33.33333333333341,\"position\":0,\"id\":\"name\"}]},\"-122\":{\"left\":664,\"top\":928.4900905958688,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: ClearedAssignmentSender\",\"left\":4.444444444444358,\"top\":39.999999999999616,\"position\":0,\"id\":\"name\"}]},\"-128\":{\"left\":0,\"top\":333.7038535536716,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: ControlSlipCreator\",\"left\":-14.128403536717176,\"top\":32.96627491900677,\"position\":0,\"id\":\"name\"}]},\"-134\":{\"left\":0,\"top\":427.3991325688986,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: ReceiptConfirmationResponsible\",\"left\":-16.48313745950337,\"top\":30.611540996220604,\"position\":0,\"id\":\"name\"}]},\"-139\":{\"left\":0,\"top\":499.50373050252495,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: MeetingManager\",\"left\":-14.128403536717176,\"top\":32.9662749190066,\"position\":0,\"id\":\"name\"}]},\"-141\":{\"left\":0,\"top\":618.8497511700153,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: AssignmentProcessor\",\"left\":-9.418935691144785,\"top\":30.611540996220356,\"position\":0,\"id\":\"name\"}]},\"-145\":{\"left\":0,\"top\":759.1472432174935,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: AssignmentLogCreator\",\"left\":-9.418935691144785,\"top\":30.611540996220377,\"position\":0,\"id\":\"name\"}]},\"-205\":{\"left\":0,\"top\":891.4158853719969,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: AssignmentLogSender\",\"left\":-9.418935691144785,\"top\":32.96627491900649,\"position\":0,\"id\":\"name\"}]},\"-211\":{\"left\":0,\"top\":1097.3400619318788,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: CompleteAssignmentLogSender\",\"left\":-23.54733922786197,\"top\":30.611540996220306,\"position\":0,\"id\":\"name\"}]},\"-215\":{\"left\":143.244778531556,\"top\":1227,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: ProductBookResponsible\",\"left\":-138.92930144438554,\"top\":23.547339227861862,\"position\":0,\"id\":\"name\"}]},\"-219\":{\"left\":198.92075783903624,\"top\":1227,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: IssueArchiever\",\"left\":-21.192605305075887,\"top\":68.2872837607992,\"position\":0,\"id\":\"name\"}]},\"-221\":{\"left\":360.96992296485973,\"top\":1227,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: FinishIssueResponsible\",\"left\":4.709467845572295,\"top\":65.93254983801312,\"position\":0,\"id\":\"name\"}]},\"-587\":{\"left\":0,\"top\":116.9736881824897,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: ProcessIssue\",\"left\":-16.352985795454547,\"top\":29.9805,\"position\":0,\"id\":\"name\"}]},\"-585\":{\"left\":664,\"top\":84.3914773336771,\"width\":24,\"height\":24,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"RoleType: ProcessIssue\",\"left\":0,\"top\":21.80397727272726,\"position\":0,\"id\":\"name\"}]}}},\"2\":{\"data\":{\"2\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]},\"25\":{\"left\":112,\"top\":144,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]},\"26\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]}}},\"4\":{\"data\":{\"4\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]},\"23\":{\"left\":240,\"top\":224,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]},\"24\":{\"left\":464,\"top\":432,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]}}},\"27\":{\"data\":{\"27\":{\"left\":-20,\"top\":27,\"width\":1077,\"height\":759,\"autosize\":true,\"data\":{},\"labels\":[]},\"29\":{\"left\":192,\"top\":128,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]},\"30\":{\"left\":608,\"top\":128,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]},\"31\":{\"left\":192,\"top\":355.5,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]},\"32\":{\"left\":608,\"top\":306,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]},\"33\":{\"left\":608,\"top\":429,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]},\"34\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]},\"35\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]},\"36\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]},\"37\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]},\"38\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]},\"39\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[]}}},\"41\":{\"data\":{\"41\":{\"left\":-69.80885529157683,\"top\":186.96112311015145,\"width\":1172,\"height\":699,\"autosize\":true,\"data\":{},\"labels\":[]},\"42\":{\"left\":320,\"top\":272,\"width\":42,\"height\":44,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"name\"}]},\"44\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"},{\"text\":\"\",\"left\":0,\"top\":0,\"position\":-30,\"id\":\"source\"},{\"text\":\"\",\"left\":0,\"top\":0,\"position\":31,\"id\":\"target\"}]},\"45\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"46\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"48\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"49\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"50\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"51\":{\"left\":144,\"top\":144,\"width\":116,\"height\":72,\"autosize\":true,\"data\":{},\"labels\":[]},\"52\":{\"left\":464,\"top\":160,\"width\":116,\"height\":72,\"autosize\":true,\"data\":{},\"labels\":[]},\"53\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"},{\"text\":\"1\",\"left\":-5.5,\"top\":-9,\"position\":-30,\"id\":\"source\"},{\"text\":\"1\",\"left\":10.5,\"top\":13.5,\"position\":31,\"id\":\"target\"}]},\"54\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"55\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]}}},\"56\":{\"data\":{\"56\":{\"left\":-930.9321097788817,\"top\":-79.34303040949484,\"width\":1024,\"height\":463,\"autosize\":true,\"data\":{},\"labels\":[]},\"60\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"62\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"64\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"67\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"68\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"71\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"73\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"77\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"78\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"80\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"83\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"84\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"88\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"90\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"123\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]}}},\"125\":{\"data\":{\"60\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"62\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"64\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"67\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"68\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"71\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"73\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"77\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"78\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"80\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"83\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"84\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"88\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"90\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"123\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"125\":{\"left\":-1953.7911749329453,\"top\":-440.16274395917463,\"width\":383,\"height\":404,\"autosize\":true,\"data\":{},\"labels\":[]},\"126\":{\"left\":0,\"top\":0,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Customer request received\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"name\"}]},\"128\":{\"left\":0,\"top\":0,\"width\":238,\"height\":69,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"129\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"130\":{\"left\":0,\"top\":0,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Control slip created\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"name\"}]},\"131\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"132\":{\"left\":0,\"top\":0,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Assignment from main contractor\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"name\"}]},\"134\":{\"left\":0,\"top\":0,\"width\":370,\"height\":69,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"135\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"136\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"137\":{\"left\":0,\"top\":0,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Receipt confirmed\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"name\"}]},\"138\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"139\":{\"left\":0,\"top\":0,\"width\":194,\"height\":69,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"140\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"141\":{\"left\":0,\"top\":0,\"width\":249,\"height\":69,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"142\":{\"left\":0,\"top\":0,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Meeting arranged\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"name\"}]},\"143\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"144\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"145\":{\"left\":0,\"top\":0,\"width\":260,\"height\":69,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"146\":{\"left\":0,\"top\":0,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Assignment processed\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"name\"}]},\"147\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"148\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"205\":{\"left\":0,\"top\":0,\"width\":249,\"height\":69,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"206\":{\"left\":0,\"top\":0,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Assignment log created\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"name\"}]},\"207\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"208\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"209\":{\"left\":0,\"top\":0,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"AssignmentLogSended\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"name\"}]},\"210\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"211\":{\"left\":0,\"top\":0,\"width\":337,\"height\":69,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"occurrence\"}]},\"212\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"213\":{\"left\":0,\"top\":0,\"width\":44,\"height\":46,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"Complete assignment reported\",\"left\":0,\"top\":0,\"position\":0,\"id\":\"name\"}]},\"214\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"216\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"218\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"220\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"223\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]},\"224\":{\"left\":0,\"top\":0,\"width\":0,\"height\":0,\"autosize\":true,\"data\":{},\"labels\":[{\"text\":\"\",\"left\":0,\"top\":0,\"position\":0.5,\"id\":\"name\"}]}}}}}");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/index.js":
/*!******************************************!*\
  !*** ./node_modules/rxjs/_esm5/index.js ***!
  \******************************************/
/*! exports provided: Observable, ConnectableObservable, GroupedObservable, observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject, asap, asapScheduler, async, asyncScheduler, queue, queueScheduler, animationFrame, animationFrameScheduler, VirtualTimeScheduler, VirtualAction, Scheduler, Subscription, Subscriber, Notification, NotificationKind, pipe, noop, identity, isObservable, ArgumentOutOfRangeError, EmptyError, ObjectUnsubscribedError, UnsubscriptionError, TimeoutError, bindCallback, bindNodeCallback, combineLatest, concat, defer, empty, forkJoin, from, fromEvent, fromEventPattern, generate, iif, interval, merge, never, of, onErrorResumeNext, pairs, partition, race, range, throwError, timer, using, zip, scheduled, EMPTY, NEVER, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _internal_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });

/* harmony import */ var _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/observable/ConnectableObservable */ "./node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__["ConnectableObservable"]; });

/* harmony import */ var _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/operators/groupBy */ "./node_modules/rxjs/_esm5/internal/operators/groupBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedObservable", function() { return _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__["GroupedObservable"]; });

/* harmony import */ var _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__["observable"]; });

/* harmony import */ var _internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return _internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]; });

/* harmony import */ var _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal/BehaviorSubject */ "./node_modules/rxjs/_esm5/internal/BehaviorSubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]; });

/* harmony import */ var _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internal/ReplaySubject */ "./node_modules/rxjs/_esm5/internal/ReplaySubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__["ReplaySubject"]; });

/* harmony import */ var _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./internal/AsyncSubject */ "./node_modules/rxjs/_esm5/internal/AsyncSubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__["AsyncSubject"]; });

/* harmony import */ var _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./internal/scheduler/asap */ "./node_modules/rxjs/_esm5/internal/scheduler/asap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asap", function() { return _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__["asap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asapScheduler", function() { return _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__["asapScheduler"]; });

/* harmony import */ var _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./internal/scheduler/async */ "./node_modules/rxjs/_esm5/internal/scheduler/async.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "async", function() { return _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__["async"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncScheduler", function() { return _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__["asyncScheduler"]; });

/* harmony import */ var _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./internal/scheduler/queue */ "./node_modules/rxjs/_esm5/internal/scheduler/queue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__["queue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queueScheduler", function() { return _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__["queueScheduler"]; });

/* harmony import */ var _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./internal/scheduler/animationFrame */ "./node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationFrame", function() { return _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__["animationFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationFrameScheduler", function() { return _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__["animationFrameScheduler"]; });

/* harmony import */ var _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./internal/scheduler/VirtualTimeScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function() { return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualTimeScheduler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualAction", function() { return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualAction"]; });

/* harmony import */ var _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./internal/Scheduler */ "./node_modules/rxjs/_esm5/internal/Scheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__["Scheduler"]; });

/* harmony import */ var _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./internal/Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__["Subscription"]; });

/* harmony import */ var _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./internal/Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__["Subscriber"]; });

/* harmony import */ var _internal_Notification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./internal/Notification */ "./node_modules/rxjs/_esm5/internal/Notification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _internal_Notification__WEBPACK_IMPORTED_MODULE_16__["Notification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationKind", function() { return _internal_Notification__WEBPACK_IMPORTED_MODULE_16__["NotificationKind"]; });

/* harmony import */ var _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./internal/util/pipe */ "./node_modules/rxjs/_esm5/internal/util/pipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__["pipe"]; });

/* harmony import */ var _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./internal/util/noop */ "./node_modules/rxjs/_esm5/internal/util/noop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__["noop"]; });

/* harmony import */ var _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./internal/util/identity */ "./node_modules/rxjs/_esm5/internal/util/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__["identity"]; });

/* harmony import */ var _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./internal/util/isObservable */ "./node_modules/rxjs/_esm5/internal/util/isObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__["isObservable"]; });

/* harmony import */ var _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./internal/util/ArgumentOutOfRangeError */ "./node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__["ArgumentOutOfRangeError"]; });

/* harmony import */ var _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./internal/util/EmptyError */ "./node_modules/rxjs/_esm5/internal/util/EmptyError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__["EmptyError"]; });

/* harmony import */ var _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./internal/util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__["ObjectUnsubscribedError"]; });

/* harmony import */ var _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./internal/util/UnsubscriptionError */ "./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__["UnsubscriptionError"]; });

/* harmony import */ var _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./internal/util/TimeoutError */ "./node_modules/rxjs/_esm5/internal/util/TimeoutError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__["TimeoutError"]; });

/* harmony import */ var _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./internal/observable/bindCallback */ "./node_modules/rxjs/_esm5/internal/observable/bindCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindCallback", function() { return _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__["bindCallback"]; });

/* harmony import */ var _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./internal/observable/bindNodeCallback */ "./node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function() { return _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__["bindNodeCallback"]; });

/* harmony import */ var _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./internal/observable/combineLatest */ "./node_modules/rxjs/_esm5/internal/observable/combineLatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__["combineLatest"]; });

/* harmony import */ var _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./internal/observable/concat */ "./node_modules/rxjs/_esm5/internal/observable/concat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__["concat"]; });

/* harmony import */ var _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./internal/observable/defer */ "./node_modules/rxjs/_esm5/internal/observable/defer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__["defer"]; });

/* harmony import */ var _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["empty"]; });

/* harmony import */ var _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./internal/observable/forkJoin */ "./node_modules/rxjs/_esm5/internal/observable/forkJoin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forkJoin", function() { return _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__["forkJoin"]; });

/* harmony import */ var _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./internal/observable/from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__["from"]; });

/* harmony import */ var _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./internal/observable/fromEvent */ "./node_modules/rxjs/_esm5/internal/observable/fromEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__["fromEvent"]; });

/* harmony import */ var _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./internal/observable/fromEventPattern */ "./node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEventPattern", function() { return _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__["fromEventPattern"]; });

/* harmony import */ var _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./internal/observable/generate */ "./node_modules/rxjs/_esm5/internal/observable/generate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__["generate"]; });

/* harmony import */ var _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./internal/observable/iif */ "./node_modules/rxjs/_esm5/internal/observable/iif.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iif", function() { return _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__["iif"]; });

/* harmony import */ var _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./internal/observable/interval */ "./node_modules/rxjs/_esm5/internal/observable/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__["interval"]; });

/* harmony import */ var _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./internal/observable/merge */ "./node_modules/rxjs/_esm5/internal/observable/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__["merge"]; });

/* harmony import */ var _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/rxjs/_esm5/internal/observable/never.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "never", function() { return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["never"]; });

/* harmony import */ var _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./internal/observable/of */ "./node_modules/rxjs/_esm5/internal/observable/of.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "of", function() { return _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__["of"]; });

/* harmony import */ var _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./internal/observable/onErrorResumeNext */ "./node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__["onErrorResumeNext"]; });

/* harmony import */ var _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./internal/observable/pairs */ "./node_modules/rxjs/_esm5/internal/observable/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__["pairs"]; });

/* harmony import */ var _internal_observable_partition__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./internal/observable/partition */ "./node_modules/rxjs/_esm5/internal/observable/partition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _internal_observable_partition__WEBPACK_IMPORTED_MODULE_44__["partition"]; });

/* harmony import */ var _internal_observable_race__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./internal/observable/race */ "./node_modules/rxjs/_esm5/internal/observable/race.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _internal_observable_race__WEBPACK_IMPORTED_MODULE_45__["race"]; });

/* harmony import */ var _internal_observable_range__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./internal/observable/range */ "./node_modules/rxjs/_esm5/internal/observable/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _internal_observable_range__WEBPACK_IMPORTED_MODULE_46__["range"]; });

/* harmony import */ var _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./internal/observable/throwError */ "./node_modules/rxjs/_esm5/internal/observable/throwError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_47__["throwError"]; });

/* harmony import */ var _internal_observable_timer__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./internal/observable/timer */ "./node_modules/rxjs/_esm5/internal/observable/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return _internal_observable_timer__WEBPACK_IMPORTED_MODULE_48__["timer"]; });

/* harmony import */ var _internal_observable_using__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./internal/observable/using */ "./node_modules/rxjs/_esm5/internal/observable/using.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "using", function() { return _internal_observable_using__WEBPACK_IMPORTED_MODULE_49__["using"]; });

/* harmony import */ var _internal_observable_zip__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./internal/observable/zip */ "./node_modules/rxjs/_esm5/internal/observable/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _internal_observable_zip__WEBPACK_IMPORTED_MODULE_50__["zip"]; });

/* harmony import */ var _internal_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./internal/scheduled/scheduled */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scheduled", function() { return _internal_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_51__["scheduled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["NEVER"]; });

/* harmony import */ var _internal_config__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./internal/config */ "./node_modules/rxjs/_esm5/internal/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _internal_config__WEBPACK_IMPORTED_MODULE_52__["config"]; });

/** PURE_IMPORTS_START  PURE_IMPORTS_END */























































//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/AsyncSubject.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/AsyncSubject.js ***!
  \**********************************************************/
/*! exports provided: AsyncSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return AsyncSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */



var AsyncSubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.hasNext = false;
        _this.hasCompleted = false;
        return _this;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject.prototype.error = function (error) {
        if (!this.hasCompleted) {
            _super.prototype.error.call(this, error);
        }
    };
    AsyncSubject.prototype.complete = function () {
        this.hasCompleted = true;
        if (this.hasNext) {
            _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
    };
    return AsyncSubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]));

//# sourceMappingURL=AsyncSubject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/BehaviorSubject.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/BehaviorSubject.js ***!
  \*************************************************************/
/*! exports provided: BehaviorSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return BehaviorSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */



var BehaviorSubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_2__["ObjectUnsubscribedError"]();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]));

//# sourceMappingURL=BehaviorSubject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/InnerSubscriber.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/InnerSubscriber.js ***!
  \*************************************************************/
/*! exports provided: InnerSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerSubscriber", function() { return InnerSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


var InnerSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));

//# sourceMappingURL=InnerSubscriber.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Notification.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Notification.js ***!
  \**********************************************************/
/*! exports provided: NotificationKind, Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationKind", function() { return NotificationKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable/empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable/of */ "./node_modules/rxjs/_esm5/internal/observable/of.js");
/* harmony import */ var _observable_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observable/throwError */ "./node_modules/rxjs/_esm5/internal/observable/throwError.js");
/** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */



var NotificationKind;
/*@__PURE__*/ (function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
var Notification = /*@__PURE__*/ (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return Object(_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(this.value);
            case 'E':
                return Object(_observable_throwError__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.error);
            case 'C':
                return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_0__["empty"])();
        }
        throw new Error('unexpected notification kind value');
    };
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    };
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}());

//# sourceMappingURL=Notification.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Observable.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Observable.js ***!
  \********************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/_esm5/internal/util/canReportError.js");
/* harmony import */ var _util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/_esm5/internal/util/toSubscriber.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/_esm5/internal/util/pipe.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/_esm5/internal/config.js");
/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */





var Observable = /*@__PURE__*/ (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = Object(_util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__["toSubscriber"])(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_0__["canReportError"])(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_3__["pipeFromArray"])(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = _config__WEBPACK_IMPORTED_MODULE_4__["config"].Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Observer.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Observer.js ***!
  \******************************************************/
/*! exports provided: empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/_esm5/internal/config.js");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */


var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (_config__WEBPACK_IMPORTED_MODULE_0__["config"].useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__["hostReportError"])(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/OuterSubscriber.js ***!
  \*************************************************************/
/*! exports provided: OuterSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OuterSubscriber", function() { return OuterSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


var OuterSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));

//# sourceMappingURL=OuterSubscriber.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/ReplaySubject.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/ReplaySubject.js ***!
  \***********************************************************/
/*! exports provided: ReplaySubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return ReplaySubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _scheduler_queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduler/queue */ "./node_modules/rxjs/_esm5/internal/scheduler/queue.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operators/observeOn */ "./node_modules/rxjs/_esm5/internal/operators/observeOn.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/_esm5/internal/SubjectSubscription.js");
/** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */







var ReplaySubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) {
            bufferSize = Number.POSITIVE_INFINITY;
        }
        if (windowTime === void 0) {
            windowTime = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this) || this;
        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            _this._infiniteTimeWindow = true;
            _this.next = _this.nextInfiniteTimeWindow;
        }
        else {
            _this.next = _this.nextTimeWindow;
        }
        return _this;
    }
    ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
        var _events = this._events;
        _events.push(value);
        if (_events.length > this._bufferSize) {
            _events.shift();
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype.nextTimeWindow = function (value) {
        this._events.push(new ReplayEvent(this._getNow(), value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;
        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_5__["ObjectUnsubscribedError"]();
        }
        else if (this.isStopped || this.hasError) {
            subscription = _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_6__["SubjectSubscription"](this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__["ObserveOnSubscriber"](subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
            }
        }
        else {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i].value);
            }
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || _scheduler_queue__WEBPACK_IMPORTED_MODULE_2__["queue"]).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]));

var ReplayEvent = /*@__PURE__*/ (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Scheduler.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Scheduler.js ***!
  \*******************************************************/
/*! exports provided: Scheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return Scheduler; });
var Scheduler = /*@__PURE__*/ (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());

//# sourceMappingURL=Scheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subject.js ***!
  \*****************************************************/
/*! exports provided: SubjectSubscriber, Subject, AnonymousSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscriber", function() { return SubjectSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousSubject", function() { return AnonymousSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/_esm5/internal/SubjectSubscription.js");
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */







var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"]));

var Subject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_6__["rxSubscriber"]] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__["SubjectSubscription"](this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new _Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]));

var AnonymousSubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));

//# sourceMappingURL=Subject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/SubjectSubscription.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/SubjectSubscription.js ***!
  \*****************************************************************/
/*! exports provided: SubjectSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function() { return SubjectSubscription; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var SubjectSubscription = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(_Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]));

//# sourceMappingURL=SubjectSubscription.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subscriber.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subscriber.js ***!
  \********************************************************/
/*! exports provided: Subscriber, SafeSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return Subscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeSubscriber", function() { return SafeSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/_esm5/internal/Observer.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/_esm5/internal/config.js");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */







var Subscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_2__["empty"];
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_2__["empty"];
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_4__["rxSubscriber"]] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(_Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"]));

var SafeSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== _Observer__WEBPACK_IMPORTED_MODULE_2__["empty"]) {
                context = Object.create(observerOrNext);
                if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = _config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));

//# sourceMappingURL=Subscriber.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subscription.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subscription.js ***!
  \**********************************************************/
/*! exports provided: Subscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/_esm5/internal/util/isObject.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js");
/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */




var Subscription = /*@__PURE__*/ (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"] ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (Object(_util_isObject__WEBPACK_IMPORTED_MODULE_1__["isObject"])(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"]) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"](errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());

function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"]) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/config.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/config.js ***!
  \****************************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js ***!
  \******************************************************************************/
/*! exports provided: ConnectableObservable, connectableObservableDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return ConnectableObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectableObservableDescriptor", function() { return connectableObservableDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _operators_refCount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../operators/refCount */ "./node_modules/rxjs/_esm5/internal/operators/refCount.js");
/** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */






var ConnectableObservable = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._refCount = 0;
        _this._isComplete = false;
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
        var connection = this._connection;
        if (!connection) {
            this._isComplete = false;
            connection = this._connection = new _Subscription__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = _Subscription__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return Object(_operators_refCount__WEBPACK_IMPORTED_MODULE_5__["refCount"])()(this);
    };
    return ConnectableObservable;
}(_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]));

var connectableObservableDescriptor = /*@__PURE__*/ (function () {
    var connectableProto = ConnectableObservable.prototype;
    return {
        operator: { value: null },
        _refCount: { value: 0, writable: true },
        _subject: { value: null, writable: true },
        _connection: { value: null, writable: true },
        _subscribe: { value: connectableProto._subscribe },
        _isComplete: { value: connectableProto._isComplete, writable: true },
        getSubject: { value: connectableProto.getSubject },
        connect: { value: connectableProto.connect },
        refCount: { value: connectableProto.refCount }
    };
})();
var ConnectableSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    ConnectableSubscriber.prototype._error = function (err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
        this.connectable._isComplete = true;
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    };
    return ConnectableSubscriber;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["SubjectSubscriber"]));
var RefCountOperator = /*@__PURE__*/ (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_3__["Subscriber"]));
//# sourceMappingURL=ConnectableObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/bindCallback.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/bindCallback.js ***!
  \*********************************************************************/
/*! exports provided: bindCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindCallback", function() { return bindCallback; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/_esm5/internal/AsyncSubject.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/canReportError */ "./node_modules/rxjs/_esm5/internal/util/canReportError.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isArray,_util_isScheduler PURE_IMPORTS_END */






function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_5__["isScheduler"])(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_4__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var subject;
        var params = {
            context: context,
            subject: subject,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
        };
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            if (!scheduler) {
                if (!subject) {
                    subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                var state = {
                    args: args, subscriber: subscriber, params: params,
                };
                return scheduler.schedule(dispatch, 0, state);
            }
        });
    };
}
function dispatch(state) {
    var _this = this;
    var self = this;
    var args = state.args, subscriber = state.subscriber, params = state.params;
    var callbackFunc = params.callbackFunc, context = params.context, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
    var value = state.value, subject = state.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(state) {
    var err = state.err, subject = state.subject;
    subject.error(err);
}
//# sourceMappingURL=bindCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js ***!
  \*************************************************************************/
/*! exports provided: bindNodeCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function() { return bindNodeCallback; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/_esm5/internal/AsyncSubject.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/canReportError */ "./node_modules/rxjs/_esm5/internal/util/canReportError.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isScheduler,_util_isArray PURE_IMPORTS_END */






function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_5__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var params = {
            subject: undefined,
            args: args,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
            context: this,
        };
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var context = params.context;
            var subject = params.subject;
            if (!scheduler) {
                if (!subject) {
                    subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        var err = innerArgs.shift();
                        if (err) {
                            subject.error(err);
                            return;
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                return scheduler.schedule(dispatch, 0, { params: params, subscriber: subscriber, context: context });
            }
        });
    };
}
function dispatch(state) {
    var _this = this;
    var params = state.params, subscriber = state.subscriber, context = state.context;
    var callbackFunc = params.callbackFunc, args = params.args, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var err = innerArgs.shift();
            if (err) {
                _this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=bindNodeCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/combineLatest.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/combineLatest.js ***!
  \**********************************************************************/
/*! exports provided: combineLatest, CombineLatestOperator, CombineLatestSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return combineLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestOperator", function() { return CombineLatestOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestSubscriber", function() { return CombineLatestSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */






var NONE = {};
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = null;
    var scheduler = null;
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        resultSelector = observables.pop();
    }
    if (observables.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(observables[0])) {
        observables = observables[0];
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_5__["fromArray"])(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
var CombineLatestOperator = /*@__PURE__*/ (function () {
    function CombineLatestOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    };
    return CombineLatestOperator;
}());

var CombineLatestSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, resultSelector) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.active = 0;
        _this.values = [];
        _this.observables = [];
        return _this;
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__["subscribeToResult"])(this, observable, observable, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) {
                this._tryResultSelector(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
        var result;
        try {
            result = this.resultSelector.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__["OuterSubscriber"]));

//# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/concat.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/concat.js ***!
  \***************************************************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony import */ var _of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./of */ "./node_modules/rxjs/_esm5/internal/observable/of.js");
/* harmony import */ var _operators_concatAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/concatAll */ "./node_modules/rxjs/_esm5/internal/operators/concatAll.js");
/** PURE_IMPORTS_START _of,_operators_concatAll PURE_IMPORTS_END */


function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return Object(_operators_concatAll__WEBPACK_IMPORTED_MODULE_1__["concatAll"])()(_of__WEBPACK_IMPORTED_MODULE_0__["of"].apply(void 0, observables));
}
//# sourceMappingURL=concat.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/defer.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/defer.js ***!
  \**************************************************************/
/*! exports provided: defer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return defer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */



function defer(observableFactory) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var input;
        try {
            input = observableFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = input ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(input) : Object(_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])();
        return source.subscribe(subscriber);
    });
}
//# sourceMappingURL=defer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/empty.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/empty.js ***!
  \**************************************************************/
/*! exports provided: EMPTY, empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

var EMPTY = /*@__PURE__*/ new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/forkJoin.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/forkJoin.js ***!
  \*****************************************************************/
/*! exports provided: forkJoin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forkJoin", function() { return forkJoin; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isObject */ "./node_modules/rxjs/_esm5/internal/util/isObject.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/** PURE_IMPORTS_START _Observable,_util_isArray,_operators_map,_util_isObject,_from PURE_IMPORTS_END */





function forkJoin() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 1) {
        var first_1 = sources[0];
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(first_1)) {
            return forkJoinInternal(first_1, null);
        }
        if (Object(_util_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(first_1) && Object.getPrototypeOf(first_1) === Object.prototype) {
            var keys = Object.keys(first_1);
            return forkJoinInternal(keys.map(function (key) { return first_1[key]; }), keys);
        }
    }
    if (typeof sources[sources.length - 1] === 'function') {
        var resultSelector_1 = sources.pop();
        sources = (sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(sources[0])) ? sources[0] : sources;
        return forkJoinInternal(sources, null).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) { return resultSelector_1.apply(void 0, args); }));
    }
    return forkJoinInternal(sources, null);
}
function forkJoinInternal(sources, keys) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var len = sources.length;
        if (len === 0) {
            subscriber.complete();
            return;
        }
        var values = new Array(len);
        var completed = 0;
        var emitted = 0;
        var _loop_1 = function (i) {
            var source = Object(_from__WEBPACK_IMPORTED_MODULE_4__["from"])(sources[i]);
            var hasValue = false;
            subscriber.add(source.subscribe({
                next: function (value) {
                    if (!hasValue) {
                        hasValue = true;
                        emitted++;
                    }
                    values[i] = value;
                },
                error: function (err) { return subscriber.error(err); },
                complete: function () {
                    completed++;
                    if (completed === len || !hasValue) {
                        if (emitted === len) {
                            subscriber.next(keys ?
                                keys.reduce(function (result, key, i) { return (result[key] = values[i], result); }, {}) :
                                values);
                        }
                        subscriber.complete();
                    }
                }
            }));
        };
        for (var i = 0; i < len; i++) {
            _loop_1(i);
        }
    });
}
//# sourceMappingURL=forkJoin.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/from.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/from.js ***!
  \*************************************************************/
/*! exports provided: from */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeTo */ "./node_modules/rxjs/_esm5/internal/util/subscribeTo.js");
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/scheduled */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduled.js");
/** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */



function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
            return input;
        }
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(input));
    }
    else {
        return Object(_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_2__["scheduled"])(input, scheduler);
    }
}
//# sourceMappingURL=from.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/fromArray.js ***!
  \******************************************************************/
/*! exports provided: fromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromArray", function() { return fromArray; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToArray */ "./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js");
/* harmony import */ var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/scheduleArray */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js");
/** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */



function fromArray(input, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__["subscribeToArray"])(input));
    }
    else {
        return Object(_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(input, scheduler);
    }
}
//# sourceMappingURL=fromArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/fromEvent.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/fromEvent.js ***!
  \******************************************************************/
/*! exports provided: fromEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return fromEvent; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */




var toString = /*@__PURE__*/ (function () { return Object.prototype.toString; })();
function fromEvent(target, eventName, options, resultSelector) {
    if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function () { return source_2.off(eventName, handler); };
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
    }
    else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js ***!
  \*************************************************************************/
/*! exports provided: fromEventPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEventPattern", function() { return fromEventPattern; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */




function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var handler = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue;
        try {
            retValue = addHandler(handler);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(removeHandler)) {
            return undefined;
        }
        return function () { return removeHandler(handler, retValue); };
    });
}
//# sourceMappingURL=fromEventPattern.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/generate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/generate.js ***!
  \*****************************************************************/
/*! exports provided: generate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/_esm5/internal/util/identity.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */



function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
    var resultSelector;
    var initialState;
    if (arguments.length == 1) {
        var options = initialStateOrOptions;
        initialState = options.initialState;
        condition = options.condition;
        iterate = options.iterate;
        resultSelector = options.resultSelector || _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
        scheduler = options.scheduler;
    }
    else if (resultSelectorOrObservable === undefined || Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_2__["isScheduler"])(resultSelectorOrObservable)) {
        initialState = initialStateOrOptions;
        resultSelector = _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
        scheduler = resultSelectorOrObservable;
    }
    else {
        initialState = initialStateOrOptions;
        resultSelector = resultSelectorOrObservable;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var state = initialState;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                subscriber: subscriber,
                iterate: iterate,
                condition: condition,
                resultSelector: resultSelector,
                state: state
            });
        }
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
        } while (true);
        return undefined;
    });
}
function dispatch(state) {
    var subscriber = state.subscriber, condition = state.condition;
    if (subscriber.closed) {
        return undefined;
    }
    if (state.needIterate) {
        try {
            state.state = state.iterate(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
    }
    else {
        state.needIterate = true;
    }
    if (condition) {
        var conditionResult = void 0;
        try {
            conditionResult = condition(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!conditionResult) {
            subscriber.complete();
            return undefined;
        }
        if (subscriber.closed) {
            return undefined;
        }
    }
    var value;
    try {
        value = state.resultSelector(state.state);
    }
    catch (err) {
        subscriber.error(err);
        return undefined;
    }
    if (subscriber.closed) {
        return undefined;
    }
    subscriber.next(value);
    if (subscriber.closed) {
        return undefined;
    }
    return this.schedule(state);
}
//# sourceMappingURL=generate.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/iif.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/iif.js ***!
  \************************************************************/
/*! exports provided: iif */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iif", function() { return iif; });
/* harmony import */ var _defer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defer */ "./node_modules/rxjs/_esm5/internal/observable/defer.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */


function iif(condition, trueResult, falseResult) {
    if (trueResult === void 0) {
        trueResult = _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
    }
    if (falseResult === void 0) {
        falseResult = _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
    }
    return Object(_defer__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () { return condition() ? trueResult : falseResult; });
}
//# sourceMappingURL=iif.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/interval.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/interval.js ***!
  \*****************************************************************/
/*! exports provided: interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return interval; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm5/internal/scheduler/async.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/_esm5/internal/util/isNumeric.js");
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */



function interval(period, scheduler) {
    if (period === void 0) {
        period = 0;
    }
    if (scheduler === void 0) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    if (!Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
        return subscriber;
    });
}
function dispatch(state) {
    var subscriber = state.subscriber, counter = state.counter, period = state.period;
    subscriber.next(counter);
    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
}
//# sourceMappingURL=interval.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/merge.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/merge.js ***!
  \**************************************************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/mergeAll */ "./node_modules/rxjs/_esm5/internal/operators/mergeAll.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */




function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
        return observables[0];
    }
    return Object(_operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])(concurrent)(Object(_fromArray__WEBPACK_IMPORTED_MODULE_3__["fromArray"])(observables, scheduler));
}
//# sourceMappingURL=merge.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/never.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/never.js ***!
  \**************************************************************/
/*! exports provided: NEVER, never */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return NEVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "never", function() { return never; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/noop */ "./node_modules/rxjs/_esm5/internal/util/noop.js");
/** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */


var NEVER = /*@__PURE__*/ new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](_util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"]);
function never() {
    return NEVER;
}
//# sourceMappingURL=never.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/of.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/of.js ***!
  \***********************************************************/
/*! exports provided: of */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "of", function() { return of; });
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/scheduleArray */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js");
/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */



function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__["isScheduler"])(scheduler)) {
        args.pop();
        return Object(_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(args, scheduler);
    }
    else {
        return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(args);
    }
}
//# sourceMappingURL=of.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js ***!
  \**************************************************************************/
/*! exports provided: onErrorResumeNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return onErrorResumeNext; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _Observable,_from,_util_isArray,_empty PURE_IMPORTS_END */




function onErrorResumeNext() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 0) {
        return _empty__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
    }
    var first = sources[0], remainder = sources.slice(1);
    if (sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(first)) {
        return onErrorResumeNext.apply(void 0, first);
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var subNext = function () { return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber)); };
        return Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(first).subscribe({
            next: function (value) { subscriber.next(value); },
            error: subNext,
            complete: subNext,
        });
    });
}
//# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/pairs.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/pairs.js ***!
  \**************************************************************/
/*! exports provided: pairs, dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return pairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function pairs(obj, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length && !subscriber.closed; i++) {
                var key = keys[i];
                if (obj.hasOwnProperty(key)) {
                    subscriber.next([key, obj[key]]);
                }
            }
            subscriber.complete();
        });
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var keys = Object.keys(obj);
            var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            subscription.add(scheduler.schedule(dispatch, 0, { keys: keys, index: 0, subscriber: subscriber, subscription: subscription, obj: obj }));
            return subscription;
        });
    }
}
function dispatch(state) {
    var keys = state.keys, index = state.index, subscriber = state.subscriber, subscription = state.subscription, obj = state.obj;
    if (!subscriber.closed) {
        if (index < keys.length) {
            var key = keys[index];
            subscriber.next([key, obj[key]]);
            subscription.add(this.schedule({ keys: keys, index: index + 1, subscriber: subscriber, subscription: subscription, obj: obj }));
        }
        else {
            subscriber.complete();
        }
    }
}
//# sourceMappingURL=pairs.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/partition.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/partition.js ***!
  \******************************************************************/
/*! exports provided: partition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony import */ var _util_not__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/not */ "./node_modules/rxjs/_esm5/internal/util/not.js");
/* harmony import */ var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeTo */ "./node_modules/rxjs/_esm5/internal/util/subscribeTo.js");
/* harmony import */ var _operators_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/filter */ "./node_modules/rxjs/_esm5/internal/operators/filter.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _util_not,_util_subscribeTo,_operators_filter,_Observable PURE_IMPORTS_END */




function partition(source, predicate, thisArg) {
    return [
        Object(_operators_filter__WEBPACK_IMPORTED_MODULE_2__["filter"])(predicate, thisArg)(new _Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(source))),
        Object(_operators_filter__WEBPACK_IMPORTED_MODULE_2__["filter"])(Object(_util_not__WEBPACK_IMPORTED_MODULE_0__["not"])(predicate, thisArg))(new _Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(source)))
    ];
}
//# sourceMappingURL=partition.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/race.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/race.js ***!
  \*************************************************************/
/*! exports provided: race, RaceOperator, RaceSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "race", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceOperator", function() { return RaceOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceSubscriber", function() { return RaceSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */





function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    if (observables.length === 1) {
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_2__["fromArray"])(observables, undefined).lift(new RaceOperator());
}
var RaceOperator = /*@__PURE__*/ (function () {
    function RaceOperator() {
    }
    RaceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
}());

var RaceSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RaceSubscriber, _super);
    function RaceSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasFirst = false;
        _this.observables = [];
        _this.subscriptions = [];
        return _this;
    }
    RaceSubscriber.prototype._next = function (observable) {
        this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (var i = 0; i < len && !this.hasFirst; i++) {
                var observable = observables[i];
                var subscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__["subscribeToResult"])(this, observable, observable, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                }
                this.add(subscription);
            }
            this.observables = null;
        }
    };
    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (var i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    var subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__["OuterSubscriber"]));

//# sourceMappingURL=race.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/range.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/range.js ***!
  \**************************************************************/
/*! exports provided: range, dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function range(start, count, scheduler) {
    if (start === void 0) {
        start = 0;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        if (count === undefined) {
            count = start;
            start = 0;
        }
        var index = 0;
        var current = start;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(current++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
        return undefined;
    });
}
function dispatch(state) {
    var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
    if (index >= count) {
        subscriber.complete();
        return;
    }
    subscriber.next(start);
    if (subscriber.closed) {
        return;
    }
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
}
//# sourceMappingURL=range.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/throwError.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/throwError.js ***!
  \*******************************************************************/
/*! exports provided: throwError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return throwError; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function throwError(error, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return subscriber.error(error); });
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber }); });
    }
}
function dispatch(_a) {
    var error = _a.error, subscriber = _a.subscriber;
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/timer.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/timer.js ***!
  \**************************************************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm5/internal/scheduler/async.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/_esm5/internal/util/isNumeric.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */




function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) {
        dueTime = 0;
    }
    var period = -1;
    if (Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(scheduler)) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var due = Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period: period, subscriber: subscriber
        });
    });
}
function dispatch(state) {
    var index = state.index, period = state.period, subscriber = state.subscriber;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/using.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/using.js ***!
  \**************************************************************/
/*! exports provided: using */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "using", function() { return using; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */



function using(resourceFactory, observableFactory) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var resource;
        try {
            resource = resourceFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var result;
        try {
            result = observableFactory(resource);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = result ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(result) : _empty__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        var subscription = source.subscribe(subscriber);
        return function () {
            subscription.unsubscribe();
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
//# sourceMappingURL=using.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/zip.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/zip.js ***!
  \************************************************************/
/*! exports provided: zip, ZipOperator, ZipSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipOperator", function() { return ZipOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipSubscriber", function() { return ZipSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/* harmony import */ var _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../internal/symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_OuterSubscriber,_util_subscribeToResult,_.._internal_symbol_iterator PURE_IMPORTS_END */







function zip() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = observables[observables.length - 1];
    if (typeof resultSelector === 'function') {
        observables.pop();
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(observables, undefined).lift(new ZipOperator(resultSelector));
}
var ZipOperator = /*@__PURE__*/ (function () {
    function ZipOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
    };
    return ZipOperator;
}());

var ZipSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ZipSubscriber, _super);
    function ZipSubscriber(destination, resultSelector, values) {
        if (values === void 0) {
            values = Object.create(null);
        }
        var _this = _super.call(this, destination) || this;
        _this.iterators = [];
        _this.active = 0;
        _this.resultSelector = (typeof resultSelector === 'function') ? resultSelector : null;
        _this.values = values;
        return _this;
    }
    ZipSubscriber.prototype._next = function (value) {
        var iterators = this.iterators;
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]] === 'function') {
            iterators.push(new StaticIterator(value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    };
    ZipSubscriber.prototype._complete = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        this.unsubscribe();
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                var destination = this.destination;
                destination.add(iterator.subscribe(iterator, i));
            }
            else {
                this.active--;
            }
        }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    ZipSubscriber.prototype.checkIterators = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            var result = iterator.next();
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.resultSelector) {
            this._tryresultSelector(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    };
    ZipSubscriber.prototype._tryresultSelector = function (args) {
        var result;
        try {
            result = this.resultSelector.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_3__["Subscriber"]));

var StaticIterator = /*@__PURE__*/ (function () {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
        return true;
    };
    StaticIterator.prototype.next = function () {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
        var nextResult = this.nextResult;
        return nextResult && nextResult.done;
    };
    return StaticIterator;
}());
var StaticArrayIterator = /*@__PURE__*/ (function () {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]] = function () {
        return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}());
var ZipBufferIterator = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        _this.observable = observable;
        _this.stillUnsubscribed = true;
        _this.buffer = [];
        _this.isComplete = false;
        return _this;
    }
    ZipBufferIterator.prototype[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]] = function () {
        return this;
    };
    ZipBufferIterator.prototype.next = function () {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    };
    ZipBufferIterator.prototype.hasValue = function () {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    };
    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function (value, index) {
        return Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_5__["subscribeToResult"])(this, this.observable, this, index);
    };
    return ZipBufferIterator;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_4__["OuterSubscriber"]));
//# sourceMappingURL=zip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/concatAll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/concatAll.js ***!
  \*****************************************************************/
/*! exports provided: concatAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatAll", function() { return concatAll; });
/* harmony import */ var _mergeAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeAll */ "./node_modules/rxjs/_esm5/internal/operators/mergeAll.js");
/** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */

function concatAll() {
    return Object(_mergeAll__WEBPACK_IMPORTED_MODULE_0__["mergeAll"])(1);
}
//# sourceMappingURL=concatAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/filter.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/filter.js ***!
  \**************************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
var FilterOperator = /*@__PURE__*/ (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
var FilterSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
    }
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
//# sourceMappingURL=filter.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/groupBy.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/groupBy.js ***!
  \***************************************************************/
/*! exports provided: groupBy, GroupedObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedObservable", function() { return GroupedObservable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */





function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return function (source) {
        return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
    };
}
var GroupByOperator = /*@__PURE__*/ (function () {
    function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    GroupByOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    };
    return GroupByOperator;
}());
var GroupBySubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.elementSelector = elementSelector;
        _this.durationSelector = durationSelector;
        _this.subjectSelector = subjectSelector;
        _this.groups = null;
        _this.attemptedToUnsubscribe = false;
        _this.count = 0;
        return _this;
    }
    GroupBySubscriber.prototype._next = function (value) {
        var key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function (value, key) {
        var groups = this.groups;
        if (!groups) {
            groups = this.groups = new Map();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            group = (this.subjectSelector ? this.subjectSelector() : new _Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]());
            groups.set(key, group);
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    };
    GroupBySubscriber.prototype._error = function (err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function () {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function (key) {
        this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                _super.prototype.unsubscribe.call(this);
            }
        }
    };
    return GroupBySubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
var GroupDurationSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
        var _this = _super.call(this, group) || this;
        _this.key = key;
        _this.group = group;
        _this.parent = parent;
        return _this;
    }
    GroupDurationSubscriber.prototype._next = function (value) {
        this.complete();
    };
    GroupDurationSubscriber.prototype._unsubscribe = function () {
        var _a = this, parent = _a.parent, key = _a.key;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    };
    return GroupDurationSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
var GroupedObservable = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.groupSubject = groupSubject;
        _this.refCountSubscription = refCountSubscription;
        return _this;
    }
    GroupedObservable.prototype._subscribe = function (subscriber) {
        var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable;
}(_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"]));

var InnerRefCountSubscription = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        parent.count++;
        return _this;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function () {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    };
    return InnerRefCountSubscription;
}(_Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"]));
//# sourceMappingURL=groupBy.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/map.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/map.js ***!
  \***********************************************************/
/*! exports provided: map, MapOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOperator", function() { return MapOperator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
var MapOperator = /*@__PURE__*/ (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());

var MapSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
//# sourceMappingURL=map.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/mergeAll.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/mergeAll.js ***!
  \****************************************************************/
/*! exports provided: mergeAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeAll", function() { return mergeAll; });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeMap */ "./node_modules/rxjs/_esm5/internal/operators/mergeMap.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/_esm5/internal/util/identity.js");
/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */


function mergeAll(concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"], concurrent);
}
//# sourceMappingURL=mergeAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/mergeMap.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/mergeMap.js ***!
  \****************************************************************/
/*! exports provided: mergeMap, MergeMapOperator, MergeMapSubscriber, flatMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMap", function() { return mergeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeMapOperator", function() { return MergeMapOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeMapSubscriber", function() { return MergeMapSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatMap", function() { return flatMap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/_esm5/internal/InnerSubscriber.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../observable/from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber,_map,_observable_from PURE_IMPORTS_END */






function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'function') {
        return function (source) { return source.pipe(mergeMap(function (a, i) { return Object(_observable_from__WEBPACK_IMPORTED_MODULE_5__["from"])(project(a, i)).pipe(Object(_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
}
var MergeMapOperator = /*@__PURE__*/ (function () {
    function MergeMapOperator(project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        this.project = project;
        this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
    };
    return MergeMapOperator;
}());

var MergeMapSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeMapSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapSubscriber.prototype._tryNext = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result, value, index);
    };
    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
        var innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_3__["InnerSubscriber"](this, value, index);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(this, ish, undefined, undefined, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            destination.add(innerSubscription);
        }
    };
    MergeMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    };
    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"]));

var flatMap = mergeMap;
//# sourceMappingURL=mergeMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/observeOn.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/observeOn.js ***!
  \*****************************************************************/
/*! exports provided: observeOn, ObserveOnOperator, ObserveOnSubscriber, ObserveOnMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observeOn", function() { return observeOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnOperator", function() { return ObserveOnOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnSubscriber", function() { return ObserveOnSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnMessage", function() { return ObserveOnMessage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Notification */ "./node_modules/rxjs/_esm5/internal/Notification.js");
/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */



function observeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
}
var ObserveOnOperator = /*@__PURE__*/ (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}());

var ObserveOnSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        var _this = _super.call(this, destination) || this;
        _this.scheduler = scheduler;
        _this.delay = delay;
        return _this;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        var destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_2__["Notification"].createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_2__["Notification"].createError(err));
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_2__["Notification"].createComplete());
        this.unsubscribe();
    };
    return ObserveOnSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));

var ObserveOnMessage = /*@__PURE__*/ (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());

//# sourceMappingURL=observeOn.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/refCount.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/refCount.js ***!
  \****************************************************************/
/*! exports provided: refCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refCount", function() { return refCount; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function refCount() {
    return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator(source));
    };
}
var RefCountOperator = /*@__PURE__*/ (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
//# sourceMappingURL=refCount.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js ***!
  \*********************************************************************/
/*! exports provided: scheduleArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleArray", function() { return scheduleArray; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function scheduleArray(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        var i = 0;
        sub.add(scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
                sub.add(this.schedule());
            }
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js ***!
  \************************************************************************/
/*! exports provided: scheduleIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleIterable", function() { return scheduleIterable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */



function scheduleIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        var iterator;
        sub.add(function () {
            if (iterator && typeof iterator.return === 'function') {
                iterator.return();
            }
        });
        sub.add(scheduler.schedule(function () {
            iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__["iterator"]]();
            sub.add(scheduler.schedule(function () {
                if (subscriber.closed) {
                    return;
                }
                var value;
                var done;
                try {
                    var result = iterator.next();
                    value = result.value;
                    done = result.done;
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleIterable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js ***!
  \**************************************************************************/
/*! exports provided: scheduleObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleObservable", function() { return scheduleObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */



function scheduleObservable(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        sub.add(scheduler.schedule(function () {
            var observable = input[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]]();
            sub.add(observable.subscribe({
                next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js ***!
  \***********************************************************************/
/*! exports provided: schedulePromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedulePromise", function() { return schedulePromise; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function schedulePromise(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        sub.add(scheduler.schedule(function () {
            return input.then(function (value) {
                sub.add(scheduler.schedule(function () {
                    subscriber.next(value);
                    sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                }));
            }, function (err) {
                sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
            });
        }));
        return sub;
    });
}
//# sourceMappingURL=schedulePromise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/scheduled.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/scheduled.js ***!
  \*****************************************************************/
/*! exports provided: scheduled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduled", function() { return scheduled; });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduleObservable */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js");
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedulePromise */ "./node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js");
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduleArray */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js");
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheduleIterable */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js");
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isInteropObservable */ "./node_modules/rxjs/_esm5/internal/util/isInteropObservable.js");
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isPromise */ "./node_modules/rxjs/_esm5/internal/util/isPromise.js");
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isArrayLike */ "./node_modules/rxjs/_esm5/internal/util/isArrayLike.js");
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/isIterable */ "./node_modules/rxjs/_esm5/internal/util/isIterable.js");
/** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */








function scheduled(input, scheduler) {
    if (input != null) {
        if (Object(_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_4__["isInteropObservable"])(input)) {
            return Object(_scheduleObservable__WEBPACK_IMPORTED_MODULE_0__["scheduleObservable"])(input, scheduler);
        }
        else if (Object(_util_isPromise__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(input)) {
            return Object(_schedulePromise__WEBPACK_IMPORTED_MODULE_1__["schedulePromise"])(input, scheduler);
        }
        else if (Object(_util_isArrayLike__WEBPACK_IMPORTED_MODULE_6__["isArrayLike"])(input)) {
            return Object(_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(input, scheduler);
        }
        else if (Object(_util_isIterable__WEBPACK_IMPORTED_MODULE_7__["isIterable"])(input) || typeof input === 'string') {
            return Object(_scheduleIterable__WEBPACK_IMPORTED_MODULE_3__["scheduleIterable"])(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
//# sourceMappingURL=scheduled.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/Action.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/Action.js ***!
  \**************************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var Action = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return this;
    };
    return Action;
}(_Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]));

//# sourceMappingURL=Action.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js ***!
  \****************************************************************************/
/*! exports provided: AnimationFrameAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFrameAction", function() { return AnimationFrameAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */


var AnimationFrameAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () { return scheduler.flush(null); }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]));

//# sourceMappingURL=AnimationFrameAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js ***!
  \*******************************************************************************/
/*! exports provided: AnimationFrameScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFrameScheduler", function() { return AnimationFrameScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var AnimationFrameScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]));

//# sourceMappingURL=AnimationFrameScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js ***!
  \******************************************************************/
/*! exports provided: AsapAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsapAction", function() { return AsapAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Immediate */ "./node_modules/rxjs/_esm5/internal/util/Immediate.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */



var AsapAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = _util_Immediate__WEBPACK_IMPORTED_MODULE_1__["Immediate"].setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            _util_Immediate__WEBPACK_IMPORTED_MODULE_1__["Immediate"].clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_2__["AsyncAction"]));

//# sourceMappingURL=AsapAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js ***!
  \*********************************************************************/
/*! exports provided: AsapScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsapScheduler", function() { return AsapScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var AsapScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]));

//# sourceMappingURL=AsapScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js ***!
  \*******************************************************************/
/*! exports provided: AsyncAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncAction", function() { return AsyncAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Action */ "./node_modules/rxjs/_esm5/internal/scheduler/Action.js");
/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */


var AsyncAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(_Action__WEBPACK_IMPORTED_MODULE_1__["Action"]));

//# sourceMappingURL=AsyncAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js ***!
  \**********************************************************************/
/*! exports provided: AsyncScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncScheduler", function() { return AsyncScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Scheduler */ "./node_modules/rxjs/_esm5/internal/Scheduler.js");
/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */


var AsyncScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = _Scheduler__WEBPACK_IMPORTED_MODULE_1__["Scheduler"].now;
        }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(_Scheduler__WEBPACK_IMPORTED_MODULE_1__["Scheduler"]));

//# sourceMappingURL=AsyncScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js ***!
  \*******************************************************************/
/*! exports provided: QueueAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueAction", function() { return QueueAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */


var QueueAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        return scheduler.flush(this);
    };
    return QueueAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]));

//# sourceMappingURL=QueueAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js ***!
  \**********************************************************************/
/*! exports provided: QueueScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueScheduler", function() { return QueueScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var QueueScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]));

//# sourceMappingURL=QueueScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js ***!
  \****************************************************************************/
/*! exports provided: VirtualTimeScheduler, VirtualAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function() { return VirtualTimeScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualAction", function() { return VirtualAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */



var VirtualTimeScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        if (SchedulerAction === void 0) {
            SchedulerAction = VirtualAction;
        }
        if (maxFrames === void 0) {
            maxFrames = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, SchedulerAction, function () { return _this.frame; }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
            actions.shift();
            this.frame = action.delay;
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_2__["AsyncScheduler"]));

var VirtualAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) {
            index = scheduler.index += 1;
        }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]));

//# sourceMappingURL=VirtualTimeScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js ***!
  \**********************************************************************/
/*! exports provided: animationFrameScheduler, animationFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationFrameScheduler", function() { return animationFrameScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationFrame", function() { return animationFrame; });
/* harmony import */ var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationFrameAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js");
/* harmony import */ var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationFrameScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js");
/** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */


var animationFrameScheduler = /*@__PURE__*/ new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__["AnimationFrameScheduler"](_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__["AnimationFrameAction"]);
var animationFrame = animationFrameScheduler;
//# sourceMappingURL=animationFrame.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/asap.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/asap.js ***!
  \************************************************************/
/*! exports provided: asapScheduler, asap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asapScheduler", function() { return asapScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asap", function() { return asap; });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js");
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js");
/** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */


var asapScheduler = /*@__PURE__*/ new _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__["AsapScheduler"](_AsapAction__WEBPACK_IMPORTED_MODULE_0__["AsapAction"]);
var asap = asapScheduler;
//# sourceMappingURL=asap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/async.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/async.js ***!
  \*************************************************************/
/*! exports provided: asyncScheduler, async */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncScheduler", function() { return asyncScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "async", function() { return async; });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */


var asyncScheduler = /*@__PURE__*/ new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"](_AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"]);
var async = asyncScheduler;
//# sourceMappingURL=async.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/queue.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/queue.js ***!
  \*************************************************************/
/*! exports provided: queueScheduler, queue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueScheduler", function() { return queueScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return queue; });
/* harmony import */ var _QueueAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueueAction */ "./node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js");
/* harmony import */ var _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueueScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js");
/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */


var queueScheduler = /*@__PURE__*/ new _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__["QueueScheduler"](_QueueAction__WEBPACK_IMPORTED_MODULE_0__["QueueAction"]);
var queue = queueScheduler;
//# sourceMappingURL=queue.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/symbol/iterator.js ***!
  \*************************************************************/
/*! exports provided: getSymbolIterator, iterator, $$iterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSymbolIterator", function() { return getSymbolIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$iterator", function() { return $$iterator; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = /*@__PURE__*/ getSymbolIterator();
var $$iterator = iterator;
//# sourceMappingURL=iterator.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/symbol/observable.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/symbol/observable.js ***!
  \***************************************************************/
/*! exports provided: observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = /*@__PURE__*/ (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js ***!
  \*****************************************************************/
/*! exports provided: rxSubscriber, $$rxSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rxSubscriber", function() { return rxSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$rxSubscriber", function() { return $$rxSubscriber; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = /*@__PURE__*/ (function () {
    return typeof Symbol === 'function'
        ? /*@__PURE__*/ Symbol('rxSubscriber')
        : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
})();
var $$rxSubscriber = rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js ***!
  \**************************************************************************/
/*! exports provided: ArgumentOutOfRangeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return ArgumentOutOfRangeError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var ArgumentOutOfRangeErrorImpl = /*@__PURE__*/ (function () {
    function ArgumentOutOfRangeErrorImpl() {
        Error.call(this);
        this.message = 'argument out of range';
        this.name = 'ArgumentOutOfRangeError';
        return this;
    }
    ArgumentOutOfRangeErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return ArgumentOutOfRangeErrorImpl;
})();
var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/EmptyError.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/EmptyError.js ***!
  \*************************************************************/
/*! exports provided: EmptyError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return EmptyError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var EmptyErrorImpl = /*@__PURE__*/ (function () {
    function EmptyErrorImpl() {
        Error.call(this);
        this.message = 'no elements in sequence';
        this.name = 'EmptyError';
        return this;
    }
    EmptyErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return EmptyErrorImpl;
})();
var EmptyError = EmptyErrorImpl;
//# sourceMappingURL=EmptyError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/Immediate.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/Immediate.js ***!
  \************************************************************/
/*! exports provided: Immediate, TestTools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immediate", function() { return Immediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestTools", function() { return TestTools; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var nextHandle = 1;
var RESOLVED = /*@__PURE__*/ (function () { return /*@__PURE__*/ Promise.resolve(); })();
var activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
var Immediate = {
    setImmediate: function (cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        RESOLVED.then(function () { return findAndClearHandle(handle) && cb(); });
        return handle;
    },
    clearImmediate: function (handle) {
        findAndClearHandle(handle);
    },
};
var TestTools = {
    pending: function () {
        return Object.keys(activeHandles).length;
    }
};
//# sourceMappingURL=Immediate.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js ***!
  \**************************************************************************/
/*! exports provided: ObjectUnsubscribedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return ObjectUnsubscribedError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var ObjectUnsubscribedErrorImpl = /*@__PURE__*/ (function () {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/TimeoutError.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/TimeoutError.js ***!
  \***************************************************************/
/*! exports provided: TimeoutError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return TimeoutError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var TimeoutErrorImpl = /*@__PURE__*/ (function () {
    function TimeoutErrorImpl() {
        Error.call(this);
        this.message = 'Timeout has occurred';
        this.name = 'TimeoutError';
        return this;
    }
    TimeoutErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return TimeoutErrorImpl;
})();
var TimeoutError = TimeoutErrorImpl;
//# sourceMappingURL=TimeoutError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js ***!
  \**********************************************************************/
/*! exports provided: UnsubscriptionError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return UnsubscriptionError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var UnsubscriptionErrorImpl = /*@__PURE__*/ (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
var UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/canReportError.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/canReportError.js ***!
  \*****************************************************************/
/*! exports provided: canReportError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canReportError", function() { return canReportError; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */

function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
//# sourceMappingURL=canReportError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/hostReportError.js ***!
  \******************************************************************/
/*! exports provided: hostReportError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hostReportError", function() { return hostReportError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
//# sourceMappingURL=hostReportError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/identity.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/identity.js ***!
  \***********************************************************/
/*! exports provided: identity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isArray.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isArray.js ***!
  \**********************************************************/
/*! exports provided: isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = /*@__PURE__*/ (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isArrayLike.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isArrayLike.js ***!
  \**************************************************************/
/*! exports provided: isArrayLike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isFunction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isFunction.js ***!
  \*************************************************************/
/*! exports provided: isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
    return typeof x === 'function';
}
//# sourceMappingURL=isFunction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isInteropObservable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isInteropObservable.js ***!
  \**********************************************************************/
/*! exports provided: isInteropObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteropObservable", function() { return isInteropObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

function isInteropObservable(input) {
    return input && typeof input[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]] === 'function';
}
//# sourceMappingURL=isInteropObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isIterable.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isIterable.js ***!
  \*************************************************************/
/*! exports provided: isIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

function isIterable(input) {
    return input && typeof input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]] === 'function';
}
//# sourceMappingURL=isIterable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isNumeric.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isNumeric.js ***!
  \************************************************************/
/*! exports provided: isNumeric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */

function isNumeric(val) {
    return !Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(val) && (val - parseFloat(val) + 1) >= 0;
}
//# sourceMappingURL=isNumeric.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isObject.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isObject.js ***!
  \***********************************************************/
/*! exports provided: isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
    return x !== null && typeof x === 'object';
}
//# sourceMappingURL=isObject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isObservable.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isObservable.js ***!
  \***************************************************************/
/*! exports provided: isObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function isObservable(obj) {
    return !!obj && (obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"] || (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'));
}
//# sourceMappingURL=isObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isPromise.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isPromise.js ***!
  \************************************************************/
/*! exports provided: isPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
//# sourceMappingURL=isPromise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isScheduler.js ***!
  \**************************************************************/
/*! exports provided: isScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScheduler", function() { return isScheduler; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
//# sourceMappingURL=isScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/noop.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/noop.js ***!
  \*******************************************************/
/*! exports provided: noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function noop() { }
//# sourceMappingURL=noop.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/not.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/not.js ***!
  \******************************************************/
/*! exports provided: not */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function not(pred, thisArg) {
    function notPred() {
        return !(notPred.pred.apply(notPred.thisArg, arguments));
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
}
//# sourceMappingURL=not.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/pipe.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/pipe.js ***!
  \*******************************************************/
/*! exports provided: pipe, pipeFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipeFromArray", function() { return pipeFromArray; });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./node_modules/rxjs/_esm5/internal/util/identity.js");
/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return _identity__WEBPACK_IMPORTED_MODULE_0__["identity"];
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeTo.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeTo.js ***!
  \**************************************************************/
/*! exports provided: subscribeTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeTo", function() { return subscribeTo; });
/* harmony import */ var _subscribeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribeToArray */ "./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js");
/* harmony import */ var _subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeToPromise */ "./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js");
/* harmony import */ var _subscribeToIterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribeToIterable */ "./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js");
/* harmony import */ var _subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribeToObservable */ "./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js");
/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isArrayLike */ "./node_modules/rxjs/_esm5/internal/util/isArrayLike.js");
/* harmony import */ var _isPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isPromise */ "./node_modules/rxjs/_esm5/internal/util/isPromise.js");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isObject */ "./node_modules/rxjs/_esm5/internal/util/isObject.js");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */









var subscribeTo = function (result) {
    if (!!result && typeof result[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__["observable"]] === 'function') {
        return Object(_subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__["subscribeToObservable"])(result);
    }
    else if (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_4__["isArrayLike"])(result)) {
        return Object(_subscribeToArray__WEBPACK_IMPORTED_MODULE_0__["subscribeToArray"])(result);
    }
    else if (Object(_isPromise__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(result)) {
        return Object(_subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__["subscribeToPromise"])(result);
    }
    else if (!!result && typeof result[_symbol_iterator__WEBPACK_IMPORTED_MODULE_7__["iterator"]] === 'function') {
        return Object(_subscribeToIterable__WEBPACK_IMPORTED_MODULE_2__["subscribeToIterable"])(result);
    }
    else {
        var value = Object(_isObject__WEBPACK_IMPORTED_MODULE_6__["isObject"])(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js ***!
  \*******************************************************************/
/*! exports provided: subscribeToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToArray", function() { return subscribeToArray; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = function (array) {
    return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    };
};
//# sourceMappingURL=subscribeToArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js ***!
  \**********************************************************************/
/*! exports provided: subscribeToIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToIterable", function() { return subscribeToIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

var subscribeToIterable = function (iterable) {
    return function (subscriber) {
        var iterator = iterable[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]]();
        do {
            var item = void 0;
            try {
                item = iterator.next();
            }
            catch (err) {
                subscriber.error(err);
                return subscriber;
            }
            if (item.done) {
                subscriber.complete();
                break;
            }
            subscriber.next(item.value);
            if (subscriber.closed) {
                break;
            }
        } while (true);
        if (typeof iterator.return === 'function') {
            subscriber.add(function () {
                if (iterator.return) {
                    iterator.return();
                }
            });
        }
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToIterable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js ***!
  \************************************************************************/
/*! exports provided: subscribeToObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToObservable", function() { return subscribeToObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

var subscribeToObservable = function (obj) {
    return function (subscriber) {
        var obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]]();
        if (typeof obs.subscribe !== 'function') {
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
        }
        else {
            return obs.subscribe(subscriber);
        }
    };
};
//# sourceMappingURL=subscribeToObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js ***!
  \*********************************************************************/
/*! exports provided: subscribeToPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToPromise", function() { return subscribeToPromise; });
/* harmony import */ var _hostReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostReportError */ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */

var subscribeToPromise = function (promise) {
    return function (subscriber) {
        promise.then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, _hostReportError__WEBPACK_IMPORTED_MODULE_0__["hostReportError"]);
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToPromise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js ***!
  \********************************************************************/
/*! exports provided: subscribeToResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToResult", function() { return subscribeToResult; });
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/_esm5/internal/InnerSubscriber.js");
/* harmony import */ var _subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeTo */ "./node_modules/rxjs/_esm5/internal/util/subscribeTo.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo,_Observable PURE_IMPORTS_END */



function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
    if (innerSubscriber === void 0) {
        innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__["InnerSubscriber"](outerSubscriber, outerValue, outerIndex);
    }
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
        return result.subscribe(innerSubscriber);
    }
    return Object(_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(result)(innerSubscriber);
}
//# sourceMappingURL=subscribeToResult.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/toSubscriber.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/toSubscriber.js ***!
  \***************************************************************/
/*! exports provided: toSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSubscriber", function() { return toSubscriber; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/_esm5/internal/Observer.js");
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */



function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
            return nextOrObserver;
        }
        if (nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]) {
            return nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](_Observer__WEBPACK_IMPORTED_MODULE_2__["empty"]);
    }
    return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](nextOrObserver, error, complete);
}
//# sourceMappingURL=toSubscriber.js.map


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/classes.tsx":
/*!*************************!*\
  !*** ./src/classes.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnlibInstance = exports.ConnlibDropInfoInit = exports.ConnlibConnection = exports.Connlib = exports.ConnlibMetaData = exports.ConnlibConnectionWrapper = exports.ConnlibAbstractStructuralType = exports.ConnlibDataInterface = exports.ConnlibLayerWrapper = exports.ConnlibLayer = exports.ConnlibLayerDataWrapper = exports.ConnlibConnectorDataWrapper = exports.ConnlibConnectorData = exports.ConnlibLayerData = exports.ConnlibLabel = exports.ConnlibMethod = exports.ConnlibParameter = exports.ConnlibAttribute = void 0;
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/**
 * the class enables to generate new guid's
 */
class Guid {
    static newGuid(instance) {
        let guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        this.globalGuidMap[guid] = instance;
        return guid;
    }
}
// the internal guid map
Guid.globalGuidMap = {};
class ConnlibAttribute {
}
exports.ConnlibAttribute = ConnlibAttribute;
class ConnlibParameter {
}
exports.ConnlibParameter = ConnlibParameter;
class ConnlibMethod {
}
exports.ConnlibMethod = ConnlibMethod;
class ConnlibLabel {
}
exports.ConnlibLabel = ConnlibLabel;
/**
 * the class represents a DOM element's connlib internal representation
 */
class ConnlibLayerData {
    constructor() {
        this.middle = null;
    }
    setPosition(left, top) {
        this.left = left;
        this.top = top;
        this.right = left + this.width;
        this.bottom = top + this.height;
        this.middle = null;
        this.layerPositionObservable.next(this);
    }
    setSize(width, height) {
        this.height = height;
        this.width = width;
        this.right = this.left + width;
        this.bottom = this.top + height;
        this.middle = null;
        this.layerSizeObservable.next(this);
    }
}
exports.ConnlibLayerData = ConnlibLayerData;
/**
 * internal wrapper for a point
 */
class ConnlibPoint {
}
/**
 * a basic connlib pathpoint used for connections
 */
class ConnlibPathPoint extends ConnlibPoint {
    constructor() {
        super(...arguments);
        this.isSettedUp = false;
        this.positionChangeObservable = new rxjs_1.Subject();
    }
    cascadingUpdate(event) {
        event.participants.push(this);
        if (event.diffX && event.diffY)
            throw ("corrupted update: change is only in one direction valid!");
        if (event.diffX) {
            this.left += event.diffX;
            this.positionChangeObservable.next(event);
        }
        else if (event.diffY) {
            this.top += event.diffY;
            this.positionChangeObservable.next(event);
        }
    }
    setUp(connlibInstance) {
        this.connlibInstance = connlibInstance;
        this.isSettedUp = true;
    }
}
/**
 * the class contains a connlib endpoint
 */
class ConnlibEndpoint extends ConnlibPathPoint {
    constructor() {
        super(...arguments);
        this.guid = Guid.newGuid();
        this.sourceSideChangeObservable = new rxjs_1.Subject();
    }
    /**
     * this method is analogue to a path point's position change, but it should not cascade the event back!
     * thus, this method is everytime the end of a position update cascade
     */
    cascadingUpdate(event) {
        if (event.participants.indexOf(this) > -1)
            return;
        event.participants.push(this);
        if (event.diffX && event.diffY)
            throw ("corrupted update: change is only in one direction valid!");
        if (event.diffX) {
            this.left += event.diffX;
        }
        else if (event.diffY) {
            this.top += event.diffY;
        }
        else {
            console.log(event);
        }
        let result = this.outOfSourceBound();
        if (!result.value) {
            this.validateInstancePosition();
            this.validate();
        }
        else {
            this.left = result.point.left;
            this.top = result.point.top;
            this.direction = result.direction;
            this.validateInstancePosition();
            this.validate();
            if (Connlib.dragFlag == this)
                Connlib.dragFlag = null;
            this.sourceSideChangeObservable.next(this);
        }
    }
    getInstancePosition() {
        return this.connlibInstance.rawPointToInstancePoint(this);
    }
    onMousedown() {
        Connlib.dragFlag = this;
    }
    outOfSourceBound() {
        switch (this.direction) {
            case ConnlibDirection.BOTTOM:
                if (this.source.left > this.left) {
                    return {
                        value: true,
                        point: {
                            left: this.source.left,
                            top: this.source.bottom - 5,
                        },
                        direction: ConnlibDirection.LEFT
                    };
                }
                else if (this.source.right < this.left) {
                    return {
                        value: true,
                        point: {
                            left: this.source.right,
                            top: this.source.bottom - 5
                        },
                        direction: ConnlibDirection.RIGHT
                    };
                }
                break;
            case ConnlibDirection.TOP:
                if (this.source.left > this.left) {
                    return {
                        value: true,
                        point: {
                            left: this.source.left,
                            top: this.source.top + 5,
                        },
                        direction: ConnlibDirection.LEFT
                    };
                }
                else if (this.source.right < this.left) {
                    return {
                        value: true,
                        point: {
                            left: this.source.right,
                            top: this.source.top + 5
                        },
                        direction: ConnlibDirection.RIGHT
                    };
                }
                break;
            case ConnlibDirection.LEFT:
                if (this.source.top > this.top) {
                    return {
                        value: true,
                        point: {
                            left: this.source.left + 5,
                            top: this.source.top,
                        },
                        direction: ConnlibDirection.TOP
                    };
                }
                else if (this.source.bottom < this.top) {
                    return {
                        value: true,
                        point: {
                            left: this.source.left + 5,
                            top: this.source.bottom,
                        },
                        direction: ConnlibDirection.BOTTOM
                    };
                }
                break;
            case ConnlibDirection.RIGHT:
                if (this.source.top > this.top) {
                    return {
                        value: true,
                        point: {
                            left: this.source.right - 5,
                            top: this.source.top,
                        },
                        direction: ConnlibDirection.TOP
                    };
                }
                else if (this.source.bottom < this.top) {
                    return {
                        value: true,
                        point: {
                            left: this.source.right - 5,
                            top: this.source.bottom,
                        },
                        direction: ConnlibDirection.BOTTOM
                    };
                }
                break;
        }
        return {
            value: false,
            point: null,
            direction: null
        };
    }
    setPosition(point) {
        this.left = point.left;
        this.top = point.top;
        this.validateInstancePosition();
    }
    setUp(connlibInstance) {
        this.connlibInstance = connlibInstance;
        this.type = new ConnlibOpenArrow();
        this.type.width = Connlib.endpointSize;
        this.type.height = Connlib.endpointHeightFormula(Connlib.endpointSize);
        if (this.top && this.left && connlibInstance)
            this.validateInstancePosition();
        this.isSettedUp = true;
    }
    updateLeft(left) {
        if (this.direction == ConnlibDirection.LEFT || this.direction == ConnlibDirection.RIGHT) {
            console.warn("this method should not be called: only for horizontal movement of TOP/BOTTOM endpoints");
            return;
        }
        let diff = left - this.left;
        this.left = left;
        let result = this.outOfSourceBound();
        if (!result.value) {
            this.validateInstancePosition();
            this.validate();
            let event = new ConnlibPositionChangeEvent();
            event.participants.push(this);
            event.movementOrientation = ConnlibOrientation.HORIZONTAL;
            event.diffX = diff;
            this.positionChangeObservable.next(event);
        }
        else {
            this.left = result.point.left;
            this.top = result.point.top;
            this.direction = result.direction;
            this.validateInstancePosition();
            this.validate();
            if (Connlib.dragFlag == this)
                Connlib.dragFlag = null;
            this.sourceSideChangeObservable.next(this);
        }
    }
    updateTop(top) {
        if (this.direction == ConnlibDirection.TOP || this.direction == ConnlibDirection.BOTTOM) {
            console.warn("this method should not be called: only for vertical movement of RIGHT/LEFT endpoints");
            return;
        }
        let diff = top - this.top;
        this.top = top;
        let result = this.outOfSourceBound();
        if (!result.value) {
            this.validateInstancePosition();
            this.validate();
            let event = new ConnlibPositionChangeEvent();
            event.participants.push(this);
            event.movementOrientation = ConnlibOrientation.VERTICAL;
            event.diffY = diff;
            this.positionChangeObservable.next(event);
        }
        else {
            this.left = result.point.left;
            this.top = result.point.top;
            this.direction = result.direction;
            this.validateInstancePosition();
            this.validate();
            if (Connlib.dragFlag == this)
                Connlib.dragFlag = null;
            this.sourceSideChangeObservable.next(this);
        }
    }
    validate() {
        this.componentRef.setState({
            left: this.left,
            top: this.top,
            direction: this.direction,
            type: this.type,
            mousedown: () => this.onMousedown()
        });
    }
    validateInstancePosition() {
        let p = this.getInstancePosition();
        this.instanceX = p.left;
        this.instanceY = p.top;
    }
}
class ConnlibConnectorData {
}
exports.ConnlibConnectorData = ConnlibConnectorData;
class ConnlibConnectorDataWrapper {
}
exports.ConnlibConnectorDataWrapper = ConnlibConnectorDataWrapper;
class ConnlibLayerDataWrapper {
}
exports.ConnlibLayerDataWrapper = ConnlibLayerDataWrapper;
class ConnlibLayer {
}
exports.ConnlibLayer = ConnlibLayer;
class ConnlibLayerWrapper {
}
exports.ConnlibLayerWrapper = ConnlibLayerWrapper;
class ConnlibDataInterface {
}
exports.ConnlibDataInterface = ConnlibDataInterface;
class ConnlibAbstractStructuralType {
}
exports.ConnlibAbstractStructuralType = ConnlibAbstractStructuralType;
class ConnlibConnectionWrapper {
}
exports.ConnlibConnectionWrapper = ConnlibConnectionWrapper;
class ConnlibMetaData {
}
exports.ConnlibMetaData = ConnlibMetaData;
/**
 * the static connlib interface
 */
class Connlib {
    static get connlibGridScale() {
        return this._connlibGridScale;
    }
    static set connlibGridScale(scale) {
        this._connlibGridScale = scale;
        this.scaleChangeObservable.next(scale);
    }
    static get zoom() {
        return this._zoom;
    }
    static set zoom(zoom) {
        this._zoom = zoom;
        this.zoomChangeObservable.next(zoom);
    }
    /**
     * the method applys the transform to all contents
     */
    static applyTransform() {
        this.rootInstance.container.style.transform = "translate(" + this.moveX + "px, " + this.moveY + "px)";
    }
    /**
     * the method calculates the intersection points between a layer and a linear function
     */
    static calculateBoundingIntersections(layer, fun) {
        let points = [];
        // top side
        let interTop = this.calcIntersectionBetweenTwoFuncs(fun, {
            m: 0,
            n: layer.top
        });
        if (!interTop.parallely && interTop.left >= layer.left && interTop.left <= layer.right) {
            points.push({
                left: interTop.left,
                top: interTop.top,
                source: layer,
                direction: ConnlibDirection.TOP,
                type: null
            });
        }
        // right side
        let interRight = {
            top: this.calculateFunctionForX(fun, layer.right),
            left: layer.right
        };
        if (interRight.top >= layer.top && interRight.top <= layer.bottom) {
            points.push({
                left: interRight.left,
                top: interRight.top,
                source: layer,
                direction: ConnlibDirection.RIGHT,
                type: null
            });
        }
        // top side
        let interBottom = this.calcIntersectionBetweenTwoFuncs(fun, {
            m: 0,
            n: layer.bottom
        });
        if (!interBottom.parallely && interBottom.left >= layer.left && interBottom.left <= layer.right) {
            points.push({
                left: interBottom.left,
                top: interBottom.top,
                source: layer,
                direction: ConnlibDirection.BOTTOM,
                type: null
            });
        }
        // left side
        let interLeft = {
            top: this.calculateFunctionForX(fun, layer.left),
            left: layer.left
        };
        if (interRight.top >= layer.top && interRight.top <= layer.bottom) {
            points.push({
                left: interLeft.left,
                top: interLeft.top,
                source: layer,
                direction: ConnlibDirection.LEFT,
                type: null
            });
        }
        return points;
    }
    /**
     * the method calculates a function between two points
     * make sure, that the left coordinates not equal!
     * @param point1
     * @param point2
     */
    static calcFunForTwoPoints(point1, point2) {
        /**
         * I    y = mx + n
         * II   point1.top = m * point1.left + n
         * III  point2.top = m * point2.left + n
         * IV   point1.top - m * point1.left = point2.top - m * point2.left
         * V    - m * point1.left + m * point2.left = point2.top - point1.top
         * VI   m * (-point1.left + point2.left) = point2.top - point1.top
         */
        if (point1.left == point2.left) {
            throw ("cannot calculate function: left coordinates are equal!");
        }
        let m = (point2.top - point1.top) / (point2.left - point1.left);
        return {
            "m": m,
            "n": point1.top - (m * point1.left)
        };
    }
    /**
     * the method calculates the intersection between two points
     * @param fun1
     * @param fun2
     */
    static calcIntersectionBetweenTwoFuncs(fun1, fun2) {
        /**
         * I    fun1.m * x + fun1.n = fun2.m * x + fun2.n
         * II   x * (fun1.m - fun2.m) = fun2.n - fun1.n
         */
        if (fun1.m == fun2.m) {
            if (fun1.n == fun2.n) {
                return {
                    "parallely": true,
                    "identical": true,
                    "left": null,
                    "top": null
                };
            }
            else {
                return {
                    "parallely": true,
                    "identical": false,
                    "left": null,
                    "top": null
                };
            }
        }
        let x = (fun2.n - fun1.n) / (fun1.m - fun2.m);
        return {
            "parallely": false,
            "identical": false,
            "left": x,
            "top": fun1.m * x + fun1.n
        };
    }
    /**
     * the method returns the function's value for a given x value
     */
    static calculateFunctionForX(fun, xValue) {
        return (fun.m * xValue) + fun.n;
    }
    /**
     * the method calculates the passed layer's middle point
     * @param layer
     */
    static calculateMiddle(layer) {
        return { "left": layer.left + (layer.width / 2), "top": layer.top + (layer.height / 2) };
    }
    /**
     * the method returns an array of path points
     * @param cells
     */
    static cellsArrayToPathPointArray(cells) {
        return cells.map(x => {
            let point = new ConnlibPathPoint();
            point.left = (x.c);
            point.top = (x.r);
            point.setUp(this.rootInstance);
            return point;
        });
    }
    /**
     * the method clears all connlib instances
     */
    static clear() {
        for (let instanceId in this.instances) {
            let instance = this.instances[instanceId];
            instance.remove();
        }
        this.instances = {};
        this.renderComponentsRoot.innerHTML = "";
    }
    /**
     * the method returns an endpoint's conn
     */
    static getEndpointConnectionPoint(endpoint) {
        let point = new ConnlibEndpoint();
        point.source = endpoint.source;
        point.direction = endpoint.direction;
        point.type = endpoint.type;
        point.left = endpoint.left;
        point.top = endpoint.top;
        point.setUp(this.rootInstance);
        let h = this.endpointHeightFormula(Connlib.endpointSize);
        switch (endpoint.direction) {
            case ConnlibDirection.TOP:
                point.top = endpoint.top - h;
                break;
            case ConnlibDirection.RIGHT:
                point.left = endpoint.left + h;
                break;
            case ConnlibDirection.BOTTOM:
                point.top = endpoint.top + h;
                break;
            case ConnlibDirection.LEFT:
                point.left = endpoint.left - h;
                break;
            default:
                console.warn("the point has no direction setted!", endpoint);
                break;
        }
        return point;
    }
    /**
     * the method returns a new connlib instance
     * warning: no container setted!
     */
    static getInstance() {
        let id = Guid.newGuid();
        let i = new ConnlibInstance();
        i.guid = id;
        this.instances[i.guid] = i;
        return i;
    }
    /**
     * the method returns a connlib instance for a given id
     * @param guid instance's identifier
     */
    static getInstanceByGuid(guid) {
        return this.instances[guid];
    }
    /**
     * the method enables user's to upload data
     * after upload, the connlib elements getting repainted
     */
    static importData(data) {
        let start = performance.now();
        this.clear();
        // @ts-ignore
        let type = ConnlibTypeMap[data.root[0]];
        if (!type)
            throw ("unknown type of the root element: " + data.root[0]);
        let rootElement = data.root[1];
        if (!rootElement)
            throw ("no root element within the input file!");
        let rootId = parseInt(rootElement.id);
        if (!Number.isInteger(rootId))
            throw ("the root element has no valid identifier!");
        let rootLayer = data.layer[rootId].data;
        let rootLayerLayer = rootLayer[rootId];
        if (!rootLayerLayer)
            throw ("the layer needs to be represent within itself");
        rootLayerLayer.right = rootLayerLayer.left + rootLayerLayer.width;
        rootLayerLayer.bottom = rootLayerLayer.top + rootLayerLayer.bottom;
        let rootInstance = this.getInstance();
        this.rootInstance = rootInstance;
        rootInstance.deepth = 0;
        rootInstance.setContainer(this.renderComponentsRoot, rootLayerLayer);
        rootLayerLayer.connlibInstance = rootInstance;
        // first render all childs (if neccessary)
        if (type.hasChildren) {
            for (let child of rootElement.children) {
                let childType = ConnlibTypeMap[child[0]];
                if (!childType) {
                    console.warn("unknown type of the child element: " + child[0]);
                    continue;
                }
                let currentLayer = rootLayer[child[1].id];
                currentLayer.guid = Guid.newGuid();
                currentLayer.layerPositionObservable = new rxjs_1.Subject();
                currentLayer.layerSizeObservable = new rxjs_1.Subject();
                currentLayer.connlibInstance = rootInstance;
                currentLayer.domElement = this.elementDOMElementMapLambda(rootInstance.container, child[1].id);
                currentLayer.bottom = currentLayer.top + currentLayer.height;
                currentLayer.right = currentLayer.left + currentLayer.width;
                rootInstance.addLayer(child[1].id, currentLayer);
                if (this.renderComponents)
                    this.renderComponent(childType, child[1].id, rootLayer[child[1].id], rootInstance.container);
                if (childType.hasChildren) {
                    let currentInstance = this.getInstance();
                    currentInstance.deepth = 1;
                    currentInstance.setContainer(this.renderComponentsRoot, rootLayerLayer);
                }
            }
        }
        // afterwards, update grid
        if (Connlib.useOverlapDetection)
            rootInstance.updateGrid();
        for (let connectorId in rootLayerLayer.connectors) {
            let connectorObjectArray = data.connections.connections.find(x => x[1].id === parseInt(connectorId));
            let connectorData = rootLayerLayer.connectors[connectorId];
            let connector = new ConnlibConnection();
            connector.connlibInstance = rootInstance;
            connector.source = rootInstance.getLayerByElementId(connectorObjectArray[1].sourceId);
            connector.target = rootInstance.getLayerByElementId(connectorObjectArray[1].targetId);
            connector.updatePathPoints(connectorData.pathPoints, null, null);
            rootInstance.registerConnector(connector);
        }
        rootInstance.render();
        let end = performance.now();
        console.log("finished in: " + (end - start).toFixed(0) + "ms");
    }
    /**
     * the method registers a type within the map
     * @param namespace
     * @param entry
     */
    static registerType(namespace, entry) {
        if (ConnlibTypeMap[namespace]) {
            console.warn("cannot register " + namespace + ": already registered!");
            return;
        }
        ConnlibTypeMap[namespace] = entry;
    }
    /**
     * the method is currently used for render debug components
     */
    static renderComponent(type, elementId, layer, container) {
        let element = document.createElement("div");
        element.classList.add(type.class, this.blockingClassName, "connlib-element");
        element.dataset["id"] = elementId.toString();
        element.style.top = layer.top + "px";
        element.style.left = layer.left + "px";
        element.style.width = layer.width + "px";
        element.style.height = layer.height + "px";
        container.appendChild(element);
    }
    /**
     * the method redraws all connlib instances
     */
    static repaintEverything() {
        for (let guid in this.instances)
            this.instances[guid].repaintEverything();
    }
    /**
     * the methofd rounds the passed point's coordinates in accordance to the current scale
     */
    static roundToScale(point) {
        let output = point;
        output.left = this.roundValueToScale(point.left);
        output.top = this.roundValueToScale(point.top);
        return output;
    }
    /**
     * the method rounds a value to scale
     */
    static roundValueToScale(value) {
        return Math.round(value / Connlib.connlibGridScale) * Connlib.connlibGridScale;
    }
    /**
     * this method sets the library up as a standalone, containg the following features:
     * - own window listeners
     * - own element rendering
     */
    static setUpStandalone() {
        this.standaloneSetup = true;
        this.renderComponents = true;
        this.setUpWindowListeners();
        this.standaloneSetupObservable.next();
    }
    /**
     * the method sets the window listeners up
     */
    static setUpWindowListeners() {
        if (this.standaloneSetup) {
            // arrow keys for pan
            window.addEventListener("keyup", (event) => {
                switch (event.keyCode) {
                    case 37:
                        if (this.invertMoveDirection)
                            this.moveX -= this.moveStep;
                        this.moveX += this.moveStep;
                        break;
                    case 38:
                        if (this.invertMoveDirection)
                            this.moveY -= this.moveStep;
                        this.moveY += this.moveStep;
                        break;
                    case 39:
                        if (this.invertMoveDirection)
                            this.moveX += this.moveStep;
                        this.moveX -= this.moveStep;
                        break;
                    case 40:
                        if (this.invertMoveDirection)
                            this.moveY += this.moveStep;
                        this.moveY -= this.moveStep;
                        break;
                }
                this.applyTransform();
            });
        }
        window.addEventListener("mousedown", (event) => {
            if (this.dragFlag == null) {
                event.preventDefault();
                event.stopPropagation();
                if (event.target.classList.contains("connlib-connectable")) {
                    let c = ConnlibExtensions.cumulativeOffset(event.target);
                    this.dragFlag = new ConnlibConnectionCreateWrapper((c.left + event.offsetX), (c.top + event.offsetY), event.target);
                }
                else if (this.standaloneSetup) {
                    this.dragFlag = new ConnlibPanWrapper(event.clientX, event.clientY, Connlib.moveX, Connlib.moveY);
                }
            }
        });
        window.addEventListener("mousemove", (event) => {
            if (!this.dragFlag)
                return;
            let c = ConnlibExtensions.cumulativeOffset(event.target);
            let corr = { left: event.offsetX + c.left, top: event.offsetY + c.top };
            switch (this.dragFlag.constructor) {
                case ConnlibLine:
                    var line = this.dragFlag;
                    switch (line.orientation) {
                        case ConnlibOrientation.HORIZONTAL:
                            line.updateTop(corr.top - line.connlibInstance.layer.top);
                            break;
                        case ConnlibOrientation.VERTICAL:
                            line.updateLeft(corr.left - line.connlibInstance.layer.left);
                            break;
                    }
                    break;
                case ConnlibEndpoint:
                    var endpoint = this.dragFlag;
                    switch (endpoint.direction) {
                        case ConnlibDirection.TOP:
                        case ConnlibDirection.BOTTOM:
                            endpoint.updateLeft(corr.left);
                            break;
                        case ConnlibDirection.RIGHT:
                        case ConnlibDirection.LEFT:
                            endpoint.updateTop(corr.top);
                            break;
                    }
                    break;
                case ConnlibPanWrapper:
                    let t = this.dragFlag.calculateTransform(event.clientX, event.clientY);
                    Connlib.moveX = t.x;
                    Connlib.moveY = t.y;
                    Connlib.applyTransform();
                    break;
                case ConnlibConnectionCreateWrapper:
                    this.dragFlag.updateTarget(c.left + event.offsetX, c.top + event.offsetY);
                    break;
            }
        });
        window.addEventListener("mouseup", () => {
            if (!this.dragFlag)
                return;
            switch (this.dragFlag.constructor) {
                case ConnlibConnectionCreateWrapper:
                    this.dragFlag.destroy();
                    break;
            }
            this.dragFlag = null;
        });
    }
    /**
     * the method starts a complete path calculation for the passed connector, containing:
     *
     */
    static startCompletePathCalculation(connector) {
        if (!connector.source) {
            console.warn("cannot calculate path: undefined source layer!");
            return;
        }
        if (!connector.source.connlibInstance) {
            console.warn("cannot calculate path: undefined source layer's connlib instance!");
            return;
        }
        if (!connector.target) {
            console.warn("cannot calculate path: undefined target layer!");
            return;
        }
        if (!connector.target.connlibInstance) {
            console.warn("cannot calculate path: undefined target layer's connlib instance!");
            return;
        }
        if (!connector.source.middle)
            connector.source.middle = this.calculateMiddle(connector.source);
        if (!connector.target.middle)
            connector.target.middle = this.calculateMiddle(connector.target);
        if (connector.source.middle.left == connector.target.middle.left) {
            if (connector.source.bottom > connector.target.top) {
                let e1 = new ConnlibEndpoint();
                e1.left = connector.source.middle.left;
                e1.top = connector.source.bottom;
                e1.direction = ConnlibDirection.BOTTOM;
                e1.source = connector.source;
                let e2 = new ConnlibEndpoint();
                e2.left = connector.target.middle.left;
                e2.top = connector.target.top;
                e2.direction = ConnlibDirection.TOP;
                e2.source = connector.target;
            }
            else if (connector.source.top < connector.target.bottom) {
                let e1 = new ConnlibEndpoint();
                e1.left = connector.source.middle.left;
                e1.top = connector.source.top;
                e1.direction = ConnlibDirection.TOP;
                e1.source = connector.source;
                let e2 = new ConnlibEndpoint();
                e2.left = connector.target.middle.left;
                e2.top = connector.target.bottom;
                e2.direction = ConnlibDirection.BOTTOM;
                e2.source = connector.target;
            }
            else {
                console.warn("cannot calculate path: overlaping source and target");
                return;
            }
        }
        else {
            let fun = this.calcFunForTwoPoints(connector.source.middle, connector.target.middle);
            let interSource = this.calculateBoundingIntersections(connector.source, fun);
            let interTarget = this.calculateBoundingIntersections(connector.target, fun);
            if (!this.rootInstance.rendered)
                this.rootInstance.render();
            let eSource = ConnlibExtensions.getClosestPointToRefPoint(interSource, connector.target.middle).p;
            var source = new ConnlibEndpoint();
            switch (eSource.direction) {
                case ConnlibDirection.TOP:
                case ConnlibDirection.BOTTOM:
                    source.left = Connlib.roundValueToScale(eSource.left);
                    source.top = eSource.top;
                    break;
                case ConnlibDirection.LEFT:
                case ConnlibDirection.RIGHT:
                    source.left = eSource.left;
                    source.top = Connlib.roundValueToScale(eSource.top);
                    break;
            }
            source.source = connector.source;
            source.direction = eSource.direction;
            source.setUp(this.rootInstance);
            this.rootInstance.registerEndpoint(source);
            let eTarget = ConnlibExtensions.getClosestPointToRefPoint(interTarget, connector.source.middle).p;
            var target = new ConnlibEndpoint();
            switch (eTarget.direction) {
                case ConnlibDirection.TOP:
                case ConnlibDirection.BOTTOM:
                    target.left = Connlib.roundValueToScale(eTarget.left);
                    target.top = eTarget.top;
                    break;
                case ConnlibDirection.LEFT:
                case ConnlibDirection.RIGHT:
                    target.left = eTarget.left;
                    target.top = Connlib.roundValueToScale(eTarget.top);
                    break;
            }
            target.source = connector.target;
            target.direction = eTarget.direction;
            target.setUp(this.rootInstance);
            this.rootInstance.registerEndpoint(target);
            let sourceCell = this.rootInstance.getGridCellForRawEndpoint(this.getEndpointConnectionPoint(source));
            let targetCell = this.rootInstance.getGridCellForRawEndpoint(this.getEndpointConnectionPoint(target));
            let pathPoints = ConnlibExtensions.IDAStar(this.rootInstance, sourceCell, targetCell, source.direction);
            connector.updatePathPoints(this.cellsArrayToPathPointArray(pathPoints), source, target);
        }
    }
}
exports.Connlib = Connlib;
// standalone + buttons
Connlib.testSetup = false;
// is the library setted up in the standalone mode?
Connlib.standaloneSetup = false;
/**
 * does the connlib library listen to window events, containing:
 * arrow keys (keycodes: 37 - 40)
 * pan
 *
 */
Connlib.windowListenersSettedUp = false;
Connlib.useOverlapDetection = true;
Connlib.blockingClassName = "connlib-connection-blocked";
Connlib.connectableClassName = "connlib-connectable";
Connlib.endpointStack = 15;
Connlib.pathCornerRadius = 3;
Connlib.connectorColor = "#464646";
Connlib.endpointIndent = 5;
Connlib.lineOverlayWidth = 5;
Connlib.endpointSize = 20; // the endpoint svg's width & the height is calculated with the formula below
Connlib.endpointHeightFormula = function (size) {
    return size * 1.5;
};
Connlib.endpointPadding = 5;
Connlib.elementDOMElementMapLambda = (conatiner, elementId) => {
    return conatiner.querySelector("[data-id='" + elementId + "']");
};
Connlib.overwriteConnectionOnValidation = true;
Connlib.moveStep = 50; // the step size of the window move events
Connlib.endpointCopyTolerance = 20; // how far should endpoints be distanced until the library creates a new endpoint?
Connlib.invertMoveDirection = false;
// should connlib render components at the dom?
Connlib.renderComponents = false;
// the root element
Connlib.renderComponentsRoot = document.getElementById("root");
// the dynamic root instance
Connlib.rootInstance = null;
Connlib.moveX = 0; // x-transform property
Connlib.moveY = 0; // y-transform property
/**
 * the presetted connlib grid scale for auto path calculation
 * be careful! a low scale can cause high browser load
 * both, memory and CPU are endangered
 * default: 10
 */
Connlib._connlibGridScale = 5;
// the instance's zoom level (default: 1)
Connlib._zoom = 1;
// the drag clipboard containg the current dragged element
Connlib.dragFlag = null;
// the current mouseover references the current hovered element
Connlib.currentMouseover = null;
/**
 * the attribute stores all connlib instances
 */
Connlib.instances = {};
// static observables afterwards
Connlib.scaleChangeObservable = new rxjs_1.Subject();
Connlib.standaloneSetupObservable = new rxjs_1.Subject();
Connlib.zoomChangeObservable = new rxjs_1.Subject();
/**
 * the class provides all the neccessary functionality needed for the library
 */
class ConnlibExtensions {
    /**
     * the method returns the element's cumultative offset
     * @param {*} element
     */
    static cumulativeOffset(element) {
        var top = 0, left = 0;
        var last = element;
        do {
            if (element.tagName == "svg") {
                top += parseFloat(element.style.top) || 0;
                left += parseFloat(element.style.left) || 0;
                last = element;
                element = element.parentElement;
            }
            else {
                top += element.offsetTop || 0;
                left += element.offsetLeft || 0;
                last = element;
                element = element.parentElement;
            }
        } while (element);
        return {
            top: top,
            left: left
        };
    }
    ;
    /**
     * the method calculates the euclydean distance between two points
     * @param {*} p1
     * @param {*} p2
     */
    static eukDist(p1, p2) {
        return Math.sqrt(Math.pow(p1.left - p2.left, 2) + Math.pow(p1.top - p2.top, 2));
    }
    /**
     * the method returns the closest point (eukDist) to a ref point
     */
    static getClosestPointToRefPoint(basis, ref) {
        return (basis.map(x => {
            return {
                dist: this.eukDist(x, ref),
                p: x
            };
        })).sort((a, b) => {
            if (a.dist > b.dist)
                return 1;
            else if (a.dist < b.dist)
                return -1;
            return 0;
        })[0];
    }
    /**
     * the algorithm calculates the given connections path and renders the lines immediately
     * @param {*} connection
     * @param {*} source
     * @param {*} target
     * @param {*} direction start direction
     */
    static IDAStar(connlibInstance, e1, e2, direction) {
        let source = e1;
        let target = e2;
        var costs = {};
        var stack = {};
        var threshold = this.manhattanDistance(source, target);
        stack[threshold.toString()] = {};
        stack[threshold.toString()][source.r] = source;
        var found = false;
        let max = 100000;
        var i = 0;
        var s = new ConnlibIDAStarTempData();
        s.c = source.c;
        s.r = source.r;
        s.w = source.w;
        s.d = direction;
        s.p = 1;
        s.a = [];
        while (!found) {
            if (i == max) {
                console.log(stack, connlibInstance, e1, e2, direction);
                throw ("maximum number of loops reached!");
            }
            let frontier = this.surroundingManhattanMinimumCells(connlibInstance, s, target);
            var next = null;
            for (let c of frontier) {
                if (!stack[c.d.toString()])
                    stack[c.d.toString()] = {};
                if (!stack[c.d.toString()][c.o.r.toString()]) {
                    stack[c.d.toString()][c.o.r.toString()] = c.o;
                }
                else
                    continue;
                if (c.d < threshold) {
                    threshold = c.d;
                }
                if (c.o.r == target.r && c.o.c == target.c) {
                    found = true;
                    stack[c.d.toString()][c.o.r.toString()].seq = i + 1;
                    this.updateCostsAndGetAnchestors(costs, s);
                    let path = this.updateCostsAndGetAnchestors(costs, target);
                    let breakPoints = [];
                    for (let pI in path) {
                        if (path[pI].c == source.c && path[pI].r == source.r) {
                            breakPoints.push(source);
                        }
                        else if (parseInt(pI) == 0) {
                            breakPoints.push(path[(parseInt(pI)).toString()]);
                        }
                        else {
                            if (path[(parseInt(pI) - 1).toString()].d != path[pI].d)
                                breakPoints.push(path[(parseInt(pI) - 1).toString()]);
                        }
                    }
                    breakPoints.push(target);
                    return breakPoints;
                }
                if (c.d == threshold && c.o.d == direction) {
                    if (s.r == c.o.r && s.c == c.o.c) {
                        console.log(frontier);
                        throw ("endless loop!");
                    }
                    next = c.o;
                }
            }
            if (found)
                continue;
            var i2 = 0;
            while (next == null) {
                if (i2 > max) {
                    console.log(threshold, connlibInstance, e1, e2, direction, s);
                    throw ("infinity loop");
                }
                for (let i in stack[threshold.toString()]) {
                    if (stack[threshold.toString()][i].p != 1) {
                        next = stack[threshold.toString()][i];
                        break;
                    }
                }
                if (next == null) {
                    threshold++;
                }
                i2++;
            }
            next.a = this.updateCostsAndGetAnchestors(costs, s);
            s = next;
            if (!s) {
                console.log(stack);
                throw ("error: cannot find next node!");
            }
            s.p = 1;
            s.seq = i;
            i++;
        }
    }
    /**
     * the method returns whether the given two lines (in sequence) are clockwise
     * attention! line1.target must be line2.source
     */
    static isClockwise(line1, line2) {
        if (line1._target.left != line2._source.left || line1._target.top != line2._source.top) {
            console.warn("cannot calculate clockwise characeristics: target line 1 != source line 2");
            return null;
        }
        let sum = ((line1._target.left - line1._source.left) * (line1._target.top + line1._target.top)) + ((line2._target.left - line2._source.left) * (line2._target.top + line2._source.top)) + ((line1._source.left - line2._target.left) * (line1._source.top + line2._target.top));
        if (sum < 0)
            return true;
        return false;
    }
    /**
     * the method returns the manhattan distance between the two points
     * @param {*} p1 first point
     * @param {*} p2 second point
     */
    static manhattanDistance(cell1, cell2) {
        return Math.abs(cell1.r - cell2.r) + Math.abs(cell1.c - cell2.c);
    }
    /**
     * the method returns the element's offset rectangle
     * @param {*} element
     */
    static offsetRect(element) {
        return {
            top: element.offsetTop,
            left: element.offsetLeft,
            height: element.offsetHeight,
            width: element.offsetWidth,
            right: element.offsetLeft + element.offsetWidth,
            bottom: element.offsetTop + element.offsetHeight
        };
    }
    /**
     * the method returns a grid cells surrounding cells with the lowest manhatten distance to the target
     * @param {*} source centered cell
     * @param {*} target connection's target for manhattan distance
     */
    static surroundingManhattanMinimumCells(connlibInstance, source, target) {
        let s = this.surroundingCellsNoDiag(connlibInstance, source);
        return s.map(x => {
            return { "d": this.manhattanDistance(x, target), "o": x };
        });
    }
    /**
     * the method returns all grid cells that sourrounds the centered cell
     * the result contains a direction
     * @param {*} cell center
     */
    static surroundingCellsNoDiag(connlibInstance, cell) {
        var o = [];
        let grid = connlibInstance.internalGrid.cells;
        var c;
        if (grid[cell.r - Connlib.connlibGridScale] && grid[cell.r - Connlib.connlibGridScale][cell.c] && grid[cell.r - Connlib.connlibGridScale][cell.c].w == 1) {
            c = grid[cell.r - Connlib.connlibGridScale][cell.c];
            o.push({ "c": c.c, "r": c.r, "d": ConnlibDirection.TOP, "w": c.w });
        }
        if (grid[cell.r] && grid[cell.r][cell.c + Connlib.connlibGridScale] && grid[cell.r][cell.c + Connlib.connlibGridScale].w == 1) {
            c = grid[cell.r][cell.c + Connlib.connlibGridScale];
            o.push({ "c": c.c, "r": c.r, "d": ConnlibDirection.RIGHT, "w": c.w });
        }
        if (grid[cell.r + Connlib.connlibGridScale] && grid[cell.r + Connlib.connlibGridScale][cell.c] && grid[cell.r + Connlib.connlibGridScale][cell.c].w == 1) {
            c = grid[cell.r + Connlib.connlibGridScale][cell.c];
            o.push({ "c": c.c, "r": c.r, "d": ConnlibDirection.BOTTOM, "w": c.w });
        }
        if (grid[cell.r] && grid[cell.r][cell.c - Connlib.connlibGridScale] && grid[cell.r][cell.c - Connlib.connlibGridScale].w == 1) {
            c = grid[cell.r][cell.c - Connlib.connlibGridScale];
            o.push({ "c": c.c, "r": c.r, "d": ConnlibDirection.LEFT, "w": c.w });
        }
        return o;
    }
    /**
     * the method calculates the costs for the anchestors
     * @param {*} costs
     * @param {*} currentNode
     */
    static updateCostsAndGetAnchestors(costs, currentNode) {
        var cost = Infinity;
        var a = null;
        if (costs[(currentNode.r - Connlib.connlibGridScale).toString()] && costs[(currentNode.r - Connlib.connlibGridScale).toString()][currentNode.c.toString()]) {
            let oD = costs[(currentNode.r - Connlib.connlibGridScale).toString()][currentNode.c.toString()].d;
            if (oD == currentNode.d) {
                if (costs[(currentNode.r - Connlib.connlibGridScale).toString()][currentNode.c.toString()].cost < cost) {
                    cost = costs[(currentNode.r - Connlib.connlibGridScale).toString()][currentNode.c.toString()].cost;
                    a = [...costs[(currentNode.r - Connlib.connlibGridScale).toString()][currentNode.c.toString()].a, { r: currentNode.r - Connlib.connlibGridScale, c: currentNode.c, d: oD }];
                }
            }
            else {
                if ((costs[(currentNode.r - Connlib.connlibGridScale).toString()][currentNode.c.toString()].cost + 1) < cost) {
                    cost = costs[(currentNode.r - Connlib.connlibGridScale).toString()][currentNode.c.toString()].cost + 1;
                    a = [...costs[(currentNode.r - Connlib.connlibGridScale).toString()][currentNode.c.toString()].a, { r: currentNode.r - Connlib.connlibGridScale, c: currentNode.c, d: oD }];
                }
            }
        }
        if (costs[currentNode.r.toString()] && costs[currentNode.r.toString()][(currentNode.c + Connlib.connlibGridScale).toString()]) {
            let oD = costs[currentNode.r.toString()][(currentNode.c + Connlib.connlibGridScale).toString()].d;
            if (oD == currentNode.d) {
                if (costs[currentNode.r.toString()][(currentNode.c + Connlib.connlibGridScale).toString()].cost < cost) {
                    cost = costs[currentNode.r.toString()][(currentNode.c + Connlib.connlibGridScale).toString()].cost;
                    a = [...costs[currentNode.r.toString()][(currentNode.c + Connlib.connlibGridScale).toString()].a, { r: currentNode.r, c: currentNode.c + Connlib.connlibGridScale, d: oD }];
                }
            }
            else {
                if ((costs[currentNode.r.toString()][(currentNode.c + Connlib.connlibGridScale).toString()].cost + 1) < cost) {
                    cost = costs[currentNode.r.toString()][(currentNode.c + Connlib.connlibGridScale).toString()].cost;
                    a = [...costs[currentNode.r.toString()][(currentNode.c + Connlib.connlibGridScale).toString()].a, { r: currentNode.r, c: currentNode.c + Connlib.connlibGridScale, d: oD }];
                }
            }
        }
        if (costs[(currentNode.r + Connlib.connlibGridScale).toString()] && costs[(currentNode.r + Connlib.connlibGridScale).toString()][currentNode.c.toString()]) {
            let oD = costs[(currentNode.r + Connlib.connlibGridScale).toString()][currentNode.c.toString()].d;
            if (oD == currentNode.d) {
                if (costs[(currentNode.r + Connlib.connlibGridScale).toString()][currentNode.c.toString()].cost < cost) {
                    cost = costs[(currentNode.r + Connlib.connlibGridScale).toString()][currentNode.c.toString()].cost;
                    a = [...costs[(currentNode.r + Connlib.connlibGridScale).toString()][currentNode.c.toString()].a, { r: currentNode.r + Connlib.connlibGridScale, c: currentNode.c, d: oD }];
                }
            }
            else {
                if ((costs[(currentNode.r + Connlib.connlibGridScale).toString()][currentNode.c.toString()].cost + 1) < cost) {
                    cost = costs[(currentNode.r + Connlib.connlibGridScale).toString()][currentNode.c.toString()].cost;
                    a = [...costs[(currentNode.r + Connlib.connlibGridScale).toString()][currentNode.c.toString()].a, { r: currentNode.r + Connlib.connlibGridScale, c: currentNode.c, d: oD }];
                }
            }
        }
        if (costs[currentNode.r.toString()] && costs[currentNode.r.toString()][(currentNode.c - Connlib.connlibGridScale).toString()]) {
            let oD = costs[currentNode.r.toString()][(currentNode.c - Connlib.connlibGridScale).toString()].d;
            if (oD == currentNode.d) {
                if (costs[currentNode.r.toString()][(currentNode.c - Connlib.connlibGridScale).toString()].cost < cost) {
                    cost = costs[currentNode.r.toString()][(currentNode.c - Connlib.connlibGridScale).toString()].cost;
                    a = [...costs[currentNode.r.toString()][(currentNode.c - Connlib.connlibGridScale).toString()].a, { r: currentNode.r, c: currentNode.c - Connlib.connlibGridScale, d: oD }];
                }
            }
            else {
                if ((costs[currentNode.r.toString()][(currentNode.c - Connlib.connlibGridScale).toString()].cost + 1) < cost) {
                    cost = costs[currentNode.r.toString()][(currentNode.c - Connlib.connlibGridScale).toString()].cost;
                    a = costs[currentNode.r.toString()][(currentNode.c - Connlib.connlibGridScale).toString()].a;
                    a = [...costs[currentNode.r.toString()][(currentNode.c - Connlib.connlibGridScale).toString()].a, { r: currentNode.r, c: currentNode.c - Connlib.connlibGridScale, d: oD }];
                }
            }
        }
        if (cost == Infinity)
            cost = 0;
        if (a == null)
            a = [];
        else
            a;
        if (!costs[currentNode.r.toString()])
            costs[currentNode.r.toString()] = {};
        costs[currentNode.r.toString()][currentNode.c.toString()] = { cost: cost, a: a, d: currentNode.d };
        return a;
    }
}
/**
 * the internal connlib instance's grid
 */
class ConnlibGrid {
    constructor(width, height) {
        this.cells = {};
        this.width = width;
        this.height = height;
        for (var r = 0; r < height; r += Connlib.connlibGridScale) {
            this.cells[r] = {};
            for (var c = 0; c < width; c += Connlib.connlibGridScale) {
                this.cells[r][c] = { "r": r, "c": c, "w": 1 };
            }
        }
    }
}
/**
 * a grid cell
 */
class ConnlibGridCell {
}
/**
 * a internal grid cell storing additionally a cells direction relative to the previous cell
 */
class ConnlibAlgorithmGridCell extends ConnlibGridCell {
}
/**
 * the class contains the temporary data of the IDA star algorithm
 */
class ConnlibIDAStarTempData {
}
/**
 * a connlib line represents a linear path segment defined by a source and a target
 */
class ConnlibLine {
    constructor() {
        this.guid = Guid.newGuid();
        this.zeroLengthObservable = new rxjs_1.Subject();
    }
    get sL() {
        return this._source.left;
    }
    get sT() {
        return this._source.top;
    }
    get tL() {
        return this._target.left;
    }
    get tT() {
        return this._target.top;
    }
    /**
     * the method destroys the line and removes it from all its referenced lists
     */
    destroy() {
        if (this.connection) {
            if (!this.connection.removeLine(this))
                throw ("cannot remove the line from the referenced connection");
            else
                this.connection = null;
        }
        else {
            throw ("cannot destory the line: no connection referenced!");
        }
        if (this.connlibInstance) {
            if (!this.connlibInstance.removeLine(this))
                throw ("cannot remove the line from the referenced connlib instance");
            else
                this.connection = null;
        }
        else {
            throw ("cannot destory the line: no connlib instance referenced!");
        }
        if (this.soureSubscription)
            this.soureSubscription.unsubscribe();
        if (this.targetSubscription)
            this.targetSubscription.unsubscribe();
    }
    /**
     * the method returns the line's JSX representation
     */
    JSXComponent(className) {
        return (React.createElement("line", { x1: this.sL, y1: this.sT, x2: this.tL, y2: this.tT, className: className, onMouseDown: () => this.onMouseDown() }));
    }
    /**
     * the method is triggered if a user is clicking on the particular line
     */
    onMouseDown() {
        Connlib.dragFlag = this;
    }
    /**
     * the method sets the line's source and target (+orientation +direction)
     * @param source
     * @param target
     */
    setSourceAndTarget(source, target) {
        this._setSource(source);
        this._setTarget(target);
        this.length = ConnlibExtensions.eukDist(this._source, this._target);
        if (this._source.left == this._target.left) {
            this.orientation = ConnlibOrientation.VERTICAL;
            if (this.sT > this.tT)
                this.direction = ConnlibDirection.TOP;
            else
                this.direction = ConnlibDirection.BOTTOM;
        }
        else if (this._source.top == this._target.top) {
            this.orientation = ConnlibOrientation.HORIZONTAL;
            if (this.sL > this.tL)
                this.direction = ConnlibDirection.LEFT;
            else
                this.direction = ConnlibDirection.RIGHT;
        }
        else {
            this.orientation = ConnlibOrientation.LOPSIDED;
            this.direction = null;
            console.warn("this line seems to be lopsided ...");
        }
        ;
    }
    _setSource(point) {
        if (!point.isSettedUp)
            throw ("point is not setted up!");
        if (this.soureSubscription) {
            this.soureSubscription.unsubscribe();
            this._source = null;
        }
        this._source = point;
        this.soureSubscription = this._source.positionChangeObservable.subscribe((event) => {
            if (event.participants.indexOf(this) > -1)
                return;
            event.participants.push(this);
            if (this.orientation != event.movementOrientation) {
                this._target.cascadingUpdate(event);
            }
            this.length = ConnlibExtensions.eukDist(this._source, this._target);
            if (this.length < 3)
                this.zeroLengthObservable.next(this);
        });
    }
    _setTarget(point) {
        if (!point.isSettedUp)
            throw ("point is not setted up!");
        if (this.targetSubscription) {
            this.targetSubscription.unsubscribe();
            this._target = null;
        }
        this._target = point;
        this.targetSubscription = this._target.positionChangeObservable.subscribe((event) => {
            if (event.participants.indexOf(this) > -1)
                return;
            event.participants.push(this);
            if (this.orientation != event.movementOrientation) {
                this._source.cascadingUpdate(event);
            }
            this.length = ConnlibExtensions.eukDist(this._source, this._target);
            if (this.length < 1)
                this.zeroLengthObservable.next(this);
        });
    }
    updateLeft(left) {
        let event = new ConnlibPositionChangeEvent();
        event.participants.push(this);
        event.movementOrientation = ConnlibOrientation.HORIZONTAL;
        event.diffX = left - this.sL;
        this._source.cascadingUpdate(event);
        event.diffX = left - this.tL;
        this._target.cascadingUpdate(event);
        this.connection.validate();
    }
    updateTop(top) {
        let event = new ConnlibPositionChangeEvent();
        event.participants.push(this);
        event.movementOrientation = ConnlibOrientation.VERTICAL;
        event.diffY = top - this.sT;
        this._source.cascadingUpdate(event);
        event.diffY = top - this.tT;
        this._target.cascadingUpdate(event);
        this.connection.validate();
    }
}
/**
 * the class contains a connlib position change event
 */
class ConnlibPositionChangeEvent {
    constructor() {
        this.guid = Guid.newGuid();
        this.participants = [];
    }
}
/**
 * an element's orientation
 */
const ConnlibOrientation = {
    "HORIZONTAL": 0,
    "VERTICAL": 1,
    "LOPSIDED": 2
};
/**
 * a connlib connection
 */
class ConnlibConnection {
    constructor() {
        this.guid = Guid.newGuid();
        this._pathPoints = [];
        this._lines = {};
        this.rendered = false;
    }
    getEndpoints() {
        return this._pathPoints.filter(x => x.source != null);
    }
    lineHasZeroLength(line) {
        let lines = Object.keys(this._lines).map(key => this._lines[key]);
        if (lines.length < 2)
            throw ("not implemented now ...");
        var source;
        let prev;
        let next;
        if (line._source == this.sourcePoint)
            source = this.sourcePoint;
        else {
            prev = lines.find(x => x._target == line._source);
            source = prev._source;
            this.removePathPoint(prev._target);
        }
        var target;
        if (line._target == this.targetPoint)
            target = this.targetPoint;
        else {
            next = lines.find(x => x._source == line._target);
            target = next._target;
            this.removePathPoint(next._source);
        }
        let event = new ConnlibPositionChangeEvent();
        event.participants.push(line);
        event.participants.push(target);
        event.movementOrientation = line.orientation;
        switch (event.movementOrientation) {
            case ConnlibOrientation.HORIZONTAL:
                event.diffX = target.left - source.left;
                break;
            case ConnlibOrientation.VERTICAL:
                event.diffY = target.top - source.top;
                break;
        }
        source.cascadingUpdate(event);
        let l = this.setUpNewLine(source, target);
        if (Connlib.dragFlag && (Connlib.dragFlag == line) || (Connlib.dragFlag == prev) || (Connlib.dragFlag == next))
            Connlib.dragFlag = l;
        line.destroy();
        if (prev)
            prev.destroy();
        if (next)
            next.destroy();
        this.validate();
    }
    /**
     * this method is only used within lines (a line is destroyed and ensures that the "snapped" pathpoint is not longer existent)
     * @param point
     */
    removePathPoint(point) {
        let i = this._pathPoints.indexOf(point);
        if (i > -1)
            this._pathPoints.splice(i, 1);
        else {
            console.warn("this point is not part of the connector");
        }
    }
    removeLine(line) {
        if (this._lines[line.guid]) {
            delete this._lines[line.guid];
            return true;
        }
        return false;
    }
    setUpNewLine(source, target) {
        let l = new ConnlibLine();
        l.connection = this;
        l.connlibInstance = this.connlibInstance;
        l.setSourceAndTarget(source, target);
        this._lines[l.guid] = l;
        this.connlibInstance.registerLine(l);
        l.zeroLengthObservable.subscribe((line) => this.lineHasZeroLength(line));
        return l;
    }
    updatePathPoints(points, realSource, realTarget) {
        if (points.length < 2) {
            console.warn("path is invalid: no path points found - started path auto calculation");
            Connlib.startCompletePathCalculation(this);
        }
        else {
            while (Object.keys(this._lines).length > 0) {
                this._lines[Object.keys(this._lines)[0]].destroy();
            }
            this._pathPoints = points;
            this.realSource = realSource;
            this.realTarget = realTarget;
            for (var i = 1; i < points.length; i++) {
                if (i == 1)
                    this.sourcePoint = points[i - 1];
                if (i == (points.length - 1))
                    this.targetPoint = points[i];
                this.setUpNewLine(points[i - 1], points[i]);
            }
            if (this.realSourceSubscription)
                this.realSourceSubscription.unsubscribe();
            if (this.sourceSideChangeSubscription)
                this.sourceSideChangeSubscription.unsubscribe();
            if (this.sourcePointSubscription)
                this.sourcePointSubscription.unsubscribe();
            this.realSourceSubscription = realSource.positionChangeObservable.subscribe((event) => {
                this.sourcePoint.cascadingUpdate(event);
                this.validate();
            });
            this.sourceSideChangeSubscription = realSource.sourceSideChangeObservable.subscribe((endpoint) => {
                let tempPoint = this.connlibInstance.rawPointToInstancePoint(Connlib.getEndpointConnectionPoint(endpoint));
                let connPoint = new ConnlibPathPoint();
                connPoint.left = tempPoint.left;
                connPoint.top = tempPoint.top;
                connPoint.setUp(this.connlibInstance);
                let helpPoint = new ConnlibPathPoint();
                switch (endpoint.direction) {
                    case ConnlibDirection.LEFT:
                    case ConnlibDirection.RIGHT:
                        helpPoint.left = connPoint.left;
                        helpPoint.top = this.sourcePoint.top;
                        break;
                    case ConnlibDirection.TOP:
                    case ConnlibDirection.BOTTOM:
                        helpPoint.top = connPoint.top;
                        helpPoint.left = this.sourcePoint.left;
                        break;
                }
                this.targetPoint = connPoint;
                helpPoint.setUp(this.connlibInstance);
                this.updatePathPoints([connPoint, helpPoint, ...this._pathPoints], this.realSource, this.realTarget);
                this.validate();
            });
            this.sourcePointSubscription = this.sourcePoint.positionChangeObservable.subscribe((event) => {
                if ((event.movementOrientation == ConnlibOrientation.HORIZONTAL && (this.realSource.direction == ConnlibDirection.TOP || this.realSource.direction == ConnlibDirection.BOTTOM)) ||
                    (event.movementOrientation == ConnlibOrientation.VERTICAL && (this.realSource.direction == ConnlibDirection.LEFT || this.realSource.direction == ConnlibDirection.RIGHT))) {
                    // end of cascade starting at the target
                    this.realSource.cascadingUpdate(event);
                    this.validate();
                }
                else {
                    console.log("event reached endpoint, but missing handler for combination: ", event, this.realSource);
                }
            });
            if (this.realTargetSubscription)
                this.realTargetSubscription.unsubscribe();
            if (this.targetSideChangeSubscription)
                this.targetSideChangeSubscription.unsubscribe();
            if (this.targetPointSubscription)
                this.targetPointSubscription.unsubscribe();
            this.realTargetSubscription = realTarget.positionChangeObservable.subscribe((event) => {
                this.targetPoint.cascadingUpdate(event);
                this.validate();
            });
            this.targetSideChangeSubscription = realTarget.sourceSideChangeObservable.subscribe((endpoint) => {
                let tempPoint = this.connlibInstance.rawPointToInstancePoint(Connlib.getEndpointConnectionPoint(endpoint));
                let connPoint = new ConnlibPathPoint();
                connPoint.left = tempPoint.left;
                connPoint.top = tempPoint.top;
                connPoint.setUp(this.connlibInstance);
                let helpPoint = new ConnlibPathPoint();
                switch (endpoint.direction) {
                    case ConnlibDirection.LEFT:
                    case ConnlibDirection.RIGHT:
                        helpPoint.left = connPoint.left;
                        helpPoint.top = this.targetPoint.top;
                        break;
                    case ConnlibDirection.TOP:
                    case ConnlibDirection.BOTTOM:
                        helpPoint.top = connPoint.top;
                        helpPoint.left = this.targetPoint.left;
                        break;
                }
                this.targetPoint = connPoint;
                helpPoint.setUp(this.connlibInstance);
                this.updatePathPoints([...this._pathPoints, helpPoint, connPoint], this.realSource, this.realTarget);
                this.validate();
            });
            this.targetPointSubscription = this.targetPoint.positionChangeObservable.subscribe((event) => {
                if ((event.movementOrientation == ConnlibOrientation.HORIZONTAL && (this.realTarget.direction == ConnlibDirection.TOP || this.realTarget.direction == ConnlibDirection.BOTTOM)) ||
                    (event.movementOrientation == ConnlibOrientation.VERTICAL && (this.realTarget.direction == ConnlibDirection.LEFT || this.realTarget.direction == ConnlibDirection.RIGHT))) {
                    // end of cascade starting at the target
                    this.realTarget.cascadingUpdate(event);
                    this.validate();
                }
                else {
                    console.log("event reached endpoint, but missing handler for combination: ", event, this.realTarget);
                }
            });
        }
    }
    validate() {
        this.componentRef.setState({
            lines: Object.keys(this._lines).map(key => this._lines[key]),
            realSource: this.realSource,
            realTarget: this.realTarget,
            sourcePoint: this.sourcePoint,
            targetPoint: this.targetPoint
        });
    }
}
exports.ConnlibConnection = ConnlibConnection;
class ConnlibDropInfoInit {
}
exports.ConnlibDropInfoInit = ConnlibDropInfoInit;
/**
 * a connlib instance
 */
class ConnlibInstance {
    constructor() {
        // is the current instance rendered?
        this.rendered = false;
        // are the instance's endpoints rendered?
        this.endpointsRendered = false;
        // the instance's custom zoom level
        this.zoom = 1;
        // the instance's global unique identifier
        this.guid = null;
        // the attribute stores the instance's layer information
        this.layer = null;
        // the connections 
        this._connections = {};
        // the lines
        this._lines = {};
        // the endpoints
        this._endPoints = {};
        // the layers represented within the 
        this._layers = {};
        this.elementIdLayerMap = {};
        // the instance's internal grid
        this._internalGrid = null;
        // the instance's OPTIONAL deepth for debugging
        this._deepth = 0;
        this._zIndex = 0;
        this._blockingCellsRendered = false;
        this._renderCellsWalkable = true;
        this._renderCellsNotWalkable = true;
        // instance's observables
        this.deepthChangeObservable = new rxjs_1.Subject();
        this.gridChangeObservable = new rxjs_1.Subject();
        this.renderedObservable = new rxjs_1.Subject();
    }
    get internalGrid() {
        return this._internalGrid;
    }
    set internalGrid(grid) {
        this._internalGrid = grid;
        this.gridChangeObservable.next(this);
    }
    get deepth() {
        return this._deepth;
    }
    set deepth(deepth) {
        this._deepth = deepth;
        this.deepthChangeObservable.next(this);
    }
    get zIndex() {
        return this._zIndex;
    }
    set zIndex(zIndex) {
        this._zIndex = zIndex;
        this.render();
        this.deepthChangeObservable.next(this);
    }
    addEndpoint(target, options) {
    }
    /**
     * the method adds an element's representation to the current instance
     * if the method returns false, the element was already represented within the current instance
     * @param elementId
     * @param layer
     */
    addLayer(elementId, layer) {
        if (!this._layers[layer.guid]) {
            this._layers[layer.guid] = layer;
            this.elementIdLayerMap[elementId.toFixed(0)] = layer.guid;
            layer.layerPositionObservable.subscribe((layer) => console.log("position change!", layer));
            layer.layerSizeObservable.subscribe((layer) => console.log("size change!", layer));
            return true;
        }
        return false;
    }
    bind(event, handler) {
    }
    /**
     * the method calculates the rect position and renders the cell
     */
    cellRect(cell, color, classList) {
        return this.centeredRect({
            left: cell.c,
            top: cell.r
        }, Connlib.connlibGridScale, color, classList);
    }
    /**
     * the method renders a rectangle at the given position (in center) with the given color
     * @param {*} point
     * @param {*} color
     */
    centeredRect(point, size, color, classList) {
        let p = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        p.setAttribute("x", (point.left - (size / 2)) + "px");
        p.setAttribute("y", (point.top - (size / 2)) + "px");
        p.setAttribute("width", (size) + "px");
        p.setAttribute("height", (size) + "px");
        p.setAttribute("fill", color);
        p.classList.add("drawed-rect", ...classList);
        this.componentRef.ref.current.appendChild(p);
        return p;
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    connect(data) {
        var source = null;
        for (let index in this._layers) {
            if (this._layers[index].domElement == data.source) {
                source = this._layers[index];
                break;
            }
        }
        var target = null;
        for (let index in this._layers) {
            if (this._layers[index].domElement == data.target) {
                target = this._layers[index];
                break;
            }
        }
        if (!source) {
            console.log(this);
            throw ("cannot create connection: the source element has no layer registered within the instance!");
        }
        if (!target) {
            console.log(this);
            throw ("cannot create connection: the target element has no layer registered within the instance!");
        }
        let c = new ConnlibConnection();
        c.connlibInstance = this;
        this._connections[c.guid] = c;
        c.source = source;
        c.target = target;
        return c;
    }
    /**
     * the method returns wether the element with the passed identifier is represented within the current instance
     * @param elementId
     */
    containsElement(elementId) {
        if (this._layers[elementId])
            return true;
        return false;
    }
    deleteConnection(connection) {
    }
    deleteEndpoint(element) {
    }
    deleteEveryConnection() {
    }
    deleteEveryEndpoint() {
    }
    /**
     * the method transforms a instance point (position on instance) to a raw point (position on screen)
     */
    instancePointToRawPoint(point) {
        return {
            left: point.left + this.layer.left,
            top: point.top + this.layer.top
        };
    }
    isSource(element) {
        return false;
    }
    isSourceEnabled(element) {
        return false;
    }
    isTarget(element) {
        return false;
    }
    isTargetEnabled(element) {
        return false;
    }
    /**
     * the method returns the internal grid cell for the given endpoint
     */
    getGridCellForRawEndpoint(endpoint) {
        let p = Connlib.roundToScale(this.rawPointToInstancePoint(endpoint));
        return this._internalGrid.cells[p.top][p.left];
    }
    /**
     * the method returns an element's layer by identifier
     * @param elementId
     */
    getLayerByElementId(elementId) {
        return this._layers[this.elementIdLayerMap[elementId]];
    }
    makeSource(element, options) {
    }
    makeTarget(element, options) {
    }
    /**
     * the method transforms the raw point (position on screen) to a instance point (position on instance)
     */
    rawPointToInstancePoint(point) {
        return {
            left: point.left - this.layer.left,
            top: point.top - this.layer.top
        };
    }
    registerConnector(connector) {
        this._connections[connector.guid] = connector;
    }
    registerEndpoint(point) {
        this._endPoints[point.guid] = point;
    }
    registerLine(line) {
        this._lines[line.guid] = line;
    }
    /**
     * the method removes a line from the current instance
     * @param connlibLine
     */
    removeLine(line) {
        if (this._lines[line.guid]) {
            delete this._lines[line.guid];
            return true;
        }
        return false;
    }
    /**
     * the method renders a rectangle at the given position with the given color
     * @param {*} point
     * @param {*} color
     */
    rect(point, size, color, classList) {
        let p = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        p.setAttribute("x", point.left + "px");
        p.setAttribute("y", point.top + "px");
        p.setAttribute("width", (size - 1) + "px");
        p.setAttribute("height", (size - 1) + "px");
        p.setAttribute("fill", color);
        p.classList.add("drawed-rect", ...classList);
        this.componentRef.ref.current.appendChild(p);
        return p;
    }
    /**
     * the method removes the current instance from the dom
     */
    remove() {
        ReactDOM.unmountComponentAtNode(this.container);
        this.componentRef = null;
        this.rendered = false;
        this.renderedObservable.next(this);
    }
    /**
     * the method renders the current instance
     */
    render() {
        let connectorArray = Object.keys(this._connections).map(key => this._connections[key]);
        let endpointArray = Object.keys(this._endPoints).map(key => this._endPoints[key]);
        this.componentRef.setState({
            guid: this.guid,
            layer: this.layer,
            deepth: this._deepth,
            endpoints: endpointArray,
            connectors: connectorArray,
            zIndex: this.zIndex
        });
        for (let endPoint of endpointArray)
            endPoint.validate();
        for (let connector of connectorArray)
            connector.validate();
        this.rendered = true;
        this.renderedObservable.next(this);
    }
    /**
     * only for debugging
     * renders all grid points
     */
    renderGridPoints() {
        var counter = 0;
        for (let row in this._internalGrid.cells) {
            for (let column in this._internalGrid.cells[row]) {
                let element = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                element.cy.baseVal.value = parseInt(row);
                element.cx.baseVal.value = parseInt(column);
                element.r.baseVal.value = 1;
                element.style.fill = "red";
                this.componentRef.ref.current.appendChild(element);
                counter++;
            }
        }
        console.log("rendered " + counter + " points");
    }
    repaintEverything() {
    }
    reset() {
    }
    /**
     * the method is triggered when an element's position is changed
     * all connections relatied to the passed element should be recalculated
     */
    revalidate(element) {
        // redraw all assigned connections
    }
    /**
     *
     * @param element
     * @param layer
     */
    setContainer(element, layer) {
        console.log(element, layer);
        this.container = element;
        this.componentRef = ReactDOM.render(React.createElement(ConnlibInstanceComponent), element);
        if (layer) {
            this.layer = layer;
        }
        else {
            this.layer = new ConnlibLayerData();
            this.layer.left = 0;
            this.layer.top = 0;
            this.layer.width = element.clientWidth;
            this.layer.height = element.clientHeight;
        }
        // never call update grid within this method!!
    }
    setSourceEnabled(element) {
    }
    setTargetEnabled(element) {
    }
    /**
     * the method sets the instance's zoom level
     * @param zoom
     */
    setZoom(zoom) {
        this.zoom = zoom;
    }
    /**
     * the method renders the blocked cells of the grid
     */
    toggleBlockedCells() {
        if (this._blockingCellsRendered) {
            this._blockingCellsRendered = false;
            this.componentRef.clear();
            // rerender connectors
            let elements = document.getElementsByClassName(Connlib.blockingClassName);
            for (let element of elements)
                element.style.display = "block";
        }
        else {
            this._blockingCellsRendered = true;
            let elements = document.getElementsByClassName(Connlib.blockingClassName);
            for (let element of elements)
                element.style.display = "none";
            for (let rI in this._internalGrid.cells) {
                for (let cI in this._internalGrid.cells[rI]) {
                    if (this._renderCellsWalkable && this._internalGrid.cells[rI][cI].w == 1) {
                        this.rect({
                            top: parseInt(rI),
                            left: parseInt(cI)
                        }, Connlib.connlibGridScale, "green", ["blocking-cell"]);
                    }
                    else if (this._renderCellsNotWalkable && this._internalGrid.cells[rI][cI].w == 0) {
                        this.rect({
                            top: parseInt(rI),
                            left: parseInt(cI)
                        }, Connlib.connlibGridScale, "orange", ["blocking-cell"]);
                    }
                }
            }
        }
    }
    unmakeEverySource() {
    }
    unmakeEveryTarget() {
    }
    unmakeSource(element) {
    }
    unmakeTarget(element) {
    }
    /**
     * the method recalculates the instance's internal grid
     */
    updateGrid() {
        if (!Connlib.useOverlapDetection) {
            console.warn("The overlap detection is turned off. Thus, you do not need this method.");
            return;
        }
        this.internalGrid = new ConnlibGrid(this.layer.width, this.layer.height);
        let layers = Object.keys(this._layers).map(key => this._layers[key]);
        for (let layer of layers) {
            let l = Connlib.roundValueToScale(layer.left - this.layer.left);
            let r = Connlib.roundValueToScale(layer.right - this.layer.left);
            let t = Connlib.roundValueToScale(layer.top - this.layer.top);
            let b = Connlib.roundValueToScale(layer.bottom - this.layer.top);
            console.log(layer, this.layer, l, r, t, b);
            for (var row = t; row <= b; row += Connlib.connlibGridScale) {
                if (!this._internalGrid.cells[row])
                    console.log("row undefined in grid: " + row, this._internalGrid);
                for (var col = l; col <= r; col += Connlib.connlibGridScale) {
                    if (!this._internalGrid.cells[row][col])
                        console.warn("column " + col + " is undefined in grid row " + row);
                    this._internalGrid.cells[row][col].w = 0;
                }
            }
        }
    }
}
exports.ConnlibInstance = ConnlibInstance;
/**
 * the react component of the endpoint
 */
class ConnlibEndpointComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.ref = React.createRef();
    }
    /**
     * the method enables user's to (hard) clear the svg
     */
    clear() {
        while (this.ref.current.lastChild) {
            this.ref.current.removeChild(this.ref.current.lastChild);
        }
    }
    /**
     * the method is called on component rendering
     */
    render() {
        if (this.state) {
            let type = this.state.type;
            var top;
            var height;
            var left;
            var width;
            var portLeft;
            var portTop;
            let portSize = Connlib.endpointSize - (2 * (Connlib.endpointPadding));
            var arrowPointer = new ConnlibPoint();
            var arrowFooter1 = new ConnlibPoint();
            var arrowFooter2 = new ConnlibPoint();
            var routeEnd = new ConnlibPoint();
            switch (this.state.direction) {
                case ConnlibDirection.TOP:
                    left = (this.state.left - (type.width / 2));
                    width = type.width;
                    top = this.state.top - type.height;
                    height = type.height + Connlib.endpointIndent;
                    portLeft = Connlib.endpointPadding;
                    portTop = type.height - portSize;
                    arrowPointer.left = width / 2;
                    if (type.portType) {
                        arrowPointer.top = portTop - 1;
                    }
                    else {
                        arrowPointer.top = type.height;
                    }
                    if (type.arrowType) {
                        routeEnd.left = arrowPointer.left;
                        routeEnd.top = arrowPointer.top - (type.arrowType.intend * 2);
                        arrowFooter1.left = arrowPointer.left + (type.arrowType.width / 2);
                        arrowFooter1.top = arrowPointer.top - (type.arrowType.intend);
                        arrowFooter2.left = arrowPointer.left - (type.arrowType.width / 2);
                        arrowFooter2.top = arrowPointer.top - (type.arrowType.intend);
                    }
                    break;
                case ConnlibDirection.RIGHT:
                    left = this.state.left - Connlib.endpointIndent;
                    width = type.height + Connlib.endpointIndent;
                    top = (this.state.top - (type.width / 2));
                    height = type.width;
                    portLeft = Connlib.endpointIndent;
                    portTop = Connlib.endpointIndent;
                    arrowPointer.top = portTop + (portSize / 2);
                    if (type.portType) {
                        arrowPointer.left = Connlib.endpointIndent + portSize;
                    }
                    else {
                        arrowPointer.left = Connlib.endpointIndent;
                    }
                    if (type.arrowType) {
                        arrowFooter2.left = arrowPointer.left + type.arrowType.intend;
                        arrowFooter2.top = arrowPointer.top - (type.arrowType.width / 2);
                        routeEnd.left = arrowPointer.left + (type.arrowType.intend * 2);
                        routeEnd.top = arrowPointer.top;
                        arrowFooter1.left = arrowPointer.left + type.arrowType.intend;
                        arrowFooter1.top = arrowPointer.top + (type.arrowType.width / 2);
                    }
                    break;
                case ConnlibDirection.BOTTOM:
                    left = (this.state.left - (type.width / 2));
                    width = type.width;
                    top = this.state.top - Connlib.endpointIndent;
                    height = type.height + Connlib.endpointIndent;
                    portLeft = Connlib.endpointPadding;
                    portTop = Connlib.endpointIndent;
                    arrowPointer.left = width / 2;
                    if (type.portType) {
                        arrowPointer.top = portTop + portSize + 1;
                    }
                    else {
                        arrowPointer.top = Connlib.endpointIndent;
                    }
                    if (type.arrowType) {
                        arrowFooter2.left = arrowPointer.left + (type.arrowType.width / 2);
                        arrowFooter2.top = arrowPointer.top + (type.arrowType.intend);
                        routeEnd.left = arrowPointer.left;
                        routeEnd.top = arrowPointer.top + (type.arrowType.intend * 2);
                        arrowFooter1.left = arrowPointer.left - (type.arrowType.width / 2);
                        arrowFooter1.top = arrowPointer.top + (type.arrowType.intend);
                    }
                    break;
                case ConnlibDirection.LEFT:
                    left = this.state.left - type.height;
                    width = type.height + Connlib.endpointIndent;
                    top = (this.state.top - (type.width / 2));
                    height = type.width;
                    portLeft = type.height - portSize;
                    portTop = Connlib.endpointPadding;
                    arrowPointer.top = portTop + (portSize / 2);
                    if (type.portType) {
                        arrowPointer.left = type.height - portSize;
                    }
                    else {
                        arrowPointer.left = type.height;
                    }
                    if (type.arrowType) {
                        arrowFooter1.left = arrowPointer.left - type.arrowType.intend;
                        arrowFooter1.top = arrowPointer.top - (type.arrowType.width / 2);
                        arrowFooter2.left = arrowPointer.left - type.arrowType.intend;
                        arrowFooter2.top = arrowPointer.top + (type.arrowType.width / 2);
                        routeEnd.left = arrowPointer.left - (type.arrowType.intend * 2);
                        routeEnd.top = arrowPointer.top;
                    }
                    break;
            }
            let style = {
                position: "absolute",
                top: top,
                height: height,
                left: left,
                width: width
            };
            var inner = [];
            if (type.portType) {
                inner.push(React.createElement("rect", { x: portLeft, y: portTop, height: portSize, width: portSize, strokeWidth: type.portType.portBorderWidth, stroke: type.portType.portBorderColor, fill: type.portType.portColor, className: "connlib-port" }));
            }
            if (type.arrowType) {
                var d = "M" + arrowFooter1.left + "," + arrowFooter1.top + " L" + arrowPointer.left + "," + arrowPointer.top + " L" + arrowFooter2.left + "," + arrowFooter2.top;
                if (type.arrowType.isRoute) {
                    d += " L" + routeEnd.left + "," + routeEnd.top;
                }
                else if (type.arrowType.isClosedArrow) {
                    d += " L" + arrowFooter1.left + "," + arrowFooter1.top;
                }
                inner.push(React.createElement("path", { d: d, fill: type.arrowType.fillColor, strokeWidth: type.arrowType.borderWidth, stroke: type.arrowType.borderColor }));
            }
            return (React.createElement("svg", { className: "connlib-endpoint", style: style, onMouseDown: this.state.mousedown }, inner));
        }
        return null;
    }
}
/**
 * a connlib instance's react component for DOM interaction
 */
class ConnlibInstanceComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.ref = React.createRef();
    }
    /**
     * the method enables user's to (hard) clear the svg
     */
    clear() {
        while (this.ref.current.lastChild) {
            this.ref.current.removeChild(this.ref.current.lastChild);
        }
    }
    /**
     * the method is called on component rendering
     */
    render() {
        if (this.state) {
            let style = {
                height: this.state.layer.height,
                width: this.state.layer.width,
                left: this.state.layer.left,
                top: this.state.layer.top,
                zIndex: this.state.layer.zIndex
            };
            let connectors = [];
            let endpoints = [];
            for (let c of this.state.connectors) {
                connectors.push(React.createElement(ConnlibConnectionComponent, {
                    key: c.guid,
                    ref: ref => c.componentRef = ref
                }));
            }
            for (let e of this.state.endpoints) {
                endpoints.push(React.createElement(ConnlibEndpointComponent, {
                    key: e.guid,
                    ref: ref => e.componentRef = ref
                }));
            }
            return (React.createElement("div", null,
                endpoints,
                React.createElement("svg", { className: "connlib-instance", "data-deepth": this.state.deepth, style: style, ref: this.ref }, connectors)));
        }
        return null;
    }
}
class ConnlibConnectionComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.ref = React.createRef();
    }
    /**
     * the method enables user's to (hard) clear the svg
     */
    clear() {
        while (this.ref.current.lastChild) {
            this.ref.current.removeChild(this.ref.current.lastChild);
        }
    }
    /**
     * the method creates the path string if no radius is setted
     * @param start
     * @param lines
     */
    pathWithoutR(start, lines) {
        let max = lines.length;
        var i = 0;
        var d = start;
        for (let line of this.state.lines) {
            if (i == 0) {
                if (max > 2) {
                    d += " L " + line.sL + " " + line.sT + " ARC " + " L " + line.tL + " " + line.tT;
                }
                else {
                    d += " L " + line.sL + " " + line.sT + " L " + line.tL + " " + line.tT;
                }
            }
            else if (i == (max - 1)) {
                d += " L " + line.tL + " " + line.tT;
            }
            else {
                d += " L " + line.tL + " " + line.tT;
            }
            i++;
        }
        return d;
    }
    /**
     * the method is called on component rendering
     */
    render() {
        if (this.state && Array.isArray(this.state.lines)) {
            let dragOverlays = [];
            let overlayClass = "connlib-line-overlay";
            let realSource = this.state.realSource.getInstancePosition();
            let realTarget = this.state.realTarget.getInstancePosition();
            let sourcePoint = this.state.sourcePoint;
            let targetPoint = this.state.targetPoint;
            switch (this.state.realSource.direction) {
                case ConnlibDirection.TOP:
                case ConnlibDirection.BOTTOM:
                    if (realSource.left != sourcePoint.left)
                        console.warn("source endpoint is lopsided! (left) " + realSource.left + ", " + sourcePoint.left);
                    break;
                case ConnlibDirection.LEFT:
                case ConnlibDirection.RIGHT:
                    if (realSource.top != sourcePoint.top)
                        console.warn("source endpoint is lopsided! (top) " + realSource.top + ", " + sourcePoint.top);
                    break;
            }
            switch (this.state.realTarget.direction) {
                case ConnlibDirection.TOP:
                case ConnlibDirection.BOTTOM:
                    if (realTarget.left != targetPoint.left)
                        console.warn("target endpoint is lopsided! (left) " + realTarget.left + ", " + targetPoint.left);
                    break;
                case ConnlibDirection.LEFT:
                case ConnlibDirection.RIGHT:
                    if (realTarget.top != targetPoint.top)
                        console.warn("target endpoint is lopsided! (top) " + realTarget.top + ", " + targetPoint.top);
                    break;
            }
            var d = "M " + realSource.left + "," + realSource.top;
            if (Connlib.pathCornerRadius > 0) {
                var prevLine = this.state.lines.find(x => x._source == sourcePoint);
                var currLine = this.state.lines.find(x => x._source == prevLine._target);
                if (!currLine) {
                    if (!prevLine) {
                        console.warn("something went wrong: cannot find first two lines of the connector!", this, prevLine, currLine);
                        return null;
                    }
                    else {
                        switch (prevLine.orientation) {
                            case ConnlibOrientation.HORIZONTAL:
                                dragOverlays.push(prevLine.JSXComponent(overlayClass + " horizontal"));
                                break;
                            case ConnlibOrientation.VERTICAL:
                                dragOverlays.push(prevLine.JSXComponent(overlayClass + " vertical"));
                                break;
                        }
                        d += " L" + realTarget.left + ", " + realTarget.top;
                        return (React.createElement("g", null,
                            React.createElement("path", { d: d, stroke: Connlib.connectorColor, fill: "transparent", strokeWidth: "1" }),
                            dragOverlays));
                    }
                }
                var targetPointReached = false;
                while (!targetPointReached) {
                    let linesLongEnough = (currLine.length > (2 * Connlib.pathCornerRadius)) && (prevLine.length > (2 * Connlib.pathCornerRadius));
                    let clockwise = ConnlibExtensions.isClockwise(prevLine, currLine);
                    let cW;
                    let r = Connlib.pathCornerRadius;
                    if (clockwise == null) {
                        r = 0;
                    }
                    else {
                        if (clockwise) {
                            cW = "0 0 1";
                        }
                        else {
                            cW = "0 0 0";
                        }
                    }
                    if (prevLine._source == sourcePoint) {
                        d += " L" + prevLine.sL + "," + prevLine.sT + " L";
                    }
                    else {
                        d += " L";
                    }
                    if (linesLongEnough && prevLine.orientation == ConnlibOrientation.HORIZONTAL) {
                        dragOverlays.push(prevLine.JSXComponent(overlayClass + " horizontal"));
                        if (prevLine.direction == ConnlibDirection.RIGHT) {
                            d += (prevLine.tL - r) + ",";
                        }
                        else if (prevLine.direction == ConnlibDirection.LEFT) {
                            d += (prevLine.tL + r) + ",";
                        }
                        d += prevLine.sT;
                    }
                    else if (linesLongEnough && prevLine.orientation == ConnlibOrientation.VERTICAL) {
                        dragOverlays.push(prevLine.JSXComponent(overlayClass + " vertical"));
                        d += prevLine.sL + ",";
                        if (prevLine.direction == ConnlibDirection.BOTTOM) {
                            d += (prevLine.tT - r);
                        }
                        else if (prevLine.direction == ConnlibDirection.TOP) {
                            d += (prevLine.tT + r);
                        }
                    }
                    else {
                        d += prevLine.tL + "," + prevLine.tT;
                    }
                    dragOverlays.push(React.createElement("circle", { cx: prevLine.tL, cy: prevLine.tT, r: "5", className: "connlib-pathpoint-overlay" }));
                    if (linesLongEnough) {
                        // HEREEE
                        switch (currLine.direction) {
                            case ConnlibDirection.TOP:
                                d += " A" + r + "," + r + " " + cW + " " + prevLine.tL + "," + (prevLine.tT - Connlib.pathCornerRadius);
                                break;
                            case ConnlibDirection.RIGHT:
                                d += " A" + r + "," + r + " " + cW + " " + (prevLine.tL + Connlib.pathCornerRadius) + "," + prevLine.tT;
                                break;
                            case ConnlibDirection.BOTTOM:
                                d += " A" + r + "," + r + " " + cW + " " + prevLine.tL + "," + (prevLine.tT + Connlib.pathCornerRadius);
                                break;
                            case ConnlibDirection.LEFT:
                                d += " A" + r + "," + r + " " + cW + " " + (prevLine.tL - Connlib.pathCornerRadius) + "," + prevLine.tT;
                                break;
                        }
                    }
                    else {
                        d += " L" + prevLine.tL + "," + prevLine.tT;
                    }
                    if (currLine._target == targetPoint) {
                        d += " L" + currLine.tL + "," + currLine.tT;
                        targetPointReached = true;
                        switch (currLine.orientation) {
                            case ConnlibOrientation.HORIZONTAL:
                                dragOverlays.push(currLine.JSXComponent(overlayClass + " horizontal target-connected"));
                                break;
                            case ConnlibOrientation.VERTICAL:
                                dragOverlays.push(currLine.JSXComponent(overlayClass + " vertical target-connected"));
                                break;
                        }
                    }
                    prevLine = currLine;
                    currLine = this.state.lines.find(x => x._source == prevLine._target);
                }
            }
            else {
                d = this.pathWithoutR(d, this.state.lines);
            }
            // final line to final connection point
            d += " L" + realTarget.left + "," + realTarget.top;
            return (React.createElement("g", null,
                React.createElement("path", { d: d, stroke: Connlib.connectorColor, fill: "transparent", strokeWidth: "1" }),
                dragOverlays));
        }
        return null;
    }
}
class ConnlibConnectInit {
}
class ConnlibDragOptionsInit {
}
class ConnlibDropOptionsInit {
}
class ConnlibSourceOptionsInit {
}
class ConnlibEndpointOptionsInit {
    constructor() {
        this.anchors = [];
    }
}
class ConnlibTargetOptionsInit {
    constructor() {
    }
}
class ConnlibPaintStyle {
}
/**
 * the class contains a connlib linear function
 * f(x)=mx+n
 */
class ConnlibLinearFunction {
}
// global constants
const ConnlibDirection = {
    "TOP": 0,
    "RIGHT": 1,
    "BOTTOM": 2,
    "LEFT": 3
};
const ConnlibArrowType = {
    "OpenArrow": {
        id: 1,
        isRoute: false,
        fillColor: "transparent",
        borderColor: Connlib.connectorColor,
        borderWidth: 1,
        intend: (Connlib.endpointSize - (Connlib.endpointPadding * 2)) / 2,
        width: (Connlib.endpointSize - (Connlib.endpointPadding * 2)) / 2,
        isClosedArrow: false
    },
    "Inheritance": {
        id: 2,
        isRoute: false,
        fillColor: "white",
        borderColor: Connlib.connectorColor,
        borderWidth: 1,
        intend: (Connlib.endpointSize - (Connlib.endpointPadding * 2)),
        width: (Connlib.endpointSize - (Connlib.endpointPadding * 2)),
        isClosedArrow: true
    }
};
const ConnlibPortType = {
    "Default": {
        portBorderColor: Connlib.connectorColor,
        portBorderWidth: 1,
        portColor: "white"
    }
};
class ConnlibArrowTypeOptions {
}
class ConnlibPortTypeOptions {
}
const ConnlibTypeMap = {
    "io.framed.model.Attribute": {
        type: ConnlibAttribute,
        class: "attribute",
        hasChildren: false
    }
};
class ConnlibTypeMapEntry {
}
/**
 * the class contains a connector creation metadata
 */
class ConnlibConnectionCreateWrapper {
    /**
     * the constructor creates a new connector creation helper
     */
    constructor(mouseX, mouseY, source) {
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        this.pathH = document.createElementNS("http://www.w3.org/2000/svg", "path");
        this.mouseX = mouseX;
        this.mouseY = mouseY;
        this.source = source;
        this.svg.style.left = (this.mouseX - 20).toFixed(0);
        this.svg.style.top = (this.mouseY - 20).toFixed(0);
        this.svg.style.height = "40px";
        this.svg.style.width = "40px";
        this.svg.classList.add("cconnector-panel");
        this.pathH.classList.add("cconnector-bg");
        this.path.style.stroke = Connlib.connectorColor;
        this.path.style.strokeWidth = "1";
        this.svg.appendChild(this.pathH);
        this.svg.appendChild(this.path);
        Connlib.rootInstance.componentRef.ref.current.appendChild(this.svg);
        this.source.classList.add("connlib-cconnector-start");
        Connlib.currentMouseover = null;
    }
    /**
     * the method destroys the current instance
     */
    destroy() {
        this.source.classList.remove("connlib-cconnector-start");
        this.svg.parentNode.removeChild(this.svg);
        if (this.source && Connlib.currentMouseover) {
            console.log("connect " + this.source + " and " + Connlib.currentMouseover);
            /*
            connlib.instances[0].connect(this.source.id, connlib.currentMouseover.id);
            connlib.instances[0].render();
            */
        }
    }
    /**
     * the method updates the target position
     */
    updateTarget(x, y) {
        let l = Math.min(this.mouseX, x) - 20;
        let w = Math.max(this.mouseX, x) - l + 20;
        this.svg.style.left = l.toFixed(0);
        this.svg.style.width = w.toFixed(0);
        let t = Math.min(this.mouseY, y) - 20;
        let h = Math.max(this.mouseY, y) - t + 20;
        this.svg.style.top = t.toFixed(0);
        this.svg.style.height = h.toFixed(0);
        this.pathH.setAttribute("d", "M" + (this.mouseX - l) + "," + (this.mouseY - t) + " " + (x - l) + "," + (y - t));
        this.path.setAttribute("d", "M" + (this.mouseX - l) + "," + (this.mouseY - t) + " " + (x - l) + "," + (y - t));
        if (Connlib.currentMouseover) {
            Connlib.currentMouseover.classList.add("connlib-cconnector-target");
        }
    }
}
/**
 * the class binds a connlib pan information
 */
class ConnlibPanWrapper {
    constructor(mouseX, mouseY, initialXTransform, initialYTransform) {
        this.mouseX = mouseX;
        this.mouseY = mouseY;
        this.initialXTransform = initialXTransform;
        this.initialYTransform = initialYTransform;
    }
    /**
     * the method returns the calculation
     * @param {*} point
     */
    calculateTransform(x, y) {
        return { x: (this.initialXTransform + (x - this.mouseX)) * 1, y: (this.initialYTransform + (y - this.mouseY)) * 1 };
    }
}
// the default stencil
/**
 * a default inheritance
 */
class ConnlibInheritance {
    constructor() {
        this.width = Connlib.endpointSize;
        this.height = Connlib.endpointHeightFormula(Connlib.endpointSize);
        this.arrowType = ConnlibArrowType.Inheritance;
    }
}
/**
 * a default open arrow
 */
class ConnlibOpenArrow {
    constructor() {
        this.width = Connlib.endpointSize;
        this.height = Connlib.endpointHeightFormula(Connlib.endpointSize);
        this.arrowType = ConnlibArrowType.OpenArrow;
    }
}
/**
 * a default relation without arrows
 */
class ConnlibRelationship {
    constructor() {
        this.width = Connlib.endpointSize;
        this.height = Connlib.endpointHeightFormula(Connlib.endpointSize);
    }
}
/**
 * a default inheritance with a port
 */
class ConnlibPortInheritance {
    constructor() {
        this.width = Connlib.endpointSize;
        this.height = Connlib.endpointHeightFormula(Connlib.endpointSize);
        this.arrowType = ConnlibArrowType.Inheritance;
        this.portType = ConnlibPortType.Default;
    }
}
/**
 * a default relation with a port
 */
class ConnlibPortRelationship {
    constructor() {
        this.width = Connlib.endpointSize;
        this.height = Connlib.endpointHeightFormula(Connlib.endpointSize);
        this.portType = ConnlibPortType.Default;
    }
}


/***/ }),

/***/ "./src/framed.io.extensions.tsx":
/*!**************************************!*\
  !*** ./src/framed.io.extensions.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.FramedIoModule = exports.FramedIoScene = exports.FramedIoRoleType = exports.FramedIoRelationship = exports.FramedIoPackage = exports.FramedIoInheritance = exports.FramedIoEvent = exports.FramedIoCompartment = exports.FramedIoClass = exports.FramedIoFulfillmentRelationship = exports.FramedIoDestroyRelationship = exports.FramedIoCreateRelationship = exports.FramedIoComposition = exports.FramedIoAbstractRelationship = void 0;
const classes_1 = __webpack_require__(/*! ./classes */ "./src/classes.tsx");
class FramedIoAbstractRelationship {
}
exports.FramedIoAbstractRelationship = FramedIoAbstractRelationship;
class FramedIoComposition extends FramedIoAbstractRelationship {
}
exports.FramedIoComposition = FramedIoComposition;
class FramedIoCreateRelationship extends FramedIoAbstractRelationship {
}
exports.FramedIoCreateRelationship = FramedIoCreateRelationship;
class FramedIoDestroyRelationship extends FramedIoAbstractRelationship {
}
exports.FramedIoDestroyRelationship = FramedIoDestroyRelationship;
class FramedIoFulfillmentRelationship extends FramedIoAbstractRelationship {
}
exports.FramedIoFulfillmentRelationship = FramedIoFulfillmentRelationship;
class FramedIoClass {
}
exports.FramedIoClass = FramedIoClass;
class FramedIoCompartment {
}
exports.FramedIoCompartment = FramedIoCompartment;
class FramedIoEvent {
}
exports.FramedIoEvent = FramedIoEvent;
class FramedIoInheritance {
}
exports.FramedIoInheritance = FramedIoInheritance;
class FramedIoPackage {
}
exports.FramedIoPackage = FramedIoPackage;
class FramedIoRelationship {
}
exports.FramedIoRelationship = FramedIoRelationship;
class FramedIoRoleType {
}
exports.FramedIoRoleType = FramedIoRoleType;
class FramedIoScene {
}
exports.FramedIoScene = FramedIoScene;
class FramedIoModule {
    static registerAllConstructs() {
        classes_1.Connlib.registerType("io.framed.model.Class", { type: FramedIoClass, class: "class", hasChildren: false });
        classes_1.Connlib.registerType("io.framed.model.Compartment", { type: FramedIoCompartment, class: "compartment", hasChildren: true });
        classes_1.Connlib.registerType("io.framed.model.Event", { type: FramedIoEvent, class: "event", hasChildren: false });
        classes_1.Connlib.registerType("io.framed.model.Inheritance", { type: FramedIoInheritance, class: "inheritance", hasChildren: false });
        classes_1.Connlib.registerType("io.framed.model.Package", { type: FramedIoPackage, class: "package", hasChildren: true });
        classes_1.Connlib.registerType("io.framed.model.Relationship", { type: FramedIoRelationship, class: "relationship", hasChildren: false });
        classes_1.Connlib.registerType("io.framed.model.RoleType", { type: FramedIoRoleType, class: "roletype", hasChildren: false });
        classes_1.Connlib.registerType("io.framed.model.Scene", { type: FramedIoScene, class: "scene", hasChildren: true });
        classes_1.Connlib.registerType("io.framed.model.Composition", { type: FramedIoComposition, class: "composition", hasChildren: false });
        classes_1.Connlib.registerType("io.framed.model.CreateRelationship", { type: FramedIoCreateRelationship, class: "create-relationship", hasChildren: false });
        classes_1.Connlib.registerType("io.framed.model.DestroyRelationship", { type: FramedIoDestroyRelationship, class: "destroy-relationship", hasChildren: false }),
            classes_1.Connlib.registerType("io.framed.model.Fulfillment", { type: FramedIoFulfillmentRelationship, class: "fulfillment", hasChildren: false });
    }
}
exports.FramedIoModule = FramedIoModule;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = __webpack_require__(/*! ./classes */ "./src/classes.tsx");
const input = __webpack_require__(/*! ../assets/input.json */ "./assets/input.json");
const framed_io_extensions_1 = __webpack_require__(/*! ./framed.io.extensions */ "./src/framed.io.extensions.tsx");
window.Connlib = classes_1.Connlib;
framed_io_extensions_1.FramedIoModule.registerAllConstructs();
if (classes_1.Connlib.testSetup) {
    document.getElementById("upload").addEventListener("click", () => {
        classes_1.Connlib.importData(input);
    });
    document.getElementById("toggle-blocking-cells").addEventListener("click", () => {
        classes_1.Connlib.rootInstance.toggleBlockedCells();
    });
    classes_1.Connlib.standaloneSetupObservable.subscribe(() => {
        classes_1.Connlib.importData(input);
        classes_1.Connlib.moveX = 150;
        classes_1.Connlib.moveY = 150;
        classes_1.Connlib.applyTransform();
    });
    document.addEventListener("DOMContentLoaded", function () {
        classes_1.Connlib.setUpStandalone();
    });
}
else {
    // e.g. setup in Framed.io
    document.addEventListener("DOMContentLoaded", function () {
        classes_1.Connlib.setUpWindowListeners();
    });
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });