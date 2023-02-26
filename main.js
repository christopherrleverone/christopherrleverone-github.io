$(document).ready(function(){
    var pages = {
        'Programs': 'programs.html',
        'About Us': 'about_us.html',
        'Volunteer': 'volunteer.html',
        'More Info': '404.html'
    }
    for (key in pages){
        $(".header__nav > ul").append('<li><a href="/' + pages[key] + '">' + key + '</a></li>');
    }
});