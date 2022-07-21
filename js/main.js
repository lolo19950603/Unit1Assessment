const $input = $('input');
const $plus = $('#plus');
const $minus = $('#minus');
const $display = $('#display');

function handlePlusClick(e) {
    let inputValue = parseInt($input.val());
    let displayValue = parseInt($display.html());
    let result = inputValue + displayValue;
    $display.html(result.toString());
    if (result < 0) {
        $display.css({'color': 'red'})
    } else {
        $display.css({'color': 'black'})
    }
}

function handleMinusClick(e) {
    let inputValue = parseInt($input.val());
    let displayValue = parseInt($display.html());
    let result = displayValue - inputValue;
    $display.html(result.toString());
    if (result < 0) {
        $display.css({'color': 'red'})
    } else {
        $display.css({'color': 'black'})
    }
}


$plus.click(handlePlusClick);

$minus.click(handleMinusClick);