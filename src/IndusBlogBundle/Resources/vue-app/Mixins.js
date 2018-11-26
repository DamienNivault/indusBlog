import Vue from 'vue';

Vue.mixin({
    methods: {

        getShortDate: timestamp => {
            let date = new Date(timestamp * 1000)

            return date.toLocaleDateString("fr-fr", {
                year: "2-digit",
                month: "short",
                day: "numeric"
            })
        },

        getFullDate: timestamp => {
            let date = new Date(timestamp * 1000)

            return date.toLocaleDateString("fr-fr", {
                year: "numeric",
                month: "long",
                weekday: "long",
                day: "numeric"
            })
        },

        generateUuid: () => {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c === "x" ? r : (r & 0x3 | 0x8);

                return v.toString(16);
            });
        },
        nameUnique: (name, arr) => {
            var reg, res, nb;

            name = name.trim().replace(/\s+/g, ' ');
            if (arr.indexOf(name) > -1) {
                reg = new RegExp('^' + name + ' \\((\\d+)\\)$');
                nb = arr.reduce(function (nb, str) {
                    res = reg.exec(str);
                    return res ? Math.max(nb, +res[1]) : nb;
                }, 1);
                return `${name} (${nb + 1})`;
            }
            return name;
        }

    }
})
