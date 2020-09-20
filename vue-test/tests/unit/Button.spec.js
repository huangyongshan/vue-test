import { shallowMount } from "@vue/test-utils";
import Button from "@/components/Button.vue";
import { wrap } from "module";

describe("Button.vue", () => {
  // test props disabled
  it("props disabled", () => {
    //可选值 true
    const disabledTestObj = {
      disabled: true
    };

    let wrapper = shallowMount(Button, {
      propsData: disabledTestObj
    });
    expect(wrapper.props().disabled).toBe(disabledTestObj.disabled);

    //可选值 false
    const disabledTestObj1 = {
      disabled: false
    };
    wrapper = shallowMount(Button, {
      propsData: disabledTestObj1
    });
    expect(wrapper.props().disabled).toBe(disabledTestObj1.disabled);

    //可选值 null or ""
    const disabledTestObj2 = {};
    wrapper = shallowMount(Button, {
      propsData: disabledTestObj2
    });
    expect(wrapper.props().disabled).toBe(false);

    wrapper.destroy();
  });

  // test button className
  it("props disabled className", () => {
    const disabledTestObj = {
      disabled: true
    };

    let wrapper = shallowMount(Button, {
      propsData: disabledTestObj
    });
    expect(wrapper.classes("button-item--disabled")).toBe(true);
    wrapper.destroy();
  });

  it("computed className", async () => {
    const wrapper = shallowMount(Button);
    expect(wrapper.vm.className).toBe("button-item button-item--md");
    await wrapper.setProps({
      size: "bg"
    });
    expect(wrapper.vm.className).toBe("button-item button-item--bg");
    await wrapper.setProps({
      size: "sm"
    });
    expect(wrapper.vm.className).toBe("button-item button-item--sm");
    wrapper.setProps({
      disabled: true
    });
    expect(wrapper.vm.className).toBe(
      "button-item button-item--disabled button-item--sm"
    );
    wrapper.setProps({
      radius: false
    });
    expect(wrapper.vm.className).toBe(
      "button-item button-item--disabled button-item--sm"
    );
    wrapper.destroy();
  });

  // 测试 click 事件监听
  // it("methods on click", () => {
  //   const wrapper = shallowMount(Button);
  //   // init mock fn
  //   const mockFn = jest.fn();
  //   wrapper.setMethods({
  //     clickHandler: mockFn
  //   });
  //   // wrapper 去获取 子 DOM 元素
  //   const button = wrapper.find("button");

  //   button.trigger("click");

  //   expect(mockFn).toBeCalled();
  //   expect(mockFn).toHaveBeenCalledTimes(1);
  //   wrapper.destroy();
  // });

  // it("$emit $on", () => {
  //   const wrapper = shallowMount(Button);

  //   const mockFn = jest.fn();

  //   wrapper.vm.$on("clicked", mockFn);

  //   wrapper.vm.clickHandler();

  //   expect(mockFn).toBeCalled();
  //   expect(mockFn).toHaveBeenCalledTimes(1);
  //   expect(mockFn).toHaveBeenCalledWith("hello world");
  //   wrapper.destroy();
  // });

  it("slot default", () => {
    const wrapper = shallowMount(Button);

    const button = wrapper.find("button");

    expect(button.text()).toBe("button");
    wrapper.destroy();
  });

  it("slot", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "hello world"
      }
    });

    const button = wrapper.find("button");

    expect(button.text()).toBe("hello world");
    wrapper.destroy();
  });

  it("slot named", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        namedSlot: "<span>this is a slot html coded</span>"
      }
    });

    const button = wrapper.find("button");
    expect(button.contains("span")).toBe(true);
    const span = wrapper.find("button span");
    expect(span.text()).toBe("this is a slot html coded");
    wrapper.destroy();
  });

  it("slot scoped", () => {
    const wrapper = shallowMount(Button, {
      scopedSlots: {
        scoped:
          '<span slot-scope="a">this is {{a.info.name}}, age is {{a.info.age}}</span>'
      }
    });

    const button = wrapper.find("button");
    expect(button.contains("span")).toBe(true);
    const span = wrapper.find("button span");
    expect(span.text()).toBe("this is aa, age is 11");
    wrapper.destroy();
  });

  //  snapshot

  // it("snapshot", () => {
  //   const wrapper = shallowMount(Button);

  //   expect(wrapper.html()).toMatchSnapshot;

  //   wrapper.destroy();
  // });
});
