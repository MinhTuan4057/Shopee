function kiemTraChuoi(value, minLength, maxLength, selector, messErr) {
if (minLength && value.trim().length < minLength) {
  getElement(selector).style.display = "block";
  getElement(selector).innerHTML = messErr;
  return false;
}

if (maxLength && value.trim().length > maxLength) {
  getElement(selector).style.display = "block";
  getElement(selector).innerHTML = messErr;
  return false;
}

getElement(selector).innerHTML = '';
return true;
}

function kiemTraSo(value, minValue, maxValue, selector, messErr) {
if (isNaN(value) || value < minValue) {
  getElement(selector).style.display = "block";
  getElement(selector).innerHTML = messErr;
  return false;
}

if (maxValue && value >= maxValue) {
  getElement(selector).style.display = "block";
  getElement(selector).innerHTML = messErr;
  return false;
}

getElement(selector).innerHTML = '';
return true;
}

function kiemTraPattern(value, selector, pattern, messErr) {
if (!pattern.test(value)) {
  getElement(selector).style.display = "block";
  getElement(selector).innerHTML = messErr;
  return false;
}

getElement(selector).innerHTML = '';
return true;
}
