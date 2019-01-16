var regexp = /^\([0-9]{2}\)\-\([0][0-9]+\)$/;

function invalidPhoneNumber(str) {
    regexp = /^\([0-9]{2}\)\-\([0][0-9]+\)$/;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}