import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import NavMenu from "@/components/NavMenu.vue";

describe("App.vue", () => {
  it("should render the NavMenu component", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent(NavMenu).exists()).toBe(true);
  });

  it("should have a router-view", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.find("router-view").exists()).toBe(true);
  });
});
