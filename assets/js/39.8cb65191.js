(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{716:function(t,a,e){"use strict";e.r(a);var s=e(30),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"local-manga"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#local-manga"}},[t._v("#")]),t._v(" Local manga")]),t._v(" "),e("p",[t._v("Follow the steps below to create local manga.")]),t._v(" "),e("ol",[e("li",[t._v("Create a folder named "),e("code",[t._v("local")]),t._v(" in the "),e("code",[t._v("/Tachiyomi/")]),t._v(" folder.\n"),e("ul",[e("li",[t._v(" The "),e("code",[t._v("/Tachiyomi/")]),t._v(" folder is located in the root of phone's "),e("strong",[t._v("internal storage")]),t._v(" or "),e("strong",[t._v("external SD card")]),t._v(" and it's "),e("strong",[t._v("not related")]),t._v(" to the "),e("code",[t._v("eu.kanade.tachiyomi/")]),t._v(" folder or the download location in the settings.")])])]),t._v(" "),e("li",[t._v("Place correctly structured manga inside "),e("code",[t._v("/Tachiyomi/local/")]),t._v(".\n"),e("ul",[e("li",[t._v("Optional: If adding manga in folders, add a file named "),e("code",[t._v(".nomedia")]),t._v(" to the local folder so images do not show up in the gallery")])])]),t._v(" "),e("li",[t._v("You can then access the manga in "),e("Navigation",{attrs:{item:"browse"}}),t._v(" → "),e("strong",[t._v("Local source")]),t._v(".")],1)]),t._v(" "),e("p",[t._v("If you add more chapters then you'll have to manually refresh the chapter list (by pulling down the list).")]),t._v(" "),e("p",[t._v("Supported chapter formats are folder with pictures inside (such as "),e("code",[t._v(".jpg")]),t._v(", "),e("code",[t._v(".png")]),t._v(", etc), "),e("code",[t._v("ZIP")]),t._v("/"),e("code",[t._v("CBZ")]),t._v(", "),e("code",[t._v("RAR")]),t._v("/"),e("code",[t._v("CBR")]),t._v(" and "),e("code",[t._v("EPUB")]),t._v(". But expect better performance with directories and "),e("code",[t._v("ZIP")]),t._v("/"),e("code",[t._v("CBZ")]),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block c-warning"},[e("h4",{staticClass:"c-title"}),e("p",[t._v("Remember to give the app storage permissions on "),e("strong",[t._v("Android 6")]),t._v(" and newer.")])]),e("h2",{attrs:{id:"folder-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#folder-structure"}},[t._v("#")]),t._v(" Folder Structure")]),t._v(" "),e("p",[t._v("Tachiyomi requires a specific folder structure for local manga to be correctly processed. Local manga will be read from the "),e("code",[t._v("Tachiyomi/local")]),t._v(" folder. Each manga must have a "),e("code",[t._v("Manga")]),t._v(" folder and a "),e("code",[t._v("Chapter")]),t._v(" folder. Images will then go into the chapter folder. See below for more information on archive files. You can refer to the following example:")]),t._v(" "),e("div",{staticClass:"guide"},[e("p",{staticClass:"title"},[t._v("Example (Folder)")]),e("div",{staticClass:"side-by-side"},[e("ul",{staticClass:"file-tree"},[e("li",[t._v("\n\t\t\t/sdcard/Tachiyomi/local\n\t\t\t"),e("ul",[e("li",[e("span",{staticClass:"ft-icon ft-folder"},[t._v("Manga title")]),t._v(" "),e("ul",[e("li",[e("span",{staticClass:"ft-icon ft-folder"},[t._v("ch1")]),t._v(" "),e("ul",[e("span",{staticClass:"ft-icon ft-image"},[t._v("images")])])]),t._v(" "),e("li",[e("span",{staticClass:"ft-icon ft-folder"},[t._v("ch2")]),t._v(" "),e("ul",[e("span",{staticClass:"ft-icon ft-image"},[t._v("images")])])]),t._v(" "),e("span",{staticClass:"ft-icon ft-image"},[t._v("cover.jpg")])])]),t._v(" "),e("li",[t._v("...")])])])]),t._v(" "),e("ul",{staticClass:"file-tree"},[e("li",[t._v("\n\t\t\t/storage/18F5-2C11/Tachiyomi/local\n\t\t\t"),e("ul",[e("li",[e("span",{staticClass:"ft-icon ft-folder"},[t._v("Manga title")]),t._v(" "),e("ul",[e("li",[e("span",{staticClass:"ft-icon ft-folder"},[t._v("ch3")]),t._v(" "),e("ul",[e("span",{staticClass:"ft-icon ft-image"},[t._v("images")])])]),t._v(" "),e("li",[e("span",{staticClass:"ft-icon ft-folder"},[t._v("ch4")]),t._v(" "),e("ul",[e("span",{staticClass:"ft-icon ft-image"},[t._v("images")])])])])]),t._v(" "),e("li",[t._v("...")])])])])])]),e("p",[t._v("Tachiyomi will see four chapters in a single manga.\nThe path to the folder with images must contain both the manga title and the chapter name (as seen above).")]),t._v(" "),e("div",{staticClass:"guide g-empty"},[e("figure",{staticClass:"centered"},[e("h4",[t._v("Example structure using the file manager")]),t._v(" "),e("p",[t._v("Here, the manga name is "),e("strong",[t._v("test")]),t._v(" so the file structure is "),e("code",[t._v("/Tachiyomi/local/test/ch1/images")]),t._v(".")]),t._v(" "),e("img",{staticClass:"zoomable",attrs:{height:"300",src:t.$withBase("/assets/guides_local-manga.jpg")}})])]),e("h2",{attrs:{id:"archive-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#archive-files"}},[t._v("#")]),t._v(" Archive Files")]),t._v(" "),e("p",[t._v("Archive files such as "),e("code",[t._v("ZIP")]),t._v("/"),e("code",[t._v("CBZ")]),t._v(" are supported but the folder structure inside is not. Any folders inside the archive file are ignored. You must place the archive inside the "),e("code",[t._v("Manga")]),t._v(" folder where the name will become the "),e("code",[t._v("Chapter")]),t._v(" title. All images inside the archive regardless of folder structure will become pages for that chapter.")]),t._v(" "),e("div",{staticClass:"guide"},[e("p",{staticClass:"title"},[t._v("Example (ZIP)")]),e("ul",{staticClass:"file-tree"},[e("li",[t._v("\n\t\t\t/sdcard/Tachiyomi/local\n\t\t\t"),e("ul",[e("li",[e("span",{staticClass:"ft-icon ft-folder"},[t._v("Manga title")]),t._v(" "),e("ul",[e("li",[e("span",{staticClass:"ft-icon ft-zip"},[t._v("ch1.zip")]),t._v(" "),e("ul",[e("span",{staticClass:"ft-icon ft-image"},[t._v("images")])])]),t._v(" "),e("li",[e("span",{staticClass:"ft-icon ft-zip"},[t._v("ch2.zip")]),t._v(" "),e("ul",[e("li",[e("span",{staticClass:"ft-icon ft-folder"},[t._v("ch2")]),t._v(" "),e("ul",[e("span",{staticClass:"ft-icon ft-image"},[t._v("images")])])])])]),t._v(" "),e("span",{staticClass:"ft-icon ft-image"},[t._v("cover.jpg")])])]),t._v(" "),e("li",[t._v("...")])])])])]),e("h2",{attrs:{id:"advanced"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced"}},[t._v("#")]),t._v(" Advanced")]),t._v(" "),e("h3",{attrs:{id:"editing-local-manga-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#editing-local-manga-details"}},[t._v("#")]),t._v(" Editing local manga details")]),t._v(" "),e("p",[t._v("It is possible to add details to local manga. Like manga from other catalogs, you add information about the manga such as the author, artist, description, and genre tags.")]),t._v(" "),e("p",[t._v("To import details along with your local manga, you have to create a json file. It can be named anything but it must be placed within the "),e("strong",[t._v("Manga")]),t._v(" folder. A standard file name is "),e("code",[t._v("details.json")]),t._v(". This file will contain the extended details about the manga in the "),e("code",[t._v("JSON")]),t._v(" format. You can see the example below on how to build the file. Once the file is there, the app should load the data when you first open the manga or you can pull down to refresh the details.")]),t._v(" "),e("p",[t._v("You can copy the following example and edit the details as needed:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Title"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Author"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"artist"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Artist"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Description"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"genre"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"genre 1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"genre 2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"etc"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_status values"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 = Unknown"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1 = Ongoing"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2 = Completed"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3 = Licensed"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"using-a-custom-cover-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-a-custom-cover-image"}},[t._v("#")]),t._v(" Using a custom cover image")]),t._v(" "),e("p",[t._v("It is also possible to use a custom image as a cover for each local manga.")]),t._v(" "),e("p",[t._v("To do this, you only need to place the image file, that needs to be named\n"),e("code",[t._v("cover.jpg")]),t._v(", in the root of the manga folder. The app will then use your\ncustom image in the local source listing.")])])}),[],!1,null,null,null);a.default=n.exports}}]);