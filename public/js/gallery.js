$(document).ready(function () {
    var selectedCountry = localStorage.getItem("selected_country");
    

    const gallery = {
        BRAZIL: ["https://www3.hilton.com/resources/media/hi/RIOCCHH/en_US/img/shared/full_page_image_gallery/main/HH_capacbeach_1270x560_FitToBoxSmallDimension_Center.jpg",
            "https://i.ytimg.com/vi/I6BasQ1A2AU/maxresdefault.jpg",
            "https://bushbaby.travel/images/destination/Latin_America/Brazil/Rio_de_Janeiro/Brazil_Rio_Lead_Shutterstock.jpg"],
        PERU: ["https://media.gadventures.com/media-server/cache/c1/76/c176acf764c928d66a7af017aa03d66d.jpg",
            "https://wallpapercave.com/wp/Cm8ymQq.jpg",
            "http://bighdwalls.com/wp-content/uploads/Machu-Picchu-peru-wallpaper001.jpg"],
        FRANCE: ["https://benishop.co/imgcdn/1024/http/wallpapercave.com/wp/9mPb6oA.jpg_.jpg",
            "https://hdqwalls.com/download/paris-france-eiffel-tower-night-m2-1920x1080.jpg",
            "http://s1.1zoom.me/big0/38/France_Bridges_Rivers_449854.jpg"],
        AUSTRALIA: ["https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1490977357/sydney-australia-MIXUP0317.jpg?itok=XfzFo_jG",
            "https://d1bvpoagx8hqbg.cloudfront.net/originals/erasmus-experience-sydney-australia-d00bfbf7968a1fd3974bb697d416423b.jpg",
            "https://luxurybackpacking.net/wp-content/uploads/2018/01/Best-Backpacker-Hostels-In-Sydney-Australia..png"],
        ICELAND: ["https://www.discover.is/wp-content/uploads/reykjavik-iceland-1000x500.jpg",
            "https://i1.wp.com/www.paperinkandpassports.com/wp-content/uploads/2017/10/shutterstock_613997816.jpg?resize=1024%2C682&ssl=1",
            "https://27ohuc39tgtg31h2hv2mzyoz-wpengine.netdna-ssl.com/wp-content/uploads/2016/05/iStock_000070189587_Full-1-1140x530.jpg"]

    };

    switch (country) {
        case "BRAZIL":
            $("#galleryPic1").attr("src", gallery.BRAZIL[0]);
            $("#galleryPic2").attr("src", gallery.BRAZIL[1]);
            $("#galleryPic3").attr("src", gallery.BRAZIL[2]);
            break;

        case "PERU":
            $("#galleryPic1").attr("src", gallery.PERU[0]);
            $("#galleryPic2").attr("src", gallery.PERU[1]);
            $("#galleryPic3").attr("src", gallery.PERU[2]);
            break;

        case "FRANCE":
            $("#galleryPic1").attr("src", gallery.FRANCE[0]);
            $("#galleryPic2").attr("src", gallery.FRANCE[1]);
            $("#galleryPic3").attr("src", gallery.FRANCE[2]);
            break;

        case "AUSTRALIA":
            $("#galleryPic1").attr("src", gallery.AUSTRALIA[0]);
            $("#galleryPic2").attr("src", gallery.AUSTRALIA[1]);
            $("#galleryPic3").attr("src", gallery.AUSTRALIA[2]);
            break;

        case "ICELAND":
            $("#galleryPic1").attr("src", gallery.ICELAND[0]);
            $("#galleryPic2").attr("src", gallery.ICELAND[1]);
            $("#galleryPic3").attr("src", gallery.ICELAND[2]);
            break;
    };

});
