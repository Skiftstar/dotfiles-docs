import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: ".dotfiles wiki",
  description: "Skiftstar Dotfiles",
  head: [
    ['link', { rel: 'icon', href: '/media/logo.svg' }] 
  ],
  themeConfig: {
    logo: "/media/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/getting-started/about" },
      { text: "Credits", link: "/other/credits" },
    ],

    outline: [2, 3],

    sidebar: [
      {
        text: "📖 Getting Started",
        items: [
          {
            text: "About",
            link: "/getting-started/about",
          },
          {
            text: "Gallery",
            link: "/getting-started/gallery",
          },
          {
            text: "Installation",
            link: "/getting-started/installation",
          },
          {
            text: "Tips",
            link: "/getting-started/tips",
          },
        ],
      },
      {
        text: "⚙️  App Configs",
        items: [
          {
            text: "Browser",
            link: "/app-confs/browser",
          },
          {
            text: "Hyprland",
            link: "/app-confs/hyprland",
          },
          {
            text: "Neovim",
            link: "/app-confs/neovim",
          },
          {
            text: "VSCodium",
            link: "/app-confs/vscodium",
          },
        ],
      },
	  {
		  text: "📝 ToDos",
		  items: [
			  {
				  text: "Yadm",
				  link: "todo/yadm"
			  }
		  ]
	  },
      {
        text: "📖 Other",
        items: [
          {
            text: "Credits",
            link: "/other/credits",
          },
          {
            text: "FAQ",
            link: "/other/FAQ",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Skiftstar/dotfiles" },
    ],

    search: {
      provider: "local",
    },

    footer: {
    },

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },
});
