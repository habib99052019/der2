/*Filter Js Starts*/


$('.search-button').on('click', function(e) {
    var prop_type = $('#destination').text().toLowerCase();
    var prop_keyword = $('.search-input').val();
    var min_price = $('#min-price').val();
    var max_price = $('#max-price').val();
    var property_type = $('#property-type').val();
    var bedrooms = $('#bedrooms').val();
    
    
    if(prop_type=='buy')
    {
        window.location=base_url+'buy-property?paging=1&keyword_buy='+prop_keyword+'&property_type_buy='+property_type+'&max_bedrooms_buy='+bedrooms+'&min_price_buy='+min_price+'&max_price_buy='+max_price+'&buy_search=';
    }
    else
    {
         window.location=base_url+'rent-property?paging=1&keyword_rent='+prop_keyword+'&property_type_rent='+property_type+'&max_bedrooms_rent='+bedrooms+'&min_price_rent='+min_price+'&max_price_rent='+max_price+'&rent_search=';
    }
    
   
});



$('.offplan_btn').on('click',function(e){
    
     e.preventDefault();
    var url = base_url+'offplan-properties/';
    window.open(url, '_blank');
    
});


$(document).ready(function() {
    var availableTags = []; // Initialize as an empty array

    $('.search-input').on('keyup', function(e) {
        var $t = $(this);
        var search_location = $t.val();
        var prop_type = $('#destination').text().toLowerCase();

        $.ajax({
            url: base_url + 'ajax/filter_location.php',
            data: { prop_type: prop_type, search_location: search_location },
            type: 'POST',
            dataType: 'json',
            success: function(r) {
                if (r.result) {
                    availableTags = r.result; // Assuming r.result is an array of tags
                    $(".search-input").autocomplete("option", "source", availableTags);
                }
            }
        });
    });

    // Initialize the autocomplete widget
    $(".search-input").autocomplete({
        source: availableTags,
        appendTo: ".autocomplete-suggestions" // Specify the container where the suggestions will be appended
    });
});





/*Filter Js Ends*/