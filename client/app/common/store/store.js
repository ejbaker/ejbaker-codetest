// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import AngularUUID from "angular-uuid"; // eslint-disable-line no-unused-vars
// APP ----------------------------------
import StoreService from "./store.service";


// MODULE
// =============================================================================
const storeModule = angular.module("store", [
	"angular-uuid",
])
	// storage key constant
	.constant("STORAGE_KEY", "ejbaker-codetest-resources")
	// service
	.service("Store", StoreService)
	// name
	.name;


// EXPORT
// =============================================================================
export default storeModule;
