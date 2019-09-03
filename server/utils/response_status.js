
module.exports   = {
    OK:200,                     //The request was successfully completed.
    CREATED:201,                // The request was successfully completed.
    BAD_REQUEST:400,            //The request was invalid.
    UNAUTHORISED:401,           //The request did not include an authentication token or the authentication token was expired.
    FORBIDEN:403,               //The client did not have permission to access the requested resource.
    NOT_FOUND:201,              //The requested resource was not found.
    METHOD_NOT_ALLOWED:405,     //The HTTP method in the request was not supported by the resource. For example, the DELETE method cannot be used with the Agent API.
    CONFLICT:409,               //The request could not be completed due to a conflict. For example,  POST ContentStore Folder API cannot complete if the given file or folder name already exists in the parent location.
    INTERNAL_SERVER_ERROR:500,  //The request was not completed due to an internal error on the server side.
    SERVICE_UNAVAILABLE:501,     //The server was unavailable.
    UNPROCESSED_ENTITY:422       // When validation is failed with key or it's empty values
}