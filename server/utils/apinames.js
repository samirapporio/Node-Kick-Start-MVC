const {base_url} = require('../config/env_config/config');


const PLATFORM_TYEPS = {
    ADMIN:"Admin",
    MASTER_ADMIN:"Master Admin",
    CSO:"Cso",
    OFFICIAL:"Official",
    DEVELOPMENT:"Developer",
    NIU:"Not It Is Use"
}

const REQUEST_TYPES = {
    POST:"POST",
    GET:"GET"
}


const ROUTES_TYPES = {
    MERCHANT:"merchant",
    USER:"user",
    VISITOR:"visitor",
    STATUS:"status",
    VISIT:"visit",
    MASTER_ADIN:"master_admin",
    API_LOGS:"apilogs",
    VISITOR_TYPES:"visitor_types",
    DEPARTMENTS:"departments"
}


const apinames = {

    CREATE_MERCHANT_2: {
        name: "Create Merchant 2",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.MASTER_ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.MERCHANT+"/register",
        description: "Api For creating Merchant, This API is normally used for creating merchant like some Embassy that wil be only implemented at master admin side"
    },


    MERCHANT_LOGIN: {
        name: "Merchant Login",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.ADMIN, PLATFORM_TYEPS.CSO, PLATFORM_TYEPS.OFFICIAL],
        url:base_url+"api/v1"+ROUTES_TYPES.MERCHANT+"/login",
        description: "This api is used at master admin and embassy admin for login"
    },
    MERCHANT_CONFIGURATION: {
        name: "Merchant Configuration",
        posting_script: true,
        response: true,
        type:[PLATFORM_TYEPS.ADMIN],
        request_type:REQUEST_TYPES.GET,
        url:base_url+"api/v1"+ROUTES_TYPES.MERCHANT+"/cofiguration",
        description: "This api wiil give the merchant configuration we need to create configuration of merchant via master admin panel "
    },
    USER_LIST: {
        name: "Get User List",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.GET,
        type:[PLATFORM_TYEPS.CSO],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/list/:type",
        description: "this api will will give cso or officer depends on the type send in API"
    },
    OFFICERS_LIST: {
        name: "Officers List",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.GET,
        type:[PLATFORM_TYEPS.ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/list_officials",
        description: "give list of officers that is user type 2"
    },
    CSO_LIST:{
        name: "CSO List",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.GET,
        type:[PLATFORM_TYEPS.ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/list_cso",
        description: "This api will give all CSO present in database but later we need to add merchant id as well that will be converted into POST type API "
    },
    CREATE_CSO: {
        name: "Create CSO",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/create/cso",
        description: "APi For creating Chief security officer."
    },
    UPDATE_PASSWORD_VIA_ADMIN: {
        name: "Update Password Via Admin",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/update/password_via_admin",
        description: "This Api will send a mail to the corresponding user (we have used twillio grid send for this )"
    },
    UPDATE_PASSWORD_HTML:{
        name: "Update Password On Mail",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/change/password_via_admin",
        description: "This is basically a function that calls after hitting submit inside mail"
    },
    CREATE_OFFICER: {
        name: "Create Officer",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/create/officer",
        description: "This api will create a user with type equal to 2 at the backend can also be implement at master in future"
    },
    UPDATE_SLOT: {
        name: "Update Time/Working Slots",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.OFFICIAL, PLATFORM_TYEPS.ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/update/schedule",
        description: "This api will take data ad it is and update it via key in user table itself"
    },
    SCHEDULE: {
        name: "Schedule",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.OFFICIAL],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/schedule",
        description: "This api will give schedule for a particular user"
    },
    UPDATE_ROOM: {
        name: "Update Room",
        posting_script: true,
        response: true,
        type:[PLATFORM_TYEPS.OFFICIAL],
        request_type:REQUEST_TYPES.POST,
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/update/room",
        description: "Api Updating working room no for official App, later we probably need to change scenario in case of society VMS as there rooms are not changing"
    },
    UPDATE_USER_STATUS: {
        name: "Update Officer/CSO status",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.OFFICIAL],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/update/status",
        description: "Api for updating user status"
    },
    ADD_USER_VEHICLE: {
        name: "Add User Vehicle",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.DEVELOPMENT],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/add/vehicle",
        description: ""
    },
    ADD_USER_DOCUMENT: {
        name: "Add User Document",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.DEVELOPMENT],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/add/documents",
        description: ""
    },
    ADD_STATUS: {
        name: "Add status",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.DEVELOPMENT],
        url:base_url+"api/v1/"+ROUTES_TYPES.STATUS+"/add",
        description: "this api was initially created for making status dynamic but currently not in use"
    },
    ADD_STATUS_ACTIONS: {
        name: "Add Status Actions",
        posting_script: true,
        response: true,
        type:[PLATFORM_TYEPS.DEVELOPMENT],
        request_type:REQUEST_TYPES.POST,
        url:base_url+"api/v1/"+ROUTES_TYPES.STATUS+"/edit",
        description: "api used for adding CSO and Officials that depends on current visit status (this is for developer use only)"
    },
    CREATE_MERCHANT: {
        name: "Create Merchant",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.MASTER_ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.MERCHANT+"/create",
        description: ""
    },
    CREATE_MERCHANT_CONFIGURATION: {
        name: "Create Merchant Configuration",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.DEVELOPMENT, PLATFORM_TYEPS.MASTER_ADMIN],
        url:base_url+"api/v1"+ROUTES_TYPES.MERCHANT+"/cofiguration/create",
        description: "This api going to implement on master admin on later stages"
    },
    MERCHANTS_LIST: {
        name: "Merchants List",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.GET,
        type:[PLATFORM_TYEPS.DEVELOPMENT, PLATFORM_TYEPS.MASTER_ADMIN],
        url:base_url+"api/v1"+ROUTES_TYPES.MERCHANT+"/list",
        description: ""
    },
    MERCHANTS_LIST_2: {
        name: "Merchants List 2",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.GET,
        type:[PLATFORM_TYEPS.DEVELOPMENT, PLATFORM_TYEPS.MASTER_ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.MASTER_ADIN+"/merchants_list",
        description: ""
    },
    ADD_VISITOR: {
        name: "Add Visitor",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.CSO],
        url:base_url+"api/v1/"+ROUTES_TYPES.VISITOR+"/save",
        description: "This api will create a new visitor and save new visit in visits table if phone number doesn't found in DB and if phone found then it will not create new user in table but definitely add new visit in visits table"
    },
    LIST_VISITS: {
        name: "List Visits",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.CSO],
        url:base_url+"api/v1/"+ROUTES_TYPES.VISITOR+"/list",
        description: "List All visits according to date from and to"
    },
    LIST_VISIT_BY_OFFICIAL: {
        name: "List Visits By Officials ID",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.OFFICIAL, PLATFORM_TYEPS.ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.VISITOR+"/list/byOfficials",
        description: ""
    },
    SEARCH_VISITOR_BY_PHONE: {
        name: "Search Visitor By Phone",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.CSO],
        url:base_url+"api/v1/"+ROUTES_TYPES.VISITOR+"/search/phone",
        description: ""
    },
    LIST_VISITORS_BY_DATE: {
        name: "List Visitors by Date",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.VISITOR+"/visitoraccordingtodate",
        description: ""
    },
    LIST_VISITORS_BY_OFFICIAL: {
        name: "List Visitor By Official",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.DEVELOPMENT],
        url:base_url+"api/v1/"+ROUTES_TYPES.VISITOR+"/visitor_by_officials",
        description: ""
    },
    VISITS_BY_VISITOR_ID: {
        name: "Visits List By Visitor ID",
        posting_script: true,
        type:[PLATFORM_TYEPS.CSO],
        response: true,
        request_type:REQUEST_TYPES.POST,
        url:base_url+"api/v1/"+ROUTES_TYPES.VISITOR+"/details",
        description: ""
    },
    VISITS_BY_VISITOR_ID_2: {
        name: "Visits List By Visitor ID 2",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.VISIT+"/list",
        description: "this api is in visit service"
    },
    UPDATE_VISIT_STATUS: {
        name: "Update Visit Status",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.NIU],
        url:base_url+"api/v1/"+ROUTES_TYPES.VISITOR+"/status/update",
        description: "No in use any more"
    },
    VISITOR_INFO: {
        name: "Visitor Information",
        posting_script: true,
        type:[PLATFORM_TYEPS.ADMIN],
        request_type:REQUEST_TYPES.POST,
        url:base_url+"api/v1/"+ROUTES_TYPES.VISITOR+"/info",
        response: true,
        description: ""
    },VISITOR_UNIQUE: {
        name: "Visitors List Unique",
        posting_script: true,
        type:[PLATFORM_TYEPS.ADMIN],
        request_type:REQUEST_TYPES.POST,
        url:base_url+"api/v1/"+ROUTES_TYPES.VISITOR+"/list/date",
        response: true,
        description: "This api will give list of visitor according to and from date but not Visits of a particular visitor"
    },
    TIMELINE_BY_VISIT: {
        name: "Timeline By Visits",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.VISIT+"/timeline",
        description: ""
    },
    UPDATE_VISIT_STATUS_2: {
        name: "Update Visit Status 2",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.CSO],
        url:base_url+"api/v1/"+ROUTES_TYPES.VISIT+"/update/status",
        description: ""
    },
    USER_LOGIN: {
        name: "User Login (CSO and Officer)",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.OFFICIAL, PLATFORM_TYEPS.CSO],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/login",
        description: "This is user login api for any kind user like CSO and Officer"
    },
    CHANGE_USER_STATUS: {
        name: "Change User Status (CSO and Officer)",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.DEVELOPMENT],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/change_official_status",
        description: ""
    },
    API_NAMES: {
        name: "Api Names List",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.GET,
        type:[PLATFORM_TYEPS.DEVELOPMENT, PLATFORM_TYEPS.MASTER_ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.API_LOGS+"/list",
        description: "This api will all api names list in this project"
    },
    API_LOG_BY_NAME: {
        name: "API Logs By Name",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.DEVELOPMENT, PLATFORM_TYEPS.MASTER_ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.API_LOGS+"/logs/",
        description: "This Api will All logs that will filter according to api name and date , by default it will give current date logs for the specified API name "
    },
    CREATE_VISITOR_TYPE:{
        name: "Add Visitor Type",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.MASTER_ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.VISITOR_TYPES+"/add",
        description: "This api is currently only used for creating visitor just for development purpose. "
    },
    ARCHICED_USER:{
        name: "Archive User",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/archive",
        description: "This api archive account for user and works for both type of user CSO = 1  and Officer = 2"
    },
    UNARCHICED_USER:{
        name: "Unarchive User",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/unarchive",
        description: "This api archive account for user and works for both type of user CSO = 1  and Officer = 2"
    },
    EDIT_OFFICER:{
        name: "Edit Officer",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/edit/officer",
        description: "This api edit user type of 2 and all parameters are optional in this API except user_id."
    },
    DEPARTMENT_LIST:{
        name: "Department List",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.GET,
        type:[PLATFORM_TYEPS.ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.DEPARTMENTS+"/list",
        description: "Departments List added by particular merchant"
    },
    API_LOG_UNIQUE:{
        name: "Distinct Logs",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.GET,
        type:[PLATFORM_TYEPS.DEVELOPMENT],
        url:base_url+"api/v1/"+ROUTES_TYPES.API_LOGS+"/all_logs_types_in_db",
        description: "This api will give all uniques api name stored in fill api lof table "
    },
    LOGOUT_USER:{
        name: "Logout User",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.DEVELOPMENT],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/logout",
        description: "For logging out user, at a time a user logged in a single devive"
    },
    AVAILABILITY:{
        name: "Availability",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.OFFICIAL],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/available",
        description: "This will change the availability of officer , presently we have added some key at backend but we need to merge it with HRMS module"
    },
    UPDATE_PASSWORD_VIA_PHONE:{
        name: "Update Password via Phone",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.POST,
        type:[PLATFORM_TYEPS.OFFICIAL, PLATFORM_TYEPS.CSO],
        url:base_url+"api/v1/"+ROUTES_TYPES.USER+"/change/password",
        description: "This will change the change the password of officer directly from app this is separate API no mail will be send in this case as officer is requesting change from his own app "
    },
    OFFICER_STATUS:{
        name: "Officer Status",
        posting_script: true,
        response: true,
        request_type:REQUEST_TYPES.GET,
        type:[PLATFORM_TYEPS.ADMIN],
        url:base_url+"api/v1/"+ROUTES_TYPES.STATUS+"/official/list",
        description: "This api give all available status for officer , and is mainly using for filtering data at admin panel "
    }
}


module.exports = {apinames}

// types --> developer, admin, CSO, Officials, validation failed, Exceptions, APiLogs
