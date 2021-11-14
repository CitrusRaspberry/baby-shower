// This variable is for when the title moves to make room for the alert for DB entries
// If the CSS changes for the h1 title at the top of the page, change it here too
var defaultPosition = '2%';


// To open modal when image is clicked on landing page
$('.images').click(function() {
    var selectedPic = $(this).attr('src');
    selectedPic = selectedPic.substr(0, selectedPic.length - 7);
    selectedPic += ".jpg";
    $('.imageModal').find('img').attr('src', selectedPic);
    $('.imageModal').modal('show');
});


// To show email and phone without bots getting it
$('.show-phone-btn').click(function() {
    showPhone();
});
$('.show-email-btn').click(function() {
    showEmail();
});


$('#countdown-form .button').click(function() {
    if( document.forms['countdown-form'].reportValidity() ) {
        $('#countdown-form .button').attr('type', 'submit')
        $('#countdown-form .button').click();
    } else {
        $('#countdown-form').attr('class', 'was-validated');
    }
});


// To move title depending on whether alert is shown or not
function titleDefault(defaultPosition) {
    $('#landing-page h1').css( 'top', defaultPosition );
}
// If the alert exists, move the title down, otherwise keep it up
if( $('.alert').text() === '' ) {
    titleDefault(defaultPosition);
} else {
    $('#landing-page h1').css('top', '10%');
}
// When the close button is clicked, move title back up
$('.alert button').click(function() {
    titleDefault(defaultPosition);
});

// HIDING CONTACT INFO FROM BOTS

// Store contact info
var areacode = '888';
var phone = '888-8888';
var name = 'example';
var domain = 'domain.com';


// Shows hidden <p> and <a> tags, sends data to them, and hides buttons
function showPhone() {
    $('.show-phone-btn').attr('hidden', true);
    $('.hidden-phone').removeAttr('hidden').attr('margin', 0);
    $('.hidden-phone').text( '(' + areacode + ') ' + phone );
}

function showEmail() {
    $('.show-email-btn').attr('hidden', true);
    $('.hidden-email').removeAttr('hidden');
    $('.hidden-email').text( name + '@' + domain );
    $('.hidden-email').attr( 'href', 'mailto:' + name + '@' + domain );
}
