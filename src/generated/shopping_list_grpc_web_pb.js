/**
 * @fileoverview gRPC-Web generated client stub for shopping_list
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.shopping_list = require('./shopping_list_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.shopping_list.ShoppingListServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.shopping_list.ShoppingListServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.shopping_list.ShoppingListServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.shopping_list.ShoppingListServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.shopping_list.CreateShoppingListRequest,
 *   !proto.shopping_list.ShoppingList>}
 */
const methodInfo_CreateShoppingList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.shopping_list.ShoppingList,
  /** @param {!proto.shopping_list.CreateShoppingListRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.shopping_list.ShoppingList.deserializeBinary
);


/**
 * @param {!proto.shopping_list.CreateShoppingListRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.shopping_list.ShoppingList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.shopping_list.ShoppingList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServiceClient.prototype.createShoppingList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/shopping_list.ShoppingListService/CreateShoppingList',
      request,
      metadata,
      methodInfo_CreateShoppingList,
      callback);
};


/**
 * @param {!proto.shopping_list.CreateShoppingListRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.shopping_list.ShoppingList>}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServicePromiseClient.prototype.createShoppingList =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createShoppingList(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.shopping_list.UpdateShoppingListRequest,
 *   !proto.shopping_list.ShoppingList>}
 */
const methodInfo_UpdateShoppingList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.shopping_list.ShoppingList,
  /** @param {!proto.shopping_list.UpdateShoppingListRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.shopping_list.ShoppingList.deserializeBinary
);


/**
 * @param {!proto.shopping_list.UpdateShoppingListRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.shopping_list.ShoppingList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.shopping_list.ShoppingList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServiceClient.prototype.updateShoppingList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/shopping_list.ShoppingListService/UpdateShoppingList',
      request,
      metadata,
      methodInfo_UpdateShoppingList,
      callback);
};


/**
 * @param {!proto.shopping_list.UpdateShoppingListRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.shopping_list.ShoppingList>}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServicePromiseClient.prototype.updateShoppingList =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateShoppingList(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.shopping_list.DeleteShoppingListRequest,
 *   !proto.shopping_list.DeleteShoppingListResponse>}
 */
const methodInfo_DeleteShoppingList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.shopping_list.DeleteShoppingListResponse,
  /** @param {!proto.shopping_list.DeleteShoppingListRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.shopping_list.DeleteShoppingListResponse.deserializeBinary
);


/**
 * @param {!proto.shopping_list.DeleteShoppingListRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.shopping_list.DeleteShoppingListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.shopping_list.DeleteShoppingListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServiceClient.prototype.deleteShoppingList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/shopping_list.ShoppingListService/DeleteShoppingList',
      request,
      metadata,
      methodInfo_DeleteShoppingList,
      callback);
};


/**
 * @param {!proto.shopping_list.DeleteShoppingListRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.shopping_list.DeleteShoppingListResponse>}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServicePromiseClient.prototype.deleteShoppingList =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteShoppingList(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.shopping_list.ListShoppingListsRequest,
 *   !proto.shopping_list.ListShoppingListsResponse>}
 */
const methodInfo_ListShoppingLists = new grpc.web.AbstractClientBase.MethodInfo(
  proto.shopping_list.ListShoppingListsResponse,
  /** @param {!proto.shopping_list.ListShoppingListsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.shopping_list.ListShoppingListsResponse.deserializeBinary
);


/**
 * @param {!proto.shopping_list.ListShoppingListsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.shopping_list.ListShoppingListsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.shopping_list.ListShoppingListsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServiceClient.prototype.listShoppingLists =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/shopping_list.ShoppingListService/ListShoppingLists',
      request,
      metadata,
      methodInfo_ListShoppingLists,
      callback);
};


/**
 * @param {!proto.shopping_list.ListShoppingListsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.shopping_list.ListShoppingListsResponse>}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServicePromiseClient.prototype.listShoppingLists =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listShoppingLists(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.shopping_list.ListShoppingListsStreamRequest,
 *   !proto.shopping_list.ShoppingList>}
 */
const methodInfo_ListShoppingListsStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.shopping_list.ShoppingList,
  /** @param {!proto.shopping_list.ListShoppingListsStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.shopping_list.ShoppingList.deserializeBinary
);


/**
 * @param {!proto.shopping_list.ListShoppingListsStreamRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.shopping_list.ShoppingList>}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServiceClient.prototype.listShoppingListsStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/shopping_list.ShoppingListService/ListShoppingListsStream',
      request,
      metadata,
      methodInfo_ListShoppingListsStream);
};


/**
 * @param {!proto.shopping_list.ListShoppingListsStreamRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.shopping_list.ShoppingList>}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServicePromiseClient.prototype.listShoppingListsStream =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/shopping_list.ShoppingListService/ListShoppingListsStream',
      request,
      metadata,
      methodInfo_ListShoppingListsStream);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.shopping_list.AddItemRequest,
 *   !proto.shopping_list.AddItemResponse>}
 */
const methodInfo_AddItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.shopping_list.AddItemResponse,
  /** @param {!proto.shopping_list.AddItemRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.shopping_list.AddItemResponse.deserializeBinary
);


/**
 * @param {!proto.shopping_list.AddItemRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.shopping_list.AddItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.shopping_list.AddItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServiceClient.prototype.addItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/shopping_list.ShoppingListService/AddItem',
      request,
      metadata,
      methodInfo_AddItem,
      callback);
};


/**
 * @param {!proto.shopping_list.AddItemRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.shopping_list.AddItemResponse>}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServicePromiseClient.prototype.addItem =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addItem(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.shopping_list.RemoveItemRequest,
 *   !proto.shopping_list.RemoveItemResponse>}
 */
const methodInfo_RemoveItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.shopping_list.RemoveItemResponse,
  /** @param {!proto.shopping_list.RemoveItemRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.shopping_list.RemoveItemResponse.deserializeBinary
);


/**
 * @param {!proto.shopping_list.RemoveItemRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.shopping_list.RemoveItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.shopping_list.RemoveItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServiceClient.prototype.removeItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/shopping_list.ShoppingListService/RemoveItem',
      request,
      metadata,
      methodInfo_RemoveItem,
      callback);
};


/**
 * @param {!proto.shopping_list.RemoveItemRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.shopping_list.RemoveItemResponse>}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServicePromiseClient.prototype.removeItem =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.removeItem(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.shopping_list.SetItemCheckedRequest,
 *   !proto.shopping_list.SetItemCheckedResponse>}
 */
const methodInfo_SetItemChecked = new grpc.web.AbstractClientBase.MethodInfo(
  proto.shopping_list.SetItemCheckedResponse,
  /** @param {!proto.shopping_list.SetItemCheckedRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.shopping_list.SetItemCheckedResponse.deserializeBinary
);


/**
 * @param {!proto.shopping_list.SetItemCheckedRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.shopping_list.SetItemCheckedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.shopping_list.SetItemCheckedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServiceClient.prototype.setItemChecked =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/shopping_list.ShoppingListService/SetItemChecked',
      request,
      metadata,
      methodInfo_SetItemChecked,
      callback);
};


/**
 * @param {!proto.shopping_list.SetItemCheckedRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.shopping_list.SetItemCheckedResponse>}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServicePromiseClient.prototype.setItemChecked =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setItemChecked(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.shopping_list.ListItemsRequest,
 *   !proto.shopping_list.ListItemsResponse>}
 */
const methodInfo_ListItems = new grpc.web.AbstractClientBase.MethodInfo(
  proto.shopping_list.ListItemsResponse,
  /** @param {!proto.shopping_list.ListItemsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.shopping_list.ListItemsResponse.deserializeBinary
);


/**
 * @param {!proto.shopping_list.ListItemsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.shopping_list.ListItemsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.shopping_list.ListItemsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServiceClient.prototype.listItems =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/shopping_list.ShoppingListService/ListItems',
      request,
      metadata,
      methodInfo_ListItems,
      callback);
};


/**
 * @param {!proto.shopping_list.ListItemsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.shopping_list.ListItemsResponse>}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServicePromiseClient.prototype.listItems =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listItems(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.shopping_list.ListItemsStreamRequest,
 *   !proto.shopping_list.Item>}
 */
const methodInfo_ListItemsStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.shopping_list.Item,
  /** @param {!proto.shopping_list.ListItemsStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.shopping_list.Item.deserializeBinary
);


/**
 * @param {!proto.shopping_list.ListItemsStreamRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.shopping_list.Item>}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServiceClient.prototype.listItemsStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/shopping_list.ShoppingListService/ListItemsStream',
      request,
      metadata,
      methodInfo_ListItemsStream);
};


/**
 * @param {!proto.shopping_list.ListItemsStreamRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.shopping_list.Item>}
 *     The XHR Node Readable Stream
 */
proto.shopping_list.ShoppingListServicePromiseClient.prototype.listItemsStream =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/shopping_list.ShoppingListService/ListItemsStream',
      request,
      metadata,
      methodInfo_ListItemsStream);
};


module.exports = proto.shopping_list;

