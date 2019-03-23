// $(document).ready(function() {
//     $('#btn').click(function() {
//         // alert("Hello");
//


chrome.tabs.getSelected(null, function (tab) {
    var tablink = tab.url;
    console.log(tablink);
    $.ajax({
        url: tablink,
        cookie: "session-id=134-2957114-6544908; session-id-time=2082787201l; i18n-prefs=USD; x-wl-uid=116zQWVfCXD3XF5tbcGzmjlktCxfx2YLpecB5enPYo5EQaeseR3+sZdmZkeOImso03T8E2hP0bcQ=; ubid-main=130-8488131-9755705; session-token=428030ryx+2CD5vDS4RNnm04iiq+fA/fvnQXAD23SnlbF4rAKkF9/XwMGUAlnAAGduxTecxHNKzJGJVfUGCkbtZd2FO4qpFgfJtSbRFnrl66gCD8r8wcqzjFR6GI9SYHQ9jB4unSr/AkxtEQKqpYn6YSDG4QwOraPCMuIUo/JdXOY1QwxRtO6Kn/J/KeIVTIQ6aclplc4pidLAsQRT+DmCFVMGMlEA2Wy7uxmRHL/D5JqANTkQgnSVrXo9QOdd61duwztgm5vAA=; csm-hit=tb:APQKKMX4B2Z2MV2S1JXF+s-HGT2AWYXWDS8QKWWC9AA|1552889137810&t:1552889137810&adb:adblk_no",
        success: function (data) {
            var arr = [];
            var total_page;
            var elements3 = [];
            var pages = $("<div>").html(data)[0].getElementsByTagName("div")[0].getElementsByClassName("pagnDisabled");
            var pages1 = $("<div>").html(data)[0].getElementsByTagName("div")[0].getElementsByClassName("a-disabled");
            if (pages !== null) {
                for (var i = 0; i < pages.length; i++) {
                    total_page = pages[i].textContent;
                }
                console.log(total_page);
            }
            if (pages1 !== null) {

                for (var i = 0; i < pages1.length; i++) {
                    if (pages1[i].textContent === "Next→") {
                        total_page = $("<div>").html(data)[0].getElementsByTagName("div")[0].getElementsByClassName("a-selected")[0].textContent;

                    } else {
                        total_page = pages1[i].textContent;

                    }
                }
                console.log(total_page);
                // $('#max_number').val(total_page);
                // var temp = $('#max_number').value;
                // console.log(temp);

            }
            custome(total_page);

        }
    });

    function custome(total_page) {
       // var Temp = $("#max_number").val();
       // console.log(Temp);
        console.log(total_page);
        // var results = [];
        // var results1 = [];
        console.log(tablink);
        if (tablink.indexOf("page") > -1) {
            alert('1');
            var url = tablink.split('page=')[0];
            // var url1 = url[0];
            console.log(url);

            for (var i = 1; i <= total_page; i++) {

                $.ajax({
                    url: url + 'page=' + i,
                    // cookie: "session-id=134-2957114-6544908; session-id-time=2082787201l; i18n-prefs=USD; x-wl-uid=116zQWVfCXD3XF5tbcGzmjlktCxfx2YLpecB5enPYo5EQaeseR3+sZdmZkeOImso03T8E2hP0bcQ=; ubid-main=130-8488131-9755705; session-token=428030ryx+2CD5vDS4RNnm04iiq+fA/fvnQXAD23SnlbF4rAKkF9/XwMGUAlnAAGduxTecxHNKzJGJVfUGCkbtZd2FO4qpFgfJtSbRFnrl66gCD8r8wcqzjFR6GI9SYHQ9jB4unSr/AkxtEQKqpYn6YSDG4QwOraPCMuIUo/JdXOY1QwxRtO6Kn/J/KeIVTIQ6aclplc4pidLAsQRT+DmCFVMGMlEA2Wy7uxmRHL/D5JqANTkQgnSVrXo9QOdd61duwztgm5vAA=; csm-hit=tb:APQKKMX4B2Z2MV2S1JXF+s-HGT2AWYXWDS8QKWWC9AA|1552889137810&t:1552889137810&adb:adblk_no",
                    success: function (data) {
                        var arr = [];

                        var results = $("<div>").html(data)[0].getElementsByTagName("div")[0].getElementsByClassName("s-result-list")[0].getElementsByClassName("s-result-item");
                        // var results1 = $("<div>").html(data)[0].getElementsByTagName("div")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
                        console.log(results);
                        if (results !== null) {
                            for (var i = 0; i < results.length; i++) {
                                arr[i] = results[i].dataset.asin;
                            }
                            console.log(arr);
                        }
                        console.log(arr);
                        // console.log(results1);

                    }
                });
            }
        } else {
            alert('2');

            $.ajax({
                url: tablink + 'page=' + 1,
                cookie: "session-id=134-2957114-6544908; session-id-time=2082787201l; i18n-prefs=USD; x-wl-uid=116zQWVfCXD3XF5tbcGzmjlktCxfx2YLpecB5enPYo5EQaeseR3+sZdmZkeOImso03T8E2hP0bcQ=; ubid-main=130-8488131-9755705; session-token=428030ryx+2CD5vDS4RNnm04iiq+fA/fvnQXAD23SnlbF4rAKkF9/XwMGUAlnAAGduxTecxHNKzJGJVfUGCkbtZd2FO4qpFgfJtSbRFnrl66gCD8r8wcqzjFR6GI9SYHQ9jB4unSr/AkxtEQKqpYn6YSDG4QwOraPCMuIUo/JdXOY1QwxRtO6Kn/J/KeIVTIQ6aclplc4pidLAsQRT+DmCFVMGMlEA2Wy7uxmRHL/D5JqANTkQgnSVrXo9QOdd61duwztgm5vAA=; csm-hit=tb:APQKKMX4B2Z2MV2S1JXF+s-HGT2AWYXWDS8QKWWC9AA|1552889137810&t:1552889137810&adb:adblk_no",
                success: function (data) {
                    var next_page_href_link = [];
                    var next_page_href_link1 = [];
                    var arr = [];
                    var next_page_link1;

                    var results = $("<div>").html(data)[0].getElementsByTagName("div")[0].getElementsByClassName("s-result-list")[0].getElementsByClassName("s-result-item");
                    // var results1 = $("<div>").html(data)[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
                    console.log(results);
                    // console.log(results1);
                    if (results !== null) {
                        for (var i = 0; i < results.length; i++) {
                            arr[i] = results[i].dataset.asin;
                        }
                        console.log(arr);
                    }
                    console.log(arr);


                    // var next_page_href = $("<div>").html(data)[0].getElementsByClassName("pagnRA")[0].childNodes;
                    var next_page_href1 = $("<div>").html(data)[0].getElementsByClassName("a-last")[0].childNodes;

                    // console.log(next_page_href);
                    console.log(next_page_href1);

                    // if(next_page_href !== null) {
                    //     var href = $(next_page_href).attr("href");
                    //     next_page_link1 = href.split('page=')[0];
                    // }
                    // console.log(next_page_link1);

                    if(next_page_href1 !== null) {
                        var href_1 = $(next_page_href1).attr("href");
                         next_page_link1 = href_1.split('page=')[0];
                        console.log(next_page_link1);
                    }



                    chrome.tabs.getSelected(null, function (tab) {
                        var tablink1 = tab.url;

                        var newtablink = tablink1.split('/s')[0];
                        console.log(newtablink);
                        // var new_tab_link = newtablink[0];
                        // product_details(arr);

                         product_details(arr, newtablink);


                        // }

                        // for (var e = 1; e <= total_page; e++) {
                        //     // console.log(newtablink + next_page_link1 + 'page=' + e);
                        //
                        //     $.ajax({
                        //         url: newtablink + next_page_link1 + 'page=' + e,
                        //         cookie: "session-id=134-2957114-6544908; session-id-time=2082787201l; i18n-prefs=USD; x-wl-uid=116zQWVfCXD3XF5tbcGzmjlktCxfx2YLpecB5enPYo5EQaeseR3+sZdmZkeOImso03T8E2hP0bcQ=; ubid-main=130-8488131-9755705; session-token=428030ryx+2CD5vDS4RNnm04iiq+fA/fvnQXAD23SnlbF4rAKkF9/XwMGUAlnAAGduxTecxHNKzJGJVfUGCkbtZd2FO4qpFgfJtSbRFnrl66gCD8r8wcqzjFR6GI9SYHQ9jB4unSr/AkxtEQKqpYn6YSDG4QwOraPCMuIUo/JdXOY1QwxRtO6Kn/J/KeIVTIQ6aclplc4pidLAsQRT+DmCFVMGMlEA2Wy7uxmRHL/D5JqANTkQgnSVrXo9QOdd61duwztgm5vAA=; csm-hit=tb:APQKKMX4B2Z2MV2S1JXF+s-HGT2AWYXWDS8QKWWC9AA|1552889137810&t:1552889137810&adb:adblk_no",
                        //         success: function (data) {
                        //
                        //             var results = $("<div>").html(data)[0].getElementsByTagName("div")[0].getElementsByClassName("s-result-list")[0].getElementsByClassName("s-result-item");
                        //             // var results1 = $("<div>").html(data)[0].getElementsByTagName("ul")[0].getElementsByClassName("li");
                        //             console.log(results);
                        //             // console.log(results1);
                        //             if (results !== null) {
                        //                 for (var i = 0; i < results.length; i++) {
                        //                     arr[i] = results[i].dataset.asin;
                        //                 }
                        //                 console.log(arr);
                        //                 // product_details(arr);
                        //             }
                        //         }
                        //     });
                        // }
                    });
                }
            });
        }
        // console.log(results);
        // console.log(results1);


    }
    function product_details(arr, newtablink) {
// console.log(arr, newtablink);
        for (var i = 0; i < arr.length; ++i) {
            // console.log(newtablink + '/dp/' + arr[i]);

            alert("3333");
            $.ajax({
                url: newtablink + '/dp/' + arr[i],
                // cookie: "session-id=134-2957114-6544908; session-id-time=2082787201l; i18n-prefs=USD; x-wl-uid=116zQWVfCXD3XF5tbcGzmjlktCxfx2YLpecB5enPYo5EQaeseR3+sZdmZkeOImso03T8E2hP0bcQ=; ubid-main=130-8488131-9755705; session-token=428030ryx+2CD5vDS4RNnm04iiq+fA/fvnQXAD23SnlbF4rAKkF9/XwMGUAlnAAGduxTecxHNKzJGJVfUGCkbtZd2FO4qpFgfJtSbRFnrl66gCD8r8wcqzjFR6GI9SYHQ9jB4unSr/AkxtEQKqpYn6YSDG4QwOraPCMuIUo/JdXOY1QwxRtO6Kn/J/KeIVTIQ6aclplc4pidLAsQRT+DmCFVMGMlEA2Wy7uxmRHL/D5JqANTkQgnSVrXo9QOdd61duwztgm5vAA=; csm-hit=tb:APQKKMX4B2Z2MV2S1JXF+s-HGT2AWYXWDS8QKWWC9AA|1552889137810&t:1552889137810&adb:adblk_no",
                success: function (data) {
                    // console.log(data);

                    // var $parent = $(elem).parents('.prdtitem');
                    var productName = $("<div>").html(data)[0].getElementsByTagName("h1")[0].getElementsByTagName("span")[0].textContent;
                    var productPrice = $("<div>").html(data)[0].getElementsByTagName("td")[1].getElementsByTagName("span")[0];
                    var productImage = $("<div>").html(data)[0].getElementsByTagName("div")[0].getElementById("imgTagWrapperId");

                    // var productName = $parent.find('#productTitle').text();
                    // var productImage = $parent.find('#imgTagWrapperId').img.attr('src');
                    // var productPrice = $parent.find('#priceblock_ourprice');
                    console.log(productName);
                    console.log(productPrice);
                    console.log(productImage);
                    // textContent
                }
            });

        }
    }

});


//     });
// });