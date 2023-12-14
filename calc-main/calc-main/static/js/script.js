document.addEventListener('DOMContentLoaded', function(){

    const chars = {
        '_seven': '7',
        '_eight': '8',
        '_nine': '9',
        '_four': '4',
        '_five': '5',
        '_six': '6',
        '_one': '1',
        '_two': '2',
        '_three': '3',
        '_zero': '0',
        '_plus': '+',
        '_minus': '-',
        '_multiply': '*',
        '_division': '/',
    }

    const tablet = document.querySelector('.tablet div');

    let eq = '';

    function showTablet(){
        tablet.innerHTML = eq;
    }

    function clickEvent(event){
        if (event.target.closest('.key_digit')) {
            let digitkey = event.target.closest('.key_digit').classList;
            let digitKeyChar = digitkey[digitkey.length - 1];
            let resChar = chars[digitKeyChar];

            eq += resChar;
        }
        if (event.target.closest('._plus')) {
            let opkey = event.target.closest('._plus').classList;
            let opkeyChar = opkey[opkey.length - 1];
            let resChar = chars[opkeyChar];

            eq += resChar;

        }
        if (event.target.closest('._minus')) {
            let opkey = event.target.closest('._minus').classList;
            let opkeyChar = opkey[opkey.length - 1];
            let resChar = chars[opkeyChar];

            eq += resChar;
            
        }
        if (event.target.closest('._division')) {
            let opkey = event.target.closest('._division').classList;
            let opkeyChar = opkey[opkey.length - 1];
            let resChar = chars[opkeyChar];

            eq += resChar;
            
        }
        if (event.target.closest('._multiply')) {
            let opkey = event.target.closest('._multiply').classList;
            let opkeyChar = opkey[opkey.length - 1];
            let resChar = chars[opkeyChar];

            eq += resChar;
            
        }

        showTablet();
    }

    document.addEventListener('click', clickEvent);


});