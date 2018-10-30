import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

import GrpcWebTestClient from "@/components/GrpcWebTestClient.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("GrpcWebTestClient.vue", () => {
  let store;
  let state;
  let mutations;

  beforeEach(() => {
    mutations = {
      addToLog: jest.fn(),
      clearLog: jest.fn(),
      setError: jest.fn()
    };
    store = new Vuex.Store({
      state,
      mutations
    });
  });

  it("renders props.title when passed", async () => {
    const title = "new title";
    const wrapper = shallowMount(GrpcWebTestClient, {
      store,
      localVue,
      propsData: { title }
    });

    expect(wrapper.text()).toMatch(title);
  });

  it("renders informational messages from log", async () => {
    Object.assign(store.state, {
      log: ["message 1\n", "message 2\n"],
      error: null
    });

    const wrapper = shallowMount(GrpcWebTestClient, {
      store,
      localVue
    });

    expect(wrapper.text()).toMatch("message 1");
    expect(wrapper.text()).toMatch("message 2");
  });

  it("renders errors", async () => {
    Object.assign(store.state, {
      log: [],
      error: "error description"
    });

    const wrapper = shallowMount(GrpcWebTestClient, {
      store,
      localVue
    });

    expect(wrapper.find(".error").text()).toMatch("error description");
  });

  it("runs RPCs", async () => {
    const wrapper = shallowMount(GrpcWebTestClient, {
      store,
      localVue
    });

    // python-grpc-ssl-example gRPC server and Envoy proxy should be running
    expect(wrapper.vm.$data.server).toBe("http://localhost:8080");

    await wrapper.vm.runRpcs();

    expect(mutations.addToLog).toHaveBeenCalledTimes(22);
    expect(mutations.addToLog).toHaveBeenLastCalledWith({}, "  (none)");
    expect(mutations.clearLog).not.toHaveBeenCalled();
    expect(mutations.setError).not.toHaveBeenCalled();
  });
});
