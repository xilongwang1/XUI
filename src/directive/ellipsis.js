export default function(el, binding) {
  // el.style.width = binding.arg || 100 + "px";
	// console.log(el.style.width);
	el.style.whiteSpace = "nowrap";
	el.style.overflow = "hidden";
	el.style.textOverflow = "ellipsis";
}
