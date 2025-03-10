function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var add_1;
var hasRequiredAdd;

function requireAdd () {
	if (hasRequiredAdd) return add_1;
	hasRequiredAdd = 1;
	function add(a, b) {
	  let result = a + b;
	  return result;
	}
	add_1 = add;
	return add_1;
}

var sub_1;
var hasRequiredSub;

function requireSub () {
	if (hasRequiredSub) return sub_1;
	hasRequiredSub = 1;
	function sub(a, b) {
	  let result = a - b;
	  return result;
	}
	sub_1 = sub;
	return sub_1;
}

var mul;
var hasRequiredMul;

function requireMul () {
	if (hasRequiredMul) return mul;
	hasRequiredMul = 1;
	function multiply(a, b) {
	  let result = a * b;
	  return result;
	}
	mul = multiply;
	return mul;
}

var div_1;
var hasRequiredDiv;

function requireDiv () {
	if (hasRequiredDiv) return div_1;
	hasRequiredDiv = 1;
	function div(a, b) {
	  let result = a / b;
	  return result;
	}
	div_1 = div;
	return div_1;
}

var src;
var hasRequiredSrc;

function requireSrc () {
	if (hasRequiredSrc) return src;
	hasRequiredSrc = 1;
	const add = requireAdd();
	const sub = requireSub();
	const mul = requireMul();
	const div = requireDiv();
	src = { add, sub, mul, div };
	return src;
}

var srcExports = requireSrc();
const index = /*@__PURE__*/getDefaultExportFromCjs(srcExports);

export { index as default };
