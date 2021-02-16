export function findByAttr(wrapper, id) {
  return wrapper.find(`[data-test='${id}']`);
}
