/**
 * Slick Modals - HTML5 and CSS3 Powered Modal Popups
 * ---------------------------------------------------
 * @file      Defines main jQuery plugin
 * @author    Capelle @ Codecanyon
 * @copyright @author
 * @version   5.0
 * @url       https://codecanyon.net/item/slick-modal-css3-powered-popups/12335988
 */

! function(g) {
    "use strict";
    if (!g || void 0 === g) return u("[Slick Modals] No jQuery library detected. Load SlickModals after jQuery has been loaded on the page.");
    var s = {
            restrict_hideOnUrls: [],
            restrict_cookieSet: !1,
            restrict_cookieName: "slickModal-1",
            restrict_cookieScope: "domain",
            restrict_cookieDays: "30",
            restrict_cookieSetClass: "setSmCookie-1",
            restrict_dateRange: !1,
            restrict_dateRangeStart: "",
            restrict_dateRangeEnd: "",
            restrict_dateRangeServerTime: !0,
            restrict_dateRangeServerTimeFile: "",
            restrict_dateRangeServerTimeZone: "Europe/London",
            restrict_showAfterVisits: 1,
            restrict_showAfterVisitsResetWhenShown: !1,
            popup_type: "none",
            popup_delayedTime: "1s",
            popup_scrollDistance: "400px",
            popup_scrollHideOnUp: !1,
            popup_exitShowAlways: !1,
            popup_autoClose: !1,
            popup_autoCloseAfter: "5s",
            popup_openWithHash: !1,
            popup_redirectOnClose: !1,
            popup_redirectOnCloseUrl: "",
            popup_redirectOnCloseTarget: "_blank",
            popup_redirectOnCloseTriggers: "overlay button",
            popup_position: "center",
            popup_animation: "fadeIn",
            popup_closeButtonEnable: !0,
            popup_closeButtonStyle: "cancel simple",
            popup_closeButtonAlign: "right",
            popup_closeButtonPlace: "outside",
            popup_closeButtonText: "X",
            popup_reopenClass: "open-sm",
            popup_reopenClassTrigger: "click",
            popup_reopenStickyButtonEnable: !1,
            popup_reopenStickyButtonText: "Open popup",
            popup_enableESC: !0,
            popup_bodyClass: "",
            popup_wrapperClass: "",
            popup_draggableEnable: !1,
            popup_allowMultipleInstances: 1,
            popup_css: {
                width: "480px",
                height: "auto",
                background: "#fff",
                margin: "24px",
                padding: "24px",
                "animation-duration": "0.4s"
            },
            overlay_isVisible: !0,
            overlay_closesPopup: !0,
            overlay_animation: "fadeIn",
            overlay_css: {
                background: "rgba(0, 0, 0, .8)",
                "animation-duration": "0.4s",
                "animation-delay": "0s"
            },
            content_loadViaAjax: !1,
            content_animate: !1,
            content_animation: "zoomIn",
            content_css: {
                "animation-duration": "0.4s",
                "animation-delay": "0.4s"
            },
            page_animate: !1,
            page_animation: "scale",
            page_animationDuration: ".4s",
            page_blurRadius: "1px",
            page_scaleValue: ".9",
            page_moveDistance: "30%",
            mobile_show: !0,
            mobile_breakpoint: "480px",
            mobile_position: "bottomCenter",
            mobile_css: {
                width: "100%",
                height: "auto",
                background: "#fff",
                margin: "0",
                padding: "18px",
                "animation-duration": "0.4s"
            },
            callback_beforeInit: g.noop,
            callback_afterInit: g.noop,
            callback_beforeOpen: g.noop,
            callback_afterOpen: g.noop,
            callback_afterVisible: g.noop,
            callback_beforeClose: g.noop,
            callback_afterClose: g.noop,
            callback_afterHidden: g.noop
        },
        a = "SlickModals",
        l = "sm-",
        c = "[Slick Modals] ",
        i = " can be passed into this method.";

    function u(t) {
        console.log(t)
    }

    function o(t, e) {
        this.$el = g(t), this.$wrapper = "", this.$overlay = "", this.$popup = "", this.settings = g.extend(!0, {}, s, e), this.autoCloseTimer = null, this.ajaxContentLoaded = 0, this._build()
    }
    o.prototype = {
        constructor: o,
        _build: function() {
            if ("true" !== this.$el.attr("data-sm-init")) return this.$el.hide(), u(c + 'Element is missing data-sm-init="true" attribute.');
            this.settings.callback_beforeInit(), this._createParent(), this.settings.overlay_isVisible && this._createOverlay(), this.settings.popup_reopenStickyButtonEnable && this._createStickyButton(), this._createPopup(), this.settings.content_animate && this._contentAnimate(), this._createEvents(), this._checkInitRestrictions()
        },
        _createParent: function() {
            this.$el.wrapAll('<div class="sm-wrapper"></div>'), this.$wrapper = this.$el.parent();
            var t = this.settings.popup_type,
                e = 0;
            switch (!0) {
                case "delayed" === t:
                    e = this.settings.popup_delayedTime;
                    break;
                case "scrolled" === t:
                    e = this.settings.popup_scrollDistance
            }
            this.$wrapper.attr({
                "data-sm-type": t,
                "data-sm-type-val": e
            }), this.settings.popup_autoClose && this.$wrapper.attr({
                "data-sm-autoClose": "enable",
                "data-sm-autoClose-after": this.settings.popup_autoCloseAfter
            })
        },
        _createOverlay: function() {
            this.$wrapper.prepend('<div class="sm-overlay"></div>'), this.$overlay = this.$wrapper.children(".sm-overlay"), this.$overlay.attr({
                "data-sm-animated": !0,
                "data-sm-close": this.settings.overlay_closesPopup,
                "data-sm-effect": this.settings.overlay_animation
            }).css(this.settings.overlay_css)
        },
        _createStickyButton: function() {
            if ("" === this.settings.popup_reopenClass) return u(c + 'Sticky button must have defined "popup_reopenClass" within the plugin settings.');
            g("body").append('<div class="sm-sticky-button ' + this.settings.popup_reopenClass + '">' + this.settings.popup_reopenStickyButtonText + "</div>")
        },
        _createPopup: function() {
            this.$el.attr("data-sm-init", "false").wrapAll('<div class="sm-popup"></div>'), this.$popup = this.$wrapper.children(".sm-popup");
            var t = g(window).width() <= parseInt(this.settings.mobile_breakpoint),
                e = null;
            (e = t ? this.settings.mobile_css : this.settings.popup_css)["animation-delay"] = (this.settings.overlay_isVisible ? parseFloat(this.settings.overlay_css["animation-duration"]) / 2 : 0) + "s", this.$popup.attr({
                "data-sm-animated": !0,
                "data-sm-position": t ? this.settings.mobile_position : this.settings.popup_position,
                "data-sm-effect": this.settings.popup_animation
            }).css(e).prepend(this.settings.popup_closeButtonEnable ? '<div class="sm-button" data-sm-button-style="' + this.settings.popup_closeButtonStyle + '" data-sm-button-align="' + this.settings.popup_closeButtonAlign + '" data-sm-button-place="' + this.settings.popup_closeButtonPlace + '" data-sm-button-text="' + this.settings.popup_closeButtonText + '" data-sm-close="true"></div>' : "", this.settings.popup_draggableEnable ? '<div class="sm-draggable"></div>' : ""), this._popupPositionCorrect()
        },
        _contentAnimate: function() {
            this.$el.attr({
                "data-sm-animated": !0,
                "data-sm-effect": this.settings.content_animation
            }).css(this.settings.content_css)
        },
        _checkInitRestrictions: function() {
            var a, e, o = this;

            function s() {
                return !!o.settings.restrict_cookieSet && -1 < document.cookie.indexOf(o.settings.restrict_cookieName)
            }

            function i() {
                if (!o.settings.restrict_hideOnUrls.length) return !1;
                for (var t = o.settings.restrict_hideOnUrls, e = 0; e < t.length; e++) {
                    var s = t[e],
                        i = window.location.pathname;
                    if (s instanceof RegExp && s.test(i) || "string" == typeof s && -1 < i.indexOf(s)) return !0
                }
                return !1
            }

            function n() {
                return !o.settings.mobile_show && (!o.settings.mobile_show && g(window).width() <= parseInt(o.settings.mobile_breakpoint))
            }

            function p() {
                var t = parseInt(o.settings.restrict_showAfterVisits);
                if (t <= 1) return !1;
                var e = l + "visits-" + o.$el.attr("class");
                if (1 < t) {
                    var s = localStorage.getItem(e);
                    return null !== s ? parseInt(s) === t - 1 ? (o.settings.restrict_showAfterVisitsResetWhenShown && localStorage.removeItem(e), !1) : (localStorage.setItem(e, parseInt(s) + 1), !0) : (localStorage.setItem(e, "1"), !0)
                }
                localStorage.removeItem(e)
            }

            function r(t) {
                o.settings.callback_afterInit(), t || o.openPopup()
            }
            o.settings.restrict_dateRange ? (a = function(t) {
                r(!!(s() || i() || n() || o._activeInstanceExist() || p() || t))
            }, e = function(t) {
                function e(t) {
                    var e = new Date(t.split(",")[0] + "T" + t.split(",")[1].replace(" ", "")).getTime();
                    return isNaN(e) ? u(c + "Invalid date format.") : e
                }
                var s = e(o.settings.restrict_dateRangeStart),
                    i = e(o.settings.restrict_dateRangeEnd);
                a(!(s < t && t < i && s < i))
            }, o.settings.restrict_dateRangeServerTime && "" !== o.settings.restrict_dateRangeServerTimeFile ? g.ajax({
                url: o.settings.restrict_dateRangeServerTimeFile,
                type: "POST",
                data: {
                    timezone: o.settings.restrict_dateRangeServerTimeZone
                },
                dataType: "json",
                success: function(t) {
                    e(new Date(t).getTime())
                },
                error: function() {
                    u(c + "Ajax request error upon retrieving server time.")
                }
            }) : e((new Date).getTime())) : r(!!(s() || i() || n() || o._activeInstanceExist() || p()))
        },
        _activeInstanceExist: function() {
            return !this.settings.popup_allowMultipleInstances && 0 < g(".sm-wrapper.sm-active").length && (u(c + "Another Slick Modal instance is already active."), !0)
        },
        _popupPositionCorrect: function() {
            var t = this.$popup.attr("data-sm-position");
            switch (!0) {
                case "center" === t:
                    this.$popup.css("margin", "auto");
                    break;
                case "bottomCenter" === t || "topCenter" === t:
                    this.$popup.css({
                        "margin-left": "auto",
                        "margin-right": "auto"
                    });
                    break;
                case "right" === t || "left" === t:
                    this.$popup.css({
                        "margin-top": "auto",
                        "margin-bottom": "auto"
                    })
            }
        },
        _popupCalculateHeight: function() {
            var t = 0;
            this.$popup.children().not(".sm-button").each(function() {
                t += g(this).outerHeight(!0)
            }), this.$popup.height(t)
        },
        _createEvents: function() {
            var e = this;
            if (0 < e.$wrapper.find('[data-sm-close="true"]').length && e.$wrapper.find('[data-sm-close="true"]').each(function() {
                    var t = g(this);
                    t.on("click", function() {
                        e.closePopup(), e.settings.popup_redirectOnClose && -1 < e.settings.popup_redirectOnCloseTriggers.indexOf(t.attr("class").replace("sm-", "")) && -1 === e.settings.popup_redirectOnCloseTriggers.indexOf("close") && e._redirectOnClose()
                    })
                }), "" !== e.settings.popup_reopenClass && g("body").on("click" === e.settings.popup_reopenClassTrigger ? "click" : "mouseover", "." + e.settings.popup_reopenClass, function(t) {
                    g(t.target).is("a") && t.preventDefault(), e.openPopup("instant")
                }), e.settings.popup_enableESC && g(window).on("keydown", function(t) {
                    27 === t.keyCode && e._wrapperActive() && e.closePopup()
                }), e.settings.popup_openWithHash) {
                var t = e.settings.popup_openWithHash,
                    s = !1 !== t && "" !== t && "#" === t.charAt(0);
                s && g(window).on("load hashchange", function() {
                    s && t === window.location.hash && e.openPopup("instant")
                })
            }
            if (this.settings.popup_draggableEnable) {
                var i, a, o, n, p = p || !1,
                    r = e.$popup,
                    l = isNaN(parseInt(r.css("margin-top"))) ? 0 : parseInt(r.css("margin-top")),
                    c = isNaN(parseInt(r.css("margin-left"))) ? 0 : parseInt(r.css("margin-left")),
                    u = "auto" === r.css("margin"),
                    d = function(t) {
                        r.css({
                            top: t.clientY - i + o + "px",
                            left: t.clientX - a + n + "px"
                        })
                    };
                r.children(".sm-draggable").on("mousedown", function(t) {
                    p = !0, i = t.clientY + l, a = t.clientX + c, o = r.offset().top, n = r.offset().left, u && (r.css("margin", "0px"), d(t), u = !1), g(window).on("mousemove", function(t) {
                        if (p) return d(t), !1
                    }), g(window).on("mouseup", function() {
                        p = !1
                    })
                })
            }
        },
        _setCookie: function() {
            var t = parseInt(this.settings.restrict_cookieDays),
                e = new Date,
                s = "/";
            "page" === this.settings.restrict_cookieScope && (s = window.location.href), e.setTime(e.getTime() + 24 * t * 60 * 60 * 1e3), document.cookie = this.settings.restrict_cookieName + "=1; path=" + s + "; expires=" + (0 < t ? e.toGMTString() : 0)
        },
        _redirectOnClose: function() {
            var t = this.settings.popup_redirectOnCloseUrl;
            "" !== t && -1 < t.indexOf("http") ? window.open(t, this.settings.popup_redirectOnCloseTarget) : u(c + "Redirect URL is empty or not valid.")
        },
        _loadContentViaAjax: function() {
            if (!this.ajaxContentLoaded && "" !== this.settings.content_loadViaAjax) {
                var e = this;
                g.ajax({
                    url: e.settings.content_loadViaAjax,
                    type: "GET",
                    dataType: "html",
                    success: function(t) {
                        e.$el.html(t), e._popupCalculateHeight(), e.ajaxContentLoaded = 1
                    },
                    error: function() {
                        u(c + "Ajax request error upon retrieving the content.")
                    }
                })
            }
        },
        _pageAnimation: function(t) {
            var e = this.settings.page_animation,
                s = g("body").children().not(".sm-wrapper, .sm-sticky-button, script, style");
            if ("enable" === t) {
                switch (!0) {
                    case "blur" === e:
                        s.css({
                            filter: "blur(" + this.settings.page_blurRadius + ")",
                            "transition-duration": this.settings.page_animationDuration
                        });
                        break;
                    case "scale" === e:
                        s.css({
                            transform: "scale(" + this.settings.page_scaleValue + ")",
                            "transition-duration": this.settings.page_animationDuration
                        });
                        break;
                    case -1 < e.indexOf("move"):
                        var i = "",
                            a = "";
                        switch (!0) {
                            case "moveUp" === e:
                                i = "Y", a = "-";
                                break;
                            case "moveDown" === e:
                                i = "Y", a = "";
                                break;
                            case "moveLeft" === e:
                                i = "X", a = "-";
                                break;
                            case "moveRight" === e:
                                i = "X", a = ""
                        }
                        s.css({
                            transform: "translate" + i + "(" + a + this.settings.page_moveDistance + ")",
                            "transition-duration": this.settings.page_animationDuration
                        })
                }
                g("body").addClass(l + "pageAnimated")
            } else s.css({
                transform: "",
                filter: ""
            }), g("body").removeClass(l + "pageAnimated")
        },
        _wrapperActive: function() {
            return this.$wrapper.hasClass(l + "active")
        },
        _prepareClose: function() {
            var t = this,
                e = t.$popup.css("animation-duration"),
                s = t.settings.overlay_isVisible ? t.$overlay.css("animation-delay") : 0,
                i = t.$el.css("animation-delay") || 0,
                a = t.$popup.css("animation-delay") || 0;
            t.settings.overlay_isVisible && t.$overlay.css("animation-delay", e), t.settings.content_animate && t.$el.css("animation-delay", "0s"), t.$popup.css("animation-delay", "0s");
            var o = 1e3 * ((t.settings.overlay_isVisible ? parseFloat(t.$overlay.css("animation-duration")) : 0) + parseFloat(e));
            t._togglePopup("disable", o, a, s, i)
        },
        _togglePopup: function(t, e, s, i, a) {
            var o = this,
                n = "enable" === t;
            n ? (o.settings.callback_beforeOpen(), o.$wrapper.addClass(l + "active"), "" !== o.settings.popup_bodyClass && g("body").addClass(o.settings.popup_bodyClass), "" !== o.settings.popup_wrapperClass && o.$wrapper.addClass(o.settings.popup_wrapperClass), o.settings.content_loadViaAjax && o._loadContentViaAjax(), setTimeout(function() {
                o.settings.callback_afterVisible(), "enable" === o.$wrapper.attr("data-sm-autoClose") && o.autoClose()
            }, 1e3 * (parseFloat(o.$popup.css("animation-delay")) + parseFloat(o.$popup.css("animation-duration"))) + e)) : (o.settings.callback_afterClose(), o.$wrapper.removeClass(l + "active"), o.settings.page_animate && o._pageAnimation("disable")), setTimeout(function() {
                n ? (o.settings.callback_afterOpen(), o.$wrapper.show(), "auto" === o.$popup[0].style.height && o._popupCalculateHeight(), o.settings.page_animate && o._pageAnimation("enable")) : (o.settings.overlay_isVisible && o.$overlay.css("animation-delay", i), o.settings.content_animate && o.$el.css("animation-delay", a), o.$popup.css("animation-delay", s), o.$wrapper.hide(), o.settings.callback_afterHidden(), "" !== o.settings.popup_bodyClass && g("body").removeClass(o.settings.popup_bodyClass), "" !== o.settings.popup_wrapperClass && o.$wrapper.removeClass(o.settings.popup_wrapperClass), "enable" === o.$wrapper.attr("data-sm-autoClose") && clearTimeout(o.autoCloseTimer))
            }, e)
        },
        _typeController: function(t, e) {
            var s = this,
                i = t || s.$wrapper.attr("data-sm-type"),
                a = e || parseFloat(s.$wrapper.attr("data-sm-type-val"));
            switch (!0) {
                case "delayed" === i:
                    s._togglePopup("enable", 1e3 * a);
                    break;
                case "scrolled" === i:
                    var o = 0,
                        n = 0;
                    g(document).on("scroll", function() {
                        var t = g(this).scrollTop();
                        a < t && !o && (s._togglePopup("enable", 0), o = 1), s.settings.popup_scrollHideOnUp && t < a && o && !n && (s.closePopup(), n = 1, g(document).unbind("scroll"))
                    });
                    break;
                case "exit" === i:
                    var p = 0;
                    g(document).on("mouseleave", function() {
                        p || (s.settings.popup_exitShowAlways || (p = 1, g(document).unbind("mouseleave")), s._togglePopup("enable", 0))
                    });
                    break;
                case "instant" === i:
                    s._togglePopup("enable", 0)
            }
        },
        openPopup: function(t, e) {
            if (this._wrapperActive()) return u(c + "This popup instance is already active.");
            this._activeInstanceExist() || this._typeController(t, e)
        },
        closePopup: function() {
            if (!this._wrapperActive()) return u(c + "Popup is already closed.");
            this.settings.callback_beforeClose(), this._prepareClose(), this.settings.restrict_cookieSet && this._setCookie(), this.settings.popup_redirectOnClose && -1 < this.settings.popup_redirectOnCloseTriggers.indexOf("close") && this._redirectOnClose()
            $('.openPreview').html('Preview with transitions');
            $('.openPreview').attr('disabled', false);
            $('.text-field-3.w66.w-input').attr('disabled', false);
        },
        styleElement: function(t, e) {
            if ("object" != typeof e) return u(c + "Only object with CSS properties" + i);
            switch (!0) {
                case "overlay" === t && this.settings.overlay_isVisible:
                    this.$overlay.css(e), 0 < this.$popup.length && e["animation-duration"] && this.$popup.css("animation-delay", parseFloat(e["animation-duration"]) / 2 + "s");
                    break;
                case "popup" === t:
                    this.$popup.css(e), this._popupPositionCorrect();
                    break;
                case "content" === t:
                    this.$el.css(e)
            }
        },
        popupPosition: function(t) {
            if ("string" != typeof t) return u(c + "Only string" + i);
            this.$popup.attr("data-sm-position", t), this._popupPositionCorrect()
        },
        setEffect: function(t, e) {
            if ("string" != typeof t || "string" != typeof e) return u(c + "Only strings" + i);
            switch (!0) {
                case "overlay" === t && this.settings.overlay_isVisible:
                    this.$overlay.attr("data-sm-effect", e);
                    break;
                case "popup" === t:
                    this.$popup.attr("data-sm-effect", e);
                    break;
                case "content" === t:
                    this.$el.attr("data-sm-effect", e)
            }
        },
        setType: function(t, e) {
            this.$wrapper.attr({
                "data-sm-type": t,
                "data-sm-type-val": e
            })
        },
        autoClose: function(t, e) {
            var s = this;
            s.$wrapper.attr({
                "data-sm-autoClose": t,
                "data-sm-autoClose-after": e
            }), t = t || s.$wrapper.attr("data-sm-autoClose"), e = e || s.$wrapper.attr("data-sm-autoClose-after"), "enable" === t && (s.autoCloseTimer = setTimeout(function() {
                s.closePopup()
            }, 1e3 * parseFloat(e)))
        },
        destroy: function() {
            g("." + this.settings.popup_reopenClass).on("click" === this.settings.popup_reopenClassTrigger ? "click" : "mouseover", function() {
                return !1
            }), this.$el.remove(), this.$wrapper.remove(), this.$overlay.remove(), this.$popup.remove(), delete this.$el, delete this.$wrapper, delete this.$overlay, delete this.$popup
        }
    }, g.fn[a] = function(s) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var t = g(this),
                e = t.data(a);
            if (e) {
                if ("string" == typeof s) try {
                    e[s].apply(e, i)
                } catch (t) {
                    u(c + "Method does not exist in Slick Modals.")
                }
            } else t.data(a, new o(this, s))
        })
    }
}(jQuery);