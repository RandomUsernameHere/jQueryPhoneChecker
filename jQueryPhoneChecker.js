function isValidPhone($element){

    var value = $element.val().trim();
    var regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

    $element.val(value);

    return value.match(regex);
}