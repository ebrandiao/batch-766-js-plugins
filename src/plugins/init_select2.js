import select2 from "select2";
import $ from "jquery";

const initSelect2 = () => {
  $(".batata").select2({
    width: "75%",
  });
};

export { initSelect2 };
