(function (window, k) {
    if (!window.AppstleIncluded && (!urlIsProductPage() || 'V1' === 'V1')) {
      window.AppstleIncluded = true;
      appstleLoadScript = function (src, callback) {
        var script = document.createElement("script");
        script.charset = "utf-8";
        script.async = true;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = k;
            callback && callback();
          }
        };
        document.getElementsByTagName("head")[0].appendChild(script)
      };
      appstleLoadScript("https://cdn.shopify.com/s/files/1/0363/3892/5612/t/5/assets/appstle-subscription.js?v=1636458754");

      window.RS = Window.RS || {};
      RS.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "div.customer.account",
            "atcButtonPlacement": "BEFORE",
            "subscriptionLinkPlacement": "BEFORE",
        },
        "useUrlWithCustomerId": false,
        "atcButtonSelector": "div.product-form__buttons",
        "moneyFormat": "{% raw %}\u00A3{{amount}}{% endraw %}",
        "oneTimePurchaseText": "One Time Purchase",
        "shop": "seans-loaf.myshopify.com",
        "deliveryText": "delivery",
        "purchaseOptionsText": "Purchase Options",
        "manageSubscriptionButtonText": "Manage Subscription",
        "subscriptionOptionText": "Subscription",
        "sellingPlanSelectTitle": "DELIVERY FREQUENCY",
        "subscriptionPriceDisplayText": "<b>Subscribe and Save<\/b> <span class='appstle_subscribesavetext'>{{{subscriptionPrice}}}<\/span>",
        "tooltipTitle": "Details",
        "api_key": "WPbdYEZn57",
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "<h4>Have complete control of your subscriptions<\/h4>\nSkip, reschedule, edit, cancel deliveries anytime matching your needs.\n<h4>For One Time Purchase<\/h4>\nChoose delivery date at checkout.",
        "tooltipDescriptionOnPrepaidPlan": "<b>Prepaid Plan Details<\/b><\/br> Total you are charged for {{totalPrice}} ( At every order {{pricePerDelivery}})",
        "tooltipDescriptionOnMultipleDiscount": "<b>Discount Details<\/b><\/br> Hello there my discount is {{discountOne}} and then {{discountTwo}}",
        "tooltipDescriptionCustomization": "<h4>Have complete control of your subscriptions<\/h4>\nSkip, reschedule, edit, cancel deliveries anytime matching your needs.\n<h4>For One Time Purchase<\/h4>\nChoose delivery date at checkout.",
        "orderStatusManageSubscriptionTitle": "Subscription",
        "orderStatusManageSubscriptionDescription": "Continue to your account to view and manage your subscriptions.",
        "orderStatusManageSubscriptionButtonText": "Manage your subscription",
        "subscriptionOptionSelectedByDefault" : true,
        "totalPricePerDeliveryText" : "{{prepaidPerDeliveryPrice}}\/delivery",
        "memberOnlySellingPlansJson": {},
        "nonMemberOnlySellingPlansJson": {},
        "widgetEnabled": true,
        "showTooltip" : true,
        "sortByDefaultSequence": false,
        "showSubOptionBeforeOneTime": false,
        "showStaticTooltip": true,
        "sellingPlanTitleText" : "{{sellingPlanName}}",
        "oneTimePriceText" : "{{price}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{price}}",
        "selectedPrepaidSellingPlanPriceText" : "{{pricePerDelivery}}",
        "selectedDiscountFormat" : "SAVE {{selectedDiscountPercentage}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/subscriptions' class='appstle_manageSubBtn' ><button class='btn' style='padding: 2px 20px'>Manage Subscription<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/subscriptions",
        "appstlePlanId": 5,
        "showCheckoutSubscriptionBtn": true,
        "disableLoadingJquery": false,
        "css": {
            "appstle_subscription_widget": {
                "margin-top": "" ,
                "margin-bottom": "",
            },

            "appstle_subscription_wrapper": {
                "border-width": "",
                "border-color": "",
            },

            "appstle_circle": {
                "border-color": "",
            },

            "appstle_dot": {
                "background-color": "",
            },

            "appstle_select": {
                "padding-top": "10px",
                "padding-bottom": "10px",
                "padding-left": "5px",
                "padding-right": "",
                "border-width": "",
                "border-style": "",
                "border-color": "",
                "border-radius": "5",
            },

            "tooltip_subscription_svg": {
                "fill": "",
            },

            "appstle_tooltip": {
                "color": "",
                "background-color": "#ffe5ae",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "#ffe5ae",
            },

            "appstle_subscription_final_price": {
                "color": "",
            },
            "appstle_widget_text_color": {
                "color": "",
            },
            "appstle_selected_background": {
                "background": "transparent",
            },
            "customCSS": "#appstle_subscription_widget0{\n\tmax-width:500px\n}\n#appstle_subscription_widget0 > div.appstle_subscription_wrapper > div:nth-child(1) > label {\n\tmargin-right: auto;\n\tmargin-bottom: 17px;\n}\n#appstle_subscription_widget0 > div.appstle_subscription_wrapper > div:nth-child(1) > span {\n    margin-top: 3em;\n    margin-left: 28px;\n    position: absolute;\n}\n\n\n.btn{\n    background-color: black !important;\n    color: white !important;\n      padding: 12px 30px  !important; \n}\n#appstle_subscription_widget0 > div.appstle_subscription_wrapper > div:nth-child(1) > span {\n    margin-top: -1em;\n    margin-left: 420px;\n    position: absolute;\n}\n#appstle_subscription_widget0 .appstle_subscription_wrapper_option:not(.appstle_include_dropdown) {\n    align-items: center;\n    padding-bottom: initial;\n}",
            "customerPortalCss": "",
            "priceSelector": "",
            "landingPagePriceSelector": "",
            "quickViewClickSelector": "",
            "badgeTop": "",
            "pricePlacement": "BEFORE",
        }
      };

    }

    function urlIsProductPage() {
    // return null != decodeURIComponent(window.location.pathname).match(/\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/)
    return decodeURIComponent(window.location.pathname).includes('/products/');
    }
  }
)(window);
