module.exports = {
  head: {
    title: "sikota-api",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt"
      },
      { name: "author", content: "Malik" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ]
  },
  plugins: ['~/plugins/bootstrap'],
  static: {
    prefix: false
  },
  components: true,
}