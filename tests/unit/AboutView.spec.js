import { shallowMount } from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";

describe("AboutView.vue", () => {
  it("renders the component correctly", () => {
    const wrapper = shallowMount(AboutView);
    expect(wrapper.text()).toContain("About page");
  });

  it("renders the correct HTML structure", () => {
    const wrapper = shallowMount(AboutView);
    const h1 = wrapper.find("h1");
    
    expect(h1.exists()).toBe(true);
    expect(h1.text()).toBe("About page");
    expect(wrapper.classes()).toContain("about");
  });
});
