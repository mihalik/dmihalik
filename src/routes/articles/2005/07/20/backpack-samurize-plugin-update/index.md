---
title: "Backpack Samurize Plugin Update"
date: "2005-07-20"
---

I updated my Backpack plugin for Samurize. There are many updates since the [first release](http://dmihalik.com/PermaLink,guid,0f5eea0d-ab84-4b00-a2f2-035759a331cf.aspx). There are now entry points for a couple of the different Backpack content types and also a aggregate method that will collect list items from all your pages. Here's my (short) documentation for the new entry points. Don't forget to follow the [important "Note"](http://dmihalik.com/PermaLink,guid,0f5eea0d-ab84-4b00-a2f2-035759a331cf.aspx) mentioned in the first release. I plan on posting a couple example configs in the next couple nights.

GetTodoForPage pageid - See below. completed - Set to "true" if you only wish to see completed items. Otherwise, set to "false and just see uncompleted items. format - 0 - Item text, 1 - \\n (Example: "\[ \] {0}{1}")

GetTodoForAllPages contains - Use this to only return todo items that contain the specified string. Leave empty if you wish to return all items. format - 0 - Item text, 1 - Page title, 2 - \\n (Example: "\[ \] {0} - page: {1}{2}")

GetAllPages format - 0 - Page title, 1 - Page id, 2 - \\n (Example: "{0} ({1}){2}")

GetNotesForPage pageid - See below. format - 0 - Note title, 1 - Note text, 2 - Note Date/Time, 3 - \\n (Example: "Title: {0}{3}Date: {2}{3}Body:{1}{3}") dateformat - See below. (Example: "hh:mmtt MM/dd/yy")

GetAllReminders format - 0 - Reminder text, 1 - Reminder Date/Time, 2 - \\n dateformat - See below. (Example: "hh:mmtt MM/dd/yy")

pageid - The number of the page you wish to get use. You can find this by using the GetAllPages method in this plugin or by looking at your URL's on backpackit.com. This id is the number in the URL after /page/. Finding the id of your home page is a bit more difficult. I usually find it by clicking on the "renew address" button and looking at the URL. You can also do this by looking at the source.

format - Uses .NET formatting rules. More information can be found [here](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpguide/html/cpconCompositeFormatting.asp). The short story is that "{0}" will get replaced with the first item, "{1}" for the second, etc. I have made the final format item a line return for each entry.

dateformat - .NET date formatting rules. Details [here](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpref/html/frlrfsystemglobalizationdatetimeformatinfoclasstopic.asp).

Download the newest [backpackplugin2.zip](http://dmihalik.com/wp-content/uploads/2008/01/backpackplugin2.zip "backpackplugin2.zip").
