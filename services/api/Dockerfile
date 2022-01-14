FROM bufbuild/buf as buf

FROM namely/protoc-all
WORKDIR /workspace
COPY --from=buf /usr/local/bin/buf /usr/bin/buf

RUN npm i -g grpc-tools
RUN npm i -g grpc_tools_node_protoc_ts

ENTRYPOINT ["buf"]
