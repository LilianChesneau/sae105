function carrousel() {
	var imagesanime = document.querySelectorAll('.imagesanime');
    let d = 2000;
    let delta = 1000;

    imagesanime.forEach(function(img,indice) {
        img.style.zIndex = imagesanime.length - indice;
    });

    let anim = anime.timeline({
        loop: true,
        delay: 0
    });

    anim.add({
        targets: imagesanime,
        translateX: [{value: '350', duration: d},
                     {value: '-350', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (2*delta)+d;
                         if (ind == 1) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 2) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            return (3*delta)+(2*d);
        }
    });
}