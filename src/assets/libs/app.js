function getToken(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

let url, message_url, socket, is_user, current;







function f() {
    let f = document.getElementsByClassName("user-chat");
    document
        .querySelectorAll(".chat-user-list li a")
        .forEach(function (e) {
            e && e.addEventListener("click", function (e) {
                f.forEach(function (e) {
                    e.classList.add("user-chat-show");
                });
                let t = document.querySelector(".chat-user-list li.active");
                t && t.classList.remove("active"),
                    this.parentNode.classList.add("active");
            });

        }),
        document
            .querySelectorAll(".sort-contact ul li")
            .forEach(function (e) {
                e && e.addEventListener("click", function (e) {
                    f.forEach(function (e) {
                        e.classList.add("user-chat-show");
                    });
                });
            }),
        document
            .querySelectorAll(".user-chat-remove")
            .forEach(function (e) {
                e.addEventListener("click", function (e) {
                    f.forEach(link => link.classList.remove('user-chat-show'));
                    current = ''
                });
            });
    let t = document.querySelector(".user-profile-sidebar");
    document.querySelectorAll(".user-profile-show").forEach(function (e) {
        e.addEventListener("click", function (e) {
            t.classList.toggle("d-block");
        });
    })

}

function F() {
    GLightbox({selector: ".popup-img", title: !1});
}

function Ai() {
        var a = document.getElementsByClassName("user-chat");
        document.querySelectorAll(".chat-user-list li a").forEach(function (e) {
            e.addEventListener("click", function (e) {
                a.forEach(function (e) {
                    e.classList.add("user-chat-show")
                });
                var t = document.querySelector(".chat-user-list li.active");
                t && t.classList.remove("active"), this.parentNode.classList.add("active")
            })
        }), document.querySelectorAll(".sort-contact ul li").forEach(function (e) {
            e.addEventListener("click", function (e) {
                a.forEach(function (e) {
                    e.classList.add("user-chat-show")
                })
            })
        }), document.querySelectorAll(".user-chat-remove").forEach(function (e) {
            e.addEventListener("click", function (e) {
                a.forEach(function (e) {
                    e.classList.remove("user-chat-show")
                    current = ''
                })
            })
        })
}
F(), Ai();