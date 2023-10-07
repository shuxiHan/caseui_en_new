webpackJsonp([4], {
    Ie5r: function (e, r) {
    }, mTzT: function (e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {value: !0});
        var t = n("/5sW"), o = n("mtWM"), s = n.n(o), i = {
            components: {axios: s.a}, data: function () {
                return {
                    formInline: {user: "", password: "", role: ""},
                    submitting: !1,
                    ruleInline: {
                        user: [{required: !0, message: "Please fill in the user name", trigger: "blur"}],
                        password: [{required: !0, message: "Please fill in the password.", trigger: "blur"}]
                    }
                }
            }, methods: {
                createNew: function () {
                    window.location = "/profile"
                }, handleSubmit: function (e, r) {
                    var n = this;
                    this.$refs[e].validate(function (e) {
                        if (e) {
                            var t = "http://localhost:9191/login?name=" + n.formInline.user + "&password=" + n.formInline.password + "&role=" + n.formInline.role + "&action=" + r;
                            s.a.post(t).then(function (e) {
                                n.$Notice.success({
                                    title: "Success!",
                                    desc: "login" === r ? "User logged in." : "User created."
                                }), n.submitting = !0, n.$http.post("/checkLogin", "username=" + n.formInline.user + "&password=" + n.formInline.password, {headers: {"Content-Type": "application/x-www-form-urlencoded"}}).then(function (e) {
                                    200 === e.data.code ? window.location = "/index?_uuid=" + e.data.uuid + "&_user=" + n.formInline.user : (n.$Message.error({
                                        content: e.data.msg,
                                        duration: 10,
                                        closable: !0
                                    }), n.submitting = !1)
                                }).catch(function (e) {
                                    console.log(e), n.submitting = !1, n.$Message.error("Something wrong when sending data!")
                                })
                            }).catch(function (e) {
                                console.log(e), n.$Message.error("Something wrong when sending data!")
                            })
                        }
                    })
                }
            }
        }, a = {
            render: function () {
                var e = this, r = e.$createElement, n = e._self._c || r;
                return n("Row", {
                    attrs: {
                        span: 24,
                        type: "flex",
                        justify: "center",
                        align: "middle"
                    }
                }, [n("Col", [n("Card", {
                    staticStyle: {
                        "margin-top": "150px",
                        "min-width": "400px",
                        "text-align": "center"
                    }
                }, [n("Form", {
                    ref: "form",
                    attrs: {model: e.formInline, rules: e.ruleInline, method: "post", disabled: e.submitting},
                    nativeOn: {
                        submit: function (e) {
                            e.preventDefault()
                        }
                    }
                }, [n("h1", [e._v("Please login")]), e._v(" "), n("Divider"), e._v(" "), n("FormItem", {attrs: {prop: "user"}}, [n("Input", {
                    attrs: {
                        type: "text",
                        placeholder: "Username",
                        name: "name"
                    }, model: {
                        value: e.formInline.user, callback: function (r) {
                            e.$set(e.formInline, "user", r)
                        }, expression: "formInline.user"
                    }
                }, [n("Icon", {
                    attrs: {slot: "prepend", type: "ios-person-outline"},
                    slot: "prepend"
                })], 1)], 1), e._v(" "), n("FormItem", {attrs: {prop: "password"}}, [n("Input", {
                    attrs: {
                        type: "password",
                        placeholder: "Password"
                    }, model: {
                        value: e.formInline.password, callback: function (r) {
                            e.$set(e.formInline, "password", r)
                        }, expression: "formInline.password"
                    }
                }, [n("Icon", {
                    attrs: {slot: "prepend", type: "ios-lock-outline"},
                    slot: "prepend"
                })], 1)], 1), e._v(" "), n("FormItem", {attrs: {prop: "role"}}, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.formInline.role,
                        expression: "formInline.role"
                    }],
                    attrs: {type: "radio", id: "cus", value: "cus"},
                    domProps: {checked: e._q(e.formInline.role, "cus")},
                    on: {
                        change: function (r) {
                            return e.$set(e.formInline, "role", "cus")
                        }
                    }
                }), e._v(" "), n("label", {attrs: {for: "cus"}}, [e._v("Customer/User")]), e._v(" "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.formInline.role,
                        expression: "formInline.role"
                    }],
                    attrs: {type: "radio", id: "sys", value: "sys"},
                    domProps: {checked: e._q(e.formInline.role, "sys")},
                    on: {
                        change: function (r) {
                            return e.$set(e.formInline, "role", "sys")
                        }
                    }
                }), e._v(" "), n("label", {attrs: {for: "sys"}}, [e._v("System/Admin")])]), e._v(" "), n("FormItem", [n("Button", {
                    attrs: {type: "primary"},
                    on: {
                        click: function (r) {
                            return e.handleSubmit("form", "login")
                        }
                    }
                }, [e._v("Log In")]), e._v(" "), n("Button", {
                    on: {
                        click: function (r) {
                            return e.handleSubmit("form", "signup")
                        }
                    }
                }, [e._v("Sign Up")])], 1)], 1)], 1)], 1)], 1)
            }, staticRenderFns: []
        }, l = n("VU/8")(i, a, !1, null, null, null).exports, u = n("b3L9"), c = n.n(u);
        n("Ie5r");
        n("oFuF").a.initAxios(s.a, c.a, t.default), t.default.use(c.a), new t.default({
            el: "#app",
            render: function (e) {
                return e(l)
            }
        })
    }, oFuF: function (e, r, n) {
        "use strict";
        var t = n("//Fk"), o = n.n(t), s = n("Dd8w"), i = n.n(s);
        r.a = {
            getUUid: function () {
                for (var e = [], r = 0; r < 36; r++) e[r] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
                return e[14] = "4", e[19] = "0123456789abcdef".substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-", e.join("").replace(/-/g, "")
            }, initAxios: function (e, r, n) {
                var t = this;
                e.defaults.timeout = 15e3, e.defaults.withCredentials = !0, e.interceptors.request.use(function (e) {
                    var r = t.parseUrl(window.location.href);
                    return e.headers && "application/x-www-form-urlencoded" === e.headers["Content-Type"] ? e : (e.params = i()({}, e.params ? e.params : {}, {_t: Date.parse(new Date)}, r), e)
                }, function (e) {
                    return r.Notice.error({
                        title: "Error",
                        desc: "Something wrong when requesting data!"
                    }), o.a.reject(e)
                }), e.interceptors.response.use(function (e) {
                    return e
                }, function (e) {
                    return console.log(e.response), r.Notice.error({
                        title: "Error",
                        desc: e.response.data.message
                    }), o.a.reject(e)
                }), n.prototype.$http = e
            }, parseUrl: function (e) {
                var r = e.split("?")[1];
                if (!r) return {};
                var n = {};
                return r.split("&").forEach(function (e) {
                    var r = e.split("=")[1], t = e.split("=")[0];
                    n[t] = r
                }), n
            }
        }
    }
}, ["mTzT"]);
//# sourceMappingURL=login.b9fb00171c0f00d923a3.js.map