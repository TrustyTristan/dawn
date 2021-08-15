(function (window, k) {
    if (!window.AppstleIncluded) {
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
      appstleLoadScript("https://cdn.shopify.com/s/files/1/0363/3892/5612/t/5/assets/appstle-subscription.js?v=1628861215");

      window.RS = Window.RS || {};
      RS.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "div.grid.myaccount",
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
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "<strong>Have complete control of your subscriptions<\/strong><br\/><br\/>Skip, reschedule, edit, cancel deliveries anytime matching your needs.\n<br\/><br\/>\n<strong>For One Time Purchase<\/stong><br\/><br\/>Choose delivery date at checkout.",
        "tooltipDescriptionOnPrepaidPlan": "<b>Prepaid Plan Details<\/b><\/br> Total you are charged for {{totalPrice}} ( At every order {{pricePerDelivery}})",
        "tooltipDescriptionOnMultipleDiscount": "<b>Discount Details<\/b><\/br> Hello there my discount is {{discountOne}} and then {{discountTwo}}",
        "tooltipDescriptionCustomization": "<strong>Have complete control of your subscriptions<\/strong><br\/>Skip, reschedule, edit, cancel deliveries anytime matching your needs.\n<br\/><br\/>\n<strong>For One Time Purchase<\/strong><br\/>Choose delivery date at checkout.",
        "orderStatusManageSubscriptionTitle": "Subscription",
        "orderStatusManageSubscriptionDescription": "Continue to your account to view and manage your subscriptions.",
        "orderStatusManageSubscriptionButtonText": "Manage your subscription",
        "subscriptionOptionSelectedByDefault" : "true",
        "memberOnlySellingPlansJson": {},
        "nonMemberOnlySellingPlansJson": {},
        "widgetEnabled": true,
        "showTooltip" : true,
        "sortByDefaultSequence": false,
        "showStaticTooltip": true,
        "sellingPlanTitleText" : "{{sellingPlanName}}",
        "oneTimePriceText" : "{{price}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{price}}",
        "selectedPrepaidSellingPlanPriceText" : "{{pricePerDelivery}}",
        "selectedDiscountFormat" : "SAVE {{selectedDiscountPercentage}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/subscriptions' class='appstle_manageSubBtn' ><button class='btn' style='padding: 2px 20px'>Manage Subscription<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/subscriptions",
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
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "border-width": "",
                "border-style": "",
                "border-color": "",
                "border-radius": "",
            },

            "tooltip_subscription_svg": {
                "fill": "",
            },

            "appstle_tooltip": {
                "color": "",
                "background-color": "",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "",
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
            "customCSS": "#appstle_subscription_widget0{\n\tmax-width:500px\n}\n#appstle_subscription_widget0 > div.appstle_subscription_wrapper > div:nth-child(1) > label {\n\tmargin-right: auto;\n\tmargin-bottom: 17px;\n}\n#appstle_subscription_widget0 > div.appstle_subscription_wrapper > div:nth-child(1) > span {\n    margin-top: 3em;\n    margin-left: 28px;\n    position: absolute;\n}\n.buunto-date-picker.buunto-product-page {\n\tmargin-bottom: 0px !important;\n}",
            "customerPortalCss": "",
            "priceSelector": "span.price-item.price-item--regular",
            "badgeTop": "",
            "pricePlacement": "BEFORE",
        }
      };

    }
  }
)(window);
