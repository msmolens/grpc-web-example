# gRPC-Web Example

[gRPC-Web](https://github.com/grpc/grpc-web) example that exercises some methods
of the
[python-grpc-ssl-example](https://github.com/msmolens/python-grpc-ssl-example)
server.

For more information on running your own gRPC service and accessing it from the
browser, see the
[tutorial](https://github.com/grpc/grpc-web/blob/master/net/grpc/gateway/examples/echo/tutorial.md).

## Dependencies

1. Yarn
1. Docker
1. [python-grpc-ssl-example](https://github.com/msmolens/python-grpc-ssl-example)
1. Protocol Buffers compiler (protoc) (for development only)
1. gRPC-Web plugin for Protocol Buffers compiler (protoc-gen-grpc-web) (for development only)

## Usage

### Set up the gRPC server

Clone and set up an environment to run the
[python-grpc-ssl-example](https://github.com/msmolens/python-grpc-ssl-example)
gRPC server.

### Configure the proxy

The Envoy proxy forwards the browser's gRPC-Web requests to the server. Build
the Docker image with:

```bash
docker build -t grpc-web-example/envoy -f ./envoy.Dockerfile .
```

### Set up the web server

Install the web client's dependencies with:

```bash
yarn install
```

### Run the example

Follow the steps below to run the gRPC server, start the proxy, and launch the
web server.

1. Run the Python gRPC server from the `python-grpc-ssl-example` directory.

```bash
./shopping_list_server.py --no-use-tls --port 9090
```

2. Run the Envoy proxy.

```bash
docker run -d -p 8080:8080 --network=host grpc-web-example/envoy
```

3. Run the web server.

```bash
yarn run serve
```

4. Browse to `http://localhost:8081` and click the "Run" button. The client
   calls a sequence of RPCs and displays informational messages in the web page.
   Errors are shown in red.

## Development

### Generate Protocol Buffers messages and client service stub

To regenerate the Protocol Buffers messages and client service stub code from
the `.protoc` definitions, run:

```bash
protoc -I=. shopping_list.proto \
  --js_out=import_style=commonjs:./src/generated \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src/generated
```

See the gRPC-Web [Hello World guide](https://github.com/grpc/grpc-web/tree/1.0.0/net/grpc/gateway/examples/helloworld#generate-protobuf-messages-and-client-service-stub)
for instructions on how to compile `protoc` and the `protoc-gen-grpc-web`
plugin.

### Run tests
```
# Ensure gRPC server and proxy are running, then run:
yarn run test:unit
```

### Lint and fix
```
yarn run lint
```
